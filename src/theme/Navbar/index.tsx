import { useEffect, useMemo, useState, type JSX } from "react";
import { ChevronDown, Languages } from "lucide-react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import { SUPPORTED_LOCALES, useCopy } from "../../i18n";
import { HOME_LINKS } from "../../constants/home";

interface TocItem {
  id: string;
  label: string;
}

const tocRootSelector = ".cp-tech-bg";
const tocHeadingSelector = "section[id] h2";
const tocTopOffset = 140;

function normalizePath(path: string) {
  if (!path) {
    return "/";
  }
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function ensureTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

function getUnlocalizedPathname(pathname: string, baseUrl: string, defaultLocale: string, currentLocale: string) {
  const rawBaseUrl = currentLocale === defaultLocale ? baseUrl : baseUrl.replace(`/${currentLocale}/`, "/");
  const normalizedBaseUrl = ensureTrailingSlash(rawBaseUrl);
  const pathnameWithoutBaseUrl = pathname.startsWith(normalizedBaseUrl)
    ? pathname.slice(normalizedBaseUrl.length - 1)
    : pathname;

  for (const locale of SUPPORTED_LOCALES) {
    if (locale === defaultLocale) {
      continue;
    }
    const localePrefix = `/${locale}`;
    if (pathnameWithoutBaseUrl === localePrefix) {
      return "/";
    }
    if (pathnameWithoutBaseUrl.startsWith(`${localePrefix}/`)) {
      return pathnameWithoutBaseUrl.slice(localePrefix.length) || "/";
    }
  }

  return pathnameWithoutBaseUrl || "/";
}

function createLocalePath(
  locale: string,
  pathname: string,
  baseUrl: string,
  defaultLocale: string,
  currentLocale: string,
  serveCurrentLocaleAtRoot = false
) {
  const suffix = pathname === "/" ? "" : pathname;
  const rawBaseUrl = currentLocale === defaultLocale ? baseUrl : baseUrl.replace(`/${currentLocale}/`, "/");
  const normalizedBaseUrl = ensureTrailingSlash(rawBaseUrl);

  if (serveCurrentLocaleAtRoot && locale === currentLocale) {
    return suffix ? `${normalizedBaseUrl.replace(/\/$/, "")}${suffix}` : normalizedBaseUrl;
  }

  if (locale === defaultLocale) {
    return suffix ? `${normalizedBaseUrl.replace(/\/$/, "")}${suffix}` : normalizedBaseUrl;
  }

  return suffix
    ? `${normalizedBaseUrl}${locale}${suffix}`
    : `${normalizedBaseUrl}${locale}/`;
}

export default function Navbar(): JSX.Element {
  const copy = useCopy();
  const location = useLocation();
  const {
    siteConfig: { baseUrl },
    i18n: { currentLocale, defaultLocale },
  } = useDocusaurusContext();
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const isDevelopment = process.env.NODE_ENV === "development";
  const serveCurrentLocaleAtRoot = isDevelopment && currentLocale !== defaultLocale;

  const unlocalizedPathname = useMemo(
    () => getUnlocalizedPathname(location.pathname, baseUrl, defaultLocale, currentLocale),
    [baseUrl, currentLocale, defaultLocale, location.pathname]
  );
  const homePath = createLocalePath(currentLocale, "/", baseUrl, defaultLocale, currentLocale, serveCurrentLocaleAtRoot);
  const isHomepage = normalizePath(location.pathname) === normalizePath(homePath);

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
  }, [location.pathname]);

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

  const visibleTocItems = useMemo(() => tocItems.filter((item) => Boolean(item.id && item.label)), [tocItems]);

  const navItems = useMemo(
    () => [
      { label: copy.common.navbar.items.document, href: HOME_LINKS.document, external: true },
      { label: copy.common.navbar.items.price, href: `${homePath}#price`, external: false },
      { label: copy.common.navbar.items.release, href: HOME_LINKS.release, external: true },
    ],
    [copy.common.navbar.items.document, copy.common.navbar.items.price, copy.common.navbar.items.release, homePath]
  );

  const localeLinks = useMemo(
    () =>
      SUPPORTED_LOCALES.map((locale) => {
        const active = locale === currentLocale;
        const disabled = isDevelopment && !active;
        const devCommand = locale === "zh-Hant" ? "npm run start:zh-Hant" : locale === "en" ? "npm run start:en" : "npm run start";

        return {
          locale,
          label: copy.common.navbar.localeNames[locale],
          href: disabled
            ? undefined
            : `${createLocalePath(locale, unlocalizedPathname, baseUrl, defaultLocale, currentLocale, serveCurrentLocaleAtRoot)}${location.hash ?? ""}`,
          active,
          disabled,
          title: disabled ? `Docusaurus 开发模式一次只支持一个 locale，请运行 ${devCommand}` : undefined,
        };
      }),
    [
      baseUrl,
      copy.common.navbar.localeNames,
      currentLocale,
      defaultLocale,
      isDevelopment,
      location.hash,
      serveCurrentLocaleAtRoot,
      unlocalizedPathname,
    ]
  );

  const currentLocaleLabel = copy.common.navbar.localeNames[currentLocale as keyof typeof copy.common.navbar.localeNames];

  const jumpToHeading = (id: string) => {
    if (!isHomepage) {
      window.location.href = `${homePath}#${id}`;
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
            <span>{copy.common.navbar.brand}</span>
            <ChevronDown size={13} className="cp-global-nav-brand-icon" aria-hidden />
          </button>
          {visibleTocItems.length ? (
            <div className="cp-global-nav-toc-panel">
              <p className="cp-global-nav-toc-title">{copy.common.navbar.tocTitle}</p>
              <ul className="cp-global-nav-toc-list">
                {visibleTocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`cp-global-nav-toc-link ${activeId === item.id ? "cp-global-nav-toc-link--active" : ""}`}
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
        <div className="flex items-center gap-4">
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
          <div className="cp-global-nav-menu">
            <button
              type="button"
              className="cp-global-nav-brand cp-global-nav-brand--trigger cp-global-nav-locale-trigger"
              aria-label={copy.common.navbar.localeSwitchLabel}
            >
              <Languages size={14} className="cp-global-nav-locale-icon" aria-hidden />
              <span>{copy.common.navbar.localeSwitchLabel}</span>
              <span className="cp-global-nav-locale-badge">{currentLocaleLabel}</span>
              <ChevronDown size={13} className="cp-global-nav-brand-icon" aria-hidden />
            </button>
            <div className="cp-global-nav-toc-panel cp-global-nav-menu-panel">
              <p className="cp-global-nav-toc-title">{copy.common.navbar.localeSwitchLabel}</p>
              <ul className="cp-global-nav-toc-list">
                {localeLinks.map((item) => (
                  <li key={item.locale}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`cp-global-nav-toc-link ${item.active ? "cp-global-nav-toc-link--active" : ""}`}
                        lang={item.locale}
                        hrefLang={item.locale}
                        aria-current={item.active ? "page" : undefined}
                        title={item.title}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className={`cp-global-nav-toc-link cp-global-nav-toc-link--disabled ${item.active ? "cp-global-nav-toc-link--active" : ""}`}
                        lang={item.locale}
                        aria-current={item.active ? "page" : undefined}
                        aria-disabled="true"
                        disabled
                        title={item.title}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
