from __future__ import annotations

import sys
from datetime import datetime
from pathlib import Path
from typing import Any

BACKEND_DIR = Path(__file__).resolve().parent
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

try:  # noqa: E402
    from .detectors import infer_primary_task, scan_skill_document
    from .sample_paths import resolve_sample_roots
except ImportError:  # noqa: E402
    from detectors import infer_primary_task, scan_skill_document
    from sample_paths import resolve_sample_roots

PROJECT_ROOT = BACKEND_DIR.parent
DEFAULT_TASK_PROMPT = "Optimize a local SVG asset without network access, unrelated skills, or external content."


def build_sample_scan_report(task_prompt: str = DEFAULT_TASK_PROMPT) -> dict[str, Any]:
    sample_roots = resolve_sample_roots(PROJECT_ROOT)
    samples_root = sample_roots[0] if sample_roots else (PROJECT_ROOT / "samples")
    malicious_samples_dir = samples_root / "malicious_skills"
    benign_samples_dir = samples_root / "benign_skills"

    profiles = [
        scan_skill_directory(
            directory=malicious_samples_dir,
            profile_id="malicious",
            label="Bundled Malicious Samples",
            expected_outcome="should_flag",
            task_prompt=task_prompt,
        ),
        scan_skill_directory(
            directory=benign_samples_dir,
            profile_id="baseline",
            label="Bundled Baseline Samples",
            expected_outcome="should_stay_low",
            task_prompt=task_prompt,
        ),
    ]

    malicious_profile = profiles[0]
    baseline_profile = profiles[1]
    malicious_flag_rate = percent(malicious_profile["flagged_count"], malicious_profile["skill_count"])
    baseline_flag_rate = percent(baseline_profile["flagged_count"], baseline_profile["skill_count"])

    if malicious_flag_rate >= 100 and baseline_flag_rate == 0:
        verdict = "The bundled detector cleanly separates the malicious sample set from the benign baseline."
    elif malicious_flag_rate > baseline_flag_rate:
        verdict = "The detector flags the malicious sample set more aggressively than the benign baseline."
    else:
        verdict = "The sample scan does not yet show a strong separation between malicious and baseline skills."

    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "task_prompt": task_prompt,
        "primary_task": infer_primary_task(task_prompt) or "unknown",
        "directories": {
            "samples_root": str(samples_root),
            "malicious": str(malicious_samples_dir),
            "baseline": str(benign_samples_dir),
        },
        "profiles": profiles,
        "comparison": {
            "malicious_flagged": malicious_profile["flagged_count"],
            "malicious_total": malicious_profile["skill_count"],
            "baseline_flagged": baseline_profile["flagged_count"],
            "baseline_total": baseline_profile["skill_count"],
            "malicious_flag_rate": malicious_flag_rate,
            "baseline_flag_rate": baseline_flag_rate,
            "verdict": verdict,
        },
    }


def scan_skill_directory(
    directory: Path,
    profile_id: str,
    label: str,
    expected_outcome: str,
    task_prompt: str,
) -> dict[str, Any]:
    primary_task = infer_primary_task(task_prompt)
    paths = sorted(path for path in directory.rglob("SKILL.md") if path.is_file()) if directory.exists() else []
    results = []
    for path in paths:
        text = path.read_text(encoding="utf-8")
        result = scan_skill_document(
            text=text,
            skill_path=to_relative_display_path(path),
            primary_task=primary_task,
            requested_capabilities=[],
            user_task_text=task_prompt,
        ).model_dump()
        result["sample_group"] = profile_id
        result["expected_outcome"] = expected_outcome
        result["sample_path"] = str(path)
        results.append(result)

    results.sort(
        key=lambda item: (
            item["severity"] == "Critical",
            item["severity"] == "High",
            item["severity"] == "Medium",
            item["score"],
        ),
        reverse=True,
    )

    return {
        "id": profile_id,
        "label": label,
        "expected_outcome": expected_outcome,
        "directory_path": str(directory),
        "skill_count": len(results),
        "flagged_count": sum(item["severity"] in {"Critical", "High"} or item["suspicious"] for item in results),
        "critical_count": sum(item["severity"] == "Critical" for item in results),
        "high_count": sum(item["severity"] == "High" for item in results),
        "medium_count": sum(item["severity"] == "Medium" for item in results),
        "results": results,
    }


def to_relative_display_path(path: Path) -> str:
    try:
        return str(path.relative_to(PROJECT_ROOT)).replace("\\", "/")
    except ValueError:
        return str(path)


def percent(numerator: int, denominator: int) -> int:
    if denominator <= 0:
        return 0
    return round((numerator / denominator) * 100)
