from __future__ import annotations

import hashlib
import json
import os
import re
import threading
from datetime import datetime
from pathlib import Path
from typing import Any

try:
    from .core_adapter import (
        audit_repository_path,
        audit_text_content,
        is_textual_file,
        infer_task_capabilities,
        llm_semantic_review_enabled,
        read_text_best_effort,
        repository_signal_from_audit,
        semantic_review_static_audit,
        skill_name_from_label,
        static_signal_from_audit,
        summarize_audit_collection,
        summarize_findings,
        build_finding_from_repository_audit,
        build_finding_from_static_audit,
    )
    from .openclaw_env import (
        OpenClawEnvironment,
        collect_recent_session_paths,
        detect_openclaw_environment,
        resolve_runtime_path,
    )
    from .sample_paths import resolve_sample_roots
    from .token_usage import TokenUsageRecorder
except ImportError:
    from core_adapter import (
        audit_repository_path,
        audit_text_content,
        is_textual_file,
        infer_task_capabilities,
        llm_semantic_review_enabled,
        read_text_best_effort,
        repository_signal_from_audit,
        semantic_review_static_audit,
        skill_name_from_label,
        static_signal_from_audit,
        summarize_audit_collection,
        summarize_findings,
        build_finding_from_repository_audit,
        build_finding_from_static_audit,
    )
    from openclaw_env import (
        OpenClawEnvironment,
        collect_recent_session_paths,
        detect_openclaw_environment,
        resolve_runtime_path,
    )
    from sample_paths import resolve_sample_roots
    from token_usage import TokenUsageRecorder


BACKEND_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BACKEND_DIR.parent
SESSION_SCAN_LIMIT = int(os.environ.get("CLAWGUARD_SESSION_SCAN_LIMIT", "12"))
SESSION_LLM_MIN_SKILLS = int(os.environ.get("CLAWGUARD_SESSION_LLM_MIN_SKILLS", "2"))
SESSION_LLM_MIN_SCORE = int(os.environ.get("CLAWGUARD_SESSION_LLM_MIN_SCORE", "3"))
_SESSION_SUMMARY_CACHE: dict[str, tuple[str, dict[str, Any] | None]] = {}
_SESSION_SUMMARY_LOCK = threading.Lock()
_SEMANTIC_BUNDLE_CACHE: dict[str, dict[str, Any]] = {}
_SEMANTIC_BUNDLE_LOCK = threading.Lock()


def resolve_runtime_output_path() -> Path:
    custom_path = os.environ.get("CLAWGUARD_TOKEN_SNAPSHOT_PATH")
    if custom_path:
        return Path(custom_path).expanduser()

    runtime_root = os.environ.get("CLAWGUARD_RUNTIME_DIR")
    if runtime_root:
        return Path(runtime_root).expanduser() / "token_usage_snapshot.json"

    return Path.home() / ".clawguard" / "runtime" / "token_usage_snapshot.json"


TOKEN_OUTPUT_PATH = resolve_runtime_output_path()


def build_report(
    selected_session_id: str | None = None,
    selected_session_path: str | None = None,
) -> dict[str, Any]:
    environment = detect_openclaw_environment()
    token_recorder = TokenUsageRecorder()
    recent_session_paths = collect_recent_session_paths(environment, limit=SESSION_SCAN_LIMIT)
    requested_session_path = resolve_requested_session_path(
        environment,
        recent_session_paths,
        selected_session_id=selected_session_id,
        selected_session_path=selected_session_path,
    )
    recent_tokens = token_recorder.record_sessions(recent_session_paths, output_path=TOKEN_OUTPUT_PATH)

    if environment.detected:
        return build_live_report(
            environment,
            token_recorder,
            recent_session_paths,
            recent_tokens,
            requested_session_path=requested_session_path,
        )
    return build_demo_report(environment, recent_tokens)


def build_environment_report() -> dict[str, Any]:
    return detect_openclaw_environment().model_dump()


def build_token_usage_report(
    selected_session_id: str | None = None,
    selected_session_path: str | None = None,
) -> dict[str, Any]:
    environment = detect_openclaw_environment()
    token_recorder = TokenUsageRecorder()
    recent_paths = collect_recent_session_paths(environment, limit=SESSION_SCAN_LIMIT)
    requested_session_path = resolve_requested_session_path(
        environment,
        recent_paths,
        selected_session_id=selected_session_id,
        selected_session_path=selected_session_path,
    )
    recent_tokens = token_recorder.record_sessions(recent_paths, output_path=TOKEN_OUTPUT_PATH)
    current_tokens = select_current_tokens(
        token_recorder,
        recent_paths,
        preferred_session_path=requested_session_path,
    )
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "environment": environment.model_dump(),
        "current_session": current_tokens.model_dump(),
        "recent_sessions": recent_tokens.model_dump(),
    }


