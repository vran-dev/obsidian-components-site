import { CircleHelp } from "lucide-react";
import FaqList from "./FaqList";
import TimelineModule from "../design-system/TimelineModule";
import type { FaqItem } from "../design-system/types";
import { HOME_LINKS } from "../../constants/home";
import "./Faq.css";

const faqItems: FaqItem[] = [
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
        <a href={HOME_LINKS.document} target="_blank" rel="noreferrer" className="cp-faq-link">
          使用文档
        </a>{" "}
        与{" "}
        <a href={HOME_LINKS.agreement} target="_blank" rel="noreferrer" className="cp-faq-link">
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

export default function Faq() {
  return (
    <TimelineModule id="faq" icon={<CircleHelp size={14} />} nodeLabel="FAQ" title="常见问题">
      <FaqList items={faqItems} className="cp-faq-list" />
    </TimelineModule>
  );
}
