"""Public entrypoints for the extracted ClawGuard static analysis core.

This extracted package intentionally excludes runtime/tool integration hooks
from the larger AgentDojo project and only keeps the standalone auditing path.
"""

from agentdojo.static_analysis.capability_mapper import capabilities_to_domains, infer_capabilities, map_segments_to_capabilities
from agentdojo.static_analysis.drift_analyzer import analyze_drift
from agentdojo.static_analysis.extractors import (
    extract_config_artifacts,
    extract_script_artifacts,
    extract_skill_md_artifacts,
    extract_svg_artifacts,
)
from agentdojo.static_analysis.qwen_judge import (
    QwenJudgeConfig,
    QwenJudgeResult,
    RepositoryJudgeResult,
    judge_repository_findings,
    judge_static_audit,
    load_qwen_config,
)
from agentdojo.static_analysis.reporting import render_repository_audit_markdown, write_repository_audit_bundle
from agentdojo.static_analysis.repository_auditor import RepositoryAuditResult, RepositoryAuditor
from agentdojo.static_analysis.repoaudit import RepoAuditResult, RepoAuditor
from agentdojo.static_analysis.schema import Artifact, DriftAnalysisResult, InstructionalSegment, StaticAuditResult, TaskConsistencyResult
from agentdojo.static_analysis.static_auditor import StaticAuditor
from agentdojo.static_analysis.task_consistency import analyze_task_consistency

__all__ = [
    "Artifact",
    "DriftAnalysisResult",
    "InstructionalSegment",
    "QwenJudgeConfig",
    "QwenJudgeResult",
    "RepositoryJudgeResult",
    "RepositoryAuditResult",
    "RepositoryAuditor",
    "RepoAuditResult",
    "RepoAuditor",
    "StaticAuditResult",
    "StaticAuditor",
    "TaskConsistencyResult",
    "analyze_drift",
    "analyze_task_consistency",
    "capabilities_to_domains",
    "extract_config_artifacts",
    "extract_script_artifacts",
    "extract_skill_md_artifacts",
    "extract_svg_artifacts",
    "infer_capabilities",
    "judge_repository_findings",
    "judge_static_audit",
    "load_qwen_config",
    "map_segments_to_capabilities",
    "render_repository_audit_markdown",
    "write_repository_audit_bundle",
]
