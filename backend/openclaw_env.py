from __future__ import annotations

import json
import os
import re
import subprocess
from pathlib import Path, PurePosixPath

from pydantic import BaseModel, Field

try:
    from .settings_store import load_openclaw_root
except ImportError:
    from settings_store import load_openclaw_root


class OpenClawEnvironment(BaseModel):
    detected: bool
    mode: str
    detection_method: str
    platform: str
    root_path: str | None = None
    config_path: str | None = None
    workspace_path: str | None = None
    raw_workspace_path: str | None = None
    skills_path: str | None = None
    sessions_path: str | None = None
    agent_name: str | None = None
    latest_session_path: str | None = None
    latest_session_id: str | None = None
    session_count: int = 0
    skill_count: int = 0
    primary_model: str | None = None
    notes: list[str] = Field(default_factory=list)


class _Candidate(BaseModel):
    root: str
    method: str
    notes: list[str] = Field(default_factory=list)
    score: int = 0


def detect_openclaw_environment() -> OpenClawEnvironment:
    candidates = _gather_candidates()
    scored: list[tuple[int, OpenClawEnvironment]] = []
    for candidate in candidates:
        environment = _build_environment(candidate)
        if not environment.detected:
            continue
        score = _score_environment(environment, candidate.method)
        scored.append((score, environment))

    if scored:
        scored.sort(key=lambda item: item[0], reverse=True)
        return scored[0][1]

    return OpenClawEnvironment(
        detected=False,
        mode="demo_fallback",
        detection_method="none",
        platform="unknown",
        notes=[
            "No OpenClaw environment was detected automatically.",
            "Set OPENCLAW_HOME, OPENCLAW_PATH_HINTS, or OPENCLAW_SESSIONS_DIR if your installation lives in a custom location.",
        ],
    )


def resolve_runtime_path(raw_path: str | None, environment: OpenClawEnvironment) -> Path | None:
    if not raw_path or not environment.detected or not environment.root_path:
        return None

    normalized = raw_path.replace("\\", "/")
    root = Path(environment.root_path)
    root_str = str(root)

    if re.match(r"^[A-Za-z]:[/\\]", raw_path):
        return Path(raw_path)

    if normalized.startswith("~/.openclaw"):
        suffix = normalized.removeprefix("~/.openclaw").lstrip("/")
        return root.joinpath(*PurePosixPath(suffix).parts) if suffix else root

    home_root = _infer_home_root(root)
    if normalized.startswith("~/") and home_root is not None:
        suffix = normalized[2:]
        return home_root.joinpath(*PurePosixPath(suffix).parts)

    if normalized.startswith("/"):
        if root_str.startswith("\\\\wsl.localhost\\"):
            distro_root = _infer_wsl_distro_root(root)
            if distro_root is not None:
                return distro_root.joinpath(*PurePosixPath(normalized.lstrip("/")).parts)
        return Path(normalized)

    base = Path(environment.workspace_path) if environment.workspace_path else root
    return base.joinpath(*PurePosixPath(normalized).parts)


def collect_recent_session_paths(environment: OpenClawEnvironment, limit: int = 10) -> list[Path]:
    if not environment.detected or not environment.sessions_path:
        return []

    sessions_dir = Path(environment.sessions_path)
    if not sessions_dir.exists():
        return []

    files = [path for path in sessions_dir.glob("*.jsonl") if path.is_file()]
    files.extend(path for path in sessions_dir.glob("*.jsonl.reset.*") if path.is_file())
    files.sort(key=lambda item: item.stat().st_mtime, reverse=True)
    return files[:limit]


