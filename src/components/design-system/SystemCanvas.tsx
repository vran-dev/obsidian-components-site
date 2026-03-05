import clsx from "clsx";
import {
  Braces,
  Clock,
  Command,
  CreditCard,
  File,
  Hash,
  Image,
  LayoutDashboard,
  SquareCheck,
  SquarePercent,
} from "lucide-react";

interface SystemCanvasProps {
  className?: string;
}

const remainingComponents = [
  {
    name: "组合",
    description: "提供了多种布局模式在页面中组合组件，包括标签页布局、分栏布局、列表布局...",
    icon: <LayoutDashboard size={14} />,
    span: "lg",
  },
  {
    name: "Markdown",
    description:
      "可以嵌入任意的 markdown 文本内容并进行渲染，支持与其他以代码块作为基础进行渲染的插件联动",
    icon: <File size={14} />,
    span: "lg",
  },
  {
    name: "自定义组件",
    description: "使用 JSX 创建个性化组件，也可以让 AI 快速生成并持续迭代。",
    icon: <Braces size={14} />,
    span: "lg",
  },
  {
    name: "卡片",
    description: "多功能卡片组件，可以用来展示图片、文字，也可以作为一个按钮",
    icon: <CreditCard size={14} />,
    span: "md",
  },
  {
    name: "按钮",
    description: "设置点击执行命令、创建文件、打开链接等",
    icon: <Command size={14} />,
    span: "md",
  },
  {
    name: "统计数字",
    description: "根据指定的规则统计笔记、任务的数量",
    icon: <Hash size={14} />,
    span: "md",
  },
  {
    name: "日期进度",
    description: "实时显示距离某个截止日期的进度",
    icon: <SquarePercent size={14} />,
    span: "md",
  },
  {
    name: "正计时",
    description: "当前时间距离过去某个时间过去了多久",
    icon: <Clock size={14} />,
    span: "sm",
  },
  {
    name: "倒计时",
    description: "当前时间距离未来某个时间还有多久",
    icon: <Clock size={14} />,
    span: "sm",
  },
  {
    name: "时钟",
    description: "一个极简的实时时钟组件",
    icon: <Clock size={14} />,
    span: "sm",
  },
  {
    name: "打卡",
    description: "通过打卡记录自己的长期习惯",
    icon: <SquareCheck size={14} />,
    span: "sm",
  },
  {
    name: "附件库",
    description: "管理全库的附件，包括图片、PDF等",
    icon: <Image size={14} />,
    span: "md",
  },
] as const;

export default function SystemCanvas({ className }: SystemCanvasProps) {
  return (
    <div className={clsx("cp-system-grid", className)}>
      {remainingComponents.map((component) => (
        <article
          key={component.name}
          className={clsx("cp-system-card", {
            "cp-system-card--sm": component.span === "sm",
            "cp-system-card--md": component.span === "md",
            "cp-system-card--lg": component.span === "lg",
          })}
        >
          <div className="cp-system-card-title">
            {component.icon}
            <span>{component.name}</span>
          </div>
          <p className="cp-system-card-desc">{component.description}</p>
        </article>
      ))}
    </div>
  );
}
