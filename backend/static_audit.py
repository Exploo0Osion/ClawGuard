from __future__ import annotations

import os
from datetime import datetime
from pathlib import Path
from typing import Any

try:
    from .core_adapter import (
        audit_text_content,
        build_finding_from_static_audit,
        build_risk_slices,
        guess_content_type,
        is_textual_file,
        read_text_best_effort,
        summarize_findings,
    )
    from .openclaw_env import detect_openclaw_environment
    from .settings_store import configured_skill_dir_candidates
    from .sample_paths import resolve_sample_roots
except ImportError:
    from core_adapter import (
        audit_text_content,
        build_finding_from_static_audit,
        build_risk_slices,
        guess_content_type,
        is_textual_file,
        read_text_best_effort,
        summarize_findings,
    )
    from openclaw_env import detect_openclaw_environment
    from settings_store import configured_skill_dir_candidates
    from sample_paths import resolve_sample_roots


PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_TASK_PROMPT = "Optimize a local SVG asset without network access, unrelated skills, or external content."


def build_static_audit_report(task_prompt: str = DEFAULT_TASK_PROMPT) -> dict[str, Any]:
    sources = _collect_source_dirs()
    findings: list[dict[str, Any]] = []

    max_skills = int(os.environ.get("CLAWGUARD_STATIC_AUDIT_MAX_SKILLS", "300"))
    scanned = 0

    for directory in sources:
        directory_skill_files: list[Path] = []
        for skill_file in sorted(path for path in directory.rglob("SKILL.md") if path.is_file()):
            if scanned >= max_skills:
                break
            scanned += 1
            directory_skill_files.append(skill_file)
            findings.extend(_audit_skill_path(skill_file, task_prompt))
        findings.extend(_audit_skill_bundle(directory, directory_skill_files, task_prompt))
        if scanned >= max_skills:
            break

    findings = _sort_findings(findings)
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "task_prompt": task_prompt,
        "sources": [str(path) for path in sources],
        "summary": summarize_findings(findings),
        "findings": findings,
        "risk_slices": build_risk_slices(findings),
    }


def build_upload_audit_report(files: list[dict[str, str]], task_prompt: str = DEFAULT_TASK_PROMPT) -> dict[str, Any]:
    findings: list[dict[str, Any]] = []
    skipped_count = 0
    scanned_count = 0

    for item in files:
        name = str(item.get("name") or "").strip()
        content = str(item.get("content") or "")
        if not name or not content.strip():
            skipped_count += 1
            continue
        scanned_count += 1
        if is_textual_file(name):
            audit = audit_text_content(
                file_name=name,
                content=content,
                task_prompt=task_prompt,
                enable_semantic_review=False,
            )
            findings.append(build_finding_from_static_audit(audit, source_name=name))
        else:
            findings.append(
                {
                    "skill": name,
                    "severity": "Low",
                    "title": f"{name} 上传审计结果",
                    "reason": f"文件类型 {guess_content_type(name)} 不在当前文本静态审计范围内。",
                    "chain": "上传静态审计",
                    "action": "作为低风险项持续观察。",
                    "findingsCount": 1,
                }
            )

    findings = _sort_findings(findings)
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "task_prompt": task_prompt,
        "summary": summarize_findings(findings),
        "scanned_count": scanned_count,
        "skipped_count": skipped_count,
        "findings": findings,
        "risk_slices": build_risk_slices(findings),
    }


def _collect_source_dirs() -> list[Path]:
    sources = list(resolve_sample_roots(PROJECT_ROOT))

    environment = detect_openclaw_environment()
    if environment.detected and environment.skills_path:
        sources.append(Path(environment.skills_path))
    sources.extend(configured_skill_dir_candidates())

    extra_dirs = os.environ.get("CLAWGUARD_EXTRA_SAMPLE_DIRS", "")
    if extra_dirs.strip():
        for raw in extra_dirs.replace("\r\n", "\n").split("\n"):
            for part in [token.strip() for token in raw.split(";") if token.strip()]:
                sources.append(Path(part))

    deduped: list[Path] = []
    seen: set[str] = set()
    for path in sources:
        key = str(path.resolve()) if path.exists() else str(path)
        if key in seen:
            continue
        seen.add(key)
        if path.exists():
            deduped.append(path)
    return deduped


def _audit_skill_path(skill_file: Path, task_prompt: str) -> list[dict[str, Any]]:
    findings: list[dict[str, Any]] = []

    try:
        content = read_text_best_effort(skill_file)
        audit = audit_text_content(
            file_name=str(skill_file.name),
            content=content,
            task_prompt=task_prompt,
            enable_semantic_review=False,
        )
        findings.append(build_finding_from_static_audit(audit, source_name=str(skill_file.parent.name)))
    except OSError:
        return []

    return findings


def _audit_skill_bundle(source_dir: Path, skill_files: list[Path], task_prompt: str) -> list[dict[str, Any]]:
    if len(skill_files) <= 1:
        return []

    bundle_parts: list[str] = []
    for skill_file in skill_files:
        try:
            relative_name = str(skill_file.relative_to(source_dir)).replace("\\", "/")
            bundle_parts.append(f"# FILE: {relative_name}\n{read_text_best_effort(skill_file)}")
        except OSError:
            continue

    if not bundle_parts:
        return []

    audit = audit_text_content(
        file_name=f"{source_dir.name}_skill_bundle.md",
        content="\n\n".join(bundle_parts),
        task_prompt=task_prompt,
        enable_semantic_review=False,
    )
    if audit.get("risk_level") == "low" and not audit.get("drift_detected") and not audit.get("behavioral_findings"):
        return []

    return [
        build_finding_from_static_audit(
            audit,
            source_name=f"{source_dir.name}__aggregated_skill_bundle",
        )
    ]


def _sort_findings(findings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return sorted(
        findings,
        key=lambda item: (
            item.get("severity") == "Critical",
            item.get("severity") == "High",
            item.get("severity") == "Medium",
            int(item.get("findingsCount") or 0),
        ),
        reverse=True,
    )
