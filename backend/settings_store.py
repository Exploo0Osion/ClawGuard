from __future__ import annotations

import json
import os
from datetime import datetime
from pathlib import Path
from typing import Any


DEFAULT_OPENCLAW_ROOT = r"\\wsl.localhost\Ubuntu\home\ricardo\openclaw"


def settings_file_path() -> Path:
    custom_path = os.environ.get("CLAWGUARD_SETTINGS_PATH")
    if custom_path:
        return Path(custom_path).expanduser()

    runtime_root = os.environ.get("CLAWGUARD_RUNTIME_DIR")
    if runtime_root:
        return Path(runtime_root).expanduser() / "settings.json"

    return Path.home() / ".clawguard" / "runtime" / "settings.json"


def load_settings() -> dict[str, Any]:
    path = settings_file_path()
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}
    return payload if isinstance(payload, dict) else {}


def save_settings(payload: dict[str, Any]) -> dict[str, Any]:
    path = settings_file_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return payload


def normalize_openclaw_root(raw_path: str | None) -> str | None:
    text = str(raw_path or "").strip()
    if not text:
        return None

    path = Path(text).expanduser()
    if path.name.lower() == "skills":
        path = path.parent
    return str(path)


def load_openclaw_root() -> str | None:
    return normalize_openclaw_root(load_settings().get("openclaw_root"))


def configured_skill_dir_candidates() -> list[Path]:
    root_text = load_openclaw_root()
    if not root_text:
        return []

    root = Path(root_text)
    candidates: list[Path] = []
    if root.name.lower() == "skills":
        candidates.append(root)
    else:
        candidates.extend(
            [
                root / "skills",
                root / "workspace" / "skills",
                root / ".openclaw" / "workspace" / "skills",
            ]
        )
    return candidates


def save_openclaw_root(raw_path: str | None) -> dict[str, Any]:
    payload = load_settings()
    normalized = normalize_openclaw_root(raw_path)
    if normalized:
        payload["openclaw_root"] = normalized
    else:
        payload.pop("openclaw_root", None)
    payload["updated_at"] = datetime.now().isoformat(timespec="seconds")
    return save_settings(payload)


def settings_payload() -> dict[str, Any]:
    payload = load_settings()
    return {
        "openclaw_root": normalize_openclaw_root(payload.get("openclaw_root")),
        "updated_at": payload.get("updated_at"),
        "default_openclaw_root": DEFAULT_OPENCLAW_ROOT,
    }
