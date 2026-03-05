import {
  ArrowUpRight,
  BadgeDollarSign,
  BotIcon,
  CircleHelp,
  Layers3,
  PanelsTopLeft,
  Sparkles,
  Users2
} from "lucide-react";
import { useEffect, useState } from "react";
import DayCounter from "../DayCounter";
import { AiSample, Carousel, SystemCanvas, ValueStrip } from "../design-system";
import CtaGroup from "../design-system/CtaGroup";
import DesignSection from "../design-system/DesignSection";
import FaqList from "../design-system/FaqList";
import HeroFeatureBento from "../design-system/HeroFeatureBento";
import TimelineModule from "../design-system/TimelineModule";
import VerticalTimeline from "../design-system/VerticalTimeline";

const trialLink = "https://wxycbt0cjk.feishu.cn/wiki/VQZjwNCS7i1d83kOgrOc0oDtnKb";
const buyoutLink = "https://wxycbt0cjk.feishu.cn/wiki/Hfz9wTuqpiDIkokAMETcoRjnnmh";
const agreementLink = "https://wxycbt0cjk.feishu.cn/wiki/LnQMwwbZui7uFXkfkYocmHmNnpx";
const documentLink = "https://wxycbt0cjk.feishu.cn/wiki/F14cwgZrGiM3CxkekUxcEr5YnSg";
const releaseLink = "https://wxycbt0cjk.feishu.cn/wiki/UqirwCMBeilp8Qk38gKcLFjCndf?table=blkixTV7KBDvSpDg";
const heroUseCases = [
  {
    image: "./img/feature/template-emotion.png",
  },
  {
    image: "./img/feature/homepage-3.png",
  },
  {
    image: "./img/feature/homepage2.png",
  },
  {
    image: "./img/feature/homepage.png",
  },
  
]


const price = 128;

const templateModules = [
  {
    title: "VPara",
    image: "./img/feature/template-vpara.png",
    detail: "当任务和资料越积越乱时，VPara 用 PARA 结构和最少插件帮你统一收集、分拣、执行。已在多领域实践，累计项目超 1000 个，完成率约 90%。",
    link: "https://my.feishu.cn/wiki/Ol44wnbF9iO3iAkbqeJcCqnJn9b",
  },
  {
    title: "Emotion",
    image: "./img/feature/template-emotion.png",
    detail: "情绪管理常见问题是“记了很多，却看不清规律”。这个模板把打卡、日记、仪表盘串成闭环，帮助你识别触发因素并调整节奏。",
    link: "https://my.feishu.cn/wiki/Ddh4wfyO8ihTEEkkXFHckWy2nPe",
  },
  {
    title: "Home",
    image: "./img/feature/homepage-3.png",
    detail: "主页常见痛点是“好看但不好用”。这个模板把组件、图表、数据视图整合在一屏，让你每天打开就能看清重点并立即行动。",
    link: "https://my.feishu.cn/record/DtGTr0R5keDjjYc0FVgcUGHznWd",
  },
  {
    title: "习惯系统",
    image: "./img/feature/habit.png",
    detail: "习惯难坚持，多半因为反馈太弱。用打卡组件和数据视图搭建可视化追踪系统，及时看到趋势变化，持续强化执行。",
    link: "https://my.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
  }
];

