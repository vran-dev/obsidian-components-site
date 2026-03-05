import { BarChart2Icon, Bot, TableIcon } from "lucide-react";
import clsx from "clsx";
import { AiSample } from "./ai-sample";
import {
  BarChartSample,
  HeatmapChartSample,
  LineChartSample,
  PieChartSample,
} from "./chart-sample";
import BentoCard from "./BentoCard";
import BentoGrid from "./BentoGrid";
import { DatabaseViewsSample, DataViewUseCases } from "./db-sample";
import SystemCanvas from "./SystemCanvas";

interface HeroFeatureBentoProps {
  className?: string;
}

export default function HeroFeatureBento({ className }: HeroFeatureBentoProps) {
  return (
    <BentoGrid className={clsx(className)}>
      <BentoCard
        span="lg"
        tone="default"
        className="md:col-span-6 min-h-0"
        title="AI 助手"
        icon={<Bot size={18} />}
      >
        <AiSample />
      </BentoCard>

      <BentoCard
        span="lg"
        tone="default"
        icon={<TableIcon size={18} />}
        className="md:col-span-6 min-h-0"
        title="数据视图"
        description="基于筛选规则从全库文件中抽取同一批数据，再按表格、画廊、看板、日历、甘特切换视图。"
        result="价值：同一事实，多种表达；计划、执行、复盘都围绕同一数据"
      >
        <DatabaseViewsSample />
        <DataViewUseCases />
      </BentoCard>

      <BentoCard
        span="lg"
        tone="default"
        icon={<BarChart2Icon size={18} />}
        className="md:col-span-6 min-h-0"
        title="图表"
        description="支持柱状图、折线图、饼图、日历热力图、漏斗图、堆叠图等，适用于周报、复盘和经营看板。"
        result="价值：把分散数据转成可快速沟通的结论"
      >
        <div className="cp-chart-samples-grid">
          <BarChartSample className="cp-chart-sample--compact" />
          <LineChartSample className="cp-chart-sample--compact" />
          <PieChartSample className="cp-chart-sample--compact" />
          <HeatmapChartSample className="cp-chart-sample--compact" />
        </div>
      </BentoCard>

      <BentoCard
        span="lg"
        tone="default"
        className="md:col-span-6 min-h-0"
        title="多达 15+ 种组件"
        description="组件之间可以像积木一样拼接，快速形成完整工作流。"
      >
        <SystemCanvas />
      </BentoCard>
    </BentoGrid>
  );
}
