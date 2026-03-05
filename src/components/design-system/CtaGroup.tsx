import clsx from "clsx";
import type { CtaAction } from "./types";

interface CtaGroupProps {
  primary: CtaAction;
  secondary?: CtaAction;
  className?: string;
}

function CtaButton({
  action,
  variant,
}: {
  action: CtaAction;
  variant: "primary" | "secondary";
}) {
  return (
    <a
      href={action.href}
      target={action.target ?? "_self"}
      rel={action.target === "_blank" ? "noreferrer" : undefined}
      className={clsx(
        "cp-mono inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium border transition-colors",
        variant === "primary"
          ? "border-[rgba(95,112,255,0.5)] bg-[rgba(95,112,255,0.12)] text-[var(--cp-text-primary)] hover:bg-[rgba(95,112,255,0.18)] hover:border-[rgba(95,112,255,0.65)]"
          : "border-[var(--cp-border)] bg-[var(--cp-surface-1)] text-[var(--cp-text-secondary)] hover:text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] hover:border-[var(--cp-border-strong)]"
      )}
    >
      {action.label}
    </a>
  );
}

export default function CtaGroup({ primary, secondary, className }: CtaGroupProps) {
  return (
    <div className={clsx("flex flex-wrap items-center gap-2.5", className)}>
      <CtaButton action={primary} variant="primary" />
      {secondary ? <CtaButton action={secondary} variant="secondary" /> : null}
    </div>
  );
}
