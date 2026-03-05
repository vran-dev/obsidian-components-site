import type { ReactNode } from "react";
import clsx from "clsx";

interface TimelineModuleProps {
  id?: string;
  icon: ReactNode;
  nodeLabel?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  emphasis?: "base" | "emphasized";
  contentOffsetClassName?: string;
  className?: string;
}

const emphasisClassMap: Record<NonNullable<TimelineModuleProps["emphasis"]>, string> = {
  base: "cp-module-shell cp-module-shell--base",
  emphasized: "cp-module-shell cp-module-shell--emphasized",
};

export default function TimelineModule({
  id,
  icon,
  nodeLabel,
  title,
  subtitle,
  children,
  emphasis = "base",
  contentOffsetClassName = "mt-8 md:mt-10",
  className,
}: TimelineModuleProps) {
  return (
    <section id={id} className={clsx("cp-timeline-item", className)}>
      <aside className="cp-timeline-marker">
        <span className="cp-timeline-node" aria-label={nodeLabel}>
          <span className="cp-timeline-node-icon">{icon}</span>
        </span>
      </aside>
      <div className="cp-timeline-module">
        <div className={emphasisClassMap[emphasis]}>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-[var(--cp-text-primary)]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base md:text-lg text-[var(--cp-text-secondary)] leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          <div className={contentOffsetClassName}>{children}</div>
        </div>
      </div>
    </section>
  );
}
