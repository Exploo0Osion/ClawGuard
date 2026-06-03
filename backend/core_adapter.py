from __future__ import annotations

import os
import re
import sys
import types
import importlib
import json as json_lib
from functools import lru_cache
from pathlib import Path, PurePosixPath
from typing import Any


BACKEND_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BACKEND_DIR.parent
WORKSPACE_ROOT = PROJECT_ROOT.parent

_TEXTUAL_SUFFIXES = {
    ".md",
    ".svg",
    ".json",
    ".yaml",
    ".yml",
    ".toml",
    ".ini",
    ".cfg",
    ".conf",
    ".env",
    ".py",
    ".js",
    ".mjs",
    ".cjs",
    ".jsx",
    ".ts",
    ".tsx",
    ".sh",
    ".ps1",
    ".bat",
    ".txt",
}


def _is_truthy(value: str | None) -> bool:
    return (value or "").strip().lower() in {"1", "true", "yes", "on"}


def _candidate_clawguard_src_dirs() -> list[Path]:
    env_override = os.environ.get("CLAWGUARD_CORE_SRC")
    current_file = Path(__file__).resolve()
    current_cwd = Path.cwd().resolve()
    candidates = [
        Path(env_override) if env_override else None,
        PROJECT_ROOT / "core",
        PROJECT_ROOT / "clawguard_core",
        PROJECT_ROOT / "ClawGuard" / "src",
        WORKSPACE_ROOT / "ClawGuard" / "src",
        current_cwd / "core",
        current_cwd / "clawguard_core",
        current_cwd / "ClawGuard" / "src",
        current_file.parent / "core",
        current_file.parent / "clawguard_core",
        current_file.parent.parent / "core",
        current_file.parent.parent / "clawguard_core",
        current_file.parent.parent / "ClawGuard" / "src",
    ]

    if hasattr(sys, "_MEIPASS"):
        meipass = Path(getattr(sys, "_MEIPASS")).resolve()
        candidates.extend(
            [
                meipass / "core",
                meipass / "clawguard_core",
                meipass / "ClawGuard" / "src",
                meipass.parent / "core",
                meipass.parent / "clawguard_core",
            ]
        )

    deduped: list[Path] = []
    seen: set[str] = set()
    for candidate in candidates:
        if candidate is None:
            continue
        key = str(candidate).lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append(candidate)
    return deduped


def _resolve_clawguard_src() -> Path:
    for candidate in _candidate_clawguard_src_dirs():
        if (candidate / "static_analysis").exists():
            return candidate

    searched = "\n".join(f"- {path}" for path in _candidate_clawguard_src_dirs())
    raise FileNotFoundError(
        "ClawGuard source directory not found. Checked:\n"
        f"{searched}\n"
        "You can also set CLAWGUARD_CORE_SRC to the extracted ClawGuard/src directory."
    )


def _configure_optional_llm_env() -> None:
    resolved_env = _resolve_llm_env()
    api_key = resolved_env.get("CLAWGUARD_LLM_API_KEY")
    model = resolved_env.get("CLAWGUARD_LLM_MODEL")
    base_url = resolved_env.get("CLAWGUARD_LLM_BASE_URL")
    timeout = resolved_env.get("CLAWGUARD_LLM_TIMEOUT")
    enabled = resolved_env.get("CLAWGUARD_LLM_ENABLED")

    if api_key and "QWEN_API_KEY" not in os.environ:
        os.environ["QWEN_API_KEY"] = api_key
    if model and "QWEN_MODEL" not in os.environ:
        os.environ["QWEN_MODEL"] = model
    if base_url and "QWEN_BASE_URL" not in os.environ:
        os.environ["QWEN_BASE_URL"] = base_url
    if timeout and "QWEN_TIMEOUT" not in os.environ:
        os.environ["QWEN_TIMEOUT"] = timeout
    if enabled is not None and "REPOAUDIT_LLM_MODE" not in os.environ:
        os.environ["REPOAUDIT_LLM_MODE"] = "1" if _is_truthy(enabled) else "0"


