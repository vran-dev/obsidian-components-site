import {
  ArrowUpRight,
  BadgeDollarSign,
  CircleHelp,
  Layers3,
  PanelsTopLeft,
  Sparkles,
  Users2
} from "lucide-react";
import { useEffect, useState } from "react";
import DayCounter from "../DayCounter";
import FloatingToc from "./FloatingToc";
import { ValueStrip } from "../design-system";
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


const price = 128;

const templateModules = [
  {
    title: "VPara",
    image: "./img/feature/template-vpara.png",
    detail: "只依赖 2 个插件、几乎 0 代码，基于 PARA 打造的生产级模板库，帮作者高效管理了多个领域，累积执行项目数超 1000 个，整体完成率达到了惊人的 90%",
    link: "https://my.feishu.cn/wiki/Ol44wnbF9iO3iAkbqeJcCqnJn9b",
  },
  {
    title: "Emotion",
    image: "./img/feature/template-emotion.png",
    detail: "基于 Componnets 构建的情绪管理模板库，包含了情绪打卡、情绪日记，情绪仪表盘等模块，帮助用户更好地理解和管理自己的情绪，提升情绪智能。",
    link: "https://my.feishu.cn/wiki/Ddh4wfyO8ihTEEkkXFHckWy2nPe",
  },
  {
    title: "Home",
    image: "./img/feature/homepage-3.png",
    detail: "依靠 components 强大的组合能力，基于自定义组件、图表、数据视图等组件构建的高颜值个人知识库主页模板，多巴胺色系让人每天打开都是好心情。",
    link: "https://my.feishu.cn/record/DtGTr0R5keDjjYc0FVgcUGHznWd",
  },
  {
    title: "习惯系统",
    image: "./img/feature/habit.png",
    detail: "基于打卡组件和数据视图组件，可以可视化的构建习惯追踪系统，支持多维度数据统计和分析，帮助用户养成好习惯，提升自律能力。",
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
    description: "Obisidian？这可比游戏好玩儿多了！",
  },
  {
    author: "Moy",
    img: "./img/user-stories/moy2.jpg",
    description: "Obisidian？这可比游戏好玩儿多了！",
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
      <FloatingToc />
      <DesignSection surface="transparent" className="pt-14 md:pt-20 pb-24 md:pb-28">
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
            <div className="flex flex-col gap-7 md:gap-8">
              <TypewriterTitleLine
                text="告别代码，在 Obsidian 中可视化构建你的第二大脑，通往从笔记到系统之路"
                className="max-w-3xl"
              />
              <ValueStrip items={[
                {
                  label: "买断制授权",
                  tone: "brand"
                },
                {
                  label: "数据视图",
                  tone: "success"
                },
                {
                  label: "自定义组件",
                  tone: "success"
                },
                {
                  label: "仪表盘",
                  tone: "success"
                },
                {
                  label: "AI 助手",
                  tone: "success"
                }
              ]} />
              <article className="cp-card cp-card--default" style={{ border: "none", background: "var(--cp-surface-2)" }}>
                <DayCounter
                  startDate="2024-01-17"
                  label="Components 已持续迭代"
                />
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--cp-text-secondary)]">
                  <a
                    href={releaseLink}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-[var(--cp-text-primary)] transition-colors"
                  >
                    查看更新日志
                  </a>
                </div>
              </article>
              <CtaGroup
                primary={{ label: "立即试用", href: trialLink, target: "_blank" }}
                secondary={{ label: `${price} ¥ / 一次性买断`, href: buyoutLink, target: "_blank" }}
              />
            </div>
          </TimelineModule>
          <TimelineModule
            id="templates"
            icon={<PanelsTopLeft size={14} />}
            emphasis="base"
            title="何必从 0 开始？硬核模板开箱即用"
            subtitle="覆盖项目管理、知识库主页、习惯系统等多种场景，持续更新中。"
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
                    下载模板 <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </TimelineModule>

          <TimelineModule
            id="feature-bento"
            icon={<Layers3 size={14} />}
            emphasis="base"
            title="颜值和实用，可以全都要"
            subtitle="无限的组件组合可能，只需要拖拽拼接，就能搭建出来你的个人知识管理系统"
          >
            <HeroFeatureBento />
          </TimelineModule>

          <TimelineModule
            id="cases"
            icon={<Users2 size={14} />}
            nodeLabel="用户案例"
            emphasis="emphasized"
            title="用户案例"
            subtitle="真实用户的使用故事，看看大家都用 Components 搭建了什么样的系统"
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
            title="试用与购买"
            subtitle="买断制授权，一次付费，享专属权益"
          >
            <div className="mb-7 flex flex-wrap items-center gap-4 text-sm text-[var(--cp-text-secondary)]">
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
                查看更新日志
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
              <article className="cp-card cp-card--default">
                <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">限时体验</h3>
                <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">0 元 / 人</p>
                <p className="text-sm text-[var(--cp-text-secondary)]">7 天免费体验全部功能。</p>
                <a
                  href={trialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
                >
                  开始体验
                </a>
              </article>

              <article className="cp-card cp-card--brand">
                <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">永久授权</h3>
                <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">{price} 元 / 人</p>
                <div className="cp-result-line">一次买断，持续更新</div>
                <ul className="space-y-2 text-sm text-[var(--cp-text-secondary)]">
                  <li> 解锁全部组件与数据库能力</li>
                  <li>支持 AI 模型接入与全库协作</li>
                  <li>专属会员群，即时响应</li>
                  <li>专属模板库，开箱即用</li>
                  <li>专属组件库，持续更新</li>
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
            subtitle="在购买决策前，把授权、AI、支持方式说清楚。"
          >
            <FaqList items={faqItems} />
          </TimelineModule>

          <TimelineModule
            id="about-me"
            icon={<CircleHelp size={14} />}
            nodeLabel="about-me"
            emphasis="base"
            title="关于我"
            subtitle="一个硬核工具人，开源了多个独立产品和 Obsidian 插件，正在写代码..."
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
