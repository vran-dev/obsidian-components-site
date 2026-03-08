import { ArrowUpRight, CircleHelp } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";
import "./About.css";

interface AboutProduct {
  name: string;
  category: string;
  description: string;
  status: "开源" | "闭源";
  link: string;
}

const aboutProducts: AboutProduct[] = [
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

export default function About() {
  return (
    <TimelineModule
      id="about-me"
      icon={<CircleHelp size={14} />}
      nodeLabel="about-me"
      title="关于我"
      subtitle="上世纪侥幸生存下来的古法编程爱好者，开源过几个产品（累计 star 4k+），正在适应新时代进化，代表作："
    >
      <div className="cp-about-grid">
        {aboutProducts.map((item) => (
          <article key={item.name} className="cp-card cp-card--default cp-about-card">
            <div className="cp-about-title-row">
              <h3 className="cp-about-name">{item.name}</h3>
              <span
                className={`cp-tag ${item.status === "开源" ? "cp-tag--success" : "cp-tag--brand"} cp-about-tag`}
              >
                {item.status}
              </span>
            </div>
            <p className="cp-mono cp-about-category">{item.category}</p>
            <p className="cp-about-description">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="cp-about-link">
              查看仓库 <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
