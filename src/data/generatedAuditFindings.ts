export type GeneratedAuditFinding = {
  skill: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  title: string;
  reason: string;
  chain: string;
  action: string;
};

export const generatedAuditFindings: GeneratedAuditFinding[] = [
  {
    "skill": "skills__00010110__openclaw-version-monitor",
    "severity": "Low",
    "title": "skills__00010110__openclaw-version-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\push-templates.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000sonic__frontend-skill-1-0-1",
    "severity": "Low",
    "title": "skills__000sonic__frontend-skill-1-0-1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000sonic__local-file-manager-1-0-0",
    "severity": "Low",
    "title": "skills__000sonic__local-file-manager-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\file_manager.sh；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv",
    "severity": "Medium",
    "title": "skills__000wonderclaw__clawcv 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_EN.md；高风险 0，中风险 2，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__account-upgrade",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__account-upgrade 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__ai-mentor",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__ai-mentor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__campus-recommend",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__campus-recommend 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__job-match",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__job-match 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__pdf-export",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__pdf-export 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__resume-analysis",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__resume-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__000wonderclaw__clawcv__resume-rewrite",
    "severity": "Low",
    "title": "skills__000wonderclaw__clawcv__resume-rewrite 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__00xmorty__conatus",
    "severity": "Medium",
    "title": "skills__00xmorty__conatus 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__04551lh__order",
    "severity": "Low",
    "title": "skills__04551lh__order 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__05u__jiuwu-agent",
    "severity": "High",
    "title": "skills__05u__jiuwu-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\call_agent.py；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__05u__jiuwu-message",
    "severity": "High",
    "title": "skills__05u__jiuwu-message 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\send_message.py；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0731coderlee-sudo__wechat-publisher",
    "severity": "High",
    "title": "skills__0731coderlee-sudo__wechat-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 4，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__08820048__polymarket-openclaw-trader",
    "severity": "Low",
    "title": "skills__08820048__polymarket-openclaw-trader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__08820048__wechat-layout-publish",
    "severity": "Medium",
    "title": "skills__08820048__wechat-layout-publish 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\publish_wechat.py；高风险 0，中风险 2，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0ctday__ai-vulnerability-tracker",
    "severity": "High",
    "title": "skills__0ctday__ai-vulnerability-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0isone__0protocol",
    "severity": "Low",
    "title": "skills__0isone__0protocol 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0marwalied__carsxe",
    "severity": "Low",
    "title": "skills__0marwalied__carsxe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: refernces\\api-refernce.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0n1onr1ng__nano-banana-skills",
    "severity": "Medium",
    "title": "skills__0n1onr1ng__nano-banana-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0range-x__session-rotate-80",
    "severity": "Medium",
    "title": "skills__0range-x__session-rotate-80 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0range-x__triple-layer-memory",
    "severity": "High",
    "title": "skills__0range-x__triple-layer-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 3，低风险 15",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x-cryptopriest__obsidian-cli-skills",
    "severity": "Low",
    "title": "skills__0x-cryptopriest__obsidian-cli-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__agentic-mcp-server-builder",
    "severity": "Low",
    "title": "skills__0x-professor__agentic-mcp-server-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__agentic-workflow-automation",
    "severity": "Low",
    "title": "skills__0x-professor__agentic-workflow-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__cyber-ir-playbook",
    "severity": "Low",
    "title": "skills__0x-professor__cyber-ir-playbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__cyber-kev-triage",
    "severity": "Low",
    "title": "skills__0x-professor__cyber-kev-triage 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__cyber-owasp-review",
    "severity": "Medium",
    "title": "skills__0x-professor__cyber-owasp-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\map_findings_to_owasp.py；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x-professor__dl-transformer-finetune",
    "severity": "Low",
    "title": "skills__0x-professor__dl-transformer-finetune 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__docs-pipeline-automation",
    "severity": "Low",
    "title": "skills__0x-professor__docs-pipeline-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__google-workspace-automation",
    "severity": "Low",
    "title": "skills__0x-professor__google-workspace-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\plan_workspace_automation.py；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__ml-experiment-tracker",
    "severity": "Low",
    "title": "skills__0x-professor__ml-experiment-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__ml-model-eval-benchmark",
    "severity": "Low",
    "title": "skills__0x-professor__ml-model-eval-benchmark 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__nmap-pentest-scans",
    "severity": "Low",
    "title": "skills__0x-professor__nmap-pentest-scans 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\nmap_pentest_scans.py；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__pentest-active-directory",
    "severity": "High",
    "title": "skills__0x-professor__pentest-active-directory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\tools.md；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x-professor__pentest-api-attacker",
    "severity": "Low",
    "title": "skills__0x-professor__pentest-api-attacker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\api_attacker.py；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__pentest-auth-bypass",
    "severity": "Low",
    "title": "skills__0x-professor__pentest-auth-bypass 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\auth_bypass.py；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-professor__pentest-c2-operator",
    "severity": "Low",
    "title": "skills__0x-professor__pentest-c2-operator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\c2_operator.py；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x-wzw__defi-analyst",
    "severity": "Medium",
    "title": "skills__0x-wzw__defi-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x-wzw__ox-agent-identity",
    "severity": "High",
    "title": "skills__0x-wzw__ox-agent-identity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x-wzw__ox-moltbook-interact",
    "severity": "Medium",
    "title": "skills__0x-wzw__ox-moltbook-interact 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x-wzw__swarm-workflow-protocol",
    "severity": "High",
    "title": "skills__0x-wzw__swarm-workflow-protocol 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x-wzw__x-interact",
    "severity": "Medium",
    "title": "skills__0x-wzw__x-interact 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x00000003__douyin-cover-builder",
    "severity": "Low",
    "title": "skills__0x00000003__douyin-cover-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: docs\\USAGE.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x00000003__srt-to-video",
    "severity": "Medium",
    "title": "skills__0x00000003__srt-to-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x00pluto__training-content-extractor",
    "severity": "Low",
    "title": "skills__0x00pluto__training-content-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 11",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills",
    "severity": "High",
    "title": "skills__0x1abin__micropython-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 4，中风险 4，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills__skills__actuator",
    "severity": "Low",
    "title": "skills__0x1abin__micropython-skills__skills__actuator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills__skills__algorithm",
    "severity": "Low",
    "title": "skills__0x1abin__micropython-skills__skills__algorithm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills__skills__diagnostic",
    "severity": "Low",
    "title": "skills__0x1abin__micropython-skills__skills__diagnostic 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills__skills__network",
    "severity": "Low",
    "title": "skills__0x1abin__micropython-skills__skills__network 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x1abin__micropython-skills__skills__sensor",
    "severity": "Low",
    "title": "skills__0x1abin__micropython-skills__skills__sensor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0x5446__ohmytoken",
    "severity": "High",
    "title": "skills__0x5446__ohmytoken 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\index.ts；高风险 1，中风险 4，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x7466__bw-cli",
    "severity": "High",
    "title": "skills__0x7466__bw-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x7466__coda",
    "severity": "High",
    "title": "skills__0x7466__coda 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\coda_cli.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x7466__coda-packs",
    "severity": "High",
    "title": "skills__0x7466__coda-packs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\coda_packs_cli.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0x7466__kimai-time-tracking",
    "severity": "Medium",
    "title": "skills__0x7466__kimai-time-tracking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0x7466__open-webui",
    "severity": "Medium",
    "title": "skills__0x7466__open-webui 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\openwebui-cli.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xadamsu__game-light-tracker",
    "severity": "Medium",
    "title": "skills__0xadamsu__game-light-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xagata-prog__cybergfai",
    "severity": "Medium",
    "title": "skills__0xagata-prog__cybergfai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\analytics.py；高风险 0，中风险 2，低风险 57",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xameer__cloud-devops",
    "severity": "Low",
    "title": "skills__0xameer__cloud-devops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xandjesse__taskmaster-protocol",
    "severity": "Medium",
    "title": "skills__0xandjesse__taskmaster-protocol 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xandjesse__taskmaster-tech",
    "severity": "Low",
    "title": "skills__0xandjesse__taskmaster-tech 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xardi__clawlett",
    "severity": "High",
    "title": "skills__0xardi__clawlett 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\trenches.js；高风险 6，中风险 3，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xarkstar__notion-cli-mcp",
    "severity": "Medium",
    "title": "skills__0xarkstar__notion-cli-mcp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xartex__agentboard",
    "severity": "Medium",
    "title": "skills__0xartex__agentboard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xartex__agents-infra",
    "severity": "Medium",
    "title": "skills__0xartex__agents-infra 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: decrypt-email.mjs；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xartex__agentwallet-cli",
    "severity": "High",
    "title": "skills__0xartex__agentwallet-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xartex__excalidraw-canvas",
    "severity": "Low",
    "title": "skills__0xartex__excalidraw-canvas 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xartex__token-research",
    "severity": "Medium",
    "title": "skills__0xartex__token-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: example_usage.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xartex__x-research-skill",
    "severity": "Medium",
    "title": "skills__0xartex__x-research-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: generate-report.sh；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xastraea__opencog",
    "severity": "High",
    "title": "skills__0xastraea__opencog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 5，中风险 3，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xautonomys__permanent-memory",
    "severity": "High",
    "title": "skills__0xautonomys__permanent-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup-auto-memory.sh；高风险 6，中风险 6，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xautonomys__respawn",
    "severity": "High",
    "title": "skills__0xautonomys__respawn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\network.ts；高风险 2，中风险 4，低风险 15",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xbeekeeper__claw-diary",
    "severity": "Medium",
    "title": "skills__0xbeekeeper__claw-diary 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xbeekeeper__goplus-agentguard",
    "severity": "High",
    "title": "skills__0xbeekeeper__goplus-agentguard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 4，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xbeekeeper__security",
    "severity": "High",
    "title": "skills__0xbeekeeper__security 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 5，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xbreadguy__megaeth-ai-developer-skills",
    "severity": "High",
    "title": "skills__0xbreadguy__megaeth-ai-developer-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: resources.md；高风险 1，中风险 1，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcii__nansen-binance-publisher",
    "severity": "Medium",
    "title": "skills__0xcii__nansen-binance-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcipher0__bou-wallet",
    "severity": "Medium",
    "title": "skills__0xcipher0__bou-wallet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcipher0__cosin",
    "severity": "Medium",
    "title": "skills__0xcipher0__cosin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__0xcjl-auto-context",
    "severity": "Low",
    "title": "skills__0xcjl__0xcjl-auto-context 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__0xcjl-mempalace-integration",
    "severity": "Low",
    "title": "skills__0xcjl__0xcjl-mempalace-integration 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__anti-sycophancy",
    "severity": "High",
    "title": "skills__0xcjl__anti-sycophancy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 7，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcjl__auto-diary-0xcjl",
    "severity": "Low",
    "title": "skills__0xcjl__auto-diary-0xcjl 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__autoresearch-pro",
    "severity": "Medium",
    "title": "skills__0xcjl__autoresearch-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__browser-cdp",
    "severity": "High",
    "title": "skills__0xcjl__browser-cdp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: cdp-proxy.mjs；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcjl__cjl-autoresearch-cc",
    "severity": "Medium",
    "title": "skills__0xcjl__cjl-autoresearch-cc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_zh.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin",
    "severity": "Medium",
    "title": "skills__0xcjl__cjl-plugin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\cjl-slides\\SKILL.md；高风险 0，中风险 6，低风险 21",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-card",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-card 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-invest",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-invest 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-learn",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-learn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-paper",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-paper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-paper-flow",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-paper-flow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-paper-river",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-paper-river 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-plain",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-plain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-rank",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-rank 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-relationship",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-relationship 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-roundtable",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-roundtable 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-skill-map",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-skill-map 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-slides",
    "severity": "Medium",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-slides 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-travel",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-travel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-word",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-word 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-word-flow",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-word-flow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-writes",
    "severity": "Low",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-writes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__cjl-plugin__skills__cjl-x-download",
    "severity": "Medium",
    "title": "skills__0xcjl__cjl-plugin__skills__cjl-x-download 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 2，低风险 0",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__cjl-slides",
    "severity": "Medium",
    "title": "skills__0xcjl__cjl-slides 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__cursor2api",
    "severity": "High",
    "title": "skills__0xcjl__cursor2api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\token.md；高风险 1，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcjl__diagram-drawing",
    "severity": "Medium",
    "title": "skills__0xcjl__diagram-drawing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\svg2png.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__humanizer-cn",
    "severity": "Medium",
    "title": "skills__0xcjl__humanizer-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_zh.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__merge-drafts",
    "severity": "Low",
    "title": "skills__0xcjl__merge-drafts 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xcjl__obsidian-viz",
    "severity": "Medium",
    "title": "skills__0xcjl__obsidian-viz 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xcjl__slowmist-security-cc",
    "severity": "High",
    "title": "skills__0xcjl__slowmist-security-cc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\skill-mcp.md；高风险 6，中风险 2，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcjl__web-reader-pro",
    "severity": "High",
    "title": "skills__0xcjl__web-reader-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install_scrapling.sh；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xclanky__captcha-relay",
    "severity": "High",
    "title": "skills__0xclanky__captcha-relay 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: TAILSCALE.md；高风险 1，中风险 4，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xconal__acquire-first-1000-users-on-reddit",
    "severity": "High",
    "title": "skills__0xconal__acquire-first-1000-users-on-reddit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: first-1000-users-spec.v2.md；高风险 1，中风险 4，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xcovariance__productclank-community-growth",
    "severity": "High",
    "title": "skills__0xcovariance__productclank-community-growth 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\EXAMPLES.md；高风险 5，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xduraku__iseclaw-intel",
    "severity": "Low",
    "title": "skills__0xduraku__iseclaw-intel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xezreal__second-level-thinking",
    "severity": "Low",
    "title": "skills__0xezreal__second-level-thinking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xf4vul__3d-wordcloud-visualizer",
    "severity": "Low",
    "title": "skills__0xf4vul__3d-wordcloud-visualizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xf4vul__conversation-exporter",
    "severity": "Low",
    "title": "skills__0xf4vul__conversation-exporter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xf69__viralevo",
    "severity": "High",
    "title": "skills__0xf69__viralevo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__content-parser",
    "severity": "High",
    "title": "skills__0xfango__content-parser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__explainer-video",
    "severity": "High",
    "title": "skills__0xfango__explainer-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__listenhub-2",
    "severity": "High",
    "title": "skills__0xfango__listenhub-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 5，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__listenhub-official-skills",
    "severity": "High",
    "title": "skills__0xfango__listenhub-official-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 5，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__marswave-asr",
    "severity": "High",
    "title": "skills__0xfango__marswave-asr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfango__marswave-image-gen",
    "severity": "High",
    "title": "skills__0xfango__marswave-image-gen 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xfantommenace__0xarchive",
    "severity": "Medium",
    "title": "skills__0xfantommenace__0xarchive 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xfratex__virtualboxmanager",
    "severity": "High",
    "title": "skills__0xfratex__virtualboxmanager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\virtualbox-utils.ts；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xghostcasper__scrapebadger",
    "severity": "Medium",
    "title": "skills__0xghostcasper__scrapebadger 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xgrainzy__clawford",
    "severity": "Medium",
    "title": "skills__0xgrainzy__clawford 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xguardbot__megaeth",
    "severity": "High",
    "title": "skills__0xguardbot__megaeth 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: resources.md；高风险 1，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xhammerr__tokamak-vault-breach",
    "severity": "Low",
    "title": "skills__0xhammerr__tokamak-vault-breach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xhyperdan__stock-watchlist",
    "severity": "Medium",
    "title": "skills__0xhyperdan__stock-watchlist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\stock_watchlist.py；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xichigo__helius",
    "severity": "Medium",
    "title": "skills__0xichigo__helius 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\webhooks.md；高风险 0，中风险 6，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xichigo__helius-dflow",
    "severity": "High",
    "title": "skills__0xichigo__helius-dflow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\integration-patterns.md；高风险 2，中风险 7，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xichigo__helius-phantom",
    "severity": "High",
    "title": "skills__0xichigo__helius-phantom 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\token-gating.md；高风险 5，中风险 8，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xichigo__svm",
    "severity": "Medium",
    "title": "skills__0xichigo__svm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: install.sh；高风险 0，中风险 1，低风险 13",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xinhua__twittershots",
    "severity": "High",
    "title": "skills__0xinhua__twittershots 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\screenshot_tweet.py；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xj7r__diskclean",
    "severity": "Medium",
    "title": "skills__0xj7r__diskclean 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xjaspreet__wger-fitness",
    "severity": "Medium",
    "title": "skills__0xjaspreet__wger-fitness 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\view_logs.py；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xjaspreet__wger-openclaw",
    "severity": "Medium",
    "title": "skills__0xjaspreet__wger-openclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\view_logs.py；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xjims__polymarket-sports-edge",
    "severity": "High",
    "title": "skills__0xjims__polymarket-sports-edge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: test_odds.py；高风险 4，中风险 0，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjims__polymarket-sports-edge__skills__polymarket-sports-edge",
    "severity": "High",
    "title": "skills__0xjims__polymarket-sports-edge__skills__polymarket-sports-edge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: test_odds.py；高风险 2，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__ai-native-websearch-via-tavily-api-returns-concise-relevant-results-for-openclaw",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__ai-native-websearch-via-tavily-api-returns-concise-relevant-results-for-openclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.mjs；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-affordable-llm-model-tokens",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-affordable-llm-model-tokens 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\llm_router_client.py；高风险 3，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-chinese-llm-models",
    "severity": "Low",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-chinese-llm-models 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\pricing.md；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-chinese-llm-models__AIsa_Chinese_Models_v3",
    "severity": "Low",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-chinese-llm-models__AIsa_Chinese_Models_v3 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: pricing.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-finance-stock-equity-crypto-market-price-data-yahoo-finance-coinhacko",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-finance-stock-equity-crypto-market-price-data-yahoo-finance-coinhacko 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\market_client.py；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-financial-stock-crypto-market-price-data",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-financial-stock-crypto-market-price-data 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\market_client.py；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-image-video-models-wan2-6-gemini-3-pro-image-nano-banana",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-image-video-models-wan2-6-gemini-3-pro-image-nano-banana 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\media_gen_client.py；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-llm-gateway",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-llm-gateway 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\llm_router_client.py；高风险 3，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-search-website-academic-tavily-serp-exa",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-search-website-academic-tavily-serp-exa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search_client.py；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-twitter-search-post",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-twitter-search-post 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\twitter_client.py；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-us-stock-analyst",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-us-stock-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: US Stock Analyst 0210v1\\US_STOCK_CLAWHUB_RELEASE.md；高风险 3，中风险 2，低风险 14",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-us-stock-analyst__US_Stock_Analyst_0210v1",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-us-stock-analyst__US_Stock_Analyst_0210v1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: US_STOCK_CLAWHUB_RELEASE.md；高风险 2，中风险 1，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-youtube",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-youtube 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-aisa-youtube-search-serp-video-channels-trends-content-tracking",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-aisa-youtube-search-serp-video-channels-trends-content-tracking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\youtube_client.py；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xjordansg-yolo__openclaw-twitter",
    "severity": "High",
    "title": "skills__0xjordansg-yolo__openclaw-twitter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\twitter_client.py；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xli__nvidia-model-config",
    "severity": "High",
    "title": "skills__0xli__nvidia-model-config 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\merge_nvidia_config.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xli__sync-discord-identity",
    "severity": "Medium",
    "title": "skills__0xli__sync-discord-identity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\sync_discord_identity.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xlucasliao__bnbchain",
    "severity": "Medium",
    "title": "skills__0xlucasliao__bnbchain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xm1kr__doppel",
    "severity": "High",
    "title": "skills__0xm1kr__doppel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xm1kr__doppel-architect",
    "severity": "Medium",
    "title": "skills__0xm1kr__doppel-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xm1kr__doppel-block-builder",
    "severity": "Low",
    "title": "skills__0xm1kr__doppel-block-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xm1kr__doppel-erc-8004",
    "severity": "High",
    "title": "skills__0xm1kr__doppel-erc-8004 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xm1kr__doppel-social-outreach",
    "severity": "Low",
    "title": "skills__0xm1kr__doppel-social-outreach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xmanel__ask-claude",
    "severity": "Medium",
    "title": "skills__0xmanel__ask-claude 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xmanel__ask-claude-skill",
    "severity": "High",
    "title": "skills__0xmanel__ask-claude-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmasayoshi__sushiswap-api",
    "severity": "Medium",
    "title": "skills__0xmasayoshi__sushiswap-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\openapi.yaml；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xmasayoshi__sushiswap-sdk",
    "severity": "Medium",
    "title": "skills__0xmasayoshi__sushiswap-sdk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\REFERENCE.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xmerkle__skill-guard-actor",
    "severity": "High",
    "title": "skills__0xmerkle__skill-guard-actor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmerl99__agent-world-protocol",
    "severity": "Medium",
    "title": "skills__0xmerl99__agent-world-protocol 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: connect.js；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xmerl99__clawai-town",
    "severity": "High",
    "title": "skills__0xmerl99__clawai-town 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmerl99__clawai-town-skill",
    "severity": "High",
    "title": "skills__0xmerl99__clawai-town-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmomo-ngclubs__universal-trading",
    "severity": "High",
    "title": "skills__0xmomo-ngclubs__universal-trading 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup-wizard.sh；高风险 7，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmugen__maths-rage-bate",
    "severity": "Low",
    "title": "skills__0xmugen__maths-rage-bate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xmythril__clawdtm-advisor",
    "severity": "High",
    "title": "skills__0xmythril__clawdtm-advisor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmythril__clawdtm-review",
    "severity": "Medium",
    "title": "skills__0xmythril__clawdtm-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xmythril__linkedin-cli-2",
    "severity": "High",
    "title": "skills__0xmythril__linkedin-cli-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xmythril__tweet-cli",
    "severity": "High",
    "title": "skills__0xmythril__tweet-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xnuminous__letterboxd-watchlist",
    "severity": "Medium",
    "title": "skills__0xnuminous__letterboxd-watchlist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scrape_watchlist.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xnyk__council-of-high-intelligence",
    "severity": "Medium",
    "title": "skills__0xnyk__council-of-high-intelligence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: agents\\council-watts.md；高风险 0，中风险 4，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xnyk__xint",
    "severity": "High",
    "title": "skills__0xnyk__xint 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: xint.ts；高风险 23，中风险 14，低风险 61",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xnyk__xint-rs",
    "severity": "High",
    "title": "skills__0xnyk__xint-rs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 5，中风险 3，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xpasho__rent-my-browser",
    "severity": "High",
    "title": "skills__0xpasho__rent-my-browser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 5，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xrag__authenticate-wallet",
    "severity": "Low",
    "title": "skills__0xrag__authenticate-wallet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xrag__fund",
    "severity": "Medium",
    "title": "skills__0xrag__fund 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrag__monetize-service",
    "severity": "Medium",
    "title": "skills__0xrag__monetize-service 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrag__pay-for-service",
    "severity": "Medium",
    "title": "skills__0xrag__pay-for-service 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrag__search-for-service",
    "severity": "High",
    "title": "skills__0xrag__search-for-service 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xrag__send-usdc",
    "severity": "Medium",
    "title": "skills__0xrag__send-usdc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrag__trade",
    "severity": "Medium",
    "title": "skills__0xrag__trade 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrag__x402-2",
    "severity": "High",
    "title": "skills__0xrag__x402-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 1",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xraini__crypto-watcher",
    "severity": "Medium",
    "title": "skills__0xraini__crypto-watcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\cli.js；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xraini__molt-solver",
    "severity": "High",
    "title": "skills__0xraini__molt-solver 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: molt-solver.ts；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xraini__nightly-build",
    "severity": "Medium",
    "title": "skills__0xraini__nightly-build 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\nightly.ts；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xraini__raini-skill-audit",
    "severity": "High",
    "title": "skills__0xraini__raini-skill-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\audit.js；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xraini__skilltree",
    "severity": "Low",
    "title": "skills__0xraini__skilltree 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 14",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xraini__soulmate",
    "severity": "Medium",
    "title": "skills__0xraini__soulmate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xraini__yt-digest",
    "severity": "High",
    "title": "skills__0xraini__yt-digest 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\cli.js；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xrapi__isnad-scan",
    "severity": "Medium",
    "title": "skills__0xrapi__isnad-scan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xreisearch__ercdata",
    "severity": "Medium",
    "title": "skills__0xreisearch__ercdata 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\ercdata-cli.py；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xreisearch__rei",
    "severity": "Medium",
    "title": "skills__0xreisearch__rei 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup.sh；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrichyrich__agent-debate",
    "severity": "Low",
    "title": "skills__0xrichyrich__agent-debate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xrichyrich__answers",
    "severity": "Medium",
    "title": "skills__0xrichyrich__answers 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrichyrich__arena-social",
    "severity": "High",
    "title": "skills__0xrichyrich__arena-social 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: arena.sh；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xrichyrich__bland",
    "severity": "High",
    "title": "skills__0xrichyrich__bland 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\bland.sh；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xrichyrich__nudge-marketplace",
    "severity": "Medium",
    "title": "skills__0xrichyrich__nudge-marketplace 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrikt__claw-werewolf",
    "severity": "Medium",
    "title": "skills__0xrikt__claw-werewolf 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrikt__claw-werewolf-live",
    "severity": "Medium",
    "title": "skills__0xrikt__claw-werewolf-live 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrikt__clawarena",
    "severity": "Medium",
    "title": "skills__0xrikt__clawarena 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-token-a",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-token-a 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-token-ana",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-token-ana 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-token-analy",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-token-analy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-token-analysi",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-token-analysi 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-token-analysis",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-token-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xrowan__onchain-contract-tokens",
    "severity": "Medium",
    "title": "skills__0xrowan__onchain-contract-tokens 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xs4m1337__demo-video",
    "severity": "High",
    "title": "skills__0xs4m1337__demo-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\demo-planning.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xs4m1337__openclaw-whatsapp",
    "severity": "High",
    "title": "skills__0xs4m1337__openclaw-whatsapp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xs4m1337__pinterest",
    "severity": "High",
    "title": "skills__0xs4m1337__pinterest 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\pinterest_api.py；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xsegfaulted__claw2ui",
    "severity": "Medium",
    "title": "skills__0xsegfaulted__claw2ui 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: ref\\self-hosting.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xshadoweth__shadow-phone",
    "severity": "Medium",
    "title": "skills__0xshadoweth__shadow-phone 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xsnackbaker__moltycash",
    "severity": "High",
    "title": "skills__0xsnackbaker__moltycash 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xsolace__clawdnet",
    "severity": "Low",
    "title": "skills__0xsolace__clawdnet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\api.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xsoydev__clankerkit",
    "severity": "High",
    "title": "skills__0xsoydev__clankerkit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\index.ts；高风险 1，中风险 4，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xspeter__binance-pro-1-0-0",
    "severity": "Low",
    "title": "skills__0xspeter__binance-pro-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xspeter__blogburst-3-1-2",
    "severity": "Medium",
    "title": "skills__0xspeter__blogburst-3-1-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xspeter__camsnap-1-0-0",
    "severity": "Low",
    "title": "skills__0xspeter__camsnap-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xspeter__humanize-chinese-2-0-0",
    "severity": "Medium",
    "title": "skills__0xspeter__humanize-chinese-2-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\humanize_cn.py；高风险 0，中风险 4，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xspeter__klaviyo-1-0-4",
    "severity": "High",
    "title": "skills__0xspeter__klaviyo-1-0-4 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xtimepunk__rhaios-staging",
    "severity": "High",
    "title": "skills__0xtimepunk__rhaios-staging 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\preflight.ts；高风险 1，中风险 2，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xtimi__agent-squad",
    "severity": "High",
    "title": "skills__0xtimi__agent-squad 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 3，低风险 15",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xtommythomas-dev__soulflow",
    "severity": "Medium",
    "title": "skills__0xtommythomas-dev__soulflow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 7，低风险 13",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xtresser__git-cmt-helper",
    "severity": "Low",
    "title": "skills__0xtresser__git-cmt-helper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xtresser__web-skills-protocol",
    "severity": "Medium",
    "title": "skills__0xtresser__web-skills-protocol 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 4，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xturboblitz__self-xyz",
    "severity": "Medium",
    "title": "skills__0xturboblitz__self-xyz 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\frontend.md；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xuxdesign__pharaoh",
    "severity": "Medium",
    "title": "skills__0xuxdesign__pharaoh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__0xv4l3nt1n3__etherscan",
    "severity": "Low",
    "title": "skills__0xv4l3nt1n3__etherscan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__0xxbrain01__labor-solana-skill",
    "severity": "High",
    "title": "skills__0xxbrain01__labor-solana-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 3，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__0xzcov__omnifun",
    "severity": "Medium",
    "title": "skills__0xzcov__omnifun 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1018466411__openclaw-stock-data-skill",
    "severity": "High",
    "title": "skills__1018466411__openclaw-stock-data-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 4，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1044197988__ht-skills",
    "severity": "High",
    "title": "skills__1044197988__ht-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\api_client.py；高风险 1，中风险 2，低风险 23",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1052326311__session-guardian",
    "severity": "High",
    "title": "skills__1052326311__session-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_EN.md；高风险 3，中风险 6，低风险 19",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1052326311__unified-session",
    "severity": "Medium",
    "title": "skills__1052326311__unified-session 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1052666__mcdonalds-skill",
    "severity": "High",
    "title": "skills__1052666__mcdonalds-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\mcd_cli.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1054570699__fsagent-creator",
    "severity": "Low",
    "title": "skills__1054570699__fsagent-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: list-agents.sh；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1054570699__invoice-recognize",
    "severity": "Medium",
    "title": "skills__1054570699__invoice-recognize 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\recognize_invoices.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1067873313__x-twitter-poster",
    "severity": "High",
    "title": "skills__1067873313__x-twitter-poster 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: post_tweet.js；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__108518__skill-goldprice",
    "severity": "Medium",
    "title": "skills__108518__skill-goldprice 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__10e9928a__duckduckgo-search",
    "severity": "Medium",
    "title": "skills__10e9928a__duckduckgo-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__10e9928a__email-daily-summary",
    "severity": "Medium",
    "title": "skills__10e9928a__email-daily-summary 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__10e9928a__super-skills",
    "severity": "High",
    "title": "skills__10e9928a__super-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__10e9928a__task-decomposer",
    "severity": "High",
    "title": "skills__10e9928a__task-decomposer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__10madh__linkedin-bulk-connect",
    "severity": "Low",
    "title": "skills__10madh__linkedin-bulk-connect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\browser-workflow.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__10madh__linkedin-dm",
    "severity": "High",
    "title": "skills__10madh__linkedin-dm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\browser-workflow.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__10madh__linkedin-followup",
    "severity": "High",
    "title": "skills__10madh__linkedin-followup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__10oss__skrape",
    "severity": "Low",
    "title": "skills__10oss__skrape 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: code.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__10oss__skroller",
    "severity": "High",
    "title": "skills__10oss__skroller 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\export-to-notes.js；高风险 2，中风险 0，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__10xcoldleads__highlevel",
    "severity": "High",
    "title": "skills__10xcoldleads__highlevel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup-wizard.py；高风险 3，中风险 2，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1122525__rednote-publisher",
    "severity": "Low",
    "title": "skills__1122525__rednote-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1122525__rednote-viral-writer",
    "severity": "Low",
    "title": "skills__1122525__rednote-viral-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1122525__xiaohongshu-viral-writing",
    "severity": "Low",
    "title": "skills__1122525__xiaohongshu-viral-writing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__112297720__construction-safety-inspector",
    "severity": "Low",
    "title": "skills__112297720__construction-safety-inspector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__112297720__hnytit-ppt-generator",
    "severity": "Low",
    "title": "skills__112297720__hnytit-ppt-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__112297720__lobster-zhouyi",
    "severity": "Low",
    "title": "skills__112297720__lobster-zhouyi 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\learning-log.md；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__112297720__petro-ai-expert",
    "severity": "Low",
    "title": "skills__112297720__petro-ai-expert 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1126053051-lgtm__leadership-coach",
    "severity": "Low",
    "title": "skills__1126053051-lgtm__leadership-coach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1126053051-lgtm__legal-brief-drafter",
    "severity": "Medium",
    "title": "skills__1126053051-lgtm__legal-brief-drafter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: 发布记录.md；高风险 0，中风险 5，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1126053051-lgtm__solution-architect",
    "severity": "Low",
    "title": "skills__1126053051-lgtm__solution-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: 发布报告.md；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1146345502__reddit-skills",
    "severity": "Medium",
    "title": "skills__1146345502__reddit-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\cli.py；高风险 0，中风险 5，低风险 28",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1146345502__reddit-skills__skills__reddit-auth",
    "severity": "Low",
    "title": "skills__1146345502__reddit-skills__skills__reddit-auth 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1146345502__reddit-skills__skills__reddit-content-ops",
    "severity": "Low",
    "title": "skills__1146345502__reddit-skills__skills__reddit-content-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1146345502__reddit-skills__skills__reddit-explore",
    "severity": "Low",
    "title": "skills__1146345502__reddit-skills__skills__reddit-explore 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1146345502__reddit-skills__skills__reddit-interact",
    "severity": "Low",
    "title": "skills__1146345502__reddit-skills__skills__reddit-interact 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1146345502__reddit-skills__skills__reddit-publish",
    "severity": "Low",
    "title": "skills__1146345502__reddit-skills__skills__reddit-publish 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1148260649__alipay-billing-summary",
    "severity": "Medium",
    "title": "skills__1148260649__alipay-billing-summary 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1173910773__desktop-monitor-widget",
    "severity": "High",
    "title": "skills__1173910773__desktop-monitor-widget 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1173910773__hatsune-miku-monitor",
    "severity": "Medium",
    "title": "skills__1173910773__hatsune-miku-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\hatsune-ball.py；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1173910773__pc-monitor-cn",
    "severity": "Medium",
    "title": "skills__1173910773__pc-monitor-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__117788abc__clawtip",
    "severity": "High",
    "title": "skills__117788abc__clawtip 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: IMPORTANT_STATEMENTS.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__117788abc__clawtip-weather",
    "severity": "Medium",
    "title": "skills__117788abc__clawtip-weather 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1204tmax__auto-diary",
    "severity": "Low",
    "title": "skills__1204tmax__auto-diary 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1204tmax__breakthrough-thinking",
    "severity": "Low",
    "title": "skills__1204tmax__breakthrough-thinking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1204tmax__riji",
    "severity": "Low",
    "title": "skills__1204tmax__riji 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1204tmax__xiaoshan-journal",
    "severity": "Medium",
    "title": "skills__1204tmax__xiaoshan-journal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1209823208__skill-create-pip",
    "severity": "Medium",
    "title": "skills__1209823208__skill-create-pip 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__121212165__yangyindao-rogue",
    "severity": "Low",
    "title": "skills__121212165__yangyindao-rogue 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1213qwerwef__liblib-comfyui-fusion",
    "severity": "High",
    "title": "skills__1213qwerwef__liblib-comfyui-fusion 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\liblib_client.py；高风险 1，中风险 1，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1215656__1215656-clawdbot-filesystem-1-0-2",
    "severity": "Medium",
    "title": "skills__1215656__1215656-clawdbot-filesystem-1-0-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1215656__1215656-self-improving-agent-3-0-6",
    "severity": "High",
    "title": "skills__1215656__1215656-self-improving-agent-3-0-6 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 3，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1215656__botlearn-doctor-1-0-2",
    "severity": "High",
    "title": "skills__1215656__botlearn-doctor-1-0-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 7，中风险 12，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1215656__notebook-lmskill-1-0-0",
    "severity": "High",
    "title": "skills__1215656__notebook-lmskill-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 8，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1215656__puppeteer-1-0-0",
    "severity": "Medium",
    "title": "skills__1215656__puppeteer-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1215656__terminal-command-execution-1-0-0",
    "severity": "Medium",
    "title": "skills__1215656__terminal-command-execution-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 4，低风险 0",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1217047020__openclaw-memory-curator",
    "severity": "Medium",
    "title": "skills__1217047020__openclaw-memory-curator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skill.json；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__12266601032__validation-rule-management",
    "severity": "High",
    "title": "skills__12266601032__validation-rule-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1227323804__batch-rename-1",
    "severity": "Low",
    "title": "skills__1227323804__batch-rename-1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1227323804__check-test",
    "severity": "Medium",
    "title": "skills__1227323804__check-test 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1227323804__hj-check-test",
    "severity": "Medium",
    "title": "skills__1227323804__hj-check-test 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1227323804__sensitive-check-skill",
    "severity": "Medium",
    "title": "skills__1227323804__sensitive-check-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: ucap-safe-guard-skill\\main.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1227323804__ucap-sensitive-check-skill",
    "severity": "Medium",
    "title": "skills__1227323804__ucap-sensitive-check-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1227cwx__telegram-bot-chat",
    "severity": "Medium",
    "title": "skills__1227cwx__telegram-bot-chat 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1231qaz2wsx__skill-safe-install-l0-strict",
    "severity": "Medium",
    "title": "skills__1231qaz2wsx__skill-safe-install-l0-strict 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 1",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__12357851__drawing-bak",
    "severity": "Medium",
    "title": "skills__12357851__drawing-bak 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__12357851__find-skills-local-backup",
    "severity": "Low",
    "title": "skills__12357851__find-skills-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__12357851__gog-local-backup",
    "severity": "Low",
    "title": "skills__12357851__gog-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__12357851__humanizer-local-backup",
    "severity": "Low",
    "title": "skills__12357851__humanizer-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__12357851__memory-local-backup",
    "severity": "Medium",
    "title": "skills__12357851__memory-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__12357851__n8n-workflow-automation-local-backup",
    "severity": "Medium",
    "title": "skills__12357851__n8n-workflow-automation-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__12357851__obsidian-1-0-0-local-backup",
    "severity": "Low",
    "title": "skills__12357851__obsidian-1-0-0-local-backup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__123oo123442__agent-autonomy-kit-1-0-0",
    "severity": "Medium",
    "title": "skills__123oo123442__agent-autonomy-kit-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1322138614__anime-assistant",
    "severity": "Low",
    "title": "skills__1322138614__anime-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13256659129__references",
    "severity": "High",
    "title": "skills__13256659129__references 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\security_audit.py；高风险 2，中风险 5，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__13256659129__sx-security-audit-1-0-0",
    "severity": "High",
    "title": "skills__13256659129__sx-security-audit-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\security_audit.py；高风险 2，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__13290186019__send-signal",
    "severity": "Medium",
    "title": "skills__13290186019__send-signal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: handler.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__13681882136__kami-package-detection",
    "severity": "High",
    "title": "skills__13681882136__kami-package-detection 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__13700307924__yifan-shenfeng",
    "severity": "Low",
    "title": "skills__13700307924__yifan-shenfeng 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13770626440__codebuddy-coding",
    "severity": "Medium",
    "title": "skills__13770626440__codebuddy-coding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: cli-wrapper.js；高风险 0，中风险 1，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__13770626440__e2e-test-recorder",
    "severity": "High",
    "title": "skills__13770626440__e2e-test-recorder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\github-api-release.js；高风险 3，中风险 11，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__13770626440__ghostshield",
    "severity": "Medium",
    "title": "skills__13770626440__ghostshield 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: ghostshield\\style_analyzer.py；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__13770626440__smart-todo",
    "severity": "Medium",
    "title": "skills__13770626440__smart-todo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__137984917-cyber__architect-ai-workflow",
    "severity": "Low",
    "title": "skills__137984917-cyber__architect-ai-workflow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skill.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__cad-batch-processing",
    "severity": "Low",
    "title": "skills__137984917-cyber__cad-batch-processing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: cad_utils.py；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__interior-budget-auto",
    "severity": "Low",
    "title": "skills__137984917-cyber__interior-budget-auto 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: generate_budget.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__interior-fullplan",
    "severity": "Low",
    "title": "skills__137984917-cyber__interior-fullplan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__interior-ppt-generator",
    "severity": "Low",
    "title": "skills__137984917-cyber__interior-ppt-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__interior-proposal",
    "severity": "Low",
    "title": "skills__137984917-cyber__interior-proposal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__interior-xhs-assistant",
    "severity": "Low",
    "title": "skills__137984917-cyber__interior-xhs-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__137984917-cyber__sketchup-ppt-generator",
    "severity": "Low",
    "title": "skills__137984917-cyber__sketchup-ppt-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13801201404-sys__ask-expert-playwriter",
    "severity": "Low",
    "title": "skills__13801201404-sys__ask-expert-playwriter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13923870749__newsscraper",
    "severity": "Medium",
    "title": "skills__13923870749__newsscraper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1393368499__my-browser-agent",
    "severity": "Medium",
    "title": "skills__1393368499__my-browser-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__13977660642__baoman-biaoti",
    "severity": "Low",
    "title": "skills__13977660642__baoman-biaoti 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13977660642__chengben-cesuan",
    "severity": "Low",
    "title": "skills__13977660642__chengben-cesuan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13977660642__hetong-fengxian",
    "severity": "Low",
    "title": "skills__13977660642__hetong-fengxian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13977660642__toubiao-wenan",
    "severity": "Low",
    "title": "skills__13977660642__toubiao-wenan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__13977660642__zaojia-dinge",
    "severity": "Low",
    "title": "skills__13977660642__zaojia-dinge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__14-tr__gitmap",
    "severity": "Medium",
    "title": "skills__14-tr__gitmap 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__141553__honest-agent",
    "severity": "Low",
    "title": "skills__141553__honest-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__141553__kb-archiver",
    "severity": "Low",
    "title": "skills__141553__kb-archiver 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _scripts\\archive.mjs；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__141553__layered-memory-sys",
    "severity": "Low",
    "title": "skills__141553__layered-memory-sys 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__141553__long-term-plan",
    "severity": "Low",
    "title": "skills__141553__long-term-plan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1447443432__hap-mongodb-slowlog-analysis",
    "severity": "Medium",
    "title": "skills__1447443432__hap-mongodb-slowlog-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1458428190__notify-hub",
    "severity": "Medium",
    "title": "skills__1458428190__notify-hub 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 4，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1466561686__cs",
    "severity": "Low",
    "title": "skills__1466561686__cs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__14686039__controller-call-chain-analysis",
    "severity": "Low",
    "title": "skills__14686039__controller-call-chain-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__agent-oversight",
    "severity": "Medium",
    "title": "skills__1477009639zw-blip__agent-oversight 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: oversight.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1477009639zw-blip__agent-portfolio",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__agent-portfolio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: portfolio.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__ai-ops-outreach",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__ai-ops-outreach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__api-documentation",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__api-documentation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__authenticated-web-research",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__authenticated-web-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__authorized-session-scrape",
    "severity": "Medium",
    "title": "skills__1477009639zw-blip__authorized-session-scrape 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1477009639zw-blip__autonomous-code-review",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__autonomous-code-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__backtester",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__backtester 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-agent-memory",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-agent-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-client-onboarding",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-client-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-code-review",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-code-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-knowledge",
    "severity": "High",
    "title": "skills__1477009639zw-blip__beta-knowledge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: platforms\\monetization-landscape.md；高风险 1，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-market-brief",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-market-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-skill-maker",
    "severity": "High",
    "title": "skills__1477009639zw-blip__beta-skill-maker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skill_maker.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-ta-paper-executor",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-ta-paper-executor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\ta_paper_executor.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-ta-signal-engine",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__beta-ta-signal-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__beta-trading-analysis",
    "severity": "High",
    "title": "skills__1477009639zw-blip__beta-trading-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: technical.md；高风险 1，中风险 1，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1477009639zw-blip__betabacktestr",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betabacktestr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betabrandvoic",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betabrandvoic 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betabsdet",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betabsdet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betacalopt",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betacalopt 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betacaptable",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betacaptable 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betacompetit",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betacompetit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betacontentwrit",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betacontentwrit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betacontentwriter",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betacontentwriter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betaleadscore",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betaleadscore 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betamarketradar",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betamarketradar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betasentiment",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betasentiment 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betaseoanalyzer",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betaseoanalyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: seo.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__betasqmaker",
    "severity": "Medium",
    "title": "skills__1477009639zw-blip__betasqmaker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: maker.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1477009639zw-blip__betasurvey",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__betasurvey 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__blocked-page-fallback",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__blocked-page-fallback 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__bptpv1",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__bptpv1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__brand-voice-generator",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__brand-voice-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__bs-detector",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__bs-detector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__calendar-optimizer",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__calendar-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__cap-table",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__cap-table 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__citation-audit",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__citation-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__cli-agent-architecture",
    "severity": "Medium",
    "title": "skills__1477009639zw-blip__cli-agent-architecture 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1477009639zw-blip__human-paced-web-ops",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__human-paced-web-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1477009639zw-blip__paylock-solana",
    "severity": "Low",
    "title": "skills__1477009639zw-blip__paylock-solana 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1491007406__cc-insider",
    "severity": "High",
    "title": "skills__1491007406__cc-insider 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\design-highlights.md；高风险 1，中风险 2，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15027302155__douyin-push-video",
    "severity": "High",
    "title": "skills__15027302155__douyin-push-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get-douyin-token.js；高风险 3，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15071664__feishu-whisper-voice",
    "severity": "High",
    "title": "skills__15071664__feishu-whisper-voice 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts-\\install.sh；高风险 1，中风险 3，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15217172098__designer-intelligence-station",
    "severity": "High",
    "title": "skills__15217172098__designer-intelligence-station 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: docs\\social-media-setup.md；高风险 2，中风险 32，低风险 239",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15228947433__agent-autopilot-bak",
    "severity": "Medium",
    "title": "skills__15228947433__agent-autopilot-bak 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\example-setup.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15334615152__cym-zentao",
    "severity": "High",
    "title": "skills__15334615152__cym-zentao 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 2，中风险 0，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15334615152__yoyoalphax-zentao1",
    "severity": "Medium",
    "title": "skills__15334615152__yoyoalphax-zentao1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\zentao_rest_client.py；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15349185792__ui-ux-pro-max-0-1-0",
    "severity": "Medium",
    "title": "skills__15349185792__ui-ux-pro-max-0-1-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\upstream-README.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__156554395__amoeba-management-analysis",
    "severity": "Low",
    "title": "skills__156554395__amoeba-management-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__156554395__bigmodel-image-video",
    "severity": "High",
    "title": "skills__156554395__bigmodel-image-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\image_video.py；高风险 2，中风险 0，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__156554395__doubao-image-video",
    "severity": "Medium",
    "title": "skills__156554395__doubao-image-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\doubao_media.py；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__156554395__lsp-novel-writer",
    "severity": "Low",
    "title": "skills__156554395__lsp-novel-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__156554395__tx-cos",
    "severity": "Medium",
    "title": "skills__156554395__tx-cos 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\lib.js；高风险 0，中风险 2，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__156554395__zhipu-free-image-video",
    "severity": "Medium",
    "title": "skills__156554395__zhipu-free-image-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\lib.js；高风险 0，中风险 1，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1580021414-afk__cognitive-agent",
    "severity": "Low",
    "title": "skills__1580021414-afk__cognitive-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1580021414-afk__memory-networks",
    "severity": "Low",
    "title": "skills__1580021414-afk__memory-networks 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1580021414-afk__ntm-memory-system",
    "severity": "Low",
    "title": "skills__1580021414-afk__ntm-memory-system 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1580021414-afk__transformer-core",
    "severity": "Low",
    "title": "skills__1580021414-afk__transformer-core 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1580021414-afk__xiaoqian-systems-thinking",
    "severity": "Low",
    "title": "skills__1580021414-afk__xiaoqian-systems-thinking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15814059255__kdniao-skill",
    "severity": "Medium",
    "title": "skills__15814059255__kdniao-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15814059255__kdniaoapi-skill",
    "severity": "Medium",
    "title": "skills__15814059255__kdniaoapi-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15878033657__sinopec-oil-price",
    "severity": "Medium",
    "title": "skills__15878033657__sinopec-oil-price 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15910701838__axure-prototype-generator",
    "severity": "Low",
    "title": "skills__15910701838__axure-prototype-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15910701838__jarvis-stock-monitor",
    "severity": "Medium",
    "title": "skills__15910701838__jarvis-stock-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15910701838__jarvis-stock-price",
    "severity": "Low",
    "title": "skills__15910701838__jarvis-stock-price 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15910701838__simple-tech-analyzer",
    "severity": "Low",
    "title": "skills__15910701838__simple-tech-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15914355527__baidu-search-v2",
    "severity": "Medium",
    "title": "skills__15914355527__baidu-search-v2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__15914355527__exa-web-search-v2",
    "severity": "Low",
    "title": "skills__15914355527__exa-web-search-v2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\examples.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15914355527__liang-tavily-search-v2",
    "severity": "High",
    "title": "skills__15914355527__liang-tavily-search-v2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.mjs；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__15914355527__nano-pdf-v2",
    "severity": "Low",
    "title": "skills__15914355527__nano-pdf-v2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__15914355527__ocr-local-v2",
    "severity": "Medium",
    "title": "skills__15914355527__ocr-local-v2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: PUBLISH.md；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__164149043__github-tools",
    "severity": "Low",
    "title": "skills__164149043__github-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__164149043__mcporter-cli",
    "severity": "Low",
    "title": "skills__164149043__mcporter-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__164149043__obsidian-notes",
    "severity": "Low",
    "title": "skills__164149043__obsidian-notes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__164149043__summarize-cli",
    "severity": "Low",
    "title": "skills__164149043__summarize-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__164149043__tmux-remote",
    "severity": "Low",
    "title": "skills__164149043__tmux-remote 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\wait-for-text.sh；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__164149043__weather-tools",
    "severity": "Low",
    "title": "skills__164149043__weather-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1688aiinfra__1688-88syt",
    "severity": "High",
    "title": "skills__1688aiinfra__1688-88syt 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\capabilities\\configure\\service.py；高风险 1，中风险 2，低风险 58",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1688aiinfra__1688-distribution-user-guide",
    "severity": "Low",
    "title": "skills__1688aiinfra__1688-distribution-user-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1688aiinfra__1688-product-find",
    "severity": "High",
    "title": "skills__1688aiinfra__1688-product-find 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\capabilities\\configure\\service.py；高风险 1，中风险 7，低风险 20",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1688aiinfra__1688-product-search",
    "severity": "Medium",
    "title": "skills__1688aiinfra__1688-product-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\smart_recommend.py；高风险 0，中风险 8，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__1688-product-to-ozon",
    "severity": "High",
    "title": "skills__1688aiinfra__1688-product-to-ozon 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\queryOzonProperties.py；高风险 2，中风险 6，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1688aiinfra__1688-ranking",
    "severity": "Medium",
    "title": "skills__1688aiinfra__1688-ranking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\ranking.py；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__alphaclaw",
    "severity": "Medium",
    "title": "skills__1688aiinfra__alphaclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__alphashop-image",
    "severity": "Medium",
    "title": "skills__1688aiinfra__alphashop-image 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\alphashop_image.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__alphashop-sel-newproduct",
    "severity": "Medium",
    "title": "skills__1688aiinfra__alphashop-sel-newproduct 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\selection.py；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__alphashop-sel-product-search",
    "severity": "High",
    "title": "skills__1688aiinfra__alphashop-sel-product-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.py；高风险 1，中风险 1，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1688aiinfra__alphashop-text",
    "severity": "Medium",
    "title": "skills__1688aiinfra__alphashop-text 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\alphashop_text.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__chuyao-aa",
    "severity": "Low",
    "title": "skills__1688aiinfra__chuyao-aa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1688aiinfra__inquiry-1688",
    "severity": "Medium",
    "title": "skills__1688aiinfra__inquiry-1688 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\inquiry.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1688aiinfra__newton-quotation-pdf-extraction",
    "severity": "Low",
    "title": "skills__1688aiinfra__newton-quotation-pdf-extraction 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1688aiinfra__ozon-product-selection",
    "severity": "Medium",
    "title": "skills__1688aiinfra__ozon-product-selection 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search_products.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__16miku__auto-remotion",
    "severity": "Medium",
    "title": "skills__16miku__auto-remotion 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__16miku__bing-keyword-image-downloader",
    "severity": "Medium",
    "title": "skills__16miku__bing-keyword-image-downloader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tests\\test_bing_image_downloader.py；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__16miku__brightdata-research",
    "severity": "Medium",
    "title": "skills__16miku__brightdata-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\known-failures-and-fallbacks.md；高风险 0，中风险 8，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__16miku__image-downloader",
    "severity": "High",
    "title": "skills__16miku__image-downloader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 7，低风险 15",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__16miku__mapping-skill",
    "severity": "High",
    "title": "skills__16miku__mapping-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\serper_search.py；高风险 2，中风险 10，低风险 17",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__16miku__wechat-auto-publishing",
    "severity": "High",
    "title": "skills__16miku__wechat-auto-publishing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: templates\\publish.mjs；高风险 4，中风险 3，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__176wer__uw32w3kdfsdfe",
    "severity": "Medium",
    "title": "skills__176wer__uw32w3kdfsdfe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\mcp_client.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__17854566382__tts-1",
    "severity": "High",
    "title": "skills__17854566382__tts-1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: DISTRIBUTION.md；高风险 1，中风险 4，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1787812757__article-link-skill",
    "severity": "High",
    "title": "skills__1787812757__article-link-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\article_link.py；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1787812757__newspaper-download-skill",
    "severity": "High",
    "title": "skills__1787812757__newspaper-download-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get_data.py；高风险 1，中风险 4，低风险 1",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__17oko__ai-news-brief",
    "severity": "Medium",
    "title": "skills__17oko__ai-news-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\check_deps.py；高风险 0，中风险 7，低风险 21",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__17oko__experience-summary-sys",
    "severity": "Low",
    "title": "skills__17oko__experience-summary-sys 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__17oko__news-brief-skill",
    "severity": "Medium",
    "title": "skills__17oko__news-brief-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\utils.py；高风险 0，中风险 3，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__17oko__tech-brief",
    "severity": "Medium",
    "title": "skills__17oko__tech-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\fetch_trends.py；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-arrhythmia-early-warning-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-arrhythmia-early-warning-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-basic-object-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-basic-object-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-bird-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-bird-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-cat-face-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-cat-face-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 5，低风险 26",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-child-dangerous-behavior-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-child-dangerous-behavior-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-child-emotion-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-child-emotion-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-contactless-health-risk-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-contactless-health-risk-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-contactless-vital-signs-monitoring-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-contactless-vital-signs-monitoring-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-custom-timelapse-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-custom-timelapse-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-elderly-bed-exit-wandering-monitoring-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-elderly-bed-exit-wandering-monitoring-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-elderly-fall-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-elderly-fall-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-electric-vehicle-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-electric-vehicle-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 25",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-fall-detection-image-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-fall-detection-image-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-fall-detection-video-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-fall-detection-video-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-familiar-person-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-familiar-person-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-fire-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-fire-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-fire-smoke-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-fire-smoke-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-focus-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-focus-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 26",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-human-emotion-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-human-emotion-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-infant-suffocation-warning-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-infant-suffocation-warning-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-outdoor-monitoring-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-outdoor-monitoring-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-package-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-package-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-behavior-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-behavior-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-body-health-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-body-health-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-breed-individual-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-breed-individual-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 5，低风险 26",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-calming-trigger-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-calming-trigger-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-pet-health-monitoring-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-pet-health-monitoring-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-respiratory-symptom-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-respiratory-symptom-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 25",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-staff-absence-detection-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-staff-absence-detection-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 25",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-stranger-approach-warning-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-stranger-approach-warning-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-stranger-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-stranger-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 5，低风险 26",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-stroke-risk-screening-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-stroke-risk-screening-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-tcm-constitution-recognition-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-tcm-constitution-recognition-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-virtual-fence-intrusion-warning-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-virtual-fence-intrusion-warning-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-visual-qa-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-visual-qa-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18072937735__smyx-visual-summary-analysis",
    "severity": "Medium",
    "title": "skills__18072937735__smyx-visual-summary-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\smyx_common\\scripts\\skill.py；高风险 0，中风险 4，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1808182171__ex-example-liuzhimin",
    "severity": "Low",
    "title": "skills__1808182171__ex-example-liuzhimin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1808182171__ex-skill",
    "severity": "Medium",
    "title": "skills__1808182171__ex-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_EN.md；高风险 0，中风险 3，低风险 33",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1808182171__ex-skill__exes__chu_ge",
    "severity": "Low",
    "title": "skills__1808182171__ex-skill__exes__chu_ge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: versions\\v2.0.json；高风险 0，中风险 0，低风险 18",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1808182171__ex-skill__exes__example_liuzhimin",
    "severity": "Low",
    "title": "skills__1808182171__ex-skill__exes__example_liuzhimin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: persona.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18153__star-office",
    "severity": "High",
    "title": "skills__18153__star-office 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: frontend\\vendor\\phaser-3.80.1.min.js；高风险 4，中风险 17，低风险 45",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__18262202398-star__jiangfeng",
    "severity": "Medium",
    "title": "skills__18262202398-star__jiangfeng 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1829162846lw__thai-chinese-gov-efficiency",
    "severity": "Low",
    "title": "skills__1829162846lw__thai-chinese-gov-efficiency 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18621063286__bili-rs",
    "severity": "Medium",
    "title": "skills__18621063286__bili-rs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\commands.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18678837882__cognitive-tools",
    "severity": "Low",
    "title": "skills__18678837882__cognitive-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 14",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__188080501__jqopenclaw-node-invoker",
    "severity": "Medium",
    "title": "skills__188080501__jqopenclaw-node-invoker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\command-spec.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18816132863__energy-system",
    "severity": "Low",
    "title": "skills__18816132863__energy-system 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\energy.py；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18816132863__xiaoyi-claw-omega-final",
    "severity": "Low",
    "title": "skills__18816132863__xiaoyi-claw-omega-final 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 11",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18816478335q-pixel__eccsystem",
    "severity": "Low",
    "title": "skills__18816478335q-pixel__eccsystem 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18874771327__knowledge-qa",
    "severity": "Medium",
    "title": "skills__18874771327__knowledge-qa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 6，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18879952146__love-chat",
    "severity": "Low",
    "title": "skills__18879952146__love-chat 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__18923236683__xhs-auto-content-by-hot",
    "severity": "Medium",
    "title": "skills__18923236683__xhs-auto-content-by-hot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18940111404__session-archive",
    "severity": "Medium",
    "title": "skills__18940111404__session-archive 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__18940111404__zhujian-session-archive",
    "severity": "Medium",
    "title": "skills__18940111404__zhujian-session-archive 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1944876825__outline-kb",
    "severity": "Medium",
    "title": "skills__1944876825__outline-kb 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__1688-sourcing-agent",
    "severity": "Low",
    "title": "skills__1970168137__1688-sourcing-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__ad-copy",
    "severity": "Low",
    "title": "skills__1970168137__ad-copy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__aftersale-sop",
    "severity": "Low",
    "title": "skills__1970168137__aftersale-sop 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__bcp-plan",
    "severity": "Low",
    "title": "skills__1970168137__bcp-plan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__biz-hospitality",
    "severity": "Low",
    "title": "skills__1970168137__biz-hospitality 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__brand-narrative",
    "severity": "Low",
    "title": "skills__1970168137__brand-narrative 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-apparel-and-accessories-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-apparel-and-accessories-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-beauty-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-beauty-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-consumer-electronics-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-consumer-electronics-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-electronic-components-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-electronic-components-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-export-data-hunter",
    "severity": "Medium",
    "title": "skills__1970168137__china-export-data-hunter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__china-furniture-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-furniture-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-home-appliances-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-home-appliances-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-industrial-machinery-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-industrial-machinery-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-lighting-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-lighting-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-luggage-sourcing",
    "severity": "Medium",
    "title": "skills__1970168137__china-luggage-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__china-relocation-guide",
    "severity": "Low",
    "title": "skills__1970168137__china-relocation-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-renewable-energy-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-renewable-energy-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-shoes-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-shoes-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-sportswear-outdoor-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-sportswear-outdoor-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-tools-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-tools-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-toys-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-toys-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-travel-guide",
    "severity": "Low",
    "title": "skills__1970168137__china-travel-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data\\phrases.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-vehicle-accessories-sourcing",
    "severity": "Low",
    "title": "skills__1970168137__china-vehicle-accessories-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__china-vehicle-parts-sourcing",
    "severity": "Medium",
    "title": "skills__1970168137__china-vehicle-parts-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__china-vehicle-sourcing",
    "severity": "Medium",
    "title": "skills__1970168137__china-vehicle-sourcing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data.json；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__china-visa-guide",
    "severity": "Medium",
    "title": "skills__1970168137__china-visa-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1970168137__chinese-medicine",
    "severity": "Low",
    "title": "skills__1970168137__chinese-medicine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__chinese-medicine-cn",
    "severity": "Low",
    "title": "skills__1970168137__chinese-medicine-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__hr-policy-generator",
    "severity": "Low",
    "title": "skills__1970168137__hr-policy-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__hr-policy-generator-cn",
    "severity": "Low",
    "title": "skills__1970168137__hr-policy-generator-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__instructional-design-cn",
    "severity": "Low",
    "title": "skills__1970168137__instructional-design-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__made-in-china",
    "severity": "Low",
    "title": "skills__1970168137__made-in-china 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__marketing-analytics",
    "severity": "Low",
    "title": "skills__1970168137__marketing-analytics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__marketing-copywriting",
    "severity": "Low",
    "title": "skills__1970168137__marketing-copywriting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__performance-review-cn",
    "severity": "Low",
    "title": "skills__1970168137__performance-review-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__promotion-planning",
    "severity": "Low",
    "title": "skills__1970168137__promotion-planning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__sales-dialogue",
    "severity": "Low",
    "title": "skills__1970168137__sales-dialogue 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1970168137__tiktok-b2b",
    "severity": "Medium",
    "title": "skills__1970168137__tiktok-b2b 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1987566643__media-compress",
    "severity": "High",
    "title": "skills__1987566643__media-compress 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\compress_video.py；高风险 2，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1987566643__openclaw-safe-change-flow",
    "severity": "Medium",
    "title": "skills__1987566643__openclaw-safe-change-flow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1989tianlong__ytlong-daily-report",
    "severity": "Low",
    "title": "skills__1989tianlong__ytlong-daily-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__199-bio__clinstagram",
    "severity": "High",
    "title": "skills__199-bio__clinstagram 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: docs\\plans\\2026-03-06-clinstagram-design.md；高风险 2，中风险 3，低风险 43",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1992huanghai__data-analysis-partner",
    "severity": "Medium",
    "title": "skills__1992huanghai__data-analysis-partner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 0，中风险 4，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__cloudflare-manager",
    "severity": "Medium",
    "title": "skills__1999azzar__cloudflare-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\cf_manager.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__file-organizer-skill",
    "severity": "Low",
    "title": "skills__1999azzar__file-organizer-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__guardian-wall-azzar",
    "severity": "Low",
    "title": "skills__1999azzar__guardian-wall-azzar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\patterns.md；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__human-writing-azzar",
    "severity": "Low",
    "title": "skills__1999azzar__human-writing-azzar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__mema",
    "severity": "Medium",
    "title": "skills__1999azzar__mema 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__mema-vault",
    "severity": "Medium",
    "title": "skills__1999azzar__mema-vault 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__memory-cache",
    "severity": "Medium",
    "title": "skills__1999azzar__memory-cache 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\cache_manager.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__mermaid-architect",
    "severity": "Low",
    "title": "skills__1999azzar__mermaid-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__newman",
    "severity": "High",
    "title": "skills__1999azzar__newman 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\advanced-patterns.md；高风险 3，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1999azzar__node-red-manager",
    "severity": "High",
    "title": "skills__1999azzar__node-red-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1999azzar__pihole-ctl",
    "severity": "Medium",
    "title": "skills__1999azzar__pihole-ctl 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__search-cluster",
    "severity": "Medium",
    "title": "skills__1999azzar__search-cluster 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: search-cluster.py；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__security-guardian",
    "severity": "Medium",
    "title": "skills__1999azzar__security-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scan_container.sh；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__stability-ai",
    "severity": "Medium",
    "title": "skills__1999azzar__stability-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\core\\generate.py；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__system-architect",
    "severity": "Low",
    "title": "skills__1999azzar__system-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__time-checker",
    "severity": "Medium",
    "title": "skills__1999azzar__time-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\check_time.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1999azzar__ui-designer-skill",
    "severity": "Low",
    "title": "skills__1999azzar__ui-designer-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\shopify-polaris.md；高风险 0，中风险 0，低风险 29",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1999azzar__yt-dlp",
    "severity": "High",
    "title": "skills__1999azzar__yt-dlp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\usage.md；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__19x19btr__trending-news-aggregator",
    "severity": "Medium",
    "title": "skills__19x19btr__trending-news-aggregator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 2，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1an0rmus__clickhouse-github-forensics",
    "severity": "Low",
    "title": "skills__1an0rmus__clickhouse-github-forensics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1asdwz__ai-dating",
    "severity": "Medium",
    "title": "skills__1asdwz__ai-dating 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1bcmax__clawrouter",
    "severity": "Low",
    "title": "skills__1bcmax__clawrouter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1coos__1coos-calendar-cn",
    "severity": "Medium",
    "title": "skills__1coos__1coos-calendar-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\main.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1coos__1coos-markdown-converter",
    "severity": "High",
    "title": "skills__1coos__1coos-markdown-converter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1coos__1coos-quickie",
    "severity": "Medium",
    "title": "skills__1coos__1coos-quickie 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1eif__get-today-connections",
    "severity": "Low",
    "title": "skills__1eif__get-today-connections 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1gco__google-seo-audit-assistant",
    "severity": "Low",
    "title": "skills__1gco__google-seo-audit-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__aaas-roi-calculator",
    "severity": "Medium",
    "title": "skills__1kalin__aaas-roi-calculator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-accessibility-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-accessibility-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-accounts-payable",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-accounts-payable 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-accounts-receivable",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-accounts-receivable 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-ad-ops",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-ad-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-agent-engineering",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-agent-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-agent-manager",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-agent-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-agent-memory",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-agent-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-agent-observability",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-agent-observability 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-agent-runbook",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-agent-runbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-agency-blueprint",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-ai-agency-blueprint 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-coding-toolkit",
    "severity": "High",
    "title": "skills__1kalin__afrexai-ai-coding-toolkit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-governance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-ai-governance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-readiness",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-ai-readiness 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-safety-audit",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-ai-safety-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-ai-spend-audit",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-ai-spend-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-annual-report",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-annual-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-api-architect",
    "severity": "High",
    "title": "skills__1kalin__afrexai-api-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-api-docs",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-api-docs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-api-monetization",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-api-monetization 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-auto-repair",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-auto-repair 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-automation-strategy",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-automation-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-benefits-admin",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-benefits-admin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-board-meeting",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-board-meeting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-board-reporting",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-board-reporting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-brand-strategy",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-brand-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-budget-planner",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-budget-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-budget-tracker",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-budget-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-building-permits",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-building-permits 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-business-automation",
    "severity": "High",
    "title": "skills__1kalin__afrexai-business-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-business-continuity",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-business-continuity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-cac-optimizer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-cac-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-capacity-planner",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-capacity-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-career-accelerator",
    "severity": "High",
    "title": "skills__1kalin__afrexai-career-accelerator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-cash-flow-forecast",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-cash-flow-forecast 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-change-management",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-change-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-channel-partner",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-channel-partner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-childcare-center",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-childcare-center 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-childcare-compliance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-childcare-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-churn-analyzer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-churn-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-claude-code-production",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-claude-code-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-cleaning-business",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-cleaning-business 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-client-success",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-client-success 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-cloud-cost-audit",
    "severity": "High",
    "title": "skills__1kalin__afrexai-cloud-cost-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-code-reviewer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-code-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-community-growth-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-community-growth-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-compensation-planner",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-compensation-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-competitive-intel",
    "severity": "High",
    "title": "skills__1kalin__afrexai-competitive-intel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-competitor-monitor",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-competitor-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-compliance-audit",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-compliance-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-compliance-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-compliance-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-construction-estimator",
    "severity": "High",
    "title": "skills__1kalin__afrexai-construction-estimator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-contract-analyzer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-contract-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-contract-review",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-contract-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-conversion-copywriting",
    "severity": "High",
    "title": "skills__1kalin__afrexai-conversion-copywriting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-copywriting-mastery",
    "severity": "High",
    "title": "skills__1kalin__afrexai-copywriting-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-crisis-comms",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-crisis-comms 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-crisis-management",
    "severity": "High",
    "title": "skills__1kalin__afrexai-crisis-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-crm-updater",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-crm-updater 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-customer-journey",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-customer-journey 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-customer-success",
    "severity": "High",
    "title": "skills__1kalin__afrexai-customer-success 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-customer-support",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-customer-support 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-cybersecurity",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-cybersecurity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-cybersecurity-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-cybersecurity-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-analyst",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-data-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-data-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-governance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-data-governance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-migration",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-data-migration 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-privacy",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-data-privacy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-data-room",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-data-room 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-database-engineer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-database-engineer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-davis-bacon",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-davis-bacon 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-deal-desk",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-deal-desk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-debt-collection",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-debt-collection 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-decision-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-decision-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-demand-forecasting",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-demand-forecasting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-dental-practice",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-dental-practice 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-devrel-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-devrel-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-disaster-recovery",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-disaster-recovery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-django-production",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-django-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-email-crafter",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-email-crafter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-email-marketing",
    "severity": "High",
    "title": "skills__1kalin__afrexai-email-marketing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-email-marketing-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-email-marketing-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-email-to-calendar",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-email-to-calendar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-email-triager",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-email-triager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-employee-handbook",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-employee-handbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-employee-onboarding",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-employee-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-employee-retention",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-employee-retention 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-energy-audit",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-energy-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-engineering-manager",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-engineering-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-epa-compliance",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-epa-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-esg-reporting",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-esg-reporting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-event-management",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-event-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-event-planner",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-event-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-executive-coaching",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-executive-coaching 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-exit-strategy",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-exit-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-export-compliance",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-export-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-fastapi-production",
    "severity": "High",
    "title": "skills__1kalin__afrexai-fastapi-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-financial-due-diligence",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-financial-due-diligence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-fitness-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-fitness-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-fleet-management",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-fleet-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-food-safety",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-food-safety 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-food-truck",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-food-truck 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-founder-os",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-founder-os 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-fpa-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-fpa-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-franchise-ops",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-franchise-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-funeral-home",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-funeral-home 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-git-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-git-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-go-production",
    "severity": "High",
    "title": "skills__1kalin__afrexai-go-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-grant-writer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-grant-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-growth-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-growth-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-gtm-strategy",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-gtm-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-gym-fitness",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-gym-fitness 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-hipaa-compliance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-hipaa-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-hiring-scorecard",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-hiring-scorecard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-home-inspection",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-home-inspection 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-humanizer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-humanizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-hvac",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-hvac 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-incident-response",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-incident-response 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-insurance-automation",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-insurance-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-insurance-claims",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-insurance-claims 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-interview-architect",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-interview-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-inventory-supply-chain",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-inventory-supply-chain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-investment-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-investment-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-investor-relations",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-investor-relations 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-investor-update",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-investor-update 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-invoice-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-invoice-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-invoice-gen",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-invoice-gen 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-knowledge-management",
    "severity": "High",
    "title": "skills__1kalin__afrexai-knowledge-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-kpi-tracker",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-kpi-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-landscaping",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-landscaping 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-lead-hunter",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-lead-hunter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-lead-scorer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-lead-scorer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-lease-analyzer",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-lease-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-legacy-modernization",
    "severity": "High",
    "title": "skills__1kalin__afrexai-legacy-modernization 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-license-manager",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-license-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-logistics-optimizer",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-logistics-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-ma-playbook",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-ma-playbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-margin-analysis",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-margin-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-market-sizing",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-market-sizing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-mcp-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-mcp-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-medical-billing",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-medical-billing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 3，低风险 1",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-meeting-mastery",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-meeting-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-meeting-prep",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-meeting-prep 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-ml-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-ml-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-moving-company",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-moving-company 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-n8n-mastery",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-n8n-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-negotiation-mastery",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-negotiation-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-nextjs-production",
    "severity": "High",
    "title": "skills__1kalin__afrexai-nextjs-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-observability-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-observability-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-offboarding",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-offboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-okr-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-okr-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-onboarding",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-openclaw-mastery",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-openclaw-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-partnership-agreement",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-partnership-agreement 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-partnership-revenue",
    "severity": "High",
    "title": "skills__1kalin__afrexai-partnership-revenue 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-payroll-audit",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-payroll-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-performance-engineering",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-performance-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-performance-review",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-performance-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-personal-finance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-personal-finance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-pest-control",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-pest-control 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-pharmacy-compliance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-pharmacy-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-photography-mastery",
    "severity": "High",
    "title": "skills__1kalin__afrexai-photography-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-pitch-deck-reviewer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-pitch-deck-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-plumbing-business",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-plumbing-business 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-policy-writer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-policy-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-portfolio-risk",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-portfolio-risk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-post-mortem",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-post-mortem 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-postmortem",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-postmortem 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-prd-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-prd-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-presentation-mastery",
    "severity": "High",
    "title": "skills__1kalin__afrexai-presentation-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-pricing-optimizer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-pricing-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-pricing-strategy",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-pricing-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-procurement",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-procurement 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-procurement-ops",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-procurement-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-product-launch",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-product-launch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-product-manager",
    "severity": "High",
    "title": "skills__1kalin__afrexai-product-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-productivity-system",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-productivity-system 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-profit-margin",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-profit-margin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-project-manager",
    "severity": "High",
    "title": "skills__1kalin__afrexai-project-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-prompt-engineering",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-prompt-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-prompt-mastery",
    "severity": "High",
    "title": "skills__1kalin__afrexai-prompt-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-proposal-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-proposal-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-proposal-gen",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-proposal-gen 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-prospect-researcher",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-prospect-researcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-qa-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-qa-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-qa-test-plan",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-qa-test-plan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-qa-testing-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-qa-testing-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-rag-engineering",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-rag-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-rate-strategy",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-rate-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-react-production",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-react-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-real-estate-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-real-estate-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-recruiting-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-recruiting-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-regulatory-compliance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-regulatory-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-release-notes",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-release-notes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-renewal-management",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-renewal-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-restaurant-ops",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-restaurant-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-revenue-forecasting",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-revenue-forecasting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-revops-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-revops-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-rfp-responder",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-rfp-responder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-risk-assessment",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-risk-assessment 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-risk-management",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-risk-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-roofing-contractor",
    "severity": "High",
    "title": "skills__1kalin__afrexai-roofing-contractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-saas-metrics",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-saas-metrics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-sales-compensation",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-sales-compensation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-sales-funnel-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-sales-funnel-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-sales-playbook",
    "severity": "High",
    "title": "skills__1kalin__afrexai-sales-playbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-sales-roi",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-sales-roi 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-salon-spa",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-salon-spa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-self-hosting-mastery",
    "severity": "High",
    "title": "skills__1kalin__afrexai-self-hosting-mastery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-seo-content-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-seo-content-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-seo-writer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-seo-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-sla-manager",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-sla-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-soc2-compliance",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-soc2-compliance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-social-media-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-social-media-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-social-repurposer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-social-repurposer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-solar-installer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-solar-installer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-sop-generator",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-sop-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-spend-intelligence",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-spend-intelligence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-spreadsheet-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-spreadsheet-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-spreadsheet-master",
    "severity": "High",
    "title": "skills__1kalin__afrexai-spreadsheet-master 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-sprint-planner",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-sprint-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-sprint-retro",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-sprint-retro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-sre-platform",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-sre-platform 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-staffing-agency",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-staffing-agency 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-stakeholder-management",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-stakeholder-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-stakeholder-report",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-stakeholder-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-startup-fundraising",
    "severity": "High",
    "title": "skills__1kalin__afrexai-startup-fundraising 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-startup-metrics-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-startup-metrics-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-strategic-thinking",
    "severity": "High",
    "title": "skills__1kalin__afrexai-strategic-thinking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-stripe-production",
    "severity": "High",
    "title": "skills__1kalin__afrexai-stripe-production 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-supply-chain",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-supply-chain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-support-operations",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-support-operations 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-swot-analyzer",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-swot-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-tax-planning",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-tax-planning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-tech-debt-audit",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-tech-debt-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-technical-docs",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-technical-docs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-technical-seo",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-technical-seo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-testimonial-collector",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-testimonial-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-tokenomics",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-tokenomics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-training-program",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-training-program 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-unit-economics",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-unit-economics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-ux-research-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-ux-research-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-vendor-eval",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-vendor-eval 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-vendor-negotiation",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-vendor-negotiation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-vendor-risk",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-vendor-risk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-veterinary-practice",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-veterinary-practice 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-vibe-coding",
    "severity": "High",
    "title": "skills__1kalin__afrexai-vibe-coding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-voice-ai-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-voice-ai-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-warehouse-ops",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-warehouse-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-warranty-management",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-warranty-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-web-performance-engine",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-web-performance-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-web-scraping-engine",
    "severity": "High",
    "title": "skills__1kalin__afrexai-web-scraping-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-web3-engineering",
    "severity": "High",
    "title": "skills__1kalin__afrexai-web3-engineering 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1kalin__afrexai-whistleblower",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-whistleblower 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__afrexai-workers-comp",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-workers-comp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-workforce-planning",
    "severity": "Medium",
    "title": "skills__1kalin__afrexai-workforce-planning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__afrexai-workplace-safety",
    "severity": "Low",
    "title": "skills__1kalin__afrexai-workplace-safety 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__ai-invoice-generator",
    "severity": "Low",
    "title": "skills__1kalin__ai-invoice-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__ai-meeting-prep",
    "severity": "Low",
    "title": "skills__1kalin__ai-meeting-prep 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__ai-researcher",
    "severity": "Low",
    "title": "skills__1kalin__ai-researcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__ai-seo-writer",
    "severity": "Low",
    "title": "skills__1kalin__ai-seo-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__business-process-audit",
    "severity": "Low",
    "title": "skills__1kalin__business-process-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__client-onboarding",
    "severity": "Medium",
    "title": "skills__1kalin__client-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__cold-email-writer",
    "severity": "Low",
    "title": "skills__1kalin__cold-email-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__competitor-analyst",
    "severity": "Low",
    "title": "skills__1kalin__competitor-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__compliance-readiness",
    "severity": "Low",
    "title": "skills__1kalin__compliance-readiness 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__content-repurposing-engine",
    "severity": "Low",
    "title": "skills__1kalin__content-repurposing-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__contract-reviewer",
    "severity": "Medium",
    "title": "skills__1kalin__contract-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__crm-manager",
    "severity": "Low",
    "title": "skills__1kalin__crm-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__customer-onboarding",
    "severity": "Low",
    "title": "skills__1kalin__customer-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__financial-tracker",
    "severity": "Low",
    "title": "skills__1kalin__financial-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__icp-builder",
    "severity": "Low",
    "title": "skills__1kalin__icp-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__lead-scorer",
    "severity": "Low",
    "title": "skills__1kalin__lead-scorer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__linkedin-writer",
    "severity": "Low",
    "title": "skills__1kalin__linkedin-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__market-research-agent",
    "severity": "Low",
    "title": "skills__1kalin__market-research-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__morning-daily-briefing",
    "severity": "Low",
    "title": "skills__1kalin__morning-daily-briefing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__objection-handler",
    "severity": "Medium",
    "title": "skills__1kalin__objection-handler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__proposal-writer",
    "severity": "Low",
    "title": "skills__1kalin__proposal-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__sales-pipeline-tracker",
    "severity": "Low",
    "title": "skills__1kalin__sales-pipeline-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__sla-monitor",
    "severity": "Low",
    "title": "skills__1kalin__sla-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__social-media-scheduler",
    "severity": "Low",
    "title": "skills__1kalin__social-media-scheduler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1kalin__vendor-risk-assessment",
    "severity": "Medium",
    "title": "skills__1kalin__vendor-risk-assessment 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1kalin__weekly-report-generator",
    "severity": "Low",
    "title": "skills__1kalin__weekly-report-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills",
    "severity": "Medium",
    "title": "skills__1knownothing__llm-wiki-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.zh.md；高风险 0，中风险 2，低风险 24",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills__skills__wiki-ingest",
    "severity": "Low",
    "title": "skills__1knownothing__llm-wiki-skills__skills__wiki-ingest 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills__skills__wiki-init",
    "severity": "Low",
    "title": "skills__1knownothing__llm-wiki-skills__skills__wiki-init 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills__skills__wiki-lint",
    "severity": "Low",
    "title": "skills__1knownothing__llm-wiki-skills__skills__wiki-lint 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills__skills__wiki-maintain",
    "severity": "Low",
    "title": "skills__1knownothing__llm-wiki-skills__skills__wiki-maintain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1knownothing__llm-wiki-skills__skills__wiki-query",
    "severity": "Low",
    "title": "skills__1knownothing__llm-wiki-skills__skills__wiki-query 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__1lystore__1ly-payments",
    "severity": "Medium",
    "title": "skills__1lystore__1ly-payments 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1morebuild__byr-cli",
    "severity": "Medium",
    "title": "skills__1morebuild__byr-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1ncludesteven__cloudq",
    "severity": "High",
    "title": "skills__1ncludesteven__cloudq 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_sse_api.py；高风险 3，中风险 4，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1ncludesteven__tsa",
    "severity": "High",
    "title": "skills__1ncludesteven__tsa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_api.py；高风险 3，中风险 5，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1ncludesteven__tsa-risk",
    "severity": "High",
    "title": "skills__1ncludesteven__tsa-risk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_api.py；高风险 3，中风险 5，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1oid__txt-to-epub",
    "severity": "Medium",
    "title": "skills__1oid__txt-to-epub 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.zh.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1shadow1__finance-data",
    "severity": "Medium",
    "title": "skills__1shadow1__finance-data 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\yfinance_query.py；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1u1s4__gmail-label-routing",
    "severity": "Medium",
    "title": "skills__1u1s4__gmail-label-routing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\gws_gmail_label_workflow.py；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1va7__skill-refiner",
    "severity": "High",
    "title": "skills__1va7__skill-refiner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.zh.md；高风险 2，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1vecera__zai-usage",
    "severity": "High",
    "title": "skills__1vecera__zai-usage 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\usage-summary.sh；高风险 2，中风险 4，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1w2w3y__amg-check-azure-spend",
    "severity": "Medium",
    "title": "skills__1w2w3y__amg-check-azure-spend 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__1w2w3y__amg-check-cosmosdb-mongo-ru",
    "severity": "High",
    "title": "skills__1w2w3y__amg-check-cosmosdb-mongo-ru 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference\\error-handling.md；高风险 1，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1w2w3y__amg-check-key-vault",
    "severity": "High",
    "title": "skills__1w2w3y__amg-check-key-vault 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference\\error-handling.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1w2w3y__amg-check-pg-flex",
    "severity": "High",
    "title": "skills__1w2w3y__amg-check-pg-flex 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference\\error-handling.md；高风险 1，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1w2w3y__amg-check-storage-account",
    "severity": "High",
    "title": "skills__1w2w3y__amg-check-storage-account 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference\\error-handling.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__1xmint__claw-net",
    "severity": "Medium",
    "title": "skills__1xmint__claw-net 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__20181112523__gitlab-mr-review-pipeline",
    "severity": "Medium",
    "title": "skills__20181112523__gitlab-mr-review-pipeline 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__20181112523__md-to-pdf-advanced",
    "severity": "Medium",
    "title": "skills__20181112523__md-to-pdf-advanced 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\md_to_pdf.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2019-02-18__claw-fight",
    "severity": "Medium",
    "title": "skills__2019-02-18__claw-fight 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2019-02-18__seed-drop",
    "severity": "Medium",
    "title": "skills__2019-02-18__seed-drop 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: seeddrop-v3.0.1\\scripts\\auth-bridge.ts；高风险 0，中风险 20，低风险 52",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2019-02-18__seed-drop__seeddrop-v3.0.1",
    "severity": "Medium",
    "title": "skills__2019-02-18__seed-drop__seeddrop-v3.0.1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\auth-bridge.ts；高风险 0，中风险 9，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2019-02-18__skill-feedback-collector",
    "severity": "High",
    "title": "skills__2019-02-18__skill-feedback-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 3，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2019-02-18__social-vault",
    "severity": "Medium",
    "title": "skills__2019-02-18__social-vault 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: clawhub.json；高风险 0，中风险 4，低风险 23",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__201983290498__agent-crew",
    "severity": "High",
    "title": "skills__201983290498__agent-crew 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2023andrewyang__test20206",
    "severity": "Low",
    "title": "skills__2023andrewyang__test20206 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2023andrewyang__test20206__skill1",
    "severity": "Low",
    "title": "skills__2023andrewyang__test20206__skill1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2023andrewyang__test20206__skill2",
    "severity": "Low",
    "title": "skills__2023andrewyang__test20206__skill2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2059247714__win-bridge-control",
    "severity": "Medium",
    "title": "skills__2059247714__win-bridge-control 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__20czy__investment-tracker",
    "severity": "High",
    "title": "skills__20czy__investment-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\api-docs.md；高风险 3，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__212-mei__pansou",
    "severity": "Medium",
    "title": "skills__212-mei__pansou 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\pansou.py；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__21b-a__arch-optimization",
    "severity": "Medium",
    "title": "skills__21b-a__arch-optimization 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: core\\transport-layer.js；高风险 0，中风险 3，低风险 19",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__21f2000735__ekalavya-self-improvement",
    "severity": "Medium",
    "title": "skills__21f2000735__ekalavya-self-improvement 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__21f2000735__modern-chanakya",
    "severity": "Low",
    "title": "skills__21f2000735__modern-chanakya 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: research\\research-bibliography.md；高风险 0，中风险 0，低风险 48",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__21j3phy__opys-calendar",
    "severity": "High",
    "title": "skills__21j3phy__opys-calendar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: server\\index.ts；高风险 1，中风险 8，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2233admin__adaptive-review",
    "severity": "Medium",
    "title": "skills__2233admin__adaptive-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__api-monitor",
    "severity": "Medium",
    "title": "skills__2233admin__api-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: api_monitor.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__clawapi-manager",
    "severity": "High",
    "title": "skills__2233admin__clawapi-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: test_connectivity.sh；高风险 4，中风险 15，低风险 31",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2233admin__cli2skill",
    "severity": "High",
    "title": "skills__2233admin__cli2skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 6，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2233admin__cloudflare-mcp",
    "severity": "Low",
    "title": "skills__2233admin__cloudflare-mcp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__config-rollback",
    "severity": "Low",
    "title": "skills__2233admin__config-rollback 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__evomap-node-controller",
    "severity": "Medium",
    "title": "skills__2233admin__evomap-node-controller 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__http-retry",
    "severity": "Low",
    "title": "skills__2233admin__http-retry 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__kimi-agent-policy",
    "severity": "Low",
    "title": "skills__2233admin__kimi-agent-policy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__markdown-browser",
    "severity": "Medium",
    "title": "skills__2233admin__markdown-browser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__ontology-kg",
    "severity": "Low",
    "title": "skills__2233admin__ontology-kg 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__openclaw-skill-intelligence-ingestion",
    "severity": "Medium",
    "title": "skills__2233admin__openclaw-skill-intelligence-ingestion 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__openclaw-switch",
    "severity": "Medium",
    "title": "skills__2233admin__openclaw-switch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\openclaw-switch.sh；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2233admin__qqbot-prompt-optimizer",
    "severity": "Low",
    "title": "skills__2233admin__qqbot-prompt-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2233admin__server-maintenance",
    "severity": "Low",
    "title": "skills__2233admin__server-maintenance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2239721014-ops__instruction-web",
    "severity": "Low",
    "title": "skills__2239721014-ops__instruction-web 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2239721014-ops__research-web-publisher",
    "severity": "Low",
    "title": "skills__2239721014-ops__research-web-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2263648274__qwen-auto-register",
    "severity": "Medium",
    "title": "skills__2263648274__qwen-auto-register 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__228998098__12agent-novel",
    "severity": "Medium",
    "title": "skills__228998098__12agent-novel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\milestone-audit.md；高风险 0，中风险 9，低风险 67",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__228998098__novel-forge",
    "severity": "Medium",
    "title": "skills__228998098__novel-forge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 14",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__228998098__novel-free",
    "severity": "Medium",
    "title": "skills__228998098__novel-free 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\milestone-audit.md；高风险 0，中风险 5，低风险 54",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2320117707__tg-mysql-design",
    "severity": "Low",
    "title": "skills__2320117707__tg-mysql-design 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__23396599__report-sql",
    "severity": "Low",
    "title": "skills__23396599__report-sql 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2367961075__api-test",
    "severity": "Medium",
    "title": "skills__2367961075__api-test 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: Skill.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2389275723__feishu-calendar-scheduler",
    "severity": "Medium",
    "title": "skills__2389275723__feishu-calendar-scheduler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: install.sh；高风险 0，中风险 5，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2389275723__openclaw-security-skill",
    "severity": "Medium",
    "title": "skills__2389275723__openclaw-security-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2393970875__deepsop-human-ai-collab",
    "severity": "Medium",
    "title": "skills__2393970875__deepsop-human-ai-collab 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2393970875__deepsop-image-video-generator",
    "severity": "High",
    "title": "skills__2393970875__deepsop-image-video-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 3，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2393970875__deepsop-voice-clone",
    "severity": "High",
    "title": "skills__2393970875__deepsop-voice-clone 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\voice_clone.py；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2393970875__image-video-generator",
    "severity": "High",
    "title": "skills__2393970875__image-video-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 3，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__23wsdada__celebration-firework",
    "severity": "Medium",
    "title": "skills__23wsdada__celebration-firework 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2404589803__geo-content-guard",
    "severity": "High",
    "title": "skills__2404589803__geo-content-guard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\audit.py；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2404589803__memory-poison-auditor",
    "severity": "High",
    "title": "skills__2404589803__memory-poison-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\audit.py；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2404589803__skillguard-hardened",
    "severity": "High",
    "title": "skills__2404589803__skillguard-hardened 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: policies\\default_rules.json；高风险 4，中风险 1，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2450550235-debug__wechat-auto-send",
    "severity": "Medium",
    "title": "skills__2450550235-debug__wechat-auto-send 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: EXAMPLES.md；高风险 0，中风险 3，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__24601__agent-deep-research",
    "severity": "High",
    "title": "skills__24601__agent-deep-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 3，中风险 13，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__24601__surreal-sync",
    "severity": "Low",
    "title": "skills__24601__surreal-sync 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__24601__surrealdb",
    "severity": "High",
    "title": "skills__24601__surrealdb 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: CHANGELOG.md；高风险 7，中风险 14，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__24601__surrealdb__skills__surreal-sync",
    "severity": "Low",
    "title": "skills__24601__surrealdb__skills__surreal-sync 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__24601__surrealdb__skills__surrealfs",
    "severity": "High",
    "title": "skills__24601__surrealdb__skills__surrealfs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 1",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__24601__surrealdb__skills__surrealism",
    "severity": "Medium",
    "title": "skills__24601__surrealdb__skills__surrealism 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 1",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__24601__surrealdb__skills__surrealkit",
    "severity": "Medium",
    "title": "skills__24601__surrealdb__skills__surrealkit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 1",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__24601__surrealfs",
    "severity": "High",
    "title": "skills__24601__surrealfs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__24601__surrealism",
    "severity": "Medium",
    "title": "skills__24601__surrealism 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__24k-handsomer__webpage-reader-skill",
    "severity": "High",
    "title": "skills__24k-handsomer__webpage-reader-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: webpage_reader.py；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2513483494__1123",
    "severity": "Medium",
    "title": "skills__2513483494__1123 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\install.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2513483494__arch-sla-cloudq",
    "severity": "High",
    "title": "skills__2513483494__arch-sla-cloudq 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_api.py；高风险 5，中风险 6，低风险 18",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2513483494__architecture-governance-assessment",
    "severity": "High",
    "title": "skills__2513483494__architecture-governance-assessment 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_api.py；高风险 5，中风险 6，低风险 20",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2513483494__cloud-architecture-canvas",
    "severity": "High",
    "title": "skills__2513483494__cloud-architecture-canvas 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tcloud_api.py；高风险 5，中风险 6，低风险 20",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__258468639__backend-admin-dev-skill",
    "severity": "Low",
    "title": "skills__258468639__backend-admin-dev-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__260335325why-prog__suno-music-composer",
    "severity": "Medium",
    "title": "skills__260335325why-prog__suno-music-composer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__26048608982lp-ai__jd-resume-tailor",
    "severity": "Medium",
    "title": "skills__26048608982lp-ai__jd-resume-tailor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__26048608982lp-ai__resume-jd-match",
    "severity": "Medium",
    "title": "skills__26048608982lp-ai__resume-jd-match 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__26048608982lp-ai__wechat-file-sender",
    "severity": "High",
    "title": "skills__26048608982lp-ai__wechat-file-sender 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\send-file-to-wechat.js；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2656255594__bom-sop-check",
    "severity": "Medium",
    "title": "skills__2656255594__bom-sop-check 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: backups\\v1.12\\SKILL.md；高风险 0，中风险 4，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2656255594__bom-sop-check__backups__v1.11",
    "severity": "Medium",
    "title": "skills__2656255594__bom-sop-check__backups__v1.11 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2656255594__bom-sop-check__backups__v1.12",
    "severity": "Medium",
    "title": "skills__2656255594__bom-sop-check__backups__v1.12 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2656255594__local-file-sender",
    "severity": "Medium",
    "title": "skills__2656255594__local-file-sender 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2656255594__sop-bom-report",
    "severity": "Medium",
    "title": "skills__2656255594__sop-bom-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2663629531__alpha-copilot-skill",
    "severity": "Medium",
    "title": "skills__2663629531__alpha-copilot-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2663629531__meme-risk-radar-skill",
    "severity": "Medium",
    "title": "skills__2663629531__meme-risk-radar-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tests\\test_billing_adapter.py；高风险 0，中风险 3，低风险 21",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2663629531__meme-risk-radar-skill__PaxHeader",
    "severity": "Low",
    "title": "skills__2663629531__meme-risk-radar-skill__PaxHeader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2663629531__token-risk-explainer-skill",
    "severity": "Medium",
    "title": "skills__2663629531__token-risk-explainer-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\token_risk_explainer.py；高风险 0，中风险 4，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__26medias__bob-p2p-beta",
    "severity": "High",
    "title": "skills__26medias__bob-p2p-beta 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 22，低风险 25",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__26medias__runware",
    "severity": "High",
    "title": "skills__26medias__runware 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\video.py；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2719040953__jianying-video-compose",
    "severity": "Medium",
    "title": "skills__2719040953__jianying-video-compose 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\api_reference.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2719040953__json-to-jianying-description",
    "severity": "Medium",
    "title": "skills__2719040953__json-to-jianying-description 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\json-schema.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2719040953__process-output",
    "severity": "Low",
    "title": "skills__2719040953__process-output 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2720480371__08-proactive-agent",
    "severity": "High",
    "title": "skills__2720480371__08-proactive-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 3，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2720480371__memory-optimizer-base",
    "severity": "Medium",
    "title": "skills__2720480371__memory-optimizer-base 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: memory_optimizer.py；高风险 0，中风险 2，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2720480371__wechat-look",
    "severity": "Medium",
    "title": "skills__2720480371__wechat-look 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: test_ocr.py；高风险 0，中风险 10，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__1688-price-monitor",
    "severity": "Medium",
    "title": "skills__275254cl-hash__1688-price-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tools\\query_price.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__bilibili-insight",
    "severity": "Medium",
    "title": "skills__275254cl-hash__bilibili-insight 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__competitor-tracker",
    "severity": "Medium",
    "title": "skills__275254cl-hash__competitor-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__copywriting-generator",
    "severity": "Low",
    "title": "skills__275254cl-hash__copywriting-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__coupon-finder-cn",
    "severity": "Low",
    "title": "skills__275254cl-hash__coupon-finder-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__daily-hot-deals",
    "severity": "Low",
    "title": "skills__275254cl-hash__daily-hot-deals 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tools\\daily_report.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__douyin-trend-finder",
    "severity": "Medium",
    "title": "skills__275254cl-hash__douyin-trend-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__ecommerce-data-export",
    "severity": "Medium",
    "title": "skills__275254cl-hash__ecommerce-data-export 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__jd-price-history",
    "severity": "Medium",
    "title": "skills__275254cl-hash__jd-price-history 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__keyword-rank-monitor",
    "severity": "Medium",
    "title": "skills__275254cl-hash__keyword-rank-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__livestream-script-generator",
    "severity": "Low",
    "title": "skills__275254cl-hash__livestream-script-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__niche-product-finder",
    "severity": "Low",
    "title": "skills__275254cl-hash__niche-product-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__pinduoduo-deal-finder",
    "severity": "Medium",
    "title": "skills__275254cl-hash__pinduoduo-deal-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__price-arbitrage-finder",
    "severity": "Medium",
    "title": "skills__275254cl-hash__price-arbitrage-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__smzdm-deals",
    "severity": "Medium",
    "title": "skills__275254cl-hash__smzdm-deals 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tools\\search_deals.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__taobao-price-monitor",
    "severity": "Medium",
    "title": "skills__275254cl-hash__taobao-price-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tools\\query_price.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__taobao-review-analyzer",
    "severity": "Medium",
    "title": "skills__275254cl-hash__taobao-review-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__275254cl-hash__video-script-writer",
    "severity": "Low",
    "title": "skills__275254cl-hash__video-script-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__wechat-article-optimizer",
    "severity": "Low",
    "title": "skills__275254cl-hash__wechat-article-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__275254cl-hash__xiaohongshu-analyzer",
    "severity": "Medium",
    "title": "skills__275254cl-hash__xiaohongshu-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__27555402-spec__cn-daily-tools",
    "severity": "Low",
    "title": "skills__27555402-spec__cn-daily-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__27555402-spec__freelancer-bidder",
    "severity": "Low",
    "title": "skills__27555402-spec__freelancer-bidder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__27555402-spec__smart-summarizer",
    "severity": "Low",
    "title": "skills__27555402-spec__smart-summarizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2771096196__music-manager",
    "severity": "High",
    "title": "skills__2771096196__music-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\download_music.py；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__279458179__gaodemapskill",
    "severity": "High",
    "title": "skills__279458179__gaodemapskill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: amap_tool.py；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__279458179__grok-image-generate",
    "severity": "Low",
    "title": "skills__279458179__grok-image-generate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__279458179__lyric-writer",
    "severity": "Low",
    "title": "skills__279458179__lyric-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__279458179__minimaxmusic",
    "severity": "Low",
    "title": "skills__279458179__minimaxmusic 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__279458179__openclaw-whisper-asr",
    "severity": "Medium",
    "title": "skills__279458179__openclaw-whisper-asr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__279458179__wxgzh-mcp",
    "severity": "Medium",
    "title": "skills__279458179__wxgzh-mcp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__279458179__xhsmander",
    "severity": "Low",
    "title": "skills__279458179__xhsmander 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\publish_post.py；高风险 0，中风险 0，低风险 15",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2813223285__assistant-physician-clinical-exam-tutor",
    "severity": "Low",
    "title": "skills__2813223285__assistant-physician-clinical-exam-tutor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 12",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2813223285__meeting-notes-skill",
    "severity": "High",
    "title": "skills__2813223285__meeting-notes-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\vendor\\generate_mindmap_clawhub.py；高风险 3，中风险 5，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2813223285__personal-health-coach",
    "severity": "Low",
    "title": "skills__2813223285__personal-health-coach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2813223285__xiaohongshu-note-fetcher",
    "severity": "Medium",
    "title": "skills__2813223285__xiaohongshu-note-fetcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search_notes_tikhub.py；高风险 0，中风险 4，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__281862066-a11y__agentsystem",
    "severity": "High",
    "title": "skills__281862066-a11y__agentsystem 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\skill_creator.py；高风险 2，中风险 0，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__281862066-a11y__eeat-content-quality-audit",
    "severity": "Low",
    "title": "skills__281862066-a11y__eeat-content-quality-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__281862066-a11y__openclaw-skill-eeta-audit",
    "severity": "High",
    "title": "skills__281862066-a11y__openclaw-skill-eeta-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__281862066-a11y__valuemining-lengthybooks",
    "severity": "Low",
    "title": "skills__281862066-a11y__valuemining-lengthybooks 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__282059559donghui-prog__rts-dashboard",
    "severity": "High",
    "title": "skills__282059559donghui-prog__rts-dashboard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: server.js；高风险 1，中风险 3，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2830201534__pidan-memory",
    "severity": "High",
    "title": "skills__2830201534__pidan-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install_ollama.sh；高风险 1，中风险 7，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__285984303__bupahua-store",
    "severity": "High",
    "title": "skills__285984303__bupahua-store 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2907555270__project-guide",
    "severity": "Low",
    "title": "skills__2907555270__project-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2944721178__mikrotik",
    "severity": "Medium",
    "title": "skills__2944721178__mikrotik 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 6，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2dogsandanerd__clawrag",
    "severity": "Low",
    "title": "skills__2dogsandanerd__clawrag 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2manslkh__line-api",
    "severity": "Medium",
    "title": "skills__2manslkh__line-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2manslkh__line-client",
    "severity": "Medium",
    "title": "skills__2manslkh__line-client 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2mawi2__spotify",
    "severity": "Low",
    "title": "skills__2mawi2__spotify 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__2mawi2__todoist-task-manager",
    "severity": "Medium",
    "title": "skills__2mawi2__todoist-task-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__2p1c__gmail-summarize",
    "severity": "High",
    "title": "skills__2p1c__gmail-summarize 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\fetch_unseen.py；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__2winter-dev__fennecseo-audit",
    "severity": "Low",
    "title": "skills__2winter-dev__fennecseo-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: fennec-seo_zh.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__30sec-heat__project-zoo",
    "severity": "Low",
    "title": "skills__30sec-heat__project-zoo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__31504254__resume-generator-clean",
    "severity": "High",
    "title": "skills__31504254__resume-generator-clean 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__315133264__learn-anything-in-one-hour",
    "severity": "Low",
    "title": "skills__315133264__learn-anything-in-one-hour 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\80-20-topics.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__316530790__libtv-skills",
    "severity": "High",
    "title": "skills__316530790__libtv-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\_common.py；高风险 1，中风险 0，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__321704933__daily-poster",
    "severity": "Medium",
    "title": "skills__321704933__daily-poster 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 13",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__326668808__openclaw360",
    "severity": "High",
    "title": "skills__326668808__openclaw360 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__33-code__radar-collision-warning",
    "severity": "Medium",
    "title": "skills__33-code__radar-collision-warning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\call_radar_service.js；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3313145040__ai-prompt-library-pro",
    "severity": "Low",
    "title": "skills__3313145040__ai-prompt-library-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3313145040__pdd-coupon-bot",
    "severity": "Low",
    "title": "skills__3313145040__pdd-coupon-bot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3313145040__ppt-generator-ai-pro",
    "severity": "Low",
    "title": "skills__3313145040__ppt-generator-ai-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3313145040__xhs-viral-copy-ai",
    "severity": "Low",
    "title": "skills__3313145040__xhs-viral-copy-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3313145040__xianyu-auto-lister",
    "severity": "Low",
    "title": "skills__3313145040__xianyu-auto-lister 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__332054781__web-learner-1-0-0",
    "severity": "Low",
    "title": "skills__332054781__web-learner-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__343195246__mdgs-tavily-search-skill",
    "severity": "High",
    "title": "skills__343195246__mdgs-tavily-search-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tavily.js；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__345968504__openclaw-troubleshooter",
    "severity": "Medium",
    "title": "skills__345968504__openclaw-troubleshooter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__349840432m-dev__agent-context-memory",
    "severity": "Medium",
    "title": "skills__349840432m-dev__agent-context-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__349840432m-dev__feishu-user-md",
    "severity": "Medium",
    "title": "skills__349840432m-dev__feishu-user-md 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\feishu-user-md.js；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__349840432m-dev__image-prompt-generator",
    "severity": "Medium",
    "title": "skills__349840432m-dev__image-prompt-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__349840432m-dev__multi-agent-workshop",
    "severity": "High",
    "title": "skills__349840432m-dev__multi-agent-workshop 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\jd_to_role_card.py；高风险 1，中风险 3，低风险 26",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3511815125__web-fetch-vx",
    "severity": "Low",
    "title": "skills__3511815125__web-fetch-vx 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__362224222__crypto-levels",
    "severity": "Medium",
    "title": "skills__362224222__crypto-levels 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 15",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__362224222__telegram-bot-manager",
    "severity": "Medium",
    "title": "skills__362224222__telegram-bot-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup_bot.py；高风险 0，中风险 7，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__365bug__ip-new",
    "severity": "Medium",
    "title": "skills__365bug__ip-new 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: ip.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__36kr-com__36kr-ainotes",
    "severity": "High",
    "title": "skills__36kr-com__36kr-ainotes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__36kr-com__36kr-aireportlist",
    "severity": "High",
    "title": "skills__36kr-com__36kr-aireportlist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__36kr-com__36kr-hotlist",
    "severity": "High",
    "title": "skills__36kr-com__36kr-hotlist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__371166758-qq__academic-polish",
    "severity": "Low",
    "title": "skills__371166758-qq__academic-polish 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__chinese-nlp-toolkit",
    "severity": "Low",
    "title": "skills__371166758-qq__chinese-nlp-toolkit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__clear-prompt",
    "severity": "Low",
    "title": "skills__371166758-qq__clear-prompt 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__cn-content-forge",
    "severity": "Low",
    "title": "skills__371166758-qq__cn-content-forge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__mem0-tech-tree",
    "severity": "Low",
    "title": "skills__371166758-qq__mem0-tech-tree 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tree.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__midjourney-prompt-architect",
    "severity": "Low",
    "title": "skills__371166758-qq__midjourney-prompt-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__nature-style-writer",
    "severity": "High",
    "title": "skills__371166758-qq__nature-style-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__371166758-qq__qf-code-review",
    "severity": "Medium",
    "title": "skills__371166758-qq__qf-code-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__371166758-qq__qf-content-repurpose",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-content-repurpose 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__qf-data-analyzer",
    "severity": "High",
    "title": "skills__371166758-qq__qf-data-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__371166758-qq__qf-english-polish",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-english-polish 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__qf-prompt-optimizer",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-prompt-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__qf-seo-content",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-seo-content 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__qf-weather",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-weather 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__qf-xiaohongshu-writer",
    "severity": "Low",
    "title": "skills__371166758-qq__qf-xiaohongshu-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__371166758-qq__startup-naming-pro",
    "severity": "Low",
    "title": "skills__371166758-qq__startup-naming-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__372768498__xhs-content-creator",
    "severity": "Low",
    "title": "skills__372768498__xhs-content-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__377739442__hipc-config-manager",
    "severity": "Low",
    "title": "skills__377739442__hipc-config-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__381608544__clawhub-report",
    "severity": "Low",
    "title": "skills__381608544__clawhub-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\security-research.md；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__382108113__baidu-netdisk-eva",
    "severity": "High",
    "title": "skills__382108113__baidu-netdisk-eva 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\main.py；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3824108-cell__claw-google-ads",
    "severity": "Low",
    "title": "skills__3824108-cell__claw-google-ads 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__384961890-ui__agent-memory-wisdom",
    "severity": "Medium",
    "title": "skills__384961890-ui__agent-memory-wisdom 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\subagent-watchdog.js；高风险 0，中风险 6，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__394286006__llm-proxy",
    "severity": "High",
    "title": "skills__394286006__llm-proxy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\content-filter-rules.json；高风险 1，中风险 3，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3coco3__playwright-scraper",
    "severity": "Medium",
    "title": "skills__3coco3__playwright-scraper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3cpj__pose-transfer",
    "severity": "Medium",
    "title": "skills__3cpj__pose-transfer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3d-era__munin-openclaw",
    "severity": "High",
    "title": "skills__3d-era__munin-openclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3dwitch__hotel-asset-marketer",
    "severity": "Medium",
    "title": "skills__3dwitch__hotel-asset-marketer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3dwitch__hotel-social-automator",
    "severity": "Medium",
    "title": "skills__3dwitch__hotel-social-automator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3dwitch__mailclaw",
    "severity": "Medium",
    "title": "skills__3dwitch__mailclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3rdbrain__hn-prospecting",
    "severity": "Medium",
    "title": "skills__3rdbrain__hn-prospecting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: hn-prospecting.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3rdbrain__outreach-crm",
    "severity": "High",
    "title": "skills__3rdbrain__outreach-crm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: outreach-crm.js；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3rdbrain__reddit-prospecting",
    "severity": "Medium",
    "title": "skills__3rdbrain__reddit-prospecting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reddit-prospecting.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3rdbrain__track-upvotes",
    "severity": "Medium",
    "title": "skills__3rdbrain__track-upvotes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: track-upvotes.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3rdbrain__x-leads-api",
    "severity": "High",
    "title": "skills__3rdbrain__x-leads-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: x-api.js；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__3rdbrain__x-prospecting",
    "severity": "Medium",
    "title": "skills__3rdbrain__x-prospecting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: x-prospecting.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__3rdsw__dingtalk-log",
    "severity": "Low",
    "title": "skills__3rdsw__dingtalk-log 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3yangyang9__deepclaw-cn",
    "severity": "Low",
    "title": "skills__3yangyang9__deepclaw-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__3yangyang9__lobster-community-xiaomo",
    "severity": "Medium",
    "title": "skills__3yangyang9__lobster-community-xiaomo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__402goose__compact-state",
    "severity": "High",
    "title": "skills__402goose__compact-state 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: molt-tools.js；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__403914291__remote-install",
    "severity": "Medium",
    "title": "skills__403914291__remote-install 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\remote_installer.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__404-unknow__agent-comm-skill",
    "severity": "Medium",
    "title": "skills__404-unknow__agent-comm-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__404-unknow__engram-2",
    "severity": "Medium",
    "title": "skills__404-unknow__engram-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 20",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__404-unknow__engram-evomap",
    "severity": "Medium",
    "title": "skills__404-unknow__engram-evomap 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 20",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__404-unknow__operator-skill",
    "severity": "Medium",
    "title": "skills__404-unknow__operator-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__421zuoduan__lifelog",
    "severity": "Medium",
    "title": "skills__421zuoduan__lifelog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README_EN.md；高风险 0，中风险 7，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__421zuoduan__unified-self-improving",
    "severity": "Medium",
    "title": "skills__421zuoduan__unified-self-improving 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 16",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__429668385__akshare-stock-analysis",
    "severity": "Medium",
    "title": "skills__429668385__akshare-stock-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\akshare_cli.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__429668385__clickhouse-database",
    "severity": "Medium",
    "title": "skills__429668385__clickhouse-database 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__429668385__mysql-database-skill",
    "severity": "Low",
    "title": "skills__429668385__mysql-database-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__43622283__li-base-scan",
    "severity": "High",
    "title": "skills__43622283__li-base-scan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__43622283__li-codeql-llm",
    "severity": "High",
    "title": "skills__43622283__li-codeql-llm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: test-output\\codeql-db\\results\\run-info-20260318.230324.362.yml；高风险 23，中风险 10，低风险 47",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__43622283__li-doc-answer",
    "severity": "Medium",
    "title": "skills__43622283__li-doc-answer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate_answers.py；高风险 0，中风险 5，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__li-etl-handle",
    "severity": "Medium",
    "title": "skills__43622283__li-etl-handle 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 14",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__li-etl-handle-safe",
    "severity": "Medium",
    "title": "skills__43622283__li-etl-handle-safe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package-lock.json；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__li-feishu-audio",
    "severity": "High",
    "title": "skills__43622283__li-feishu-audio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tts-voice.sh；高风险 6，中风险 4，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__43622283__li-feishu-qq-audio",
    "severity": "High",
    "title": "skills__43622283__li-feishu-qq-audio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tts-voice.sh；高风险 12，中风险 5，低风险 16",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__43622283__li-mvp-kanban-complete-skill",
    "severity": "Medium",
    "title": "skills__43622283__li-mvp-kanban-complete-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: clawhub.yaml；高风险 0，中风险 10，低风险 13",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__li-mvp-kanban-skill",
    "severity": "Medium",
    "title": "skills__43622283__li-mvp-kanban-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__li-python-sec-check",
    "severity": "High",
    "title": "skills__43622283__li-python-sec-check 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\llm_analyzer.py；高风险 4，中风险 12，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__43622283__li-summarize",
    "severity": "Medium",
    "title": "skills__43622283__li-summarize 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install.sh；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__43622283__security-log-analyzer",
    "severity": "High",
    "title": "skills__43622283__security-log-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\llm_client.py；高风险 3，中风险 0，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__438061781__academic-press-release-writing",
    "severity": "Low",
    "title": "skills__438061781__academic-press-release-writing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__438061781__pdf-figure-extractor",
    "severity": "Low",
    "title": "skills__438061781__pdf-figure-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__447992399__llava-vision",
    "severity": "Medium",
    "title": "skills__447992399__llava-vision 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: tool.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__467718584__eo-ability-architect",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-code-review",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-code-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-dream",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-dream 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-memory",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-multi-expert",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-multi-expert 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-plan",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-plan 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-ability-rag",
    "severity": "Low",
    "title": "skills__467718584__eo-ability-rag 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__467718584__eo-workflow-paper",
    "severity": "Low",
    "title": "skills__467718584__eo-workflow-paper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__47liu__xihe-jianmu-ipc",
    "severity": "High",
    "title": "skills__47liu__xihe-jianmu-ipc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skills\\xihe-jianmu-ipc\\mcp-server.mjs；高风险 10，中风险 4，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__47liu__xihe-jianmu-ipc__skills__xihe-jianmu-ipc",
    "severity": "High",
    "title": "skills__47liu__xihe-jianmu-ipc__skills__xihe-jianmu-ipc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: mcp-server.mjs；高风险 5，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__47vigen__developer-agent",
    "severity": "Low",
    "title": "skills__47vigen__developer-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\workflow-details.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4833675__minimax-tokenplan-image-generation",
    "severity": "Medium",
    "title": "skills__4833675__minimax-tokenplan-image-generation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__4833675__minimax-tokenplan-music",
    "severity": "Medium",
    "title": "skills__4833675__minimax-tokenplan-music 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__4833675__minimax-tokenplan-tts",
    "severity": "High",
    "title": "skills__4833675__minimax-tokenplan-tts 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\stream_play.py；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4ier__claw-use",
    "severity": "Low",
    "title": "skills__4ier__claw-use 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4ier__claw-use-android",
    "severity": "Medium",
    "title": "skills__4ier__claw-use-android 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__4ier__claw-use-mihomo",
    "severity": "High",
    "title": "skills__4ier__claw-use-mihomo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\config.js；高风险 3，中风险 7，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4ier__feishu-contacts-sync",
    "severity": "Low",
    "title": "skills__4ier__feishu-contacts-sync 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\sync_feishu_contacts.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4ier__feishu-group",
    "severity": "Low",
    "title": "skills__4ier__feishu-group 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\sync_feishu_contacts.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4ier__neo-browser",
    "severity": "Low",
    "title": "skills__4ier__neo-browser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4ier__openclaw-feishu-group-chat",
    "severity": "Low",
    "title": "skills__4ier__openclaw-feishu-group-chat 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\sync_feishu_contacts.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4myhime__narrator-ai-cli-skill",
    "severity": "High",
    "title": "skills__4myhime__narrator-ai-cli-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4myhime__test-for-wang",
    "severity": "High",
    "title": "skills__4myhime__test-for-wang 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4ormund__clawnads",
    "severity": "High",
    "title": "skills__4ormund__clawnads 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\notifications-and-webhooks.md；高风险 1，中风险 5，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4strium__moodle-claw",
    "severity": "High",
    "title": "skills__4strium__moodle-claw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4t-shirt__create-telegram-agent",
    "severity": "Low",
    "title": "skills__4t-shirt__create-telegram-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__4ur3l__agentmail-to-inbox-ops",
    "severity": "High",
    "title": "skills__4ur3l__agentmail-to-inbox-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 4，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4worlds4w-svg__clauwdit",
    "severity": "High",
    "title": "skills__4worlds4w-svg__clauwdit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4xiomdev__whoop-central",
    "severity": "High",
    "title": "skills__4xiomdev__whoop-central 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\verify.js；高风险 4，中风险 7，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__4ydx3906__issue-to-pr",
    "severity": "High",
    "title": "skills__4ydx3906__issue-to-pr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__502399493zjw-lgtm__openclawmp",
    "severity": "High",
    "title": "skills__502399493zjw-lgtm__openclawmp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\lib\\config.js；高风险 3，中风险 4，低风险 20",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__505768069-rgb__adaptive-skill-factory",
    "severity": "Low",
    "title": "skills__505768069-rgb__adaptive-skill-factory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: agents\\openai.yaml；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__505768069-rgb__internal-hub-agent-lab",
    "severity": "Low",
    "title": "skills__505768069-rgb__internal-hub-agent-lab 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__512548510__tts-winmsg-free",
    "severity": "Medium",
    "title": "skills__512548510__tts-winmsg-free 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\wmserver_20260327.py；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__512z__yahooquery",
    "severity": "High",
    "title": "skills__512z__yahooquery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\research.md；高风险 1，中风险 3，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__519989179__daily-dd-skills",
    "severity": "Low",
    "title": "skills__519989179__daily-dd-skills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-background-check-list",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-background-check-list 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-candidate-tracker",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-candidate-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-interview-evaluation-report",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-interview-evaluation-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-interview-questions-generator",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-interview-questions-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-job-market-analysis",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-job-market-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-position-parse",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-position-parse 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-resume-diagnose",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-resume-diagnose 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-resume-match",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-resume-match 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-resume-parse",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-resume-parse 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__51mee-com__51mee-resume-profile",
    "severity": "Low",
    "title": "skills__51mee-com__51mee-resume-profile 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__520mianxiangduixiang520__bill-claw",
    "severity": "Medium",
    "title": "skills__520mianxiangduixiang520__bill-claw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\static\\vendor\\chart.umd.min.js；高风险 0，中风险 3，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__520mianxiangduixiang520__md2img",
    "severity": "Medium",
    "title": "skills__520mianxiangduixiang520__md2img 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\md_to_png.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__520xiaomumu__easy-html-deploy",
    "severity": "High",
    "title": "skills__520xiaomumu__easy-html-deploy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\htmlcode_deploy.py；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__520xiaomumu__html-deploy",
    "severity": "High",
    "title": "skills__520xiaomumu__html-deploy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\htmlcode_deploy.py；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__520xiaomumu__html-markdown-hybrid",
    "severity": "Medium",
    "title": "skills__520xiaomumu__html-markdown-hybrid 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__529279917__memory-persistence",
    "severity": "High",
    "title": "skills__529279917__memory-persistence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: storage\\github.py；高风险 2，中风险 1，低风险 20",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__529279917__wechat-skill",
    "severity": "Medium",
    "title": "skills__529279917__wechat-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__account-handoff-builder",
    "severity": "High",
    "title": "skills__52yuanchangxing__account-handoff-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__ai-workflow-red-team-lite",
    "severity": "High",
    "title": "skills__52yuanchangxing__ai-workflow-red-team-lite 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__alarm-memo-assistant-pro",
    "severity": "Low",
    "title": "skills__52yuanchangxing__alarm-memo-assistant-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\limitations-and-desktop-control.md；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__api-contract-auditor",
    "severity": "High",
    "title": "skills__52yuanchangxing__api-contract-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__browser-session-curator",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__browser-session-curator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__call-scorecard-builder",
    "severity": "High",
    "title": "skills__52yuanchangxing__call-scorecard-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__case-study-factory",
    "severity": "High",
    "title": "skills__52yuanchangxing__case-study-factory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__changelog-curator",
    "severity": "High",
    "title": "skills__52yuanchangxing__changelog-curator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__claim-risk-auditor",
    "severity": "Low",
    "title": "skills__52yuanchangxing__claim-risk-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__classroom-lesson-pack",
    "severity": "High",
    "title": "skills__52yuanchangxing__classroom-lesson-pack 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__clawhub-rate-limited-publisher-fixed",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__clawhub-rate-limited-publisher-fixed 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 5，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__clinic-visit-prep",
    "severity": "High",
    "title": "skills__52yuanchangxing__clinic-visit-prep 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__clipboard-knowledge-capture",
    "severity": "High",
    "title": "skills__52yuanchangxing__clipboard-knowledge-capture 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__collab-offer-polisher",
    "severity": "Low",
    "title": "skills__52yuanchangxing__collab-offer-polisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__competitor-message-differ",
    "severity": "High",
    "title": "skills__52yuanchangxing__competitor-message-differ 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__compliance-evidence-assembler",
    "severity": "High",
    "title": "skills__52yuanchangxing__compliance-evidence-assembler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__content-repurpose-studio",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__content-repurpose-studio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__contract-redline-navigator",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__contract-redline-navigator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__creator-campaign-planner",
    "severity": "High",
    "title": "skills__52yuanchangxing__creator-campaign-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__creator-course-outline",
    "severity": "High",
    "title": "skills__52yuanchangxing__creator-course-outline 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__crm-next-action",
    "severity": "High",
    "title": "skills__52yuanchangxing__crm-next-action 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__cron-job-guardian",
    "severity": "High",
    "title": "skills__52yuanchangxing__cron-job-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__csv-cleanroom",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__csv-cleanroom 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__customer-voice-synthesizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__customer-voice-synthesizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__data-retention-mapper",
    "severity": "High",
    "title": "skills__52yuanchangxing__data-retention-mapper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__dataset-intake-auditor",
    "severity": "High",
    "title": "skills__52yuanchangxing__dataset-intake-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__decision-ledger",
    "severity": "High",
    "title": "skills__52yuanchangxing__decision-ledger 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__deck-narrative-planner",
    "severity": "High",
    "title": "skills__52yuanchangxing__deck-narrative-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__dependency-map-builder",
    "severity": "High",
    "title": "skills__52yuanchangxing__dependency-map-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__dependency-upgrade-briefing",
    "severity": "High",
    "title": "skills__52yuanchangxing__dependency-upgrade-briefing 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__desktop-cleanup-playbook",
    "severity": "High",
    "title": "skills__52yuanchangxing__desktop-cleanup-playbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__desktop-music-launcher",
    "severity": "High",
    "title": "skills__52yuanchangxing__desktop-music-launcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\music_skill.py；高风险 3，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__doc-gap-finder",
    "severity": "High",
    "title": "skills__52yuanchangxing__doc-gap-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__downloads-command-center",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__downloads-command-center 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__ecommerce-customer-service-pro",
    "severity": "Low",
    "title": "skills__52yuanchangxing__ecommerce-customer-service-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__ecommerce-return-intelligence",
    "severity": "High",
    "title": "skills__52yuanchangxing__ecommerce-return-intelligence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__env-diff-explainer",
    "severity": "High",
    "title": "skills__52yuanchangxing__env-diff-explainer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__escalation-brief-writer",
    "severity": "High",
    "title": "skills__52yuanchangxing__escalation-brief-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__evidence-gap-mapper",
    "severity": "High",
    "title": "skills__52yuanchangxing__evidence-gap-mapper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__execution-plan-splitter",
    "severity": "High",
    "title": "skills__52yuanchangxing__execution-plan-splitter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__faq-distiller",
    "severity": "High",
    "title": "skills__52yuanchangxing__faq-distiller 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__file-drop-organizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__file-drop-organizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__follow-up-commander",
    "severity": "High",
    "title": "skills__52yuanchangxing__follow-up-commander 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__fortune-master-pro",
    "severity": "Low",
    "title": "skills__52yuanchangxing__fortune-master-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 18",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__handover-memory-pack",
    "severity": "High",
    "title": "skills__52yuanchangxing__handover-memory-pack 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__home-lab-ops-log",
    "severity": "High",
    "title": "skills__52yuanchangxing__home-lab-ops-log 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__implementation-readiness-checker",
    "severity": "High",
    "title": "skills__52yuanchangxing__implementation-readiness-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__inbox-action-board",
    "severity": "High",
    "title": "skills__52yuanchangxing__inbox-action-board 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__incident-postmortem-assistant",
    "severity": "High",
    "title": "skills__52yuanchangxing__incident-postmortem-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__insight-brief-generator",
    "severity": "High",
    "title": "skills__52yuanchangxing__insight-brief-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__issue-reproducer",
    "severity": "High",
    "title": "skills__52yuanchangxing__issue-reproducer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__journal-all-types-bundle",
    "severity": "High",
    "title": "skills__52yuanchangxing__journal-all-types-bundle 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 1，中风险 1，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__knowledge-to-playbook",
    "severity": "High",
    "title": "skills__52yuanchangxing__knowledge-to-playbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__landing-page-angle-tester",
    "severity": "High",
    "title": "skills__52yuanchangxing__landing-page-angle-tester 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__lead-qualification-notes",
    "severity": "High",
    "title": "skills__52yuanchangxing__lead-qualification-notes 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__legal-matter-intake-summarizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__legal-matter-intake-summarizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__local-bookmark-librarian",
    "severity": "High",
    "title": "skills__52yuanchangxing__local-bookmark-librarian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__local-media-cataloger",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__local-media-cataloger 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__local-rag-index-planner",
    "severity": "High",
    "title": "skills__52yuanchangxing__local-rag-index-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__manufacturing-shift-handoff",
    "severity": "High",
    "title": "skills__52yuanchangxing__manufacturing-shift-handoff 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__meeting-risk-radar",
    "severity": "High",
    "title": "skills__52yuanchangxing__meeting-risk-radar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__meeting-to-kanban",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__meeting-to-kanban 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__metric-definition-catalog",
    "severity": "High",
    "title": "skills__52yuanchangxing__metric-definition-catalog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__migration-runbook-generator",
    "severity": "High",
    "title": "skills__52yuanchangxing__migration-runbook-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__multi-search-engine-pro",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__multi-search-engine-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 4，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__nonprofit-grant-outline",
    "severity": "High",
    "title": "skills__52yuanchangxing__nonprofit-grant-outline 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__onboarding-journey-designer",
    "severity": "High",
    "title": "skills__52yuanchangxing__onboarding-journey-designer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__openclaw-bottle-drift",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__openclaw-bottle-drift 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\relay_server.py；高风险 0，中风险 5，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__openclaw-bottle-drift-skill",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__openclaw-bottle-drift-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\relay_server.py；高风险 0，中风险 5，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__outreach-sequence-crafter",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__outreach-sequence-crafter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__paper-assistant",
    "severity": "Low",
    "title": "skills__52yuanchangxing__paper-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__paper-originality-studio",
    "severity": "High",
    "title": "skills__52yuanchangxing__paper-originality-studio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\package_skill.py；高风险 2，中风险 1，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__partner-enable-kit",
    "severity": "High",
    "title": "skills__52yuanchangxing__partner-enable-kit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__pathway-score-guide-pro",
    "severity": "Low",
    "title": "skills__52yuanchangxing__pathway-score-guide-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\self_check.py；高风险 0，中风险 0，低风险 27",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__permission-footprint-reviewer",
    "severity": "High",
    "title": "skills__52yuanchangxing__permission-footprint-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 4，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__personal-deadline-radar",
    "severity": "High",
    "title": "skills__52yuanchangxing__personal-deadline-radar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__podcast-production-ops",
    "severity": "High",
    "title": "skills__52yuanchangxing__podcast-production-ops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__policy-application-checker",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__policy-application-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__policy-delta-watcher",
    "severity": "High",
    "title": "skills__52yuanchangxing__policy-delta-watcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__policy-to-checklist",
    "severity": "Low",
    "title": "skills__52yuanchangxing__policy-to-checklist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__portfolio-case-study-forge",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__portfolio-case-study-forge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__priority-conflict-resolver",
    "severity": "High",
    "title": "skills__52yuanchangxing__priority-conflict-resolver 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__project-brief-writer",
    "severity": "High",
    "title": "skills__52yuanchangxing__project-brief-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__prompt-ab-lab",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__prompt-ab-lab 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__prompt-leak-auditor",
    "severity": "High",
    "title": "skills__52yuanchangxing__prompt-leak-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__proposal-comparator",
    "severity": "High",
    "title": "skills__52yuanchangxing__proposal-comparator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__qa-scenario-synthesizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__qa-scenario-synthesizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__quote-invoice-workbench",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__quote-invoice-workbench 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__real-estate-showing-brief",
    "severity": "High",
    "title": "skills__52yuanchangxing__real-estate-showing-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__receipt-expense-sorter",
    "severity": "High",
    "title": "skills__52yuanchangxing__receipt-expense-sorter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__receipt-expense-workbench",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__receipt-expense-workbench 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__recruiting-interview-kit",
    "severity": "High",
    "title": "skills__52yuanchangxing__recruiting-interview-kit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__regression-story-builder",
    "severity": "High",
    "title": "skills__52yuanchangxing__regression-story-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__release-note-localizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__release-note-localizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__renewal-risk-monitor",
    "severity": "High",
    "title": "skills__52yuanchangxing__renewal-risk-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__reply-coach",
    "severity": "Low",
    "title": "skills__52yuanchangxing__reply-coach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\reply_from_clipboard.mjs；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__repo-onboarding-guide",
    "severity": "High",
    "title": "skills__52yuanchangxing__repo-onboarding-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__research-claim-checker",
    "severity": "High",
    "title": "skills__52yuanchangxing__research-claim-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__research-matrix-builder",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__research-matrix-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__resume-job-match-lab",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__resume-job-match-lab 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__review-miner",
    "severity": "High",
    "title": "skills__52yuanchangxing__review-miner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__reviewer-rebuttal-coach",
    "severity": "Low",
    "title": "skills__52yuanchangxing__reviewer-rebuttal-coach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__rubric-gap-analyzer",
    "severity": "Low",
    "title": "skills__52yuanchangxing__rubric-gap-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__run-command-safety-check",
    "severity": "High",
    "title": "skills__52yuanchangxing__run-command-safety-check 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 5，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__sbom-explainer",
    "severity": "High",
    "title": "skills__52yuanchangxing__sbom-explainer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__screenshot-to-task",
    "severity": "High",
    "title": "skills__52yuanchangxing__screenshot-to-task 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__screenshot-ux-auditor",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__screenshot-ux-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__secret-exposure-gate",
    "severity": "High",
    "title": "skills__52yuanchangxing__secret-exposure-gate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 4，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-example-synthesizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-example-synthesizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-frontmatter-doctor",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-frontmatter-doctor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-gap-finder",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-gap-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-install-checker",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-install-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 4，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-market-fit-ranker",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-market-fit-ranker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-pack-composer",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-pack-composer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-readme-rebuilder",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-readme-rebuilder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-risk-splitter",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-risk-splitter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-routing-benchmark",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-routing-benchmark 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__skill-smoke-test-author",
    "severity": "High",
    "title": "skills__52yuanchangxing__skill-smoke-test-author 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__social-post-batcher",
    "severity": "High",
    "title": "skills__52yuanchangxing__social-post-batcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__sop-factory",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__sop-factory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__sop-refiner",
    "severity": "High",
    "title": "skills__52yuanchangxing__sop-refiner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__source-trace-builder",
    "severity": "High",
    "title": "skills__52yuanchangxing__source-trace-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__spec-to-checklist",
    "severity": "High",
    "title": "skills__52yuanchangxing__spec-to-checklist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__stakeholder-update-drafter",
    "severity": "High",
    "title": "skills__52yuanchangxing__stakeholder-update-drafter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__study-revision-planner",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__study-revision-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__success-plan-generator",
    "severity": "High",
    "title": "skills__52yuanchangxing__success-plan-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__support-macro-crafter",
    "severity": "High",
    "title": "skills__52yuanchangxing__support-macro-crafter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__survey-response-coder",
    "severity": "High",
    "title": "skills__52yuanchangxing__survey-response-coder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__taxonomy-normalizer",
    "severity": "High",
    "title": "skills__52yuanchangxing__taxonomy-normalizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__template-snippet-switchboard",
    "severity": "High",
    "title": "skills__52yuanchangxing__template-snippet-switchboard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__text-game-arcade-universe-v3",
    "severity": "Low",
    "title": "skills__52yuanchangxing__text-game-arcade-universe-v3 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 22",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__52yuanchangxing__vendor-risk-brief",
    "severity": "High",
    "title": "skills__52yuanchangxing__vendor-risk-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__wallpaper-auto-switch-pro-executable",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__wallpaper-auto-switch-pro-executable 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install_launchagent.sh；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__webinar-repurpose-studio",
    "severity": "High",
    "title": "skills__52yuanchangxing__webinar-repurpose-studio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__weekly-ops-review",
    "severity": "Medium",
    "title": "skills__52yuanchangxing__weekly-ops-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SELF_CHECK.md；高风险 0，中风险 2，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__52yuanchangxing__weekly-review-pilot",
    "severity": "High",
    "title": "skills__52yuanchangxing__weekly-review-pilot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__52yuanchangxing__workshop-agenda-designer",
    "severity": "High",
    "title": "skills__52yuanchangxing__workshop-agenda-designer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__547895019__arduino-cli",
    "severity": "Low",
    "title": "skills__547895019__arduino-cli 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__547895019__esp-idf-helper",
    "severity": "High",
    "title": "skills__547895019__esp-idf-helper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__547895019__public-apis-skill-creator",
    "severity": "High",
    "title": "skills__547895019__public-apis-skill-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\create_skill.sh；高风险 1，中风险 5，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__547895019__qwen-video",
    "severity": "High",
    "title": "skills__547895019__qwen-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate.sh；高风险 2，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__547895019__windows-tts-wsl2",
    "severity": "Medium",
    "title": "skills__547895019__windows-tts-wsl2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\say.sh；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__549800894__auto-quotation-system-openclaw",
    "severity": "Medium",
    "title": "skills__549800894__auto-quotation-system-openclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\render_quote_docx.py；高风险 0，中风险 3，低风险 24",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__549800894__linkedin-company-scout-m1",
    "severity": "Medium",
    "title": "skills__549800894__linkedin-company-scout-m1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run_linkedin_company_scout.py；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__54lynnn__bilibili-ai-subtitle",
    "severity": "High",
    "title": "skills__54lynnn__bilibili-ai-subtitle 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\bilibili_ai_subtitle.sh；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__54lynnn__bilibili-transcript",
    "severity": "Medium",
    "title": "skills__54lynnn__bilibili-transcript 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\bilibili_transcript.sh；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__54meteor__article-tts",
    "severity": "Medium",
    "title": "skills__54meteor__article-tts 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__54meteor__feishu-voice-api-sender",
    "severity": "Medium",
    "title": "skills__54meteor__feishu-voice-api-sender 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tts_and_send.py；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__54meteor__message-split",
    "severity": "Low",
    "title": "skills__54meteor__message-split 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__54meteor__stock-assistant",
    "severity": "Medium",
    "title": "skills__54meteor__stock-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: fetcher.py；高风险 0，中风险 2，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__552134926-alt__shiyi-proactive-agent",
    "severity": "Low",
    "title": "skills__552134926-alt__shiyi-proactive-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__56xiaoli123__agent-usage-report",
    "severity": "Low",
    "title": "skills__56xiaoli123__agent-usage-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__5758703__gis-job-monitor",
    "severity": "Low",
    "title": "skills__5758703__gis-job-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search-jobs.py；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__578499893__clean-desktop",
    "severity": "Low",
    "title": "skills__578499893__clean-desktop 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__596655510-wang__mydir",
    "severity": "Low",
    "title": "skills__596655510-wang__mydir 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__5eun__custom-youtube-summarize",
    "severity": "Medium",
    "title": "skills__5eun__custom-youtube-summarize 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: libs\\urllib3\\util\\retry.py；高风险 0，中风险 17，低风险 86",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__5eun__kbo-results",
    "severity": "High",
    "title": "skills__5eun__kbo-results 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__5hanth__arbiter",
    "severity": "Medium",
    "title": "skills__5hanth__arbiter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__5kbpers__sg-property-scraper",
    "severity": "High",
    "title": "skills__5kbpers__sg-property-scraper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scrape.py；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__5rbdmak7f-alt__memory-guardian-agent",
    "severity": "High",
    "title": "skills__5rbdmak7f-alt__memory-guardian-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\security_layer.py；高风险 1，中风险 2，低风险 73",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__5xuanwen__hwc-infra",
    "severity": "Medium",
    "title": "skills__5xuanwen__hwc-infra 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install_koocli.py；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__6022-protocol__k-life",
    "severity": "High",
    "title": "skills__6022-protocol__k-life 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\status.js；高风险 7，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__6022-protocol__yongsheng",
    "severity": "High",
    "title": "skills__6022-protocol__yongsheng 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\resurrect.js；高风险 4，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__618dt__skill-0232",
    "severity": "Low",
    "title": "skills__618dt__skill-0232 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__664624249__feishu-bitable-builder",
    "severity": "Low",
    "title": "skills__664624249__feishu-bitable-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\automation.md；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__664624249__feishu-requirement-document-generator",
    "severity": "Medium",
    "title": "skills__664624249__feishu-requirement-document-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__666-moonlight__website-security-audit",
    "severity": "Low",
    "title": "skills__666-moonlight__website-security-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\known-platforms.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__674067795w-wq__find-profitable-stocks",
    "severity": "Low",
    "title": "skills__674067795w-wq__find-profitable-stocks 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__67available__pdf-rename",
    "severity": "Low",
    "title": "skills__67available__pdf-rename 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__6830920__clawlet",
    "severity": "High",
    "title": "skills__6830920__clawlet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: index.js；高风险 1，中风险 2，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__690566155-blip__zx-test-runner",
    "severity": "Medium",
    "title": "skills__690566155-blip__zx-test-runner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__6e6e6e__ai-3d-generation",
    "severity": "Medium",
    "title": "skills__6e6e6e__ai-3d-generation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__6eanut__arxiv-survey",
    "severity": "High",
    "title": "skills__6eanut__arxiv-survey 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__6eanut__sessions-manager",
    "severity": "Low",
    "title": "skills__6eanut__sessions-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__6leonardo__m2m-ads",
    "severity": "Medium",
    "title": "skills__6leonardo__m2m-ads 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__6mile-puppet__s3-sort",
    "severity": "Low",
    "title": "skills__6mile-puppet__s3-sort 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: s3-bulk-upload.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__6tizer__axon-agent",
    "severity": "Medium",
    "title": "skills__6tizer__axon-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__7010g__librag-knowledge-recall",
    "severity": "Medium",
    "title": "skills__7010g__librag-knowledge-recall 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\recall.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__70asunflower__message-friendly",
    "severity": "Low",
    "title": "skills__70asunflower__message-friendly 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__70asunflower__notion-im-helper",
    "severity": "High",
    "title": "skills__70asunflower__notion-im-helper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search_notes.py；高风险 2，中风险 1，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__717986230__agency-agents-caller",
    "severity": "High",
    "title": "skills__717986230__agency-agents-caller 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data\\agents.json；高风险 2，中风险 5，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__717986230__agent-caller",
    "severity": "High",
    "title": "skills__717986230__agent-caller 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data\\agents.json；高风险 2，中风险 6，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__717986230__memory-complete",
    "severity": "Medium",
    "title": "skills__717986230__memory-complete 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\ollama_embedding.py；高风险 0，中风险 2，低风险 14",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__717986230__memory-system-complete",
    "severity": "Medium",
    "title": "skills__717986230__memory-system-complete 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 9，低风险 16",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__727155455__frontend-doctor",
    "severity": "Medium",
    "title": "skills__727155455__frontend-doctor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 4，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__734818028__diet-record",
    "severity": "Medium",
    "title": "skills__734818028__diet-record 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__735140144__wiznote-docs",
    "severity": "High",
    "title": "skills__735140144__wiznote-docs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 3，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__737999__gridtrx",
    "severity": "High",
    "title": "skills__737999__gridtrx 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__743834110__san-sheng-liu-bu",
    "severity": "Low",
    "title": "skills__743834110__san-sheng-liu-bu 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7487__hottrender-dingtalk-bot",
    "severity": "High",
    "title": "skills__7487__hottrender-dingtalk-bot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: assets\\hottrender-runtime\\src\\providers\\tiktok.py；高风险 2，中风险 2，低风险 21",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__7487__lp-lobster-crawler",
    "severity": "High",
    "title": "skills__7487__lp-lobster-crawler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\broadcast\\dingtalk.py；高风险 1，中风险 3，低风险 45",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__7679457979__finance-capability-model",
    "severity": "Low",
    "title": "skills__7679457979__finance-capability-model 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7679457979__finance-idp",
    "severity": "Low",
    "title": "skills__7679457979__finance-idp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7679457979__finance-interview-generator",
    "severity": "Low",
    "title": "skills__7679457979__finance-interview-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7679457979__finance-recruitment-jd",
    "severity": "Low",
    "title": "skills__7679457979__finance-recruitment-jd 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7679457979__finance-training-outline",
    "severity": "Low",
    "title": "skills__7679457979__finance-training-outline 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-city-checkin",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-city-checkin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-city-explorer",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-city-explorer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-dinner-planner",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-dinner-planner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-food-radar",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-food-radar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-memory-map",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-memory-map 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__770600682-cyber__amap-walk-route",
    "severity": "Low",
    "title": "skills__770600682-cyber__amap-walk-route 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7789996399__meerkat-governance",
    "severity": "Low",
    "title": "skills__7789996399__meerkat-governance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__77darius77__memory-curator",
    "severity": "Medium",
    "title": "skills__77darius77__memory-curator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__77spongebob__alpha-pulse",
    "severity": "Medium",
    "title": "skills__77spongebob__alpha-pulse 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__77spongebob__quant",
    "severity": "Medium",
    "title": "skills__77spongebob__quant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: config.yaml；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__786793119__emotion-memory-assistant",
    "severity": "Low",
    "title": "skills__786793119__emotion-memory-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__786793119__habit-tracker-companion",
    "severity": "Low",
    "title": "skills__786793119__habit-tracker-companion 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__786793119__miya-rednote-writer",
    "severity": "Low",
    "title": "skills__786793119__miya-rednote-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__786793119__pocket-money-manager",
    "severity": "Low",
    "title": "skills__786793119__pocket-money-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__786793119__smart-reminder-companion",
    "severity": "Low",
    "title": "skills__786793119__smart-reminder-companion 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7d-codes__memory-pill",
    "severity": "Medium",
    "title": "skills__7d-codes__memory-pill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__7ito__hkroute",
    "severity": "High",
    "title": "skills__7ito__hkroute 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\hk-route.cjs；高风险 2，中风险 2，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__7revor__notion-1-0-0",
    "severity": "Low",
    "title": "skills__7revor__notion-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__7schmiede__hookaido",
    "severity": "High",
    "title": "skills__7schmiede__hookaido 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 3，中风险 3，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__801c07__molt-trader-skill",
    "severity": "High",
    "title": "skills__801c07__molt-trader-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\examples\\test-connection.ts；高风险 4，中风险 2，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__807209066__design-framework-builder",
    "severity": "Low",
    "title": "skills__807209066__design-framework-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__807209066__design-framework-confirm",
    "severity": "Low",
    "title": "skills__807209066__design-framework-confirm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__807209066__design-framework-generate",
    "severity": "Low",
    "title": "skills__807209066__design-framework-generate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__807209066__design-framework-sender",
    "severity": "Medium",
    "title": "skills__807209066__design-framework-sender 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: send.sh；高风险 0，中风险 5，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__810722796-lgtm__text-adventure-game-skill",
    "severity": "Low",
    "title": "skills__810722796-lgtm__text-adventure-game-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__810722796-lgtm__text-game-generator",
    "severity": "Low",
    "title": "skills__810722796-lgtm__text-game-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__822376583-hub__memory-orchestrator",
    "severity": "High",
    "title": "skills__822376583-hub__memory-orchestrator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: install.sh；高风险 2，中风险 6，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__834948655__screenshot-tool",
    "severity": "High",
    "title": "skills__834948655__screenshot-tool 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__834948655__skill-doc-enhancer",
    "severity": "Medium",
    "title": "skills__834948655__skill-doc-enhancer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\enhance_skill.py；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__834948655__skill-test-generator",
    "severity": "Medium",
    "title": "skills__834948655__skill-test-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__838997125__minimax-music-ai",
    "severity": "Medium",
    "title": "skills__838997125__minimax-music-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__838997125__openclaw-html-slides",
    "severity": "High",
    "title": "skills__838997125__openclaw-html-slides 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\deploy.sh；高风险 4，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__838997125__zyq-wechat-automation",
    "severity": "Medium",
    "title": "skills__838997125__zyq-wechat-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__839305939wang__feishu-bot-creator",
    "severity": "High",
    "title": "skills__839305939wang__feishu-bot-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\feishu_bot_creator.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__84191879__agent-group",
    "severity": "Low",
    "title": "skills__84191879__agent-group 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__84191879__cloud-local-bridge",
    "severity": "High",
    "title": "skills__84191879__cloud-local-bridge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\bridge_server.py；高风险 1，中风险 3，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__8421bit__claw-team-builder",
    "severity": "Medium",
    "title": "skills__8421bit__claw-team-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\validator.js；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__8421bit__wechat-article-reader",
    "severity": "Medium",
    "title": "skills__8421bit__wechat-article-reader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__843645440__context-not-control",
    "severity": "Medium",
    "title": "skills__843645440__context-not-control 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\permission-levels.md；高风险 0，中风险 1，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__850media__frameo",
    "severity": "High",
    "title": "skills__850media__frameo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\frameo_client.py；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__85otaku-dot__craw-and-core",
    "severity": "Medium",
    "title": "skills__85otaku-dot__craw-and-core 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__86293073__evomap-auto-task-publish-1-1-0",
    "severity": "High",
    "title": "skills__86293073__evomap-auto-task-publish-1-1-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: publish-asset-v2.js；高风险 3，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__86293073__self-evolving-skill-1-0-2",
    "severity": "Medium",
    "title": "skills__86293073__self-evolving-skill-1-0-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\cli.ts；高风险 0，中风险 4，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__86293073__self-reflection-1-1-1",
    "severity": "High",
    "title": "skills__86293073__self-reflection-1-1-1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__86293073__skill-creator-0-1-0",
    "severity": "Medium",
    "title": "skills__86293073__skill-creator-0-1-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\init_skill.py；高风险 0，中风险 2，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__86293073__web-search-instant-1-1-0",
    "severity": "High",
    "title": "skills__86293073__web-search-instant-1-1-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 3，中风险 2，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__863king__9527-github-trending",
    "severity": "Low",
    "title": "skills__863king__9527-github-trending 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: trending.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__863king__auto-trading-strategy",
    "severity": "Low",
    "title": "skills__863king__auto-trading-strategy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__863king__cold-outreach-pack",
    "severity": "Low",
    "title": "skills__863king__cold-outreach-pack 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: prompts\\linkedin_connect.md；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__863king__hk-cn-content-matrix",
    "severity": "Low",
    "title": "skills__863king__hk-cn-content-matrix 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__870021840__teacher-prep",
    "severity": "Low",
    "title": "skills__870021840__teacher-prep 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__87marc__outlook-delegate",
    "severity": "Medium",
    "title": "skills__87marc__outlook-delegate 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\outlook-mail.sh；高风险 0，中风险 5，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__87marc__outlook-skill-clawhub",
    "severity": "Medium",
    "title": "skills__87marc__outlook-skill-clawhub 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__88901111hz-lang__nerve-bridge-skill",
    "severity": "Medium",
    "title": "skills__88901111hz-lang__nerve-bridge-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\nerve_bridge.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__89171__info-collector",
    "severity": "Low",
    "title": "skills__89171__info-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__892153301__ai-video-workflow",
    "severity": "Low",
    "title": "skills__892153301__ai-video-workflow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 12",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__89kpjddmtb-ui__stylebuddy",
    "severity": "Medium",
    "title": "skills__89kpjddmtb-ui__stylebuddy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\services\\weather.py；高风险 0，中风险 2，低风险 27",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__8cmblue-crypto__agent-connect",
    "severity": "Low",
    "title": "skills__8cmblue-crypto__agent-connect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__8cmblue-crypto__harnrss",
    "severity": "Low",
    "title": "skills__8cmblue-crypto__harnrss 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__8cmblue-crypto__maihh-agent-connect",
    "severity": "Low",
    "title": "skills__8cmblue-crypto__maihh-agent-connect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__8co__opentangl",
    "severity": "High",
    "title": "skills__8co__opentangl 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__8co__opentangl-plugin",
    "severity": "High",
    "title": "skills__8co__opentangl-plugin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__8co__review-evo",
    "severity": "Low",
    "title": "skills__8co__review-evo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__8co__undertow",
    "severity": "High",
    "title": "skills__8co__undertow 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__8k4-dev__8k4",
    "severity": "Medium",
    "title": "skills__8k4-dev__8k4 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\8k4.sh；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__8treenet__bloomberg-headlines",
    "severity": "Low",
    "title": "skills__8treenet__bloomberg-headlines 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__905583906__birthday-reminder-cn",
    "severity": "Medium",
    "title": "skills__905583906__birthday-reminder-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: assets\\notify.example.json；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__939951954__car-recommender",
    "severity": "Low",
    "title": "skills__939951954__car-recommender 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__94lfj__global-invoicing-research",
    "severity": "Low",
    "title": "skills__94lfj__global-invoicing-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__94lfj__vue3-ant-design-vue-component-skill",
    "severity": "Low",
    "title": "skills__94lfj__vue3-ant-design-vue-component-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__94w666__clawfeed-2",
    "severity": "Low",
    "title": "skills__94w666__clawfeed-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__954215110__auto-publisher",
    "severity": "Medium",
    "title": "skills__954215110__auto-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\auto_publisher.py；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__954215110__social-post-generator",
    "severity": "Medium",
    "title": "skills__954215110__social-post-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate_hashtags.py；高风险 0，中风险 1，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__954215110__video-generator-auto-post",
    "severity": "Medium",
    "title": "skills__954215110__video-generator-auto-post 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__963029755__cloud-ecs-bcc-comparison",
    "severity": "High",
    "title": "skills__963029755__cloud-ecs-bcc-comparison 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\compare_price.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__96441113__experience-model-builder",
    "severity": "Low",
    "title": "skills__96441113__experience-model-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__97fusky-droid__shihongbingtouzi",
    "severity": "Medium",
    "title": "skills__97fusky-droid__shihongbingtouzi 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__97fusky-droid__shihongbingtouzi__.opencode__skills__shihanbing-investment-analysis",
    "severity": "Low",
    "title": "skills__97fusky-droid__shihongbingtouzi__.opencode__skills__shihanbing-investment-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__983488728__docx-generator",
    "severity": "Medium",
    "title": "skills__983488728__docx-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__991200448__self-improving-agent-3-0-0",
    "severity": "High",
    "title": "skills__991200448__self-improving-agent-3-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 3，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__99percentgod__weather-1-0-0",
    "severity": "Low",
    "title": "skills__99percentgod__weather-1-0-0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__99rebels__agent-portability-checker",
    "severity": "Medium",
    "title": "skills__99rebels__agent-portability-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\audit.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__99rebels__context-window-tracker",
    "severity": "Medium",
    "title": "skills__99rebels__context-window-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__99rebels__github-growth-tracker",
    "severity": "High",
    "title": "skills__99rebels__github-growth-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\github_tracker.py；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__99rebels__rebels-gmail-checker",
    "severity": "Medium",
    "title": "skills__99rebels__rebels-gmail-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup_gmail.py；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__99rebels__rebels-invoice-extractor",
    "severity": "Medium",
    "title": "skills__99rebels__rebels-invoice-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\product-plan.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__99rebels__rebels-skill-polisher",
    "severity": "Medium",
    "title": "skills__99rebels__rebels-skill-polisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\rules.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__9penny__general-ocr-struct",
    "severity": "Low",
    "title": "skills__9penny__general-ocr-struct 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__9penny__repo-analysis",
    "severity": "Low",
    "title": "skills__9penny__repo-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__9starmax__cny-rate-calculator",
    "severity": "High",
    "title": "skills__9starmax__cny-rate-calculator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\cny_rate.py；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__9talk__plan-c",
    "severity": "Low",
    "title": "skills__9talk__plan-c 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__9talk__plan-i",
    "severity": "Low",
    "title": "skills__9talk__plan-i 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\pl-init.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__9talk__ts-interface-miner",
    "severity": "Low",
    "title": "skills__9talk__ts-interface-miner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-anand-91119__excalidraw",
    "severity": "High",
    "title": "skills__a-anand-91119__excalidraw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup.sh；高风险 1，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a-din__mockplus-reader",
    "severity": "Medium",
    "title": "skills__a-din__mockplus-reader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__self-improving-agent-cn-skip",
    "severity": "Medium",
    "title": "skills__a-din__self-improving-agent-cn-skip 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__xiaopi-agent-browser",
    "severity": "Medium",
    "title": "skills__a-din__xiaopi-agent-browser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__xiaopi-auto-updater",
    "severity": "Medium",
    "title": "skills__a-din__xiaopi-auto-updater 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\agent-guide.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__xiaopi-chrome-devtools",
    "severity": "Low",
    "title": "skills__a-din__xiaopi-chrome-devtools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-din__xiaopi-self-improving",
    "severity": "Medium",
    "title": "skills__a-din__xiaopi-self-improving 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__xiaopi-skill-finder-cn",
    "severity": "Low",
    "title": "skills__a-din__xiaopi-skill-finder-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.sh；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-din__xiaopi-skill-vetter",
    "severity": "Medium",
    "title": "skills__a-din__xiaopi-skill-vetter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-din__xiaopi-superdesign",
    "severity": "Low",
    "title": "skills__a-din__xiaopi-superdesign 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-i-r__mineru-pdf-extractor",
    "severity": "High",
    "title": "skills__a-i-r__mineru-pdf-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\online_file_step2_poll_result.sh；高风险 5，中风险 7，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a-moon-sudo__pingyin-weilaicheng-topic",
    "severity": "Medium",
    "title": "skills__a-moon-sudo__pingyin-weilaicheng-topic 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a-sumo__eywa",
    "severity": "High",
    "title": "skills__a-sumo__eywa 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a-vb__dataquery",
    "severity": "Low",
    "title": "skills__a-vb__dataquery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-vb__fullask",
    "severity": "Low",
    "title": "skills__a-vb__fullask 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a-vb__indexquery",
    "severity": "Low",
    "title": "skills__a-vb__indexquery 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a00012025__kryptogo-meme-trader",
    "severity": "High",
    "title": "skills__a00012025__kryptogo-meme-trader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\trending.sh；高风险 13，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a007mr__posthero",
    "severity": "Low",
    "title": "skills__a007mr__posthero 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1003916989-blip__wechat-monitor",
    "severity": "High",
    "title": "skills__a1003916989-blip__wechat-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: monitor.py；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a1003916989-blip__xiazun-memory-auto",
    "severity": "Low",
    "title": "skills__a1003916989-blip__xiazun-memory-auto 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup.sh；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1024708231__feishu-media-new",
    "severity": "Low",
    "title": "skills__a1024708231__feishu-media-new 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1024708231__video-director",
    "severity": "Low",
    "title": "skills__a1024708231__video-director 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1024708231__video-producer",
    "severity": "Medium",
    "title": "skills__a1024708231__video-producer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\produce.js；高风险 0，中风险 3，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a12591771__openclaw-agent-builder",
    "severity": "Medium",
    "title": "skills__a12591771__openclaw-agent-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a1437707640-ui__bb-browser-openclaw",
    "severity": "High",
    "title": "skills__a1437707640-ui__bb-browser-openclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a1437707640-ui__high-quality-info-sources",
    "severity": "Low",
    "title": "skills__a1437707640-ui__high-quality-info-sources 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1594834522-coder__polymarket-tradingskill",
    "severity": "Low",
    "title": "skills__a1594834522-coder__polymarket-tradingskill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\agent-api.md；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a1denvalu3__cashu",
    "severity": "Medium",
    "title": "skills__a1denvalu3__cashu 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a2888409__clipcat",
    "severity": "High",
    "title": "skills__a2888409__clipcat 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a2mus__doro-command-creator",
    "severity": "High",
    "title": "skills__a2mus__doro-command-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\examples.md；高风险 2，中风险 4，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a2mus__doro-command-creator__command-creator",
    "severity": "High",
    "title": "skills__a2mus__doro-command-creator__command-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\examples.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a2mus__doro-docker-essentials",
    "severity": "Medium",
    "title": "skills__a2mus__doro-docker-essentials 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a2mus__doro-email-to-calendar",
    "severity": "High",
    "title": "skills__a2mus__doro-email-to-calendar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: CONTRIBUTING.md；高风险 1，中风险 4，低风险 51",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a2mus__doro-git-essentials",
    "severity": "Low",
    "title": "skills__a2mus__doro-git-essentials 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a2mus__doro-git-secrets-scanner",
    "severity": "High",
    "title": "skills__a2mus__doro-git-secrets-scanner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a2mus__stitch-ui-designer",
    "severity": "Medium",
    "title": "skills__a2mus__stitch-ui-designer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a3165458__comfyui-video",
    "severity": "High",
    "title": "skills__a3165458__comfyui-video 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\tips.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a3273283__claw-ops-manager",
    "severity": "Medium",
    "title": "skills__a3273283__claw-ops-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\auto_audit.py；高风险 0，中风险 17，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a3273283__sih-ai-photo-changer",
    "severity": "Medium",
    "title": "skills__a3273283__sih-ai-photo-changer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\image_gen.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a3273283__sih-ai-photo-editor",
    "severity": "Medium",
    "title": "skills__a3273283__sih-ai-photo-editor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\sih_api.py；高风险 0，中风险 8，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a3273283__vwu-doubao",
    "severity": "Low",
    "title": "skills__a3273283__vwu-doubao 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-gemini",
    "severity": "Low",
    "title": "skills__a3273283__vwu-gemini 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-kling",
    "severity": "Low",
    "title": "skills__a3273283__vwu-kling 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-minimax",
    "severity": "Low",
    "title": "skills__a3273283__vwu-minimax 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-openai",
    "severity": "Low",
    "title": "skills__a3273283__vwu-openai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-sihai",
    "severity": "Low",
    "title": "skills__a3273283__vwu-sihai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-sora",
    "severity": "Low",
    "title": "skills__a3273283__vwu-sora 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-tts",
    "severity": "Low",
    "title": "skills__a3273283__vwu-tts 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-veo",
    "severity": "Low",
    "title": "skills__a3273283__vwu-veo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-chat.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a3273283__vwu-vidu",
    "severity": "High",
    "title": "skills__a3273283__vwu-vidu 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwu-video.sh；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a4205586__base-alpha-scanner",
    "severity": "Low",
    "title": "skills__a4205586__base-alpha-scanner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scan_narrative.py；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a4205586__coinank-openapi-skill",
    "severity": "Medium",
    "title": "skills__a4205586__coinank-openapi-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\资金费率.openapi.json；高风险 0，中风险 18，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a574824551__polecomic",
    "severity": "Medium",
    "title": "skills__a574824551__polecomic 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\call_video_api.py；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a5huynh__universal-checkout",
    "severity": "Medium",
    "title": "skills__a5huynh__universal-checkout 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a6191187__test1-232qe",
    "severity": "Low",
    "title": "skills__a6191187__test1-232qe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a6191187__test1-232qe11",
    "severity": "High",
    "title": "skills__a6191187__test1-232qe11 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 3，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__a638011__starlight-guild",
    "severity": "Low",
    "title": "skills__a638011__starlight-guild 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a64307410__ai-music-muse",
    "severity": "Medium",
    "title": "skills__a64307410__ai-music-muse 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a64307410__muse-ai",
    "severity": "Medium",
    "title": "skills__a64307410__muse-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a770438678__windows-screenshot-ocr",
    "severity": "Low",
    "title": "skills__a770438678__windows-screenshot-ocr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a799549967-lang__ai-contract-reviewer",
    "severity": "Low",
    "title": "skills__a799549967-lang__ai-contract-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a799549967-lang__content-repurposer-cn",
    "severity": "Low",
    "title": "skills__a799549967-lang__content-repurposer-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a799549967-lang__notion-content-hub-cn",
    "severity": "Low",
    "title": "skills__a799549967-lang__notion-content-hub-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: 操作说明.md；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a799549967-lang__smart-data-analyst",
    "severity": "Low",
    "title": "skills__a799549967-lang__smart-data-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a85012712__jw-data-analyst",
    "severity": "Low",
    "title": "skills__a85012712__jw-data-analyst 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a85012712__jw-feishu-suite",
    "severity": "Low",
    "title": "skills__a85012712__jw-feishu-suite 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a85012712__jw-task-scheduler",
    "severity": "Low",
    "title": "skills__a85012712__jw-task-scheduler 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a85012712__medical-report-query",
    "severity": "Low",
    "title": "skills__a85012712__medical-report-query 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a851445115__daily-market-insight",
    "severity": "Low",
    "title": "skills__a851445115__daily-market-insight 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a8ns__triburuby",
    "severity": "Low",
    "title": "skills__a8ns__triburuby 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__a925907195__stock-manage-skill",
    "severity": "Medium",
    "title": "skills__a925907195__stock-manage-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: stock_info.py；高风险 0，中风险 2，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__a950701zz__xiaohongshu-assistant-operator",
    "severity": "Medium",
    "title": "skills__a950701zz__xiaohongshu-assistant-operator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\persona-template.md；高风险 0，中风险 1，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-on-ai__agent-friendly-design",
    "severity": "Medium",
    "title": "skills__aa-on-ai__agent-friendly-design 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-on-ai__design-review",
    "severity": "Medium",
    "title": "skills__aa-on-ai__design-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\inspiration.md；高风险 0，中风险 1，低风险 16",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-on-ai__ui-polish-pass",
    "severity": "Low",
    "title": "skills__aa-on-ai__ui-polish-pass 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aa-on-ai__ux-baseline-check",
    "severity": "Medium",
    "title": "skills__aa-on-ai__ux-baseline-check 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-on-ai__web-animation-design",
    "severity": "High",
    "title": "skills__aa-on-ai__web-animation-design 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aa-on-ai__whimsical-design",
    "severity": "Medium",
    "title": "skills__aa-on-ai__whimsical-design 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-on-ai__world-build",
    "severity": "Medium",
    "title": "skills__aa-on-ai__world-build 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aa-rick__xqe-agent-team",
    "severity": "Medium",
    "title": "skills__aa-rick__xqe-agent-team 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaa2531349__ai-news-daily",
    "severity": "High",
    "title": "skills__aaa2531349__ai-news-daily 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\translator.py；高风险 1，中风险 2，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaa2531349__calorie",
    "severity": "High",
    "title": "skills__aaa2531349__calorie 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\calorie_calculator.py；高风险 1，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaa2531349__calorie1",
    "severity": "High",
    "title": "skills__aaa2531349__calorie1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\calorie_calculator.py；高风险 1，中风险 0，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaa2531349__video-transcribe",
    "severity": "High",
    "title": "skills__aaa2531349__video-transcribe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: transcribe.py；高风险 2，中风险 3，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaalenwow__ai-drama-review",
    "severity": "Medium",
    "title": "skills__aaalenwow__ai-drama-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 28",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaalenwow__ai-video-pro",
    "severity": "High",
    "title": "skills__aaalenwow__ai-video-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\provider_manager.py；高风险 3，中风险 3，低风险 18",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaalenwow__low-altitude-guardian",
    "severity": "Medium",
    "title": "skills__aaalenwow__low-altitude-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 20",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaalenwow__personal-guardian",
    "severity": "Low",
    "title": "skills__aaalenwow__personal-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\situation_assessor.py；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaazzzr__fb-page-manager",
    "severity": "High",
    "title": "skills__aaazzzr__fb-page-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\fb-post.js；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aabbcc456aa__hxl-code-reviewer",
    "severity": "High",
    "title": "skills__aabbcc456aa__hxl-code-reviewer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference\\node_mcp_server.md；高风险 1，中风险 2，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aadebuger__four-word-phrases",
    "severity": "Low",
    "title": "skills__aadebuger__four-word-phrases 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__android-transfer-skill",
    "severity": "High",
    "title": "skills__aadipapp__android-transfer-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\secure_transfer.py；高风险 1，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aadipapp__fsd-secure-skill",
    "severity": "Low",
    "title": "skills__aadipapp__fsd-secure-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\fsd_agent.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__mac-clean-skill",
    "severity": "Low",
    "title": "skills__aadipapp__mac-clean-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\cleanup.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__mac-power-tools",
    "severity": "Medium",
    "title": "skills__aadipapp__mac-power-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: power_tools.py；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aadipapp__neuralink-decoder",
    "severity": "Low",
    "title": "skills__aadipapp__neuralink-decoder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__optical-quantum-skill",
    "severity": "Low",
    "title": "skills__aadipapp__optical-quantum-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__space-autonomy-skill",
    "severity": "Low",
    "title": "skills__aadipapp__space-autonomy-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aadipapp__wavelet-worldmodel-skill",
    "severity": "Low",
    "title": "skills__aadipapp__wavelet-worldmodel-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaiccee__asr-file-transfer",
    "severity": "High",
    "title": "skills__aaiccee__asr-file-transfer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaiccee__chronic-disease-review",
    "severity": "Medium",
    "title": "skills__aaiccee__chronic-disease-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaiccee__critical-disease-review",
    "severity": "Medium",
    "title": "skills__aaiccee__critical-disease-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaiccee__med-record-gen",
    "severity": "Low",
    "title": "skills__aaiccee__med-record-gen 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\gen_initial_record.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaiccee__med-record-struct",
    "severity": "Low",
    "title": "skills__aaiccee__med-record-struct 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\struct_followup_record.py；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaiccee__u2-audio-file-transcriber",
    "severity": "Medium",
    "title": "skills__aaiccee__u2-audio-file-transcriber 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaiccee__u2-doc-parser",
    "severity": "Medium",
    "title": "skills__aaiccee__u2-doc-parser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\unidoc_parse.py；高风险 0，中风险 3，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaiccee__u2-tts",
    "severity": "High",
    "title": "skills__aaiccee__u2-tts 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaiccee__unidoc-parser",
    "severity": "Medium",
    "title": "skills__aaiccee__unidoc-parser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__aavegotchi-sprites-generator",
    "severity": "Medium",
    "title": "skills__aaigotchi__aavegotchi-sprites-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__aavegotchi-svg-custom",
    "severity": "Medium",
    "title": "skills__aaigotchi__aavegotchi-svg-custom 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\render-svg-custom.mjs；高风险 0，中风险 5，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__aavegotchi-traits",
    "severity": "High",
    "title": "skills__aaigotchi__aavegotchi-traits 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get-gotchi.js；高风险 1，中风险 2，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-3d-custom-render",
    "severity": "Medium",
    "title": "skills__aaigotchi__gotchi-3d-custom-render 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\render-hosted-custom.mjs；高风险 0，中风险 2，低风险 22",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-channeling",
    "severity": "High",
    "title": "skills__aaigotchi__gotchi-channeling 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: RELEASE_NOTES.md；高风险 1，中风险 5，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-dao-voting",
    "severity": "Medium",
    "title": "skills__aaigotchi__gotchi-dao-voting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\vote.sh；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-equip",
    "severity": "Medium",
    "title": "skills__aaigotchi__gotchi-equip 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 6，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-finder",
    "severity": "High",
    "title": "skills__aaigotchi__gotchi-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 6，中风险 3，低风险 12",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaigotchi__gotchi-pocket",
    "severity": "Medium",
    "title": "skills__aaigotchi__gotchi-pocket 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\pocket-command.py；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__model-brain",
    "severity": "Medium",
    "title": "skills__aaigotchi__model-brain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: clawhub.json；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__pet-me-master",
    "severity": "High",
    "title": "skills__aaigotchi__pet-me-master 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\telegram-notify.py；高风险 2，中风险 8，低风险 21",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaigotchi__pet-operator",
    "severity": "Medium",
    "title": "skills__aaigotchi__pet-operator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate-revoke-tx.sh；高风险 0，中风险 6，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__superrare-deploy",
    "severity": "Medium",
    "title": "skills__aaigotchi__superrare-deploy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\lib.sh；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaigotchi__superrare-mint",
    "severity": "Medium",
    "title": "skills__aaigotchi__superrare-mint 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\pin-metadata.mjs；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaitor__nevermined-payments",
    "severity": "High",
    "title": "skills__aaitor__nevermined-payments 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\x402-protocol.md；高风险 9，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aakarim__lix-agents",
    "severity": "Medium",
    "title": "skills__aakarim__lix-agents 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aakash2289__governance-inheritance",
    "severity": "Medium",
    "title": "skills__aakash2289__governance-inheritance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\policy-schema.md；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aakash2289__governclaw-middleware",
    "severity": "High",
    "title": "skills__aakash2289__governclaw-middleware 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aamish99__fundraiseup",
    "severity": "High",
    "title": "skills__aamish99__fundraiseup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aapanel__btpanel",
    "severity": "High",
    "title": "skills__aapanel__btpanel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\check_env.py；高风险 2，中风险 3，低风险 16",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aapanel__btpanel-files",
    "severity": "High",
    "title": "skills__aapanel__btpanel-files 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\download.py；高风险 3，中风险 2，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aapanel__btpanel-phpsite",
    "severity": "High",
    "title": "skills__aapanel__btpanel-phpsite 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\check_env.py；高风险 2，中风险 3，低风险 16",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaravgarg__cross-instance-relay",
    "severity": "Low",
    "title": "skills__aaravgarg__cross-instance-relay 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaron-he-zhu__alert-manager",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__alert-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__backlink-analyzer",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__backlink-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__competitor-analysis",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__competitor-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\battlecard-template.md；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__content-gap-analysis",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__content-gap-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__content-quality-auditor",
    "severity": "High",
    "title": "skills__aaron-he-zhu__content-quality-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__content-refresher",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__content-refresher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\refresh-templates.md；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__domain-authority-auditor",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__domain-authority-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\example-report.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__entity-optimizer",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__entity-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\knowledge-graph-guide.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__geo-content-optimizer",
    "severity": "High",
    "title": "skills__aaron-he-zhu__geo-content-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\quotable-content-examples.md；高风险 1，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__internal-linking-optimizer",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__internal-linking-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\linking-templates.md；高风险 0，中风险 4，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__keyword-research",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__keyword-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__memory-management",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__memory-management 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__meta-tags-optimizer",
    "severity": "High",
    "title": "skills__aaron-he-zhu__meta-tags-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\meta-tag-formulas.md；高风险 1，中风险 1，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__on-page-seo-auditor",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__on-page-seo-auditor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\bulk-audit-playbook.md；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__performance-reporter",
    "severity": "High",
    "title": "skills__aaron-he-zhu__performance-reporter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\report-templates.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__rank-tracker",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__rank-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__schema-markup-generator",
    "severity": "High",
    "title": "skills__aaron-he-zhu__schema-markup-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\validation-guide.md；高风险 1，中风险 1，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__seo-content-writer",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__seo-content-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\seo-writing-checklist.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-he-zhu__serp-analysis",
    "severity": "High",
    "title": "skills__aaron-he-zhu__serp-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\serp-feature-taxonomy.md；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaron-he-zhu__technical-seo-checker",
    "severity": "Medium",
    "title": "skills__aaron-he-zhu__technical-seo-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\llm-crawler-handling.md；高风险 0，中风险 7，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaron-schnieder__agentlux",
    "severity": "High",
    "title": "skills__aaron-schnieder__agentlux 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronahadi23__rhetra-taxguard",
    "severity": "Low",
    "title": "skills__aaronahadi23__rhetra-taxguard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: check-trade.js；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaronahadi23__taxguard-skill",
    "severity": "Medium",
    "title": "skills__aaronahadi23__taxguard-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: signup.js；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronbatchelder__shellmail",
    "severity": "Medium",
    "title": "skills__aaronbatchelder__shellmail 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: skill.json；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronchartier__inkjet",
    "severity": "Medium",
    "title": "skills__aaronchartier__inkjet 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaroncxxx__empire-architecture",
    "severity": "Medium",
    "title": "skills__aaroncxxx__empire-architecture 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: empire-architecture\\lite\\knowledge\\local_rag.py；高风险 0，中风险 1，低风险 45",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaroncxxx__how-much-token-did-this-chat-used",
    "severity": "Medium",
    "title": "skills__aaroncxxx__how-much-token-did-this-chat-used 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaroncxxx__mimotts25",
    "severity": "High",
    "title": "skills__aaroncxxx__mimotts25 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tts.py；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronjager92__amap-geoservice",
    "severity": "High",
    "title": "skills__aaronjager92__amap-geoservice 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\amap_geo.py；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronjager92__hefeng-weather",
    "severity": "High",
    "title": "skills__aaronjager92__hefeng-weather 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\weather_query.py；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronjager92__markdown-knowledge",
    "severity": "Medium",
    "title": "skills__aaronjager92__markdown-knowledge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\PROJECT.md；高风险 0，中风险 8，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronjager92__minimax-voicereponse-feishu",
    "severity": "High",
    "title": "skills__aaronjager92__minimax-voicereponse-feishu 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\voice_reply.py；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronjager92__openclaw-self-guard",
    "severity": "Medium",
    "title": "skills__aaronjager92__openclaw-self-guard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get_version.py；高风险 0，中风险 5，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronjmars__agent-credit",
    "severity": "High",
    "title": "skills__aaronjmars__agent-credit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 4，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronjmars__iterative-code-evolution",
    "severity": "Medium",
    "title": "skills__aaronjmars__iterative-code-evolution 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronjmars__soul-md",
    "severity": "Low",
    "title": "skills__aaronjmars__soul-md 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: data\\_GUIDE.md；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaronkow__openbotclaw",
    "severity": "High",
    "title": "skills__aaronkow__openbotclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 5，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronllee__dex-quote",
    "severity": "High",
    "title": "skills__aaronllee__dex-quote 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\dex_quote.py；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronllee__easy-swap",
    "severity": "High",
    "title": "skills__aaronllee__easy-swap 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\easy_swap.py；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronn__apple-media",
    "severity": "Medium",
    "title": "skills__aaronn__apple-media 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronn__openclaw-huckleberry-skill",
    "severity": "High",
    "title": "skills__aaronn__openclaw-huckleberry-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\hb.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronn__openclaw-search-tool",
    "severity": "Medium",
    "title": "skills__aaronn__openclaw-search-tool 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronstuart__beijing-signed-price-tracker",
    "severity": "High",
    "title": "skills__aaronstuart__beijing-signed-price-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tracker.js；高风险 1，中风险 1，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronstuart__tracker-latest-run-monitor",
    "severity": "Medium",
    "title": "skills__aaronstuart__tracker-latest-run-monitor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\monitor-tracker-runs.js；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaronwang1980__opencli-skill",
    "severity": "High",
    "title": "skills__aaronwang1980__opencli-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronx-hu__memory-lancedb-pro",
    "severity": "High",
    "title": "skills__aaronx-hu__memory-lancedb-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronxx__browser-auto-download",
    "severity": "High",
    "title": "skills__aaronxx__browser-auto-download 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 9，低风险 0",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaronxx__house-prediction",
    "severity": "Low",
    "title": "skills__aaronxx__house-prediction 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aaronzoe__video-generator-seedance",
    "severity": "Medium",
    "title": "skills__aaronzoe__video-generator-seedance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\generate_video.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aas-ee__open-websearch",
    "severity": "Medium",
    "title": "skills__aas-ee__open-websearch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\setup.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aas-ee__openwebsearch",
    "severity": "Medium",
    "title": "skills__aas-ee__openwebsearch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\setup.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aatmaan1__agent-orchestrator",
    "severity": "Medium",
    "title": "skills__aatmaan1__agent-orchestrator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\sub-agent-templates.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aatmaan1__communication-skill",
    "severity": "Low",
    "title": "skills__aatmaan1__communication-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aatrooox__z-card-image",
    "severity": "Medium",
    "title": "skills__aatrooox__z-card-image 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\render_x_like_posts.py；高风险 0，中风险 3，低风险 15",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aaugoustis__human-psychologist",
    "severity": "High",
    "title": "skills__aaugoustis__human-psychologist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaureli__air-train-ev",
    "severity": "High",
    "title": "skills__aaureli__air-train-ev 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\navitia.py；高风险 3，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aaureli__air-train-ev-alias",
    "severity": "Low",
    "title": "skills__aaureli__air-train-ev-alias 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__ab-naidu__global-nuclear-brief",
    "severity": "Low",
    "title": "skills__ab-naidu__global-nuclear-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: bin\\nuclear_brief.py；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__ababen__add-pi-events-d1",
    "severity": "High",
    "title": "skills__ababen__add-pi-events-d1 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abakermi__gumroad-admin",
    "severity": "Low",
    "title": "skills__abakermi__gumroad-admin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abakermi__kanbanflow-skill",
    "severity": "Low",
    "title": "skills__abakermi__kanbanflow-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abakermi__lemonsqueezy-admin",
    "severity": "Medium",
    "title": "skills__abakermi__lemonsqueezy-admin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abakermi__openclaw-postsyncer",
    "severity": "Low",
    "title": "skills__abakermi__openclaw-postsyncer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abakermi__product-hunt-launch",
    "severity": "Medium",
    "title": "skills__abakermi__product-hunt-launch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abcd784253626__enhanced-permissions",
    "severity": "Medium",
    "title": "skills__abcd784253626__enhanced-permissions 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: PUBLISH-TO-CLAWHUB.md；高风险 0，中风险 7，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abclark__strava-python",
    "severity": "Medium",
    "title": "skills__abclark__strava-python 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abcnull__mac-trans",
    "severity": "Low",
    "title": "skills__abcnull__mac-trans 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abcxz__conviction-fm",
    "severity": "Low",
    "title": "skills__abcxz__conviction-fm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abczsl520__browser-use-pro",
    "severity": "Medium",
    "title": "skills__abczsl520__browser-use-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abczsl520__bug-audit",
    "severity": "High",
    "title": "skills__abczsl520__bug-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\modules.md；高风险 1，中风险 3，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abczsl520__codex-review",
    "severity": "Medium",
    "title": "skills__abczsl520__codex-review 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abczsl520__debug-methodology",
    "severity": "Medium",
    "title": "skills__abczsl520__debug-methodology 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abczsl520__game-quality-gates",
    "severity": "Medium",
    "title": "skills__abczsl520__game-quality-gates 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abczsl520__memory-cn",
    "severity": "Low",
    "title": "skills__abczsl520__memory-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: diagnose.sh；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abczsl520__nodejs-project-arch",
    "severity": "Medium",
    "title": "skills__abczsl520__nodejs-project-arch 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 4，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdallah349193__abdullahi-agent",
    "severity": "Medium",
    "title": "skills__abdallah349193__abdullahi-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\shared\\storage\\crypto.js；高风险 0，中风险 7，低风险 17",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdelkrim__atlassian-bitbucket-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__atlassian-bitbucket-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 4，中风险 3，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__atlassian-jira-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__atlassian-jira-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\jira.mjs；高风险 3，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__hivebrite-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__hivebrite-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\hivebrite.mjs；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__hubspot-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__hubspot-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\hubspot.mjs；高风险 3，中风险 3，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__m365-task-manager-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__m365-task-manager-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\m365-todo.mjs；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__openclaw-skill-m365-task-manager-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__openclaw-skill-m365-task-manager-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\m365-todo.mjs；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__openproject-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__openproject-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\openproject.mjs；高风险 3，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__sharepoint-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__sharepoint-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelkrim__x-twitter-by-altf1be",
    "severity": "High",
    "title": "skills__abdelkrim__x-twitter-by-altf1be 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\xpost.mjs；高风险 3，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdelsfane__opena2a-security",
    "severity": "High",
    "title": "skills__abdelsfane__opena2a-security 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abderrahman-jalled__improve-relationships",
    "severity": "Medium",
    "title": "skills__abderrahman-jalled__improve-relationships 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdhilabs__agent-credit-system",
    "severity": "High",
    "title": "skills__abdhilabs__agent-credit-system 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: DEMO.md；高风险 9，中风险 17，低风险 33",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdhilabs__config-guardian",
    "severity": "Medium",
    "title": "skills__abdhilabs__config-guardian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\validate_config.sh；高风险 0，中风险 2，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdhilabs__karmabank",
    "severity": "High",
    "title": "skills__abdhilabs__karmabank 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\cli\\adapters\\moltbook.ts；高风险 3，中风险 3，低风险 29",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdhilabs__karmabank-minimal",
    "severity": "Medium",
    "title": "skills__abdhilabs__karmabank-minimal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdhilabs__karmabank-usdc",
    "severity": "Medium",
    "title": "skills__abdhilabs__karmabank-usdc 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdhilabs__suiroll",
    "severity": "High",
    "title": "skills__abdhilabs__suiroll 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\utils\\signer.ts；高风险 5，中风险 3，低风险 17",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdhilabs__suiroll__minimal",
    "severity": "Low",
    "title": "skills__abdhilabs__suiroll__minimal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdhilabs__suiroll__minimal2",
    "severity": "Low",
    "title": "skills__abdhilabs__suiroll__minimal2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdhilabs__suiroll__minimal3",
    "severity": "Low",
    "title": "skills__abdhilabs__suiroll__minimal3 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdhilabs__suiroll__minimal4",
    "severity": "Low",
    "title": "skills__abdhilabs__suiroll__minimal4 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdhilabs__suiroll__test-publish",
    "severity": "Medium",
    "title": "skills__abdhilabs__suiroll__test-publish 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdul-karim-mia__adobe-automator",
    "severity": "Low",
    "title": "skills__abdul-karim-mia__adobe-automator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdul-karim-mia__gumroad-pro",
    "severity": "High",
    "title": "skills__abdul-karim-mia__gumroad-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\gumroad-pro.js；高风险 3，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdul-karim-mia__photoshop-automator",
    "severity": "Low",
    "title": "skills__abdul-karim-mia__photoshop-automator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdul-karim-mia__terabox-link-extractor",
    "severity": "High",
    "title": "skills__abdul-karim-mia__terabox-link-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\extract.js；高风险 1，中风险 5，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdullah4ai__apple-developer-toolkit",
    "severity": "High",
    "title": "skills__abdullah4ai__apple-developer-toolkit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 1，低风险 54",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdullah4ai__apple-developer-toolkit__skills__ios-rules",
    "severity": "Medium",
    "title": "skills__abdullah4ai__apple-developer-toolkit__skills__ios-rules 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: rules\\feedback_states.md；高风险 0，中风险 1，低风险 39",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdullah4ai__apple-developer-toolkit__skills__swiftui-guides",
    "severity": "Low",
    "title": "skills__abdullah4ai__apple-developer-toolkit__skills__swiftui-guides 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: guides\\text-formatting.md；高风险 0，中风险 0，低风险 14",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdullah4ai__council-builder",
    "severity": "Low",
    "title": "skills__abdullah4ai__council-builder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\init-council.sh；高风险 0，中风险 0，低风险 23",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdullah4ai__mckinsey-research",
    "severity": "Medium",
    "title": "skills__abdullah4ai__mckinsey-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 22",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdullah4ai__openclaw-watchdog",
    "severity": "High",
    "title": "skills__abdullah4ai__openclaw-watchdog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\watchdog.py；高风险 2，中风险 6，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdullah4ai__openclaw-watchdog__openclaw-watchdog",
    "severity": "High",
    "title": "skills__abdullah4ai__openclaw-watchdog__openclaw-watchdog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\watchdog.py；高风险 1，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdullah4ai__personal-shopper",
    "severity": "Medium",
    "title": "skills__abdullah4ai__personal-shopper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\diamond-methodology.md；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdullah4ai__prompt-architect",
    "severity": "Low",
    "title": "skills__abdullah4ai__prompt-architect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdullah4ai__visual-prompt-engine",
    "severity": "Medium",
    "title": "skills__abdullah4ai__visual-prompt-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdullah944__threat-intel",
    "severity": "Medium",
    "title": "skills__abdullah944__threat-intel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.py；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abdullahsarumi16-stack__youtube-shorts-niche-research",
    "severity": "Low",
    "title": "skills__abdullahsarumi16-stack__youtube-shorts-niche-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abdulmejidshemsuawel__postsyncer",
    "severity": "High",
    "title": "skills__abdulmejidshemsuawel__postsyncer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abdur-rahmaanj__shopyo",
    "severity": "Medium",
    "title": "skills__abdur-rahmaanj__shopyo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abe238__adversarial-prompting",
    "severity": "Low",
    "title": "skills__abe238__adversarial-prompting 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abe238__youtube-summarizer",
    "severity": "Medium",
    "title": "skills__abe238__youtube-summarizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abedmir31__job-applications",
    "severity": "Medium",
    "title": "skills__abedmir31__job-applications 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tailor_resume.py；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeljseba__makeovern",
    "severity": "Low",
    "title": "skills__abeljseba__makeovern 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-audio-transcribe",
    "severity": "High",
    "title": "skills__abeltennyson__abe-audio-transcribe 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\assemblyai.mjs；高风险 1，中风险 1，低风险 17",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-backtest-expert",
    "severity": "Low",
    "title": "skills__abeltennyson__abe-backtest-expert 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-baidu-scholar-search",
    "severity": "Medium",
    "title": "skills__abeltennyson__abe-baidu-scholar-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: baidu_scholar_search.sh；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__abe-baidu-web-search",
    "severity": "High",
    "title": "skills__abeltennyson__abe-baidu-web-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\search.js；高风险 2，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-browser-automation",
    "severity": "High",
    "title": "skills__abeltennyson__abe-browser-automation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: setup.json；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-clawddocs",
    "severity": "High",
    "title": "skills__abeltennyson__abe-clawddocs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-clawflows",
    "severity": "High",
    "title": "skills__abeltennyson__abe-clawflows 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-clawlist",
    "severity": "Low",
    "title": "skills__abeltennyson__abe-clawlist 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-clawmegle",
    "severity": "Medium",
    "title": "skills__abeltennyson__abe-clawmegle 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__abe-clawshot",
    "severity": "High",
    "title": "skills__abeltennyson__abe-clawshot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-crawl-for-ai",
    "severity": "Medium",
    "title": "skills__abeltennyson__abe-crawl-for-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\crawl4ai.js；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__abe-create-content",
    "severity": "Low",
    "title": "skills__abeltennyson__abe-create-content 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-creative-thought-partner",
    "severity": "Low",
    "title": "skills__abeltennyson__abe-creative-thought-partner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-critical-article-writer",
    "severity": "High",
    "title": "skills__abeltennyson__abe-critical-article-writer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-deep-research",
    "severity": "Low",
    "title": "skills__abeltennyson__abe-deep-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__abe-dexter",
    "severity": "High",
    "title": "skills__abeltennyson__abe-dexter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abe-dgr",
    "severity": "Medium",
    "title": "skills__abeltennyson__abe-dgr 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__abe-diet-tracker",
    "severity": "High",
    "title": "skills__abeltennyson__abe-diet-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get_food_nutrition.py；高风险 2，中风险 1，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-church",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-church 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-council",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-council 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-directory",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-directory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-evaluation",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-evaluation 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-orchestration",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-orchestration 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-orchestrator",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-orchestrator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\sub-agent-templates.md；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-reach",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-reach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-selfie",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-selfie 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\selfie.py；高风险 1，中风险 4，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-task-manager",
    "severity": "High",
    "title": "skills__abeltennyson__abel-agent-task-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\task_parser.py；高风险 3，中风险 0，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abeltennyson__abel-agent-team-orchestration",
    "severity": "Low",
    "title": "skills__abeltennyson__abel-agent-team-orchestration 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\team-setup.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeltennyson__auto-updaters",
    "severity": "Medium",
    "title": "skills__abeltennyson__auto-updaters 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__clawdhubs",
    "severity": "Medium",
    "title": "skills__abeltennyson__clawdhubs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__humanizers",
    "severity": "Medium",
    "title": "skills__abeltennyson__humanizers 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__weather-hub",
    "severity": "Medium",
    "title": "skills__abeltennyson__weather-hub 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeltennyson__youtube-watchers",
    "severity": "Medium",
    "title": "skills__abeltennyson__youtube-watchers 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abendeng__zk-cloze-format",
    "severity": "Low",
    "title": "skills__abendeng__zk-cloze-format 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abeperl__codex-bridge",
    "severity": "Medium",
    "title": "skills__abeperl__codex-bridge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: bridge.py；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeperl__sefaria-mcp",
    "severity": "Medium",
    "title": "skills__abeperl__sefaria-mcp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abeperl__torah-scholar",
    "severity": "Medium",
    "title": "skills__abeperl__torah-scholar 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abgohel__canva",
    "severity": "High",
    "title": "skills__abgohel__canva 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 2，中风险 3，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abgohel__meow-finder",
    "severity": "Medium",
    "title": "skills__abgohel__meow-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhayjb__arrivelah",
    "severity": "Medium",
    "title": "skills__abhayjb__arrivelah 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: bus-arrival.sh；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhayjb__buslah",
    "severity": "Medium",
    "title": "skills__abhayjb__buslah 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: bus-arrival.sh；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhayjb__mem0",
    "severity": "Medium",
    "title": "skills__abhayjb__mem0 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\mem0-search.js；高风险 0，中风险 5，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhi152003__maxxit-lazy-trading",
    "severity": "High",
    "title": "skills__abhi152003__maxxit-lazy-trading 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: vwap-strategy.py；高风险 6，中风险 0，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhi152003__salon-skill",
    "severity": "Low",
    "title": "skills__abhi152003__salon-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhi152003__tally-skill",
    "severity": "Medium",
    "title": "skills__abhi152003__tally-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhibavishi__azure-image-gen",
    "severity": "Low",
    "title": "skills__abhibavishi__azure-image-gen 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhibavishi__reepl",
    "severity": "High",
    "title": "skills__abhibavishi__reepl 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhibavishi__verk",
    "severity": "High",
    "title": "skills__abhibavishi__verk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\verk-cli.mjs；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhibavishi__wp-to-static",
    "severity": "High",
    "title": "skills__abhibavishi__wp-to-static 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhijitjavelin__zeroid",
    "severity": "Low",
    "title": "skills__abhijitjavelin__zeroid 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhinas90__claude-code-mastery-guide",
    "severity": "Low",
    "title": "skills__abhinas90__claude-code-mastery-guide 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: templates\\03-explain-code.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhinas90__claude-code-mastery-pro",
    "severity": "Low",
    "title": "skills__abhinas90__claude-code-mastery-pro 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: templates\\03-explain-code.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhinas90__claude-code-memory-kit",
    "severity": "Medium",
    "title": "skills__abhinas90__claude-code-memory-kit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: TROUBLESHOOTING.md；高风险 0，中风险 1，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhinas90__multi-agent-deployment",
    "severity": "Medium",
    "title": "skills__abhinas90__multi-agent-deployment 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhinas90__rag-pipeline-starter",
    "severity": "Low",
    "title": "skills__abhinas90__rag-pipeline-starter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhinavjp__ms-outlook-teams-assistant",
    "severity": "Medium",
    "title": "skills__abhinavjp__ms-outlook-teams-assistant 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scan_all.py；高风险 0，中风险 2，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhinavpgagi__toingg-create-campaign",
    "severity": "Medium",
    "title": "skills__abhinavpgagi__toingg-create-campaign 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 7，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhinavpgagi__toingg-skill",
    "severity": "Medium",
    "title": "skills__abhinavpgagi__toingg-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\send_whatsapp_templates.py；高风险 0，中风险 4，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhiramee08b021__outlook-email",
    "severity": "Medium",
    "title": "skills__abhiramee08b021__outlook-email 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhishek-official1__clawvox",
    "severity": "High",
    "title": "skills__abhishek-official1__clawvox 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\voices.sh；高风险 3，中风险 9，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishek203__pidrive",
    "severity": "High",
    "title": "skills__abhishek203__pidrive 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishekj9621__ad-intelligence-skill",
    "severity": "High",
    "title": "skills__abhishekj9621__ad-intelligence-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\google.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishekj9621__ad-platform-tracker-skill",
    "severity": "Low",
    "title": "skills__abhishekj9621__ad-platform-tracker-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\meta-tracker.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abhishekj9621__ads-manager-claw",
    "severity": "High",
    "title": "skills__abhishekj9621__ads-manager-claw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\google-ads.md；高风险 1，中风险 4，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishekj9621__ecommerce-manager-claw",
    "severity": "High",
    "title": "skills__abhishekj9621__ecommerce-manager-claw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishekj9621__engagement-analytics-skill",
    "severity": "Medium",
    "title": "skills__abhishekj9621__engagement-analytics-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\website-analytics.md；高风险 0，中风险 1，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhishekj9621__market-intelligence-claw",
    "severity": "Medium",
    "title": "skills__abhishekj9621__market-intelligence-claw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\setup.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhishekj9621__meta-ad-spy",
    "severity": "High",
    "title": "skills__abhishekj9621__meta-ad-spy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abhishekj9621__web-scraper-skill",
    "severity": "Medium",
    "title": "skills__abhishekj9621__web-scraper-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abhishekmishragithub__smallest-ai",
    "severity": "High",
    "title": "skills__abhishekmishragithub__smallest-ai 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tts.py；高风险 3，中风险 5，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abigale-cyber__case-writer-hybrid",
    "severity": "Medium",
    "title": "skills__abigale-cyber__case-writer-hybrid 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-feishu-bitable-sync",
    "severity": "Medium",
    "title": "skills__abigale-cyber__content-system-feishu-bitable-sync 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: runtime.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-generate-image",
    "severity": "Medium",
    "title": "skills__abigale-cyber__content-system-generate-image 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-humanizer-zh",
    "severity": "Medium",
    "title": "skills__abigale-cyber__content-system-humanizer-zh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-news-aggregator-skill",
    "severity": "High",
    "title": "skills__abigale-cyber__content-system-news-aggregator-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\fetch_news.py；高风险 1，中风险 5，低风险 16",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-tavily-research",
    "severity": "High",
    "title": "skills__abigale-cyber__content-system-tavily-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-wechat-article-extractor-skill",
    "severity": "Medium",
    "title": "skills__abigale-cyber__content-system-wechat-article-extractor-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 3，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-wechat-formatter",
    "severity": "Medium",
    "title": "skills__abigale-cyber__content-system-wechat-formatter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__content-system-wechat-studio",
    "severity": "High",
    "title": "skills__abigale-cyber__content-system-wechat-studio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: frontend\\app.js；高风险 2，中风险 6，低风险 40",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abigale-cyber__feishu-user-auth",
    "severity": "Medium",
    "title": "skills__abigale-cyber__feishu-user-auth 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__news-collect",
    "severity": "Medium",
    "title": "skills__abigale-cyber__news-collect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: runtime.py；高风险 0，中风险 2，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__topic-research",
    "severity": "High",
    "title": "skills__abigale-cyber__topic-research 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abigale-cyber__wechat-collect",
    "severity": "Medium",
    "title": "skills__abigale-cyber__wechat-collect 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abigale-cyber__wechat-report",
    "severity": "Medium",
    "title": "skills__abigale-cyber__wechat-report 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: runtime.py；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abinww__clinical-data-extractor",
    "severity": "Medium",
    "title": "skills__abinww__clinical-data-extractor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abiorh001__omniclaw",
    "severity": "High",
    "title": "skills__abiorh001__omniclaw 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abishekdharshan__clawhub-zerion-api",
    "severity": "Low",
    "title": "skills__abishekdharshan__clawhub-zerion-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abishekdharshan__zerion-api",
    "severity": "Medium",
    "title": "skills__abishekdharshan__zerion-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abishekdharshan__zerion-api-mcp",
    "severity": "Medium",
    "title": "skills__abishekdharshan__zerion-api-mcp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abishekdharshan__zerion-api-skill",
    "severity": "Medium",
    "title": "skills__abishekdharshan__zerion-api-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abk234__searxng",
    "severity": "Medium",
    "title": "skills__abk234__searxng 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__ableitung__openclaw-bahn",
    "severity": "Medium",
    "title": "skills__ableitung__openclaw-bahn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\lib\\sources\\iris.mjs；高风险 0，中风险 2，低风险 19",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abo-hub__skill-tracker",
    "severity": "Medium",
    "title": "skills__abo-hub__skill-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aboutyao__cognitive-brain",
    "severity": "High",
    "title": "skills__aboutyao__cognitive-brain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\api\\server.js；高风险 4，中风险 29，低风险 61",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aboutyao__super-brain",
    "severity": "Medium",
    "title": "skills__aboutyao__super-brain 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 11",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aboutyao__team-collab-skill",
    "severity": "Low",
    "title": "skills__aboutyao__team-collab-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 17",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abrahamventura__roofing-knowledge-mentor",
    "severity": "Low",
    "title": "skills__abrahamventura__roofing-knowledge-mentor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\quick_validate.py；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__absolins__openclaw-agent-feishu-onboarding",
    "severity": "Low",
    "title": "skills__absolins__openclaw-agent-feishu-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstract-sum__nutrition-tracker",
    "severity": "Low",
    "title": "skills__abstract-sum__nutrition-tracker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\nutrition_log.sh；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstract-sum__obsidian-clip",
    "severity": "Medium",
    "title": "skills__abstract-sum__obsidian-clip 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__join-crabla",
    "severity": "Medium",
    "title": "skills__abstrct__join-crabla 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__play-structs",
    "severity": "Medium",
    "title": "skills__abstrct__play-structs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-building",
    "severity": "Low",
    "title": "skills__abstrct__structs-building 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstrct__structs-combat",
    "severity": "Medium",
    "title": "skills__abstrct__structs-combat 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-diplomacy",
    "severity": "Medium",
    "title": "skills__abstrct__structs-diplomacy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-economy",
    "severity": "Medium",
    "title": "skills__abstrct__structs-economy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-energy",
    "severity": "Medium",
    "title": "skills__abstrct__structs-energy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-exploration",
    "severity": "Low",
    "title": "skills__abstrct__structs-exploration 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstrct__structs-guild",
    "severity": "Medium",
    "title": "skills__abstrct__structs-guild 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-guild-stack",
    "severity": "Low",
    "title": "skills__abstrct__structs-guild-stack 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstrct__structs-mining",
    "severity": "Medium",
    "title": "skills__abstrct__structs-mining 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structs-onboarding",
    "severity": "High",
    "title": "skills__abstrct__structs-onboarding 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abstrct__structs-power",
    "severity": "Low",
    "title": "skills__abstrct__structs-power 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstrct__structs-reconnaissance",
    "severity": "Low",
    "title": "skills__abstrct__structs-reconnaissance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abstrct__structs-streaming",
    "severity": "Medium",
    "title": "skills__abstrct__structs-streaming 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abstrct__structsd-install",
    "severity": "High",
    "title": "skills__abstrct__structsd-install 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 1",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abtdomain__domain-generator",
    "severity": "Low",
    "title": "skills__abtdomain__domain-generator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abtdomain__domain-keyword-intelligence",
    "severity": "Medium",
    "title": "skills__abtdomain__domain-keyword-intelligence 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abu-shotai__ai-video-remix",
    "severity": "High",
    "title": "skills__abu-shotai__ai-video-remix 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\setup.md；高风险 2，中风险 1，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__abuiles__buy-activewear",
    "severity": "Medium",
    "title": "skills__abuiles__buy-activewear 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__buy-apparel",
    "severity": "Medium",
    "title": "skills__abuiles__buy-apparel 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__buy-bread",
    "severity": "Medium",
    "title": "skills__abuiles__buy-bread 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__buy-coffee",
    "severity": "Medium",
    "title": "skills__abuiles__buy-coffee 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__buy-cookies",
    "severity": "Medium",
    "title": "skills__abuiles__buy-cookies 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__lobsterstores",
    "severity": "Medium",
    "title": "skills__abuiles__lobsterstores 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abuiles__shopify-directory",
    "severity": "Medium",
    "title": "skills__abuiles__shopify-directory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abycloudcn-jpg__dream-journal",
    "severity": "Low",
    "title": "skills__abycloudcn-jpg__dream-journal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__abyousef739__clawskillshield",
    "severity": "Medium",
    "title": "skills__abyousef739__clawskillshield 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__abysscat-yj__prompt-design-tuning",
    "severity": "Low",
    "title": "skills__abysscat-yj__prompt-design-tuning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__ac-pill__roast-games",
    "severity": "Low",
    "title": "skills__ac-pill__roast-games 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acailic__tweetnugget",
    "severity": "Medium",
    "title": "skills__acailic__tweetnugget 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 0，中风险 2，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__acastellana__genlayer",
    "severity": "Medium",
    "title": "skills__acastellana__genlayer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: use-cases.md；高风险 0，中风险 2，低风险 10",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__acastellana__genlayer-dev",
    "severity": "High",
    "title": "skills__acastellana__genlayer-dev 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 5，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acastellana__skill-publisher-claw-skill",
    "severity": "High",
    "title": "skills__acastellana__skill-publisher-claw-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: validate-links.sh；高风险 1，中风险 10，低风险 8",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acastellana__telebiz-mcp-skill",
    "severity": "High",
    "title": "skills__acastellana__telebiz-mcp-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: src\\http-server.ts；高风险 2，中风险 7，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acastellana__vpn-rotate-skill",
    "severity": "High",
    "title": "skills__acastellana__vpn-rotate-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup.sh；高风险 1，中风险 7，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acautomata__skill-improvement",
    "severity": "High",
    "title": "skills__acautomata__skill-improvement 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 2，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__accelerated-ideas__useresume",
    "severity": "High",
    "title": "skills__accelerated-ideas__useresume 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acceleratel__investment-advisor-zhang-openclaw-cn",
    "severity": "High",
    "title": "skills__acceleratel__investment-advisor-zhang-openclaw-cn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 7",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__accidwar__ppt-compress",
    "severity": "Medium",
    "title": "skills__accidwar__ppt-compress 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\compress.py；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__accidwar__youtube-hq-downloader",
    "severity": "High",
    "title": "skills__accidwar__youtube-hq-downloader 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: download.sh；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__accolver__redshift",
    "severity": "High",
    "title": "skills__accolver__redshift 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acczdy__self-learning",
    "severity": "High",
    "title": "skills__acczdy__self-learning 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 2，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aces1up__ad-engine",
    "severity": "High",
    "title": "skills__aces1up__ad-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: FB_DEPLOYMENT_SPEC.md；高风险 3，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aces1up__ad-forge",
    "severity": "High",
    "title": "skills__aces1up__ad-forge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: setup.sh；高风险 1，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aces1up__apify-keys",
    "severity": "High",
    "title": "skills__aces1up__apify-keys 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\get_key.py；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aces1up__comment-forge",
    "severity": "High",
    "title": "skills__aces1up__comment-forge 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: comment_forge.py；高风险 2，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aces1up__redditrank",
    "severity": "High",
    "title": "skills__aces1up__redditrank 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: redditrank_tui\\config.py；高风险 1，中风险 3，低风险 14",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__aceundefeated__aj-github",
    "severity": "Low",
    "title": "skills__aceundefeated__aj-github 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aceundefeated__aj-gog",
    "severity": "Low",
    "title": "skills__aceundefeated__aj-gog 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aceundefeated__aj-obsidian",
    "severity": "Low",
    "title": "skills__aceundefeated__aj-obsidian 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__aceundefeated__aj-openai-whisper",
    "severity": "Medium",
    "title": "skills__aceundefeated__aj-openai-whisper 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__aceundefeated__aj-self-improving-agent",
    "severity": "High",
    "title": "skills__aceundefeated__aj-self-improving-agent 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 3，低风险 9",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acfff__retire-age",
    "severity": "Low",
    "title": "skills__acfff__retire-age 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acfranzen__glance",
    "severity": "High",
    "title": "skills__acfranzen__glance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: widget-sdk.md；高风险 3，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__achals-iglu__dokploy-api",
    "severity": "High",
    "title": "skills__achals-iglu__dokploy-api 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: modules\\settings.md；高风险 10，中风险 4，低风险 36",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__achals-iglu__omarchy",
    "severity": "Medium",
    "title": "skills__achals-iglu__omarchy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__achals-iglu__remember-me",
    "severity": "Low",
    "title": "skills__achals-iglu__remember-me 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__achievejia__wechat-ip-checker",
    "severity": "Low",
    "title": "skills__achievejia__wechat-ip-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__achievejia__wechat-xhs-publisher",
    "severity": "Low",
    "title": "skills__achievejia__wechat-xhs-publisher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__achilles1089__pentagonal",
    "severity": "High",
    "title": "skills__achilles1089__pentagonal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 5",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__achilles2200ai-sys__agentreach",
    "severity": "Medium",
    "title": "skills__achilles2200ai-sys__agentreach 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__achilles2200ai-sys__ai-reach-kit",
    "severity": "Medium",
    "title": "skills__achilles2200ai-sys__ai-reach-kit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__achilles2200ai-sys__clawbounty-2-linear",
    "severity": "High",
    "title": "skills__achilles2200ai-sys__clawbounty-2-linear 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: effector.toml；高风险 1，中风险 3，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__achillesprotocol__ai-research-eta-optimization",
    "severity": "Low",
    "title": "skills__achillesprotocol__ai-research-eta-optimization 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__achimace__thermikbuddy",
    "severity": "Medium",
    "title": "skills__achimace__thermikbuddy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: .clawhub\\origin.json；高风险 0，中风险 1，低风险 9",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__acidias__clawpost-2",
    "severity": "Medium",
    "title": "skills__acidias__clawpost-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__acilgit__good-memory",
    "severity": "High",
    "title": "skills__acilgit__good-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: install.sh；高风险 3，中风险 3，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acilgit__image-prompt-memory",
    "severity": "Low",
    "title": "skills__acilgit__image-prompt-memory 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acogkr__hoseo-lms",
    "severity": "High",
    "title": "skills__acogkr__hoseo-lms 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acrid-auto__acrid-skill-creator",
    "severity": "Medium",
    "title": "skills__acrid-auto__acrid-skill-creator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: package.json；高风险 0，中风险 2，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__acrid-auto__acrid-skill-creator__examples__stock-checker",
    "severity": "Low",
    "title": "skills__acrid-auto__acrid-skill-creator__examples__stock-checker 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acse-yz219__mooc-course-search",
    "severity": "Low",
    "title": "skills__acse-yz219__mooc-course-search 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__actabi__beepack",
    "severity": "Low",
    "title": "skills__actabi__beepack 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__actabi__beepack-deprecated",
    "severity": "Low",
    "title": "skills__actabi__beepack-deprecated 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__actabi__beepack-registry",
    "severity": "Low",
    "title": "skills__actabi__beepack-registry 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__action2227__kuaishou-login",
    "severity": "Low",
    "title": "skills__action2227__kuaishou-login 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__actual-software-inc__actual",
    "severity": "High",
    "title": "skills__actual-software-inc__actual 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 2，低风险 6",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__actualcwhitlock__humanizer-2",
    "severity": "High",
    "title": "skills__actualcwhitlock__humanizer-2 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: api-server\\server.js；高风险 1，中风险 9，低风险 25",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__actuallymentor__tpn-proxy",
    "severity": "High",
    "title": "skills__actuallymentor__tpn-proxy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\security-assessment.md；高风险 1，中风险 3，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract-fetcher",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract-fetcher 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract-ict",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract-ict 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract-risk",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract-risk 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract-signal",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract-signal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract__binance-executor",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract__binance-executor 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract__binance-ict-recognizer",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract__binance-ict-recognizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract__binance-reporter",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract__binance-reporter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract__binance-risk-manager",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract__binance-risk-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acwxpunh__binance-event-contract__binance-signal-calculator",
    "severity": "Low",
    "title": "skills__acwxpunh__binance-event-contract__binance-signal-calculator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__acxj__uni-app-wechat-miniprogram-cicd",
    "severity": "High",
    "title": "skills__acxj__uni-app-wechat-miniprogram-cicd 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 4，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__ad2546__context-optimizer",
    "severity": "High",
    "title": "skills__ad2546__context-optimizer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: lib\\index.js；高风险 1，中风险 1，低风险 10",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__ada01325150-alt__agent-architecture-evaluator",
    "severity": "Low",
    "title": "skills__ada01325150-alt__agent-architecture-evaluator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: assets\\example-architecture-review.md；高风险 0，中风险 0，低风险 11",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__cardano-balances",
    "severity": "Low",
    "title": "skills__adacapo21__cardano-balances 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__cardano-identity",
    "severity": "Low",
    "title": "skills__adacapo21__cardano-identity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\mcp-tools.md；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__cardano-staking",
    "severity": "Low",
    "title": "skills__adacapo21__cardano-staking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__cardano-transactions",
    "severity": "Low",
    "title": "skills__adacapo21__cardano-transactions 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\concepts.md；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-analytics",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-analytics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-assets",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-assets 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-cdp",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-cdp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\concepts.md；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-dex",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-dex 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: sub-skills\\iris-pools.md；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-governance",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-governance 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-ipfs",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-ipfs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: sub-skills\\ipfs-storage.md；高风险 0，中风险 0，低风险 7",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-redemption",
    "severity": "Medium",
    "title": "skills__adacapo21__indigo-redemption 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: sub-skills\\rob-manage.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adacapo21__indigo-stability",
    "severity": "Low",
    "title": "skills__adacapo21__indigo-stability 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 8",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__indigo-staking",
    "severity": "Medium",
    "title": "skills__adacapo21__indigo-staking 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: sub-skills\\staking-manage.md；高风险 0，中风险 1，低风险 7",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adacapo21__openmm",
    "severity": "High",
    "title": "skills__adacapo21__openmm 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 4，中风险 3，低风险 25",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adacapo21__openmm-exchange-setup",
    "severity": "High",
    "title": "skills__adacapo21__openmm-exchange-setup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adacapo21__openmm-grid-trading",
    "severity": "Low",
    "title": "skills__adacapo21__openmm-grid-trading 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__openmm-portfolio",
    "severity": "Low",
    "title": "skills__adacapo21__openmm-portfolio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__openmm__skills__exchange-setup",
    "severity": "High",
    "title": "skills__adacapo21__openmm__skills__exchange-setup 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 1",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adacapo21__openmm__skills__grid-trading",
    "severity": "Low",
    "title": "skills__adacapo21__openmm__skills__grid-trading 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adacapo21__openmm__skills__portfolio",
    "severity": "Low",
    "title": "skills__adacapo21__openmm__skills__portfolio 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _extract_manifest.json；高风险 0，中风险 0，低风险 2",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adaclaw__theme-park-queue-times",
    "severity": "Low",
    "title": "skills__adaclaw__theme-park-queue-times 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: reference.md；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adahubble__cf-workers-logs",
    "severity": "High",
    "title": "skills__adahubble__cf-workers-logs 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 2，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adainthelab__auth-guard",
    "severity": "Medium",
    "title": "skills__adainthelab__auth-guard 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\auth_check.sh；高风险 0，中风险 4，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adainthelab__skulk-email",
    "severity": "Medium",
    "title": "skills__adainthelab__skulk-email 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\skulk-email.sh；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adainthelab__skulk-skill-scanner",
    "severity": "High",
    "title": "skills__adainthelab__skulk-skill-scanner 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\scanner.js；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adairli2504__marco-polo-test",
    "severity": "Medium",
    "title": "skills__adairli2504__marco-polo-test 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adam-researchh__music-analysis",
    "severity": "Medium",
    "title": "skills__adam-researchh__music-analysis 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\listen.py；高风险 0，中风险 2，低风险 6",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adam-researchh__psychedelic-cognition",
    "severity": "Low",
    "title": "skills__adam-researchh__psychedelic-cognition 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamandjarvis__banana-farmer",
    "severity": "High",
    "title": "skills__adamandjarvis__banana-farmer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\bf-watchlist.py；高风险 8，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adambrainai__adhd-bookmark-analyzer",
    "severity": "Medium",
    "title": "skills__adambrainai__adhd-bookmark-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adambrainai__payspawn",
    "severity": "High",
    "title": "skills__adambrainai__payspawn 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamchanadam__openclaw-workspace-governance-installer",
    "severity": "Medium",
    "title": "skills__adamchanadam__openclaw-workspace-governance-installer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamdurst__openclaw-essesseff",
    "severity": "High",
    "title": "skills__adamdurst__openclaw-essesseff 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\onboarding-utility.md；高风险 1，中风险 4，低风险 11",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamhjort__seo-autopilot",
    "severity": "Low",
    "title": "skills__adamhjort__seo-autopilot 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\run.sh；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamjsturrock__pinchedin",
    "severity": "High",
    "title": "skills__adamjsturrock__pinchedin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamjurgens__openclaw-podcast",
    "severity": "High",
    "title": "skills__adamjurgens__openclaw-podcast 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\setup-crons.js；高风险 3，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamkessler__iambic-pentameter",
    "severity": "Low",
    "title": "skills__adamkessler__iambic-pentameter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamkrawczyk__agentpact",
    "severity": "Medium",
    "title": "skills__adamkrawczyk__agentpact 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: templates\\agentpact.yaml；高风险 0，中风险 1，低风险 4",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamkristopher__botcoin",
    "severity": "Low",
    "title": "skills__adamkristopher__botcoin 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamkristopher__endpoints",
    "severity": "High",
    "title": "skills__adamkristopher__endpoints 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\src\\index.ts；高风险 1，中风险 3，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamkristopher__ga4-analytics",
    "severity": "High",
    "title": "skills__adamkristopher__ga4-analytics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\src\\config\\settings.ts；高风险 1，中风险 2，低风险 15",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamkristopher__seo-dataforseo",
    "severity": "High",
    "title": "skills__adamkristopher__seo-dataforseo 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\config\\settings.py；高风险 2，中风险 0，低风险 14",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamkristopher__youtube-analytics",
    "severity": "Medium",
    "title": "skills__adamkristopher__youtube-analytics 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\src\\config\\settings.ts；高风险 0，中风险 3，低风险 12",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamlucker21__verified-agent-identity-6",
    "severity": "Medium",
    "title": "skills__adamlucker21__verified-agent-identity-6 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamludwin__here-now",
    "severity": "Medium",
    "title": "skills__adamludwin__here-now 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\publish.sh；高风险 0，中风险 2，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamnaghs__lsp",
    "severity": "High",
    "title": "skills__adamnaghs__lsp 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 1，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamnaghs__options-spread-conviction-engine",
    "severity": "High",
    "title": "skills__adamnaghs__options-spread-conviction-engine 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 3，中风险 6，低风险 23",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamnaghs__safe-web",
    "severity": "High",
    "title": "skills__adamnaghs__safe-web 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\safe-web.py；高风险 2，中风险 2，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamsardo__codex-sub-agents",
    "severity": "High",
    "title": "skills__adamsardo__codex-sub-agents 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: cli-reference.md；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamsellers__grounded-bazi",
    "severity": "Low",
    "title": "skills__adamsellers__grounded-bazi 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 9",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamsellers__recipe-chef",
    "severity": "Low",
    "title": "skills__adamsellers__recipe-chef 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\search-patterns.md；高风险 0，中风险 0，低风险 10",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamsey__migma",
    "severity": "High",
    "title": "skills__adamsey__migma 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamsjb__homestruk-deal-analyzer",
    "severity": "Low",
    "title": "skills__adamsjb__homestruk-deal-analyzer 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamsjb__homestruk-lease-renewal",
    "severity": "Medium",
    "title": "skills__adamsjb__homestruk-lease-renewal 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamsjb__homestruk-maintenance-triage",
    "severity": "Low",
    "title": "skills__adamsjb__homestruk-maintenance-triage 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamsjb__homestruk-rent-comps",
    "severity": "Low",
    "title": "skills__adamsjb__homestruk-rent-comps 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamsjb__homestruk-tenant-screening",
    "severity": "Medium",
    "title": "skills__adamsjb__homestruk-tenant-screening 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamthompson33__moltcops",
    "severity": "High",
    "title": "skills__adamthompson33__moltcops 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: rules.json；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamthompson33__moltcops-skill",
    "severity": "High",
    "title": "skills__adamthompson33__moltcops-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: rules.json；高风险 2，中风险 0，低风险 3",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamulster24__safeclaw-proxy",
    "severity": "High",
    "title": "skills__adamulster24__safeclaw-proxy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adamwang929__adam-skill",
    "severity": "Low",
    "title": "skills__adamwang929__adam-skill 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamwestland__tripit",
    "severity": "Low",
    "title": "skills__adamwestland__tripit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\tripit-email.py；高风险 0，中风险 0，低风险 5",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamwgp__adam-bounty-hunter",
    "severity": "Low",
    "title": "skills__adamwgp__adam-bounty-hunter 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adamwgp__agent-soul-system",
    "severity": "Medium",
    "title": "skills__adamwgp__agent-soul-system 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\collaboration-protocol.md；高风险 0，中风险 1，低风险 8",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamwgp__our-autoskills",
    "severity": "Medium",
    "title": "skills__adamwgp__our-autoskills 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adamzhang1987__kingdee-k3cloud",
    "severity": "Low",
    "title": "skills__adamzhang1987__kingdee-k3cloud 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\common-errors.md；高风险 0，中风险 0，低风险 13",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adarshdigievo__python",
    "severity": "Medium",
    "title": "skills__adarshdigievo__python 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adarshsojitra__fake-identity",
    "severity": "Low",
    "title": "skills__adarshsojitra__fake-identity 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adarshvmore__competitor-finder",
    "severity": "High",
    "title": "skills__adarshvmore__competitor-finder 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adarshvmore__competitor-finder-adarsh",
    "severity": "High",
    "title": "skills__adarshvmore__competitor-finder-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adarshvmore__instagram-collector",
    "severity": "Medium",
    "title": "skills__adarshvmore__instagram-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adarshvmore__instagram-collector-adarsh",
    "severity": "Medium",
    "title": "skills__adarshvmore__instagram-collector-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adarshvmore__marketing-orchestrator",
    "severity": "Low",
    "title": "skills__adarshvmore__marketing-orchestrator 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adarshvmore__marketing-orchestrator-adarsh",
    "severity": "Low",
    "title": "skills__adarshvmore__marketing-orchestrator-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adarshvmore__meta-ads-collector",
    "severity": "High",
    "title": "skills__adarshvmore__meta-ads-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adarshvmore__meta-ads-collector-adarsh",
    "severity": "High",
    "title": "skills__adarshvmore__meta-ads-collector-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 1，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adarshvmore__report-generator-adarsh",
    "severity": "Low",
    "title": "skills__adarshvmore__report-generator-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adarshvmore__telegram-marketing-audit-adarsh",
    "severity": "Low",
    "title": "skills__adarshvmore__telegram-marketing-audit-adarsh 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adastraabyssoque__agent-browser-with-camoufox",
    "severity": "High",
    "title": "skills__adastraabyssoque__agent-browser-with-camoufox 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install.sh；高风险 3，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adastraabyssoque__camoufox-deploy",
    "severity": "High",
    "title": "skills__adastraabyssoque__camoufox-deploy 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: scripts\\install.sh；高风险 3，中风险 0，低风险 2",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adastraabyssoque__camoufox-tools",
    "severity": "Medium",
    "title": "skills__adastraabyssoque__camoufox-tools 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: install.sh；高风险 0，中风险 1，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adawodu__comic-brief",
    "severity": "Medium",
    "title": "skills__adawodu__comic-brief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adawodu__meeting-debrief",
    "severity": "Low",
    "title": "skills__adawodu__meeting-debrief 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adawodu__workflow-audit",
    "severity": "Low",
    "title": "skills__adawodu__workflow-audit 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adboio__agentmail",
    "severity": "High",
    "title": "skills__adboio__agentmail 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\WEBHOOKS.md；高风险 1，中风险 4，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adcentury__actionbook",
    "severity": "High",
    "title": "skills__adcentury__actionbook 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: references\\authentication.md；高风险 1，中风险 0，低风险 4",
    "action": "人工复核后再放行，并限制高风险能力。"
  },
  {
    "skill": "skills__adchina2025__shanghai-hua",
    "severity": "Low",
    "title": "skills__adchina2025__shanghai-hua 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 6",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__adchina2025__wechat-article-collector",
    "severity": "Medium",
    "title": "skills__adchina2025__wechat-article-collector 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 6，低风险 5",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__adderwar-bot__item-manager",
    "severity": "Low",
    "title": "skills__adderwar-bot__item-manager 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 4",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__addisonhellum__deepthink",
    "severity": "Medium",
    "title": "skills__addisonhellum__deepthink 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 1，低风险 2",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__addoee__baozao-ma-jie-persona",
    "severity": "Low",
    "title": "skills__addoee__baozao-ma-jie-persona 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__addoee__baozao-majie",
    "severity": "Low",
    "title": "skills__addoee__baozao-majie 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: _meta.json；高风险 0，中风险 0，低风险 3",
    "action": "低风险持续观察。"
  },
  {
    "skill": "skills__addogiavara-tech__auto-building",
    "severity": "Medium",
    "title": "skills__addogiavara-tech__auto-building 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: SKILL.md；高风险 0，中风险 3，低风险 3",
    "action": "保留监控并复核外部依赖与调用边界。"
  },
  {
    "skill": "skills__addogiavara-tech__autoclaw-browser",
    "severity": "High",
    "title": "skills__addogiavara-tech__autoclaw-browser 审计结果",
    "reason": "报告未提供额外风险原因。",
    "chain": "位置: README.md；高风险 1，中风险 4，低风险 13",
    "action": "人工复核后再放行，并限制高风险能力。"
  }
];