def build_live_report(
    environment: OpenClawEnvironment,
    token_recorder: TokenUsageRecorder,
    recent_session_paths: list[Path],
    recent_tokens,
    requested_session_path: Path | None = None,
) -> dict[str, Any]:
    session_paths_for_live = select_live_session_paths(
        environment,
        recent_session_paths,
        preferred_session_path=requested_session_path,
    )
    session_summaries = build_session_summaries(session_paths_for_live, environment)
    featured_session = select_featured_session(
        session_summaries,
        requested_session_path or environment.latest_session_path,
    )
    current_tokens = select_current_tokens(
        token_recorder,
        recent_session_paths,
        preferred_session_path=requested_session_path,
    )

    if featured_session is None:
        return build_empty_live_report(
            environment,
            current_tokens,
            recent_tokens,
            len(session_paths_for_live),
            requested_session_path=requested_session_path,
        )

    risk_signals = featured_session["risk_signals"]
    audit_findings = featured_session["audit_findings"]
    overview = {
        "alert_count": len(risk_signals),
        "active_skill_count": len(featured_session["skill_reads"]),
        "current_session_total_tokens": current_tokens.total_tokens,
        "session_count": len(recent_session_paths),
        "selected_session_event_count": len(featured_session["timeline"]),
        "selected_session_skill_reads": len(featured_session["skill_reads"]),
        "chain_score": featured_session["dynamic_chain"]["score"],
        "critical_count": sum(item["severity"] == "Critical" for item in risk_signals),
        "high_count": sum(item["severity"] == "High" for item in risk_signals),
        "medium_count": sum(item["severity"] == "Medium" for item in risk_signals),
    }

    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "source_mode": "live_openclaw",
        "environment": environment.model_dump(),
        "scenario": {
            "title": "ClawGuard OpenClaw Session Audit",
            "primary_task": featured_session["primary_task"],
            "task_prompt": featured_session["task_prompt"],
            "target_asset_path": featured_session["target_asset_path"],
            "log_path": featured_session["session_path"],
            "requested_capabilities": featured_session["requested_capabilities"],
        },
        "overview": overview,
        "token_usage": {
            "current_session": current_tokens.model_dump(),
            "recent_sessions": recent_tokens.model_dump(),
        },
        "session_activity": featured_session,
        "skill_inventory": featured_session["skill_reads"],
        "risk_signals": risk_signals,
        "audit_findings": audit_findings,
        "dynamic_chain": featured_session["dynamic_chain"],
        "timeline": featured_session["timeline"],
        "alerts": featured_session["alerts"],
    }


def build_demo_report(environment: OpenClawEnvironment, recent_tokens) -> dict[str, Any]:
    findings = build_demo_findings()
    risk_signals = findings_to_signals(findings)
    notes = list(environment.notes)
    notes.append("No live OpenClaw installation was detected, so ClawGuard is showing sample-backed static results.")
    environment = environment.model_copy(update={"notes": notes})

    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "source_mode": "demo_fallback",
        "environment": environment.model_dump(),
        "scenario": {
            "title": "ClawGuard Demo Audit",
            "primary_task": "skill_audit",
            "task_prompt": "Audit sample ClawGuard skill documents.",
            "target_asset_path": None,
            "log_path": None,
            "requested_capabilities": infer_task_capabilities("Audit sample ClawGuard skill documents."),
        },
        "overview": {
            "alert_count": len(risk_signals),
            "active_skill_count": len(findings),
            "current_session_total_tokens": 0,
            "session_count": 0,
            "selected_session_event_count": 0,
            "selected_session_skill_reads": 0,
            "chain_score": 0,
            "critical_count": sum(item["severity"] == "Critical" for item in risk_signals),
            "high_count": sum(item["severity"] == "High" for item in risk_signals),
            "medium_count": sum(item["severity"] == "Medium" for item in risk_signals),
        },
        "token_usage": {
            "current_session": TokenUsageRecorder().record_sessions([]).model_dump(),
            "recent_sessions": recent_tokens.model_dump(),
        },
        "session_activity": build_empty_session_activity(),
        "skill_inventory": [],
        "risk_signals": risk_signals,
        "audit_findings": findings,
        "dynamic_chain": build_empty_dynamic_chain(),
        "timeline": [],
        "alerts": [],
    }


def build_empty_live_report(
    environment: OpenClawEnvironment,
    current_tokens,
    recent_tokens,
    session_count: int,
    requested_session_path: Path | None = None,
) -> dict[str, Any]:
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "source_mode": "live_openclaw",
        "environment": environment.model_dump(),
        "scenario": {
            "title": "ClawGuard OpenClaw Session Audit",
            "primary_task": "session_audit",
            "task_prompt": "No recent OpenClaw session contained analyzable artifacts.",
            "target_asset_path": None,
            "log_path": str(requested_session_path) if requested_session_path else environment.latest_session_path,
            "requested_capabilities": [],
        },
        "overview": {
            "alert_count": 0,
            "active_skill_count": 0,
            "current_session_total_tokens": current_tokens.total_tokens,
            "session_count": session_count,
            "selected_session_event_count": 0,
            "selected_session_skill_reads": 0,
            "chain_score": 0,
            "critical_count": 0,
            "high_count": 0,
            "medium_count": 0,
        },
        "token_usage": {
            "current_session": current_tokens.model_dump(),
            "recent_sessions": recent_tokens.model_dump(),
        },
        "session_activity": build_empty_session_activity(),
        "skill_inventory": [],
        "risk_signals": [],
        "audit_findings": [],
        "dynamic_chain": build_empty_dynamic_chain(),
        "timeline": [],
        "alerts": [],
    }


def select_current_tokens(
    token_recorder: TokenUsageRecorder,
    recent_session_paths: list[Path],
    preferred_session_path: Path | None = None,
):
    if preferred_session_path is not None:
        return token_recorder.record_sessions([preferred_session_path])

    if not recent_session_paths:
        return token_recorder.record_sessions([])

    primary = token_recorder.record_sessions(recent_session_paths[:1])
    if primary.total_tokens > 0:
        return primary

    for path in recent_session_paths[1:]:
        snapshot = token_recorder.record_sessions([path])
        if snapshot.total_tokens > 0:
            return snapshot

    return primary


