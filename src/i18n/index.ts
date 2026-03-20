import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import enCopy from "./locales/en";
import zhHansCopy from "./locales/zh-Hans";
import zhHantCopy from "./locales/zh-Hant";
import { SUPPORTED_LOCALES, type SiteCopy, type SupportedLocale } from "./types";

const copyByLocale: Record<SupportedLocale, SiteCopy> = {
  "zh-Hans": zhHansCopy,
  "zh-Hant": zhHantCopy,
  en: enCopy,
};

export { SUPPORTED_LOCALES } from "./types";
export type { SiteCopy, SupportedLocale } from "./types";

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export function getCopy(locale: string): SiteCopy {
  return isSupportedLocale(locale) ? copyByLocale[locale] : copyByLocale["zh-Hans"];
}

export function useCopy(): SiteCopy {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  return getCopy(currentLocale);
}
