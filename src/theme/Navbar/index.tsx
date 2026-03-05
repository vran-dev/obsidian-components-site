import { useEffect, useMemo, useState, type JSX } from "react";
import { ChevronDown } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

const navItems = [
  {
    label: "文档",
    href: "https://wxycbt0cjk.feishu.cn/wiki/F14cwgZrGiM3CxkekUxcEr5YnSg",
    external: true,
  },
  {
    label: "价格",
    href: "/#price",
    external: false,
  },
  {
    label: "更新日志",
    href: "https://wxycbt0cjk.feishu.cn/wiki/UqirwCMBeilp8Qk38gKcLFjCndf?table=blkixTV7KBDvSpDg",
    external: true,
  },
];

const tocRootSelector = ".cp-tech-bg";
const tocHeadingSelector = "section[id] h2";
const tocTopOffset = 140;

export default function Navbar(): JSX.Element {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = document.querySelector(tocRootSelector);
    if (!root) {
      setTocItems([]);
      return;
    }

    const headingNodes = Array.from(root.querySelectorAll<HTMLHeadingElement>(tocHeadingSelector));
    const items = headingNodes
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

    setTocItems(items);
    setActiveId(items[0]?.id ?? "");
  }, []);

  useEffect(() => {
    if (!tocItems.length) {
      return;
    }

    const updateActive = () => {
      let current = tocItems[0].id;
      for (const item of tocItems) {
        const section = document.getElementById(item.id);
        if (!section) {
          continue;
        }
        if (section.getBoundingClientRect().top <= tocTopOffset) {
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
  }, [tocItems]);

  const visibleTocItems = useMemo(
    () => tocItems.filter((item) => Boolean(item.id && item.label)),
    [tocItems],
  );

  const jumpToHeading = (id: string) => {
    const isHomepage = window.location.pathname === "/";
    if (!isHomepage) {
      window.location.href = `/#${id}`;
      return;
    }

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
    <nav className="cp-global-nav-wrap" aria-label="Top navigation">
      <div className="cp-global-nav">
        <div className="cp-global-nav-toc">
          <button type="button" className="cp-global-nav-brand cp-global-nav-brand--trigger">
            <span>Components</span>
            <ChevronDown size={13} className="cp-global-nav-brand-icon" aria-hidden />
          </button>
          {visibleTocItems.length ? (
            <div className="cp-global-nav-toc-panel">
              <p className="cp-global-nav-toc-title">Sections</p>
              <ul className="cp-global-nav-toc-list">
                {visibleTocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`cp-global-nav-toc-link ${
                        activeId === item.id ? "cp-global-nav-toc-link--active" : ""
                      }`}
                      onClick={() => jumpToHeading(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <ul className="cp-global-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="cp-global-nav-link"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
