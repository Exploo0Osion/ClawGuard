from __future__ import annotations

import json
import os
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Protocol
from urllib.parse import urlsplit

import requests
from dotenv import dotenv_values

from agentdojo.static_analysis.repoaudit.prompts import (
    ANALYZE_FUNCTION_FEW_SHOT,
    ANALYZE_FUNCTION_PROMPT,
    VALIDATE_PATH_FEW_SHOT,
    VALIDATE_PATH_PROMPT,
    build_analyze_function_prompt,
    build_validate_path_prompt,
)


DEFAULT_REPOAUDIT_MODEL = "Qwen3.5-35B-A3B"
DEFAULT_REPOAUDIT_BASE_URL = "https://dashscope.aliyuncs.com/compatible-mode/v1"
DEFAULT_REPOAUDIT_TIMEOUT = 30.0
DEFAULT_REPOAUDIT_MAX_PROMPTS = 8
DEFAULT_REPOAUDIT_MAX_INPUT_CHARS = 24000
DEFAULT_REPOAUDIT_MAX_OUTPUT_TOKENS = 500
KNOWN_DASHSCOPE_BASE_URLS = [
    "https://dashscope.aliyuncs.com/compatible-mode/v1",
    "https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    "https://dashscope-us.aliyuncs.com/compatible-mode/v1",
    "https://cn-hongkong.dashscope.aliyuncs.com/compatible-mode/v1",
]


class RepoAuditPostCallable(Protocol):
    def __call__(
        self,
        url: str,
        *,
        headers: dict[str, str],
        json: dict[str, Any],
        timeout: float,
    ) -> Any: ...


@dataclass
class RepoAuditLLMConfig:
    enabled: bool
    api_key: str | None
    model: str
    base_url: str
    timeout: float
    max_prompts: int
    max_input_chars: int
    max_output_tokens: int
    execution_mode: str = "llm_only"


@dataclass
class RepoAuditBudget:
    max_prompts: int
    max_input_chars: int
    prompts_used: int = 0
    input_chars_used: int = 0
    blocked_reasons: list[str] = field(default_factory=list)

    def allow(self, payload_chars: int) -> bool:
        if self.prompts_used >= self.max_prompts:
            self.blocked_reasons.append("max prompt budget reached")
            return False
        if self.input_chars_used + payload_chars > self.max_input_chars:
            self.blocked_reasons.append("max input-char budget reached")
            return False
        self.prompts_used += 1
        self.input_chars_used += payload_chars
        return True

    def to_dict(self) -> dict[str, Any]:
        return {
            "max_prompts": self.max_prompts,
            "max_input_chars": self.max_input_chars,
            "prompts_used": self.prompts_used,
            "input_chars_used": self.input_chars_used,
            "blocked_reasons": list(self.blocked_reasons),
        }


def _load_dotenv_defaults() -> dict[str, str]:
    candidate_paths = [
        Path.cwd() / ".env",
        Path(__file__).resolve().parents[4] / ".env",
    ]
    resolved: dict[str, str] = {}
    for env_path in candidate_paths:
        if not env_path.exists():
            continue
        loaded = dotenv_values(env_path)
        resolved.update(
            {key: value for key, value in loaded.items() if isinstance(key, str) and isinstance(value, str)}
        )
    return resolved


def _resolve_environ(environ: dict[str, str] | None = None) -> dict[str, str]:
    resolved = _load_dotenv_defaults()
    resolved.update(os.environ)
    if environ is not None:
        resolved.update(environ)
    return resolved