def _gather_candidates() -> list[_Candidate]:
    raw_candidates: list[_Candidate] = []

    configured_root = load_openclaw_root()
    if configured_root:
        raw_candidates.append(
            _Candidate(
                root=configured_root,
                method="settings:openclaw_root",
                notes=["Candidate came from the persisted ClawGuard OpenClaw directory setting."],
            )
        )

    for env_name in ("OPENCLAW_HOME", "OPENCLAW_ROOT"):
        value = os.environ.get(env_name)
        if value:
            raw_candidates.append(
                _Candidate(
                    root=str(Path(value)),
                    method=f"env:{env_name.lower()}",
                    notes=[f"Candidate came from {env_name}."],
                )
            )

    for env_name in ("OPENCLAW_PATH_HINTS", "OPENCLAW_HOME_HINTS"):
        value = os.environ.get(env_name)
        if not value:
            continue
        for raw_path in _split_hint_paths(value):
            candidate_path = raw_path.strip()
            if not candidate_path:
                continue
            raw_candidates.append(
                _Candidate(
                    root=str(Path(candidate_path)),
                    method=f"env:{env_name.lower()}",
                    notes=[f"Candidate came from {env_name}."],
                )
            )

    config_override = os.environ.get("OPENCLAW_CONFIG_PATH")
    if config_override:
        raw_candidates.append(
            _Candidate(
                root=str(Path(config_override).parent),
                method="env:openclaw_config_path",
                notes=["Candidate root inferred from OPENCLAW_CONFIG_PATH."],
            )
        )

    raw_candidates.append(
        _Candidate(
            root=str(Path.home() / ".openclaw"),
            method="home_scan",
            notes=["Checked the current user's default ~/.openclaw directory."],
        )
    )

    raw_candidates.extend(_discover_local_candidates())
    raw_candidates.extend(_discover_wsl_candidates())
    return _dedupe_candidates(raw_candidates)


def _split_hint_paths(value: str) -> list[str]:
    normalized = value.replace("\r\n", "\n")
    paths: list[str] = []
    for line in normalized.split("\n"):
        stripped = line.strip()
        if not stripped:
            continue
        semicolon_parts = [part.strip() for part in stripped.split(";") if part.strip()]
        for part in semicolon_parts:
            posix_parts = [segment.strip() for segment in re.split(r":(?=(?:/|~))", part) if segment.strip()]
            paths.extend(posix_parts or [part])
    return paths


def _discover_local_candidates() -> list[_Candidate]:
    candidates: list[_Candidate] = []
    current = Path.cwd().resolve()
    checked: set[str] = set()

    for base in [current, *current.parents[:6]]:
        for candidate_root in (base, base / ".openclaw"):
            key = str(candidate_root).lower()
            if key in checked:
                continue
            checked.add(key)
            if (candidate_root / "openclaw.json").exists() or (candidate_root / "workspace" / "skills").exists():
                candidates.append(
                    _Candidate(
                        root=str(candidate_root),
                        method="cwd_scan",
                        notes=[f"Detected from the current working tree near {candidate_root}."],
                    )
                )

    return candidates


def _discover_wsl_candidates() -> list[_Candidate]:
    candidates: list[_Candidate] = []
    distros = _list_wsl_distros()
    for distro in distros:
        distro_home = Path(rf"\\wsl.localhost\{distro}\home")
        try:
            if distro_home.exists():
                for user_dir in distro_home.iterdir():
                    candidate = user_dir / ".openclaw"
                    if candidate.exists():
                        candidates.append(
                            _Candidate(
                                root=str(candidate),
                                method="wsl_scan",
                                notes=[f"Detected from WSL distro '{distro}'."],
                            )
                        )
        except OSError:
            continue

        root_candidate = Path(rf"\\wsl.localhost\{distro}\root\.openclaw")
        if root_candidate.exists():
            candidates.append(
                _Candidate(
                    root=str(root_candidate),
                    method="wsl_scan",
                    notes=[f"Detected root-owned OpenClaw environment in WSL distro '{distro}'."],
                )
            )

    return candidates


def _list_wsl_distros() -> list[str]:
    try:
        result = subprocess.run(
            ["wsl.exe", "-l", "-q"],
            capture_output=True,
            text=True,
            timeout=5,
            check=False,
        )
    except (FileNotFoundError, subprocess.SubprocessError):
        return _scan_wsl_hostnames()

    stdout = result.stdout.replace("\x00", "")
    distros = [line.strip() for line in stdout.splitlines() if line.strip()]
    if not distros:
        return _scan_wsl_hostnames()
    return distros


