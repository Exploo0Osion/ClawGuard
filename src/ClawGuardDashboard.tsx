import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  CircleAlert,
  Code2,
  Cpu,
  Download,
  FileWarning,
  Home,
  LogIn,
  LogOut,
  MoreHorizontal,
  Play,
  ScanSearch,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  StopCircle,
  TriangleAlert,
  Upload,
  UserPlus,
  UserRound,
  X,
} from "lucide-react";
import { generatedAuditFindings } from "./data/generatedAuditFindings";

type MetricCard = {
  title: string;
  value: string;
  sub: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone: "coral" | "yellow" | "ink";
};

type DynamicEvent = {
  type: string;
  detail: string;
  time: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone: "rose" | "amber" | "sky";
};

type RiskSignal = {
  tag: string;
  title: string;
  desc: string;
  evidence: string;
  action: string;
  score: string;
  tone: "rose" | "amber";
};

type AuditFinding = {
  skill: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  title: string;
  reason: string;
  chain: string;
  action: string;
  findingsCount?: number;
};

type AuditRiskSlice = {
  id: string;
  label: string;
  group: string;
  severity: AuditFinding["severity"];
  color: string;
  gradient: [string, string, string];
  skills: string[];
};

type AuthUser = {
  name: string;
  email: string;
  password: string;
};

type ClawGuardSettingsApi = {
  openclaw_root: string | null;
  updated_at?: string | null;
  default_openclaw_root?: string;
  environment?: {
    detected?: boolean;
    skills_path?: string | null;
    notes?: string[];
  };
};

type StaticAuditApiReport = {
  generated_at: string;
  task_prompt: string;
  sources: string[];
  summary: {
    total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  findings: AuditFinding[];
  risk_slices: AuditRiskSlice[];
};

type UploadAuditApiReport = {
  generated_at: string;
  task_prompt: string;
  summary: {
    total: number;
    critical: number;
    high: number;
    medium: number;
    low: number;
  };
  scanned_count: number;
  skipped_count: number;
  findings: AuditFinding[];
  risk_slices: AuditRiskSlice[];
};

type RuntimeTimelineEvent = {
  time?: string;
  type?: string;
  detail?: string;
  tone?: string;
};

type RuntimeRiskSignal = {
  id?: string;
  tag?: string;
  title?: string;
  desc?: string;
  evidence?: string;
  action?: string;
  score?: number;
  severity?: "Critical" | "High" | "Medium" | "Low";
  tone?: string;
};

type RuntimeOverview = {
  alert_count?: number;
  active_skill_count?: number;
  current_session_total_tokens?: number;
  session_count?: number;
  selected_session_event_count?: number;
  selected_session_skill_reads?: number;
  chain_score?: number;
  critical_count?: number;
  high_count?: number;
  medium_count?: number;
};

type RuntimeDynamicChain = {
  suspicious?: boolean;
  score?: number;
  sequence?: string;
  observed_categories?: string[];
  requested_capabilities?: string[];
  reason?: string;
  semantic_judgment?: {
    should_flag?: boolean;
    semantic_risk_level?: "low" | "medium" | "high";
    semantic_confidence?: number;
    attack_verdict?: "attack" | "benign" | "uncertain";
    attack_type?: string;
    attack_reason?: string;
    evidence_points?: string[];
    reasoning_summary?: string;
    recommended_action?: string;
    alert_title?: string;
    alert_summary?: string;
    alert_evidence?: string;
    alert_action?: string;
    model_name?: string;
    aggregated_sources?: string[];
    aggregated_source_count?: number;
    fallback_used?: boolean;
  };
};

type TokenUsageEntry = {
  label?: string;
  total_tokens?: number;
  input_tokens?: number;
  output_tokens?: number;
  cache_read_tokens?: number;
  cache_write_tokens?: number;
};

type TokenUsageSnapshot = {
  total_tokens?: number;
  input_tokens?: number;
  output_tokens?: number;
  cache_read_tokens?: number;
  cache_write_tokens?: number;
  entries?: TokenUsageEntry[];
};

type RuntimeReportApi = {
  generated_at?: string;
  source_mode?: string;
  overview?: RuntimeOverview;
  dynamic_chain?: RuntimeDynamicChain;
  timeline?: RuntimeTimelineEvent[];
  risk_signals?: RuntimeRiskSignal[];
  token_usage?: {
    current_session?: TokenUsageSnapshot;
    recent_sessions?: TokenUsageSnapshot;
  };
};

const AUTH_USERS_KEY = "clawguard-users";
const AUTH_CURRENT_KEY = "clawguard-current-user";
const OPENCLAW_ROOT_KEY = "clawguard-openclaw-root";
const DEFAULT_OPENCLAW_ROOT = String.raw`\\wsl.localhost\Ubuntu\home\ricardo\openclaw`;

function uniqueStrings(values: Array<string | undefined>) {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value))));
}

function currentOriginApiBase() {
  if (!window.location.origin || window.location.origin === "null") {
    return undefined;
  }
  if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
    return undefined;
  }
  return `${window.location.origin}/api`;
}

function hostnameApiBase() {
  const hostname = window.location.hostname;
  if (!hostname) {
    return undefined;
  }
  const formattedHost = hostname.includes(":") && !hostname.startsWith("[") ? `[${hostname}]` : hostname;
  return `http://${formattedHost}:8123/api`;
}

function apiBaseCandidates() {
  const envBase = import.meta.env.VITE_API_BASE_URL as string | undefined;
  return uniqueStrings([
    envBase,
    "/api",
    currentOriginApiBase(),
    hostnameApiBase(),
    "http://127.0.0.1:8123/api",
    "http://localhost:8123/api",
  ]);
}

function buildRuntimeReportSelection() {
  const params = new URLSearchParams(window.location.search);
  const sessionId = (params.get("session_id") || "").trim();
  const sessionPath = (params.get("session_path") || "").trim();
  const query = new URLSearchParams();
  if (sessionId) query.set("session_id", sessionId);
  if (sessionPath) query.set("session_path", sessionPath);
  const suffix = query.toString();
  return {
    path: suffix ? `/report?${suffix}` : "/report",
    pinned: Boolean(sessionId || sessionPath),
  };
}

async function fetchJsonWithTimeout<T>(url: string, init?: RequestInit, timeoutMs = 12000): Promise<T> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { cache: "no-store", ...init, signal: controller.signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(`Request timed out: ${url}`);
    }
    throw error;
  } finally {
    window.clearTimeout(timer);
  }
}

async function fetchFromApiCandidates<T>(path: string, init?: RequestInit, timeoutMs = 12000): Promise<T> {
  let lastError: unknown = null;
  for (const base of apiBaseCandidates()) {
    try {
      return await fetchJsonWithTimeout<T>(`${base}${path}`, init, timeoutMs);
    } catch (error) {
      lastError = error;
    }
  }
  if (lastError instanceof Error) {
    throw lastError;
  }
  throw new Error("Unable to reach the ClawGuard backend.");
}

async function fetchClawGuardSettings() {
  return fetchFromApiCandidates<ClawGuardSettingsApi>("/settings");
}

async function persistClawGuardSettings(openclawRoot: string) {
  return fetchFromApiCandidates<ClawGuardSettingsApi>(
    "/settings",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ openclaw_root: openclawRoot.trim() || null }),
    },
    15000,
  );
}

function toCompactTokenText(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${Math.round(value / 100) / 10}K`;
  return String(value);
}

function toPercent(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((part / total) * 100)));
}

function asTone(raw: string | undefined): DynamicEvent["tone"] {
  if (raw === "rose" || raw === "amber" || raw === "sky") return raw;
  return "sky";
}

function eventIconForType(type: string): DynamicEvent["icon"] {
  const lowered = type.toLowerCase();
  if (lowered.includes("svg")) return FileWarning;
  if (lowered.includes("network")) return Download;
  if (lowered.includes("skill")) return BookMarked;
  if (lowered.includes("process")) return Activity;
  if (lowered.includes("exec")) return Code2;
  return ScanSearch;
}

function mapTimelineToDynamicEvents(timeline: RuntimeTimelineEvent[] | undefined): DynamicEvent[] {
  if (!timeline || timeline.length === 0) return [];
  return timeline.map((item, index) => ({
    type: item.type || `事件 ${index + 1}`,
    detail: item.detail || "无详细信息",
    time: item.time || "--:--",
    icon: eventIconForType(item.type || ""),
    tone: asTone(item.tone),
  }));
}

function mapRuntimeSignalsToUi(signals: RuntimeRiskSignal[] | undefined): RiskSignal[] {
  if (!signals || signals.length === 0) return [];
  return signals.slice(0, 6).map((item, index) => ({
    tag: item.tag || "风险信号",
    title: item.title || `signal-${index + 1}`,
    desc: item.desc || "后端返回风险信号",
    evidence: item.evidence || "无证据片段",
    action: item.action || "请人工复核后处理",
    score: String(item.score ?? Math.max(60, 95 - index * 6)),
    tone: item.severity === "Critical" ? "rose" : "amber",
  }));
}

function summarizeRuntimeRiskSeverities(signals: RuntimeRiskSignal[] | undefined): { Critical: number; High: number; Medium: number } {
  const source = signals ?? [];
  return {
    Critical: source.filter((item) => item.severity === "Critical").length,
    High: source.filter((item) => item.severity === "High").length,
    Medium: source.filter((item) => item.severity === "Medium").length,
  };
}

function buildMetricCardsFromReport(overview: RuntimeOverview | undefined): MetricCard[] {
  if (!overview) {
    return metricCards;
  }
  const highRiskCount = (overview.critical_count ?? 0) + (overview.high_count ?? 0);
  const activeSkills = overview.active_skill_count ?? 0;
  const totalTokens = overview.current_session_total_tokens ?? 0;
  return [
    {
      title: "威胁等级",
      value: String(highRiskCount),
      sub: `${highRiskCount} 个高危信号`,
      icon: ShieldAlert,
      tone: "coral",
    },
    {
      title: "技能调用",
      value: String(activeSkills),
      sub: "会话中激活 skill",
      icon: Activity,
      tone: "yellow",
    },
    {
      title: "资源用量",
      value: toCompactTokenText(totalTokens),
      sub: "当前会话 Token",
      icon: Cpu,
      tone: "ink",
    },
  ];
}

function buildTokenBreakdownFromSnapshot(snapshot: TokenUsageSnapshot | null): Array<{ label: string; value: number }> {
  if (!snapshot) {
    return tokenBreakdown;
  }
  const total = Math.max(0, snapshot.total_tokens ?? 0);
  if (total <= 0) {
    return [
      { label: "输入 Token", value: 0 },
      { label: "输出 Token", value: 0 },
      { label: "缓存读取", value: 0 },
      { label: "缓存写入", value: 0 },
    ];
  }
  const input = snapshot.input_tokens ?? 0;
  const output = snapshot.output_tokens ?? 0;
  const cacheRead = snapshot.cache_read_tokens ?? 0;
  const cacheWrite = snapshot.cache_write_tokens ?? 0;
  return [
    { label: "输入 Token", value: toPercent(input, total) },
    { label: "输出 Token", value: toPercent(output, total) },
    { label: "缓存读取", value: toPercent(cacheRead, total) },
    { label: "缓存写入", value: toPercent(cacheWrite, total) },
  ];
}

function buildTokenActionUsageFromSnapshot(snapshot: TokenUsageSnapshot | null): Array<{ name: string; tokens: number; percent: number }> {
  if (!snapshot) {
    return tokenActionUsage;
  }
  const total = Math.max(0, snapshot.total_tokens ?? 0);
  if (total <= 0) {
    return [
      { name: "输入 Token", tokens: 0, percent: 0 },
      { name: "输出 Token", tokens: 0, percent: 0 },
      { name: "缓存读取", tokens: 0, percent: 0 },
      { name: "缓存写入", tokens: 0, percent: 0 },
    ];
  }
  return [
    { name: "输入 Token", tokens: snapshot.input_tokens ?? 0, percent: toPercent(snapshot.input_tokens ?? 0, total) },
    { name: "输出 Token", tokens: snapshot.output_tokens ?? 0, percent: toPercent(snapshot.output_tokens ?? 0, total) },
    { name: "缓存读取", tokens: snapshot.cache_read_tokens ?? 0, percent: toPercent(snapshot.cache_read_tokens ?? 0, total) },
    { name: "缓存写入", tokens: snapshot.cache_write_tokens ?? 0, percent: toPercent(snapshot.cache_write_tokens ?? 0, total) },
  ];
}

function buildTokenSkillUsageFromSnapshot(snapshot: TokenUsageSnapshot | null): Array<{ name: string; action: string; tokens: number; percent: number; tone: string }> {
  if (!snapshot || !snapshot.entries || snapshot.entries.length === 0) {
    return tokenSkillUsage;
  }
  const total = Math.max(0, snapshot.total_tokens ?? 0);
  if (total <= 0) {
    return [
      { name: "暂无会话", action: "当前未捕获可统计的消息段", tokens: 0, percent: 0, tone: "bg-[#232733]" },
    ];
  }
  const buckets = new Map<string, number>();
  for (const entry of snapshot.entries) {
    const label = (entry.label || "unknown").trim() || "unknown";
    buckets.set(label, (buckets.get(label) || 0) + (entry.total_tokens ?? 0));
  }
  const palette = ["bg-[#ff7163]", "bg-[#ffd531]", "bg-[#76b7bd]", "bg-[#232733]"];
  return Array.from(buckets.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([label, tokens], index) => ({
      name: label.length > 28 ? `${label.slice(0, 28)}...` : label,
      action: "会话日志中的高消耗消息片段",
      tokens,
      percent: toPercent(tokens, total),
      tone: palette[index % palette.length],
    }));
}

function mergeAuditFindings(items: AuditFinding[]): AuditFinding[] {
  const seen = new Set<string>();
  const merged: AuditFinding[] = [];
  for (const item of items) {
    const key = `${item.skill}:${item.severity}:${item.title}:${item.reason}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
  }
  return merged;
}

function mergeAuditRiskSlices(slices: AuditRiskSlice[]): AuditRiskSlice[] {
  const grouped = new Map<string, AuditRiskSlice>();
  for (const slice of slices) {
    const existing = grouped.get(slice.id);
    if (!existing) {
      grouped.set(slice.id, { ...slice, skills: [...slice.skills] });
      continue;
    }
    const skills = Array.from(new Set([...existing.skills, ...slice.skills]));
    grouped.set(slice.id, { ...existing, skills });
  }
  return Array.from(grouped.values());
}

