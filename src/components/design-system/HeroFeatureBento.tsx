import clsx from "clsx";
import { BarChart2Icon, TableIcon } from "lucide-react";
import BentoCard from "./BentoCard";
import BentoGrid from "./BentoGrid";
import { BarChartSample, HeatmapChartSample, LineChartSample, PieChartSample } from "./chart-sample";
import { DatabaseViewsSample, DataViewUseCases } from "./db-sample";
import { useCopy } from "../../i18n";

interface HeroFeatureBentoProps {
  className?: string;
}

export default function HeroFeatureBento({ className }: HeroFeatureBentoProps) {
  const copy = useCopy();
  const { dataView, charts } = copy.home.featureBento;

  return (
    <BentoGrid className={clsx(className)}>
      <BentoCard
        span="lg"
        tone="default"
        icon={<TableIcon size={18} />}
        className="md:col-span-6 min-h-0"
        title={dataView.title}
        description={dataView.description}
        result={dataView.result}
      >
        <DatabaseViewsSample />
        <DataViewUseCases />
      </BentoCard>

      <BentoCard
        span="lg"
        tone="default"
        icon={<BarChart2Icon size={18} />}
        className="md:col-span-6 min-h-0"
        title={charts.title}
        description={charts.description}
        result={charts.result}
      >
        <div className="cp-chart-samples-grid">
          <BarChartSample className="cp-chart-sample--compact" />
          <LineChartSample className="cp-chart-sample--compact" />
          <PieChartSample className="cp-chart-sample--compact" />
          <HeatmapChartSample className="cp-chart-sample--compact" />
        </div>
      </BentoCard>
    </BentoGrid>
  );
}
