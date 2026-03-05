import { useEffect, useMemo, useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface FloatingTocProps {
  rootSelector?: string;
  headingSelector?: string;
  topOffset?: number;
}

const defaultRootSelector = ".cp-tech-bg";
const defaultHeadingSelector = "section[id] h2";

export default function FloatingToc({
  rootSelector = defaultRootSelector,
  headingSelector = defaultHeadingSelector,
  topOffset = 120,
}: FloatingTocProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = document.querySelector(rootSelector);
    if (!root) {
      setItems([]);
      return;
    }

    const headingNodes = Array.from(root.querySelectorAll<HTMLHeadingElement>(headingSelector));
    const nextItems = headingNodes
      .map((heading) => {
        const section = heading.closest("section[id]") as HTMLElement | null;
        const id = section?.id?.trim();
        const label = heading.textContent?.trim() ?? "";
        if (!id || !label) {
          return null;
        }
        return { id, label };
      })
      .filter((item): item is TocItem => Boolean(item));

    setItems(nextItems);
    setActiveId(nextItems[0]?.id ?? "");
  }, [rootSelector, headingSelector]);

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const updateActive = () => {
      let current = items[0].id;
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }
        const top = section.getBoundingClientRect().top;
        if (top <= topOffset) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [items, topOffset]);

  const visibleItems = useMemo(() => items.filter((item) => Boolean(item.id && item.label)), [items]);

  if (visibleItems.length === 0) {
    return null;
  }

  const jumpTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="cp-floating-toc" aria-label="页面导航">
      <p className="cp-floating-toc-title">快速导航</p>
      <ul className="cp-floating-toc-list">
        {visibleItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`cp-floating-toc-link ${activeId === item.id ? "cp-floating-toc-link--active" : ""}`}
              onClick={() => jumpTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
