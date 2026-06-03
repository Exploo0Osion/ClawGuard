from __future__ import annotations

from pathlib import Path

from agentdojo.static_analysis.repoaudit.bug_definitions import DEFAULT_BUG_DEFINITIONS
from agentdojo.static_analysis.repoaudit.explorer import RepoAuditExplorer
from agentdojo.static_analysis.repoaudit.initiator import RepoAuditInitiator
from agentdojo.static_analysis.repoaudit.llm import RepoAuditLLMClient
from agentdojo.static_analysis.repoaudit.memory import AgentMemory
from agentdojo.static_analysis.repoaudit.parser import build_repository_index
from agentdojo.static_analysis.repoaudit.prompts import PROMPT_TEMPLATE_NAMES
from agentdojo.static_analysis.repoaudit.schema import RepoAuditResult
from agentdojo.static_analysis.repoaudit.validator import RepoAuditValidator


class RepoAuditor:
    def __init__(self, *, max_call_depth: int = 4, llm_client: RepoAuditLLMClient | None = None) -> None:
        self.max_call_depth = max_call_depth
        self.llm_client = llm_client or RepoAuditLLMClient()
        self.initiator = RepoAuditInitiator()
        self.validator = RepoAuditValidator(self.llm_client)

    def audit_repository(self, source_name: str | None = None, repository_root: str | Path | None = None) -> RepoAuditResult:
        root_path = Path.cwd() if repository_root is None else Path(repository_root).resolve()
        try:
            index = build_repository_index(root_path)
        except Exception as error:
            return RepoAuditResult(
                source_name=source_name,
                repository_root=str(root_path),
                bug_definitions=[bug_definition.bug_type for bug_definition in DEFAULT_BUG_DEFINITIONS],
                implemented_techniques=self._implemented_techniques(),
                prompt_templates_used=list(PROMPT_TEMPLATE_NAMES),
                configuration=self._configuration_payload(),
                parse_error=str(error),
            )

        memory = AgentMemory()
        explorer = RepoAuditExplorer(
            index=index,
            validator=self.validator,
            max_call_depth=self.max_call_depth,
            llm_client=self.llm_client,
        )
        all_sources = []
        reports = []
        for bug_definition in DEFAULT_BUG_DEFINITIONS:
            sources = self.initiator.identify_sources(index, bug_definition)
            all_sources.extend(sources)
            for source in sources:
                reports.extend(explorer.explore(source, bug_definition, memory))
        reports = self._deduplicate_reports(reports)

        return RepoAuditResult(
            source_name=source_name,
            repository_root=str(root_path),
            language_name=", ".join(index.language_names) if index.language_names else "Unknown",
            bug_definitions=[bug_definition.bug_type for bug_definition in DEFAULT_BUG_DEFINITIONS],
            implemented_techniques=self._implemented_techniques(),
            initiator_sources=all_sources,
            bug_reports=reports,
            memory_entries=memory.entries(),
            prompt_templates_used=list(PROMPT_TEMPLATE_NAMES),
            configuration=self._configuration_payload(memory),
        )

    def _configuration_payload(self, memory: AgentMemory | None = None) -> dict[str, object]:
        llm_diagnostics = self.llm_client.diagnostics()
        backend_summary: dict[str, int] = {}
        if memory is not None:
            for entry in memory.entries():
                backend = entry.result.analysis_backend
                backend_summary[backend] = backend_summary.get(backend, 0) + 1
        return {
            "max_call_depth": self.max_call_depth,
            "llm_mode": "enabled" if llm_diagnostics["enabled"] else "disabled",
            "analysis_priority": llm_diagnostics.get("execution_mode", "disabled"),
            "analysis_backend_summary": backend_summary,
            "llm_diagnostics": llm_diagnostics,
        }

    @staticmethod
    def _implemented_techniques() -> list[str]:
        return [
            "initiator",
            "tree_sitter_source_matchers",
            "explorer",
            "validator",
            "agent_memory",
            "memory_M_f_v_at_s",
            "program_abstraction",
            "pointer_or_reference_handling",
            "feasible_program_path_exploration",
            "prompt_templates_for_single_function_analysis",
            "demand_driven_function_selection",
            "interprocedural_bug_report_generation",
            "control_flow_alignment_validation",
            "path_feasibility_validation",
            "caching",
        ]

    @staticmethod
    def _deduplicate_reports(reports):
        deduped = []
        seen = set()
        for report in reports:
            key = (
                report.bug_type,
                report.source.location.file_path,
                report.source.location.line_number,
                report.source.variable_name,
                report.sink.location.file_path,
                report.sink.location.line_number,
                report.sink.sink_kind,
                tuple(item.get("function_name") for item in report.interprocedural_path),
            )
            if key in seen:
                continue
            seen.add(key)
            deduped.append(report)
        return deduped
