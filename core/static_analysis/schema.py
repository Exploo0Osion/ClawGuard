from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any


@dataclass
class Artifact:
    artifact_type: str
    segment_type: str
    text: str
    line_number: int | None
    attributes: dict[str, Any] = field(default_factory=dict)
    visibility_flags: list[str] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "Artifact":
        return cls(
            artifact_type=data.get("artifact_type", ""),
            segment_type=data.get("segment_type", ""),
            text=data.get("text", ""),
            line_number=data.get("line_number"),
            attributes=dict(data.get("attributes", {})),
            visibility_flags=list(data.get("visibility_flags", [])),
        )

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class InstructionalSegment(Artifact):
    instruction_categories: list[str] = field(default_factory=list)
    capabilities: list[str] = field(default_factory=list)

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "InstructionalSegment":
        return cls(
            artifact_type=data.get("artifact_type", ""),
            segment_type=data.get("segment_type", ""),
            text=data.get("text", ""),
            line_number=data.get("line_number"),
            attributes=dict(data.get("attributes", {})),
            visibility_flags=list(data.get("visibility_flags", [])),
            instruction_categories=list(data.get("instruction_categories", [])),
            capabilities=list(data.get("capabilities", [])),
        )


@dataclass
class TaskConsistencyResult:
    task_capabilities: list[str]
    induced_capabilities: list[str]
    new_capability_domains: list[str]
    consistency_judgment: str

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class DriftAnalysisResult:
    drift_detected: bool
    drift_targets: list[str]
    candidate_target_skills: list[str]
    risk_reasons: list[str]
    evidence: list[InstructionalSegment] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        result = asdict(self)
        result["evidence"] = [segment.to_dict() for segment in self.evidence]
        return result


@dataclass
class StaticAuditResult:
    artifact_type: str
    artifacts: list[Artifact]
    instructional_segments: list[InstructionalSegment]
    induced_capabilities: list[str]
    task_capabilities: list[str]
    new_capability_domains: list[str]
    consistency_judgment: str
    drift_detected: bool
    drift_targets: list[str]
    candidate_target_skills: list[str]
    risk_reasons: list[str]
    evidence: list[InstructionalSegment]
    behavioral_findings: list[dict[str, Any]] = field(default_factory=list)
    risk_score: int | float = 0
    risk_level: str = "low"
    source_name: str | None = None
    parse_error: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "source_name": self.source_name,
            "artifact_type": self.artifact_type,
            "parse_error": self.parse_error,
            "artifacts": [artifact.to_dict() for artifact in self.artifacts],
            "instructional_segments": [segment.to_dict() for segment in self.instructional_segments],
            "induced_capabilities": list(self.induced_capabilities),
            "task_capabilities": list(self.task_capabilities),
            "new_capability_domains": list(self.new_capability_domains),
            "consistency_judgment": self.consistency_judgment,
            "drift_detected": self.drift_detected,
            "drift_targets": list(self.drift_targets),
            "candidate_target_skills": list(self.candidate_target_skills),
            "risk_score": self.risk_score,
            "risk_level": self.risk_level,
            "risk_reasons": list(self.risk_reasons),
            "evidence": [segment.to_dict() for segment in self.evidence],
            "behavioral_findings": list(self.behavioral_findings),
        }


__all__ = [
    "Artifact",
    "DriftAnalysisResult",
    "InstructionalSegment",
    "StaticAuditResult",
    "TaskConsistencyResult",
]
