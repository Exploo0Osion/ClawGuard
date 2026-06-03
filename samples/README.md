# Bundled Scan Samples

This folder is used by ClawGuard's active demo scan.

- `malicious_skills/`
  Curated malicious or attack-oriented `SKILL.md` samples used to demonstrate positive detections.
- `benign_skills/`
  Baseline `SKILL.md` samples used to demonstrate non-malicious comparisons.

The frontend active scan button calls `/api/sample-scan`, which scans both directories and reports the difference.

- `imported_agentdojo_4_26/external_hubs/`
  Imported on 2026-05-07 from sibling project `agentdojo-4.26/agentdojo-main/agentdojo-main/external_hubs`.
  This keeps a larger local sample corpus inside `clawguard/samples` so static audit can run without relying on external paths.
  Imported entries were filtered to keep only each skill's `SKILL.md` for static-audit-focused usage.
