from __future__ import annotations

import json
from pathlib import Path
from typing import Any


RISK_CN = {
    "high": "高风险",
    "medium": "中风险",
    "low": "低风险",
}

FAMILY_CN = {
    "markdown": "Markdown/Skill 文档链",
    "svg": "SVG 隐藏内容链",
    "config": "配置文件链",
    "script": "脚本行为链",
}

CAPABILITY_CN = {
    "network_fetch": "网络访问/外部请求",
    "download": "下载远程内容",
    "shell_exec": "命令执行/Shell 调用",
    "credential_access": "凭据/Token/密钥访问",
    "file_read": "本地文件读取",
    "file_write": "本地文件写入",
    "skill_read": "读取或依赖 Skill 文件",
    "package_install": "安装包或安装 Skill",
    "remote_write": "远程平台写操作",
    "external_service_dependency": "依赖外部托管服务",
    "monetized_external_action": "付费/返佣/商业化外部动作",
    "browser_open": "打开浏览器或网页",
    "web_search": "网页搜索",
    "image_read": "读取图像/SVG",
    "image_optimize": "图像处理",
}

FINDING_CN = {
    "credential_exfiltration_pattern": "凭据读取与外发组合",
    "download_execute_pattern": "下载后执行组合",
    "local_secret_access_pattern": "本地敏感信息读取",
    "explicit_shell_execution_instruction": "显式命令解释器执行",
    "external_broker_install_pattern": "外部服务/中介加安装链",
    "credentialed_remote_admin_pattern": "带凭据的远程管理/写操作",
}

REASON_CN = {
    "External content contains permission-escalation or approval-seeking language.": "内容包含权限提升、授权或审批相关语言。",
    "External content introduces capability domains not implied by the user task.": "内容引入了当前任务没有直接要求的新能力域。",
    "External content appears to target other skills or agent instructions.": "内容疑似面向其他 Skill 或 Agent 指令，存在能力漂移。",
}


def _risk_cn(risk_level: str | None) -> str:
    risk = str(risk_level or "unknown")
    return f"{RISK_CN.get(risk, risk)} ({risk})"


def _capability_cn(capability: str) -> str:
    return f"{CAPABILITY_CN.get(capability, capability)} [{capability}]"


def _finding_cn(finding_kind: str) -> str:
    return f"{FINDING_CN.get(finding_kind, finding_kind)} [{finding_kind}]"


def _reason_cn(reason: str) -> str:
    return REASON_CN.get(reason, reason)


def _short_text(text: str, limit: int = 260) -> str:
    compact = " ".join(str(text).split())
    if len(compact) <= limit:
        return compact
    return compact[: limit - 3] + "..."


def _format_capabilities(capabilities: list[Any]) -> str:
    if not capabilities:
        return "无"
    return "、".join(_capability_cn(str(capability)) for capability in capabilities)


def _format_behavioral_findings(findings: list[dict[str, Any]]) -> list[str]:
    lines: list[str] = []
    for finding in findings:
        kind = str(finding.get("finding_kind", "unknown"))
        severity = str(finding.get("severity", "unknown"))
        lines.append(f"- {_finding_cn(kind)}，级别：{_risk_cn(severity)}")
        if finding.get("summary"):
            lines.append(f"  - 判断原因：{finding['summary']}")
        evidence_items = finding.get("evidence", []) or []
        for evidence in evidence_items[:4]:
            location = evidence.get("line_number", "?")
            segment_type = evidence.get("segment_type", "?")
            lines.append(
                f"  - 证据：第 {location} 行，片段类型 `{segment_type}`，`{_short_text(evidence.get('text', ''))}`"
            )
    return lines


def _format_evidence(evidence_items: list[dict[str, Any]], *, limit: int = 5) -> list[str]:
    lines: list[str] = []
    for evidence in evidence_items[:limit]:
        line = evidence.get("line_number", "?")
        segment_type = evidence.get("segment_type", "?")
        capabilities = _format_capabilities(list(evidence.get("capabilities", [])))
        categories = ", ".join(str(item) for item in evidence.get("instruction_categories", [])) or "无"
        lines.append(
            f"- 第 {line} 行，片段类型 `{segment_type}`，指令类别：{categories}，能力：{capabilities}"
        )
        lines.append(f"  - 内容：`{_short_text(evidence.get('text', ''))}`")
    return lines


