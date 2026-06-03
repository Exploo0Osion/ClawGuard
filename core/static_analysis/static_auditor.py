from __future__ import annotations

import re
from typing import Any

from agentdojo.static_analysis.capability_mapper import infer_capabilities
from agentdojo.static_analysis.drift_analyzer import analyze_drift
from agentdojo.static_analysis.extractors import (
    extract_config_artifacts,
    extract_script_artifacts,
    extract_skill_md_artifacts,
    extract_svg_artifacts,
)
from agentdojo.static_analysis.schema import Artifact, InstructionalSegment, StaticAuditResult
from agentdojo.static_analysis.task_consistency import analyze_task_consistency


INSTRUCTION_PATTERNS: dict[str, list[re.Pattern[str]]] = {
    "direct_command": [
        re.compile(r"\b(run|execute|open|download|fetch|read|write|edit|call|invoke|install|use)\b", re.IGNORECASE),
    ],
    "indirect_inducement": [
        re.compile(r"\b(should|need to|must|have to|it would be helpful|best to|you can now)\b", re.IGNORECASE),
    ],
    "toolchain_protocol": [
        re.compile(r"\b(tool output|tool result|function-call|respond with|inside <.*?> tags|format your reply|protocol)\b", re.IGNORECASE),
    ],
    "loop_verification_protocol": [
        re.compile(
            r"\b(repeat|verify again|re-run|until it works|multiple rounds|call .* again|loop|"
            r"retry|try again|until pass|until passing|if .* fail.* retry|recheck|revalidate|re-download)\b",
            re.IGNORECASE,
        ),
    ],
    "permission_escalation_hint": [
        re.compile(r"\b(permission|approval|allow access|grant access|outside sandbox|sudo|elevated|escalat)\b", re.IGNORECASE),
    ],
}

DIRECTIVE_TONE_PATTERNS = [
    re.compile(r"\b(you should|you must|you need to|please|before you finish|do not)\b", re.IGNORECASE),
    re.compile(r"^\s*(first|then|next|finally)\b", re.IGNORECASE),
    re.compile(r"^\s*(run|execute|open|download|fetch|read|write|search|verify|retry|re-download|revalidate)\b", re.IGNORECASE),
]

ACTION_DIRECTIVE_PATTERNS = [
    re.compile(
        r"\b(you should|you must|you need to|please|before you finish|do not)\s+"
        r"(run|execute|open|download|fetch|read|write|search|verify|retry|re-download|revalidate|recheck|call)\b",
        re.IGNORECASE,
    ),
    re.compile(
        r"^\s*(first|then|next|finally|run|execute|open|download|fetch|read|write|search|verify|retry|re-download|revalidate|recheck|call)\b",
        re.IGNORECASE,
    ),
]

EXPLICIT_PROTOCOL_DIRECTIVE_PATTERNS = [
    re.compile(r"\brespond with\b", re.IGNORECASE),
    re.compile(r"\bformat your reply\b", re.IGNORECASE),
]

PROTOCOL_MENTION_PATTERNS = [
    re.compile(r"\btool output\b", re.IGNORECASE),
    re.compile(r"\btool result\b", re.IGNORECASE),
    re.compile(r"\bfunction-call\b", re.IGNORECASE),
    re.compile(r"\bprotocol\b", re.IGNORECASE),
    re.compile(r"\binside <.*?> tags\b", re.IGNORECASE),
]

TOOLCHAIN_STEP_PATTERNS = [
    re.compile(
        r"\bfirst\b.*\b(search|read|download|fetch|execute|write|save|open)\b.*\bthen\b.*"
        r"\b(search|read|download|fetch|execute|write|save|open)\b",
        re.IGNORECASE,
    ),
    re.compile(
        r"\bbefore\b.*\b(search|read|download|fetch|execute|write|save|open)\b.*\bthen\b.*"
        r"\b(search|read|download|fetch|execute|write|save|open)\b",
        re.IGNORECASE,
    ),
    re.compile(r"\b(search|read)\b.*\b(download|fetch)\b.*\b(execute|write|save)\b", re.IGNORECASE),
]

