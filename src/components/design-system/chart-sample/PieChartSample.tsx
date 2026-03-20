import { useMemo } from "react";
import clsx from "clsx";
import EchartsView from "../EchartsView";
import { useCopy } from "../../../i18n";

interface PieChartSampleProps {
  className?: string;
}

export default function PieChartSample({ className }: PieChartSampleProps) {
  const copy = useCopy();
  const segments = copy.home.featureBento.charts.pieSegments;
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
          itemStyle: { borderColor: "#111214", borderWidth: 2 },
          data: [
            { value: 38, name: segments[0] },
            { value: 32, name: segments[1] },
            { value: 18, name: segments[2] },
            { value: 12, name: segments[3] },
          ],
          color: ["#8f9cff", "#7b89de", "#55629f", "#3a446f"],
        },
      ],
    }),
    [segments]
  );

  return <EchartsView option={option} className={clsx("cp-chart-sample", className)} aria-label={copy.home.featureBento.charts.pieAriaLabel} />;
}