def build_session_summaries(session_paths: list[Path], environment: OpenClawEnvironment) -> list[dict[str, Any]]:
    summaries: list[dict[str, Any]] = []
    for session_path in session_paths:
        summary = _load_or_build_session_summary(session_path, environment)
        if summary is not None:
            summaries.append(summary)
    return summaries


def resolve_requested_session_path(
    environment: OpenClawEnvironment,
    recent_session_paths: list[Path],
    selected_session_id: str | None = None,
    selected_session_path: str | None = None,
) -> Path | None:
    normalized_id = (selected_session_id or "").strip()
    normalized_path = (selected_session_path or "").strip()

    resolved_direct = resolve_selected_session_path(environment, normalized_path)
    if resolved_direct is not None:
        return resolved_direct

    if not environment.detected or not environment.sessions_path or not normalized_id:
        return None

    candidates = recent_session_paths + collect_all_session_paths(Path(environment.sessions_path))
    deduped: list[Path] = []
    seen: set[str] = set()
    for path in candidates:
        key = str(path.resolve()) if path.exists() else str(path)
        if key in seen:
            continue
        seen.add(key)
        deduped.append(path)

    matches = [path for path in deduped if extract_session_id_from_path(path) == normalized_id]
    if not matches:
        return None

    matches.sort(key=lambda item: item.stat().st_mtime, reverse=True)
    return matches[0]


def resolve_selected_session_path(environment: OpenClawEnvironment, selected_session_path: str) -> Path | None:
    if not selected_session_path:
        return None

    raw_candidate = Path(selected_session_path).expanduser()
    candidates = [raw_candidate]
    if not raw_candidate.is_absolute() and environment.sessions_path:
        candidates.append(Path(environment.sessions_path) / raw_candidate)

    for candidate in candidates:
        if candidate.exists() and candidate.is_file():
            return candidate
    return None


def collect_all_session_paths(sessions_dir: Path) -> list[Path]:
    if not sessions_dir.exists():
        return []

    files = [path for path in sessions_dir.glob("*.jsonl") if path.is_file()]
    files.extend(path for path in sessions_dir.glob("*.jsonl.reset.*") if path.is_file())
    return files


def extract_session_id_from_path(session_path: Path) -> str:
    name = session_path.name
    marker = name.find(".jsonl")
    if marker == -1:
        return session_path.stem
    return name[:marker]


def select_live_session_paths(
    environment: OpenClawEnvironment,
    recent_session_paths: list[Path],
    preferred_session_path: Path | None = None,
) -> list[Path]:
    if preferred_session_path is not None:
        return [preferred_session_path]
    if environment.latest_session_path:
        latest_path = Path(environment.latest_session_path)
        return [latest_path]
    return recent_session_paths[:1]


def _load_or_build_session_summary(session_path: Path, environment: OpenClawEnvironment) -> dict[str, Any] | None:
    fingerprint = _session_fingerprint(session_path)
    cache_key = str(session_path.resolve())

    with _SESSION_SUMMARY_LOCK:
        cached = _SESSION_SUMMARY_CACHE.get(cache_key)
        if cached is not None and cached[0] == fingerprint:
            return cached[1]

    records = load_jsonl(session_path)
    if not records:
        summary = None
    else:
        summary = analyze_session(records, session_path, environment)

    with _SESSION_SUMMARY_LOCK:
        _SESSION_SUMMARY_CACHE[cache_key] = (fingerprint, summary)
    return summary


