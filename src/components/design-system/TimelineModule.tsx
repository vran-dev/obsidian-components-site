import type { ReactNode } from "react";
import clsx from "clsx";

interface TimelineModuleProps {
  id?: string;
  icon: ReactNode;
  nodeLabel?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  contentOffsetClassName?: string;
  shellClassName?: string;
  className?: string;
}

export default function TimelineModule({
  id,
  icon,
  nodeLabel,
  title,
  subtitle,
  children,
  contentOffsetClassName = "mt-8 md:mt-10",
  shellClassName,
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
        <div className={clsx("cp-module-shell", shellClassName)}>
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
