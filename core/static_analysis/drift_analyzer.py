from __future__ import annotations

from typing import Any

from agentdojo.static_analysis.capability_mapper import capabilities_to_domains
from agentdojo.static_analysis.schema import DriftAnalysisResult, InstructionalSegment


TARGET_SKILL_MAP = {
    "image": "image-processing",
    "web": "web-research",
    "network": "network-access",
    "file": "workspace-files",
    "skill": "skill-loading",
    "browser": "browser-control",
    "shell": "shell-operations",
    "credential": "credential-access",
}


def analyze_drift(
    artifacts: list[dict[str, Any]],
    instructional_segments: list[dict[str, Any]],
    consistency_result,
) -> DriftAnalysisResult:
    induced_capabilities = consistency_result.induced_capabilities
    new_capability_domains = consistency_result.new_capability_domains
    drift_targets = sorted({segment["segment_type"] for segment in instructional_segments})
    candidate_target_skills = sorted(
        {TARGET_SKILL_MAP[domain] for domain in capabilities_to_domains(induced_capabilities) if domain in TARGET_SKILL_MAP}
    )

    risk_reasons: list[str] = []
    evidence: list[dict[str, Any]] = []

    if len(new_capability_domains) > 0:
        risk_reasons.append(
            "External content introduces capability domains not implied by the user task."
        )

    for segment in instructional_segments:
        categories = segment.get("instruction_categories", [])
        if "permission_escalation_hint" in categories:
            risk_reasons.append("External content contains permission-escalation or approval-seeking language.")
        if "toolchain_protocol" in categories:
            risk_reasons.append("External content defines its own tool-use protocol or response format.")
        if len(segment.get("capabilities", [])) > 0:
            evidence.append(
                {
                    "segment_type": segment.get("segment_type"),
                    "line_number": segment.get("line_number"),
                    "text": segment.get("text"),
                    "capabilities": segment.get("capabilities"),
                    "instruction_categories": categories,
                }
            )

    drift_detected = len(new_capability_domains) > 0 or len(risk_reasons) > 0

    return DriftAnalysisResult(
        drift_detected=drift_detected,
        drift_targets=drift_targets,
        candidate_target_skills=candidate_target_skills,
        risk_reasons=sorted(set(risk_reasons)),
        evidence=[InstructionalSegment.from_dict(item) for item in evidence],
    )


__all__ = ["analyze_drift"]
