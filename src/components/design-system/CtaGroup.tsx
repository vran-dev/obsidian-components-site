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
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold transition-colors",
        variant === "primary"
          ? "bg-[var(--cp-brand)] text-[var(--cp-bg)] hover:bg-[var(--cp-brand-hover)]"
          : "border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)]"
      )}
    >
      {action.label}
    </a>
  );
}

export default function CtaGroup({ primary, secondary, className }: CtaGroupProps) {
  return (
    <div className={clsx("flex flex-wrap items-center gap-3", className)}>
      <CtaButton action={primary} variant="primary" />
      {secondary ? <CtaButton action={secondary} variant="secondary" /> : null}
    </div>
  );
}