LOOP_TRIGGER_PATTERNS = [
    re.compile(r"\bverify again\b", re.IGNORECASE),
    re.compile(r"\bre-?run\b", re.IGNORECASE),
    re.compile(r"\bretry\b", re.IGNORECASE),
    re.compile(r"\btry again\b", re.IGNORECASE),
    re.compile(r"\brecheck\b", re.IGNORECASE),
    re.compile(r"\brevalidate\b", re.IGNORECASE),
    re.compile(r"\bre-download\b", re.IGNORECASE),
    re.compile(r"\buntil (it works|pass|passing)\b", re.IGNORECASE),
    re.compile(r"\bif .* fail.* retry\b", re.IGNORECASE),
]


def _is_instructional_segment(segment: dict[str, Any]) -> bool:
    return segment.get("segment_type") in {
        "text",
        "comment",
        "metadata",
        "desc",
        "title",
        "foreignObject",
        "style",
        "style_generated_text",
        "description_paragraph",
        "usage_instructions",
        "example_paragraph",
        "fenced_code_block",
        "command",
        "permission_like_statement",
        "env_assignment",
    }


def _normalize_instruction_text(text: str) -> str:
    normalized = text.strip()
    normalized = re.sub(r"^/\*\s*", "", normalized)
    normalized = re.sub(r"\s*\*/$", "", normalized)
    return normalized.strip()


def _has_directive_tone(text: str) -> bool:
    normalized = _normalize_instruction_text(text)
    return any(pattern.search(normalized) is not None for pattern in DIRECTIVE_TONE_PATTERNS)


def _has_action_directive_tone(text: str) -> bool:
    normalized = _normalize_instruction_text(text)
    return any(pattern.search(normalized) is not None for pattern in ACTION_DIRECTIVE_PATTERNS)


def _matches_toolchain_protocol(text: str) -> bool:
    normalized = _normalize_instruction_text(text)
    has_explicit_protocol_directive = any(
        pattern.search(normalized) is not None for pattern in EXPLICIT_PROTOCOL_DIRECTIVE_PATTERNS
    )
    has_protocol_mention = any(pattern.search(normalized) is not None for pattern in PROTOCOL_MENTION_PATTERNS)
    has_chain = any(pattern.search(normalized) is not None for pattern in TOOLCHAIN_STEP_PATTERNS)
    return has_explicit_protocol_directive or ((has_protocol_mention or has_chain) and _has_action_directive_tone(normalized))


def _matches_loop_verification_protocol(text: str) -> bool:
    normalized = _normalize_instruction_text(text)
    has_loop_trigger = any(pattern.search(normalized) is not None for pattern in LOOP_TRIGGER_PATTERNS)
    return has_loop_trigger and _has_action_directive_tone(normalized)


def _classify_instructionality(text: str) -> list[str]:
    normalized = _normalize_instruction_text(text)
    categories = []
    if _matches_toolchain_protocol(normalized):
        categories.append("toolchain_protocol")
    if _matches_loop_verification_protocol(normalized):
        categories.append("loop_verification_protocol")

    for category, patterns in INSTRUCTION_PATTERNS.items():
        if category in {"toolchain_protocol", "loop_verification_protocol"}:
            continue
        if any(pattern.search(normalized) is not None for pattern in patterns):
            categories.append(category)
    return categories


def _analyze_instructional_segments(segments: list[dict[str, Any]]) -> list[dict[str, Any]]:
    instructional_segments = []
    for segment in segments:
        if not _is_instructional_segment(segment):
            continue
        text = segment.get("text", "")
        categories = _classify_instructionality(text)
        capabilities = infer_capabilities(text)
        if len(categories) == 0 and len(capabilities) == 0 and len(segment.get("visibility_flags", [])) == 0:
            continue
        enriched_segment = dict(segment)
        enriched_segment["instruction_categories"] = categories
        enriched_segment["capabilities"] = capabilities
        instructional_segments.append(enriched_segment)
    return instructional_segments


