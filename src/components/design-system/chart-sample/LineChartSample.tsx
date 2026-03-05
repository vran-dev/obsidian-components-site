import { useMemo } from "react";
import clsx from "clsx";
import EchartsView from "../EchartsView";

interface LineChartSampleProps {
  className?: string;
}

export default function LineChartSample({ className }: LineChartSampleProps) {
  const option = useMemo(
    () => ({
      grid: {
        left: 24,
        right: 10,
        top: 14,
        bottom: 24,
      },
      tooltip: {
        trigger: "axis",
        borderWidth: 1,
        borderColor: "rgba(58,64,73,0.9)",
        backgroundColor: "rgba(17,18,20,0.94)",
        textStyle: { color: "#f2f3f5" },
      },
      xAxis: {
        type: "category",
        data: ["D1", "D6", "D11", "D16", "D21", "D26", "D30"],
        axisLabel: { color: "#8b949e", fontSize: 10 },
        axisLine: { lineStyle: { color: "#2a2e34" } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#8b949e", fontSize: 10 },
        splitLine: { lineStyle: { color: "rgba(58,64,73,0.35)" } },
      },
      series: [
        {
          type: "line",
          smooth: true,
          data: [12, 18, 17, 24, 22, 27, 30],
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            width: 2,
            color: "#67d4ff",
          },
          itemStyle: {
            color: "#67d4ff",
          },
          areaStyle: {
            color: "rgba(103,212,255,0.14)",
          },
        },
      ],
    }),
    []
  );

  return (
    <EchartsView
      option={option}
      className={clsx("cp-chart-sample", className)}
      aria-label="功能活跃趋势折线图"
    />
  );
}
