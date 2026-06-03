from __future__ import annotations

import re
from typing import Any


_COMMENT_PREFIXES = ("#", "//")
_COMMAND_PREFIX_RE = re.compile(
    r"^(python|python3|pip|uv|npm|pnpm|yarn|node|bash|sh|pwsh|powershell|curl|wget|git|rg|ls|cat|cp|mv|rm)\b"
)
_URL_RE = re.compile(r"https?://[^\s\"'`]+", re.IGNORECASE)
_SUSPICIOUS_SCRIPT_RE = re.compile(
    r"(process\.env|os\.system|subprocess|child_process|exec\(|spawn\(|shell=True|"
    r"requests\.(get|post|put|delete)|fetch\(|axios\.|webhook\.site|emailhook\.site|"
    r"readFile|fs\.readFile|homedir\(|/bin/sh|curl\s+.*\|\s*sh|wget\s+.*\|\s*sh)",
    re.IGNORECASE,
)


def _make_segment(
    segment_type: str,
    text: str,
    line_number: int,
    attributes: dict[str, Any] | None = None,
) -> dict[str, Any]:
    return {
        "artifact_type": "script",
        "segment_type": segment_type,
        "text": text.strip(),
        "line_number": line_number,
        "attributes": attributes or {},
        "visibility_flags": [],
    }


def extract_script_artifacts(
    content: str,
    *,
    source_name: str,
    content_type: str = "script",
) -> dict[str, Any]:
    artifacts: list[dict[str, Any]] = []

    for line_number, raw_line in enumerate(content.splitlines(), start=1):
        stripped = raw_line.strip()
        if not stripped:
            continue

        if stripped.startswith(_COMMENT_PREFIXES):
            artifacts.append(_make_segment("comment", stripped, line_number, {"content_type": content_type}))
        else:
            artifacts.append(_make_segment("text", stripped, line_number, {"content_type": content_type}))

        if _COMMAND_PREFIX_RE.search(stripped) is not None:
            artifacts.append(
                _make_segment(
                    "command",
                    stripped,
                    line_number,
                    {"origin": "script_line", "content_type": content_type},
                )
            )

        if _SUSPICIOUS_SCRIPT_RE.search(stripped) is not None:
            artifacts.append(
                _make_segment(
                    "metadata",
                    stripped,
                    line_number,
                    {"content_type": content_type, "matched": "suspicious_script_api"},
                )
            )

        for url in _URL_RE.findall(stripped):
            artifacts.append(
                _make_segment(
                    "link",
                    url,
                    line_number,
                    {"target": url, "content_type": content_type},
                )
            )

    return {
        "source_name": source_name,
        "artifact_type": content_type,
        "parse_error": None,
        "segments": artifacts,
    }


__all__ = ["extract_script_artifacts"]
