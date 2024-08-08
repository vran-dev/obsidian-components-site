// @ts-ignore
import Masonry from "react-responsive-masonry";
import {
  BarChartIcon,
  Clock,
  Command,
  CreditCard,
  File,
  Hash,
  Image,
  LayoutDashboard,
  SquareCheck,
  SquarePercent,
  Table,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useMasonryResponsiveCount from "../../hooks/useMasonryResponsiveCount";

export default function () {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { columnCount } = useMasonryResponsiveCount(containerRef);

  const size = 18;
  const className = "dark:text-gray-200 text-gray-500";
  const components = [
    {
      name: "数据视图",
      description: "以表格、画廊、列表、看板或日历的形式管理笔记",
      icon: <Table className={className} size={size} />,
    },
    {
      name: "正计时",
      description: "当前时间距离过去某个时间过去了多久",
      icon: <Clock className={className} size={size} />,
    },
    {
      name: "倒计时",
      description: "当前时间距离未来某个时间还有多久",
      icon: <Clock className={className} size={size} />,
    },
    {
      name: "统计数字",
      description: "根据指定的规则统计笔记、任务的数量",
      icon: <Hash className={className} size={size} />,
    },
    {
      name: "日期进度",
      description: "实时显示距离某个截止日期的进度",
      icon: <SquarePercent className={className} size={size} />,
    },
    {
      name: "时钟",
      description: "一个极简的实时时钟组件",
      icon: <Clock className={className} size={size} />,
    },

    {
      name: "卡片",
      description: "多功能卡片组件，可以用来展示图片、文字，也可以作为一个按钮",
      icon: <CreditCard className={className} size={size} />,
    },
    {
      name: "按钮",
      description: "设置点击执行命令、创建文件、打开链接等",
      icon: <Command className={className} size={size} />,
    },
    {
      name: "图表",
      description: "统计文档数据并生成多样化的图表，支持折线图、柱状图、饼图等",
      icon: <BarChartIcon className={className} size={size} />,
    },
    {
      name: "Markdown",
      description:
        "可以嵌入任意的 markdown 文本内容并进行渲染，支持与其他以代码块作为基础进行渲染的插件联动",
      icon: <File className={className} size={size} />,
    },
    {
      name: "打卡",
      description: "通过打卡记录自己的长期习惯",
      icon: <SquareCheck className={className} size={size} />,
    },
    {
      name: "附件库",
      description: "管理全库的附件，包括图片、PDF等",
      icon: <Image className={className} size={size} />,
    },
    {
      name: "组合",
      description:
        "提供了多种布局模式在页面中组合组件，包括标签页布局、分栏布局、列表布局...",
      icon: <LayoutDashboard className={className} size={size} />,
    },
  ];

  return (
    <div className="flex flex-col p-4 mt-4 w-full">
      <div className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text">
          十余种组件。
        </span>
        <div className="mt-4 text-2xl text-slate-600 dark:text-slate-400">
          像玩乐高一样
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-transparent bg-clip-text">
            搭建
          </span>
          和
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-transparent bg-clip-text">
            管理
          </span>
          你的系统
        </div>
      </div>
      <div
        className="flex w-full gap-4 mt-8 flex-1 px-2 lg:px-16 flex-nowrap md:flex-nowrap sm:flex-wrap"
        ref={containerRef}
      >
        <Masonry columnsCount={columnCount} gutter={16}>
          {components.map((component) => {
            return (
              <div
                key={component.name}
                className="flex flex-col items-center gap-4 rounded-md p-4 border border-slate-50 dark:border-stone-400 shadow hover:bg-slate-50 dark:hover:bg-transparent dark:hover:border-stone-100"
              >
                <div className="flex gap-2 items-center w-full text-xl tracking-wider text-gray-800 dark:text-gray-200 font-bold">
                  {component.icon}
                  {component.name}
                </div>
                <div className="w-full tracking-wider text-gray-500 dark:text-gray-400">
                  {component.description}
                </div>
              </div>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}