def _render_audit_group(lines: list[str], title: str, audits: list[dict[str, Any]], *, limit: int = 8) -> None:
    lines.extend(["", f"## {title}"])
    if not audits:
        lines.append("- 未发现该类型文件。")
        return

    sorted_audits = sorted(
        audits,
        key=lambda audit: (
            {"low": 0, "medium": 1, "high": 2}.get(str(audit.get("effective_risk_level", audit.get("risk_level", "low"))), -1),
            int(audit.get("risk_score", 0) or 0),
            str(audit.get("source_name", "")),
        ),
        reverse=True,
    )
    for audit in sorted_audits[:limit]:
        risk = audit.get("effective_risk_level", audit.get("risk_level", "unknown"))
        lines.append(
            f"- 文件：`{audit.get('source_name', '?')}`；最终风险：{_risk_cn(str(risk))}；"
            f"静态分：`{audit.get('risk_score', 0)}`；原始静态风险：{_risk_cn(str(audit.get('risk_level', 'unknown')))}"
        )
        lines.append(f"  - 触发能力：{_format_capabilities(list(audit.get('induced_capabilities', [])))}")
        reasons = audit.get("risk_reasons", []) or []
        if reasons:
            lines.append("  - 风险原因：")
            for reason in reasons:
                lines.append(f"    - {_reason_cn(str(reason))}")
        findings = audit.get("behavioral_findings", []) or []
        if findings:
            lines.append("  - 行为模式：")
            lines.extend(f"    {item}" if item.startswith("- ") else f"    {item}" for item in _format_behavioral_findings(findings))
        semantic = audit.get("semantic_judgment")
        if isinstance(semantic, dict):
            lines.append(
                "  - LLM 语义复核："
                + f"风险={_risk_cn(str(semantic.get('semantic_risk_level', 'unknown')))}，"
                + f"保留告警={semantic.get('should_flag', False)}，"
                + f"fallback={semantic.get('fallback_used', False)}"
            )
            if semantic.get("reasoning_summary"):
                lines.append(f"    - 复核理由：{semantic['reasoning_summary']}")
        evidence = audit.get("evidence", []) or []
        if evidence:
            lines.append("  - 关键证据片段：")
            lines.extend(f"    {item}" if item.startswith("- ") else f"    {item}" for item in _format_evidence(evidence, limit=3))