function inferRiskLabel(item: AuditFinding): string {
  const text = `${item.skill} ${item.title} ${item.reason} ${item.chain}`.toLowerCase();
  if (text.includes("secret_exfil") || text.includes("凭证")) return "凭证外发链";
  if (text.includes("download_exec") || text.includes("下载") || text.includes("curl") || text.includes("wget")) return "远程下载 + 命令执行";
  if (text.includes("install") || text.includes("依赖")) return "依赖安装风险";
  if (text.includes("file") || text.includes("本地文件")) return "本地文件读取风险";
  if (text.includes("npd") || text.includes("协议") || text.includes("劫持")) return "协议/工具调用劫持";
  if (item.severity === "Medium") return "能力域漂移";
  if (item.severity === "Low") return "未发现明显高危行为";
  return "外部服务依赖";
}

type AbilityCategory = "信息输入类" | "信息处理类" | "外部交互类" | "系统执行类" | "记忆管理类" | "安全敏感类" | "领域应用类";

function getFunctionGroupForSkill(skill: string): AbilityCategory {
  const name = skill.toLowerCase();
  if (/(file|doc|image|web|search|api|fetch|crawler|scrape|monitor|reader|extract)/.test(name)) return "信息输入类";
  if (/(analysis|report|summary|classify|ml|model|pipeline|eval|dashboard|tracker|transform)/.test(name)) return "信息处理类";
  if (/(wechat|mail|message|publisher|social|third|service|linear|workspace|post)/.test(name)) return "外部交互类";
  if (/(cli|script|exec|workflow|devops|install|shell|automation|protocol|mcp)/.test(name)) return "系统执行类";
  if (/(memory|rag|knowledge|context|vector|session|retriev)/.test(name)) return "记忆管理类";
  if (/(security|audit|vulnerability|pentest|shield|credential|auth|session-manage)/.test(name)) return "安全敏感类";
  return "领域应用类";
}

function extractFindingsCount(item: AuditFinding): number {
  if (typeof item.findingsCount === "number" && item.findingsCount > 0) return item.findingsCount;
  const source = `${item.title} ${item.reason} ${item.chain}`;
  const zh = source.match(/高风险\s*(\d+)\D+中风险\s*(\d+)\D+低风险\s*(\d+)/);
  if (zh) return Number(zh[1]) + Number(zh[2]) + Number(zh[3]);
  const en = source.match(/high\D+(\d+)\D+medium\D+(\d+)\D+low\D+(\d+)/i);
  if (en) return Number(en[1]) + Number(en[2]) + Number(en[3]);
  return 1;
}

function getFunctionSliceForSkill(skill: string) {
  return { group: getFunctionGroupForSkill(skill) };
}

function buildRiskSlicesFromFindings(findings: AuditFinding[]): AuditRiskSlice[] {
  const grouped = new Map<string, AuditRiskSlice>();
  for (const finding of findings) {
    const functionGroup = getFunctionGroupForSkill(finding.skill);
    const severity = finding.severity === "Critical" ? "Critical" : finding.severity === "High" ? "High" : finding.severity === "Medium" ? "Medium" : "Low";
    const group = functionGroup;
    const label = functionGroup;
    const id = functionGroup;
    const existing = grouped.get(id);
    if (existing) {
      if (!existing.skills.includes(finding.skill)) existing.skills.push(finding.skill);
      continue;
    }
    grouped.set(id, {
      id,
      label,
      group,
      severity,
      color: severity === "Critical" || severity === "High" ? "#ef8a82" : severity === "Medium" ? "#f4d84a" : "#88bcc0",
      gradient:
        severity === "Critical" || severity === "High"
          ? ["#ffbbb2", "#ef8a82", "#dc6f68"]
          : severity === "Medium"
            ? ["#fff3a8", "#f4d84a", "#e8c72f"]
            : ["#c2e2e2", "#88bcc0", "#6fa8ad"],
      skills: [finding.skill],
    });
  }
  return Array.from(grouped.values()).sort((a, b) => b.skills.length - a.skills.length);
}

function summarizeAuditFindings(findings: AuditFinding[]): UploadAuditApiReport["summary"] {
  return {
    total: findings.length,
    critical: findings.filter((item) => item.severity === "Critical").length,
    high: findings.filter((item) => item.severity === "High").length,
    medium: findings.filter((item) => item.severity === "Medium").length,
    low: findings.filter((item) => item.severity === "Low").length,
  };
}

function accumulateUploadAudit(
  previous: UploadAuditApiReport | null,
  incoming: UploadAuditApiReport,
): UploadAuditApiReport {
  if (!previous) {
    return incoming;
  }
  const mergedFindings = mergeAuditFindings([...previous.findings, ...incoming.findings]);
  return {
    ...incoming,
    summary: summarizeAuditFindings(mergedFindings),
    scanned_count: previous.scanned_count + incoming.scanned_count,
    skipped_count: previous.skipped_count + incoming.skipped_count,
    findings: mergedFindings,
    risk_slices: mergeAuditRiskSlices([...previous.risk_slices, ...incoming.risk_slices]),
  };
}

const metricCards: MetricCard[] = [
  {
    title: "威胁等级",
    value: "3",
    sub: "3 个活跃告警",
    icon: ShieldAlert,
    tone: "coral",
  },
  {
    title: "技能调用",
    value: "35",
    sub: "已监控调用",
    icon: Activity,
    tone: "yellow",
  },
  {
    title: "资源用量",
    value: "250K",
    sub: "已用 Token",
    icon: Cpu,
    tone: "ink",
  },
];

const dynamicEvents: DynamicEvent[] = [
  { type: "可疑下载", detail: "技能运行器请求 university_logo.svg", time: "09:42", icon: Download, tone: "rose" },
  { type: "外部提示源", detail: "evil-malware.com/assets/prompt.txt", time: "09:41", icon: Search, tone: "amber" },
  { type: "命中提示注入", detail: "SVG 负载包含嵌入式指令模式", time: "09:41", icon: AlertTriangle, tone: "rose" },
  { type: "观察到包装调用", detail: "wrapper skill 调用了 fetch_page()", time: "09:40", icon: Code2, tone: "sky" },
  { type: "技能元数据扫描", detail: "ddg-web-search 引用了 SKILL.md", time: "09:38", icon: FileWarning, tone: "amber" },
  { type: "白名单校验", detail: "已评估网页搜索流程的网络白名单", time: "09:37", icon: ShieldAlert, tone: "sky" },
  { type: "Markdown 警告", detail: "渲染内容中存在类似指令的 Markdown", time: "09:36", icon: CircleAlert, tone: "rose" },
  { type: "自动修复已准备", detail: "候选修复提示已进入待审状态", time: "09:35", icon: Sparkles, tone: "sky" },
  { type: "技能已停止", detail: "外部负载解析前已停止执行", time: "09:34", icon: StopCircle, tone: "rose" },
  { type: "会话已启动", detail: "运行时监控已接入当前任务", time: "09:33", icon: Play, tone: "amber" },
];

const riskSignals: RiskSignal[] = [
  {
    tag: "恶意技能",
    title: "~/.openclaw/workspace/skills/evil-web-fetch/SKILL.md",
    desc: "技能指令尝试拉取外部提示内容，并将其混入当前任务上下文。",
    evidence: "关键词：下载 / 提示注入 / 外部抓取",
    action: "停止技能执行并隔离技能目录。",
    score: "98",
    tone: "rose",
  },
  {
    tag: "任务技能不匹配",
    title: "~/.openclaw/workspace/skills/ddg-web-search/SKILL.md",
    desc: "无需联网的本地资产流程中出现了网页搜索能力，扩大了风险面。",
    evidence: "任务：图像优化 / 技能：网页搜索",
    action: "联网技能使用前要求显式确认。",
    score: "85",
    tone: "amber",
  },
  {
    tag: "恶意提示文件",
    title: "/home/ricardo/openclaw/university_logo.svg",
    desc: "SVG 内容包含类似指令的文本，可能被下游工具错误解释。",
    evidence: "文件类型：SVG / 检出嵌入式指令",
    action: "解析前清理 SVG 并剥离非视觉元数据。",
    score: "88",
    tone: "rose",
  },
];

const auditFindings: AuditFinding[] = [
  {
    skill: "atlaspa__openclaw-security",
    severity: "High",
    title: "统一安全套件暴露凭证外传与远程安装行为",
    reason: "最终审计判定为高风险；代码链源类型为 SECRET_EXFIL，识别源头 1 个，最终代码报告 0 个。",
    chain: "主要证据：scripts\\security.py 高风险 7 分；README.md 高风险 5 分；SKILL.md 中风险 2 分。",
    action: "复核凭证处理与安装说明；在允许 skill 前隔离网络访问和包安装路径。",
  },
  {
    skill: "dgriffin831__skill-scan",
    severity: "High",
    title: "扫描器实现同时出现凭证访问、下载执行与 NPD 指标",
    reason: "最终审计判定为高风险；代码链源类型包含 DOWNLOAD_EXEC、NPD、SECRET_EXFIL，识别源头 64 个。",
    chain: "主要证据：skill_scan\\scanner.py 高风险 7 分；skill_scan\\llm_prompts.py 高风险 7 分；tests\\test_scanner.py 高风险 5 分。",
    action: "按高优先级复核扫描器提示词、外联行为与敏感信息读取路径。",
  },
  {
    skill: "douglarek__clawhub-wrapper",
    severity: "High",
    title: "ClawHub 包装脚本会通过 Shell 下载远程 skill 资产",
    reason: "最终审计判定为高风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 14 个。",
    chain: "主要证据：clawhub-search.sh 高风险 6 分；clawhub-download.sh 高风险 6 分；SKILL.md 中风险 2 分。",
    action: "下载或安装步骤执行前，需要固定来源、校验哈希并加入人工确认。",
  },
  {
    skill: "georges91560__anti-injection-skill",
    severity: "High",
    title: "反注入文档仍包含高风险安装链与外部中介模式",
    reason: "最终审计判定为高风险；即使没有代码链源报告，语义复核仍保留告警。",
    chain: "主要证据：SKILL.md 高风险 6 分；README.md 中风险 4 分；CONFIGURATION.md 中风险 4 分。",
    action: "采信防护建议前，先复核文档中的安装流程与外部中介服务假设。",
  },
  {
    skill: "hugosbl__ai-skill-scanner",
    severity: "High",
    title: "AI skill 扫描器包含下载执行与凭证外传模式",
    reason: "最终审计判定为高风险；代码链源类型包含 DOWNLOAD_EXEC 和 SECRET_EXFIL，识别源头 4 个。",
    chain: "主要证据：scripts\\scan.py 高风险 6 分；scripts\\advanced_checks.py 高风险 5 分；references\\rules.md 高风险 5 分。",
    action: "在本地工作区使用前，先审计网络调用、命令执行与规则文件内容。",
  },
  {
    skill: "myrodar__skill-deps",
    severity: "High",
    title: "依赖辅助脚本暴露远程安装和搜索执行路径",
    reason: "最终审计判定为高风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 4 个。",
    chain: "主要证据：scripts\\skill-install.sh 高风险 6 分；SKILL.md 高风险 5 分；scripts\\skill-search.sh 中风险 3 分。",
    action: "安装和搜索脚本必须经过显式复核，并移除依赖发现中的隐式执行行为。",
  },
  {
    skill: "pathemata-mathemata__clawhub-skill-2",
    severity: "High",
    title: "Skill 指令触发高风险下载与外部中介模式",
    reason: "最终审计判定为高风险；静态复核发现 Markdown/Skill 文档链存在危险行为。",
    chain: "主要证据：SKILL.md 高风险 6 分；命中 download_execute_pattern 与 external_broker_install_pattern。",
    action: "在 SKILL.md 指令收敛为本地且可复核的操作前，禁止自动调用。",
  },
  {
    skill: "starbuck100__agentaudit",
    severity: "High",
    title: "Agent 审计 skill 同时混入凭证外传与下载执行模式",
    reason: "最终审计判定为高风险；代码链源类型包含 DOWNLOAD_EXEC 和 SECRET_EXFIL，识别源头 77 个。",
    chain: "主要证据：SKILL.md 高风险 9 分；references\\TROUBLESHOOTING.md 高风险 7 分；prompts\\audit-prompt.md 高风险 7 分。",
    action: "优先复核提示词、README 与上传脚本；清理敏感信息访问并隔离外发报告路径。",
  },
  {
    skill: "sucriss__skill-isolator",
    severity: "High",
    title: "隔离指南在参考材料和同步脚本中出现密钥外传指标",
    reason: "最终审计判定为高风险；代码链源类型为 SECRET_EXFIL，识别源头 6 个。",
    chain: "主要证据：references\\tutorials.md 高风险 6 分；references\\faq.md 高风险 5 分；scripts\\sync-project-skills.js 中风险 4 分。",
    action: "仅在人工复核参考材料与同步行为后使用，并避免授予工作区级别的宽权限。",
  },
  {
    skill: "xqicxx__advanced-skill-creator",
    severity: "High",
    title: "高级 skill 创建流程在指令中包含下载执行风险",
    reason: "最终审计判定为高风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 2 个。",
    chain: "主要证据：SKILL.md 高风险 5 分；scripts\\advanced_skill_processor.py 中风险 2 分；UPLOAD_INSTRUCTIONS.md 中风险 2 分。",
    action: "使用隔离的创建流程；外部中介与上传步骤在复核前保持禁用。",
  },
  {
    skill: "abo-hub__skill-tracker",
    severity: "Medium",
    title: "Skill 追踪器保留一条中风险 Markdown 指令发现",
    reason: "最终审计判定为中风险；未报告代码链源类型。",
    chain: "主要证据：SKILL.md 中风险 2 分。",
    action: "按常规流程复核，确认指令不会请求过宽的工作区或远程访问权限。",
  },
  {
    skill: "cutthemustard__cs-verify",
    severity: "Medium",
    title: "验证 skill 依赖外部中介安装模式",
    reason: "最终审计判定为中风险；语义复核保留该告警。",
    chain: "主要证据：SKILL.md 中风险 3 分；命中 external_broker_install_pattern 中风险。",
    action: "标注外部依赖，并在中介服务参与的步骤前要求操作者确认。",
  },
  {
    skill: "dadaliu0121__skills-ai-assistant",
    severity: "Medium",
    title: "助手脚本出现中风险下载执行代码链源",
    reason: "最终审计判定为中风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 1 个。",
    chain: "主要证据：scripts\\conversation_summary.py 中风险 2 分；package.json 低风险 1 分；SKILL.md 低风险 1 分。",
    action: "复核会话摘要脚本行为，并限制包脚本和执行入口的作用范围。",
  },
  {
    skill: "earthwalking__clawhub-skill-search",
    severity: "Medium",
    title: "Skill 搜索包存在中风险文档与包配置发现",
    reason: "最终审计判定为中风险；未报告代码链源类型。",
    chain: "主要证据：发布报告中风险 3 分；quickref.md 中风险 2 分；package.json 中风险 2 分。",
    action: "复核搜索文档中的远程获取假设，并保持包元数据最小化。",
  },
  {
    skill: "emrekilinc__linear-issues",
    severity: "Medium",
    title: "Linear issue 流程包含带凭证的远程管理行为",
    reason: "最终审计判定为中风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 2 个。",
    chain: "主要证据：SKILL.md 中风险 3 分；scripts\\linear.sh 中风险 2 分；package-lock.json 中风险 2 分。",
    action: "确认凭证范围受限且不会被转发；远程 issue 写入必须显式授权。",
  },
  {
    skill: "jayhe__skill-shield-007",
    severity: "Medium",
    title: "防护脚本出现密钥外传源与中介安装指标",
    reason: "最终审计判定为中风险；代码链源类型为 SECRET_EXFIL，识别源头 1 个。",
    chain: "主要证据：scripts\\shield.py 中风险 4 分；SKILL.md 中风险 2 分；hook\\shield-scan.js 低风险 1 分。",
    action: "审计密钥扫描输入，并确保防护钩子不会传输敏感材料。",
  },
  {
    skill: "largetool__skill-dashboard",
    severity: "Medium",
    title: "仪表盘脚本包含下载执行与外部中介模式",
    reason: "最终审计判定为中风险；代码链源类型为 DOWNLOAD_EXEC，识别源头 2 个。",
    chain: "主要证据：dev-dashboard.js 中风险 4 分；dashboard.js 中风险 4 分；README.md 中风险 2 分。",
    action: "固定仪表盘依赖版本，并移除开发脚本中的隐式远程安装行为。",
  },
  {
    skill: "smilelight__skillscope",
    severity: "Medium",
    title: "SkillScope 指令包含外部中介安装风险",
    reason: "最终审计判定为中风险；未报告代码链源类型。",
    chain: "主要证据：SKILL.md 中风险 3 分；命中 external_broker_install_pattern 中风险。",
    action: "调用前复核中介服务依赖，并明确可信边界。",
  },
  {
    skill: "tsiontesfayechromaway__tester",
    severity: "Medium",
    title: "测试 skill 包含带凭证的远程管理模式",
    reason: "最终审计判定为中风险；语义复核保留该告警。",
    chain: "主要证据：SKILL.md 中风险 3 分；命中 credentialed_remote_admin_pattern 中风险。",
    action: "远程动作必须经过显式确认，并收窄凭证权限范围。",
  },
  {
    skill: "sunshine-del-ux__package-json-generator",
    severity: "Low",
    title: "Package JSON 生成器仅有一条低风险 Shell 发现",
    reason: "最终审计判定为低风险；未报告代码链源类型。",
    chain: "主要证据：package-json-generator.sh 低风险 1 分。",
    action: "可按标准卫生检查放行；保持 Shell 生成行为透明且可复核。",
  },
];