def _scan_wsl_hostnames() -> list[str]:
    host_root = Path(r"\\wsl.localhost")
    try:
        return [child.name for child in host_root.iterdir() if child.is_dir()]
    except OSError:
        return []


def _dedupe_candidates(candidates: list[_Candidate]) -> list[_Candidate]:
    seen: set[str] = set()
    deduped: list[_Candidate] = []
    for candidate in candidates:
        key = candidate.root.replace("/", "\\").lower()
        if key in seen:
            continue
        seen.add(key)
        deduped.append(candidate)
    return deduped


def _build_environment(candidate: _Candidate) -> OpenClawEnvironment:
    root = Path(candidate.root)
    config_path = root / "openclaw.json"
    config = _load_json(config_path) if config_path.exists() else {}
    raw_workspace_path = _nested_get(config, "agents", "defaults", "workspace")
    workspace_path = _resolve_workspace(root, raw_workspace_path)
    skills_path = _resolve_skills_path(root, workspace_path)
    agent_name, sessions_path = _resolve_sessions_path(root)

    session_files = [path for path in sessions_path.glob("*.jsonl")] if sessions_path and sessions_path.exists() else []
    session_files.sort(key=lambda item: item.stat().st_mtime, reverse=True)
    latest_session = session_files[0] if session_files else None

    skill_count = 0
    if skills_path and skills_path.exists():
        try:
            skill_count = sum(1 for path in skills_path.glob("*/SKILL.md") if path.is_file())
        except OSError:
            skill_count = 0

    notes = list(candidate.notes)
    if not config_path.exists():
        notes.append(f"openclaw.json was not found under {root}; using directory heuristics and overrides.")
    if workspace_path is None:
        notes.append("Workspace path could not be resolved from openclaw.json; falling back to defaults.")
    if sessions_path is None or not sessions_path.exists():
        notes.append("No sessions directory was found under this environment.")
    if skills_path is None or not skills_path.exists():
        notes.append("No skills directory was found under this environment.")

    if not config_path.exists() and (
        (workspace_path is None or not workspace_path.exists())
        and (skills_path is None or not skills_path.exists())
        and (sessions_path is None or not sessions_path.exists())
    ):
        return OpenClawEnvironment(
            detected=False,
            mode="demo_fallback",
            detection_method=candidate.method,
            platform=_detect_platform(root),
            notes=notes,
        )

    return OpenClawEnvironment(
        detected=True,
        mode="live_openclaw",
        detection_method=candidate.method,
        platform=_detect_platform(root),
        root_path=str(root),
        config_path=str(config_path) if config_path.exists() else None,
        workspace_path=str(workspace_path) if workspace_path else None,
        raw_workspace_path=raw_workspace_path if isinstance(raw_workspace_path, str) else None,
        skills_path=str(skills_path) if skills_path else None,
        sessions_path=str(sessions_path) if sessions_path else None,
        agent_name=agent_name,
        latest_session_path=str(latest_session) if latest_session else None,
        latest_session_id=latest_session.stem if latest_session else None,
        session_count=len(session_files),
        skill_count=skill_count,
        primary_model=_nested_get(config, "agents", "defaults", "model", "primary"),
        notes=notes,
    )


def _resolve_override_or_default(env_name: str, default: Path | None) -> Path | None:
    override = os.environ.get(env_name)
    if override:
        return Path(override)
    return default


def _resolve_workspace(root: Path, raw_workspace_path: object) -> Path | None:
    explicit_workspace = os.environ.get("OPENCLAW_WORKSPACE")
    if explicit_workspace:
        return Path(explicit_workspace)

    if isinstance(raw_workspace_path, str):
        resolved = resolve_runtime_path(
            raw_workspace_path,
            OpenClawEnvironment(
                detected=True,
                mode="live_openclaw",
                detection_method="internal",
                platform=_detect_platform(root),
                root_path=str(root),
            ),
        )
        if resolved is not None:
            return resolved

    if (root / "skills").exists():
        return root

    default_workspace = root / "workspace"
    if default_workspace.exists():
        return default_workspace
    return None


