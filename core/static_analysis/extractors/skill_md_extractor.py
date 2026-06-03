from __future__ import annotations

import re
from typing import Any


def _line_number_from_offset(content: str, offset: int) -> int:
    return content.count("\n", 0, offset) + 1


def _make_segment(
    segment_type: str,
    text: str,
    line_number: int,
    attributes: dict[str, Any] | None = None,
) -> dict[str, Any]:
    return {
        "artifact_type": "skill_md",
        "segment_type": segment_type,
        "text": text.strip(),
        "line_number": line_number,
        "attributes": attributes or {},
        "visibility_flags": [],
    }


def _matches_command(text: str) -> bool:
    stripped = text.strip()
    if stripped == "":
        return False
    command_pattern = re.compile(
        r"^(python|python3|pip|uv|npm|pnpm|yarn|node|bash|sh|pwsh|powershell|curl|wget|git|rg|ls|cat|cp|mv|rm)\b"
    )
    return command_pattern.search(stripped) is not None


def _collect_code_block_commands(code: str) -> list[str]:
    commands = []
    for line in code.splitlines():
        stripped = line.strip()
        if _matches_command(stripped):
            commands.append(stripped)
    return commands


def extract_skill_md_artifacts(content: str, source_name: str = "SKILL.md") -> dict[str, Any]:
    artifacts: list[dict[str, Any]] = []

    heading_pattern = re.compile(r"^(#{1,6})\s+(.*)$", re.MULTILINE)
    code_block_pattern = re.compile(r"```(?P<lang>[^\n`]*)\n(?P<code>.*?)```", re.DOTALL)
    link_pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
    permission_pattern = re.compile(
        r"\b(permission|approval|escalat|allow|grant access|outside sandbox|sudo|privilege|admin)\b",
        re.IGNORECASE,
    )

    for match in code_block_pattern.finditer(content):
        line_number = _line_number_from_offset(content, match.start())
        language = match.group("lang").strip()
        code = match.group("code").strip()
        artifacts.append(
            _make_segment(
                segment_type="fenced_code_block",
                text=code,
                line_number=line_number,
                attributes={"language": language},
            )
        )
        for command in _collect_code_block_commands(code):
            artifacts.append(
                _make_segment(
                    segment_type="command",
                    text=command,
                    line_number=line_number,
                    attributes={"origin": "fenced_code_block"},
                )
            )

    for match in heading_pattern.finditer(content):
        artifacts.append(
            _make_segment(
                segment_type="heading",
                text=match.group(2),
                line_number=_line_number_from_offset(content, match.start()),
                attributes={"level": len(match.group(1))},
            )
        )

    for match in link_pattern.finditer(content):
        artifacts.append(
            _make_segment(
                segment_type="link",
                text=match.group(1),
                line_number=_line_number_from_offset(content, match.start()),
                attributes={"target": match.group(2)},
            )
        )

    lines = content.splitlines()
    active_heading = ""
    paragraph_lines: list[str] = []
    paragraph_start_line = 1
    inside_code_block = False

    def flush_paragraph() -> None:
        nonlocal paragraph_lines, paragraph_start_line
        if len(paragraph_lines) == 0:
            return
        text = "\n".join(paragraph_lines).strip()
        if text == "":
            paragraph_lines = []
            return

        segment_type = "description_paragraph"
        heading_lower = active_heading.lower()
        if any(keyword in heading_lower for keyword in ["usage", "instruction", "workflow", "steps"]):
            segment_type = "usage_instructions"
        elif any(keyword in heading_lower for keyword in ["example", "examples"]):
            segment_type = "example_paragraph"

        artifacts.append(
            _make_segment(
                segment_type=segment_type,
                text=text,
                line_number=paragraph_start_line,
                attributes={"heading_context": active_heading},
            )
        )

        if permission_pattern.search(text) is not None:
            artifacts.append(
                _make_segment(
                    segment_type="permission_like_statement",
                    text=text,
                    line_number=paragraph_start_line,
                    attributes={"heading_context": active_heading},
                )
            )

        for inline_code in re.findall(r"`([^`]+)`", text):
            if _matches_command(inline_code):
                artifacts.append(
                    _make_segment(
                        segment_type="command",
                        text=inline_code,
                        line_number=paragraph_start_line,
                        attributes={"origin": "inline_code"},
                    )
                )

        paragraph_lines = []

    for line_number, line in enumerate(lines, start=1):
        stripped = line.strip()

        if stripped.startswith("```"):
            flush_paragraph()
            inside_code_block = not inside_code_block
            continue

        if inside_code_block:
            continue

        heading_match = re.match(r"^(#{1,6})\s+(.*)$", line)
        if heading_match is not None:
            flush_paragraph()
            active_heading = heading_match.group(2).strip()
            continue

        if stripped == "":
            flush_paragraph()
            continue

        if len(paragraph_lines) == 0:
            paragraph_start_line = line_number
        paragraph_lines.append(line)

    flush_paragraph()

    return {
        "source_name": source_name,
        "artifact_type": "skill_md",
        "parse_error": None,
        "segments": artifacts,
    }


__all__ = ["extract_skill_md_artifacts"]
