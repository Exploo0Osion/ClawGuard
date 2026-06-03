from __future__ import annotations

import re

from agentdojo.static_analysis.repoaudit.llm import RepoAuditLLMClient
from agentdojo.static_analysis.repoaudit.parser import RepositoryIndex
from agentdojo.static_analysis.repoaudit.schema import BugReport, DataFlowFact, FunctionExplorationResult


def _strip_outer_parentheses(text: str) -> str:
    normalized = text.strip()
    while normalized.startswith("(") and normalized.endswith(")"):
        candidate = normalized[1:-1].strip()
        if not candidate:
            break
        normalized = candidate
    return normalized


def _condition_atoms(condition: str) -> set[tuple[str, str]]:
    normalized = _strip_outer_parentheses(condition.strip())
    if normalized.startswith("not "):
        inner = _strip_outer_parentheses(normalized[4:].strip())
        atoms = _condition_atoms(inner)
        return {(name, "neg") if relation == "pos" else (name, "pos") for name, relation in atoms}

    atoms: set[tuple[str, str]] = set()

    null_eq = re.fullmatch(r"([A-Za-z_][A-Za-z0-9_]*)\s*==\s*(NULL|nullptr|None)", normalized)
    if null_eq is not None:
        atoms.add((null_eq.group(1), "is_null"))
        return atoms

    null_neq = re.fullmatch(r"([A-Za-z_][A-Za-z0-9_]*)\s*!=\s*(NULL|nullptr|None)", normalized)
    if null_neq is not None:
        atoms.add((null_neq.group(1), "not_null"))
        return atoms

    negated_identifier = re.fullmatch(r"!\s*([A-Za-z_][A-Za-z0-9_]*)", normalized)
    if negated_identifier is not None:
        atoms.add((negated_identifier.group(1), "false"))
        return atoms

    identifier = re.fullmatch(r"([A-Za-z_][A-Za-z0-9_]*)", normalized)
    if identifier is not None:
        atoms.add((identifier.group(1), "true"))
        return atoms

    loop = re.fullmatch(r"loop\((.+)\)", normalized)
    if loop is not None:
        for name, relation in _condition_atoms(loop.group(1)):
            atoms.add((f"loop:{name}", relation))
        return atoms

    return {(normalized, "pos")}


def _contradictory_conditions(conditions: list[str]) -> list[str]:
    observed: dict[str, set[str]] = {}
    contradictions: set[str] = set()
    incompatible_pairs = {
        ("pos", "neg"),
        ("true", "false"),
        ("is_null", "not_null"),
    }
    for condition in conditions:
        for name, relation in _condition_atoms(condition):
            observed.setdefault(name, set()).add(relation)
    for name, relations in observed.items():
        for left, right in incompatible_pairs:
            if left in relations and right in relations:
                contradictions.add(name)
    return sorted(contradictions)


def _trace_discontinuities(report: BugReport) -> list[str]:
    issues: list[str] = []
    if not report.trace_facts:
        return issues
    current_names = {report.source.variable_name}
    for fact in report.trace_facts:
        if fact.source_name not in current_names:
            issues.append(f"trace discontinuity before fact {fact.source_name}->{fact.target_name}")
            break
        current_names.add(fact.target_name)
    if report.sink.variable_name not in current_names:
        issues.append(f"sink variable {report.sink.variable_name} is not connected to the accumulated trace facts")
    return issues


def _path_bundle_line_order_issues(result: FunctionExplorationResult) -> list[str]:
    issues: list[str] = []
    for bundle in result.path_bundles:
        ordered_lines = sorted(bundle.relevant_lines)
        if ordered_lines != bundle.relevant_lines and bundle.relevant_lines:
            issues.append(f"path bundle {bundle.path_id} has unsorted relevant lines")
        fact_lines = [fact.target_location.line_number for fact in bundle.facts if fact.target_location.function_name == result.function_name]
        if fact_lines and fact_lines != sorted(fact_lines):
            issues.append(f"path bundle {bundle.path_id} has non-monotonic fact lines")
    return issues


class RepoAuditValidator:
    def __init__(self, llm_client: RepoAuditLLMClient | None = None) -> None:
        self.llm_client = llm_client

    def validate_function_result(
        self,
        index: RepositoryIndex,
        result: FunctionExplorationResult,
    ) -> FunctionExplorationResult:
        function = index.get_function(result.function_id)
        valid_facts: list[DataFlowFact] = []
        warnings: list[str] = list(result.validation_warnings)
        for fact in result.data_flow_facts:
            if function.file_path != fact.target_location.file_path:
                valid_facts.append(fact)
                continue
            if function.file_path != fact.source_location.file_path:
                valid_facts.append(fact)
                continue
            if function.function_name != fact.target_location.function_name:
                valid_facts.append(fact)
                continue
            if function.function_name != fact.source_location.function_name:
                valid_facts.append(fact)
                continue
            if not index.check_control_order(function.function_id, fact.source_location.line_number, fact.target_location.line_number):
                warnings.append(
                    f"dropped fact {fact.source_name}->{fact.target_name} due to control-flow order mismatch"
                )
                continue
            valid_facts.append(fact)
        result.data_flow_facts = valid_facts
        warnings.extend(_path_bundle_line_order_issues(result))
        result.validation_warnings = warnings
        return result

    def validate_bug_report(self, report: BugReport) -> tuple[bool, list[str], str]:
        notes: list[str] = []
        llm_validation = self._validate_bug_report_with_llm(report)
        if llm_validation is not None:
            return llm_validation
        notes.append("llm-only validation is enabled and no LLM path-validation result was available")
        return False, notes, "llm_unavailable"

    def _validate_bug_report_with_llm(self, report: BugReport) -> tuple[bool, list[str], str] | None:
        if self.llm_client is None:
            return None
        payload = {
            "bug_type": report.bug_type,
            "sink_definition": report.sink.explanation,
            "source": report.source.to_dict(),
            "sink": report.sink.to_dict(),
            "path_conditions": report.path_conditions,
            "trace_facts": [
                {
                    "fact_kind": fact.fact_kind,
                    "source_name": fact.source_name,
                    "target_name": fact.target_name,
                    "source_location": fact.source_location.to_dict(),
                    "target_location": fact.target_location.to_dict(),
                    "path_conditions": list(fact.path_conditions),
                }
                for fact in report.trace_facts
            ],
            "interprocedural_path": [
                {
                    "file_path": item.get("file_path"),
                    "function_name": item.get("function_name"),
                    "tracked_value": item.get("tracked_value"),
                    "start_line_number": item.get("start_line_number"),
                    "path_conditions": item.get("path_conditions", []),
                    "abstraction_lines": item.get("abstraction_lines", []),
                    "path_bundles": item.get("path_bundles", []),
                }
                for item in report.interprocedural_path
            ],
            "required_json_schema": {
                "is_feasible": True,
                "notes": [],
            },
        }
        response = self.llm_client.validate_path(payload)
        if response is None:
            return None
        is_feasible = bool(response.get("is_feasible", True))
        notes = [str(note) for note in response.get("notes", [])]
        return is_feasible, notes, "llm"