def _resolve_llm_env() -> dict[str, str]:
    resolved: dict[str, str] = {}
    candidate_env_files = [
        Path.cwd() / ".env",
        PROJECT_ROOT / ".env",
        WORKSPACE_ROOT / ".env",
    ]

    try:
        from dotenv import dotenv_values
    except ImportError:
        dotenv_values = None

    if dotenv_values is not None:
        for env_path in candidate_env_files:
            if not env_path.exists():
                continue
            loaded = dotenv_values(env_path)
            resolved.update(
                {
                    key: value
                    for key, value in loaded.items()
                    if isinstance(key, str) and isinstance(value, str)
                }
            )

    resolved.update(os.environ)
    return resolved


def _ensure_dependency_shims() -> None:
    try:
        importlib.import_module("xml.etree.ElementTree")
    except ImportError as error:
        raise ImportError(
            "Python stdlib module xml.etree.ElementTree is unavailable. "
            "If you are running the packaged launcher, rebuild it with the updated "
            "ClawGuardLauncher.spec so XML parsing dependencies are bundled."
        ) from error

    try:
        import requests  # noqa: F401
    except ImportError:
        import socket
        import urllib.error
        import urllib.request

        requests_stub = types.ModuleType("requests")

        class RequestException(Exception):
            pass

        class Timeout(RequestException):
            pass

        class HTTPError(RequestException):
            def __init__(self, *args: object, response: object | None = None) -> None:
                super().__init__(*args)
                self.response = response

        class _Response:
            def __init__(self, *, status_code: int, body: bytes, headers: dict[str, str], url: str) -> None:
                self.status_code = status_code
                self._body = body
                self.headers = headers
                self.url = url

            @property
            def text(self) -> str:
                return self._body.decode("utf-8", errors="replace")

            def json(self) -> Any:
                return json_lib.loads(self.text)

            def raise_for_status(self) -> None:
                if self.status_code >= 400:
                    raise HTTPError(f"HTTP {self.status_code}", response=self)

        class _Session:
            trust_env = False

            def post(self, *args: object, **kwargs: object) -> object:
                return _post(*args, **kwargs)

        def _post(
            url: str,
            *,
            headers: dict[str, str] | None = None,
            json: dict[str, Any] | None = None,
            timeout: float | None = None,
            **kwargs: object,
        ) -> object:
            if kwargs:
                raise RequestException(f"Unsupported request arguments without requests installed: {sorted(kwargs.keys())}")
            encoded_body = b""
            request_headers = dict(headers or {})
            if json is not None:
                encoded_body = json_lib.dumps(json).encode("utf-8")
                request_headers.setdefault("Content-Type", "application/json")
            request = urllib.request.Request(
                url=url,
                data=encoded_body,
                headers=request_headers,
                method="POST",
            )
            try:
                with urllib.request.urlopen(request, timeout=timeout) as response:
                    body = response.read()
                    return _Response(
                        status_code=int(getattr(response, "status", response.getcode())),
                        body=body,
                        headers=dict(response.headers.items()),
                        url=url,
                    )
            except urllib.error.HTTPError as error:
                body = error.read() if hasattr(error, "read") else b""
                response = _Response(
                    status_code=int(getattr(error, "code", 500)),
                    body=body,
                    headers=dict(getattr(error, "headers", {}).items()) if getattr(error, "headers", None) else {},
                    url=url,
                )
                raise HTTPError(str(error), response=response) from error
            except socket.timeout as error:
                raise Timeout(str(error)) from error
            except TimeoutError as error:
                raise Timeout(str(error)) from error
            except Exception as error:
                raise RequestException(str(error)) from error

        requests_stub.RequestException = RequestException
        requests_stub.Timeout = Timeout
        requests_stub.HTTPError = HTTPError
        requests_stub.Session = _Session
        requests_stub.post = _post
        sys.modules["requests"] = requests_stub

    try:
        import dotenv  # noqa: F401
    except ImportError:
        dotenv_stub = types.ModuleType("dotenv")

        def dotenv_values(*args: object, **kwargs: object) -> dict[str, str]:
            return {}

        dotenv_stub.dotenv_values = dotenv_values
        sys.modules["dotenv"] = dotenv_stub


