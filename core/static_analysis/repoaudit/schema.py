from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any


@dataclass(frozen=True)
class CodeLocation:
    file_path: str
    function_name: str
    line_number: int

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass(frozen=True)
class SourceValue:
    bug_type: str
    variable_name: str
    function_id: int
    location: CodeLocation
    reason: str

    def key(self) -> tuple[str, int, str, int]:
        return (self.bug_type, self.function_id, self.variable_name, self.location.line_number)

    def to_dict(self) -> dict[str, Any]:
        return {
            "bug_type": self.bug_type,
            "variable_name": self.variable_name,
            "function_id": self.function_id,
            "location": self.location.to_dict(),
            "reason": self.reason,
        }


@dataclass(frozen=True)
class DataFlowFact:
    bug_type: str
    fact_kind: str
    source_name: str
    target_name: str
    source_location: CodeLocation
    target_location: CodeLocation
    path_id: str
    path_conditions: tuple[str, ...] = ()

    def to_dict(self) -> dict[str, Any]:
        return {
            "bug_type": self.bug_type,
            "fact_kind": self.fact_kind,
            "source_name": self.source_name,
            "target_name": self.target_name,
            "source_location": self.source_location.to_dict(),
            "target_location": self.target_location.to_dict(),
            "path_id": self.path_id,
            "path_conditions": list(self.path_conditions),
        }


@dataclass(frozen=True)
class EscapeEvent:
    escape_kind: str
    function_id: int
    function_name: str
    line_number: int
    variable_name: str
    path_id: str
    path_conditions: tuple[str, ...] = ()
    callee_id: int | None = None
    callee_name: str | None = None
    argument_index: int | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "escape_kind": self.escape_kind,
            "function_id": self.function_id,
            "function_name": self.function_name,
            "line_number": self.line_number,
            "variable_name": self.variable_name,
            "path_id": self.path_id,
            "path_conditions": list(self.path_conditions),
            "callee_id": self.callee_id,
            "callee_name": self.callee_name,
            "argument_index": self.argument_index,
        }


@dataclass(frozen=True)
class SinkEvent:
    bug_type: str
    sink_kind: str
    variable_name: str
    function_id: int
    location: CodeLocation
    path_id: str
    path_conditions: tuple[str, ...] = ()
    explanation: str = ""

    def to_dict(self) -> dict[str, Any]:
        return {
            "bug_type": self.bug_type,
            "sink_kind": self.sink_kind,
            "variable_name": self.variable_name,
            "function_id": self.function_id,
            "location": self.location.to_dict(),
            "path_id": self.path_id,
            "path_conditions": list(self.path_conditions),
            "explanation": self.explanation,
        }


@dataclass
class PathBundle:
    path_id: str
    conditions: list[str] = field(default_factory=list)
    relevant_lines: list[int] = field(default_factory=list)
    facts: list[DataFlowFact] = field(default_factory=list)
    escapes: list[EscapeEvent] = field(default_factory=list)
    sinks: list[SinkEvent] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        return {
            "path_id": self.path_id,
            "conditions": list(self.conditions),
            "relevant_lines": list(self.relevant_lines),
            "facts": [fact.to_dict() for fact in self.facts],
            "escapes": [escape.to_dict() for escape in self.escapes],
            "sinks": [sink.to_dict() for sink in self.sinks],
        }


@dataclass
class FunctionExplorationResult:
    bug_type: str
    function_id: int
    function_name: str
    tracked_value: str
    start_line_number: int
    analysis_backend: str = "offline"
    path_bundles: list[PathBundle] = field(default_factory=list)
    abstraction_lines: list[int] = field(default_factory=list)
    data_flow_facts: list[DataFlowFact] = field(default_factory=list)
    escapes: list[EscapeEvent] = field(default_factory=list)
    sinks: list[SinkEvent] = field(default_factory=list)
    validation_warnings: list[str] = field(default_factory=list)

    def to_dict(self) -> dict[str, Any]:
        return {
            "bug_type": self.bug_type,
            "function_id": self.function_id,
            "function_name": self.function_name,
            "tracked_value": self.tracked_value,
            "start_line_number": self.start_line_number,
            "analysis_backend": self.analysis_backend,
            "path_bundles": [bundle.to_dict() for bundle in self.path_bundles],
            "abstraction_lines": list(self.abstraction_lines),
            "data_flow_facts": [fact.to_dict() for fact in self.data_flow_facts],
            "escapes": [escape.to_dict() for escape in self.escapes],
            "sinks": [sink.to_dict() for sink in self.sinks],
            "validation_warnings": list(self.validation_warnings),
        }


@dataclass(frozen=True)
class MemoryKey:
    bug_type: str
    function_id: int
    tracked_value: str
    start_line_number: int

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class MemoryEntry:
    key: MemoryKey
    result: FunctionExplorationResult

    def to_dict(self) -> dict[str, Any]:
        return {
            "key": self.key.to_dict(),
            "paper_memory_slot": f"M({self.result.function_name}, {self.result.tracked_value}@{self.result.start_line_number})",
            "path_bundle_count": len(self.result.path_bundles),
            "result": self.result.to_dict(),
        }


@dataclass
class BugReport:
    bug_type: str
    source: SourceValue
    sink: SinkEvent
    trace_facts: list[DataFlowFact]
    interprocedural_path: list[dict[str, Any]]
    path_conditions: list[str]
    evidence_summary: str = ""
    validation_status: str = "unvalidated"
    validation_backend: str = "offline"
    validator_notes: list[str] = field(default_factory=list)
    report_id: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "report_id": self.report_id,
            "bug_type": self.bug_type,
            "source": self.source.to_dict(),
            "sink": self.sink.to_dict(),
            "trace_facts": [fact.to_dict() for fact in self.trace_facts],
            "interprocedural_path": list(self.interprocedural_path),
            "path_conditions": list(self.path_conditions),
            "evidence_summary": self.evidence_summary,
            "validation_status": self.validation_status,
            "validation_backend": self.validation_backend,
            "validator_notes": list(self.validator_notes),
        }


@dataclass
class RepoAuditResult:
    source_name: str | None
    repository_root: str
    artifact_type: str = "code"
    language_name: str = "Python"
    bug_definitions: list[str] = field(default_factory=list)
    implemented_techniques: list[str] = field(default_factory=list)
    initiator_sources: list[SourceValue] = field(default_factory=list)
    bug_reports: list[BugReport] = field(default_factory=list)
    memory_entries: list[MemoryEntry] = field(default_factory=list)
    prompt_templates_used: list[str] = field(default_factory=list)
    configuration: dict[str, Any] = field(default_factory=dict)
    parse_error: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "source_name": self.source_name,
            "repository_root": self.repository_root,
            "artifact_type": self.artifact_type,
            "language_name": self.language_name,
            "bug_definitions": list(self.bug_definitions),
            "implemented_techniques": list(self.implemented_techniques),
            "initiator_sources": [source.to_dict() for source in self.initiator_sources],
            "bug_reports": [report.to_dict() for report in self.bug_reports],
            "memory_entries": [entry.to_dict() for entry in self.memory_entries],
            "prompt_templates_used": list(self.prompt_templates_used),
            "configuration": dict(self.configuration),
            "parse_error": self.parse_error,
        }
