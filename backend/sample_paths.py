from __future__ import annotations

import os
import sys
from pathlib import Path


def resolve_sample_roots(project_root: Path) -> list[Path]:
    roots: list[Path] = []

    env_dir = os.environ.get("CLAWGUARD_SAMPLES_DIR", "").strip()
    if env_dir:
        roots.append(Path(env_dir))

    roots.append(Path.cwd() / "samples")

    if getattr(sys, "frozen", False):
        roots.append(Path(sys.executable).resolve().parent / "samples")

    roots.append(project_root / "samples")

    deduped: list[Path] = []
    seen: set[str] = set()
    for path in roots:
        try:
            key = str(path.resolve())
        except OSError:
            key = str(path)
        if key in seen:
            continue
        seen.add(key)
        if path.exists():
            deduped.append(path)

    return deduped