def _ensure_clawguard_packages() -> None:
    clawguard_src = _resolve_clawguard_src()

    _configure_optional_llm_env()
    _ensure_dependency_shims()

    if "agentdojo" not in sys.modules:
        agentdojo_pkg = types.ModuleType("agentdojo")
        agentdojo_pkg.__path__ = [str(clawguard_src)]
        sys.modules["agentdojo"] = agentdojo_pkg
    else:
        package = sys.modules["agentdojo"]
        package_path = list(getattr(package, "__path__", []))
        if str(clawguard_src) not in package_path:
            package_path.append(str(clawguard_src))
            package.__path__ = package_path

    if "agentdojo.static_analysis" not in sys.modules:
        static_pkg = types.ModuleType("agentdojo.static_analysis")
        static_pkg.__path__ = [str(clawguard_src / "static_analysis")]
        sys.modules["agentdojo.static_analysis"] = static_pkg


@lru_cache(maxsize=1)
def _load_static_symbols() -> dict[str, Any]:
    _ensure_clawguard_packages()

    from agentdojo.static_analysis.capability_mapper import capabilities_to_domains, infer_capabilities
    from agentdojo.static_analysis.drift_analyzer import analyze_drift
    from agentdojo.static_analysis.schema import Artifact, InstructionalSegment
    from agentdojo.static_analysis.static_auditor import (
        StaticAuditor,
        _compute_risk_assessment,
        _detect_behavioral_findings,
    )
    from agentdojo.static_analysis.task_consistency import analyze_task_consistency

    judge_static_audit = None
    try:
        from agentdojo.static_analysis.qwen_judge import judge_static_audit as _judge_static_audit

        judge_static_audit = _judge_static_audit
    except Exception:
        judge_static_audit = None

    return {
        "Artifact": Artifact,
        "InstructionalSegment": InstructionalSegment,
        "StaticAuditor": StaticAuditor,
        "analyze_drift": analyze_drift,
        "analyze_task_consistency": analyze_task_consistency,
        "capabilities_to_domains": capabilities_to_domains,
        "compute_risk_assessment": _compute_risk_assessment,
        "detect_behavioral_findings": _detect_behavioral_findings,
        "infer_capabilities": infer_capabilities,
        "judge_static_audit": judge_static_audit,
    }


@lru_cache(maxsize=1)
def _load_repository_auditor_class() -> Any:
    _ensure_clawguard_packages()
    from agentdojo.static_analysis.repository_auditor import RepositoryAuditor

    return RepositoryAuditor


def llm_semantic_review_enabled() -> bool:
    resolved_env = _resolve_llm_env()
    enabled = resolved_env.get("CLAWGUARD_LLM_ENABLED")
    if enabled is not None:
        return _is_truthy(enabled)
    return bool(resolved_env.get("CLAWGUARD_LLM_API_KEY") or resolved_env.get("QWEN_API_KEY"))


def guess_content_type(file_name: str) -> str:
    lowered = file_name.lower()
    suffix = Path(lowered).suffix

    if lowered.endswith(".svg"):
        return "svg"
    if lowered.endswith("skill.md") or suffix == ".md":
        return "skill_md"
    if suffix in {".json", ".yaml", ".yml", ".toml", ".ini", ".cfg", ".conf"} or lowered.endswith(".env"):
        return "config"
    if suffix in {".py", ".js", ".mjs", ".cjs", ".jsx", ".ts", ".tsx", ".sh", ".ps1", ".bat"}:
        return "script"
    return "markdown"


def is_textual_file(file_name: str) -> bool:
    lowered = file_name.lower()
    if lowered.endswith(".env"):
        return True
    return Path(lowered).suffix in _TEXTUAL_SUFFIXES


def read_text_best_effort(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="ignore")


