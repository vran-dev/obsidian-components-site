import type { ReactNode } from "react";
import clsx from "clsx";

type CardTone = "default" | "brand" | "ai";
type CardSpan = "sm" | "md" | "lg";

interface BentoCardProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  result?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  tone?: CardTone;
  span?: CardSpan;
  className?: string;
}

const spanClassMap: Record<CardSpan, string> = {
  sm: "md:col-span-2",
  md: "md:col-span-3",
  lg: "md:col-span-4",
};

const toneClassMap: Record<CardTone, string> = {
  default: "cp-card cp-card--default",
  brand: "cp-card cp-card--brand",
  ai: "cp-card cp-card--ai",
};

export default function BentoCard({
  title,
  description,
  icon,
  result,
  children,
  footer,
  tone = "default",
  span = "md",
  className,
}: BentoCardProps) {
  return (
    <article className={clsx(spanClassMap[span], toneClassMap[tone], className)}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl md:text-2xl font-semibold text-[var(--cp-text-primary)]">
          {title}
        </h3>
        {icon ? <div className="text-[var(--cp-text-secondary)]">{icon}</div> : null}
      </div>

      {description ? (
        <p className="text-sm md:text-base text-[var(--cp-text-secondary)] leading-relaxed">
          {description}
        </p>
      ) : null}

      {result ? <div className="cp-result-line">{result}</div> : null}
      {children ? <div className="mt-1">{children}</div> : null}
      {footer ? <div className="mt-auto pt-2">{footer}</div> : null}
    </article>
  );
}
