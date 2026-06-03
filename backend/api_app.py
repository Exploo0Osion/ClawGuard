from __future__ import annotations

from typing import Any

try:
    from .report_builder import build_environment_report, build_report, build_token_usage_report
    from .sample_scan import build_sample_scan_report
    from .settings_store import save_openclaw_root, settings_payload
    from .static_audit import build_static_audit_report, build_upload_audit_report
except ImportError:
    from report_builder import build_environment_report, build_report, build_token_usage_report
    from sample_scan import build_sample_scan_report
    from settings_store import save_openclaw_root, settings_payload
    from static_audit import build_static_audit_report, build_upload_audit_report


DEFAULT_TASK_PROMPT = "Optimize a local SVG asset without network access, unrelated skills, or external content."


def query_value(query: dict[str, list[str]], key: str) -> str | None:
    values = query.get(key) or []
    for value in values:
        text = value.strip()
        if text:
            return text
    return None


def settings_response() -> dict[str, Any]:
    return {**settings_payload(), "environment": build_environment_report()}


def handle_api_get(path: str, query: dict[str, list[str]]) -> tuple[dict[str, Any], int]:
    session_id = query_value(query, "session_id")
    session_path = query_value(query, "session_path")

    if path == "/api/health":
        return {"status": "ok"}, 200
    if path == "/api/report":
        return build_report(selected_session_id=session_id, selected_session_path=session_path), 200
    if path == "/api/environment":
        return build_environment_report(), 200
    if path == "/api/settings":
        return settings_response(), 200
    if path == "/api/token-usage":
        return build_token_usage_report(selected_session_id=session_id, selected_session_path=session_path), 200
    if path == "/api/sample-scan":
        return build_sample_scan_report(), 200
    if path == "/api/audit-static":
        return build_static_audit_report(), 200
    return {"error": "Not found"}, 404


def handle_api_post(path: str, payload: dict[str, Any]) -> tuple[dict[str, Any], int]:
    if path == "/api/settings":
        raw_root = payload.get("openclaw_root")
        next_root = str(raw_root) if isinstance(raw_root, str) else None
        save_openclaw_root(next_root)
        return settings_response(), 200

    if path != "/api/audit-upload":
        return {"error": "Not found"}, 404

    files = payload.get("files")
    if not isinstance(files, list):
        return {"error": "files must be an array"}, 400

    normalized_files: list[dict[str, str]] = []
    for item in files:
        if not isinstance(item, dict):
            continue
        normalized_files.append(
            {
                "name": str(item.get("name") or ""),
                "content": str(item.get("content") or ""),
            }
        )

    task_prompt = payload.get("task_prompt")
    task_prompt_text = str(task_prompt) if isinstance(task_prompt, str) else None
    return build_upload_audit_report(normalized_files, task_prompt=task_prompt_text or DEFAULT_TASK_PROMPT), 200
