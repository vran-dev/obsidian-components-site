import { ArrowUpRight, Users2 } from "lucide-react";
import { useState } from "react";
import TimelineModule from "../design-system/TimelineModule";
import "./UserStories.css";
import { useCopy } from "../../i18n";

const INITIAL_VISIBLE_STORIES = 8;

export default function UserStories() {
  const copy = useCopy();
  const { userStories } = copy.home;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_STORIES);
  const visibleStories = userStories.items.slice(0, visibleCount);
  const hasMoreStories = visibleCount < userStories.items.length;

  return (
    <TimelineModule
      id="cases"
      icon={<Users2 size={14} />}
      nodeLabel={userStories.nodeLabel}
      title={userStories.title}
      subtitle={userStories.subtitle}
    >
      <div className="cp-user-story-scroll">
        <div className="cp-user-story-track">
          {visibleStories.map((item) => (
            <article key={item.author + item.img} className="cp-user-story-card">
              <div className="cp-user-story-image-wrap">
                <img src={item.img} alt={item.author} className="cp-user-story-image" />
              </div>
              <p className="cp-user-story-author">@{item.author}</p>
              {item.description ? <p className="cp-user-story-description">{item.description}</p> : null}
              {item.readMore ? (
                <a href={item.readMore.url} target="_blank" rel="noreferrer" className="cp-user-story-link">
                  {item.readMore.text} <ArrowUpRight size={14} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
      {hasMoreStories ? (
        <div className="cp-user-story-actions">
          <button
            type="button"
            className="cp-user-story-load-more"
            onClick={() => setVisibleCount((count) => Math.min(count + INITIAL_VISIBLE_STORIES, userStories.items.length))}
          >
            {userStories.loadMoreLabel}
          </button>
        </div>
      ) : null}
    </TimelineModule>
  );
}