def _compute_risk_assessment(
    artifacts: list[Artifact],
    instructional_segments: list[InstructionalSegment],
    induced_capabilities: list[str],
    drift_detected: bool,
) -> tuple[int, str]:
    score = 0
    categories = {
        category
        for segment in instructional_segments
        for category in segment.instruction_categories
    }

    if "toolchain_protocol" in categories:
        score += 2
    if "loop_verification_protocol" in categories:
        score += 2

    high_risk_capabilities = {"shell_exec", "network_fetch", "download", "skill_read"}
    score += sum(1 for capability in induced_capabilities if capability in high_risk_capabilities)

    has_hidden_signal = any(
        {"hidden", "tiny", "transparent", "off_canvas"} & set(artifact.visibility_flags)
        for artifact in artifacts
    )
    if has_hidden_signal:
        score += 1

    has_permission_signal = any(
        segment.segment_type == "permission_like_statement"
        or "permission_escalation_hint" in segment.instruction_categories
        for segment in instructional_segments
    )
    if has_permission_signal:
        score += 1

    has_suspicious_metadata = any(segment.segment_type == "metadata" for segment in instructional_segments)
    if has_suspicious_metadata:
        score += 1

    if drift_detected and {"toolchain_protocol", "loop_verification_protocol"} & categories:
        score += 1

    capabilities = set(induced_capabilities)
    if {"download", "shell_exec"} <= capabilities:
        score += 2
    if {"network_fetch", "package_install"} <= capabilities:
        score += 1
    if {"credential_access", "remote_write"} <= capabilities:
        score += 2
    if {"external_service_dependency", "monetized_external_action"} <= capabilities:
        score += 1
    if {"skill_read", "package_install"} <= capabilities:
        score += 1

    if score <= 1:
        risk_level = "low"
    elif score <= 4:
        risk_level = "medium"
    else:
        risk_level = "high"

    return score, risk_level