def audit_text_content(
    *,
    file_name: str,
    content: str,
    task_prompt: str,
    enable_semantic_review: bool | None = None,
) -> dict[str, Any]:
    symbols = _load_static_symbols()
    auditor = symbols["StaticAuditor"]()
    audit = auditor.audit_content(
        guess_content_type(file_name),
        content,
        user_task_text=task_prompt,
        source_name=file_name,
    ).to_dict()

    audit["effective_risk_level"] = audit.get("risk_level", "low")
    audit["semantic_judgment"] = None
    audit["semantic_flagged"] = False

    semantic_enabled = llm_semantic_review_enabled() if enable_semantic_review is None else enable_semantic_review
    if semantic_enabled and symbols.get("judge_static_audit") is not None:
        try:
            semantic = symbols["judge_static_audit"](audit, task_prompt, original_content=content).to_dict()
            audit["semantic_judgment"] = semantic
            audit["semantic_flagged"] = bool(semantic.get("should_flag"))
            semantic_level = str(semantic.get("semantic_risk_level", "")).lower()
            if semantic_level in {"high", "medium", "low"}:
                audit["effective_risk_level"] = semantic_level
        except Exception as error:  # pragma: no cover - defensive guard around optional LLM
            audit["semantic_judgment"] = {
                "should_flag": False,
                "semantic_risk_level": audit.get("risk_level", "low"),
                "semantic_confidence": 0.0,
                "indirect_instruction_detected": False,
                "capability_drift_confirmed": False,
                "attack_verdict": "uncertain",
                "attack_type": "unknown",
                "attack_reason": f"Optional semantic review failed: {error}",
                "evidence_points": [],
                "reasoning_summary": f"Optional semantic review failed: {error}",
                "recommended_action": "log",
                "alert_title": "语义复核失败",
                "alert_summary": "当前无法获得模型级攻击判断。",
                "alert_evidence": str(error),
                "alert_action": "请检查模型接口配置后重新复核。",
                "model_name": os.environ.get("CLAWGUARD_LLM_MODEL") or os.environ.get("QWEN_MODEL") or "",
                "fallback_used": True,
                "error": str(error),
            }
    return audit


def semantic_review_static_audit(
    *,
    audit: dict[str, Any],
    task_prompt: str,
    original_content: str,
) -> dict[str, Any] | None:
    symbols = _load_static_symbols()
    if not llm_semantic_review_enabled() or symbols.get("judge_static_audit") is None:
        return None
    return symbols["judge_static_audit"](audit, task_prompt, original_content=original_content).to_dict()


def audit_repository_path(*, repository_root: str | Path, task_prompt: str) -> dict[str, Any]:
    repository_auditor_class = _load_repository_auditor_class()
    auditor = repository_auditor_class(user_task_text=task_prompt)
    return auditor.audit_repository(repository_root).to_dict()


def infer_task_capabilities(task_prompt: str) -> list[str]:
    symbols = _load_static_symbols()
    return list(symbols["infer_capabilities"](task_prompt or ""))


def summarize_audit_collection(
    audits: list[dict[str, Any]],
    *,
    task_prompt: str,
) -> dict[str, Any]:
    symbols = _load_static_symbols()
    artifact_class = symbols["Artifact"]
    instructional_segment_class = symbols["InstructionalSegment"]

    artifact_dicts: list[dict[str, Any]] = []
    segment_dicts: list[dict[str, Any]] = []
    observed_capabilities: set[str] = set()
    for audit in audits:
        artifact_dicts.extend(audit.get("artifacts") or [])
        segment_dicts.extend(audit.get("instructional_segments") or [])
        observed_capabilities.update(audit.get("induced_capabilities") or [])

    consistency_result = symbols["analyze_task_consistency"](task_prompt or "", sorted(observed_capabilities))
    drift_result = symbols["analyze_drift"](artifact_dicts, segment_dicts, consistency_result)
    artifacts = [artifact_class.from_dict(item) for item in artifact_dicts]
    instructional_segments = [instructional_segment_class.from_dict(item) for item in segment_dicts]
    risk_score, risk_level = symbols["compute_risk_assessment"](
        artifacts=artifacts,
        instructional_segments=instructional_segments,
        induced_capabilities=consistency_result.induced_capabilities,
        drift_detected=drift_result.drift_detected,
    )
    behavioral_findings = symbols["detect_behavioral_findings"](instructional_segments)
    if any(finding.get("severity") == "high" for finding in behavioral_findings):
        risk_level = "high"
        risk_score = max(risk_score, 5)
    elif any(finding.get("severity") == "medium" for finding in behavioral_findings):
        if risk_level == "low":
            risk_level = "medium"
        risk_score = max(risk_score, 3)

    categories = sorted(
        {
            category
            for segment in instructional_segments
            for category in segment.instruction_categories
        }
    )

    return {
        "task_capabilities": list(consistency_result.task_capabilities),
        "induced_capabilities": list(consistency_result.induced_capabilities),
        "new_capability_domains": list(consistency_result.new_capability_domains),
        "consistency_judgment": consistency_result.consistency_judgment,
        "drift_detected": drift_result.drift_detected,
        "drift_targets": list(drift_result.drift_targets),
        "candidate_target_skills": list(drift_result.candidate_target_skills),
        "risk_reasons": list(drift_result.risk_reasons),
        "evidence": [segment.to_dict() for segment in drift_result.evidence],
        "behavioral_findings": list(behavioral_findings),
        "risk_score": risk_score,
        "risk_level": risk_level,
        "instruction_categories": categories,
        "artifact_count": len(artifacts),
        "instructional_segment_count": len(instructional_segments),
    }


