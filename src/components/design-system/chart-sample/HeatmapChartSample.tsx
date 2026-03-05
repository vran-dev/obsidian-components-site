import { useMemo } from "react";
import clsx from "clsx";
import EchartsView from "../EchartsView";

interface HeatmapChartSampleProps {
  className?: string;
}

const SAMPLE_DAYS = 84;
// GitHub-style contribution palette.
const HEATMAP_COLORS = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

function formatDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

export default function HeatmapChartSample({ className }: HeatmapChartSampleProps) {
  const calendarData = useMemo(() => {
    const endDate = new Date();
    endDate.setHours(0, 0, 0, 0);
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - (SAMPLE_DAYS - 1));

    const data: Array<[string, number]> = [];
    for (let i = 0; i < SAMPLE_DAYS; i += 1) {
      const current = new Date(startDate);
      current.setDate(startDate.getDate() + i);
      const weekday = current.getDay();
      let value = 0;

      if (weekday >= 1 && weekday <= 5) value += 1;
      if (i % 14 === 0) value += 2;
      if (i % 28 === 0) value = 4;
      if (weekday === 0 || weekday === 6) value = Math.max(value - 1, 0);
      data.push([formatDate(current), Math.min(value, 4)]);
    }

    return {
      range: [formatDate(startDate), formatDate(endDate)] as [string, string],
      data,
    };
  }, []);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "item",
        borderWidth: 1,
        borderColor: "rgba(65, 80, 95, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.96)",
        textStyle: { color: "#1f2937" },
        formatter: (params: { value?: [string, number] }) => {
          const value = params.value;
          if (!value) return "";
          return `${value[0]}<br/>发布活跃度：${value[1]}`;
        },
      },
      calendar: {
        top: 14,
        right: 10,
        bottom: 16,
        left: 20,
        range: calendarData.range,
        cellSize: [10, 10],
        splitLine: {
          show: true,
          lineStyle: { color: "#f5f7fb", width: 2 },
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: "#f5f7fb",
        },
        dayLabel: {
          show: false,
        },
        monthLabel: {
          color: "#6b7280",
          fontSize: 9,
          margin: 8,
        },
        yearLabel: {
          show: false,
        },
      },
      visualMap: {
        min: 0,
        max: 4,
        show: false,
        inRange: { color: HEATMAP_COLORS },
      },
      series: [
        {
          type: "heatmap",
          coordinateSystem: "calendar",
          data: calendarData.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: "rgba(33, 110, 57, 0.28)",
            },
          },
        },
      ],
    }),
    [calendarData.data, calendarData.range]
  );

  return (
    <EchartsView
      option={option}
      className={clsx("cp-chart-sample cp-chart-sample--compact cp-chart-sample--calendar", className)}
      aria-label="图表日历热力图示例"
    />
  );
}
