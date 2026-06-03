from __future__ import annotations

import json
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any
import json

from pydantic import BaseModel, Field


class TokenUsageEntry(BaseModel):
    timestamp: str
    provider: str | None = None
    model: str | None = None
    label: str
    input_tokens: int = 0
    output_tokens: int = 0
    cache_read_tokens: int = 0
    cache_write_tokens: int = 0
    total_tokens: int = 0
    total_cost: float = 0.0


class ModelUsageSummary(BaseModel):
    key: str
    provider: str | None = None
    model: str | None = None
    message_count: int = 0
    total_tokens: int = 0
    input_tokens: int = 0
    output_tokens: int = 0
    cache_read_tokens: int = 0
    cache_write_tokens: int = 0


class TokenUsageSnapshot(BaseModel):
    session_count: int = 0
    assistant_message_count: int = 0
    total_tokens: int = 0
    input_tokens: int = 0
    output_tokens: int = 0
    cache_read_tokens: int = 0
    cache_write_tokens: int = 0
    total_cost: float = 0.0
    sessions: list[str] = Field(default_factory=list)
    models: list[ModelUsageSummary] = Field(default_factory=list)
    entries: list[TokenUsageEntry] = Field(default_factory=list)


@dataclass
class _Usage:
    input_tokens: int = 0
    output_tokens: int = 0
    cache_read_tokens: int = 0
    cache_write_tokens: int = 0
    total_tokens: int = 0
    total_cost: float = 0.0


