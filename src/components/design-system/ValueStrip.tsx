import clsx from "clsx";
import type { ValueTagItem } from "./types";

interface ValueStripProps {
  items: ValueTagItem[];
  className?: string;
}

const toneClassMap: Record<NonNullable<ValueTagItem["tone"]>, string> = {
  default: "cp-tag cp-tag--default",
  brand: "cp-tag cp-tag--brand",
  ai: "cp-tag cp-tag--ai",
  success: "cp-tag cp-tag--success",
};

export default function ValueStrip({ items, className }: ValueStripProps) {
  return (
    <div className={clsx("flex flex-wrap gap-2 md:gap-3", className)}>
      {items.map((item) => {
        const tone = item.tone ?? "default";
        return (
          <span key={item.label} className={toneClassMap[tone]}>
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
