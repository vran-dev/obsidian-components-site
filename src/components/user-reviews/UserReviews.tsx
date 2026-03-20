import { ExternalLinkIcon, MessageSquare } from "lucide-react";
import TimelineModule from "../design-system/TimelineModule";
import { useCopy } from "../../i18n";

const reviewModuleClassName = "";

export default function UserReviews() {
  const copy = useCopy();
  const { userReviews } = copy.home;

  return (
    <TimelineModule
      id="reviews"
      icon={<MessageSquare size={14} />}
      nodeLabel={userReviews.nodeLabel}
      className={reviewModuleClassName}
      title={userReviews.title}
      subtitle={userReviews.subtitle}
    >
      <div className="grid grid-cols-1 gap-4 min-[960px]:grid-cols-2 min-[960px]:items-start">
        {userReviews.items.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-xl bg-[#fafafa]">
            <div className="border-b border-dashed border-[#8a8a8a] px-4 py-3 max-[768px]:px-[14px]">
              <h3 className="m-0 text-[1.2rem] font-bold leading-[1.35] tracking-[0.01em]">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-[inherit] no-underline underline-offset-4 hover:underline focus-visible:underline"
                    title={`${userReviews.linkTitlePrefix} ${item.name}`}
                  >
                    @{item.name}
                    <ExternalLinkIcon
                      size={16}
                      aria-hidden="true"
                      className="opacity-60 transition-all duration-150 group-hover:-translate-y-px group-hover:translate-x-px group-hover:opacity-100"
                    />
                  </a>
                ) : (
                  <span>@{item.name}</span>
                )}
              </h3>
              {item.description ? (
                <p className="mt-1 mb-0 text-base leading-relaxed text-[var(--cp-text-secondary)]">{item.description}</p>
              ) : null}
            </div>

            <div className="p-4 max-[768px]:p-[14px]">
              <div className="space-y-3">
                {item.content
                  .split(/\n\s*\n/)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p
                      key={`${item.name}-${index}`}
                      className="m-0 text-[0.94rem] leading-[1.78] min-[769px]:text-base min-[769px]:leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </TimelineModule>
  );
}
