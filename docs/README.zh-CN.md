# ClawGuard

> 🛡️ 面向 OpenClaw skill 链式攻击的动静态监测系统

[English](../README.md)

ClawGuard 是一套面向 OpenClaw 一类 Agent 平台的动静态实时监测系统，重点处理 skill 链式攻击问题。系统以图片木马场景为切入点，但目标并不限于图像载荷，而是进一步抽象为更通用的安全问题：外部不可信内容会诱导 Agent 偏离原始任务，并进入异常的 Skill 调用链。ClawGuard 通过静态分析结合运行时监测，在同一套工作流中识别隐藏意图、能力域漂移、多 Skill 异常协同和成本放大风险。

## ✨ 项目能力

- `审计` 对 `SKILL.md`、SVG、上传文件等不可信输入做结构化提取与意图审计。
- `跟踪` 实时跟踪 Skill 调用链、异常循环、链式滥用和资源放大行为。
- `联动` 将静态风险信号与运行时执行轨迹联动分析，更早暴露任务漂移与跨 Skill 升级。
- `验证` 支持旁路监听、可视化审查和面向 OpenClaw 场景的快速验证。

## ⚙️ 技术说明

- `静态层` 从不可信输入中提取文本、结构和能力线索，识别隐藏意图与 task-skill drift。
- `运行层` 基于执行事件重建 Skill 调用链，发现异常循环、跨 Skill 升级和成本放大模式。
- `关联层` 将前置风险信号与实时轨迹合并分析，让可疑内容能够和真实 Agent 行为对应验证。

## 🧩 目录结构

```text
clawguard/
├─ backend/        Python 后端与 API
├─ core/           内嵌分析核心
├─ samples/        演示样例
├─ src/            React 前端
├─ launcher.py     单进程启动器
└─ requirements.txt
```

## 🚀 快速运行

`便携模式`

```bash
npm install
npm run build
python launcher.py
```

`Windows 可执行文件`

```bat
python -m pip install -r requirements.txt
python -m pip install pyinstaller
build_exe.bat
```
