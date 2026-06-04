import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleDotDashed,
  Code2,
  FileSearch,
  Gauge,
  GitBranch,
  Network,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type LandingPageProps = {
  onEnterDashboard: () => void;
};

const navItems = ["特色", "工作原理", "应用场景", "选择我们", "GitHub"];

const previewExamples = [
  "SVG、文档或网页中是否藏有诱导 Agent 偏离任务的指令？",
  "Skill 调用链是否出现跨能力域漂移或异常循环？",
  "Token 消耗、调用频率和结果膨胀是否正在放大风险？",
];

const previewTiles = [
  { title: "静态预判", desc: "先解析外部载荷，提取能力标签与任务一致性信号。" },
  { title: "动态验证", desc: "在运行中重建调用链，确认异常是否真实发生。" },
  { title: "告警处置", desc: "把风险证据、等级和阻断动作组织成闭环。" },
];

const features = [
  {
    title: "动静态协同分析",
    desc: "静态侧识别不可信内容、能力漂移和可疑 Skill，动态侧验证运行时调用链是否真的偏离任务。",
    icon: Radar,
  },
  {
    title: "Skill 链式攻击监测",
    desc: "从单点检测扩展到链路审计，持续追踪跨 Skill 漂移、异常循环和链式滥用。",
    icon: GitBranch,
  },
  {
    title: "资源与 Token 守卫",
    desc: "把调用次数、Token 消耗和中间结果膨胀纳入风险判断，识别隐蔽的资源放大攻击。",
    icon: Gauge,
  },
  {
    title: "实时告警与在线阻断",
    desc: "将静态命中、动态命中和联合风险映射为告警，并支持对高风险链路进行中断处置。",
    icon: ShieldAlert,
  },
];

const principles = [
  {
    title: "静态预判",
    desc: "解析 SVG、文档、网页与 SKILL.md，抽取隐藏文本、能力标签和任务一致性信号。",
  },
  {
    title: "运行建模",
    desc: "把每一次 Skill / Tool 调用抽象为 RuntimeEvent，记录顺序、对象、父子关系和结果变化。",
  },
  {
    title: "链路验证",
    desc: "围绕会话和主任务重建调用链，识别重复调用、跨能力域漂移和异常路径。",
  },
  {
    title: "告警处置",
    desc: "将风险类别、证据链和处置动作联动，形成前置预判、运行验证、告警阻断闭环。",
  },
];

const useCases = [
  { title: "图片木马防护", desc: "识别 SVG 或图片中的隐写指令，阻止 Agent 被诱导进入重复读取、校验和修复循环。", icon: FileSearch },
  { title: "供应链投毒监测", desc: "监控依赖安装、下载执行和敏感数据访问链路，发现借正常任务掩盖的外传行为。", icon: Network },
  { title: "拼接式攻击识别", desc: "将多个看似合规的 Skill 组合关系纳入分析，识别由合法片段拼接出的恶意执行链。", icon: Code2 },
];

const comparisonRows = [
  { ability: "风险识别粒度", traditional: "单点规则或关键词扫描", clawguard: "跨 Skill 调用链审计" },
  { ability: "外部载荷处理", traditional: "执行后补充分析", clawguard: "静态预判隐藏指令" },
  { ability: "运行时监测", traditional: "只看日志或请求结果", clawguard: "RuntimeEvent 事件建模" },
  { ability: "链式攻击发现", traditional: "难以识别合法技能组合风险", clawguard: "识别漂移、循环和异常路径" },
  { ability: "资源安全", traditional: "缺少成本放大感知", clawguard: "Token 与调用频率实时监控" },
  { ability: "处置闭环", traditional: "人工复核后处理", clawguard: "告警解释与在线阻断联动" },
  { ability: "部署适配", traditional: "依赖深度改造或单一模式", clawguard: "旁路监听 + 内联拦截双模式" },
];