def _resolve_skills_path(root: Path, workspace_path: Path | None) -> Path | None:
    explicit_skills = os.environ.get("OPENCLAW_SKILLS_DIR")
    if explicit_skills:
        return Path(explicit_skills)

    candidates = [
        workspace_path / "skills" if workspace_path else None,
        root / "skills",
        root / "workspace" / "skills",
    ]
    for candidate in candidates:
        if candidate is not None and candidate.exists():
            return candidate
    return candidates[0]


def _resolve_sessions_path(root: Path) -> tuple[str | None, Path | None]:
    explicit_sessions = os.environ.get("OPENCLAW_SESSIONS_DIR")
    if explicit_sessions:
        agent_name = os.environ.get("OPENCLAW_AGENT") or "custom"
        return agent_name, Path(explicit_sessions)

    agents_root = root / "agents"
    if not agents_root.exists():
        return None, None

    explicit_agent = os.environ.get("OPENCLAW_AGENT")
    candidates: list[tuple[str, Path, float]] = []
    for agent_dir in agents_root.iterdir():
        sessions_dir = agent_dir / "sessions"
        if not agent_dir.is_dir() or not sessions_dir.exists():
            continue
        latest_mtime = 0.0
        try:
            files = [path for path in sessions_dir.glob("*.jsonl") if path.is_file()]
            if files:
                latest_mtime = max(path.stat().st_mtime for path in files)
        except OSError:
            latest_mtime = 0.0
        candidates.append((agent_dir.name, sessions_dir, latest_mtime))

    if not candidates:
        return None, None

    if explicit_agent:
        for agent_name, sessions_dir, _mtime in candidates:
            if agent_name == explicit_agent:
                return agent_name, sessions_dir

    candidates.sort(key=lambda item: (item[2], item[0] == "main"), reverse=True)
    agent_name, sessions_dir, _mtime = candidates[0]
    return agent_name, sessions_dir


def _detect_platform(root: Path) -> str:
    root_str = str(root)
    if root_str.startswith("\\\\wsl.localhost\\"):
        return "wsl"
    if re.match(r"^[A-Za-z]:\\", root_str):
        return "windows"
    if root.is_absolute():
        return "posix"
    return "unknown"


def _score_environment(environment: OpenClawEnvironment, method: str) -> int:
    score = 0
    if method.startswith("settings:"):
        score += 45
    elif method.startswith("env:"):
        score += 40
    elif method == "wsl_scan":
        score += 20
    elif method == "home_scan":
        score += 12

    if environment.config_path:
        score += 20
    if environment.workspace_path:
        score += 10
    if environment.skills_path:
        score += 8
    if environment.sessions_path:
        score += 10
    score += min(environment.session_count, 20)
    score += min(environment.skill_count, 20)
    if environment.latest_session_path:
        score += 15
    return score


def _load_json(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}


def _nested_get(payload: object, *keys: str) -> str | None:
    current = payload
    for key in keys:
        if not isinstance(current, dict) or key not in current:
            return None
        current = current[key]
    return current if isinstance(current, str) else None


def _infer_wsl_distro_root(root: Path) -> Path | None:
    match = re.match(r"^\\\\wsl\.localhost\\([^\\]+)", str(root), flags=re.IGNORECASE)
    if not match:
        return None
    return Path(rf"\\wsl.localhost\{match.group(1)}")


def _infer_home_root(root: Path) -> Path | None:
    root_str = str(root)
    wsl_match = re.match(
        r"^\\\\wsl\.localhost\\([^\\]+)\\home\\([^\\]+)\\\.openclaw",
        root_str,
        flags=re.IGNORECASE,
    )
    if wsl_match:
        return Path(rf"\\wsl.localhost\{wsl_match.group(1)}\home\{wsl_match.group(2)}")

    if root.name == ".openclaw":
        return root.parent
    return None