const auditRiskSlices: AuditRiskSlice[] = [
  {
    id: "high-download",
    label: "下载执行",
    group: "高风险",
    severity: "High",
    color: "#ef8a82",
    gradient: ["#ffbbb2", "#ef8a82", "#dc6f68"],
    skills: [
      "dgriffin831__skill-scan",
      "douglarek__clawhub-wrapper",
      "hugosbl__ai-skill-scanner",
      "myrodar__skill-deps",
      "pathemata-mathemata__clawhub-skill-2",
      "starbuck100__agentaudit",
      "xqicxx__advanced-skill-creator",
    ],
  },
  {
    id: "high-secret",
    label: "凭证外传",
    group: "高风险",
    severity: "High",
    color: "#f3a097",
    gradient: ["#ffd0c5", "#f3a097", "#e8847a"],
    skills: ["atlaspa__openclaw-security", "dgriffin831__skill-scan", "hugosbl__ai-skill-scanner", "starbuck100__agentaudit"],
  },
  {
    id: "high-broker",
    label: "外部中介",
    group: "高风险",
    severity: "High",
    color: "#d97b72",
    gradient: ["#f6b5aa", "#d97b72", "#c6645d"],
    skills: ["georges91560__anti-injection-skill", "pathemata-mathemata__clawhub-skill-2", "xqicxx__advanced-skill-creator"],
  },
  {
    id: "medium-broker",
    label: "外部中介",
    group: "中风险",
    severity: "Medium",
    color: "#f4d84a",
    gradient: ["#fff3a8", "#f4d84a", "#e8c72f"],
    skills: ["cutthemustard__cs-verify", "earthwalking__clawhub-skill-search", "largetool__skill-dashboard", "smilelight__skillscope"],
  },
  {
    id: "medium-remote",
    label: "远程管理",
    group: "中风险",
    severity: "Medium",
    color: "#ffe16a",
    gradient: ["#fff6b8", "#ffe16a", "#f1cd43"],
    skills: ["emrekilinc__linear-issues", "tsiontesfayechromaway__tester"],
  },
  {
    id: "medium-download",
    label: "下载执行",
    group: "中风险",
    severity: "Medium",
    color: "#f0d147",
    gradient: ["#fff1a0", "#f0d147", "#dfbf2e"],
    skills: ["dadaliu0121__skills-ai-assistant", "emrekilinc__linear-issues", "largetool__skill-dashboard"],
  },
  {
    id: "low-shell",
    label: "Shell 生成",
    group: "低风险",
    severity: "Low",
    color: "#88bcc0",
    gradient: ["#c2e2e2", "#88bcc0", "#6fa8ad"],
    skills: ["sunshine-del-ux__package-json-generator"],
  },
];

const tokenBreakdown = [
  { label: "技能侦察", value: 72 },
  { label: "内容过滤", value: 56 },
  { label: "图片下载", value: 41 },
  { label: "文件解析", value: 33 },
];

const tokenSkillUsage = [
  { name: "ddg-web-search", action: "搜索外部网页与摘要提取", tokens: 72000, percent: 72, tone: "bg-[#ff7163]" },
  { name: "evil-web-fetch", action: "远程内容抓取与链路跟踪", tokens: 56000, percent: 56, tone: "bg-[#ffd531]" },
  { name: "svg-sanitizer", action: "SVG 元数据剥离与安全解析", tokens: 41000, percent: 41, tone: "bg-[#76b7bd]" },
  { name: "policy-check", action: "策略命中校验与风险标注", tokens: 33000, percent: 33, tone: "bg-[#232733]" },
];

const tokenActionUsage = [
  { name: "技能侦察", tokens: 72000, percent: 72 },
  { name: "内容过滤", tokens: 56000, percent: 56 },
  { name: "图片下载", tokens: 41000, percent: 41 },
  { name: "文件解析", tokens: 33000, percent: 33 },
  { name: "自动修复提示", tokens: 28000, percent: 28 },
];

const _legacyAuditSeedCount = auditFindings.length + auditRiskSlices.length;
void _legacyAuditSeedCount;

const severityLabel = {
  HighRisk: "高风险",
  Critical: "严重",
  High: "高风险",
  Medium: "中风险",
  Low: "低风险",
} as const;

const auditSeverityBadge = {
  Critical: "border-[#ff7163]/40 bg-[#fff0ec] text-[#ff7163] shadow-[0_10px_24px_rgba(255,113,99,0.18)]",
  High: "border-[#ef8a82]/35 bg-[#fff1ee] text-[#cf665f] shadow-[0_10px_24px_rgba(239,138,130,0.14)]",
  Medium: "border-[#f4d84a]/40 bg-[#fffbe3] text-[#b49a00] shadow-[0_10px_24px_rgba(244,216,74,0.14)]",
  Low: "border-[#88bcc0]/35 bg-[#eef8f8] text-[#5b969c] shadow-[0_10px_24px_rgba(136,188,192,0.14)]",
} as const;

const auditCardTone = {
  Critical: {
    shell: "border-[#ff7163]/18 bg-[linear-gradient(135deg,#fffaf7_0%,#fff0ec_70%,#ffe9e5_100%)] shadow-[0_18px_42px_rgba(255,113,99,0.1)]",
    glow: "bg-[#ff7163]/10",
    rail: "bg-[#ff7163]",
    icon: "bg-[#232733] text-[#ffdfd9]",
    chip: "bg-[#fff0ec] text-[#ff7163]",
  },
  High: {
    shell: "border-[#ef8a82]/18 bg-[linear-gradient(135deg,#fffaf7_0%,#fff1ee_70%,#ffe9e5_100%)] shadow-[0_18px_42px_rgba(239,138,130,0.09)]",
    glow: "bg-[#ef8a82]/10",
    rail: "bg-[#ef8a82]",
    icon: "bg-[#2b2d35] text-[#ffe5df]",
    chip: "bg-[#fff1ee] text-[#cf665f]",
  },
  Medium: {
    shell: "border-[#f4d84a]/20 bg-[linear-gradient(135deg,#fffef4_0%,#fffbe3_70%,#fff5bd_100%)] shadow-[0_18px_42px_rgba(244,216,74,0.09)]",
    glow: "bg-[#f4d84a]/13",
    rail: "bg-[#f4d84a]",
    icon: "bg-[#2b2d35] text-[#fff3a8]",
    chip: "bg-[#fffbe3] text-[#b49a00]",
  },
  Low: {
    shell: "border-[#88bcc0]/18 bg-[linear-gradient(135deg,#fbffff_0%,#eef8f8_70%,#e2f1f1_100%)] shadow-[0_18px_42px_rgba(136,188,192,0.09)]",
    glow: "bg-[#88bcc0]/13",
    rail: "bg-[#88bcc0]",
    icon: "bg-[#2b2d35] text-[#d5f0f0]",
    chip: "bg-[#eef8f8] text-[#5b969c]",
  },
} as const;

const metricTone = {
  coral: "bg-[linear-gradient(135deg,#fff7f4_0%,#fff0ec_62%,#ffe4df_100%)] text-[#fb6f5d] shadow-[0_18px_45px_rgba(251,111,93,0.13),inset_0_0_0_1px_rgba(251,111,93,0.14)]",
  yellow: "bg-[linear-gradient(135deg,#fffbea_0%,#fff7d8_58%,#ffefb0_100%)] text-[#f2b800] shadow-[0_18px_45px_rgba(242,184,0,0.13),inset_0_0_0_1px_rgba(242,184,0,0.16)]",
  ink: "bg-[linear-gradient(135deg,#2d313d_0%,#252934_58%,#1f2330_100%)] text-[#fff6c4] shadow-[0_20px_48px_rgba(31,34,43,0.18),inset_0_0_0_1px_rgba(255,255,255,0.08)]",
} as const;

function loadUsers() {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(window.localStorage.getItem(AUTH_USERS_KEY) || "[]") as AuthUser[];
  } catch {
    return [];
  }
}

function loadCurrentUser() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(window.localStorage.getItem(AUTH_CURRENT_KEY) || "null") as AuthUser | null;
  } catch {
    return null;
  }
}

function loadPreferredOpenClawRoot() {
  if (typeof window === "undefined") return DEFAULT_OPENCLAW_ROOT;
  return window.localStorage.getItem(OPENCLAW_ROOT_KEY) || DEFAULT_OPENCLAW_ROOT;
}

function saveUsers(users: AuthUser[]) {
  window.localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function saveCurrentUser(user: AuthUser | null) {
  if (user) {
    window.localStorage.setItem(AUTH_CURRENT_KEY, JSON.stringify(user));
    return;
  }

  window.localStorage.removeItem(AUTH_CURRENT_KEY);
}

function savePreferredOpenClawRoot(root: string) {
  if (typeof window === "undefined") return;
  const normalized = root.trim();
  if (normalized) {
    window.localStorage.setItem(OPENCLAW_ROOT_KEY, normalized);
    return;
  }
  window.localStorage.removeItem(OPENCLAW_ROOT_KEY);
}

function InteractiveBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#d7d1c9_0%,#eee8de_48%,#c9c1b5_100%)] px-3 py-3 text-[#20222b] sm:px-6 sm:py-6">
      {children}
    </div>
  );
}

function Shell({
  children,
  active = "dashboard",
  onDashboard,
  onAudit,
  onProfile,
}: {
  children: React.ReactNode;
  active?: "dashboard" | "events" | "audit";
  onDashboard?: () => void;
  onAudit?: () => void;
  onProfile?: () => void;
}) {
  return (
    <InteractiveBackdrop>
      <div className="mx-auto flex min-h-[calc(100vh-24px)] w-full max-w-[1440px] overflow-hidden rounded-[28px] border border-white/45 bg-[linear-gradient(135deg,#fbf8f2_0%,#f6f2eb_48%,#eee7dc_100%)] shadow-[0_28px_80px_rgba(58,52,45,0.18),inset_0_1px_0_rgba(255,255,255,0.65)] sm:min-h-[calc(100vh-48px)]">
        <aside className="hidden w-[92px] shrink-0 flex-col items-center justify-between border-r border-white/45 bg-white/20 px-4 py-8 backdrop-blur md:flex">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#303442,#20232f)] text-[#ffd531] shadow-[0_12px_28px_rgba(31,34,43,0.22)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="mt-2 text-xs font-bold leading-none">ClawGuard</div>
            </div>
            <nav className="flex flex-col gap-3 rounded-full border border-white/70 bg-white/75 px-2 py-3 shadow-[0_14px_35px_rgba(31,34,43,0.08)] backdrop-blur">
              <button
                type="button"
                onClick={onDashboard}
                className={`grid h-11 w-11 place-items-center rounded-full transition duration-300 hover:scale-105 active:scale-95 ${active === "dashboard" ? "bg-[#232733] text-[#ffd531] shadow-[0_10px_22px_rgba(31,34,43,0.22)]" : "text-[#232733] hover:bg-[#f4f0e8]"}`}
                aria-label="仪表盘"
              >
                <Home className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={onAudit}
                className={`grid h-11 w-11 place-items-center rounded-full transition duration-300 hover:scale-105 active:scale-95 ${active === "audit" ? "bg-[#232733] text-[#ffd531] shadow-[0_10px_22px_rgba(31,34,43,0.22)]" : "text-[#232733] hover:bg-[#f4f0e8]"}`}
                aria-label="审计"
              >
                <BookMarked className="h-5 w-5" />
              </button>
            </nav>
          </div>
          {onProfile ? (
            <button
              type="button"
              onClick={onProfile}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/80 text-[#232733] shadow-[0_14px_35px_rgba(31,34,43,0.08)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#232733] hover:text-[#ffd531] active:scale-95"
              aria-label="个人主页"
              title="个人主页"
            >
              <UserRound className="h-5 w-5" />
            </button>
          ) : null}
        </aside>
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-8 md:px-6 lg:px-8">{children}</main>
      </div>
    </InteractiveBackdrop>
  );
}

function Header({
  eyebrow,
  title,
  subtitle,
  onBack,
  right,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  onBack?: () => void;
  right?: React.ReactNode;
}) {
  return (
    <header className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#232733] shadow-[0_12px_30px_rgba(31,34,43,0.08)] transition hover:-translate-x-0.5"
            aria-label="返回"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        ) : null}
        <div className="min-w-0">
          {eyebrow ? <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a8177]">{eyebrow}</div> : null}
          <h1 className="truncate text-2xl font-bold tracking-normal text-[#20222b] sm:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-[#6f6a63]">{subtitle}</p>
        </div>
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </header>
  );
}