def _session_fingerprint(session_path: Path) -> str:
    try:
        stat = session_path.stat()
    except OSError:
        return "missing"
    llm_toggle = os.environ.get("CLAWGUARD_LLM_ENABLED", "")
    llm_model = os.environ.get("CLAWGUARD_LLM_MODEL", "")
    payload = (
        f"{session_path.resolve()}|{stat.st_mtime_ns}|{stat.st_size}|"
        f"{llm_toggle}|{llm_model}|{SESSION_LLM_MIN_SKILLS}|{SESSION_LLM_MIN_SCORE}"
    )
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def analyze_session(
    records: list[dict[str, Any]],
    session_path: Path,
    environment: OpenClawEnvironment,
) -> dict[str, Any] | None:
    user_index = find_last_user_index(records)
    if user_index is None:
        return None

    user_message = records[user_index].get("message", {})
    task_prompt = extract_message_text(user_message)
    effective_task_prompt = task_prompt or "Audit OpenClaw session artifacts."
    requested_capabilities = infer_task_capabilities(effective_task_prompt)
    target_asset_path = extract_svg_path(task_prompt)

    pending_tool_calls: dict[str, dict[str, Any]] = {}
    timeline: list[dict[str, Any]] = []
    risk_signals: list[dict[str, Any]] = []
    audit_findings: list[dict[str, Any]] = []
    alerts: list[dict[str, Any]] = []
    audited_keys: set[str] = set()
    session_audits: list[dict[str, Any]] = []
    skill_documents: list[dict[str, str]] = []
    skill_reads: list[dict[str, Any]] = []

    for record in records[user_index:]:
        if record.get("type") != "message":
            continue

        message = record.get("message", {})
        role = message.get("role")
        timestamp = short_timestamp(record.get("timestamp"))

        if role == "assistant":
            for item in message.get("content", []):
                if not isinstance(item, dict) or item.get("type") != "toolCall":
                    continue
                tool_name = str(item.get("name") or "")
                tool_call_id = str(item.get("id") or "")
                arguments = item.get("arguments", {}) if isinstance(item.get("arguments"), dict) else {}
                pending_tool_calls[tool_call_id] = {"tool_name": tool_name, "arguments": arguments}
                timeline.append(
                    {
                        "time": timestamp,
                        "type": classify_timeline_type(tool_name, arguments),
                        "detail": summarize_tool_call(tool_name, arguments),
                        "tone": classify_tone(tool_name, arguments),
                    }
                )
            continue

        if role != "toolResult":
            continue

        tool_call_id = str(message.get("toolCallId") or "")
        pending = pending_tool_calls.pop(tool_call_id, None)
        if pending is None:
            continue

        tool_name = pending["tool_name"]
        arguments = pending["arguments"]
        text_output = extract_message_text(message)
        path = str(arguments.get("path") or arguments.get("file_path") or "")

        if tool_name == "read" and path.endswith("/SKILL.md"):
            resolved = resolve_runtime_path(path, environment)
            label = path
            file_severity = "Low"

            content_for_audit = text_output.strip()
            if _looks_like_tool_error_payload(content_for_audit):
                content_for_audit = ""
            if not content_for_audit and resolved is not None and resolved.exists():
                content_for_audit = read_text_best_effort(resolved)
            if content_for_audit:
                skill_documents.append({"path": label, "content": content_for_audit})
                key = f"static::{label}"
                if key not in audited_keys:
                    audited_keys.add(key)
                    static_audit = audit_text_content(
                        file_name=label,
                        content=content_for_audit,
                        task_prompt=effective_task_prompt,
                        enable_semantic_review=False,
                    )
                    session_audits.append(static_audit)
                    file_severity = _record_static_audit(
                        static_audit,
                        label=label,
                        risk_signals=risk_signals,
                        audit_findings=audit_findings,
                    )
            if resolved is not None and resolved.exists():
                skill_reads.append(
                    {
                        "skill_path": label,
                        "skill_name": skill_name_from_label(label),
                        "resolved_path": str(resolved),
                        "read_count": 1,
                        "severity": file_severity,
                        "suspicious": file_severity in {"Critical", "High", "Medium"},
                        "document": "",
                    }
                )
            elif content_for_audit:
                skill_reads.append(
                    {
                        "skill_path": label,
                        "skill_name": skill_name_from_label(label),
                        "resolved_path": None,
                        "read_count": 1,
                        "severity": file_severity,
                        "suspicious": file_severity in {"Critical", "High", "Medium"},
                        "document": "",
                    }
                )

        elif tool_name == "read" and path.lower().endswith(".svg") and text_output.strip():
            key = f"svg::{path}"
            if key not in audited_keys:
                audited_keys.add(key)
                if _looks_like_tool_error_payload(text_output):
                    continue
                static_audit = audit_text_content(
                    file_name=path,
                    content=text_output,
                    task_prompt=effective_task_prompt,
                    enable_semantic_review=False,
                )
                session_audits.append(static_audit)
                _record_static_audit(
                    static_audit,
                    label=path,
                    risk_signals=risk_signals,
                    audit_findings=audit_findings,
                )

        elif tool_name == "read" and path and is_textual_file(path) and text_output.strip():
            key = f"text::{path}"
            if key not in audited_keys:
                audited_keys.add(key)
                if _looks_like_tool_error_payload(text_output):
                    continue
                static_audit = audit_text_content(
                    file_name=path,
                    content=text_output,
                    task_prompt=effective_task_prompt,
                    enable_semantic_review=False,
                )
                session_audits.append(static_audit)
                _record_static_audit(
                    static_audit,
                    label=path,
                    risk_signals=risk_signals,
                    audit_findings=audit_findings,
                )

        elif tool_name == "exec":
            command = str(arguments.get("command") or "")
            if command.strip():
                key = f"exec::{command}"
                if key not in audited_keys:
                    audited_keys.add(key)
                    static_audit = audit_text_content(
                        file_name="runtime-command.sh",
                        content=command,
                        task_prompt=effective_task_prompt,
                        enable_semantic_review=False,
                    )
                    session_audits.append(static_audit)
                    _record_static_audit(
                        static_audit,
                        label=f"exec:{command[:80]}",
                        risk_signals=risk_signals,
                        audit_findings=audit_findings,
                    )

    if not task_prompt and not timeline and not audit_findings:
        return None

    aggregate_skill_audit = maybe_build_skill_bundle_audit(
        skill_documents=skill_documents,
        task_prompt=effective_task_prompt,
        session_id=session_path.stem,
    )
    if aggregate_skill_audit is not None:
        session_audits.append(aggregate_skill_audit)
        _record_static_audit(
            aggregate_skill_audit,
            label=f"session-skill-bundle:{session_path.stem}",
            risk_signals=risk_signals,
            audit_findings=audit_findings,
        )

    dynamic_chain = build_dynamic_chain(
        timeline=timeline,
        task_prompt=effective_task_prompt,
        session_audits=session_audits,
        risk_signals=risk_signals,
    )
    semantic_judgment = dynamic_chain.get("semantic_judgment")
    if (
        isinstance(semantic_judgment, dict)
        and semantic_judgment.get("should_flag")
        and not semantic_judgment.get("fallback_used")
    ):
        risk_signals.insert(
            0,
            semantic_signal_from_judgment(
                semantic_judgment,
                fallback_reason=str(dynamic_chain.get("reason") or ""),
            ),
        )
    alerts.extend(build_semantic_alerts(dynamic_chain, risk_signals, timeline))

    return {
        "session_id": session_path.stem,
        "session_path": str(session_path),
        "started_at": extract_session_started_at(records, session_path),
        "primary_task": "svg_task" if target_asset_path else "session_audit",
        "task_prompt": task_prompt,
        "target_asset_path": target_asset_path,
        "requested_capabilities": requested_capabilities,
        "prompt_artifact": None,
        "skill_reads": skill_reads,
        "dynamic_chain": dynamic_chain,
        "timeline": timeline,
        "alerts": alerts[:12],
        "session_score": dynamic_chain["score"] + len(risk_signals) * 8,
        "risk_signals": sort_signals(risk_signals),
        "audit_findings": sort_findings(audit_findings),
    }


