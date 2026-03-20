export const SUPPORTED_LOCALES = ["zh-Hans", "zh-Hant", "en"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export interface LocalizedTextLink {
  url: string;
  text: string;
}

export interface UserStoryCopy {
  author: string;
  img: string;
  description?: string;
  readMore?: LocalizedTextLink;
}

export interface UserReviewCopy {
  name: string;
  url?: string;
  description?: string;
  content: string;
  tone?: "success" | "brand" | "ai";
}

export interface AboutProductCopy {
  name: string;
  category: string;
  description: string;
  status: "openSource" | "closedSource";
  link: string;
}

export interface DbSampleRecordCopy {
  id: string;
  title: string;
  status: "planned" | "inProgress" | "released";
  priority: "P0" | "P1" | "P2";
  owner: string;
  start: string;
  due: string;
  type: string;
  cover: string;
}

export interface SiteCopy {
  common: {
    seo: {
      homeDescription: string;
      videoTutorialDescription: string;
    };
    navbar: {
      brand: string;
      tocTitle: string;
      items: {
        document: string;
        price: string;
        release: string;
      };
      localeSwitchLabel: string;
      localeNames: Record<SupportedLocale, string>;
    };
    carousel: {
      prevLabel: string;
      nextLabel: string;
      dotsLabel: string;
      fallbackAlt: string;
    };
    dayCounter: {
      defaultLabel: string;
      unitSingular: string;
      unitPlural: string;
    };
  };
  home: {
    hero: {
      nodeLabel: string;
      titleLine: string;
      tags: string[];
      primaryCta: string;
      secondaryCta: string;
    };
    sections: {
      data: {
        title: string;
        subtitle: string;
      };
      components: {
        title: string;
        subtitle: string;
      };
      ai: {
        title: string;
        subtitle: string;
      };
    };
    featureBento: {
      dataView: {
        title: string;
        description: string;
        result: string;
      };
      charts: {
        title: string;
        description: string;
        result: string;
        pieSegments: string[];
        barAriaLabel: string;
        lineAriaLabel: string;
        pieAriaLabel: string;
        heatmapAriaLabel: string;
        heatmapTooltipLabel: string;
      };
      databaseViews: {
        tabsAriaLabel: string;
        tabs: {
          table: string;
          gallery: string;
          kanban: string;
          calendar: string;
          gantt: string;
        };
        tableHeaders: {
          name: string;
          status: string;
          priority: string;
          owner: string;
          due: string;
        };
        galleryLabels: {
          type: string;
          owner: string;
        };
        calendarWeekdays: string[];
        statuses: {
          planned: string;
          inProgress: string;
          released: string;
        };
        useCases: Array<{
          title: string;
          description: string;
          image: string;
        }>;
      };
      records: DbSampleRecordCopy[];
    };
    systemCanvas: {
      items: Array<{
        name: string;
        description: string;
      }>;
    };
    aiSample: {
      executionLogs: string[];
      featureItems: Array<{
        title: string;
        detail: string;
      }>;
      chat: {
        title: string;
        tokenLabel: string;
        timeLabel: string;
        message: string;
        requirements: string[];
        attachments: string[];
        confirmationTitle: string;
        confirmations: string[];
        inputPlaceholder: string;
        toolbar: {
          model: string;
          thinking: string;
          extensions: string;
        };
      };
    };
    templates: {
      title: string;
      subtitle: string;
      ctaLabel: string;
      items: Array<{
        title: string;
        image: string;
        detail: string;
        link: string;
      }>;
    };
    userStories: {
      nodeLabel: string;
      title: string;
      subtitle: string;
      loadMoreLabel: string;
      items: UserStoryCopy[];
    };
    userReviews: {
      nodeLabel: string;
      title: string;
      subtitle: string;
      linkTitlePrefix: string;
      items: UserReviewCopy[];
    };
    price: {
      title: string;
      subtitle: string;
      statusLabel: string;
      agreementLabel: string;
      releaseLabel: string;
      trial: {
        title: string;
        price: string;
        description: string;
        cta: string;
      };
      buyout: {
        title: string;
        price: string;
        result: string;
        features: string[];
        cta: string;
      };
    };
    faq: {
      nodeLabel: string;
      title: string;
      documentLabel: string;
      agreementLabel: string;
      items: Array<{
        question: string;
        answer?: string;
        answerWithLinks?: {
          prefix: string;
          middle: string;
          suffix: string;
        };
      }>;
    };
    about: {
      nodeLabel: string;
      title: string;
      subtitle: string;
      statusLabels: {
        openSource: string;
        closedSource: string;
      };
      viewRepoLabel: string;
      items: AboutProductCopy[];
    };
  };
  videoTutorial: {
    pageTitle: string;
    tutorials: Array<{
      url: string;
      title: string;
      description?: string;
    }>;
  };
}