function Panel({
  title,
  right,
  children,
  className = "",
  dark = false,
}: {
  title: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "border border-white/10 bg-[linear-gradient(135deg,#2d313d_0%,#232733_58%,#1f2330_100%)] text-white" : "border border-white/70 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8f2_62%,#f3ede4_100%)] text-[#20222b]"} rounded-[26px] p-5 shadow-[0_18px_45px_rgba(31,34,43,0.08),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(31,34,43,0.12),inset_0_1px_0_rgba(255,255,255,0.55)] ${className}`}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold tracking-normal">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}

function Tag({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "rose" | "amber" | "sky" | "violet";
}) {
  const tones = {
    default: "bg-[#f0ece4] text-[#6f6a63]",
    rose: "bg-[#fff0ec] text-[#f46d5e]",
    amber: "bg-[#fff6d2] text-[#b88700]",
    sky: "bg-[#edf7f7] text-[#347b82]",
    violet: "bg-[#f0eefb] text-[#6756a5]",
  } as const;

  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

function AuthPage({ onAuthenticated }: { onAuthenticated: (user: AuthUser) => void }) {
  const [mode, setMode] = React.useState<"login" | "register">("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [openclawRoot, setOpenclawRoot] = React.useState(loadPreferredOpenClawRoot);
  const [message, setMessage] = React.useState("");
  const [settingsHint, setSettingsHint] = React.useState("");
  const [settingsLoading, setSettingsLoading] = React.useState(false);

  const isRegister = mode === "register";

  React.useEffect(() => {
    let active = true;
    void (async () => {
      try {
        const payload = await fetchClawGuardSettings();
        if (!active) return;
        const resolvedRoot = payload.openclaw_root || loadPreferredOpenClawRoot() || payload.default_openclaw_root || DEFAULT_OPENCLAW_ROOT;
        setOpenclawRoot(resolvedRoot);
        savePreferredOpenClawRoot(resolvedRoot);
        if (payload.environment?.skills_path) {
          setSettingsHint(`当前后端将扫描: ${payload.environment.skills_path}`);
        }
      } catch {
        if (!active) return;
        setSettingsHint("后端设置接口暂不可达，将先使用本地记住的目录。");
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  async function persistRequestedOpenClawRoot() {
    const requestedRoot = openclawRoot.trim();
    savePreferredOpenClawRoot(requestedRoot);
    setSettingsLoading(true);
    try {
      const payload = await persistClawGuardSettings(requestedRoot);
      const resolvedRoot = payload.openclaw_root || requestedRoot || payload.default_openclaw_root || DEFAULT_OPENCLAW_ROOT;
      setOpenclawRoot(resolvedRoot);
      savePreferredOpenClawRoot(resolvedRoot);
      if (payload.environment?.skills_path) {
        setSettingsHint(`当前后端将扫描: ${payload.environment.skills_path}`);
      } else if (resolvedRoot) {
        setSettingsHint("目录已保存；如果后端暂未识别到 skills，请检查该目录下是否存在 skills 子目录。");
      } else {
        setSettingsHint("已清除自定义 OpenClaw 目录，将回退到自动识别。");
      }
      return true;
    } catch (error) {
      setMessage(error instanceof Error ? `OpenClaw 目录保存失败: ${error.message}` : "OpenClaw 目录保存失败");
      return false;
    } finally {
      setSettingsLoading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const nextName = name.trim();
    const nextPassword = password.trim();

    if (!normalizedEmail || !nextPassword || (isRegister && !nextName)) {
      setMessage("请填写完整信息");
      return;
    }

    setMessage("");
    const users = loadUsers();

    if (isRegister) {
      if (users.some((user) => user.email === normalizedEmail)) {
        setMessage("该邮箱已注册，请直接登录");
        return;
      }

      const user = { name: nextName, email: normalizedEmail, password: nextPassword };
      const settingsSaved = await persistRequestedOpenClawRoot();
      if (!settingsSaved) {
        return;
      }
      saveUsers([...users, user]);
      saveCurrentUser(user);
      onAuthenticated(user);
      return;
    }

    const user = users.find((item) => item.email === normalizedEmail && item.password === nextPassword);
    if (!user) {
      setMessage("邮箱或密码不正确");
      return;
    }

    const settingsSaved = await persistRequestedOpenClawRoot();
    if (!settingsSaved) {
      return;
    }
    saveCurrentUser(user);
    onAuthenticated(user);
  }

  return (
    <InteractiveBackdrop>
      <div className="mx-auto grid min-h-[calc(100vh-24px)] w-full max-w-[1180px] overflow-hidden rounded-[28px] border border-white/45 bg-[linear-gradient(135deg,#fbf8f2_0%,#f6f2eb_52%,#eee7dc_100%)] shadow-[0_28px_80px_rgba(58,52,45,0.18),inset_0_1px_0_rgba(255,255,255,0.65)] lg:grid-cols-[0.9fr_1.1fr] sm:min-h-[calc(100vh-48px)]">
        <section className="hidden bg-[linear-gradient(135deg,#2d313d_0%,#252934_58%,#1f2330_100%)] p-8 text-[#fff6c4] lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="mb-10 inline-flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#ffe47a,#ffd531)] text-[#232733] shadow-[0_14px_32px_rgba(255,213,49,0.22)]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold">ClawGuard</div>
            </div>
            <h1 className="max-w-sm text-4xl font-bold leading-tight">登录后查看智能体安全态势</h1>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#fff6c4]/70">集中查看技能调用、审计发现与 Token 用量，快速定位风险链路。</p>
          </div>
          <div className="grid gap-3">
            {["技能链路审计", "Token 配额守卫", "风险发现追踪"].map((item) => (
              <div key={item} className="rounded-[18px] border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold transition hover:bg-white/12">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center p-5 sm:p-8">
          <motion.form
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-[28px] border border-white/75 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8f2_64%,#f3ede4_100%)] p-6 shadow-[0_20px_55px_rgba(31,34,43,0.1),inset_0_1px_0_rgba(255,255,255,0.7)]"
          >
            <div className="mb-6 flex rounded-full bg-[#f6f2eb] p-1 text-sm font-bold">
              {[
                { key: "login", label: "登录", icon: LogIn },
                { key: "register", label: "注册", icon: UserPlus },
              ].map((item) => {
                const Icon = item.icon;
                const active = mode === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setMode(item.key as "login" | "register");
                      setMessage("");
                    }}
                    className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full transition duration-300 hover:scale-[1.02] active:scale-[0.98] ${active ? "bg-[#252934] text-[#ffd531] shadow-[0_10px_24px_rgba(31,34,43,0.18)]" : "text-[#6f6a63] hover:text-[#20222b]"}`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold">{isRegister ? "创建账号" : "欢迎回来"}</h2>
              <p className="mt-2 text-sm text-[#6f6a63]">{isRegister ? "注册后将直接进入安全仪表盘。" : "登录后在左上角显示你的问候语。"}</p>
            </div>

            <div className="space-y-4">
              {isRegister ? (
                <label className="block">
                  <span className="mb-2 block text-sm font-bold">用户名</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-12 w-full rounded-full border border-[#e1d8ca] bg-[#fdfbf8] px-4 text-sm outline-none transition focus:border-[#ffd531] focus:shadow-[0_0_0_4px_rgba(255,213,49,0.16)]"
                    placeholder="例如 Amanda"
                  />
                </label>
              ) : null}

              <label className="block">
                <span className="mb-2 block text-sm font-bold">邮箱</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 w-full rounded-full border border-[#e1d8ca] bg-[#fdfbf8] px-4 text-sm outline-none transition focus:border-[#ffd531] focus:shadow-[0_0_0_4px_rgba(255,213,49,0.16)]"
                  placeholder="name@example.com"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">密码</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full rounded-full border border-[#e1d8ca] bg-[#fdfbf8] px-4 text-sm outline-none transition focus:border-[#ffd531] focus:shadow-[0_0_0_4px_rgba(255,213,49,0.16)]"
                  placeholder="请输入密码"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">OpenClaw 安装目录</span>
                <input
                  value={openclawRoot}
                  onChange={(event) => setOpenclawRoot(event.target.value)}
                  className="h-12 w-full rounded-full border border-[#e1d8ca] bg-[#fdfbf8] px-4 text-sm outline-none transition focus:border-[#ffd531] focus:shadow-[0_0_0_4px_rgba(255,213,49,0.16)]"
                  placeholder={DEFAULT_OPENCLAW_ROOT}
                />
                <p className="mt-2 text-xs leading-5 text-[#6f6a63]">
                  默认可填写为 {DEFAULT_OPENCLAW_ROOT}。后端会同时扫描这里的 `skills/` 和内置演示样例。
                </p>
                {settingsHint ? <p className="mt-1 text-xs leading-5 text-[#8a8177]">{settingsHint}</p> : null}
              </label>
            </div>

            {message ? <div className="mt-4 rounded-2xl bg-[#fff0ec] px-4 py-3 text-sm font-semibold text-[#ff7163]">{message}</div> : null}

            <button
              type="submit"
              disabled={settingsLoading}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#303442,#20232f)] text-sm font-bold text-[#ffd531] shadow-[0_16px_35px_rgba(31,34,43,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(31,34,43,0.24)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isRegister ? <UserPlus className="h-4 w-4" /> : <LogIn className="h-4 w-4" />}
              {settingsLoading ? "保存目录中..." : isRegister ? "注册并进入" : "登录"}
            </button>
          </motion.form>
        </section>
      </div>
    </InteractiveBackdrop>
  );
}

function ProgressBar({ value, warm = false }: { value: number; warm?: boolean }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#e8e2d8]">
      <div className={`h-full rounded-full ${warm ? "bg-[#ff6f5f]" : "bg-[#232733]"}`} style={{ width: `${safeValue}%` }} />
    </div>
  );
}

function BubbleMap({ overview }: { overview: RuntimeOverview | undefined }) {
  const scannedEvents = overview?.selected_session_event_count ?? 0;
  const alertCount = overview?.alert_count ?? 0;
  const chainScore = overview?.chain_score ?? 0;
  const activeSkills = overview?.active_skill_count ?? 0;

  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[#cfc5b4] p-6">
      <div className="absolute left-[52%] top-[12%] grid h-48 w-48 place-items-center rounded-full bg-[#ffdc57]/80 text-center shadow-[0_0_45px_rgba(255,220,87,0.5)] blur-[0.2px] sm:h-56 sm:w-56">
        <div>
          <div className="text-2xl font-bold">{scannedEvents}</div>
          <div className="text-xs">会话事件</div>
        </div>
      </div>
      <div className="absolute left-[42%] top-[44%] grid h-32 w-32 place-items-center rounded-full bg-[#ff7163]/80 text-center shadow-[0_0_35px_rgba(255,113,99,0.45)] sm:h-40 sm:w-40">
        <div>
          <div className="text-xl font-bold">{alertCount}</div>
          <div className="text-xs">告警条目</div>
        </div>
      </div>
      <div className="absolute left-[38%] top-[20%] grid h-20 w-20 place-items-center rounded-full bg-[#232733] text-center text-white shadow-[0_0_25px_rgba(35,39,51,0.28)]">
        <div>
          <div className="text-sm font-bold">{chainScore}</div>
          <div className="text-[11px]">链路分</div>
        </div>
      </div>
      <div className="relative z-10 max-w-[220px]">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold leading-tight">今日安全结果</h2>
            <p className="mt-1 text-sm text-[#5f594f]">当前会话态势 · 激活 {activeSkills} 个 skill</p>
          </div>
        </div>
        <div className="mt-24 space-y-3 text-xs text-[#34312d] sm:mt-32">
          <div className="flex items-center gap-3"><span className="h-2 w-9 rounded-full bg-[#ffdc57] shadow-[0_0_8px_rgba(255,220,87,0.9)]" />已扫描事件</div>
          <div className="flex items-center gap-3"><span className="h-2 w-9 rounded-full bg-[#ff7163] shadow-[0_0_8px_rgba(255,113,99,0.8)]" />风险告警</div>
          <div className="flex items-center gap-3"><span className="h-2 w-9 rounded-full bg-[#232733]" />链路风险分</div>
        </div>
      </div>
    </div>
  );
}

function chainStepLabel(step: string): string {
  const normalized = step.trim().toLowerCase();
  const map: Record<string, string> = {
    image_read: "读取图片",
    skill_doc_read: "读取技能文档",
    network_exec: "网络执行",
    network_followup: "网络跟进",
    optimizer_exec: "本地优化执行",
    artifact_write: "输出产物",
  };
  if (map[normalized]) return map[normalized];
  return step.replace(/_/g, " ");
}

function chainStepTone(step: string): "blue" | "yellow" | "rose" {
  const normalized = step.toLowerCase();
  if (normalized.includes("network") || normalized.includes("download") || normalized.includes("shell")) return "rose";
  if (normalized.includes("skill_doc") || normalized.includes("followup")) return "yellow";
  return "blue";
}

