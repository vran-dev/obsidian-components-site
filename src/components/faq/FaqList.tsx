import type { FaqItem } from "../design-system/types";

interface FaqListProps {
  items: FaqItem[];
  className?: string;
}

export default function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={className}>
      <ul className="list-disc pl-6 space-y-5 marker:text-[var(--cp-text-secondary)]">
        {items.map((item) => (
          <li key={item.question} className="pr-2">
            <p className="text-base md:text-lg font-semibold text-[var(--cp-text-primary)]">
              {item.question}
            </p>
            <div className="mt-3 text-sm md:text-base text-[var(--cp-text-secondary)] leading-relaxed">
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
