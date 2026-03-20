import clsx from "clsx";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useCopy } from "../../i18n";

export interface CarouselItem {
  title?: string;
  description?: string;
  image: string;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  prevLabel?: string;
  nextLabel?: string;
  dotsLabel?: string;
}

export default function Carousel({ items, className, prevLabel, nextLabel, dotsLabel }: CarouselProps) {
  const copy = useCopy();
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  const currentItem = items[activeIndex];
  const resolvedPrevLabel = prevLabel ?? copy.common.carousel.prevLabel;
  const resolvedNextLabel = nextLabel ?? copy.common.carousel.nextLabel;
  const resolvedDotsLabel = dotsLabel ?? copy.common.carousel.dotsLabel;

  const jumpTo = (index: number) => {
    const length = items.length;
    const nextIndex = (index + length) % length;
    setActiveIndex(nextIndex);
  };

  return (
    <div className={clsx("mt-3", className)}>
      <article className="overflow-hidden rounded-[10px] border-[var(--cp-border)] bg-white/90">
        <div className="relative flex items-center justify-center">
          <Zoom>
            <img
              src={currentItem.image}
              alt={currentItem.title ?? copy.common.carousel.fallbackAlt}
              className="block h-[152px] w-full cursor-zoom-in border-b border-[var(--cp-border)] object-cover md:h-[32rem]"
            />
          </Zoom>
          <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              aria-label={resolvedPrevLabel}
              className="pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded-lg border border-[var(--cp-border)] bg-white/90 text-[var(--cp-text-secondary)] backdrop-blur-sm transition-colors duration-150 hover:border-[var(--cp-border-strong)] hover:text-[var(--cp-text-primary)] md:h-[26px] md:w-[26px]"
              onClick={() => jumpTo(activeIndex - 1)}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label={resolvedNextLabel}
              className="pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded-lg border border-[var(--cp-border)] bg-white/90 text-[var(--cp-text-secondary)] backdrop-blur-sm transition-colors duration-150 hover:border-[var(--cp-border-strong)] hover:text-[var(--cp-text-primary)] md:h-[26px] md:w-[26px]"
              onClick={() => jumpTo(activeIndex + 1)}
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <div
            className="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-[7px] rounded-full bg-white/80 px-2 py-[3px] backdrop-blur-sm"
            role="tablist"
            aria-label={resolvedDotsLabel}
          >
            {items.map((item, index) => (
              <button
                key={`${item.image}-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={clsx(
                  "h-[7px] w-[7px] cursor-pointer rounded-full border-none bg-[rgba(90,104,127,0.3)] p-0 transition-[width,background-color] duration-150",
                  index === activeIndex && "w-5 bg-[rgba(95,112,255,0.72)]",
                )}
                onClick={() => jumpTo(index)}
              />
            ))}
          </div>
        </div>
        {currentItem.title || currentItem.description ? (
          <div className="px-[10px] pb-[10px] pt-[9px]">
            <p className="m-0 text-xs font-semibold leading-[1.4] text-[var(--cp-text-primary)]">{currentItem.title}</p>
            <p className="mt-1 text-[10px] leading-[1.5] text-[var(--cp-text-secondary)]">{currentItem.description}</p>
          </div>
        ) : null}
      </article>
    </div>
  );
}