function SkillChainGraph({
  dynamicChain,
  events,
}: {
  dynamicChain: RuntimeDynamicChain | undefined;
  events: DynamicEvent[];
}) {
  const sequenceFromChain = (dynamicChain?.sequence || "")
    .split("->")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const fallbackSequence = events.slice(0, 6).map((item) => item.type);
  const sequence = sequenceFromChain.length > 0 ? sequenceFromChain : fallbackSequence;
  const suspiciousCount = sequence.filter((item) => chainStepTone(item) !== "blue").length;
  const positions = [
    { x: 108, y: 150 },
    { x: 330, y: 92 },
    { x: 330, y: 166 },
    { x: 330, y: 240 },
    { x: 590, y: 116 },
    { x: 590, y: 218 },
  ];
  const nodes = sequence.slice(0, positions.length).map((step, index) => {
    const tone = chainStepTone(step);
    return {
      id: `${step}-${index}`,
      label: chainStepLabel(step),
      x: positions[index].x,
      y: positions[index].y,
      tone,
    };
  });
  const stroke = {
    blue: "#8ab8b7",
    yellow: "#e8c94a",
    rose: "#e9776c",
  } as const;
  const nodeStyle = {
    blue: { fill: "rgba(138,184,183,0.18)", stroke: "#8ab8b7", text: "#edf7f7", filter: "url(#softBlue)" },
    yellow: { fill: "rgba(232,201,74,0.18)", stroke: "#e8c94a", text: "#fff6c4", filter: "url(#softYellow)" },
    rose: { fill: "rgba(233,119,108,0.18)", stroke: "#e9776c", text: "#fff0ec", filter: "url(#softRose)" },
  } as const;

  return (
    <div className="overflow-hidden rounded-[22px] bg-[#252934] p-4 text-[#fff6c4] shadow-[inset_0_0_0_1px_rgba(255,246,196,0.08),0_18px_45px_rgba(31,34,43,0.12)]">
      <div className="mb-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-[14px] border border-[#fff6c4]/10 bg-[#f6f2eb]/[0.07] px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
          <div className="text-xs text-[#fff6c4]/55">入口</div>
          <div className="mt-1 text-sm font-bold">{sequence[0] ? chainStepLabel(sequence[0]) : "暂无入口"}</div>
        </div>
        <div className="rounded-[14px] border border-[#e8c94a]/20 bg-[#e8c94a]/10 px-4 py-3 shadow-[0_10px_24px_rgba(232,201,74,0.06)]">
          <div className="text-xs text-[#fff6c4]/65">可疑扩展</div>
          <div className="mt-1 text-sm font-bold">{suspiciousCount} 个风险节点</div>
        </div>
        <div className="rounded-[14px] border border-[#e9776c]/20 bg-[#e9776c]/10 px-4 py-3 shadow-[0_10px_24px_rgba(233,119,108,0.06)]">
          <div className="text-xs text-[#ffd7d1]/65">防御动作</div>
          <div className="mt-1 text-sm font-bold">{dynamicChain?.suspicious ? "已触发防御建议" : "暂无链路漂移"}</div>
        </div>
      </div>

      <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
        <span className="rounded-full bg-[#8ab8b7]/12 px-3 py-1 text-[#d9eeee]">正常入口</span>
        <span className="rounded-full bg-[#e8c94a]/13 px-3 py-1 text-[#fff6c4]">偏离路径</span>
        <span className="rounded-full bg-[#e9776c]/13 px-3 py-1 text-[#ffd7d1]">高风险节点</span>
        <span className="rounded-full bg-[#f6f2eb]/10 px-3 py-1 text-[#fff6c4]/70">自动防御</span>
      </div>

      <div className="overflow-x-auto">
        {sequence.length === 0 ? (
          <div className="rounded-[14px] bg-white/8 px-4 py-4 text-sm text-[#fff6c4]/80">当前会话暂无可视化技能链路。</div>
        ) : (
          <svg viewBox="0 0 720 310" className="h-[300px] min-w-[720px] w-full">
            <defs>
              <filter id="softBlue" x="-40%" y="-60%" width="180%" height="220%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8ab8b7" floodOpacity="0.26" />
              </filter>
              <filter id="softYellow" x="-40%" y="-60%" width="180%" height="220%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#e8c94a" floodOpacity="0.28" />
              </filter>
              <filter id="softRose" x="-40%" y="-60%" width="180%" height="220%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#e9776c" floodOpacity="0.28" />
              </filter>
            </defs>

            {nodes.slice(1).map((node, index) => {
              const start = nodes[index];
              const end = node;
              const tone = node.tone;
              const c1 = start.x + (end.x - start.x) * 0.46;
              const c2 = start.x + (end.x - start.x) * 0.54;
              return (
                <motion.path
                  key={`${start.id}-${end.id}`}
                  d={`M ${start.x + 68} ${start.y} C ${c1} ${start.y}, ${c2} ${end.y}, ${end.x - 68} ${end.y}`}
                  fill="none"
                  stroke={stroke[tone]}
                  strokeOpacity="0.54"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 0.35, ease: "easeInOut", delay: Math.min(index * 0.04, 0.24) }}
                />
              );
            })}

            {nodes.map((node, index) => {
              const style = nodeStyle[node.tone];
              const active = index === nodes.length - 1;
              return (
                <motion.g
                  key={node.id}
                  filter={style.filter}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: active ? 1.06 : 1 }}
                  transition={{ duration: 0.28, delay: Math.min(index * 0.04, 0.24) }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                >
                  <rect x={node.x - 68} y={node.y - 20} width="136" height="40" rx="18" fill={style.fill} stroke={style.stroke} strokeWidth={active ? "2.6" : "1.6"} />
                  <text x={node.x} y={node.y + 5} textAnchor="middle" fill={style.text} className="text-[13px] font-semibold">
                    {node.label}
                  </text>
                </motion.g>
              );
            })}
          </svg>
        )}
      </div>

      <div className="mt-3 rounded-[14px] bg-white/8 px-4 py-3 text-xs leading-6 text-[#fff6c4]/78">
        <div className="font-bold text-[#fff6c4]">链路说明</div>
        <div>{dynamicChain?.reason || "当前会话未检测到明显的 skill-chain 漂移。"} </div>
        <div className="mt-1">链路评分: {dynamicChain?.score ?? 0}</div>
      </div>
    </div>
  );
}