def _detect_behavioral_findings(instructional_segments: list[InstructionalSegment]) -> list[dict[str, Any]]:
    findings: list[dict[str, Any]] = []
    capabilities = {
        capability
        for segment in instructional_segments
        for capability in segment.capabilities
    }
    texts = [segment.text for segment in instructional_segments]
    joined = "\n".join(texts)

    def _evidence_for(*keywords: str) -> list[dict[str, Any]]:
        matched = []
        lowered = [keyword.lower() for keyword in keywords]
        for segment in instructional_segments:
            text_lower = segment.text.lower()
            if any(keyword in text_lower for keyword in lowered):
                matched.append(
                    {
                        "line_number": segment.line_number,
                        "segment_type": segment.segment_type,
                        "text": segment.text[:300],
                    }
                )
        return matched[:5]

    if {"credential_access", "network_fetch"} <= capabilities and any(
        marker in joined.lower() for marker in ("webhook.site", "emailhook.site", "process.env", ".env")
    ):
        findings.append(
            {
                "finding_kind": "credential_exfiltration_pattern",
                "severity": "high",
                "summary": "Sensitive credential access is combined with outbound network behavior.",
                "evidence": _evidence_for("webhook.site", "emailhook.site", "process.env", ".env"),
            }
        )

    hidden_instruction_segments = [
        segment
        for segment in instructional_segments
        if {"hidden", "tiny", "transparent", "off_canvas"} & set(segment.visibility_flags)
        and (segment.instruction_categories or segment.capabilities)
    ]
    hidden_instruction_capabilities = {
        capability
        for segment in hidden_instruction_segments
        for capability in segment.capabilities
    }
    if hidden_instruction_segments:
        severity = (
            "high"
            if hidden_instruction_capabilities & {"download", "network_fetch", "shell_exec", "web_search", "remote_write"}
            else "medium"
        )
        findings.append(
            {
                "finding_kind": "hidden_instruction_payload",
                "severity": severity,
                "summary": "Hidden or tiny SVG-generated text contains action-oriented instructions unrelated to normal asset content.",
                "evidence": [
                    {
                        "line_number": segment.line_number,
                        "segment_type": segment.segment_type,
                        "text": segment.text[:300],
                    }
                    for segment in hidden_instruction_segments[:5]
                ],
            }
        )

    dangerous_exec_markers = (
        "|sh",
        "| sh",
        "| bash",
        "os.system",
        "subprocess.run",
        "subprocess.popen",
        "subprocess.call",
        "subprocess.check_output",
        "subprocess.check_call",
        "child_process.exec",
        "child_process.spawn",
        "exec(",
        "spawn(",
    )
    has_dangerous_exec = any(marker in joined.lower() for marker in dangerous_exec_markers)
    has_download_exec_combo = {"download", "shell_exec"} <= capabilities
    if has_dangerous_exec or has_download_exec_combo:
        findings.append(
            {
                "finding_kind": "download_execute_pattern",
                "severity": "high" if any(marker in joined.lower() for marker in ("|sh", "| sh", "| bash")) else "medium",
                "summary": "Remote retrieval appears coupled with command execution behavior.",
                "evidence": _evidence_for("curl", "wget", "|sh", "| bash", "os.system", "subprocess", "child_process", "exec(", "spawn("),
            }
        )

    shell_instruction_markers = (
        "powershell.exe",
        "cmd.exe",
        "/bin/sh",
        "bash -c",
        "sh -c",
        "-executionpolicy bypass",
    )
    if any(marker in joined.lower() for marker in shell_instruction_markers):
        findings.append(
            {
                "finding_kind": "explicit_shell_execution_instruction",
                "severity": "high" if "-executionpolicy bypass" in joined.lower() else "medium",
                "summary": "The content contains explicit shell or interpreter execution instructions.",
                "evidence": _evidence_for(
                    "powershell.exe",
                    "cmd.exe",
                    "/bin/sh",
                    "bash -c",
                    "sh -c",
                    "-ExecutionPolicy Bypass",
                ),
            }
        )

    if {"credential_access", "file_read"} <= capabilities:
        findings.append(
            {
                "finding_kind": "local_secret_access_pattern",
                "severity": "medium",
                "summary": "The script appears to access local secret-bearing files or environment state.",
                "evidence": _evidence_for(".env", "process.env", "readfile", "homedir", "~/."),
            }
        )

    if {"network_fetch", "package_install"} <= capabilities and any(
        marker in joined.lower()
        for marker in ("clawhub install", "skillscope install", "pip install", "npm install", "mcp server", "agent card")
    ):
        findings.append(
            {
                "finding_kind": "external_broker_install_pattern",
                "severity": "medium",
                "summary": "The content routes the agent through an external service or broker and pairs it with an install flow.",
                "evidence": _evidence_for(
                    "clawhub install",
                    "skillscope install",
                    "pip install",
                    "npm install",
                    "mcp server",
                    "agent card",
                    "base url",
                ),
            }
        )

    if {"credential_access", "remote_write"} <= capabilities and any(
        marker in joined.lower()
        for marker in ("gh issue create", "gh pr create", "github_token", "review comment", "pull request", "create issue")
    ):
        findings.append(
            {
                "finding_kind": "credentialed_remote_admin_pattern",
                "severity": "medium",
                "summary": "The content combines authenticated credentials with remote repository mutation actions.",
                "evidence": _evidence_for(
                    "gh issue create",
                    "gh pr create",
                    "GITHUB_TOKEN",
                    "review comment",
                    "pull request",
                    "create issue",
                ),
            }
        )

    return findings


