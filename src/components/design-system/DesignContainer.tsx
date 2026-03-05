import type { ReactNode } from "react";
import clsx from "clsx";

interface DesignContainerProps {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide";
}

export default function DesignContainer({
  children,
  className,
  width = "wide",
}: DesignContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        width === "wide" ? "max-w-[1280px]" : "max-w-[1120px]",
        className
      )}
    >
      {children}
    </div>
  );
}
