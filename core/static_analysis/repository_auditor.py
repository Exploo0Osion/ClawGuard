from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from agentdojo.static_analysis.qwen_judge import judge_repository_findings
from agentdojo.static_analysis.repoaudit import RepoAuditor
from agentdojo.static_analysis.static_auditor import StaticAuditor


SKIP_DIR_NAMES = {
    ".git",
    ".hg",
    ".idea",
    ".mypy_cache",
    ".pytest_cache",
    ".ruff_cache",
    ".venv",
    "__pycache__",
    "build",
    "dist",
    "node_modules",
}

CODE_FILE_SUFFIXES = {".py", ".c", ".h", ".cc", ".cpp", ".cxx", ".hh", ".hpp", ".hxx", ".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".sh", ".ps1", ".bat"}
CONFIG_FILE_SUFFIXES = {".json", ".yaml", ".yml", ".toml", ".ini", ".cfg", ".conf"}
CONFIG_FILE_NAMES = {".env", ".env.local", ".env.example", ".env.production", ".env.development"}
SCRIPT_FILE_SUFFIXES = {".py", ".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".sh", ".ps1", ".bat"}


@dataclass
class RepositoryAuditResult:
    repository_root: str
    artifact_type: str = "repository"
    code_audit: dict[str, Any] | None = None
    markdown_audits: list[dict[str, Any]] = field(default_factory=list)
    svg_audits: list[dict[str, Any]] = field(default_factory=list)
    config_audits: list[dict[str, Any]] = field(default_factory=list)
    script_audits: list[dict[str, Any]] = field(default_factory=list)
    scanned_files: dict[str, list[str]] = field(default_factory=dict)
    final_judgment: dict[str, Any] | None = None
    summary: dict[str, Any] = field(default_factory=dict)
    final_report: str = ""

    def to_dict(self) -> dict[str, Any]:
        return {
            "artifact_type": self.artifact_type,
            "repository_root": self.repository_root,
            "code_audit": self.code_audit,
            "markdown_audits": list(self.markdown_audits),
            "svg_audits": list(self.svg_audits),
            "config_audits": list(self.config_audits),
            "script_audits": list(self.script_audits),
            "scanned_files": {key: list(value) for key, value in self.scanned_files.items()},
            "final_judgment": dict(self.final_judgment or {}),
            "summary": dict(self.summary),
            "final_report": self.final_report,
        }


class RepositoryAuditor:
    def __init__(self, *, user_task_text: str = "Audit repository assets for security and code issues.") -> None:
        self.user_task_text = user_task_text
        self.static_auditor = StaticAuditor()
        self.code_auditor = RepoAuditor()

    def audit_repository(self, repository_root: str | Path) -> RepositoryAuditResult:
        root = Path(repository_root).resolve()
        scanned_files = {
            "code": self._collect_files(root, CODE_FILE_SUFFIXES),
            "markdown": self._collect_markdown_files(root),
            "svg": self._collect_files(root, {".svg"}),
            "config": self._collect_config_files(root),
            "script": self._collect_files(root, SCRIPT_FILE_SUFFIXES),
        }

        code_audit = self.code_auditor.audit_repository(repository_root=root).to_dict()
        markdown_audits = [
            self._normalize_static_audit(
                self.static_auditor.audit_skill_md(
                    self._read_text(root / relative_path),
                    user_task_text=self.user_task_text,
                    source_name=relative_path,
                ).to_dict()
            )
            for relative_path in scanned_files["markdown"]
        ]
        svg_audits = [
            self._normalize_static_audit(
                self.static_auditor.audit_svg(
                    self._read_text(root / relative_path),
                    user_task_text=self.user_task_text,
                    source_name=relative_path,
                ).to_dict()
            )
            for relative_path in scanned_files["svg"]
        ]
        config_audits = [
            self._normalize_static_audit(
                self.static_auditor.audit_config(
                    self._read_text(root / relative_path),
                    user_task_text=self.user_task_text,
                    source_name=relative_path,
                ).to_dict()
            )
            for relative_path in scanned_files["config"]
        ]
        script_audits = [
            self._normalize_static_audit(
                self.static_auditor.audit_script(
                    self._read_text(root / relative_path),
                    user_task_text=self.user_task_text,
                    source_name=relative_path,
                ).to_dict()
            )
            for relative_path in scanned_files["script"]
        ]
        final_judgment = judge_repository_findings(
            self._build_repository_judgment_payload(
                repository_root=root,
                code_audit=code_audit,
                markdown_audits=markdown_audits,
                svg_audits=svg_audits,
                config_audits=config_audits,
                script_audits=script_audits,
            )
        ).to_dict()
        summary = self._build_summary(
            repository_root=root,
            scanned_files=scanned_files,
            code_audit=code_audit,
            markdown_audits=markdown_audits,
            svg_audits=svg_audits,
            config_audits=config_audits,
            script_audits=script_audits,
            final_judgment=final_judgment,
        )

        return RepositoryAuditResult(
            repository_root=str(root),
            code_audit=code_audit,
            markdown_audits=markdown_audits,
            svg_audits=svg_audits,
            config_audits=config_audits,
            script_audits=script_audits,
            scanned_files=scanned_files,
            final_judgment=final_judgment,
            summary=summary,
            final_report=self._render_final_report(summary, final_judgment=final_judgment),
        )

    def _normalize_static_audit(self, audit_payload: dict[str, Any]) -> dict[str, Any]:
        reviewed = dict(audit_payload)
        reviewed["effective_risk_level"] = reviewed.get("risk_level", "low")
        reviewed["semantic_judgment"] = None
        reviewed["semantic_flagged"] = False
        return reviewed

    def _build_repository_judgment_payload(
        self,
        *,
        repository_root: Path,
        code_audit: dict[str, Any] | None,
        markdown_audits: list[dict[str, Any]],
        svg_audits: list[dict[str, Any]],
        config_audits: list[dict[str, Any]],
        script_audits: list[dict[str, Any]],
    ) -> dict[str, Any]:
        content_findings = sorted(
            [self._content_finding("markdown", audit) for audit in markdown_audits]
            + [self._content_finding("svg", audit) for audit in svg_audits]
            + [self._content_finding("config", audit) for audit in config_audits]
            + [self._content_finding("script", audit) for audit in script_audits],
            key=lambda finding: (
                self._risk_rank(str(finding.get("risk_level", "low"))),
                int(finding.get("risk_score", 0)),
                str(finding.get("source_name", "")),
            ),
            reverse=True,
        )[:20]
        code_bug_reports = list((code_audit or {}).get("bug_reports", []))
        reduced_bug_reports = [
            {
                "bug_type": report.get("bug_type"),
                "source": report.get("source"),
                "sink": report.get("sink"),
                "evidence_summary": report.get("evidence_summary"),
                "validation_status": report.get("validation_status"),
                "validation_backend": report.get("validation_backend"),
            }
            for report in code_bug_reports[:12]
        ]
        return {
            "repository_root": str(repository_root),
            "user_task_text": self.user_task_text,
            "content_findings": content_findings,
            "code": {
                "language_name": (code_audit or {}).get("language_name", "Unknown"),
                "bug_report_count": len(code_bug_reports),
                "analysis_backend_summary": (code_audit or {}).get("configuration", {}).get("analysis_backend_summary", {}),
                "bug_reports": reduced_bug_reports,
            },
        }

    def _collect_files(self, root: Path, suffixes: set[str]) -> list[str]:
        results: list[str] = []
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if any(part in SKIP_DIR_NAMES for part in path.parts):
                continue
            if path.suffix.lower() in suffixes:
                results.append(str(path.relative_to(root)))
        return sorted(results)

    def _collect_markdown_files(self, root: Path) -> list[str]:
        results: list[str] = []
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if any(part in SKIP_DIR_NAMES for part in path.parts):
                continue
            lower_name = path.name.lower()
            if path.suffix.lower() == ".md" or lower_name == "skill.md":
                results.append(str(path.relative_to(root)))
        return sorted(results)

    def _collect_config_files(self, root: Path) -> list[str]:
        results: list[str] = []
        for path in root.rglob("*"):
            if not path.is_file():
                continue
            if any(part in SKIP_DIR_NAMES for part in path.parts):
                continue
            lower_name = path.name.lower()
            if path.suffix.lower() in CONFIG_FILE_SUFFIXES or lower_name in CONFIG_FILE_NAMES:
                results.append(str(path.relative_to(root)))
        return sorted(results)

    @staticmethod
    def _read_text(path: Path) -> str:
        try:
            return path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            return path.read_text(encoding="utf-8", errors="ignore")

    @staticmethod
    def _build_summary(
        *,
        repository_root: Path,
        scanned_files: dict[str, list[str]],
        code_audit: dict[str, Any] | None,
        markdown_audits: list[dict[str, Any]],
        svg_audits: list[dict[str, Any]],
        config_audits: list[dict[str, Any]],
        script_audits: list[dict[str, Any]],
        final_judgment: dict[str, Any] | None,
    ) -> dict[str, Any]:
        code_bug_reports = list((code_audit or {}).get("bug_reports", []))
        bug_type_counts: dict[str, int] = {}
        for report in code_bug_reports:
            bug_type = str(report.get("bug_type", "unknown"))
            bug_type_counts[bug_type] = bug_type_counts.get(bug_type, 0) + 1

        markdown_risk_counts = RepositoryAuditor._risk_counts(markdown_audits)
        svg_risk_counts = RepositoryAuditor._risk_counts(svg_audits)
        config_risk_counts = RepositoryAuditor._risk_counts(config_audits)
        script_risk_counts = RepositoryAuditor._risk_counts(script_audits)

        highest_risk_markdown = RepositoryAuditor._top_risky(markdown_audits, 5)
        highest_risk_svg = RepositoryAuditor._top_risky(svg_audits, 5)
        highest_risk_config = RepositoryAuditor._top_risky(config_audits, 5)
        highest_risk_script = RepositoryAuditor._top_risky(script_audits, 5)
        top_code_reports = sorted(
            code_bug_reports,
            key=lambda report: (
                {"UAF": 3, "NPD": 2, "MLK": 1}.get(str(report.get("bug_type", "")), 0),
                int(report.get("sink", {}).get("location", {}).get("line_number", 0)),
            ),
            reverse=True,
        )[:10]
        holistic_content_findings = sorted(
            [RepositoryAuditor._content_finding("markdown", audit) for audit in markdown_audits]
            + [RepositoryAuditor._content_finding("svg", audit) for audit in svg_audits]
            + [RepositoryAuditor._content_finding("config", audit) for audit in config_audits],
            key=lambda finding: (int(finding.get("risk_score", 0)), str(finding.get("source_name", ""))),
            reverse=True,
        )
        holistic_content_findings = sorted(
            holistic_content_findings
            + [RepositoryAuditor._content_finding("script", audit) for audit in script_audits],
            key=lambda finding: (int(finding.get("risk_score", 0)), str(finding.get("source_name", ""))),
            reverse=True,
        )[:12]

        return {
            "repository_root": str(repository_root),
            "scanned_file_counts": {key: len(value) for key, value in scanned_files.items()},
            "code": {
                "language_name": (code_audit or {}).get("language_name", "Unknown"),
                "bug_report_count": len(code_bug_reports),
                "bug_type_counts": bug_type_counts,
                "analysis_backend_summary": (code_audit or {}).get("configuration", {}).get("analysis_backend_summary", {}),
                "validation_backend_counts": RepositoryAuditor._count_validation_backends(code_bug_reports),
                "top_bug_reports": top_code_reports,
            },
            "markdown": {
                "file_count": len(markdown_audits),
                "risk_level_counts": markdown_risk_counts,
                "top_risky_files": highest_risk_markdown,
                "semantic_review_counts": RepositoryAuditor._semantic_review_counts(markdown_audits),
            },
            "svg": {
                "file_count": len(svg_audits),
                "risk_level_counts": svg_risk_counts,
                "top_risky_files": highest_risk_svg,
                "semantic_review_counts": RepositoryAuditor._semantic_review_counts(svg_audits),
            },
            "config": {
                "file_count": len(config_audits),
                "risk_level_counts": config_risk_counts,
                "top_risky_files": highest_risk_config,
                "semantic_review_counts": RepositoryAuditor._semantic_review_counts(config_audits),
            },
            "content": {
                "file_count": len(markdown_audits) + len(svg_audits) + len(config_audits) + len(script_audits),
                "risk_level_counts": RepositoryAuditor._merge_risk_counts(
                    markdown_risk_counts,
                    svg_risk_counts,
                    config_risk_counts,
                    script_risk_counts,
                ),
                "top_risky_files": holistic_content_findings,
                "semantic_review_counts": {"reviewed": 0, "flagged": 0, "fallback_used": 0},
            },
            "script": {
                "file_count": len(script_audits),
                "risk_level_counts": script_risk_counts,
                "top_risky_files": highest_risk_script,
                "semantic_review_counts": RepositoryAuditor._semantic_review_counts(script_audits),
            },
            "final_judgment": dict(final_judgment or {}),
            "paper_alignment": {
                "execution_mode": (code_audit or {}).get("configuration", {}).get("analysis_priority", "disabled"),
                "implemented_techniques": list((code_audit or {}).get("implemented_techniques", [])),
                "path_memory_shape": "M(f, v@s) -> path bundles with facts, escapes, and sinks",
                "remaining_differences": [
                    "Code auditing now requires successful LLM analysis and LLM path validation, so runs can fail closed when model results are unavailable.",
                    "Final repository-level risk is now produced by a unified LLM judge fed with multi-chain findings rather than per-chain semantic scoring.",
                    "Python support is included as an engineering extension beyond the paper's primary C/C++ setting.",
                    "Path validation is implemented, but the full interprocedural semantic validator can still be strengthened for more complex path constraints.",
                ],
            },
        }

    @staticmethod
    def _render_final_report(summary: dict[str, Any], *, final_judgment: dict[str, Any] | None) -> str:
        counts = summary.get("scanned_file_counts", {})
        code = summary.get("code", {})
        markdown = summary.get("markdown", {})
        svg = summary.get("svg", {})
        config = summary.get("config", {})
        content = summary.get("content", {})
        script = summary.get("script", {})
        final = final_judgment or {}

        lines = [
            "Repository Audit Report",
            f"- Code files scanned: {counts.get('code', 0)}",
            f"- Markdown files scanned: {counts.get('markdown', 0)}",
            f"- SVG files scanned: {counts.get('svg', 0)}",
            f"- Config files scanned: {counts.get('config', 0)}",
            f"- Script files scanned: {counts.get('script', 0)}",
            f"- Code languages: {code.get('language_name', 'Unknown')}",
            f"- Code bug reports: {code.get('bug_report_count', 0)}",
            f"- Code bug types: {code.get('bug_type_counts', {})}",
            f"- Code analysis backends: {code.get('analysis_backend_summary', {})}",
            f"- Code validation backends: {code.get('validation_backend_counts', {})}",
            f"- Markdown risk counts: {markdown.get('risk_level_counts', {})}",
            f"- SVG risk counts: {svg.get('risk_level_counts', {})}",
            f"- Config risk counts: {config.get('risk_level_counts', {})}",
            f"- Script risk counts: {script.get('risk_level_counts', {})}",
            f"- Overall content risk counts: {content.get('risk_level_counts', {})}",
            f"- Final overall risk: {final.get('overall_risk_level', 'unknown')}",
            f"- Final should flag: {final.get('should_flag', False)}",
            f"- Final judgment backend fallback: {final.get('fallback_used', False)}",
        ]

        if final.get("executive_summary"):
            lines.append(f"- Final executive summary: {final.get('executive_summary')}")
        if isinstance(final.get("key_risks"), list) and final.get("key_risks"):
            lines.append("- Final key risks:")
            for item in final["key_risks"][:5]:
                lines.append(f"  - {item}")

        top_bug_reports = code.get("top_bug_reports", [])
        if top_bug_reports:
            lines.append("- Top code findings:")
            for report in top_bug_reports[:5]:
                sink = report.get("sink", {})
                location = sink.get("location", {})
                lines.append(
                    "  - "
                    + f"{report.get('bug_type', 'UNKNOWN')} at "
                    + f"{location.get('file_path', '?')}:{location.get('line_number', '?')} "
                    + f"({sink.get('sink_kind', 'sink')})"
                )

        for label, audits in (
            ("markdown", markdown.get("top_risky_files", [])),
            ("svg", svg.get("top_risky_files", [])),
            ("config", config.get("top_risky_files", [])),
            ("script", script.get("top_risky_files", [])),
        ):
            if not audits:
                continue
            lines.append(f"- Top {label} findings:")
            for audit in audits[:3]:
                lines.append(
                    "  - "
                    + f"{audit.get('source_name', '?')} risk={audit.get('effective_risk_level', audit.get('risk_level', 'unknown'))} "
                    + f"score={audit.get('risk_score', 0)}"
                )

        top_content = content.get("top_risky_files", [])
        if top_content:
            lines.append("- Holistic content findings:")
            for finding in top_content[:5]:
                lines.append(
                    "  - "
                    + f"{finding.get('artifact_family', '?')} {finding.get('source_name', '?')} "
                    + f"risk={finding.get('risk_level', 'unknown')} "
                    + f"score={finding.get('risk_score', 0)} "
                    + f"capabilities={finding.get('induced_capabilities', [])}"
                )
                semantic = finding.get("semantic_judgment")
                if isinstance(semantic, dict):
                    lines.append(
                        "    "
                        + f"semantic={semantic.get('semantic_risk_level', 'unknown')} "
                        + f"flagged={semantic.get('should_flag', False)} "
                        + f"fallback={semantic.get('fallback_used', False)}"
                    )

        return "\n".join(lines)

    @staticmethod
    def _count_validation_backends(code_bug_reports: list[dict[str, Any]]) -> dict[str, int]:
        counts: dict[str, int] = {}
        for report in code_bug_reports:
            backend = str(report.get("validation_backend", "unknown"))
            counts[backend] = counts.get(backend, 0) + 1
        return counts

    @staticmethod
    def _risk_counts(audits: list[dict[str, Any]]) -> dict[str, int]:
        counts: dict[str, int] = {}
        for audit in audits:
            risk_level = str(audit.get("effective_risk_level", audit.get("risk_level", "unknown")))
            counts[risk_level] = counts.get(risk_level, 0) + 1
        return counts

    @staticmethod
    def _top_risky(audits: list[dict[str, Any]], limit: int) -> list[dict[str, Any]]:
        return sorted(
            audits,
            key=lambda audit: (
                RepositoryAuditor._risk_rank(str(audit.get("effective_risk_level", audit.get("risk_level", "low")))),
                int(audit.get("risk_score", 0)),
                str(audit.get("source_name", "")),
            ),
            reverse=True,
        )[:limit]

    @staticmethod
    def _risk_rank(risk_level: str) -> int:
        return {"low": 0, "medium": 1, "high": 2}.get(risk_level, -1)

    @staticmethod
    def _merge_risk_counts(*count_maps: dict[str, int]) -> dict[str, int]:
        merged: dict[str, int] = {}
        for count_map in count_maps:
            for risk_level, count in count_map.items():
                merged[risk_level] = merged.get(risk_level, 0) + count
        return merged

    @staticmethod
    def _semantic_review_counts(audits: list[dict[str, Any]]) -> dict[str, int]:
        reviewed = sum(1 for audit in audits if audit.get("semantic_judgment") is not None)
        flagged = sum(1 for audit in audits if audit.get("semantic_flagged"))
        fallback_used = sum(
            1
            for audit in audits
            if isinstance(audit.get("semantic_judgment"), dict) and audit["semantic_judgment"].get("fallback_used")
        )
        return {
            "reviewed": reviewed,
            "flagged": flagged,
            "fallback_used": fallback_used,
        }

    @staticmethod
    def _content_finding(artifact_family: str, audit: dict[str, Any]) -> dict[str, Any]:
        return {
            "artifact_family": artifact_family,
            "source_name": audit.get("source_name"),
            "risk_level": audit.get("effective_risk_level", audit.get("risk_level", "unknown")),
            "risk_score": audit.get("risk_score", 0),
            "risk_reasons": list(audit.get("risk_reasons", [])),
            "induced_capabilities": list(audit.get("induced_capabilities", [])),
            "behavioral_findings": list(audit.get("behavioral_findings", [])),
            "consistency_judgment": audit.get("consistency_judgment", "unknown"),
            "drift_detected": bool(audit.get("drift_detected", False)),
            "semantic_judgment": audit.get("semantic_judgment"),
        }
