from __future__ import annotations

import re
import xml.etree.ElementTree as ET
from typing import Any


def _line_number_from_offset(content: str, offset: int) -> int:
    return content.count("\n", 0, offset) + 1


def _line_number_for_snippet(content: str, snippet: str) -> int | None:
    if snippet == "":
        return None
    index = content.find(snippet)
    if index == -1:
        return None
    return _line_number_from_offset(content, index)


def _local_name(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def _parse_numeric(value: str | None) -> float | None:
    if value is None:
        return None
    match = re.search(r"-?\d+(\.\d+)?", value)
    if match is None:
        return None
    return float(match.group(0))


def _parse_style_attribute(style: str | None) -> dict[str, str]:
    if style is None:
        return {}
    style_map = {}
    for item in style.split(";"):
        if ":" not in item:
            continue
        key, value = item.split(":", 1)
        style_map[key.strip().lower()] = value.strip().lower()
    return style_map


def _parse_css_declarations(block: str) -> dict[str, str]:
    declarations: dict[str, str] = {}
    for item in block.split(";"):
        if ":" not in item:
            continue
        key, value = item.split(":", 1)
        declarations[key.strip().lower()] = value.strip()
    return declarations


def _style_visibility_flags(css_block: str) -> list[str]:
    declarations = _parse_css_declarations(css_block)
    flags: list[str] = []

    display = declarations.get("display", "").lower()
    visibility = declarations.get("visibility", "").lower()
    opacity = declarations.get("opacity", "").lower()
    font_size = _parse_numeric(declarations.get("font-size"))

    if display == "none" or visibility in {"hidden", "collapse"}:
        flags.append("hidden")
    if opacity in {"0", "0.0"}:
        flags.append("transparent")
    if font_size is not None and font_size <= 4:
        flags.append("tiny")
    return flags


def _extract_css_generated_text(content: str, css_text: str) -> list[dict[str, Any]]:
    segments: list[dict[str, Any]] = []
    block_pattern = re.compile(r"(?P<selector>[^{}]+)\{(?P<body>[^{}]+)\}", re.DOTALL)
    content_pattern = re.compile(r"content\s*:\s*(['\"])(?P<text>.*?)\1", re.DOTALL | re.IGNORECASE)

    for block_match in block_pattern.finditer(css_text):
        selector = block_match.group("selector").strip()
        body = block_match.group("body")
        visibility_flags = _style_visibility_flags(body)
        for content_match in content_pattern.finditer(body):
            generated_text = content_match.group("text").strip()
            if not generated_text:
                continue
            snippet = content_match.group(0)
            line_number = _line_number_for_snippet(content, snippet)
            segments.append(
                _make_segment(
                    artifact_type="svg",
                    segment_type="style_generated_text",
                    text=generated_text,
                    line_number=line_number,
                    attributes={"selector": selector},
                    visibility_flags=visibility_flags,
                )
            )

    return segments


def _extract_viewbox_bounds(root: ET.Element) -> tuple[float, float, float, float] | None:
    view_box = root.attrib.get("viewBox")
    if view_box is None:
        return None
    parts = [part for part in re.split(r"[,\s]+", view_box.strip()) if part != ""]
    if len(parts) != 4:
        return None
    try:
        min_x, min_y, width, height = [float(part) for part in parts]
    except ValueError:
        return None
    return min_x, min_y, width, height


def _visibility_flags(element: ET.Element, viewbox: tuple[float, float, float, float] | None) -> list[str]:
    style_map = _parse_style_attribute(element.attrib.get("style"))
    flags: list[str] = []

    display = element.attrib.get("display", style_map.get("display", "")).lower()
    visibility = element.attrib.get("visibility", style_map.get("visibility", "")).lower()
    opacity = element.attrib.get("opacity", style_map.get("opacity"))
    fill_opacity = element.attrib.get("fill-opacity", style_map.get("fill-opacity"))
    font_size = _parse_numeric(element.attrib.get("font-size", style_map.get("font-size")))
    x = _parse_numeric(element.attrib.get("x"))
    y = _parse_numeric(element.attrib.get("y"))

    if display == "none" or visibility in {"hidden", "collapse"}:
        flags.append("hidden")

    if opacity in {"0", "0.0"} or fill_opacity in {"0", "0.0"}:
        flags.append("transparent")

    if font_size is not None and font_size <= 4:
        flags.append("tiny")

    if viewbox is not None and x is not None and y is not None:
        min_x, min_y, width, height = viewbox
        if x < min_x or y < min_y or x > min_x + width or y > min_y + height:
            flags.append("off_canvas")

    return flags


def _make_segment(
    artifact_type: str,
    segment_type: str,
    text: str,
    line_number: int | None,
    attributes: dict[str, Any] | None = None,
    visibility_flags: list[str] | None = None,
) -> dict[str, Any]:
    return {
        "artifact_type": artifact_type,
        "segment_type": segment_type,
        "text": text.strip(),
        "line_number": line_number,
        "attributes": attributes or {},
        "visibility_flags": visibility_flags or [],
    }


def extract_svg_artifacts(content: str, source_name: str = "inline.svg") -> dict[str, Any]:
    artifacts: list[dict[str, Any]] = []

    for match in re.finditer(r"<!--(.*?)-->", content, flags=re.DOTALL):
        artifacts.append(
            _make_segment(
                artifact_type="svg",
                segment_type="comment",
                text=match.group(1),
                line_number=_line_number_from_offset(content, match.start()),
            )
        )

    try:
        root = ET.fromstring(content)
    except ET.ParseError as error:
        return {
            "source_name": source_name,
            "artifact_type": "svg",
            "parse_error": str(error),
            "segments": artifacts,
        }

    viewbox = _extract_viewbox_bounds(root)

    for element in root.iter():
        tag = _local_name(element.tag)
        element_text = "".join(element.itertext()).strip()
        line_number = _line_number_for_snippet(content, ET.tostring(element, encoding="unicode"))

        if tag in {"metadata", "desc", "title", "style"} and element_text != "":
            artifacts.append(
                _make_segment(
                    artifact_type="svg",
                    segment_type=tag,
                    text=element_text,
                    line_number=line_number,
                    attributes=dict(element.attrib),
                )
            )
            if tag == "style":
                artifacts.extend(_extract_css_generated_text(content, element_text))

        if tag == "foreignObject":
            foreign_text = " ".join(part.strip() for part in element.itertext() if part.strip() != "")
            artifacts.append(
                _make_segment(
                    artifact_type="svg",
                    segment_type="foreignObject",
                    text=foreign_text,
                    line_number=line_number,
                    attributes=dict(element.attrib),
                )
            )

        if tag == "text":
            flags = _visibility_flags(element, viewbox)
            artifacts.append(
                _make_segment(
                    artifact_type="svg",
                    segment_type="text",
                    text=element_text,
                    line_number=line_number,
                    attributes=dict(element.attrib),
                    visibility_flags=flags,
                )
            )

    return {
        "source_name": source_name,
        "artifact_type": "svg",
        "parse_error": None,
        "segments": artifacts,
    }


__all__ = ["extract_svg_artifacts"]