function SemanticReviewCard({ dynamicChain }: { dynamicChain: RuntimeDynamicChain | undefined }) {
  const semantic = dynamicChain?.semantic_judgment;
  if (!semantic?.should_flag || semantic.fallback_used) return null;

  const severity = semantic.semantic_risk_level === "high" ? "高风险" : semantic.semantic_risk_level === "medium" ? "中风险" : "低风险";
  const confidence = Math.round((semantic.semantic_confidence ?? 0) * 100);
  const sources = semantic.aggregated_sources ?? [];
  const verdict = semantic.attack_verdict === "attack" ? "已判定为攻击行为" : semantic.attack_verdict === "benign" ? "已判定为非攻击" : "仍需确认";
  const severityPanelClass =
    semantic.semantic_risk_level === "high"
      ? "border-[#e9776c]/22 bg-[#e9776c]/10"
      : semantic.semantic_risk_level === "medium"
        ? "border-[#e8c94a]/22 bg-[#e8c94a]/10"
        : "border-[#8ab8b7]/22 bg-[#8ab8b7]/10";
  const severityTextClass =
    semantic.semantic_risk_level === "high"
      ? "text-[#ffd7d1]"
      : semantic.semantic_risk_level === "medium"
        ? "text-[#fff6c4]"
        : "text-[#d9eeee]";
  const evidenceText =
    semantic.alert_evidence ||
    (semantic.evidence_points && semantic.evidence_points.length > 0 ? semantic.evidence_points.slice(0, 3).join("；") : "") ||
    semantic.reasoning_summary ||
    "模型已确认存在可疑分段指令。";

  return (
    <div className="overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#2c303a_0%,#252934_58%,#1d212b_100%)] p-5 text-[#fff6c4] shadow-[inset_0_0_0_1px_rgba(255,246,196,0.08),0_18px_45px_rgba(31,34,43,0.12)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-[#e9776c]/22 bg-[#e9776c]/12 px-3 py-1 text-[11px] font-black text-[#ffd7d1]">
            LLM 语义复核
          </div>
          <h3 className="text-lg font-black text-[#fff6c4]">{semantic.alert_title || "检测到可疑跨技能指令链"}</h3>
          <p className="mt-2 text-sm leading-6 text-[#fff6c4]/76">
            {semantic.alert_summary || semantic.attack_reason || dynamicChain?.reason || "模型判断多个 SKILL.md 片段组合后与当前任务无关，并形成攻击性执行链。"}
          </p>
        </div>
        <div className={`rounded-[16px] border px-3 py-2 text-right shadow-[0_10px_24px_rgba(0,0,0,0.10)] ${severityPanelClass}`}>
          <div className="text-[11px] font-bold text-[#fff6c4]/60">{verdict}</div>
          <div className="text-[11px] font-bold text-[#fff6c4]/60">风险等级</div>
          <div className={`mt-1 text-sm font-black ${severityTextClass}`}>{severity}</div>
          <div className="mt-1 text-[11px] text-[#fff6c4]/60">置信度 {confidence}%</div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-[16px] border border-[#e8c94a]/20 bg-[#e8c94a]/8 px-4 py-3 shadow-[0_10px_24px_rgba(232,201,74,0.06)]">
          <div className="text-[11px] font-black text-[#fff6c4]/72">命中证据</div>
          <div className="mt-1 text-sm leading-6 text-[#fff6c4]/82">{evidenceText} </div>
        </div>
        <div className="rounded-[16px] border border-[#8ab8b7]/20 bg-[#8ab8b7]/8 px-4 py-3 shadow-[0_10px_24px_rgba(138,184,183,0.06)]">
          <div className="text-[11px] font-black text-[#d9eeee]/78">处置建议</div>
          <div className="mt-1 text-sm leading-6 text-[#eef7f7]/82">{semantic.alert_action || "建议立即人工复核并暂停相关 skill 的后续执行。"} </div>
        </div>
      </div>

      <div className="mt-3 rounded-[16px] border border-[#fff6c4]/10 bg-[#f6f2eb]/[0.07] px-4 py-3 text-xs leading-6 text-[#fff6c4]">
        <div className="font-bold text-[#ffd531]">
          聚合来源 {semantic.aggregated_source_count ?? sources.length} 个 skill
          {semantic.attack_type ? ` · ${semantic.attack_type}` : ""}
          {semantic.model_name ? ` · ${semantic.model_name}` : ""}
        </div>
        <div className="mt-1 break-all text-[#fff6c4]/80">
          {sources.length > 0 ? sources.slice(0, 4).join("  |  ") : "当前未返回聚合来源路径。"}
        </div>
      </div>
    </div>
  );
}

function DonutChart({
  snapshot,
  recentSnapshot,
}: {
  snapshot: TokenUsageSnapshot | null;
  recentSnapshot: TokenUsageSnapshot | null;
}) {
  const used = Math.max(0, snapshot?.total_tokens ?? 250_000);
  const total = Math.max(used, recentSnapshot?.total_tokens ?? 500_000, 1);
  const percentage = (used / total) * 100;
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const breakdown = buildTokenBreakdownFromSnapshot(snapshot);

  return (
    <div className="grid gap-5 sm:grid-cols-[144px_1fr] sm:items-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <circle cx="70" cy="70" r={radius} stroke="#e8e2d8" strokeWidth="14" fill="none" />
          <circle cx="70" cy="70" r={radius} stroke="#ffd531" strokeWidth="14" fill="none" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-2xl font-bold">{toCompactTokenText(used)}</div>
          <div className="text-xs text-[#8a8177]">/ {toCompactTokenText(total)}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm">
            <span className="font-semibold">Token 用量</span>
            <span>{percentage.toFixed(0)}%</span>
          </div>
          <ProgressBar value={percentage} />
        </div>
        {breakdown.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs text-[#6f6a63]">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <ProgressBar value={item.value} warm={item.value > 60} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TokenUsageModal({
  onClose,
  currentSnapshot,
  recentSnapshot,
}: {
  onClose: () => void;
  currentSnapshot: TokenUsageSnapshot | null;
  recentSnapshot: TokenUsageSnapshot | null;
}) {
  const used = Math.max(0, currentSnapshot?.total_tokens ?? 250_000);
  const total = Math.max(used, recentSnapshot?.total_tokens ?? 500_000, 1);
  const percent = toPercent(used, total);
  const actionUsage = buildTokenActionUsageFromSnapshot(currentSnapshot);
  const skillUsage = buildTokenSkillUsageFromSnapshot(currentSnapshot);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#20222b]/45 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="token-usage-title"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/65 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8f2_62%,#f3ede4_100%)] p-6 text-[#20222b] shadow-[0_28px_80px_rgba(31,34,43,0.22),inset_0_1px_0_rgba(255,255,255,0.7)]"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8a8177]">Token Audit</p>
            <h2 id="token-usage-title" className="text-2xl font-bold">Token 用量明细</h2>
            <p className="mt-2 text-sm text-[#6f6a63]">按 skill 与行为拆解当前任务的资源消耗。</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f6f2eb] text-[#20222b] transition hover:bg-[#ece5da]"
            aria-label="关闭 Token 用量明细"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,#2d313d_0%,#252934_58%,#1f2330_100%)] p-5 text-[#fff6c4] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#fff6c4]/70">已用 Token</div>
                <div className="mt-2 text-4xl font-bold">{toCompactTokenText(used)}</div>
              </div>
              <span className="rounded-full bg-[#ffd531]/15 px-3 py-1 text-xs font-bold text-[#ffd531]">{percent}%</span>
            </div>
            <div className="space-y-4">
              {actionUsage.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-bold">{toCompactTokenText(item.tokens)}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full rounded-full bg-[#ffd531]" style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {skillUsage.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: index * 0.04 }}
                className="rounded-[20px] border border-white/70 bg-[linear-gradient(135deg,#f8f4ec,#f1eadf)] p-4 shadow-[0_10px_26px_rgba(31,34,43,0.05)] transition hover:-translate-y-0.5"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">{item.name}</div>
                    <div className="mt-1 text-xs text-[#6f6a63]">{item.action}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{toCompactTokenText(item.tokens)}</div>
                    <div className="text-xs text-[#8a8177]">{item.percent}%</div>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#e8e2d8]">
                  <div className={`h-full rounded-full ${item.tone}`} style={{ width: `${item.percent}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProfileHomeModal({
  user,
  onClose,
  onLogout,
}: {
  user: AuthUser;
  onClose: () => void;
  onLogout: () => void;
}) {
  const initial = user.name.trim().charAt(0).toUpperCase() || "U";

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#20222b]/45 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-home-title"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.22 }}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/65 bg-[linear-gradient(135deg,#ffffff_0%,#fbf8f2_62%,#f3ede4_100%)] text-[#20222b] shadow-[0_28px_80px_rgba(31,34,43,0.22),inset_0_1px_0_rgba(255,255,255,0.7)]"
      >
        <div className="bg-[linear-gradient(135deg,#2d313d_0%,#252934_58%,#1f2330_100%)] p-6 text-[#fff6c4]">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-[22px] bg-[#ffd531] text-2xl font-black text-[#232733]">
                {initial}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#fff6c4]/60">Personal Home</p>
                <h2 id="profile-home-title" className="mt-2 truncate text-2xl font-bold">
                  {user.name}
                </h2>
                <p className="mt-1 truncate text-sm text-[#fff6c4]/70">{user.email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#fff6c4] transition hover:bg-white/15"
              aria-label="关闭个人主页"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "今日登录", value: "18:49" },
              { label: "当前工作区", value: "默认" },
              { label: "审计提醒", value: "开启" },
            ].map((item) => (
              <div key={item.label} className="rounded-[18px] bg-white/8 p-4">
                <div className="text-xs text-[#fff6c4]/60">{item.label}</div>
                <div className="mt-2 text-lg font-bold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2">
          <div className="rounded-[22px] border border-white/70 bg-[linear-gradient(135deg,#f8f4ec,#f1eadf)] p-5 shadow-[0_10px_26px_rgba(31,34,43,0.05)] transition hover:-translate-y-0.5">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#252934] text-[#ffd531]">
              <LogIn className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold">最近访问</h3>
            <p className="mt-2 text-sm leading-6 text-[#6f6a63]">今天查看了 Token 用量明细，并打开过静态审计统计页。</p>
          </div>

          <div className="rounded-[22px] border border-[#f5df90] bg-[linear-gradient(135deg,#fffbea,#fff2bd)] p-5 shadow-[0_10px_26px_rgba(213,169,0,0.08)] transition hover:-translate-y-0.5">
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/70 text-[#d5a900]">
              <UserPlus className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold">偏好设置</h3>
            <p className="mt-2 text-sm leading-6 text-[#6f6a63]">高危技能告警保持开启，审计结果默认按风险等级优先展示。</p>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="sm:col-span-2 flex h-12 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#303442,#20232f)] text-sm font-bold text-[#ffd531] shadow-[0_16px_35px_rgba(31,34,43,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(31,34,43,0.24)] active:scale-[0.98]"
          >
            <LogOut className="h-4 w-4" />
            退出并返回登录注册
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AuditSeverityPie({
  slices,
  total,
  selectedSliceId,
  onSelectSlice,
  onClearSelection,
}: {
  slices: AuditRiskSlice[];
  total: number;
  selectedSliceId: string | null;
  onSelectSlice: (slice: AuditRiskSlice) => void;
  onClearSelection: () => void;
}) {
  const roseItems = slices.map((slice) => ({ ...slice, value: slice.skills.length }));
  const safeRoseItems =
    roseItems.length > 0
      ? roseItems
      : [
          {
            id: "empty",
            label: "无数据",
            group: "未分类",
            severity: "Low" as const,
            color: "#88bcc0",
            gradient: ["#c2e2e2", "#88bcc0", "#6fa8ad"] as [string, string, string],
            skills: [],
            value: 1,
          },
        ];
  const maxValue = Math.max(...safeRoseItems.map((item) => item.value));
  const roseTotal = safeRoseItems.reduce((sum, item) => sum + item.value, 0);
  const centerX = 380;
  const centerY = 318;
  const innerRadius = 68;
  const maxRadius = 244;
  const angleStep = 360 / safeRoseItems.length;
  const valueRadius = (value: number) => innerRadius + (value / maxValue) * (maxRadius - innerRadius);
  const toPoint = (angle: number, radius: number) => {
    const radians = ((angle - 90) * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radians),
      y: centerY + radius * Math.sin(radians),
    };
  };
  const sectorPath = (index: number, value: number) => {
    const startAngle = index * angleStep + 3;
    const endAngle = (index + 1) * angleStep - 3;
    const radius = valueRadius(value);
    const startOuter = toPoint(startAngle, radius);
    const endOuter = toPoint(endAngle, radius);
    const startInner = toPoint(startAngle, innerRadius);
    const endInner = toPoint(endAngle, innerRadius);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return [
      `M ${startInner.x} ${startInner.y}`,
      `L ${startOuter.x} ${startOuter.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
      "Z",
    ].join(" ");
  };
  const callout = (index: number, value: number) => {
    const angle = index * angleStep + angleStep / 2;
    const radius = valueRadius(value);
    const dot = toPoint(angle, radius + 12);
    const elbow = toPoint(angle, radius + 48);
    const rightSide = dot.x >= centerX;
    const endX = elbow.x + (rightSide ? 92 : -92);

    return {
      dot,
      elbow,
      endX,
      labelX: endX + (rightSide ? 8 : -8),
      anchor: rightSide ? ("start" as const) : ("end" as const),
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, delay: 0.18 }}
      whileHover={{ y: -3 }}
      className="min-h-full rounded-[24px] border border-[#ebe3d8] bg-[#f8f4ee] p-5 shadow-[0_18px_45px_rgba(31,34,43,0.06)]"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-[#20222b]">风险分布</h2>
          <p className="mt-1 text-xs font-medium text-[#8a8177]">按功能分类拆分</p>
        </div>
        <span className="rounded-full bg-white/75 px-3 py-1 text-xs font-bold text-[#5f594f]">{total} 条</span>
      </div>

      <div className="relative mx-auto grid w-full place-items-center overflow-hidden rounded-[22px] bg-[#fffdf8]/75 px-2 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
        <svg viewBox="0 0 760 640" className="h-auto w-full max-w-[760px] overflow-visible" role="img" aria-label="风险类型玫瑰图">
          <defs>
            {safeRoseItems.map((item, index) => (
              <linearGradient key={`${item.group}-${item.label}-gradient`} id={`rose-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={item.gradient[0]} />
                <stop offset="58%" stopColor={item.gradient[1]} />
                <stop offset="100%" stopColor={item.gradient[2]} />
              </linearGradient>
            ))}
          </defs>
          <circle cx={centerX} cy={centerY} r="258" fill="#fffdf8" opacity="0.72" />
          {[104, 140, 176, 212, 244].map((radius) => (
            <circle key={radius} cx={centerX} cy={centerY} r={radius} fill="none" stroke="#e7ded2" strokeWidth="1.25" opacity="0.85" />
          ))}
          {safeRoseItems.map((item, index) => (
            <path
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`${item.group}${item.label}，${item.value} 条发现`}
              d={sectorPath(index, item.value)}
              fill={`url(#rose-gradient-${index})`}
              opacity={!selectedSliceId || selectedSliceId === item.id ? 0.92 : 0.36}
              stroke="#fffdf8"
              strokeWidth={selectedSliceId === item.id ? 7 : 4}
              onClick={() => onSelectSlice(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onSelectSlice(item);
                }
              }}
              className="cursor-pointer outline-none transition duration-200 hover:opacity-100 focus-visible:stroke-[#20222b]"
            />
          ))}
          {safeRoseItems.map((item, index) => {
            const guide = callout(index, item.value);
            const percent = Math.round((item.value / roseTotal) * 100);

            return (
              <g key={`${item.group}-${item.label}-callout`}>
                <circle cx={guide.dot.x} cy={guide.dot.y} r="4" fill={item.color} stroke="#fffdf8" strokeWidth="2" />
                <path d={`M ${guide.dot.x} ${guide.dot.y} L ${guide.elbow.x} ${guide.elbow.y} L ${guide.endX} ${guide.elbow.y}`} fill="none" stroke="#ddd3c8" strokeWidth="2" opacity="0.75" />
                <path d={`M ${guide.elbow.x} ${guide.elbow.y} L ${guide.endX} ${guide.elbow.y}`} fill="none" stroke={item.color} strokeWidth="2" opacity="0.72" />
                <text x={guide.labelX} y={guide.elbow.y - 12} textAnchor={guide.anchor} className="fill-[#8f877f] text-[13px] font-extrabold">
                  {item.group}
                </text>
                <text x={guide.labelX} y={guide.elbow.y + 10} textAnchor={guide.anchor} className="fill-[#2b2d35] text-[17px] font-black">
                  占比{percent}%
                </text>
                <text x={guide.labelX} y={guide.elbow.y + 30} textAnchor={guide.anchor} className="fill-[#b7ada3] text-[12px] font-bold">
                  {item.value} 条发现
                </text>
              </g>
            );
          })}
          <g
            role="button"
            tabIndex={0}
            aria-label="显示全部审查卡片"
            onClick={onClearSelection}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClearSelection();
              }
            }}
            className="cursor-pointer outline-none"
          >
            <circle
              cx={centerX}
              cy={centerY}
              r={innerRadius - 8}
              fill={selectedSliceId ? "#fffaf0" : "#f5efe6"}
              stroke={selectedSliceId ? "#efd176" : "#ffffff"}
              strokeWidth={selectedSliceId ? 5 : 4}
              className="transition"
            />
            <text x={centerX} y={centerY + 11} textAnchor="middle" className="pointer-events-none fill-[#20222b] text-[34px] font-black">
              {total}
            </text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

function toneClass(tone: DynamicEvent["tone"]) {
  if (tone === "rose") return "bg-[#fff0ec] text-[#7c2d25]";
  if (tone === "amber") return "bg-[#fff6d2] text-[#6b5200]";
  return "bg-[#edf7f7] text-[#205f66]";
}

function toneDot(tone: DynamicEvent["tone"]) {
  if (tone === "rose") return "bg-[#ff7163]";
  if (tone === "amber") return "bg-[#ffd531]";
  return "bg-[#76b7bd]";
}

function AuditFindingModal({
  finding,
  onClose,
  getSkillFindingCount,
}: {
  finding: AuditFinding;
  onClose: () => void;
  getSkillFindingCount: (skill: string) => number;
}) {
  const tone = auditCardTone[finding.severity];
  const functionCategory = getFunctionSliceForSkill(finding.skill)?.group ?? "未分类";
  const shortParts = finding.skill.split("__").filter(Boolean);
  const shortSkillName = shortParts[shortParts.length - 1] ?? finding.skill;
  const riskCategory = inferRiskLabel(finding);
  const findingCount = getSkillFindingCount(finding.skill);
  const capabilityChain = `${riskCategory} -> ${functionCategory} -> ${severityLabel[finding.severity]}复核`;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 grid place-items-center bg-[#1f2330]/55 p-4 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${shortSkillName} audit detail`}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[24px] border border-[#ebe3d8] bg-[#fffdf8] shadow-[0_28px_90px_rgba(31,34,43,0.24)]"
      >
        <div className={`flex items-start justify-between gap-4 border-b border-[#ebe3d8] px-6 py-5 ${tone.shell}`}>
          <div className="min-w-0">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#8a8177]">Skill</div>
            <h2 className="truncate text-2xl font-black text-[#20222b]">{shortSkillName}</h2>
            <p className="mt-2 break-all text-sm font-semibold text-[#6f6a63]">{finding.skill}</p>
          </div>
          <button type="button" onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/80 text-[#5f594f] transition hover:bg-white hover:text-[#20222b]">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(88vh-118px)] overflow-y-auto p-6">
          <section className="mb-5 rounded-[20px] bg-[#f6f2eb] p-4">
            <h3 className="mb-4 text-sm font-black text-[#20222b]">Skill 基本信息</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "短名称", value: shortSkillName },
                { label: "完整名称", value: finding.skill },
                { label: "功能类别", value: functionCategory },
                { label: "Findings 数量", value: `${findingCount}` },
              ].map((item) => (
                <div key={item.label} className="rounded-[16px] bg-white/65 px-4 py-3">
                  <div className="mb-1 text-xs font-black text-[#8a8177]">{item.label}</div>
                  <div className="break-words text-sm font-bold text-[#20222b]">{item.value}</div>
                </div>
              ))}
            </div>
          </section>
          <div className="grid gap-4">
            <section className="rounded-[20px] border border-[#ebe3d8] bg-white/70 p-4">
              <div className="mb-2 text-xs font-black text-[#8a8177]">2. 风险等级</div>
              <span className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-extrabold ${auditSeverityBadge[finding.severity]}`}>{severityLabel[finding.severity]}</span>
            </section>
            <section className="rounded-[20px] border border-[#ebe3d8] bg-white/70 p-4">
              <div className="mb-3 text-xs font-black text-[#8a8177]">3. 风险类型标签</div>
              <div className="flex flex-wrap gap-2">
                {[riskCategory, functionCategory].map((tag) => (
                  <span key={tag} className={`rounded-full px-3 py-1 text-xs font-bold ${tone.chip}`}>{tag}</span>
                ))}
              </div>
            </section>
            {[
              { label: "4. 风险能力链", value: capabilityChain },
              { label: "5. 证据位置", value: finding.chain },
              { label: "6. 审计结论", value: `${finding.title}\n${finding.reason}` },
              { label: "7. 防护建议", value: finding.action },
            ].map((item) => (
              <section key={item.label} className="rounded-[20px] border border-[#ebe3d8] bg-white/70 p-4">
                <div className="mb-2 text-xs font-black text-[#8a8177]">{item.label}</div>
                <p className="whitespace-pre-line break-words text-sm leading-7 text-[#4f4a43]">{item.value}</p>
              </section>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DynamicEventsPage({ onBack, events }: { onBack: () => void; events: DynamicEvent[] }) {
  const severeItems = events.filter((item) => item.tone === "rose");
  const networkItems = events.filter((item) => item.type.toLowerCase().includes("network") || item.detail.toLowerCase().includes("http"));
  const blockedItems = events.filter((item) => item.type.toLowerCase().includes("stop") || item.detail.includes("停止"));
  const windowText = events.length > 1 ? `${events[events.length - 1].time}-${events[0].time}` : (events[0]?.time || "--:--");
  const eventSummaries = [
    {
      label: "严重指标",
      value: String(severeItems.length),
      icon: ShieldAlert,
      tone: "border-[#ff7163]/25 bg-[linear-gradient(135deg,#fff7f4,#fff0ec)] text-[#ff7163]",
      dot: "bg-[#ff7163]",
      detail: "检测到高危运行时信号，需要优先复核关键链路。",
      items: severeItems.slice(0, 3).map((item) => `${item.type}: ${item.detail}`),
    },
    {
      label: "网络告警",
      value: String(networkItems.length),
      icon: AlertTriangle,
      tone: "border-[#d5a900]/25 bg-[linear-gradient(135deg,#fffbea,#fff7d8)] text-[#b88700]",
      dot: "bg-[#ffd531]",
      detail: "会话中出现联网或外部资源访问，请核对是否符合任务目标。",
      items: networkItems.slice(0, 3).map((item) => `${item.time} ${item.detail}`),
    },
    {
      label: "已停止技能",
      value: String(blockedItems.length),
      icon: StopCircle,
      tone: "border-[#232733]/15 bg-[linear-gradient(135deg,#f2efe8,#e8e2d8)] text-[#232733]",
      dot: "bg-[#232733]",
      detail: "显示疑似被拦截或终止的动作。",
      items: blockedItems.slice(0, 3).map((item) => `${item.type}: ${item.detail}`),
    },
    {
      label: "捕获窗口",
      value: windowText,
      icon: Activity,
      tone: "border-[#57959b]/25 bg-[linear-gradient(135deg,#f1fbfb,#edf7f7)] text-[#347b82]",
      dot: "bg-[#76b7bd]",
      detail: "监控覆盖本次智能体会话的关键执行窗口。",
      items: events.slice(0, 2).map((item) => `${item.time} ${item.type}`),
    },
  ];
  const [selectedSummaryLabel, setSelectedSummaryLabel] = React.useState(eventSummaries[0].label);
  const selectedSummary = eventSummaries.find((item) => item.label === selectedSummaryLabel) ?? eventSummaries[0];

  return (
    <Shell active="events" onDashboard={onBack}>
      <Header eyebrow="运行时监控" title="动态事件" subtitle="当前智能体会话中捕获的实时活动" onBack={onBack} />

      <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
        <Panel title="事件摘要">
          <div className="space-y-3 text-sm">
            {eventSummaries.map((item) => {
              const Icon = item.icon;
              const active = selectedSummary.label === item.label;
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  whileHover={{ x: 3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSummaryLabel(item.label)}
                  className={`w-full rounded-[18px] border p-4 text-left shadow-[0_10px_24px_rgba(31,34,43,0.04)] transition ${item.tone} ${active ? "ring-2 ring-[#232733]/10" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-black">{item.value}</div>
                      <div className="mt-1 text-xs font-bold text-[#20222b]/70">{item.label}</div>
                    </div>
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/65">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={selectedSummary.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="mt-4 rounded-[20px] bg-[#252934] p-4 text-[#fff6c4]"
          >
            <div className="mb-3 flex items-center gap-2 text-sm font-bold">
              <span className={`h-2.5 w-2.5 rounded-full ${selectedSummary.dot}`} />
              {selectedSummary.label}详情
            </div>
            <p className="text-xs leading-6 text-[#fff6c4]/72">{selectedSummary.detail}</p>
            <div className="mt-3 space-y-2">
              {(selectedSummary.items.length > 0 ? selectedSummary.items : ["暂无详情"]).map((item) => (
                <div key={item} className="rounded-[14px] bg-white/8 px-3 py-2 text-xs text-[#fff6c4]/85">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </Panel>

        <Panel title="事件时间线" right={<Tag tone="sky">{events.length} 条事件</Tag>}>
          <div className="space-y-3">
            {events.length === 0 ? (
              <div className="rounded-[18px] bg-[#edf7f7] px-4 py-4 text-sm text-[#347b82]">当前会话暂无动态事件。</div>
            ) : events.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={`${event.type}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className={`rounded-[18px] px-4 py-4 ${toneClass(event.tone)}`}
                >
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${toneDot(event.tone)}`} />
                    <div className="rounded-full bg-white/60 p-2">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="text-sm font-bold">{event.type}</div>
                        <div className="text-xs opacity-65">{event.time}</div>
                      </div>
                      <div className="mt-1 text-sm opacity-80">{event.detail}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Panel>
      </div>
    </Shell>
  );
}

function StaticAuditPage({ onBack }: { onBack: () => void }) {
  type SeverityFilter = AuditFinding["severity"] | "HighRisk";
  const [reviewMode, setReviewMode] = React.useState<"file" | "search">("file");
  const [auditSearch, setAuditSearch] = React.useState("");
  const [auditLoading, setAuditLoading] = React.useState(false);
  const [auditError, setAuditError] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);
  const [backendAudit, setBackendAudit] = React.useState<StaticAuditApiReport | null>(null);
  const [uploadAudit, setUploadAudit] = React.useState<UploadAuditApiReport | null>(null);
  const [selectedRiskSliceId, setSelectedRiskSliceId] = React.useState<string | null>(null);
  const [selectedSeverity, setSelectedSeverity] = React.useState<SeverityFilter | null>(null);
  const [showAllAuditCards, setShowAllAuditCards] = React.useState(true);
  const [selectedAuditFinding, setSelectedAuditFinding] = React.useState<AuditFinding | null>(null);

  const mergedAuditFindings = React.useMemo(() => {
    const staticSeed = generatedAuditFindings as AuditFinding[];
    const uploaded = uploadAudit?.findings ?? [];
    const backend = backendAudit?.findings ?? [];
    return mergeAuditFindings([...staticSeed, ...backend, ...uploaded]).map((item) => ({
      ...item,
      findingsCount: extractFindingsCount(item),
    }));
  }, [backendAudit, uploadAudit]);

  const mergedRiskSlices = React.useMemo(() => {
    return buildRiskSlicesFromFindings(mergedAuditFindings);
  }, [mergedAuditFindings]);

  const selectedRiskSlice = mergedRiskSlices.find((slice) => slice.id === selectedRiskSliceId) ?? null;

  const loadAudit = React.useCallback(async () => {
    setAuditLoading(true);
    setAuditError(null);
    try {
      const payload = await fetchFromApiCandidates<StaticAuditApiReport>("/audit-static");
      setBackendAudit(payload);
    } catch (error) {
      setAuditError(error instanceof Error ? error.message : "无法加载后端审计结果");
    } finally {
      setAuditLoading(false);
    }
  }, []);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadAudit();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadAudit]);

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    if (selected.length === 0) {
      return;
    }
    setUploading(true);
    setUploadError(null);
    try {
      const files = await Promise.all(
        selected.map(async (file) => ({
          name: file.name,
          content: await file.text(),
        })),
      );
      const payload = await fetchFromApiCandidates<UploadAuditApiReport>("/audit-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ files }),
      });
      setUploadAudit((previous) => accumulateUploadAudit(previous, payload));
      setReviewMode("search");
      setSelectedRiskSliceId(null);
      setSelectedSeverity(null);
      setShowAllAuditCards(true);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "上传审计失败");
    } finally {
      event.target.value = "";
      setUploading(false);
    }
  }

  const searchFilteredAuditFindings = React.useMemo(() => {
    const query = auditSearch.trim().toLowerCase();
    if (!query) return mergedAuditFindings;

    return mergedAuditFindings.filter((item) =>
      [item.skill, item.severity, item.title, item.reason, item.chain, item.action].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [auditSearch, mergedAuditFindings]);
  const displayedAuditFindings = React.useMemo(() => {
    if (!selectedRiskSlice) return searchFilteredAuditFindings;
    return searchFilteredAuditFindings.filter((item) => getFunctionGroupForSkill(item.skill) === selectedRiskSlice.group);
  }, [searchFilteredAuditFindings, selectedRiskSlice]);
  const cardFilteredAuditFindings = React.useMemo(() => {
    if (!selectedRiskSlice && !selectedSeverity && !showAllAuditCards) return [];
    if (!selectedSeverity) return displayedAuditFindings;
    if (selectedSeverity === "HighRisk") {
      return displayedAuditFindings.filter((item) => item.severity === "Critical" || item.severity === "High");
    }

    return displayedAuditFindings.filter((item) => item.severity === selectedSeverity);
  }, [displayedAuditFindings, selectedRiskSlice, selectedSeverity, showAllAuditCards]);

  const severityCounts = {
    Critical: searchFilteredAuditFindings.filter((item) => item.severity === "Critical").length,
    High: searchFilteredAuditFindings.filter((item) => item.severity === "High").length,
    Medium: searchFilteredAuditFindings.filter((item) => item.severity === "Medium").length,
    Low: searchFilteredAuditFindings.filter((item) => item.severity === "Low").length,
  };
  const getSkillFindingCount = React.useCallback(
    (skill: string) => {
      const matching = mergedAuditFindings.filter((finding) => finding.skill === skill);
      const sum = matching.reduce((acc, finding) => acc + (finding.findingsCount ?? 0), 0);
      return sum || matching.length || 1;
    },
    [mergedAuditFindings],
  );

  return (
    <Shell active="audit" onDashboard={onBack}>
      <Header eyebrow="静态审查" title="审计统计" subtitle="对ClawHub上公开skill审计结果统计" onBack={onBack} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-5 overflow-hidden rounded-[24px] bg-white p-4 text-[#20222b] shadow-[0_18px_45px_rgba(31,34,43,0.08)]"
      >
        <div className="mb-6 grid grid-cols-[1fr_1fr_auto] rounded-[18px] bg-[#f6f2eb] px-2 pt-2 text-sm font-bold tracking-wide text-[#8a8177]">
          {[
            { key: "file", label: "文件" },
            { key: "search", label: "搜索" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setReviewMode(tab.key as "file" | "search")}
              className={`h-11 border-b-4 text-center transition ${
                reviewMode === tab.key ? "border-[#ffd531] text-[#20222b]" : "border-transparent hover:text-[#20222b]"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <div className="grid h-11 place-items-center px-4 text-[#232733]">
            <ScanSearch className="h-5 w-5" />
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => void loadAudit()}
            disabled={auditLoading}
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${auditLoading ? "bg-[#efe9de] text-[#8a8177]" : "bg-[#232733] text-[#ffd531] hover:opacity-90"}`}
          >
            {auditLoading ? "后端审计中..." : "重新执行后端静态审计"}
          </button>
        </div>

        {reviewMode === "file" ? (
          <motion.label
            key="file"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.995 }}
            className="flex w-full cursor-pointer flex-col items-center gap-5 rounded-[22px] bg-[#252934] px-6 py-8 text-center text-[#fff6c4] shadow-[inset_0_0_0_1px_rgba(255,246,196,0.08)]"
          >
            <div className="relative grid h-28 w-28 place-items-center">
              <Upload className="h-20 w-20 text-[#fff6c4]" strokeWidth={1.6} />
              <span className="absolute top-1/2 h-2 w-36 -translate-y-1/2 rounded-full bg-[#ffd531]" />
            </div>
            <span className="inline-flex h-12 min-w-52 items-center justify-center rounded-full border border-[#ffd531]/70 px-8 text-sm font-semibold text-[#fff6c4] transition hover:bg-[#ffd531]/10">
              选择文件
            </span>
            <p className="max-w-2xl text-sm leading-7 text-[#fff6c4]/72">
              上传技能配置、运行日志、SVG 或 Markdown 文件进行审查。请勿提交个人敏感信息。
            </p>
            <input type="file" className="sr-only" multiple onChange={handleFileUpload} />
            {uploading ? <div className="rounded-full bg-white/10 px-4 py-2 text-xs">正在调用后端审计...</div> : null}
            {uploadAudit ? (
              <div className="rounded-[14px] bg-white/10 px-4 py-3 text-xs">
                已累计审计 {uploadAudit.scanned_count} 个上传文件，累计命中 {uploadAudit.findings.length} 条结果。
              </div>
            ) : null}
            {uploadError ? <div className="rounded-[14px] bg-[#fff0ec] px-4 py-3 text-xs text-[#8b342a]">{uploadError}</div> : null}
          </motion.label>
        ) : null}

        {reviewMode === "search" ? (
          <motion.div key="search" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="w-full rounded-[22px] bg-[#252934] px-6 py-7 text-center text-[#fff6c4] shadow-[inset_0_0_0_1px_rgba(255,246,196,0.08)]">
            <Search className="mx-auto mb-5 h-14 w-14 text-[#fff6c4]" strokeWidth={1.5} />
            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-[#fff6c4]/72">
              搜索技能名、严重级别、链路、原因或修复动作，快速定位审计发现。
            </p>
            <input
              value={auditSearch}
              onChange={(event) => setAuditSearch(event.target.value)}
              className="h-14 w-full rounded-full border border-[#ffd531]/45 bg-[#1f2330] px-5 text-sm text-[#fff6c4] outline-none transition placeholder:text-[#fff6c4]/45 focus:border-[#ffd531]"
              placeholder="搜索技能、风险、链路或处理动作"
            />
            <div className="mt-5 text-xs font-semibold text-[#fff6c4]/70">当前匹配 {searchFilteredAuditFindings.length} 条结果</div>
          </motion.div>
        ) : null}
      </motion.div>

      {auditLoading ? (
        <div className="mb-5 rounded-[18px] bg-[#edf7f7] px-4 py-3 text-sm text-[#2b6970]">正在加载后端静态审计结果...</div>
      ) : null}
      {auditError ? (
        <div className="mb-5 rounded-[18px] bg-[#fff0ec] px-4 py-3 text-sm text-[#8b342a]">
          后端审计结果加载失败：{auditError}
          <button type="button" onClick={() => void loadAudit()} className="ml-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#232733]">
            重试
          </button>
        </div>
      ) : null}

      <div className="mb-5 grid gap-4 xl:grid-cols-[330px_1fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {[
            {
              label: "高风险",
              severity: "HighRisk" as const,
              value: severityCounts.Critical + severityCounts.High,
              description: "后端静态审计判定为严重或高风险的技能条目。",
              badge: `${severityCounts.Critical + severityCounts.High} 条发现`,
              icon: ShieldAlert,
              tone: "text-[#d84a3e]",
              bg: "bg-[#fff0ec]",
              border: "border-[#ff7163]/20",
              accent: "bg-[#ff7163]",
              iconBg: "bg-white/70",
            },
            {
              label: "中风险",
              severity: "Medium" as const,
              value: severityCounts.Medium,
              description: "后端审计建议复核的中风险技能条目。",
              badge: `${severityCounts.Medium} 条发现`,
              icon: TriangleAlert,
              tone: "text-[#d5a900]",
              bg: "bg-[#fff7d8]",
              border: "border-[#d5a900]/20",
              accent: "bg-[#d5a900]",
              iconBg: "bg-white/70",
            },
            {
              label: "低风险",
              severity: "Low" as const,
              value: severityCounts.Low,
              description: "后端判定为低风险的技能条目。",
              badge: `${severityCounts.Low} 条发现`,
              icon: ShieldCheck,
              tone: "text-[#57959b]",
              bg: "bg-[#edf7f7]",
              border: "border-[#57959b]/20",
              accent: "bg-[#57959b]",
              iconBg: "bg-white/70",
            },
            {
              label: "已审计 skill",
              severity: null,
              value: searchFilteredAuditFindings.length,
              description: "包含样例目录和上传文件的后端审计结果。",
              badge: uploadAudit ? "含上传结果" : "后端实时",
              icon: ScanSearch,
              tone: "text-[#232733]",
              bg: "bg-[#f6f2eb]",
              border: "border-[#232733]/10",
              accent: "bg-[#232733]",
              iconBg: "bg-white/70",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            const isActive =
              selectedRiskSliceId === null &&
              (item.severity ? selectedSeverity === item.severity : showAllAuditCards && selectedSeverity === null);
            return (
              <motion.button
                type="button"
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                onClick={() => {
                  setSelectedRiskSliceId(null);
                  if (item.severity) {
                    setSelectedSeverity((current) => {
                      if (current === item.severity) {
                        setShowAllAuditCards(true);
                        return null;
                      }
                      setShowAllAuditCards(false);
                      return item.severity;
                    });
                  } else {
                    setSelectedSeverity(null);
                    setShowAllAuditCards(true);
                  }
                }}
                className={`relative flex min-h-[146px] flex-col overflow-hidden rounded-[24px] border text-left outline-none transition ${item.border} ${item.bg} p-5 shadow-[0_18px_45px_rgba(31,34,43,0.08)] focus-visible:ring-4 focus-visible:ring-[#ffd531]/35 ${
                  isActive ? "ring-4 ring-[#232733]/12" : ""
                }`}
              >
                <span className={`absolute left-5 right-5 top-0 h-1 rounded-b-full ${item.accent}`} />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className={`text-lg font-bold ${item.tone}`}>{item.label}</h2>
                    <p className="mt-2 text-xs leading-5 text-[#6f6a63]">{item.description}</p>
                  </div>
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${item.iconBg}`}>
                    <Icon className={`h-5 w-5 ${item.tone}`} />
                  </div>
                </div>
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div className={`text-5xl font-bold leading-none ${item.tone}`}>{item.value}</div>
                  <span className={`rounded-full bg-white/65 px-3 py-1 text-[11px] font-bold ${item.tone}`}>{item.badge}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
        <AuditSeverityPie
          slices={mergedRiskSlices}
          total={searchFilteredAuditFindings.length}
          selectedSliceId={selectedRiskSliceId}
          onSelectSlice={(slice) => {
            setSelectedSeverity(null);
            if (selectedRiskSliceId === slice.id) {
              setSelectedRiskSliceId(null);
              setShowAllAuditCards(true);
            } else {
              setSelectedRiskSliceId(slice.id);
              setShowAllAuditCards(false);
            }
          }}
          onClearSelection={() => {
            setSelectedRiskSliceId(null);
            setSelectedSeverity(null);
            setShowAllAuditCards(true);
          }}
        />
      </div>

      <div className="grid gap-5">
        <Panel
          title="审查卡片"
          right={
            <div className="flex flex-wrap items-center justify-end gap-2">
              {selectedRiskSlice || selectedSeverity || showAllAuditCards ? (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRiskSliceId(null);
                    setSelectedSeverity(null);
                    setShowAllAuditCards(true);
                  }}
                  className="rounded-full bg-[#f6f2eb] px-3 py-1 text-xs font-bold text-[#6f6a63] transition hover:bg-[#e8e2d8]"
                >
                  清除筛选
                </button>
              ) : null}
              <Tag tone={(selectedRiskSlice?.severity ?? selectedSeverity) === "Low" ? "sky" : (selectedRiskSlice?.severity ?? selectedSeverity) === "Medium" ? "amber" : "rose"}>
                {selectedRiskSlice
                  ? `${selectedRiskSlice.group} · ${cardFilteredAuditFindings.length} 条`
                  : selectedSeverity
                    ? `${severityLabel[selectedSeverity]} · ${cardFilteredAuditFindings.length} 条`
                    : showAllAuditCards
                      ? `${cardFilteredAuditFindings.length} 条发现`
                      : "未选择"}
              </Tag>
            </div>
          }
        >
          {selectedRiskSlice ? (
            <div className="mb-4 rounded-[18px] bg-[#f6f2eb] px-4 py-3 text-sm font-bold text-[#20222b]">
              当前显示：{selectedRiskSlice.group} 对应 skill
            </div>
          ) : selectedSeverity ? (
            <div className="mb-4 rounded-[18px] bg-[#f6f2eb] px-4 py-3 text-sm font-bold text-[#20222b]">
              当前显示：{severityLabel[selectedSeverity]} 对应 skill
            </div>
          ) : showAllAuditCards ? (
            <div className="mb-4 rounded-[18px] bg-[#f6f2eb] px-4 py-3 text-sm font-bold text-[#20222b]">
              当前显示：全部 skill
            </div>
          ) : null}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {cardFilteredAuditFindings.map((finding, index) => {
              const functionCategory = getFunctionSliceForSkill(finding.skill)?.group ?? "未分类";
              const riskCategory = inferRiskLabel(finding);
              const findingCount = getSkillFindingCount(finding.skill);
              const shortParts = finding.skill.split("__").filter(Boolean);
              const shortSkillName = shortParts[shortParts.length - 1] ?? finding.skill;
              const tone = auditCardTone[finding.severity];
              return (
                <motion.button
                  type="button"
                  key={`${finding.skill}:${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.45) }}
                  whileHover={{ y: -3 }}
                  onClick={() => setSelectedAuditFinding(finding)}
                  className="group relative min-h-[248px] overflow-hidden rounded-[18px] border border-[#ebe3d8] bg-[#fffdf8] p-4 pl-5 text-left shadow-[0_12px_28px_rgba(31,34,43,0.06)] outline-none transition duration-300 hover:border-[#d9d0c4] hover:shadow-[0_18px_34px_rgba(31,34,43,0.09)] focus-visible:ring-4 focus-visible:ring-[#ffd531]/35"
                >
                  <div className={`absolute left-0 top-0 h-full w-1.5 ${tone.rail}`} />
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-start gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#252934] text-[#fff6c4] shadow-[0_12px_24px_rgba(31,34,43,0.12)]">
                        <BookMarked className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="mb-1 text-[11px] font-black text-[#8a8177]">Skill名称</div>
                        <div className="truncate text-base font-black text-[#20222b]">{shortSkillName}</div>
                      </div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="mb-1 text-[11px] font-black text-[#8a8177]">风险等级</div>
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-black ring-2 ring-white/80 ${auditSeverityBadge[finding.severity]}`}>
                        <TriangleAlert className="h-3.5 w-3.5" />
                        {severityLabel[finding.severity]}
                      </span>
                    </div>
                  </div>
                  <div className="grid gap-2 text-sm leading-6 text-[#5f594f]">
                    {[
                      { label: "风险类别", value: riskCategory },
                      { label: "功能类别", value: functionCategory },
                      { label: "Findings 数量", value: `${findingCount}` },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[14px] bg-[#f6f2eb] px-3 py-2">
                        <div className="text-[11px] font-black text-[#8a8177]">{item.label}</div>
                        <div className={`mt-0.5 truncate font-extrabold ${item.label === "Findings 数量" ? "text-base leading-6" : "text-sm"} text-[#20222b]`}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </Panel>

      </div>
      {selectedAuditFinding ? (
        <AuditFindingModal finding={selectedAuditFinding} onClose={() => setSelectedAuditFinding(null)} getSkillFindingCount={getSkillFindingCount} />
      ) : null}
    </Shell>
  );
}

export default function ClawGuardDashboard() {
  const [view, setView] = React.useState<"dashboard" | "events" | "audit">("dashboard");
  const [tokenUsageOpen, setTokenUsageOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<AuthUser | null>(() => loadCurrentUser());
  const [liveReport, setLiveReport] = React.useState<RuntimeReportApi | null>(null);
  const runtimeReportSelection = React.useMemo(() => buildRuntimeReportSelection(), []);
  const runtimeReportPath = runtimeReportSelection.path;
  const runtimeReportPinned = runtimeReportSelection.pinned;

  React.useEffect(() => {
    let active = true;
    let inFlight = false;
    const loadReport = async () => {
      if (inFlight) return;
      inFlight = true;
      try {
        const payload = await fetchFromApiCandidates<RuntimeReportApi>(
          runtimeReportPath,
          undefined,
          runtimeReportPinned ? 45000 : 15000,
        );
        if (!active) return;
        setLiveReport(payload);
      } catch {
        if (!active) return;
      } finally {
        inFlight = false;
      }
    };
    void loadReport();
    if (runtimeReportPinned) {
      return () => {
        active = false;
      };
    }
    const timer = window.setInterval(() => {
      void loadReport();
    }, 4000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [runtimeReportPath, runtimeReportPinned]);

  const recentTokenSnapshot = liveReport?.token_usage?.recent_sessions ?? null;
  const currentTokenSnapshot = React.useMemo(() => {
    const current = liveReport?.token_usage?.current_session ?? null;
    if ((current?.total_tokens ?? 0) > 0) return current;
    if ((recentTokenSnapshot?.total_tokens ?? 0) > 0) return recentTokenSnapshot;
    return current;
  }, [liveReport, recentTokenSnapshot]);
  const runtimeDynamicChain = liveReport?.dynamic_chain;
  const dashboardMetricCards = buildMetricCardsFromReport(liveReport?.overview);
  const runtimeEvents = React.useMemo(() => {
    if (!liveReport) return dynamicEvents;
    return mapTimelineToDynamicEvents(liveReport.timeline);
  }, [liveReport]);
  const runtimeRiskSignals = React.useMemo(() => {
    if (!liveReport) return riskSignals;
    return mapRuntimeSignalsToUi(liveReport.risk_signals);
  }, [liveReport]);
  const runtimeRiskSeverityCounts = React.useMemo(() => {
    if (!liveReport) return { Critical: 1, High: 2, Medium: 1 };
    return summarizeRuntimeRiskSeverities(liveReport.risk_signals);
  }, [liveReport]);

  function handleLogout() {
    saveCurrentUser(null);
    setTokenUsageOpen(false);
    setProfileOpen(false);
    setView("dashboard");
    setCurrentUser(null);
  }

  if (!currentUser) {
    return <AuthPage onAuthenticated={setCurrentUser} />;
  }

  if (view === "events") {
    return <DynamicEventsPage onBack={() => setView("dashboard")} events={runtimeEvents} />;
  }

  if (view === "audit") {
    return <StaticAuditPage onBack={() => setView("dashboard")} />;
  }

  return (
    <>
    <Shell active="dashboard" onDashboard={() => setView("dashboard")} onAudit={() => setView("audit")} onProfile={() => setProfileOpen(true)}>
      <Header title={`你好，${currentUser.name}`} subtitle="欢迎回到 ClawGuard 安全仪表盘" />

      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="grid gap-5 xl:grid-cols-12">
        <div className="space-y-5 xl:col-span-8">
          <div className="grid gap-5 lg:grid-cols-[1.45fr_0.95fr]">
            <BubbleMap overview={liveReport?.overview} />

            <motion.div
              role="button"
              tabIndex={0}
              whileHover={{ y: -3 }}
              onClick={() => setTokenUsageOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setTokenUsageOpen(true);
                }
              }}
              className="cursor-pointer rounded-[26px] outline-none focus-visible:ring-4 focus-visible:ring-[#ffd531]/35"
            >
              <Panel title="Token 用量" right={<Tag tone="violet">点击查看</Tag>}>
                <DonutChart snapshot={currentTokenSnapshot} recentSnapshot={recentTokenSnapshot} />
              </Panel>
            </motion.div>
          </div>

          <div className="grid gap-5">
            <Panel title="技能调用链" right={<Tag tone="amber">链路分析</Tag>}>
              <SkillChainGraph dynamicChain={runtimeDynamicChain} events={runtimeEvents} />
            </Panel>
          </div>

          {runtimeDynamicChain?.semantic_judgment?.should_flag ? (
            <div className="grid gap-5">
              <SemanticReviewCard dynamicChain={runtimeDynamicChain} />
            </div>
          ) : null}

          <div className="grid gap-5">
            <Panel
              title="动态行为监控"
              right={
                <button type="button" onClick={() => setView("events")} className="text-sm font-semibold text-[#20222b]">
                  查看全部
                </button>
              }
            >
              <div className="space-y-3">
                {runtimeEvents.length === 0 ? (
                  <div className="rounded-[18px] bg-[#edf7f7] px-4 py-4 text-sm text-[#347b82]">当前会话暂无动态事件。</div>
                ) : runtimeEvents.slice(0, 4).map((event) => {
                  const Icon = event.icon;
                  return (
                    <motion.button
                      type="button"
                      key={event.type}
                      whileHover={{ x: 3 }}
                      onClick={() => setView("events")}
                      className={`flex w-full items-center gap-3 rounded-[18px] px-4 py-3 text-left transition ${toneClass(event.tone)}`}
                    >
                      <div className="rounded-full bg-white/60 p-2">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold">{event.type}</div>
                        <div className="truncate text-xs opacity-75">{event.detail}</div>
                      </div>
                      <div className="shrink-0 text-xs opacity-60">{event.time}</div>
                    </motion.button>
                  );
                })}
              </div>
            </Panel>
          </div>

        </div>

        <div className="space-y-5 xl:col-span-4">
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {dashboardMetricCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} className={`rounded-[20px] p-4 transition duration-300 ${metricTone[item.tone]}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold">{item.title}</span>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="mt-1 text-xs opacity-70">{item.sub}</div>
                </motion.div>
              );
            })}
          </div>

          <Panel title="静态风险信号" right={<Tag tone="rose">后端实时</Tag>}>
            <div className="mb-4 grid grid-cols-3 gap-3">
              <div className="rounded-[18px] bg-[#fff0ec] p-3">
                <div className="text-xs text-[#a74a40]">Critical</div>
                <div className="mt-1 text-2xl font-bold text-[#ff7163]">{runtimeRiskSeverityCounts.Critical}</div>
              </div>
              <div className="rounded-[18px] bg-[#fff6d2] p-3">
                <div className="text-xs text-[#8b6a00]">High</div>
                <div className="mt-1 text-2xl font-bold text-[#d5a900]">{runtimeRiskSeverityCounts.High}</div>
              </div>
              <div className="rounded-[18px] bg-[#edf7f7] p-3">
                <div className="text-xs text-[#347b82]">Medium</div>
                <div className="mt-1 text-2xl font-bold text-[#57959b]">{runtimeRiskSeverityCounts.Medium}</div>
              </div>
            </div>

            <div className="space-y-3">
              {runtimeRiskSignals.length === 0 ? (
                <div className="rounded-[20px] bg-[#edf7f7] px-4 py-4 text-sm text-[#347b82]">当前会话暂无风险信号。</div>
              ) : runtimeRiskSignals.map((item) => (
                <motion.div key={item.title} whileHover={{ scale: 1.01 }} className="rounded-[20px] bg-[#f6f2eb] p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Tag tone={item.tone}>{item.tag}</Tag>
                    <div className="text-xs font-semibold text-[#8a8177]">score {item.score}</div>
                  </div>
                  <div className="break-all text-sm font-bold leading-6">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-[#6f6a63]">{item.desc}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-[#e8e2d8] pt-3 text-xs text-[#6f6a63]">
                    <span>{item.evidence}</span>
                    <MoreHorizontal className="h-4 w-4 shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </Panel>

        </div>
      </motion.div>
    </Shell>
    {tokenUsageOpen ? (
      <TokenUsageModal
        onClose={() => setTokenUsageOpen(false)}
        currentSnapshot={currentTokenSnapshot}
        recentSnapshot={recentTokenSnapshot}
      />
    ) : null}
    {profileOpen ? <ProfileHomeModal user={currentUser} onClose={() => setProfileOpen(false)} onLogout={handleLogout} /> : null}
    </>
  );
}