const userStories = [
  {
    author: "自权的 SPACE",
    description: "公众号'自权的 SPACE'作者，效率工具玩家",
    img: "./img/user-stories/ziquandespace.png",
    readMore: {
      url: "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ",
      text: "查看教程 →",
    },
  },
  {
    author: "二宝学长",
    description: "用 obsidian 写了 14 万字论文的学术写作教练",
    img: "./img/user-stories/erbao.jpg",
  },
  {
    author: "TracingOrigins",
    description: "江湖人称惊佬，模板库 Rainbow Components 作者。",
    img: "./img/user-stories/tracingorigins.png",
    readMore: {
      url: "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b",
      text: "下载模板 →",
    },
  },
  {
    author: "Moy",
    img: "./img/user-stories/moy.jpeg",
    description: "Obsidian？这可比游戏好玩儿多了！",
  },
  {
    author: "Moy",
    img: "./img/user-stories/moy2.jpg",
    description: "Obsidian？这可比游戏好玩儿多了！",
  },

  {
    author: "vran",
    img: "./img/user-stories/vran.png",
    description: "不小心混进来的～",
    readMore: {
      url: "https://www.bilibili.com/video/BV1mm421G7xX/?share_source=copy_web&vd_source=8ccbcd34f75fd457148a9654b5ffab99",
      text: "观看视频 →",
    },
  },
  {
    author: "vran",
    img: "./img/user-stories/vran2.jpg",
    description: "不小心混进来的～",
  },
  {
    author: "毛无语",
    img: "./img/user-stories/maowuyu.jpg",
  },
  {
    author: "🐟",
    description: "猫猫上墙🐱",
    img: "./img/user-stories/fish.jpg",
  },
  {
    author: "🐟",
    description: "猫猫上墙🐱",
    img: "./img/user-stories/fish2.jpg",
  },

  {
    author: "橘子",
    description: "",
    img: "./img/user-stories/橘子-2-light.jpg",
  },
  {
    author: "橘子",
    description: "Obsidian重度使用者，喜欢折腾",
    img: "./img/user-stories/橘子-2-dark.jpg",
  },
  {
    author: "橘子",
    description: "Obsidian重度使用者，喜欢折腾",
    img: "./img/user-stories/橘子.jpg",
  },
  {
    author: "里安",
    description: "EVA 主题示例库",
    img: "./img/user-stories/lian-eva.jpg",
    readMore: {
      url: "https://www.bilibili.com/video/BV1Ax4xeKEVf/",
      text: "获取模板 →",
    },
  },
  {
    author: "kairitsuhou",
    description: "在东京靠Obsidian吊命的游戏美术人",
    img: "./img/user-stories/kairitsuhou.jpg",
  },
  {
    author: "The Fool",
    description: "活跃在 obsidian 社区的热心极客",
    img: "./img/user-stories/thefool.jpg",
  },
  {
    author: "霖",
    img: "./img/user-stories/霖.jpg",
  },
  {
    author: "季风",
    img: "./img/user-stories/季风.jpg",
  },
];

const faqItems = [
  {
    question: "买断后是否包含后续更新？",
    answer: "包含。买断后可持续获取新组件与功能更新。",
  },
  {
    question: "不会写代码可以使用 Components 吗？",
    answer: "可以。核心能力是可视化搭建，代码不是使用前提。",
  },
  {
    question: "AI 功能如何接入？",
    answer: "你可以配置自己的 AI 服务商与模型，保持可控、可替换。",
  },
  {
    question: "AI Agent 可以做什么？",
    answer: "可在全库范围协助管理知识、创建组件、生成内容。",
  },
  {
    question: "购买后在哪里查看文档和协议？",
    answer: (
      <span>
        可查看{" "}
        <a
          href={documentLink}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[var(--cp-text-primary)] transition-colors"
        >
          使用文档
        </a>{" "}
        与{" "}
        <a
          href={agreementLink}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[var(--cp-text-primary)] transition-colors"
        >
          购买协议
        </a>
        。
      </span>
    ),
  },
  {
    question: "遇到问题如何获得支持？",
    answer: "可通过文档、更新日志和购买后支持渠道获得持续帮助。",
  },
];

const aboutProducts = [
  {
    name: "Components",
    category: "Obsidian Plugin",
    description: "当前项目，一个可视化构建 Obsidian 知识系统的插件。",
    status: "闭源",
    link: "https://github.com/obsidian-components/obsidian-components-release",
  },
  {
    name: "Composer",
    category: "Obsidian Theme",
    description: "一款简洁的 Obsidian 主题。",
    status: "开源",
    link: "https://github.com/vran-dev/obsidian-composer",
  },
  {
    name: "Form-flow",
    category: "Obsidian Plugin",
    description: "超强大的 Obsidian 生产力插件，可用于快速收集内容与执行自动化逻辑。",
    status: "开源",
    link: "https://github.com/vran-dev/obsidian-form-flow",
  },
  {
    name: "Contribution graph",
    category: "Dataview Plugin",
    description: "依赖 Dataview 的超灵活 Obsidian 热力图插件。",
    status: "开源",
    link: "https://github.com/vran-dev/obsidian-contribution-graph",
  },
  {
    name: "databasir",
    category: "Database Platform",
    description: "一款开源的数据库 Schema 自动化管理平台。",
    status: "开源",
    link: "https://github.com/vran-dev/databasir",
  },
  {
    name: "prettyZoo",
    category: "Developer Tool",
    description: "开源的 ZooKeeper 可视化 GUI 客户端。",
    status: "开源",
    link: "https://github.com/vran-dev/PrettyZoo",
  },
];

