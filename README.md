# ClawGuard

> 🛡️ Static-dynamic monitoring for OpenClaw skill-chain attacks

[中文](docs/README.zh-CN.md)

ClawGuard is a static-dynamic real-time monitoring system for skill-chain attacks in OpenClaw-style agent platforms. Using image trojan scenarios as an entry point, it addresses a broader security problem: untrusted external content can induce an agent to drift away from the original task and enter an abnormal skill chain. By combining static analysis with runtime monitoring, ClawGuard is designed to surface hidden intent, capability-domain drift, abnormal multi-skill coordination, and cost amplification risks in one operational workflow.

## ✨ Highlights

- `Inspect` Audits `SKILL.md`, SVG, and uploaded content with structured extraction and intent analysis.
- `Monitor` Tracks runtime skill-call chains, abnormal loops, chained misuse, and resource amplification in real time.
- `Correlate` Connects static signals with live execution traces to expose task drift and cross-skill escalation early.
- `Operate` Supports side-channel observation, visual review, and rapid validation for OpenClaw environments.

## ⚙️ Technical Notes

- `Static layer` extracts text, structure, and capability hints from untrusted inputs, then checks for hidden intent and task-skill drift.
- `Runtime layer` rebuilds skill-chain behavior from execution events and highlights abnormal loops, escalation patterns, and cost growth.
- `Correlation layer` merges pre-run signals with live traces so suspicious content can be validated against actual agent behavior.

## 🧩 Project Layout

```text
clawguard/
├─ backend/        Python backend and API
├─ core/           Embedded analysis core
├─ samples/        Demo skills and test cases
├─ src/            React frontend
├─ launcher.py     Single-process launcher
└─ requirements.txt
```

## 🚀 Quick Start

`Portable mode`

```bash
npm install
npm run build
python launcher.py
```

`Windows executable`

```bat
python -m pip install -r requirements.txt
python -m pip install pyinstaller
build_exe.bat
```
