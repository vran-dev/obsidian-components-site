import { ArrowUpRight, PanelsTopLeft } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";
import "./Templates.css";

interface TemplateModule {
  title: string;
  image: string;
  detail: string;
  link: string;
}

const templateModules: TemplateModule[] = [
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
  },
];

export default function Templates() {
  return (
    <TimelineModule
      id="templates"
      icon={<PanelsTopLeft size={14} />}
      title="你不需要从空白页开始"
      subtitle="常见难题都已沉淀成模板：项目推进、主页搭建、习惯追踪。套用即用，边用边改，快速进入可执行状态。"
    >
      <div className="cp-templates-grid">
        {templateModules.map((item) => (
          <article key={item.title} className="cp-card cp-card--default cp-template-card">
            <img src={item.image} alt={item.title} className="cp-template-image" />
            <h3 className="cp-template-title">{item.title}</h3>
            <p className="cp-template-detail">{item.detail}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="cp-template-link">
              查看模板方案 <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