def load_repoaudit_llm_config(environ: dict[str, str] | None = None) -> RepoAuditLLMConfig:
    env = _resolve_environ(environ)
    timeout_raw = env.get(
        "CLAWGUARD_LLM_TIMEOUT",
        env.get("REPOAUDIT_TIMEOUT", env.get("QWEN_TIMEOUT", str(DEFAULT_REPOAUDIT_TIMEOUT))),
    )
    max_prompts_raw = env.get("REPOAUDIT_MAX_PROMPTS", str(DEFAULT_REPOAUDIT_MAX_PROMPTS))
    max_input_chars_raw = env.get("REPOAUDIT_MAX_INPUT_CHARS", str(DEFAULT_REPOAUDIT_MAX_INPUT_CHARS))
    max_output_tokens_raw = env.get("REPOAUDIT_MAX_OUTPUT_TOKENS", str(DEFAULT_REPOAUDIT_MAX_OUTPUT_TOKENS))
    try:
        timeout = float(timeout_raw)
    except ValueError:
        timeout = DEFAULT_REPOAUDIT_TIMEOUT
    try:
        max_prompts = int(max_prompts_raw)
    except ValueError:
        max_prompts = DEFAULT_REPOAUDIT_MAX_PROMPTS
    try:
        max_input_chars = int(max_input_chars_raw)
    except ValueError:
        max_input_chars = DEFAULT_REPOAUDIT_MAX_INPUT_CHARS
    try:
        max_output_tokens = int(max_output_tokens_raw)
    except ValueError:
        max_output_tokens = DEFAULT_REPOAUDIT_MAX_OUTPUT_TOKENS

    enabled = env.get("REPOAUDIT_LLM_MODE", "0").lower() in {"1", "true", "yes", "on"}
    if env.get("CLAWGUARD_LLM_ENABLED") is not None:
        enabled = env.get("CLAWGUARD_LLM_ENABLED", "").lower() in {"1", "true", "yes", "on"}
    execution_mode = "llm_only" if enabled else "disabled"
    return RepoAuditLLMConfig(
        enabled=enabled,
        api_key=env.get("CLAWGUARD_LLM_API_KEY", env.get("QWEN_API_KEY", env.get("DASHSCOPE_API_KEY"))),
        model=env.get("CLAWGUARD_LLM_MODEL", env.get("REPOAUDIT_MODEL", env.get("QWEN_MODEL", DEFAULT_REPOAUDIT_MODEL))),
        base_url=env.get(
            "CLAWGUARD_LLM_BASE_URL",
            env.get("REPOAUDIT_BASE_URL", env.get("QWEN_BASE_URL", DEFAULT_REPOAUDIT_BASE_URL)),
        ).rstrip("/"),
        timeout=timeout,
        max_prompts=max_prompts,
        max_input_chars=max_input_chars,
        max_output_tokens=max_output_tokens,
        execution_mode=execution_mode,
    )


def _parse_json_payload(content: str) -> dict[str, Any]:
    try:
        return json.loads(content)
    except json.JSONDecodeError:
        start = content.find("{")
        end = content.rfind("}")
        if start == -1 or end == -1 or end <= start:
            raise
        return json.loads(content[start : end + 1])


def _compact_json_payload(payload: dict[str, Any]) -> str:
    return json.dumps(payload, ensure_ascii=True, separators=(",", ":"))


def _normalize_model_name(model_name: str) -> str:
    normalized = model_name.strip()
    if normalized.lower().startswith("qwen"):
        return normalized.lower()
    return normalized


def _candidate_base_urls(base_url: str) -> list[str]:
    normalized = base_url.rstrip("/")
    candidates = [normalized]
    parsed = urlsplit(normalized)
    hostname = parsed.netloc.lower()
    if "aliyuncs.com" not in hostname:
        return candidates
    for known in KNOWN_DASHSCOPE_BASE_URLS:
        if known not in candidates:
            candidates.append(known)
    return candidates