class TokenUsageRecorder:
    def record_sessions(self, session_paths: list[Path], output_path: Path | None = None) -> TokenUsageSnapshot:
        snapshot = TokenUsageSnapshot()
        snapshot.sessions = [path.stem for path in session_paths]
        snapshot.session_count = len(session_paths)

        model_aggregates: dict[str, dict[str, Any]] = defaultdict(
            lambda: {
                "provider": None,
                "model": None,
                "message_count": 0,
                "total_tokens": 0,
                "input_tokens": 0,
                "output_tokens": 0,
                "cache_read_tokens": 0,
                "cache_write_tokens": 0,
            }
        )

        entries: list[TokenUsageEntry] = []
        rolling_prompt_chars = 0
        for session_path in session_paths:
            for record in self._load_jsonl(session_path):
                if record.get("type") != "message":
                    continue

                message = record.get("message", {})
                if not isinstance(message, dict):
                    continue
                role = message.get("role")
                if role != "assistant":
                    rolling_prompt_chars = self._estimate_text_chars(message)
                    continue

                usage = self._extract_usage(message)
                if usage.total_tokens <= 0 and usage.input_tokens <= 0 and usage.output_tokens <= 0:
                    usage = self._extract_usage(record)
                if usage.total_tokens <= 0 and usage.input_tokens <= 0 and usage.output_tokens <= 0:
                    usage = self._estimate_usage(message, rolling_prompt_chars)
                if usage.total_tokens <= 0 and usage.input_tokens <= 0 and usage.output_tokens <= 0:
                    continue

                snapshot.assistant_message_count += 1
                snapshot.total_tokens += usage.total_tokens
                snapshot.input_tokens += usage.input_tokens
                snapshot.output_tokens += usage.output_tokens
                snapshot.cache_read_tokens += usage.cache_read_tokens
                snapshot.cache_write_tokens += usage.cache_write_tokens
                snapshot.total_cost += usage.total_cost

                provider = self._coerce_str(message.get("provider"))
                model = self._coerce_str(message.get("model"))
                key = f"{provider or 'unknown'}::{model or 'unknown'}"
                aggregate = model_aggregates[key]
                aggregate["provider"] = provider
                aggregate["model"] = model
                aggregate["message_count"] += 1
                aggregate["total_tokens"] += usage.total_tokens
                aggregate["input_tokens"] += usage.input_tokens
                aggregate["output_tokens"] += usage.output_tokens
                aggregate["cache_read_tokens"] += usage.cache_read_tokens
                aggregate["cache_write_tokens"] += usage.cache_write_tokens

                entries.append(
                    TokenUsageEntry(
                        timestamp=self._coerce_str(record.get("timestamp")) or "",
                        provider=provider,
                        model=model,
                        label=self._extract_label(message),
                        input_tokens=usage.input_tokens,
                        output_tokens=usage.output_tokens,
                        cache_read_tokens=usage.cache_read_tokens,
                        cache_write_tokens=usage.cache_write_tokens,
                        total_tokens=usage.total_tokens,
                        total_cost=usage.total_cost,
                    )
                )
                rolling_prompt_chars = max(rolling_prompt_chars // 2, 0)

        snapshot.models = [
            ModelUsageSummary(
                key=key,
                provider=data["provider"],
                model=data["model"],
                message_count=data["message_count"],
                total_tokens=data["total_tokens"],
                input_tokens=data["input_tokens"],
                output_tokens=data["output_tokens"],
                cache_read_tokens=data["cache_read_tokens"],
                cache_write_tokens=data["cache_write_tokens"],
            )
            for key, data in sorted(
                model_aggregates.items(),
                key=lambda item: item[1]["total_tokens"],
                reverse=True,
            )
        ]
        snapshot.entries = sorted(entries, key=lambda item: item.timestamp)[-16:]

        if output_path is not None:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(snapshot.model_dump_json(indent=2), encoding="utf-8")

        return snapshot

    def _estimate_usage(self, message: dict[str, Any], prompt_chars: int) -> _Usage:
        output_chars = self._estimate_text_chars(message)
        if output_chars <= 0 and prompt_chars <= 0:
            return _Usage()
        est_input = max(0, int(round(prompt_chars / 3.6)))
        est_output = max(1, int(round(output_chars / 3.6)))
        return _Usage(
            input_tokens=est_input,
            output_tokens=est_output,
            cache_read_tokens=0,
            cache_write_tokens=0,
            total_tokens=est_input + est_output,
            total_cost=0.0,
        )

    def _estimate_text_chars(self, message: dict[str, Any]) -> int:
        content = message.get("content")
        if isinstance(content, str):
            return len(content)
        if not isinstance(content, list):
            return 0
        total = 0
        for item in content:
            if isinstance(item, str):
                total += len(item)
                continue
            if not isinstance(item, dict):
                continue
            item_type = item.get("type")
            if item_type in {"text", "thinking"}:
                text = item.get("text") if item_type == "text" else item.get("thinking")
                if isinstance(text, str):
                    total += len(text)
            elif item_type == "toolCall":
                total += len(str(item.get("name") or "toolCall"))
                args = item.get("arguments")
                if isinstance(args, dict):
                    total += len(json.dumps(args, ensure_ascii=False))
                elif isinstance(args, str):
                    total += len(args)
        return total

    def _load_jsonl(self, path: Path) -> list[dict]:
        try:
            return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]
        except (OSError, json.JSONDecodeError):
            return []

    def _extract_usage(self, message: dict[str, Any]) -> _Usage:
        usage_payload = None
        for key in ("usage", "tokenUsage", "modelUsage", "token_usage"):
            candidate = message.get(key)
            if isinstance(candidate, dict):
                usage_payload = candidate
                break
        if usage_payload is None:
            return _Usage()

        input_tokens = self._first_int(
            usage_payload,
            ("input",),
            ("input_tokens",),
            ("inputTokens",),
            ("prompt_tokens",),
            ("promptTokens",),
            ("inputTokenCount",),
            ("promptTokenCount",),
        )
        output_tokens = self._first_int(
            usage_payload,
            ("output",),
            ("output_tokens",),
            ("outputTokens",),
            ("completion_tokens",),
            ("completionTokens",),
            ("outputTokenCount",),
            ("completionTokenCount",),
        )
        cache_read_tokens = self._first_int(
            usage_payload,
            ("cacheRead",),
            ("cache_read",),
            ("cachedTokens",),
            ("cache_read_tokens",),
        )
        cache_write_tokens = self._first_int(
            usage_payload,
            ("cacheWrite",),
            ("cache_write",),
            ("cache_write_tokens",),
        )
        total_tokens = self._first_int(
            usage_payload,
            ("totalTokens",),
            ("total_tokens",),
            ("total",),
        )
        if total_tokens <= 0:
            total_tokens = input_tokens + output_tokens + cache_read_tokens + cache_write_tokens

        total_cost = self._first_float(
            usage_payload,
            ("cost", "total"),
            ("totalCost",),
        )

        return _Usage(
            input_tokens=input_tokens,
            output_tokens=output_tokens,
            cache_read_tokens=cache_read_tokens,
            cache_write_tokens=cache_write_tokens,
            total_tokens=total_tokens,
            total_cost=total_cost,
        )

    def _extract_label(self, message: dict[str, Any]) -> str:
        for item in message.get("content", []):
            if not isinstance(item, dict):
                continue
            if item.get("type") == "toolCall":
                return str(item.get("name") or "toolCall")
            if item.get("type") == "text":
                text = self._coerce_str(item.get("text")) or ""
                compact = " ".join(text.split())
                if compact:
                    return compact[:64]
        stop_reason = self._coerce_str(message.get("stopReason"))
        return stop_reason or "assistant_message"

    @staticmethod
    def _coerce_str(value: Any) -> str | None:
        return value if isinstance(value, str) else None

    @staticmethod
    def _first_int(payload: dict[str, Any], *paths: tuple[str, ...]) -> int:
        for path in paths:
            value = TokenUsageRecorder._nested_get(payload, *path)
            if isinstance(value, (int, float)):
                return int(value)
            if isinstance(value, str) and value.isdigit():
                return int(value)
        return 0

    @staticmethod
    def _first_float(payload: dict[str, Any], *paths: tuple[str, ...]) -> float:
        for path in paths:
            value = TokenUsageRecorder._nested_get(payload, *path)
            if isinstance(value, (int, float)):
                return float(value)
            if isinstance(value, str):
                try:
                    return float(value)
                except ValueError:
                    continue
        return 0.0

    @staticmethod
    def _nested_get(payload: dict[str, Any], *keys: str) -> Any:
        current: Any = payload
        for key in keys:
            if not isinstance(current, dict) or key not in current:
                return None
            current = current[key]
        return current
