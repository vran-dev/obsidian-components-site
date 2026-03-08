import { ExternalLinkIcon, MessageSquare } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";

interface UserReview {
  name: string;
  url?: string;
  description?: string;
  content: string;
  tone?: "success" | "brand" | "ai";
}

const userReviews: UserReview[] = [
  {
    name: "Moy",
    url: "https://forum-zh.obsidian.md/u/moy/summary",
    description: "Ob 官方中文翻译贡献者 | Easy-Copy、Yearly-Galance 插件作者 | 内容创作者",
    tone: "success",
    content: `付费闭源插件本身在OB社群其实是个劣势，所以在有这么多免费插件的情况下，凭什么这个插件能卖钱？还这么多人买？
    
我自己是觉得CPS物有所值，因为它确实从底层拓展了OB的能力边界，让它有了和Notion数据库掰掰手腕的潜力。它比官方Bases早了两年开始做OB内数据库，体验相当于 Bases Plus，是我用过的同类插件中最好的。

何况还附带图表/统计等一大堆组件，以及网格布局，对于主页定制的需求也是很好的解决方案。`,
  },
  {
    name: "RavenHogWarts",
    url: "https://github.com/RavenHogWarts",
    description: "Raven-Pensieve 组织创建者 | Ace-Code-Editor、Custom-Icons、Next-TOC 等插件作者 | 社区极客",
    tone: "success",
    content: `作为从公测跟过来的“开朝元老”，Components 的进化是疯狂的，内测特战队中体验着“日日新”的迭代。

对于颜值党和代码小白，不用死磕晦涩难懂的 Dataview 代码，只需简单的拖拽，就能零门槛搭建出“高颜值可执行系统”。

对于极客和“折腾狂魔”，自定义组件给了无尽可能，我们可以直接通过 AI 就一键生成自己想要的组件，也能自己手动写代码实现更复杂和高级的功能。`,
  },
  {
    name: "二宝学长",
    url: "https://mp.weixin.qq.com/s/R3i0jgXieuBEcHBjGmVGtA",
    description: "马克思主义理论学术论文写作教练 | 百万游戏用户社区首席意见领袖与管理员 | Obsidian中文社区特邀圆桌分享嘉宾",
    tone: "success",
    content: `有幸全程见证，Component 插件从无到有的破土孵化，到如今百余款组件百花齐放的蓬勃生态。

多年磨一剑。Component 的设计哲学始终如一：开放而不失边界，自由而不陷混乱。无论你是深度极客，还是轻量用户，皆能在此构筑属于自己的“组件王国”。

对于我这种0代码基础的文科生，也在component自定义组件功能支持下，顺利开发出了若干适用的功能小组件，极大的提升了我的知识管理效率。`,
  },
  {
    name: "闫羽鳞",
    url: "",
    description: "喵字馆创始人｜多个亿级品牌的主案设计师",
    tone: "success",
    content: `我用一款软件之前，习惯先了解一下作者的开发背景——看看有没有黑历史，会不会只是一时兴起挖个大坑，最后丢下用户不管。

V佬是我在程序圈里为数不多真正认识的朋友之一。

他的产品稳定更新了好多年，作为OB生态下的一款付费插件，早就值回票价了。有多靠谱，不必我多说。我们也是因为这款插件慢慢变成朋友。你就看我的认可程度吧——为了支持V佬长久地做下去，我拉上另一位大佬二宝学长，一起出钱出力，联名定制了一款字体《喵宝组·闪光体》。这是我唯一一次用自己的专业能力去“追星”。

V佬是我的朋友，也是我学习的榜样。

我始终相信：人靠谱，产品才靠谱。`,
  }
];

const reviewModuleClassName = ""
export default function UserReviews() {
  return (
    <TimelineModule
      id="reviews"
      icon={<MessageSquare size={14} />}
      nodeLabel="真实声音"
      className={reviewModuleClassName}
      title="用户口碑"
      subtitle="来自创作者、开发者与重度用户的长期反馈"
    >
      <div className="grid grid-cols-1 gap-4 min-[960px]:grid-cols-2 min-[960px]:items-start">
        {userReviews.map((item) => (
          <article
            key={item.name}
            className="overflow-hidden rounded-xl  bg-[#fafafa]"
          >
            <div className="border-b border-dashed border-[#8a8a8a]  px-4 py-3 max-[768px]:px-[14px]">
              <h3 className="m-0 text-[1.2rem] font-bold leading-[1.35] tracking-[0.01em]">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-[inherit] no-underline underline-offset-4 hover:underline focus-visible:underline"
                    title={`跳转到 ${item.name}`}
                  >
                    @{item.name}
                    <ExternalLinkIcon
                      size={16}
                      aria-hidden="true"
                      className="opacity-60 transition-all duration-150 group-hover:-translate-y-px group-hover:translate-x-px group-hover:opacity-100"
                    />
                  </a>
                ) : (
                  <span>@{item.name}</span>
                )}
              </h3>
              {item.description ? (
                <p className="mt-1 mb-0 text-base leading-relaxed text-[var(--cp-text-secondary)]">{item.description}</p>
              ) : null}
            </div>

            <div className="p-4 max-[768px]:p-[14px]">
              <div className="space-y-3">
                {item.content
                  .split(/\n\s*\n/)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p
                      key={`${item.name}-${index}`}
                      className="m-0 text-[0.94rem] leading-[1.78] min-[769px]:text-base min-[769px]:leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