const githubCards = [
  { title: "核心代码", desc: "静态分析、动态监测、告警生成和在线阻断模块可按目录拆分维护。" },
  { title: "演示数据", desc: "保留图片木马、跨 Skill 漂移、异常调用链和资源放大等测试场景。" },
  { title: "部署说明", desc: "说明旁路监听、内联钩子、前端面板和 OpenClaw 接入方式。" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const titleFontClass = "font-['SimSun','Songti_SC','STSong',serif]";

export default function LandingPage({ onEnterDashboard }: LandingPageProps) {
  return (
    <main className="min-h-full overflow-hidden bg-[#fffdf8] text-[#20222b]">
      <header className="sticky top-0 z-40 border-b border-[#ebe3d8] bg-[#fffdf8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 no-underline">
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-11 w-11 place-items-center rounded-lg bg-[#232733] text-[#ffd531] shadow-[0_14px_28px_rgba(31,34,43,0.18)]"
            >
              <ShieldCheck className="h-5 w-5" />
            </motion.div>
            <div>
              <div className="text-base font-black text-[#20222b]">ClawGuard</div>
              <div className="text-xs font-semibold text-[#8a8177]">Agent 实时防护平台</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold text-[#6f6a63] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="transition hover:text-[#20222b]">
                {item}
              </a>
            ))}
          </nav>

          <motion.button
            type="button"
            onClick={onEnterDashboard}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#232733] px-5 text-sm font-black text-[#fff6c4] shadow-[0_12px_26px_rgba(31,34,43,0.2)] transition hover:bg-[#171a23] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#ffd531]/35"
          >
            进入仪表盘
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-[#ebe3d8] bg-[radial-gradient(circle_at_18%_24%,rgba(255,213,49,0.22),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(136,188,192,0.20),transparent_34%),radial-gradient(circle_at_72%_78%,rgba(216,74,62,0.10),transparent_36%),linear-gradient(135deg,#fffdf8_0%,#fbf4e8_46%,#eef8f8_100%)]">
        <HeroGlow />
        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffd531]/50 bg-[#fff6d2] px-4 py-2 text-xs font-black text-[#8b6a00] shadow-[0_10px_24px_rgba(255,213,49,0.12)]">
              <Sparkles className="h-4 w-4" />
              面向 Agent Skill 链式攻击的动静态实时监测
            </motion.div>

            <motion.h1 variants={fadeUp} className={`max-w-4xl text-4xl font-black leading-[1.06] tracking-normal text-[#20222b] sm:text-5xl lg:text-6xl ${titleFontClass}`}>
              ClawGuard，
              <span className="block text-[#20222b]">让Agent调用链安全可见。</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base font-medium leading-8 text-[#5f594f] sm:text-lg">
              基于开题报告中的设计，系统以 OpenClaw 场景为目标，将静态载荷分析、运行时事件建模、Skill 调用链追踪、Token 资源监控和在线阻断整合为完整防护闭环。
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#特色"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#232733]/15 bg-white px-5 text-sm font-black text-[#20222b] shadow-[0_10px_24px_rgba(31,34,43,0.08)] transition hover:-translate-y-0.5"
              >
                查看特色
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#工作原理"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#f6f2eb] px-5 text-sm font-black text-[#6f6a63] transition hover:-translate-y-0.5 hover:text-[#20222b]"
              >
                了解工作原理
              </a>
            </motion.div>
          </motion.div>

          <PipelinePreview />
        </div>
      </section>

      <section id="特色" className="relative mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="特色" title="围绕链式攻击构建的实时防护能力" desc="ClawGuard 不只检测单个恶意 Skill，而是把外部内容、任务意图、调用链和资源消耗放在同一个风险上下文中分析。" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </motion.div>
      </section>

      <section id="工作原理" className="relative overflow-hidden bg-[#232733] text-[#fff6c4]">
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-32 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <div className="text-xs font-black text-[#ffd531]">工作原理</div>
            <h2 className={`mt-3 text-4xl font-black leading-tight ${titleFontClass}`}>先判断可能偏向哪里，再验证是否真的发生漂移</h2>
            <p className="mt-5 text-sm font-medium leading-7 text-[#fff6c4]/70">
              系统通过静态分析回答“外部内容可能诱导 Agent 进入哪些能力域”，再由动态监测回答“Agent 是否沿着这些方向产生异常调用链”。
            </p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="grid gap-3">
            {principles.map((step, index) => (
              <PrincipleStep key={step.title} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="应用场景" className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="应用场景" title="覆盖典型 Skill 链式攻击路径" desc="从图片木马、供应链投毒到拼接式攻击，页面内容基于开题报告中的典型威胁模型整理。" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-8 grid gap-4 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <UseCaseCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </section>

      <section id="选择我们" className="border-y border-[#ebe3d8] bg-[#f6f2eb]">
        <div className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-black text-[#8a8177]">选择我们</div>
            <h2 className={`mt-3 text-4xl font-black leading-tight text-[#20222b] ${titleFontClass}`}>不只是统计，更是链路级防护</h2>
            <p className="mt-4 text-sm font-medium leading-7 text-[#5f594f]">
              相比传统单点扫描或日志展示，ClawGuard 将静态预判、运行验证、资源监控与在线处置放在同一张风险表里。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="mt-10 overflow-hidden rounded-[24px] border border-[#e8e2d8] bg-[#fffdf8] shadow-[0_24px_60px_rgba(31,34,43,0.08)]"
          >
            <div className="grid grid-cols-[0.9fr_1fr_1.15fr] bg-[#f6f2eb] text-sm font-black text-[#20222b]">
              <div className="px-5 py-5">能力</div>
              <div className="px-5 py-5">传统方式</div>
              <div className="bg-[#232733] px-5 py-5 text-[#ffd531]">ClawGuard</div>
            </div>
            {comparisonRows.map((row, index) => (
              <div key={row.ability} className={`grid grid-cols-[0.9fr_1fr_1.15fr] text-sm font-semibold ${index % 2 === 0 ? "bg-[#fffdf8]" : "bg-[#fbf8f2]"}`}>
                <div className="border-t border-[#ebe3d8] px-5 py-5 text-[#20222b]">{row.ability}</div>
                <div className="border-t border-[#ebe3d8] px-5 py-5 text-[#5f594f]">
                  <span className="mr-2 text-[#d84a3e]">×</span>
                  {row.traditional}
                </div>
                <div className="border-t border-[#e8e2d8] bg-[#fff6d2] px-5 py-5 font-black text-[#8b6a00]">
                  <span className="mr-2 text-[#d5a900]">✓</span>
                  {row.clawguard}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="GitHub" className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-[#ebe3d8] bg-[#232733] p-6 text-[#fff6c4] shadow-[0_24px_60px_rgba(31,34,43,0.14)] lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-[#ffd531] text-[#232733]">
              <Code2 className="h-6 w-6" />
            </div>
            <div className="text-xs font-black text-[#ffd531]">GitHub</div>
            <h2 className={`mt-3 text-4xl font-black leading-tight ${titleFontClass}`}>ClawGuard 开源仓库</h2>
            <p className="mt-5 text-sm font-medium leading-7 text-[#fff6c4]/70">
              查看项目代码、部署说明以及围绕 Agent Skill 链式攻击整理的测试内容。
            </p>
            <a
              href="https://github.com/Exploo0Osion/ClawGuard"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-[#ffd531] px-5 text-sm font-black text-[#232733] transition hover:-translate-y-0.5"
            >
              打开 GitHub
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-3">
            {githubCards.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/8 p-4">
                <div className="text-lg font-black">{item.title}</div>
                <p className="mt-2 text-sm font-medium leading-7 text-[#fff6c4]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroGlow() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 26, 0], y: [0, -18, 0], opacity: [0.42, 0.68, 0.42] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[18%] h-72 w-72 rounded-full bg-[#ffd531]/24 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -28, 0], y: [0, 20, 0], opacity: [0.36, 0.62, 0.36] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-[20%] h-96 w-96 rounded-full bg-[#88bcc0]/24 blur-3xl"
      />
    </>
  );
}

function PipelinePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.58, delay: 0.05 }}
      className="relative z-10"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto max-w-[720px] overflow-hidden rounded-[22px] bg-[#0b1b2e] p-5 shadow-[0_24px_60px_rgba(11,27,46,0.24)]"
      >
        <div className="mb-5 flex items-center gap-3">
          <motion.div
            animate={{ boxShadow: ["0 0 0 0 rgba(34,211,238,0.22)", "0 0 0 10px rgba(34,211,238,0)", "0 0 0 0 rgba(34,211,238,0)"] }}
            transition={{ duration: 2.4, repeat: Infinity }}
            className="grid h-10 w-10 place-items-center rounded-lg bg-[#ffd531]/15 text-[#ffd531]"
          >
            <ShieldCheck className="h-4 w-4" />
          </motion.div>
          <div>
            <div className="text-xs font-semibold text-white">防护预览</div>
            <div className="mt-1 text-[11px] font-medium text-[#fff6c4]/70">动静态协同链路</div>
          </div>
        </div>

        <div className="grid gap-3">
          {previewExamples.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.18 + index * 0.08 }}
              whileHover={{ x: 4 }}
              className="rounded-[14px] border border-[#27435b] bg-[#13263b] px-5 py-4"
            >
              <div className="text-xs font-semibold text-[#ffd531]/70">示例 {index + 1}</div>
              <div className="mt-1.5 text-base font-medium leading-7 text-[#fff6c4]">{item}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {previewTiles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.46 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-[14px] border border-[#27435b] bg-[#13263b] p-4"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs font-medium leading-6 text-[#fff6c4]/68">{item.desc}</p>
            </motion.div>
          ))}
        </div>
              </motion.div>
    </motion.div>
  );
}

function FeatureCard({ item }: { item: (typeof features)[number] }) {
  const Icon = item.icon;

  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-lg border border-[#ebe3d8] bg-white/70 p-5 shadow-[0_14px_34px_rgba(31,34,43,0.06)] transition hover:border-[#d9d0c4]">
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-[#232733] text-[#ffd531] transition group-hover:-rotate-3 group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="text-xl font-black">{item.title}</h2>
      <p className="mt-3 text-sm font-medium leading-7 text-[#6f6a63]">{item.desc}</p>
    </motion.article>
  );
}

function PrincipleStep({ step, index }: { step: (typeof principles)[number]; index: number }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ x: 6 }} className="grid gap-4 rounded-lg border border-white/10 bg-white/8 p-4 sm:grid-cols-[56px_1fr_auto] sm:items-center">
      <motion.div
        animate={{ boxShadow: ["0 0 0 0 rgba(255,213,49,0.18)", "0 0 0 10px rgba(255,213,49,0)", "0 0 0 0 rgba(255,213,49,0)"] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
        className="grid h-12 w-12 place-items-center rounded-lg bg-[#ffd531] text-[#232733]"
      >
        <CircleDotDashed className="h-5 w-5" />
      </motion.div>
      <div>
        <div className="text-xs font-black text-[#fff6c4]/55">步骤 {index + 1}</div>
        <div className="mt-1 text-lg font-black">{step.title}</div>
        <p className="mt-1 text-sm leading-6 text-[#fff6c4]/65">{step.desc}</p>
      </div>
      <CheckCircle2 className="hidden h-5 w-5 text-[#ffd531] sm:block" />
    </motion.div>
  );
}

function UseCaseCard({ item, index }: { item: (typeof useCases)[number]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }} className="rounded-lg border border-[#ebe3d8] bg-[#fffdf8] p-6 shadow-[0_14px_34px_rgba(31,34,43,0.06)]">
      <div className="mb-6 flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#f6f2eb] text-[#d84a3e]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-[#fff6d2] px-3 py-1 text-xs font-black text-[#8b6a00]">场景 {index + 1}</span>
      </div>
      <h2 className="text-2xl font-black">{item.title}</h2>
      <p className="mt-3 text-sm font-medium leading-7 text-[#6f6a63]">{item.desc}</p>
    </motion.article>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.4 }} className="max-w-3xl">
      <div className="text-xs font-black text-[#8a8177]">{eyebrow}</div>
      <h2 className={`mt-3 text-4xl font-black leading-tight text-[#20222b] ${titleFontClass}`}>{title}</h2>
      <p className="mt-4 text-sm font-medium leading-7 text-[#6f6a63]">{desc}</p>
    </motion.div>
  );
}