export default function Main() {
  return (
    <div className="cp-tech-bg">
      <DesignSection surface="transparent" className="pt-8 md:pt-12 pb-8 md:pb-12">
        <VerticalTimeline className="max-w-[1160px]">
          <TimelineModule
            id="top"
            icon={<Sparkles size={14} />}
            nodeLabel="Components"
            emphasis="base"
            title={
              <div className="relative inline-block w-fit pt-2">
                <div className="cp-mono-display text-5xl md:text-7xl leading-none">Components</div>
              </div>
            }
            contentOffsetClassName="mt-4"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              <TypewriterTitleLine
                text="告别代码，让在 Obsidian 中搭建系统成为一种简单的乐趣"
                className="max-w-3xl"
              />

              <Carousel items={heroUseCases}              
              />

              <ValueStrip items={[

                {
                  label: "可视化搭建",
                  tone: "success"
                },
                {
                  label: "模板开箱即用",
                  tone: "success"
                },
                {
                  label: "AI 提效",
                  tone: "success"
                },
                {
                  label: "买断制授权",
                  tone: "brand"
                },
              ]} />

              <CtaGroup
                primary={{ label: "开始试用", href: trialLink, target: "_blank" }}
                secondary={{ label: `直接买断 →`, href: buyoutLink, target: "_blank" }}
              />
            </div>
          </TimelineModule>

          <TimelineModule
            id="feature-data"
            icon={<Layers3 size={14} />}
            emphasis="base"
            title="把笔记变成可执行系统"
            subtitle="任务、资料、进度常常分散在不同页面。把它们拉到同一视图后，优先级和下一步会更清晰。"
          >
            <HeroFeatureBento />
          </TimelineModule>

          <TimelineModule
            id="feature-components"
            icon={<Layers3 size={14} />}
            emphasis="base"
            title="用 15+ 种组件支撑你的想象力"
            subtitle="不用写代码，拖拽组合即可搭建项目面板、知识主页、复盘系统与个人仪表盘。"
          >
            <SystemCanvas />
          </TimelineModule>

          <TimelineModule
            id="feature-ai"
            icon={<BotIcon size={14} />}
            emphasis="base"
            title="一个真正可以帮你干活儿的 AI 助手"
            subtitle="从整理全库笔记、生成组件到草拟内容，让“知道要做什么”变成“马上开始做”"
          >
            <AiSample />
          </TimelineModule>

          <TimelineModule
            id="templates"
            icon={<PanelsTopLeft size={14} />}
            emphasis="base"
            title="你不需要从空白页开始"
            subtitle="常见难题都已沉淀成模板：项目推进、主页搭建、习惯追踪。套用即用，边用边改，快速进入可执行状态。"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
              {templateModules.map((item) => (
                <article key={item.title} className="cp-card cp-card--default">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-xl border border-[var(--cp-border)]"
                  />
                  <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">{item.title}</h3>
                  <p className="text-[var(--cp-text-secondary)]">{item.detail}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--cp-text-primary)] underline"
                  >
                    查看模板方案 <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </TimelineModule>

          <TimelineModule
            id="cases"
            icon={<Users2 size={14} />}
            nodeLabel="用户案例"
            emphasis="emphasized"
            title="用户案例"
            subtitle="他们也经历过“笔记很多、行动很少”。看看真实用户如何用 Components 搭出可执行系统。"
          >
            <div className="cp-horizontal-scroll">
              <div className="cp-horizontal-track">
                {userStories.map((item) => (
                  <article
                    key={item.author + item.img}
                    className="border-[var(--cp-border)]  rounded-xl p-4 flex-shrink-0 w-full sm:w-auto flex flex-col gap-2 bg-[var(--cp-surface-2)]"
                  >
                    <div className="flex-1 max-h-96 overflow-y-auto ">
                      <img
                        src={item.img}
                        alt={item.author}
                        className="w-full rounded-xl border border-[var(--cp-border)]  object-cover"
                      />
                    </div>
                    <p className="text-[var(--cp-text-primary)] font-semibold">@{item.author}</p>
                    {item.description ? (
                      <p className="text-[var(--cp-text-secondary)]">{item.description}</p>
                    ) : null}
                    {item.readMore ? (
                      <a
                        href={item.readMore.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--cp-text-secondary)] underline hover:text-[var(--cp-text-primary)] transition-colors"
                      >
                        {item.readMore.text} <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </TimelineModule>

          <TimelineModule
            id="price"
            icon={<BadgeDollarSign size={14} />}
            emphasis="emphasized"
            title="试用和买断"
            subtitle="先试用验证，再按需买断，把决策风险降到最低。"
          >
            <article className="mb-4 cp-card cp-card--default" style={{ border: "none", background: "var(--cp-surface-2)" }}>
              <DayCounter
                startDate="2024-01-17"
                label="Components 持续打磨中"
              />
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--cp-text-secondary)]">
                <a
                  href={agreementLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[var(--cp-text-primary)] transition-colors"
                >
                  查看购买协议
                </a>
                <a
                  href={releaseLink}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[var(--cp-text-primary)] transition-colors"
                >
                  最近更新日志
                </a>
              </div>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
              <article className="cp-card cp-card--default">
                <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">7 天全功能试用</h3>
                <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">0 元 / 人</p>
                <p className="text-sm text-[var(--cp-text-secondary)]">先验证是否解决你的核心问题，再决定是否买断。</p>
                <a
                  href={trialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
                >
                  免费开始
                </a>
              </article>

              <article className="cp-card cp-card--brand">
                <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">一次买断，长期可用</h3>
                <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">{price} 元 / 人</p>
                <div className="cp-result-line">解决方案持续迭代，不再重复投入</div>
                <ul className="space-y-2 text-sm text-[var(--cp-text-secondary)]">
                  <li>解锁全部组件与数据库能力</li>
                  <li>可接入 AI 模型，支持全库协作</li>
                  <li>会员群答疑与使用支持</li>
                  <li>模板库持续扩展，开箱即用</li>
                  <li>组件能力持续更新</li>
                </ul>
                <a
                  href={buyoutLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
                >
                  立即买断
                </a>
              </article>
            </div>

          </TimelineModule>

          <TimelineModule
            id="faq"
            icon={<CircleHelp size={14} />}
            nodeLabel="FAQ"
            emphasis="base"
            title="常见问题"
          >
            <FaqList items={faqItems} />
          </TimelineModule>

          <TimelineModule
            id="about-me"
            icon={<CircleHelp size={14} />}
            nodeLabel="about-me"
            emphasis="base"
            title="关于我"
            subtitle="上世纪侥幸生存下来的古法编程爱好者，开源过几个产品（累计 star 4k+），正在适应新时代进化，代表作："
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {aboutProducts.map((item) => (
                <article key={item.name} className="cp-card cp-card--default gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-[var(--cp-text-primary)]">{item.name}</h3>
                    <span className={`cp-tag ${item.status === "开源" ? "cp-tag--success" : "cp-tag--brand"} py-1 px-2 text-[10px]`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="cp-mono text-xs text-[var(--cp-text-secondary)]">{item.category}</p>
                  <p className="text-sm text-[var(--cp-text-secondary)] leading-relaxed">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[var(--cp-text-primary)] underline"
                  >
                    查看仓库 <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </TimelineModule>
        </VerticalTimeline>
      </DesignSection>
    </div>
  );
}

function TypewriterTitleLine(props: { text: string; className?: string }) {
  const { text, className } = props;
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let cursor = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        cursor += 1;
        setDisplayText(text.slice(0, cursor));
        if (cursor >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, 36);
    }, 180);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text]);

  const done = displayText.length >= text.length;

  return (
    <p
      className={`cp-typewriter-line text-base md:text-lg text-[var(--cp-text-secondary)] leading-relaxed ${className ?? ""}`}
      aria-label={text}
    >
      <span>{displayText}</span>
      <span className={`cp-typewriter-caret ${done ? "cp-typewriter-caret--idle" : ""}`} aria-hidden />
    </p>
  );
}
