import { ArrowUpRight, PanelsTopLeft } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";
import "./Templates.css";
import { useCopy } from "../../i18n";

export default function Templates() {
  const copy = useCopy();
  const { templates } = copy.home;

  return (
    <TimelineModule id="templates" icon={<PanelsTopLeft size={14} />} title={templates.title} subtitle={templates.subtitle}>
      <div className="cp-templates-grid">
        {templates.items.map((item) => (
          <article key={item.title} className="cp-card cp-card--default cp-template-card">
            <img src={item.image} alt={item.title} className="cp-template-image" />
            <h3 className="cp-template-title">{item.title}</h3>
            <p className="cp-template-detail">{item.detail}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="cp-template-link">
              {templates.ctaLabel} <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