def severity_from_risk_level(risk_level: str) -> str:
    normalized = str(risk_level or "low").lower()
    return {"high": "High", "medium": "Medium", "low": "Low"}.get(normalized, "Low")


def _severity_rank(severity: str) -> int:
    return {"Critical": 3, "High": 2, "Medium": 1, "Low": 0}.get(severity, 0)


def _risk_rank(risk_level: str) -> int:
    return {"high": 2, "medium": 1, "low": 0}.get(str(risk_level or "low").lower(), 0)


def _severity_group(severity: str) -> str:
    if severity in {"Critical", "High"}:
        return "高风险"
    if severity == "Medium":
        return "中风险"
    return "低风险"


def _risk_label_from_audit(audit: dict[str, Any]) -> str:
    capabilities = set(audit.get("induced_capabilities") or [])
    findings = audit.get("behavioral_findings") or []
    text = " ".join(
        [
            audit.get("source_name") or "",
            audit.get("consistency_judgment") or "",
            " ".join(audit.get("risk_reasons") or []),
            " ".join(str(item.get("finding_kind") or "") for item in findings),
        ]
    ).lower()

    if "credential_exfiltration_pattern" in text or "credential_access" in capabilities:
        return "凭证外传"
    if "download_execute_pattern" in text or {"download", "shell_exec"} <= capabilities:
        return "下载执行"
    if capabilities & {"network_fetch", "web_search", "browser_open"}:
        return "外部中介"
    if capabilities & {"shell_exec", "package_install"}:
        return "命令执行"
    return "其他风险"


def build_finding_from_static_audit(audit: dict[str, Any], *, source_name: str | None = None) -> dict[str, Any]:
    behavior = audit.get("behavioral_findings") or []
    evidence = audit.get("evidence") or []
    categories = audit.get("instructional_segments") or []
    capabilities = audit.get("induced_capabilities") or []

    effective_risk = str(audit.get("effective_risk_level") or audit.get("risk_level") or "low")
    severity = severity_from_risk_level(effective_risk)
    title = (
        behavior[0].get("summary")
        if behavior
        else f"{source_name or audit.get('source_name') or 'artifact'} 静态审计结果"
    )
    chain_parts: list[str] = []
    if capabilities:
        chain_parts.append("能力: " + ", ".join(capabilities[:6]))
    if categories:
        category_names = sorted(
            {
                name
                for segment in categories
                for name in segment.get("instruction_categories", [])
            }
        )
        if category_names:
            chain_parts.append("指令模式: " + ", ".join(category_names[:5]))
    if evidence:
        chain_parts.append("证据: " + str(evidence[0].get("text") or "")[:200])

    reasons = audit.get("risk_reasons") or []
    if behavior:
        reason = str(behavior[0].get("summary") or "")
    elif reasons:
        reason = " ".join(str(item) for item in reasons[:2])
    else:
        reason = f"{source_name or audit.get('source_name') or 'artifact'} 未发现额外高危语义，但保留静态风险结论。"

    return {
        "skill": str(source_name or audit.get("source_name") or "unknown-skill"),
        "severity": severity,
        "title": str(title),
        "reason": reason,
        "chain": "；".join(chain_parts) if chain_parts else "静态审计",
        "action": recommend_action_for_severity(severity),
        "findingsCount": max(len(behavior), len(evidence), 1),
    }


