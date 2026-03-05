import type { ReactNode } from "react";
import clsx from "clsx";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export default function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 items-stretch",
        className
      )}
    >
      {children}
    </div>
  );
}