def render_repository_audit_markdown(result: dict[str, Any]) -> str:
    summary = result.get("summary", {})
    counts = summary.get("scanned_file_counts", {})
    code = summary.get("code", {})
    markdown = summary.get("markdown", {})
    svg = summary.get("svg", {})
    config = summary.get("config", {})
    content = summary.get("content", {})
    script = summary.get("script", {})
    paper_alignment = summary.get("paper_alignment", {})

    lines = [
        "# AgentDojo 仓库静态审计报告",
        "",
        "## 总览",
        f"- 仓库路径：`{result.get('repository_root', '')}`",
        f"- 扫描代码文件：{counts.get('code', 0)}",
        f"- 扫描 Markdown/Skill 文件：{counts.get('markdown', 0)}",
        f"- 扫描 SVG 文件：{counts.get('svg', 0)}",
        f"- 扫描配置文件：{counts.get('config', 0)}",
        f"- 扫描脚本文件：{counts.get('script', 0)}",
        "",
        "## 代码链审计",
        f"- 识别语言：{code.get('language_name', 'Unknown')}",
        f"- 代码漏洞报告数：{code.get('bug_report_count', 0)}",
        f"- 漏洞类型统计：`{code.get('bug_type_counts', {})}`",
        f"- 分析后端统计：`{code.get('analysis_backend_summary', {})}`",
        f"- 验证后端统计：`{code.get('validation_backend_counts', {})}`",
        f"- Initiator 识别到的代码威胁源数量：{len((result.get('code_audit') or {}).get('initiator_sources', []) or [])}",
    ]

    top_bug_reports = code.get("top_bug_reports", [])
    if top_bug_reports:
        lines.extend(["", "### 代码链高风险发现"])
        for report in top_bug_reports[:10]:
            sink = report.get("sink", {})
            location = sink.get("location", {})
            lines.append(
                "- "
                + f"`{report.get('bug_type', 'UNKNOWN')}` at "
                + f"`{location.get('file_path', '?')}:{location.get('line_number', '?')}` "
                + f"({sink.get('sink_kind', 'sink')})"
            )
            if report.get("evidence_summary"):
                lines.append(f"  - 证据摘要：{report['evidence_summary']}")
            if report.get("validator_notes"):
                lines.append(f"  - 验证说明：{report['validator_notes']}")

    lines.extend(
        [
            "",
            "## 分类风险统计",
            f"- Markdown/Skill 文档链：`{markdown.get('risk_level_counts', {})}`",
            f"- SVG 隐藏内容链：`{svg.get('risk_level_counts', {})}`",
            f"- 配置文件链：`{config.get('risk_level_counts', {})}`",
            f"- 脚本行为链：`{script.get('risk_level_counts', {})}`",
            f"- 内容链合并风险：`{content.get('risk_level_counts', {})}`",
            f"- 内容链语义复核统计：`{content.get('semantic_review_counts', {})}`",
            "",
            "## RepoAudit 论文链路对齐",
            f"- 已实现技术：`{paper_alignment.get('implemented_techniques', [])}`",
            f"- 当前执行模式：`{paper_alignment.get('execution_mode', 'unknown')}`",
            "- 仍存在的差异：",
        ]
    )
    for item in paper_alignment.get("remaining_differences", []):
        lines.append(f"  - {item}")

    top_content = content.get("top_risky_files", [])
    if top_content:
        lines.extend(["", "## 跨资产最高风险发现"])
        for finding in top_content[:8]:
            lines.append(
                "- "
                + f"链路：{FAMILY_CN.get(str(finding.get('artifact_family', '?')), finding.get('artifact_family', '?'))}；"
                + f"文件：`{finding.get('source_name', '?')}`；"
                + f"风险：{_risk_cn(str(finding.get('risk_level', 'unknown')))}；"
                + f"静态分：`{finding.get('risk_score', 0)}`"
            )
            if finding.get("risk_reasons"):
                lines.append("  - 风险原因：")
                for reason in finding["risk_reasons"]:
                    lines.append(f"    - {_reason_cn(str(reason))}")
            if finding.get("induced_capabilities"):
                lines.append(f"  - 触发能力/权限：{_format_capabilities(list(finding['induced_capabilities']))}")
            if finding.get("behavioral_findings"):
                lines.append("  - 命中的行为链：")
                lines.extend(
                    f"    {item}" if item.startswith("- ") else f"    {item}"
                    for item in _format_behavioral_findings(list(finding["behavioral_findings"]))
                )
            semantic = finding.get("semantic_judgment")
            if isinstance(semantic, dict):
                lines.append(
                    "  - LLM 语义复核："
                    + f"风险={_risk_cn(str(semantic.get('semantic_risk_level', 'unknown')))}，"
                    + f"保留告警={semantic.get('should_flag', False)}，"
                    + f"fallback={semantic.get('fallback_used', False)}"
                )
                if semantic.get("reasoning_summary"):
                    lines.append(f"    - 复核理由：{semantic['reasoning_summary']}")

    _render_audit_group(lines, "Markdown/Skill 文档链明细", result.get("markdown_audits", []))
    _render_audit_group(lines, "脚本行为链明细", result.get("script_audits", []))
    _render_audit_group(lines, "配置文件链明细", result.get("config_audits", []))
    _render_audit_group(lines, "SVG 隐藏内容链明细", result.get("svg_audits", []))

    return "\n".join(lines) + "\n"


def write_repository_audit_bundle(
    result: dict[str, Any],
    output_dir: str | Path,
    *,
    json_filename: str = "repository_audit.json",
    markdown_filename: str = "repository_audit.md",
) -> tuple[Path, Path]:
    output_root = Path(output_dir).resolve()
    output_root.mkdir(parents=True, exist_ok=True)
    json_path = output_root / json_filename
    markdown_path = output_root / markdown_filename
    json_path.write_text(json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8")
    markdown_path.write_text(render_repository_audit_markdown(result), encoding="utf-8")
    return json_path, markdown_path