def _should_surface_static_audit(audit: dict[str, Any]) -> bool:
    severity = str(audit.get("effective_risk_level") or audit.get("risk_level") or "low").lower()
    if severity in {"medium", "high"}:
        return True
    if audit.get("drift_detected"):
        return True
    if audit.get("behavioral_findings"):
        return True
    return bool(audit.get("semantic_flagged"))


def _looks_like_tool_error_payload(text: str) -> bool:
    payload = text.strip()
    if not payload:
        return False

    try:
        parsed = json.loads(payload)
    except json.JSONDecodeError:
        lowered = payload.lower()
        return any(marker in lowered for marker in ("enoent", "no such file or directory", '"status": "error"'))

    if isinstance(parsed, dict):
        status = str(parsed.get("status") or "").lower()
        error = str(parsed.get("error") or "")
        return status == "error" or bool(error)
    return False


def _record_static_audit(
    audit: dict[str, Any],
    *,
    label: str,
    risk_signals: list[dict[str, Any]],
    audit_findings: list[dict[str, Any]],
) -> str:
    signal = static_signal_from_audit(audit, label=label)
    finding = build_finding_from_static_audit(audit, source_name=label)
    if _should_surface_static_audit(audit):
        risk_signals.append(signal)
        audit_findings.append(finding)
    return str(signal.get("severity") or finding.get("severity") or "Low")


def semantic_signal_from_judgment(semantic_judgment: dict[str, Any], *, fallback_reason: str) -> dict[str, Any]:
    semantic_level = str(semantic_judgment.get("semantic_risk_level") or "medium").lower()
    severity = "High" if semantic_level == "high" else ("Medium" if semantic_level == "medium" else "Low")
    if semantic_judgment.get("should_flag") and severity == "Low":
        severity = "Medium"
    confidence = float(semantic_judgment.get("semantic_confidence") or 0.0)
    model_name = str(semantic_judgment.get("model_name") or "LLM")
    sources = semantic_judgment.get("aggregated_sources") or []
    evidence = str(semantic_judgment.get("alert_evidence") or "")
    if not evidence and sources:
        evidence = "；".join(str(item) for item in sources[:3])
    evidence_points = semantic_judgment.get("evidence_points") or []
    if not evidence and evidence_points:
        evidence = "；".join(str(item) for item in evidence_points[:3])

    score = 90 if severity == "High" else (74 if severity == "Medium" else 56)
    score += min(int(confidence * 10), 6)
    score = min(score, 99)

    attack_type = str(semantic_judgment.get("attack_type") or "").strip()
    desc = str(
        semantic_judgment.get("alert_summary")
        or semantic_judgment.get("attack_reason")
        or fallback_reason
        or "模型语义复核确认当前会话存在攻击性跨技能指令链。"
    )
    reason = str(semantic_judgment.get("attack_reason") or semantic_judgment.get("reasoning_summary") or desc)
    title = str(semantic_judgment.get("alert_title") or "LLM 攻击判定")
    if attack_type:
        title = f"{title} · {attack_type}"
    action = str(semantic_judgment.get("alert_action") or "建议立即人工复核相关 skill 片段与后续命令执行。")
    source_suffix = f" · {model_name}" if model_name else ""

    return {
        "id": f"semantic-review::{title}",
        "tag": "LLM 语义复核",
        "title": f"{title}{source_suffix}",
        "desc": desc,
        "evidence": evidence[:260],
        "action": action,
        "score": score,
        "severity": severity,
        "tone": "rose" if severity == "High" else ("amber" if severity == "Medium" else "sky"),
        "reason": reason,
        "capabilities": [],
    }


def maybe_build_skill_bundle_audit(
    *,
    skill_documents: list[dict[str, str]],
    task_prompt: str,
    session_id: str,
) -> dict[str, Any] | None:
    unique_docs: list[dict[str, str]] = []
    seen_paths: set[str] = set()
    for item in skill_documents:
        path = str(item.get("path") or "")
        content = str(item.get("content") or "")
        if not path or not content or path in seen_paths:
            continue
        seen_paths.add(path)
        unique_docs.append({"path": path, "content": content})

    if len(unique_docs) < SESSION_LLM_MIN_SKILLS:
        return None

    bundle_content = "\n\n".join(
        f"# FILE: {item['path']}\n{item['content']}"
        for item in unique_docs
    )
    bundle_audit = audit_text_content(
        file_name=f"session-skill-bundle-{session_id}.md",
        content=bundle_content,
        task_prompt=task_prompt,
        enable_semantic_review=False,
    )
    bundle_audit["source_name"] = f"session-skill-bundle:{session_id}"
    bundle_audit["aggregated_source_count"] = len(unique_docs)
    bundle_audit["aggregated_sources"] = [item["path"] for item in unique_docs]

    if _should_trigger_session_llm(bundle_audit, unique_docs):
        semantic = load_cached_semantic_bundle_review(
            audit=bundle_audit,
            task_prompt=task_prompt,
            original_content=bundle_content,
        )
        if semantic is not None:
            semantic["source_name"] = bundle_audit["source_name"]
            semantic["aggregated_sources"] = list(bundle_audit["aggregated_sources"])
            semantic["aggregated_source_count"] = bundle_audit["aggregated_source_count"]
            bundle_audit["semantic_judgment"] = semantic
            bundle_audit["semantic_flagged"] = bool(semantic.get("should_flag"))
            semantic_level = str(semantic.get("semantic_risk_level") or "").lower()
            if semantic_level in {"low", "medium", "high"}:
                bundle_audit["effective_risk_level"] = semantic_level
    return bundle_audit


