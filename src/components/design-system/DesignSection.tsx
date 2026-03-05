import type { ReactNode } from "react";
import clsx from "clsx";
import DesignContainer from "./DesignContainer";

interface DesignSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  surface?: "default" | "transparent";
  width?: "default" | "wide";
}

export default function DesignSection({
  id,
  children,
  className,
  containerClassName,
  surface = "default",
  width = "wide",
}: DesignSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-8 md:py-12",
        surface === "default" && "bg-[var(--cp-bg)]",
        className
      )}
    >
      <DesignContainer width={width} className={containerClassName}>
        {children}
      </DesignContainer>
    </section>
  );
}
