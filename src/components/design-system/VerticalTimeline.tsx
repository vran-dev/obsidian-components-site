import type { ReactNode } from "react";
import clsx from "clsx";

interface VerticalTimelineProps {
  children: ReactNode;
  className?: string;
}

export default function VerticalTimeline({ children, className }: VerticalTimelineProps) {
  return <div className={clsx("cp-timeline", className)}>{children}</div>;
}
