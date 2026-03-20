import { BadgeDollarSign } from "lucide-react";
import DayCounter from "../DayCounter";
import TimelineModule from "../design-system/TimelineModule";
import { HOME_LINKS } from "../../constants/home";
import "./Price.css";
import { useCopy } from "../../i18n";

export default function Price() {
  const copy = useCopy();
  const { price } = copy.home;

  return (
    <TimelineModule id="price" icon={<BadgeDollarSign size={14} />} title={price.title} subtitle={price.subtitle}>
      <article className="cp-card cp-card--default cp-price-status-card">
        <DayCounter startDate="2024-01-17" label={price.statusLabel} />
        <div className="cp-price-meta-links">
          <a href={HOME_LINKS.agreement} target="_blank" rel="noreferrer" className="cp-price-meta-link">
            {price.agreementLabel}
          </a>
          <a href={HOME_LINKS.release} target="_blank" rel="noreferrer" className="cp-price-meta-link">
            {price.releaseLabel}
          </a>
        </div>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <article className="cp-card cp-card--default">
          <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">{price.trial.title}</h3>
          <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">{price.trial.price}</p>
          <p className="text-sm text-[var(--cp-text-secondary)]">{price.trial.description}</p>
          <a
            href={HOME_LINKS.trial}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
          >
            {price.trial.cta}
          </a>
        </article>

        <article className="cp-card cp-card--brand">
          <h3 className="text-xl font-semibold text-[var(--cp-text-primary)]">{price.buyout.title}</h3>
          <p className="cp-mono text-3xl font-semibold text-[var(--cp-text-primary)]">{price.buyout.price}</p>
          <div className="cp-result-line">{price.buyout.result}</div>
          <ul className="space-y-2 text-sm text-[var(--cp-text-secondary)]">
            {price.buyout.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a
            href={HOME_LINKS.buyout}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm md:text-base font-semibold border border-[var(--cp-border-strong)] text-[var(--cp-text-primary)] hover:bg-[var(--cp-surface-2)] transition-colors"
          >
            {price.buyout.cta}
          </a>
        </article>
      </div>
    </TimelineModule>
  );
}