def build_finding_from_repository_audit(
    repository_audit: dict[str, Any],
    *,
    label: str | None = None,
) -> dict[str, Any]:
    summary = repository_audit.get("summary") or {}
    final_judgment = repository_audit.get("final_judgment") or {}
    content_top = ((summary.get("content") or {}).get("top_risky_files") or [])
    code_top = ((summary.get("code") or {}).get("top_bug_reports") or [])

    overall_risk_level = str(final_judgment.get("overall_risk_level") or "low")
    severity = severity_from_risk_level(overall_risk_level)
    if code_top and severity == "High":
        severity = "Critical"

    key_risks = final_judgment.get("key_risks") or []
    reason = str(final_judgment.get("executive_summary") or "")
    if not reason and key_risks:
        reason = "；".join(str(item) for item in key_risks[:3])
    if not reason and content_top:
        reason = "；".join(str(item) for item in content_top[0].get("risk_reasons") or [])
    if not reason:
        reason = "仓库静态审计完成。"

    chain_parts: list[str] = []
    if content_top:
        top = content_top[0]
        capabilities = top.get("induced_capabilities") or []
        if capabilities:
            chain_parts.append("能力: " + ", ".join(str(item) for item in capabilities[:6]))
        if top.get("source_name"):
            chain_parts.append(f"高风险文件: {top['source_name']}")
    if code_top:
        first_bug = code_top[0]
        sink = first_bug.get("sink") or {}
        location = sink.get("location") or {}
        chain_parts.append(
            "代码漏洞: "
            + f"{first_bug.get('bug_type', 'UNKNOWN')} @ {location.get('file_path', '?')}:{location.get('line_number', '?')}"
        )

    title = str(label or repository_audit.get("repository_root") or "repository")
    if final_judgment.get("should_flag"):
        title = f"{title} 仓库审计结果"

    findings_count = len(content_top) + len(code_top)
    if findings_count <= 0:
        findings_count = max(
            int((summary.get("code") or {}).get("bug_report_count") or 0),
            1,
        )

    return {
        "skill": skill_name_from_label(label or repository_audit.get("repository_root") or "repository"),
        "severity": severity,
        "title": title,
        "reason": reason,
        "chain": "；".join(chain_parts) if chain_parts else "仓库静态审计",
        "action": recommend_action_for_severity(severity),
        "findingsCount": findings_count,
    }


def build_risk_slices(findings: list[dict[str, Any]]) -> list[dict[str, Any]]:
    grouped: dict[tuple[str, str], list[str]] = {}
    for finding in findings:
        severity = str(finding.get("severity") or "Low")
        label = infer_risk_label_from_finding(finding)
        group = _severity_group(severity)
        key = (group, label)
        grouped.setdefault(key, [])
        skill = str(finding.get("skill") or "unknown-skill")
        if skill not in grouped[key]:
            grouped[key].append(skill)

    palette = {
        "高风险": ("#ef8a82", ["#ffbbb2", "#ef8a82", "#dc6f68"]),
        "中风险": ("#f4d84a", ["#fff3a8", "#f4d84a", "#e8c72f"]),
        "低风险": ("#88bcc0", ["#c2e2e2", "#88bcc0", "#6fa8ad"]),
    }

    slices: list[dict[str, Any]] = []
    for (group, label), skills in grouped.items():
        color, gradient = palette[group]
        severity = "High" if group == "高风险" else ("Medium" if group == "中风险" else "Low")
        slices.append(
            {
                "id": f"{group}-{label}".replace(" ", "-"),
                "label": label,
                "group": group,
                "severity": severity,
                "color": color,
                "gradient": gradient,
                "skills": skills,
            }
        )

    slices.sort(key=lambda item: (_severity_rank(str(item["severity"])), len(item["skills"])), reverse=True)
    return slices


def summarize_findings(findings: list[dict[str, Any]]) -> dict[str, int]:
    return {
        "total": len(findings),
        "critical": sum(item.get("severity") == "Critical" for item in findings),
        "high": sum(item.get("severity") == "High" for item in findings),
        "medium": sum(item.get("severity") == "Medium" for item in findings),
        "low": sum(item.get("severity") == "Low" for item in findings),
    }