class StaticAuditor:
    """Content-level static auditor for external artifacts such as SVG and SKILL.md."""

    def audit_svg(self, content: str, user_task_text: str, source_name: str = "inline.svg") -> StaticAuditResult:
        extracted = extract_svg_artifacts(content, source_name=source_name)
        return self._build_audit_result(extracted, user_task_text=user_task_text)

    def audit_skill_md(self, content: str, user_task_text: str, source_name: str = "SKILL.md") -> StaticAuditResult:
        extracted = extract_skill_md_artifacts(content, source_name=source_name)
        return self._build_audit_result(extracted, user_task_text=user_task_text)

    def audit_config(self, content: str, user_task_text: str, source_name: str) -> StaticAuditResult:
        extracted = extract_config_artifacts(content, source_name=source_name, content_type="config")
        return self._build_audit_result(extracted, user_task_text=user_task_text)

    def audit_script(self, content: str, user_task_text: str, source_name: str) -> StaticAuditResult:
        extracted = extract_script_artifacts(content, source_name=source_name, content_type="script")
        return self._build_audit_result(extracted, user_task_text=user_task_text)

    def audit_content(
        self,
        content_type: str,
        content: str,
        user_task_text: str,
        source_name: str,
    ) -> StaticAuditResult:
        if content_type == "svg":
            return self.audit_svg(content, user_task_text=user_task_text, source_name=source_name)
        if content_type in {"skill_md", "markdown"}:
            return self.audit_skill_md(content, user_task_text=user_task_text, source_name=source_name)
        if content_type in {"config", "json", "yaml", "yml", "toml", "ini", "cfg", "conf", "env"}:
            return self.audit_config(content, user_task_text=user_task_text, source_name=source_name)
        if content_type in {"script", "javascript", "typescript", "python_script", "shell_script"}:
            return self.audit_script(content, user_task_text=user_task_text, source_name=source_name)
        raise ValueError(f"Unsupported content type: {content_type}")

    def _build_audit_result(self, extracted: dict[str, Any], user_task_text: str) -> StaticAuditResult:
        artifact_dicts = extracted.get("segments", [])
        instructional_segment_dicts = _analyze_instructional_segments(artifact_dicts)
        induced_capabilities = sorted(
            {
                capability
                for segment in instructional_segment_dicts
                for capability in segment.get("capabilities", [])
            }
        )
        consistency_result = analyze_task_consistency(user_task_text, induced_capabilities)
        drift_result = analyze_drift(artifact_dicts, instructional_segment_dicts, consistency_result)
        artifacts = [Artifact.from_dict(item) for item in artifact_dicts]
        instructional_segments = [InstructionalSegment.from_dict(item) for item in instructional_segment_dicts]
        risk_score, risk_level = _compute_risk_assessment(
            artifacts=artifacts,
            instructional_segments=instructional_segments,
            induced_capabilities=consistency_result.induced_capabilities,
            drift_detected=drift_result.drift_detected,
        )
        behavioral_findings = _detect_behavioral_findings(instructional_segments)
        if any(finding.get("severity") == "high" for finding in behavioral_findings):
            risk_level = "high"
            risk_score = max(risk_score, 5)
        elif any(finding.get("severity") == "medium" for finding in behavioral_findings):
            risk_level = "medium" if risk_level == "low" else risk_level
            risk_score = max(risk_score, 3)

        return StaticAuditResult(
            source_name=extracted.get("source_name"),
            artifact_type=extracted.get("artifact_type", ""),
            parse_error=extracted.get("parse_error"),
            artifacts=artifacts,
            instructional_segments=instructional_segments,
            induced_capabilities=consistency_result.induced_capabilities,
            task_capabilities=consistency_result.task_capabilities,
            new_capability_domains=consistency_result.new_capability_domains,
            consistency_judgment=consistency_result.consistency_judgment,
            drift_detected=drift_result.drift_detected,
            drift_targets=drift_result.drift_targets,
            candidate_target_skills=drift_result.candidate_target_skills,
            risk_score=risk_score,
            risk_level=risk_level,
            risk_reasons=drift_result.risk_reasons,
            evidence=drift_result.evidence,
            behavioral_findings=behavioral_findings,
        )


__all__ = ["StaticAuditor"]