def _should_trigger_session_llm(bundle_audit: dict[str, Any], skill_documents: list[dict[str, str]]) -> bool:
    if not llm_semantic_review_enabled():
        return False
    if len(skill_documents) < SESSION_LLM_MIN_SKILLS:
        return False

    risk_score = int(bundle_audit.get("risk_score") or 0)
    instruction_categories = set()
    for segment in bundle_audit.get("instructional_segments") or []:
        instruction_categories.update(segment.get("instruction_categories") or [])
    induced_capabilities = set(bundle_audit.get("induced_capabilities") or [])
    behavioral = bundle_audit.get("behavioral_findings") or []
    new_domains = bundle_audit.get("new_capability_domains") or []

    if risk_score >= SESSION_LLM_MIN_SCORE and len(new_domains) > 0:
        return True
    if len(behavioral) > 0:
        return True
    if {"toolchain_protocol", "loop_verification_protocol"} & instruction_categories:
        return True
    if "shell_exec" in induced_capabilities and len(skill_documents) >= 2:
        return True
    return False


def load_cached_semantic_bundle_review(
    *,
    audit: dict[str, Any],
    task_prompt: str,
    original_content: str,
) -> dict[str, Any] | None:
    model_name = os.environ.get("CLAWGUARD_LLM_MODEL", "")
    base_url = os.environ.get("CLAWGUARD_LLM_BASE_URL", "")
    cache_payload = json.dumps(
        {
            "task_prompt": task_prompt,
            "source_name": audit.get("source_name"),
            "instructional_segments": audit.get("instructional_segments"),
            "induced_capabilities": audit.get("induced_capabilities"),
            "risk_level": audit.get("risk_level"),
            "risk_score": audit.get("risk_score"),
            "content": original_content,
            "model_name": model_name,
            "base_url": base_url,
        },
        ensure_ascii=False,
        sort_keys=True,
    )
    cache_key = hashlib.sha256(cache_payload.encode("utf-8")).hexdigest()

    with _SEMANTIC_BUNDLE_LOCK:
        cached = _SEMANTIC_BUNDLE_CACHE.get(cache_key)
        if cached is not None:
            return dict(cached)

    semantic = semantic_review_static_audit(
        audit=audit,
        task_prompt=task_prompt,
        original_content=original_content,
    )
    if semantic is None:
        return None

    with _SEMANTIC_BUNDLE_LOCK:
        _SEMANTIC_BUNDLE_CACHE[cache_key] = dict(semantic)
    return dict(semantic)


def build_dynamic_chain(
    *,
    timeline: list[dict[str, Any]],
    task_prompt: str,
    session_audits: list[dict[str, Any]],
    risk_signals: list[dict[str, Any]],
) -> dict[str, Any]:
    timeline_categories = [str(item.get("type") or "") for item in timeline]
    sequence = " -> ".join(timeline_categories[:10])
    semantic_judgments = [
        audit.get("semantic_judgment")
        for audit in session_audits
        if isinstance(audit.get("semantic_judgment"), dict) and not audit["semantic_judgment"].get("fallback_used")
    ]
    strongest_semantic = None
    if semantic_judgments:
        strongest_semantic = max(
            semantic_judgments,
            key=lambda item: (
                bool(item.get("should_flag")),
                str(item.get("attack_verdict") or "").lower() == "attack",
                str(item.get("semantic_risk_level") or "").lower() == "high",
                str(item.get("semantic_risk_level") or "").lower() == "medium",
                float(item.get("semantic_confidence") or 0.0),
            ),
        )

    if session_audits:
        semantic_summary = summarize_audit_collection(session_audits, task_prompt=task_prompt)
    else:
        semantic_summary = {
            "task_capabilities": infer_task_capabilities(task_prompt),
            "induced_capabilities": [],
            "new_capability_domains": [],
            "consistency_judgment": "aligned",
            "drift_detected": False,
            "drift_targets": [],
            "candidate_target_skills": [],
            "risk_reasons": [],
            "evidence": [],
            "behavioral_findings": [],
            "risk_score": 0,
            "risk_level": "low",
            "instruction_categories": [],
            "artifact_count": 0,
            "instructional_segment_count": 0,
        }

    observed_categories = sorted(
        {
            *timeline_categories,
            *[str(item) for item in semantic_summary.get("instruction_categories") or []],
            *[str(item) for item in semantic_summary.get("drift_targets") or []],
        }
    )

    score = int(semantic_summary.get("risk_score") or 0) * 14
    score += len(semantic_summary.get("new_capability_domains") or []) * 8
    score += len(semantic_summary.get("behavioral_findings") or []) * 10
    score += sum(12 for item in risk_signals if item["severity"] == "Critical")
    score += sum(8 for item in risk_signals if item["severity"] == "High")
    score += sum(4 for item in risk_signals if item["severity"] == "Medium")
    if strongest_semantic and strongest_semantic.get("should_flag"):
        score += 18
    score = min(score, 100)

    suspicious = bool(
        semantic_summary.get("drift_detected")
        or str(semantic_summary.get("risk_level") or "low").lower() in {"medium", "high"}
        or any(item["severity"] in {"Critical", "High"} for item in risk_signals)
        or bool(strongest_semantic and strongest_semantic.get("should_flag"))
    )

    behavioral_findings = semantic_summary.get("behavioral_findings") or []
    risk_reasons = semantic_summary.get("risk_reasons") or []
    if strongest_semantic and strongest_semantic.get("should_flag"):
        reason = str(
            strongest_semantic.get("alert_summary")
            or strongest_semantic.get("attack_reason")
            or strongest_semantic.get("reasoning_summary")
            or "ClawGuard semantic review confirmed an attack-oriented multi-skill instruction chain in the session."
        )
    elif behavioral_findings:
        reason = str(behavioral_findings[0].get("summary") or "ClawGuard observed a high-risk behavioral pattern in the reconstructed session chain.")
    elif risk_reasons:
        reason = " ".join(str(item) for item in risk_reasons[:2])
    elif semantic_summary.get("new_capability_domains"):
        reason = "External session artifacts introduced capability domains not implied by the user task."
    else:
        reason = "No confirmed high-risk runtime chain was reconstructed from the recent session."

    return {
        "suspicious": suspicious,
        "score": score,
        "sequence": sequence,
        "observed_categories": observed_categories,
        "requested_capabilities": list(semantic_summary.get("task_capabilities") or []),
        "reason": reason,
        "semantic_summary": semantic_summary,
        "semantic_judgment": strongest_semantic,
    }


