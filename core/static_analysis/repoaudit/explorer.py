from __future__ import annotations

from agentdojo.static_analysis.models import Function
from agentdojo.static_analysis.repoaudit.bug_definitions import BugDefinition
from agentdojo.static_analysis.repoaudit.llm import RepoAuditLLMClient
from agentdojo.static_analysis.repoaudit.memory import AgentMemory
from agentdojo.static_analysis.repoaudit.parser import RepositoryIndex, get_parameter_by_index
from agentdojo.static_analysis.repoaudit.schema import (
    BugReport,
    CodeLocation,
    DataFlowFact,
    EscapeEvent,
    FunctionExplorationResult,
    PathBundle,
    SinkEvent,
    SourceValue,
)
from agentdojo.static_analysis.repoaudit.validator import RepoAuditValidator


def _location(function: Function, line_number: int) -> CodeLocation:
    return CodeLocation(function.file_path, function.function_name, line_number)


class RepoAuditExplorer:
    def __init__(
        self,
        index: RepositoryIndex,
        validator: RepoAuditValidator,
        max_call_depth: int = 4,
        llm_client: RepoAuditLLMClient | None = None,
    ) -> None:
        self.index = index
        self.validator = validator
        self.max_call_depth = max_call_depth
        self.llm_client = llm_client

    def explore(
        self,
        source: SourceValue,
        bug_definition: BugDefinition,
        memory: AgentMemory,
    ) -> list[BugReport]:
        reports: list[BugReport] = []
        for sink, facts, path in self._explore_function(
            source=source,
            bug_definition=bug_definition,
            memory=memory,
            function_id=source.function_id,
            tracked_value=source.variable_name,
            start_line_number=source.location.line_number,
            depth=0,
            path_prefix=[],
        ):
            report = BugReport(
                bug_type=bug_definition.bug_type,
                source=source,
                sink=sink,
                trace_facts=facts,
                interprocedural_path=path,
                path_conditions=[condition for item in path for condition in item.get("path_conditions", [])],
            )
            feasible, notes, validation_backend = self.validator.validate_bug_report(report)
            if not feasible:
                continue
            report.validator_notes.extend(notes)
            report.validation_status = "validated"
            report.validation_backend = validation_backend
            report.report_id = (
                f"{bug_definition.bug_type}:{sink.location.file_path}:{sink.location.line_number}:{source.variable_name}"
            )
            report.evidence_summary = self._build_evidence_summary(report)
            reports.append(report)
        return reports

    @staticmethod
    def _build_evidence_summary(report: BugReport) -> str:
        path_functions = [str(item.get("function_name", "?")) for item in report.interprocedural_path]
        transfer_count = sum(1 for fact in report.trace_facts if fact.fact_kind in {"argument_transfer", "return_transfer"})
        summary = (
            f"source {report.source.variable_name} at {report.source.location.file_path}:{report.source.location.line_number} "
            f"reaches {report.sink.sink_kind} at {report.sink.location.file_path}:{report.sink.location.line_number}"
        )
        if path_functions:
            summary += f" via {' -> '.join(path_functions)}"
        if transfer_count:
            summary += f" with {transfer_count} interprocedural transfer facts"
        return summary

    def _explore_function(
        self,
        *,
        source: SourceValue,
        bug_definition: BugDefinition,
        memory: AgentMemory,
        function_id: int,
        tracked_value: str,
        start_line_number: int,
        depth: int,
        path_prefix: list[dict[str, object]],
    ) -> list[tuple[SinkEvent, list[DataFlowFact], list[dict[str, object]]]]:
        if depth > min(self.max_call_depth, bug_definition.interprocedural_limit):
            return []

        cached = memory.get(bug_definition.bug_type, function_id, tracked_value, start_line_number)
        if cached is None:
            cached = self._analyze_individual_function(
                bug_definition=bug_definition,
                function=self.index.get_function(function_id),
                tracked_value=tracked_value,
                start_line_number=start_line_number,
            )
            cached = self.validator.validate_function_result(self.index, cached)
            memory.put(cached)

        current_path_entry = {
            "file_path": self.index.get_function(function_id).file_path,
            "function_name": cached.function_name,
            "tracked_value": tracked_value,
            "start_line_number": start_line_number,
            "abstraction_lines": list(cached.abstraction_lines),
            "path_conditions": sorted({condition for bundle in cached.path_bundles for condition in bundle.conditions}),
            "path_bundles": [bundle.to_dict() for bundle in cached.path_bundles],
        }
        extended_prefix = [*path_prefix, current_path_entry]
        results = [(sink, list(cached.data_flow_facts), extended_prefix) for sink in cached.sinks]

        for escape in cached.escapes:
            if escape.escape_kind == "call" and escape.callee_id is not None and escape.argument_index is not None:
                callee = self.index.get_function(escape.callee_id)
                parameter = get_parameter_by_index(callee, escape.argument_index)
                if parameter is None:
                    continue
                transfer_fact = DataFlowFact(
                    bug_type=bug_definition.bug_type,
                    fact_kind="argument_transfer",
                    source_name=escape.variable_name,
                    target_name=parameter.name,
                    source_location=_location(self.index.get_function(function_id), escape.line_number),
                    target_location=_location(callee, parameter.line_number),
                    path_id=escape.path_id,
                    path_conditions=escape.path_conditions,
                )
                for sink, child_facts, child_path in self._explore_function(
                    source=source,
                    bug_definition=bug_definition,
                    memory=memory,
                    function_id=callee.function_id,
                    tracked_value=parameter.name,
                    start_line_number=parameter.line_number,
                    depth=depth + 1,
                    path_prefix=extended_prefix,
                ):
                    results.append((sink, [*cached.data_flow_facts, transfer_fact, *child_facts], child_path))
            if escape.escape_kind == "return":
                callers = self.index.get_callers(function_id)
                for caller in callers:
                    tracked_name = self._resolve_return_in_caller(caller, self.index.get_function(function_id))
                    if tracked_name is None:
                        continue
                    transfer_fact = DataFlowFact(
                        bug_type=bug_definition.bug_type,
                        fact_kind="return_transfer",
                        source_name=escape.variable_name,
                        target_name=tracked_name[0],
                        source_location=_location(self.index.get_function(function_id), escape.line_number),
                        target_location=_location(caller, tracked_name[1]),
                        path_id=escape.path_id,
                        path_conditions=escape.path_conditions,
                    )
                    for sink, child_facts, child_path in self._explore_function(
                        source=source,
                        bug_definition=bug_definition,
                        memory=memory,
                        function_id=caller.function_id,
                        tracked_value=tracked_name[0],
                        start_line_number=tracked_name[1],
                        depth=depth + 1,
                        path_prefix=extended_prefix,
                    ):
                        results.append((sink, [*cached.data_flow_facts, transfer_fact, *child_facts], child_path))
        return results

    def _resolve_return_in_caller(self, caller: Function, callee: Function) -> tuple[str, int] | None:
        for binding in self.index.get_return_bindings(callee.function_id):
            if binding.caller_id != caller.function_id:
                continue
            return binding.assigned_name, binding.line_number
        return None

    def _analyze_individual_function(
        self,
        *,
        bug_definition: BugDefinition,
        function: Function,
        tracked_value: str,
        start_line_number: int,
    ) -> FunctionExplorationResult:
        llm_result = self._analyze_with_llm(
            bug_definition=bug_definition,
            function=function,
            tracked_value=tracked_value,
            start_line_number=start_line_number,
        )
        if llm_result is not None:
            return llm_result

        return FunctionExplorationResult(
            bug_type=bug_definition.bug_type,
            function_id=function.function_id,
            function_name=function.function_name,
            tracked_value=tracked_value,
            start_line_number=start_line_number,
            analysis_backend="llm_unavailable",
            path_bundles=[],
            validation_warnings=["llm-only execution is enabled and no LLM function-analysis result was available"],
        )

    def _analyze_with_llm(
        self,
        *,
        bug_definition: BugDefinition,
        function: Function,
        tracked_value: str,
        start_line_number: int,
    ) -> FunctionExplorationResult | None:
        if self.llm_client is None:
            return None
        candidate_lines = self._collect_candidate_focus_lines(function, tracked_value, start_line_number)
        minimized_context = self._build_minimized_function_context(function, candidate_lines)
        payload = {
            "bug_type": bug_definition.bug_type,
            "bug_description": bug_definition.description,
            "source_definition": bug_definition.source_definition,
            "sink_definition": bug_definition.sink_definition,
            "language_name": function.language_name,
            "function_name": function.function_name,
            "file_path": function.file_path,
            "start_line_number": function.start_line_number,
            "end_line_number": function.end_line_number,
            "tracked_value": tracked_value,
            "tracked_line_number": start_line_number,
            "parameters": [
                {"name": value.name, "line_number": value.line_number, "index": value.index}
                for value in sorted(function.paras or set(), key=lambda value: value.index)
            ],
            "direct_callees": [
                {
                    "function_name": callee.function_name,
                    "file_path": callee.file_path,
                    "language_name": callee.language_name,
                    "start_line_number": callee.start_line_number,
                }
                for callee in self.index.get_callees(function.function_id)
            ],
            "direct_callers": [
                {
                    "function_name": caller.function_name,
                    "file_path": caller.file_path,
                    "language_name": caller.language_name,
                    "start_line_number": caller.start_line_number,
                }
                for caller in self.index.get_callers(function.function_id)
            ],
            "candidate_focus_lines": candidate_lines,
            "function_context_with_lines": minimized_context,
            "required_json_schema": {
                "abstraction_lines": [1],
                "path_bundles": [{"path_id": "p0", "conditions": [], "relevant_lines": [1], "facts": [], "escapes": [], "sinks": []}],
                "facts": [{"fact_kind": "assignment", "source_name": tracked_value, "target_name": tracked_value, "source_line": start_line_number, "target_line": start_line_number, "path_id": "p0", "path_conditions": []}],
                "escapes": [{"escape_kind": "return", "line_number": start_line_number, "variable_name": tracked_value, "path_id": "p0", "path_conditions": [], "callee_name": None, "argument_index": None}],
                "sinks": [{"sink_kind": "dereference", "line_number": start_line_number, "variable_name": tracked_value, "path_id": "p0", "path_conditions": [], "explanation": ""}],
            },
        }
        response = self.llm_client.analyze_function(payload)
        if response is None:
            return None

        path_bundles = [
            PathBundle(
                path_id=str(item.get("path_id", "p0")),
                conditions=[str(condition) for condition in item.get("conditions", [])],
                relevant_lines=[int(line) for line in item.get("relevant_lines", []) if isinstance(line, int | float)],
            )
            for item in response.get("path_bundles", [])
        ]
        abstraction_lines = [int(line) for line in response.get("abstraction_lines", []) if isinstance(line, int | float)]

        facts: list[DataFlowFact] = []
        for item in response.get("facts", []):
            try:
                facts.append(
                    DataFlowFact(
                        bug_type=bug_definition.bug_type,
                        fact_kind=str(item.get("fact_kind", "assignment")),
                        source_name=str(item.get("source_name", tracked_value)),
                        target_name=str(item.get("target_name", tracked_value)),
                        source_location=_location(function, int(item.get("source_line", start_line_number))),
                        target_location=_location(function, int(item.get("target_line", start_line_number))),
                        path_id=str(item.get("path_id", "p0")),
                        path_conditions=tuple(str(condition) for condition in item.get("path_conditions", [])),
                    )
                )
            except (TypeError, ValueError):
                continue

        escapes: list[EscapeEvent] = []
        for item in response.get("escapes", []):
            callee_name = item.get("callee_name")
            callee_id = None
            if isinstance(callee_name, str):
                matches = self.index.get_function_by_name(callee_name)
                if matches:
                    callee_id = matches[0].function_id
            try:
                escapes.append(
                    EscapeEvent(
                        escape_kind=str(item.get("escape_kind", "return")),
                        function_id=function.function_id,
                        function_name=function.function_name,
                        line_number=int(item.get("line_number", start_line_number)),
                        variable_name=str(item.get("variable_name", tracked_value)),
                        path_id=str(item.get("path_id", "p0")),
                        path_conditions=tuple(str(condition) for condition in item.get("path_conditions", [])),
                        callee_id=callee_id,
                        callee_name=callee_name if isinstance(callee_name, str) else None,
                        argument_index=int(item["argument_index"]) if item.get("argument_index") is not None else None,
                    )
                )
            except (TypeError, ValueError):
                continue

        sinks: list[SinkEvent] = []
        for item in response.get("sinks", []):
            try:
                sinks.append(
                    SinkEvent(
                        bug_type=bug_definition.bug_type,
                        sink_kind=str(item.get("sink_kind", "dereference")),
                        variable_name=str(item.get("variable_name", tracked_value)),
                        function_id=function.function_id,
                        location=_location(function, int(item.get("line_number", start_line_number))),
                        path_id=str(item.get("path_id", "p0")),
                        path_conditions=tuple(str(condition) for condition in item.get("path_conditions", [])),
                        explanation=str(item.get("explanation", "")),
                    )
                )
            except (TypeError, ValueError):
                continue

        if not facts and not escapes and not sinks:
            return None

        grouped_paths: dict[str, PathBundle] = {bundle.path_id: bundle for bundle in path_bundles}
        for fact in facts:
            grouped_paths.setdefault(fact.path_id, PathBundle(path_id=fact.path_id, conditions=list(fact.path_conditions))).facts.append(fact)
        for escape in escapes:
            grouped_paths.setdefault(
                escape.path_id,
                PathBundle(path_id=escape.path_id, conditions=list(escape.path_conditions)),
            ).escapes.append(escape)
        for sink in sinks:
            grouped_paths.setdefault(
                sink.path_id,
                PathBundle(path_id=sink.path_id, conditions=list(sink.path_conditions)),
            ).sinks.append(sink)

        return FunctionExplorationResult(
            bug_type=bug_definition.bug_type,
            function_id=function.function_id,
            function_name=function.function_name,
            tracked_value=tracked_value,
            start_line_number=start_line_number,
            analysis_backend="llm",
            path_bundles=list(grouped_paths.values()),
            abstraction_lines=sorted(set(abstraction_lines)),
            data_flow_facts=facts,
            escapes=escapes,
            sinks=sinks,
            validation_warnings=["llm-primary function analysis"],
        )

    def _collect_candidate_focus_lines(self, function: Function, tracked_value: str, start_line_number: int) -> list[int]:
        candidate_lines = {start_line_number}
        for offset, line in enumerate(function.function_code.splitlines(), start=function.start_line_number):
            stripped = line.strip()
            if tracked_value in stripped:
                candidate_lines.add(offset)
            if any(
                keyword in stripped
                for keyword in (
                    "return",
                    "if",
                    "else",
                    "free",
                    "delete",
                    "close",
                    "NULL",
                    "nullptr",
                    "None",
                    "process.env",
                    "os.environ",
                    "getenv",
                    ".env",
                    "credentials",
                    "token",
                    "secret",
                    "password",
                    "requests.",
                    "fetch(",
                    "axios.",
                    "curl",
                    "wget",
                    "upload",
                    "post(",
                    "exec(",
                    "spawn(",
                    "subprocess",
                    "os.system",
                    "powershell",
                    "/bin/sh",
                    "bash ",
                )
            ):
                candidate_lines.add(offset)
        candidate_lines.add(function.start_line_number)
        candidate_lines.add(function.end_line_number)
        return sorted(candidate_lines)

    def _build_minimized_function_context(self, function: Function, candidate_lines: list[int], window: int = 1) -> str:
        file_lines = function.function_code.splitlines()
        absolute_lines = list(range(function.start_line_number, function.end_line_number + 1))
        selected: set[int] = set()
        for line in candidate_lines:
            for expanded in range(max(function.start_line_number, line - window), min(function.end_line_number, line + window) + 1):
                selected.add(expanded)
        selected_ordered = [line for line in absolute_lines if line in selected]
        fragments = []
        for line in selected_ordered:
            relative_index = line - function.start_line_number
            if 0 <= relative_index < len(file_lines):
                fragments.append(f"{line}. {file_lines[relative_index]}")
        return "\n".join(fragments)
