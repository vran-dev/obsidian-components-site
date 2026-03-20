import { ArrowUpRight, CircleHelp } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";
import "./About.css";
import { useCopy } from "../../i18n";

export default function About() {
  const copy = useCopy();
  const { about } = copy.home;

  return (
    <TimelineModule
      id="about-me"
      icon={<CircleHelp size={14} />}
      nodeLabel={about.nodeLabel}
      title={about.title}
      subtitle={about.subtitle}
    >
      <div className="cp-about-grid">
        {about.items.map((item) => (
          <article key={item.name} className="cp-card cp-card--default cp-about-card">
            <div className="cp-about-title-row">
              <h3 className="cp-about-name">{item.name}</h3>
              <span
                className={`cp-tag ${
                  item.status === "openSource" ? "cp-tag--success" : "cp-tag--brand"
                } cp-about-tag`}
              >
                {about.statusLabels[item.status]}
              </span>
            </div>
            <p className="cp-mono cp-about-category">{item.category}</p>
            <p className="cp-about-description">{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer" className="cp-about-link">
              {about.viewRepoLabel} <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
