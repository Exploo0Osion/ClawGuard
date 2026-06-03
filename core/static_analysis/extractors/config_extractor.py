from __future__ import annotations

import re
from typing import Any


_COMMAND_PREFIX_RE = re.compile(
    r"^(python|python3|pip|uv|npm|pnpm|yarn|node|bash|sh|pwsh|powershell|curl|wget|git|rg|ls|cat|cp|mv|rm)\b"
)
_ENV_ASSIGNMENT_RE = re.compile(r"^[A-Za-z_][A-Za-z0-9_]*\s*=\s*.+$")
_URL_RE = re.compile(r"https?://[^\s\"'`]+", re.IGNORECASE)
_SUSPICIOUS_KEY_RE = re.compile(
    r"\b(token|secret|password|passwd|apikey|api_key|auth|registry|install|update|download|command|script|hook|webhook)\b",
    re.IGNORECASE,
)


def _make_segment(
    segment_type: str,
    text: str,
    line_number: int,
    attributes: dict[str, Any] | None = None,
) -> dict[str, Any]:
    return {
        "artifact_type": "config",
        "segment_type": segment_type,
        "text": text.strip(),
        "line_number": line_number,
        "attributes": attributes or {},
        "visibility_flags": [],
    }


def extract_config_artifacts(
    content: str,
    *,
    source_name: str,
    content_type: str = "config",
) -> dict[str, Any]:
    artifacts: list[dict[str, Any]] = []

    for line_number, raw_line in enumerate(content.splitlines(), start=1):
        stripped = raw_line.strip()
        if not stripped:
            continue

        if stripped.startswith(("#", ";", "//")):
            artifacts.append(
                _make_segment("comment", stripped, line_number, {"content_type": content_type})
            )
            continue

        artifacts.append(
            _make_segment("text", stripped, line_number, {"content_type": content_type})
        )

        if _COMMAND_PREFIX_RE.search(stripped) is not None:
            artifacts.append(
                _make_segment(
                    "command",
                    stripped,
                    line_number,
                    {"origin": "config_line", "content_type": content_type},
                )
            )

        if _ENV_ASSIGNMENT_RE.search(stripped) is not None:
            artifacts.append(
                _make_segment("env_assignment", stripped, line_number, {"content_type": content_type})
            )

        if _SUSPICIOUS_KEY_RE.search(stripped) is not None:
            artifacts.append(
                _make_segment(
                    "metadata",
                    stripped,
                    line_number,
                    {"content_type": content_type, "matched": "suspicious_key"},
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


__all__ = ["extract_config_artifacts"]
