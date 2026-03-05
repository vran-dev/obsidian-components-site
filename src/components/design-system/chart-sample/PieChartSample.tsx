import { useMemo } from "react";
import clsx from "clsx";
import EchartsView from "../EchartsView";

interface PieChartSampleProps {
  className?: string;
}

export default function PieChartSample({ className }: PieChartSampleProps) {
  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "item",
        borderWidth: 1,
        borderColor: "rgba(58,64,73,0.9)",
        backgroundColor: "rgba(17,18,20,0.94)",
        textStyle: { color: "#f2f3f5" },
      },
      series: [
        {
          type: "pie",
          radius: ["52%", "78%"],
          center: ["50%", "54%"],
          avoidLabelOverlap: true,
          label: { show: false },
          itemStyle: {
            borderColor: "#111214",
            borderWidth: 2,
          },
          data: [
            { value: 38, name: "新特性" },
            { value: 32, name: "优化改进" },
            { value: 18, name: "Bug 修复" },
            { value: 12, name: "AI 能力" },
          ],
          color: ["#8f9cff", "#7b89de", "#55629f", "#3a446f"],
        },
      ],
    }),
    []
  );

  return (
    <EchartsView
      option={option}
      className={clsx("cp-chart-sample", className)}
      aria-label="发布类型占比饼图"
    />
  );
}
