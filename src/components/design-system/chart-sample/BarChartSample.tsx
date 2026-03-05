import { useMemo } from "react";
import clsx from "clsx";
import EchartsView from "../EchartsView";

interface BarChartSampleProps {
  className?: string;
}

export default function BarChartSample({ className }: BarChartSampleProps) {
  const option = useMemo(
    () => ({
      grid: {
        left: 26,
        right: 10,
        top: 14,
        bottom: 24,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        borderWidth: 1,
        borderColor: "rgba(58,64,73,0.9)",
        backgroundColor: "rgba(17,18,20,0.94)",
        textStyle: { color: "#f2f3f5" },
      },
      xAxis: {
        type: "category",
        data: ["W1", "W2", "W3", "W4", "W5", "W6"],
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
          type: "bar",
          data: [6, 9, 12, 8, 14, 11],
          barMaxWidth: 14,
          itemStyle: {
            color: "#7a8fd8",
            borderRadius: [4, 4, 0, 0],
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
      aria-label="每周更新数量柱状图"
    />
  );
}
