import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  BarChart,
  FunnelChart,
  HeatmapChart,
  LineChart,
  PieChart,
  RadarChart,
  TreeChart,
} from "echarts/charts";
import {
  CalendarComponent,
  DatasetComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { useEffect, useLayoutEffect, useRef } from "react";
import type { HTMLProps } from "react";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  CalendarComponent,
  VisualMapComponent,
  HeatmapChart,
  BarChart,
  LineChart,
  PieChart,
  FunnelChart,
  RadarChart,
  TreeChart,
  CanvasRenderer,
  MarkLineComponent,
]);

type EchartsViewProps = {
  option: echarts.EChartsCoreOption;
  onReady?: (api: echarts.ECharts) => void;
} & HTMLProps<HTMLDivElement>;

export default function EchartsView(props: EchartsViewProps) {
  const { onReady, option, ...rest } = props;
  const echartViewRef = useRef<HTMLDivElement>(null);
  const echartsApiRef = useRef<echarts.ECharts | null>(null);
  const frameRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (!echartViewRef.current) return;

    const chart = echarts.init(echartViewRef.current);
    echartsApiRef.current = chart;
    chart.setOption(option);
    if (typeof onReady === "function") {
      onReady(chart);
    }

    return () => {
      echartsApiRef.current = null;
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    if (!echartsApiRef.current) return;
    echartsApiRef.current.setOption(option, {
      notMerge: true,
      lazyUpdate: true,
    });
  }, [option]);

  useEffect(() => {
    if (!echartsApiRef.current || !echartViewRef.current) {
      return;
    }
    const observer = new ResizeObserver(() => {
      echartsApiRef.current?.resize();
    });
    observer.observe(echartViewRef.current);
    return () => {
      observer.disconnect();
    };
  }, [echartsApiRef.current]);

  return <div ref={echartViewRef} {...rest} />;
}