def build_semantic_alerts(
    dynamic_chain: dict[str, Any],
    risk_signals: list[dict[str, Any]],
    timeline: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    alerts: list[dict[str, Any]] = []
    semantic_summary = dynamic_chain.get("semantic_summary") or {}
    semantic_judgment = dynamic_chain.get("semantic_judgment") or {}
    alert_time = timeline[-1]["time"] if timeline else "n/a"

    if semantic_judgment.get("should_flag") and not semantic_judgment.get("fallback_used"):
        alerts.append(
            {
                "time": alert_time,
                "detector": "LLM Attack Review",
                "subject": dynamic_chain.get("sequence") or "runtime-sequence",
                "reason": str(
                    semantic_judgment.get("attack_reason")
                    or semantic_judgment.get("reasoning_summary")
                    or "ClawGuard semantic review confirmed a cross-skill attack chain."
                ),
            }
        )

    if semantic_summary.get("drift_detected"):
        domains = semantic_summary.get("new_capability_domains") or []
        subject = ", ".join(str(item) for item in domains[:4]) if domains else (dynamic_chain.get("sequence") or "runtime-sequence")
        alerts.append(
            {
                "time": alert_time,
                "detector": "Capability Drift",
                "subject": subject,
                "reason": dynamic_chain.get("reason") or "External content introduced capabilities outside the original task scope.",
            }
        )

    categories = set(str(item) for item in semantic_summary.get("instruction_categories") or [])
    if "toolchain_protocol" in categories:
        alerts.append(
            {
                "time": alert_time,
                "detector": "Toolchain Protocol",
                "subject": dynamic_chain.get("sequence") or "runtime-sequence",
                "reason": "ClawGuard detected external content defining its own tool-use or reply protocol.",
            }
        )
    if "loop_verification_protocol" in categories:
        alerts.append(
            {
                "time": alert_time,
                "detector": "Loop Verification",
                "subject": dynamic_chain.get("sequence") or "runtime-sequence",
                "reason": "ClawGuard detected retry, revalidation, or repeated execution guidance in session artifacts.",
            }
        )

    for finding in (semantic_summary.get("behavioral_findings") or [])[:3]:
        alerts.append(
            {
                "time": alert_time,
                "detector": str(finding.get("finding_kind") or "Behavior Pattern"),
                "subject": dynamic_chain.get("sequence") or "runtime-sequence",
                "reason": str(finding.get("summary") or "ClawGuard detected a suspicious behavioral pattern."),
            }
        )

    for signal in risk_signals:
        if signal["severity"] in {"Critical", "High"}:
            alerts.append(
                {
                    "time": alert_time,
                    "detector": signal["tag"],
                    "subject": signal["title"],
                    "reason": signal["reason"],
                }
            )

    deduped: list[dict[str, Any]] = []
    seen: set[str] = set()
    for alert in alerts:
        key = "|".join(str(alert.get(field) or "") for field in ("detector", "subject", "reason"))
        if key in seen:
            continue
        seen.add(key)
        deduped.append(alert)
    return deduped[:12]


def build_demo_findings() -> list[dict[str, Any]]:
    findings: list[dict[str, Any]] = []
    for source_root in resolve_sample_roots(PROJECT_ROOT):
        for skill_file in sorted(path for path in source_root.rglob("SKILL.md") if path.is_file())[:24]:
            content = read_text_best_effort(skill_file)
            audit = audit_text_content(
                file_name=str(skill_file.relative_to(source_root)).replace("\\", "/"),
                content=content,
                task_prompt="Audit sample ClawGuard skill documents.",
                enable_semantic_review=False,
            )
            finding = build_finding_from_static_audit(
                audit,
                source_name=str(skill_file.relative_to(source_root)).replace("\\", "/"),
            )
            if finding["severity"] in {"High", "Medium"}:
                findings.append(finding)
    return sort_findings(findings)[:12]


def findings_to_signals(findings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    signals: list[dict[str, Any]] = []
    for finding in findings:
        severity = str(finding.get("severity") or "Low")
        signals.append(
            {
                "id": finding.get("skill"),
                "tag": "静态审计",
                "title": finding.get("skill"),
                "desc": finding.get("title"),
                "evidence": finding.get("reason"),
                "action": finding.get("action"),
                "score": {"Critical": 96, "High": 84, "Medium": 68, "Low": 50}.get(severity, 50),
                "severity": severity,
                "tone": "rose" if severity in {"Critical", "High"} else ("amber" if severity == "Medium" else "sky"),
                "reason": finding.get("reason"),
                "capabilities": [],
            }
        )
    return sort_signals(signals)


def sort_signals(signals: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return sorted(
        signals,
        key=lambda item: (
            item.get("severity") == "Critical",
            item.get("severity") == "High",
            item.get("severity") == "Medium",
            int(item.get("score") or 0),
        ),
        reverse=True,
    )[:10]


def sort_findings(findings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return sorted(
        findings,
        key=lambda item: (
            item.get("severity") == "Critical",
            item.get("severity") == "High",
            item.get("severity") == "Medium",
            int(item.get("findingsCount") or 0),
        ),
        reverse=True,
    )


def select_featured_session(
    session_summaries: list[dict[str, Any]],
    preferred_session_path: str | Path | None,
) -> dict[str, Any] | None:
    if not session_summaries:
        return None
    if preferred_session_path:
        normalized_latest = str(Path(preferred_session_path))
        for item in session_summaries:
            if str(item.get("session_path") or "") == normalized_latest:
                return item
        return None
    return session_summaries[0]


def load_jsonl(path: Path) -> list[dict[str, Any]]:
    try:
        return [json.loads(line) for line in path.read_text(encoding="utf-8").splitlines() if line.strip()]
    except (OSError, json.JSONDecodeError):
        return []


def extract_message_text(message: dict[str, Any]) -> str:
    parts: list[str] = []
    content = message.get("content", [])
    if isinstance(content, str):
        return content
    for item in content:
        if isinstance(item, dict) and item.get("type") == "text":
            text = item.get("text")
            if isinstance(text, str):
                parts.append(text)
    return "\n".join(parts)


def extract_svg_path(text: str) -> str | None:
    match = re.search(r"([A-Za-z]:[\\/][^\s]+?\.svg|/[\w./~:-]+\.svg)\??", text)
    if match is None:
        return None
    return match.group(1)


def short_timestamp(value: object) -> str:
    if not isinstance(value, str):
        return "n/a"
    if "T" in value and len(value) >= 16:
        return value[11:16]
    return value[:5]


def extract_session_started_at(records: list[dict[str, Any]], session_path: Path) -> str:
    for record in records:
        timestamp = record.get("timestamp")
        if isinstance(timestamp, str) and timestamp:
            return timestamp
    return datetime.fromtimestamp(session_path.stat().st_mtime).isoformat(timespec="seconds")


def find_last_user_index(records: list[dict[str, Any]]) -> int | None:
    indices = []
    for index, record in enumerate(records):
        if record.get("type") != "message":
            continue
        message = record.get("message", {})
        if message.get("role") == "user":
            indices.append(index)
    return indices[-1] if indices else None


def summarize_tool_call(tool_name: str, payload: dict[str, Any]) -> str:
    if tool_name == "read":
        return str(payload.get("path") or "read")
    if tool_name == "exec":
        return str(payload.get("command") or "exec")[:120]
    if tool_name == "process":
        return str(payload.get("action") or "process")
    if tool_name == "write":
        return str(payload.get("path") or "write")
    return json.dumps(payload, ensure_ascii=False)


def classify_timeline_type(tool_name: str, payload: dict[str, Any]) -> str:
    if tool_name == "read":
        path = str(payload.get("path") or "")
        if path.endswith("/SKILL.md"):
            return "Skill Doc Read"
        if path.endswith(".svg"):
            return "SVG Read"
        return "File Read"
    if tool_name == "exec":
        command = str(payload.get("command") or "").lower()
        if any(marker in command for marker in ("curl ", "wget ", "http://", "https://", "fetch", "requests.", "axios")):
            return "Network Exec"
        return "Exec"
    if tool_name == "write":
        return "Artifact Write"
    if tool_name == "process":
        return "Process Poll"
    return tool_name.title()


def classify_tone(tool_name: str, payload: dict[str, Any]) -> str:
    if tool_name == "exec":
        return "amber"
    if tool_name == "process":
        return "sky"
    if tool_name == "read" and str(payload.get("path") or "").endswith("/SKILL.md"):
        return "amber"
    if tool_name == "read" and str(payload.get("path") or "").endswith(".svg"):
        return "rose"
    return "sky"


def build_empty_dynamic_chain() -> dict[str, Any]:
    return {
        "suspicious": False,
        "score": 0,
        "sequence": "",
        "observed_categories": [],
        "requested_capabilities": [],
        "reason": "No session was selected for runtime chain analysis.",
    }


def build_empty_session_activity() -> dict[str, Any]:
    return {
        "session_id": None,
        "session_path": None,
        "started_at": None,
        "primary_task": "session_audit",
        "task_prompt": "No recent OpenClaw session was available; showing static inventory only.",
        "target_asset_path": None,
        "requested_capabilities": [],
        "prompt_artifact": None,
        "skill_reads": [],
        "dynamic_chain": build_empty_dynamic_chain(),
        "timeline": [],
        "alerts": [],
        "session_score": 0,
        "risk_signals": [],
        "audit_findings": [],
    }