class RepoAuditLLMClient:
    def __init__(
        self,
        config: RepoAuditLLMConfig | None = None,
        *,
        environ: dict[str, str] | None = None,
        post: RepoAuditPostCallable | None = None,
    ) -> None:
        self.config = load_repoaudit_llm_config(environ) if config is None else config
        if post is None:
            parsed = urlsplit(self.config.base_url.rstrip("/"))
            if "aliyuncs.com" in parsed.netloc.lower():
                session = requests.Session()
                session.trust_env = False
                self.post = session.post
            else:
                self.post = requests.post
        else:
            self.post = post
        self.budget = RepoAuditBudget(
            max_prompts=self.config.max_prompts,
            max_input_chars=self.config.max_input_chars,
        )
        self.errors: list[str] = []

    @property
    def available(self) -> bool:
        return self.config.enabled and bool(self.config.api_key)

    def analyze_function(self, payload: dict[str, Any]) -> dict[str, Any] | None:
        return self._request_json(
            task_prompt=build_analyze_function_prompt(payload),
            payload=payload,
            few_shot=ANALYZE_FUNCTION_FEW_SHOT,
        )

    def validate_path(self, payload: dict[str, Any]) -> dict[str, Any] | None:
        return self._request_json(
            task_prompt=build_validate_path_prompt(payload),
            payload=payload,
            few_shot=VALIDATE_PATH_FEW_SHOT,
        )

    def _request_json(
        self,
        *,
        task_prompt: str,
        payload: dict[str, Any],
        few_shot: dict[str, Any] | None = None,
    ) -> dict[str, Any] | None:
        if not self.available:
            if self.config.enabled and not self.config.api_key:
                self.errors.append("REPOAUDIT_LLM_MODE enabled but QWEN_API_KEY is missing")
            return None

        request_user_content = task_prompt + "\n"
        if few_shot is not None:
            request_user_content += (
                "Example in:"
                + _compact_json_payload(few_shot["input"])
                + "\nExample out:"
                + _compact_json_payload(few_shot["output"])
                + "\n"
            )
        request_user_content += _compact_json_payload(payload)
        payload_text = request_user_content
        if not self.budget.allow(len(payload_text)):
            return None

        request_payload = {
            "model": _normalize_model_name(self.config.model),
            "messages": [
                {
                    "role": "system",
                    "content": (
                        "You are the model component of a repository code auditor. "
                        "Return strict JSON only. Be concise, path-sensitive, and only infer facts grounded in the provided program context."
                    ),
                },
                {"role": "user", "content": request_user_content},
            ],
            "temperature": 0.0,
            "max_tokens": self.config.max_output_tokens,
            "response_format": {"type": "json_object"},
        }
        headers = {
            "Authorization": f"Bearer {self.config.api_key}",
            "Content-Type": "application/json",
        }

        last_error: Exception | None = None
        for candidate_base_url in _candidate_base_urls(self.config.base_url):
            try:
                response = self.post(
                    f"{candidate_base_url}/chat/completions",
                    headers=headers,
                    json=request_payload,
                    timeout=self.config.timeout,
                )
                response.raise_for_status()
                body = response.json()
                content = body["choices"][0]["message"]["content"]
                return _parse_json_payload(content)
            except requests.HTTPError as error:
                last_error = error
                status_code = getattr(error.response, "status_code", None)
                if status_code == 404:
                    self.errors.append(
                        f"RepoAudit LLM request got 404 at {candidate_base_url}; trying next compatible endpoint if available"
                    )
                    continue
                response_text = ""
                if getattr(error, "response", None) is not None:
                    try:
                        response_text = str(error.response.text)[:300]
                    except Exception:
                        response_text = ""
                self.errors.append(f"RepoAudit LLM request failed at {candidate_base_url}: status={status_code} body={response_text}")
                return None
            except requests.RequestException as error:
                last_error = error
                self.errors.append(f"RepoAudit LLM request failed at {candidate_base_url}: {error}")
                return None
            except (KeyError, IndexError, TypeError, ValueError, json.JSONDecodeError) as error:
                last_error = error
                self.errors.append(f"RepoAudit LLM response parsing failed at {candidate_base_url}: {error}")
                return None
        if last_error is not None:
            self.errors.append("RepoAudit LLM exhausted compatible endpoints without a successful response")
        return None

    def diagnostics(self) -> dict[str, Any]:
        return {
            "enabled": self.config.enabled,
            "available": self.available,
            "execution_mode": self.config.execution_mode,
            "model": self.config.model,
            "budget": self.budget.to_dict(),
            "errors": list(self.errors),
        }