def infer_risk_label_from_finding(finding: dict[str, Any]) -> str:
    text = " ".join(
        [
            str(finding.get("title") or ""),
            str(finding.get("reason") or ""),
            str(finding.get("chain") or ""),
        ]
    ).lower()
    if "凭证" in text or "secret" in text or "credential" in text:
        return "凭证外传"
    if "下载" in text or "download" in text or "curl" in text or "wget" in text:
        return "下载执行"
    if "网络" in text or "web" in text or "browser" in text:
        return "外部中介"
    if "shell" in text or "命令" in text or "exec" in text or "spawn" in text:
        return "命令执行"
    return "其他风险"


def recommend_action_for_severity(severity: str) -> str:
    if severity == "Critical":
        return "立即隔离该技能或目录，并阻断自动调用。"
    if severity == "High":
        return "要求人工复核后再允许使用，并收敛高风险能力。"
    if severity == "Medium":
        return "保留监控并复核指令来源、外联行为和执行链。"
    return "作为低风险项持续观察。"


def skill_name_from_label(label: str) -> str:
    normalized = str(label).replace("\\", "/")
    posix = PurePosixPath(normalized.replace("~", "/home/openclaw"))
    parts = [part for part in posix.parts if part not in {"/"}]
    if "skills" in parts:
        index = parts.index("skills")
        if index + 1 < len(parts):
            return parts[index + 1]
    if posix.name.upper() == "SKILL.MD" and posix.parent.name:
        return posix.parent.name
    return posix.stem or normalized


def repository_signal_from_audit(
    repository_audit: dict[str, Any],
    *,
    label: str,
) -> dict[str, Any]:
    summary = repository_audit.get("summary") or {}
    final_judgment = repository_audit.get("final_judgment") or {}
    content_top = ((summary.get("content") or {}).get("top_risky_files") or [])
    code_top = ((summary.get("code") or {}).get("top_bug_reports") or [])
    severity = severity_from_risk_level(final_judgment.get("overall_risk_level") or "low")
    if code_top and severity == "High":
        severity = "Critical"

    evidence = ""
    if code_top:
        evidence = str(code_top[0].get("evidence_summary") or "")
    if not evidence and content_top:
        top = content_top[0]
        behavior = top.get("behavioral_findings") or []
        if behavior:
            evidence = str(behavior[0].get("summary") or "")
        if not evidence and top.get("risk_reasons"):
            evidence = "；".join(str(item) for item in top["risk_reasons"][:2])
    if not evidence:
        evidence = str(final_judgment.get("executive_summary") or "仓库静态审计已完成。")

    score = 52
    if severity == "Critical":
        score = 96
    elif severity == "High":
        score = 84
    elif severity == "Medium":
        score = 68

    return {
        "id": label,
        "tag": "仓库审计",
        "title": label,
        "desc": str(final_judgment.get("executive_summary") or "ClawGuard 仓库级静态审计结果。"),
        "evidence": evidence[:260],
        "action": recommend_action_for_severity(severity),
        "score": score,
        "severity": severity,
        "tone": "rose" if severity in {"Critical", "High"} else ("amber" if severity == "Medium" else "sky"),
        "reason": str(final_judgment.get("executive_summary") or evidence),
        "capabilities": list((content_top[0].get("induced_capabilities") if content_top else []) or []),
    }


def static_signal_from_audit(audit: dict[str, Any], *, label: str) -> dict[str, Any]:
    severity = severity_from_risk_level(audit.get("effective_risk_level") or audit.get("risk_level") or "low")
    behavior = audit.get("behavioral_findings") or []
    reasons = audit.get("risk_reasons") or []
    evidence = ""
    if behavior:
        evidence = str(behavior[0].get("summary") or "")
    elif audit.get("evidence"):
        evidence = str(audit["evidence"][0].get("text") or "")
    if not evidence and reasons:
        evidence = "；".join(str(item) for item in reasons[:2])
    score = 46 + 14 * _risk_rank(str(audit.get("effective_risk_level") or audit.get("risk_level") or "low"))

    return {
        "id": label,
        "tag": "内容审计",
        "title": label,
        "desc": str(reasons[0]) if reasons else "ClawGuard 内容级静态审计结果。",
        "evidence": evidence[:260],
        "action": recommend_action_for_severity(severity),
        "score": score,
        "severity": severity,
        "tone": "rose" if severity == "High" else ("amber" if severity == "Medium" else "sky"),
        "reason": evidence or "静态审计完成。",
        "capabilities": list(audit.get("induced_capabilities") or []),
    }
