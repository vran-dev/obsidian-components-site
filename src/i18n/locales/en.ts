import type { SiteCopy } from "../types";

const enCopy: SiteCopy = {
  common: {
    seo: {
      homeDescription:
        "A plugin that reshapes how you use Obsidian to design, organize, and manage your knowledge system.",
      videoTutorialDescription:
        "Learn how to install, activate, and use Obsidian Components through quick video tutorials.",
    },
    navbar: {
      brand: "Components",
      tocTitle: "Sections",
      items: {
        document: "Docs",
        price: "Pricing",
        release: "Changelog",
      },
      localeSwitchLabel: "Switch language",
      localeNames: {
        "zh-Hans": "简中",
        "zh-Hant": "繁中",
        en: "EN",
      },
    },
    carousel: {
      prevLabel: "Previous scene",
      nextLabel: "Next scene",
      dotsLabel: "Scene switcher",
      fallbackAlt: "carousel image",
    },
    dayCounter: {
      defaultLabel: "Actively evolving",
      unitSingular: "day",
      unitPlural: "days",
    },
  },
  home: {
    hero: {
      nodeLabel: "Components",
      titleLine: "Stop fighting code and make system-building in Obsidian simple and enjoyable.",
      tags: ["Visual building", "Templates ready to use", "AI acceleration", "One-time purchase"],
      primaryCta: "Start free trial",
      secondaryCta: "Buy once →",
    },
    sections: {
      data: {
        title: "Turn notes into an executable system",
        subtitle:
          "Tasks, references, and progress often live across different pages. Bring them into one view and priorities become clear again.",
      },
      components: {
        title: "15+ components to support your imagination",
        subtitle:
          "No code required. Drag, combine, and build project dashboards, knowledge homepages, review systems, and personal dashboards.",
      },
      ai: {
        title: "An AI assistant that can actually do work",
        subtitle:
          "From organizing your whole vault to generating components and drafting content, it turns “knowing what to do” into “starting now.”",
      },
    },
    featureBento: {
      dataView: {
        title: "Data views",
        description:
          "Pull the same data set from across your vault with filters, then switch between table, gallery, kanban, calendar, and gantt views.",
        result: "Value: one source of truth, multiple ways to think, plan, execute, and review",
      },
      charts: {
        title: "Charts",
        description:
          "Support for bar, line, pie, calendar heatmap, funnel, stacked charts, and more for weekly reports, reviews, and operating dashboards.",
        result: "Value: turn scattered data into conclusions people can understand fast",
        pieSegments: ["New features", "Improvements", "Bug fixes", "AI capabilities"],
        barAriaLabel: "bar chart of weekly updates",
        lineAriaLabel: "line chart of feature activity trend",
        pieAriaLabel: "pie chart of release type distribution",
        heatmapAriaLabel: "calendar heatmap chart example",
        heatmapTooltipLabel: "Release activity",
      },
      databaseViews: {
        tabsAriaLabel: "Database view switcher",
        tabs: {
          table: "Table",
          gallery: "Gallery",
          kanban: "Kanban",
          calendar: "Calendar",
          gantt: "Gantt",
        },
        tableHeaders: {
          name: "Name",
          status: "Status",
          priority: "Priority",
          owner: "Owner",
          due: "Due",
        },
        galleryLabels: {
          type: "Type",
          owner: "Owner",
        },
        calendarWeekdays: ["M", "T", "W", "T", "F", "S", "S"],
        statuses: {
          planned: "Planned",
          inProgress: "In progress",
          released: "Released",
        },
        useCases: [
          {
            title: "Kanban",
            description: "Perfect for project management, giving you an instant view of task status and priority.",
            image: "/img/feature/project-management-kanban.png",
          },
          {
            title: "Gantt",
            description: "See project timelines and task progress clearly so coordination becomes much easier.",
            image: "/img/feature/project-management-gantt.png",
          },
          {
            title: "Gallery",
            description: "Present records as cards for knowledge bases, case libraries, and other content-heavy collections.",
            image: "/img/feature/books.png",
          },
        ],
      },
      records: [
        {
          id: "task-1",
          title: "Launch AI Agent workflow",
          status: "inProgress",
          priority: "P0",
          owner: "Vran",
          start: "03-02",
          due: "03-09",
          type: "Feature",
          cover: "linear-gradient(135deg, #8f9cff 0%, #6370c7 100%)",
        },
        {
          id: "task-2",
          title: "Upgrade database template library",
          status: "planned",
          priority: "P1",
          owner: "Moy",
          start: "03-10",
          due: "03-15",
          type: "Content",
          cover: "linear-gradient(135deg, #67d4ff 0%, #3ea2cf 100%)",
        },
        {
          id: "task-3",
          title: "Organize user case hub",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "Content",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-3-1",
          title: "Write docs for the user case hub",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "Content",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-4",
          title: "Release component docs 2.0",
          status: "released",
          priority: "P0",
          owner: "ZiQuan",
          start: "03-01",
          due: "03-04",
          type: "Feature",
          cover: "linear-gradient(135deg, #7a8fd8 0%, #55629f 100%)",
        },
        {
          id: "task-5",
          title: "Improve data sync stability",
          status: "planned",
          priority: "P2",
          owner: "The Fool",
          start: "03-18",
          due: "03-26",
          type: "Ops",
          cover: "linear-gradient(135deg, #6c7b92 0%, #465263 100%)",
        },
      ],
    },
    systemCanvas: {
      items: [
        {
          name: "Compositions",
          description: "Combine components with multiple layout modes, including tabs, columns, lists, and more.",
        },
        {
          name: "Markdown",
          description: "Embed and render any markdown content, and connect smoothly with other code-block-based plugins.",
        },
        {
          name: "Custom components",
          description: "Create personalized components with JSX, or let AI generate and iterate them for you.",
        },
        {
          name: "Cards",
          description: "Flexible card components for images, text, or even button-like actions.",
        },
        {
          name: "Buttons",
          description: "Trigger commands, create files, open links, and more with a click.",
        },
        {
          name: "Stats",
          description: "Count notes, tasks, and other records with your own rules.",
        },
        {
          name: "Date progress",
          description: "Show progress toward a target date in real time.",
        },
        {
          name: "Elapsed timer",
          description: "Show how long it has been since a past date or event.",
        },
        {
          name: "Countdown",
          description: "Show how much time remains until a future date or event.",
        },
        {
          name: "Clock",
          description: "A minimal live clock component.",
        },
        {
          name: "Check-in",
          description: "Track long-term habits with lightweight check-ins.",
        },
        {
          name: "Attachment library",
          description: "Manage vault-wide attachments including images, PDFs, and more.",
        },
      ],
    },
    aiSample: {
      executionLogs: [
        "Read: component spec and templates",
        "Read: archive/database.components",
        "tool_call: read/write",
        "shell: npm run build",
        "subagent: ui-polish",
        "Deep thinking 15.8s",
      ],
      featureItems: [
        {
          title: "Tool calling",
          detail: "Turn AI into a real operator that can organize knowledge, generate components, create articles, and summarize historical content.",
        },
        {
          title: "SKILL compatible",
          detail: "Connect third-party SKILLs and keep expanding capabilities for different scenarios like PPTs, databases, or canvas creation.",
        },
        {
          title: "Multi-model switching",
          detail: "Bring your preferred model and switch between OpenAI, Gemini, Claude, Zhipu, DeepSeek, and more.",
        },
        {
          title: "Vision support",
          detail: "Add visual understanding so AI can read images and extend its perception.",
        },
      ],
      chat: {
        title: "Create a pixel-style clock component",
        tokenLabel: "20.9K tokens",
        timeLabel: "13:09",
        message: "Create a pixel-style clock component that shows the current time.",
        requirements: [
          "First line shows hour / minute / second",
          "Second line shows year / month / day",
          "Click the date to jump to today's daily note",
          "Keep the design clean and avoid excessive decoration",
        ],
        attachments: ["database", "custom-component-spec-prompt.md"],
        confirmationTitle: "Requirement check",
        confirmations: [
          "Two lines: time / date",
          "Interaction: click date to jump to today's daily note",
          "Style: pixel, clean, practical",
        ],
        inputPlaceholder: "Ask anything...",
        toolbar: {
          model: "glm-4.7",
          thinking: "Thinking",
          extensions: "Extensions",
        },
      },
    },
    templates: {
      title: "You don't have to start from a blank page",
      subtitle:
        "Common problems have already been turned into templates: project execution, homepage building, and habit tracking. Apply, adapt, and get into action fast.",
      ctaLabel: "View template",
      items: [
        {
          title: "VPara",
          image: "/img/feature/template-vpara.png",
          detail:
            "When tasks and resources become messy, VPara uses the PARA structure and a minimal plugin stack to help you collect, sort, and execute in one system. It has already been tested across many domains, with more than 1,000 projects and about a 90% completion rate.",
          link: "https://my.feishu.cn/wiki/Ol44wnbF9iO3iAkbqeJcCqnJn9b",
        },
        {
          title: "Emotion",
          image: "/img/feature/template-emotion.png",
          detail:
            "A common problem in emotion tracking is 'I recorded a lot, but I still can't see patterns.' This template connects check-ins, journals, and dashboards into one loop so you can spot triggers and adjust your rhythm.",
          link: "https://my.feishu.cn/wiki/Ddh4wfyO8ihTEEkkXFHckWy2nPe",
        },
        {
          title: "Home",
          image: "/img/feature/homepage-3.png",
          detail:
            "A common homepage problem is 'it looks good, but it isn't useful.' This template puts components, charts, and data views on one screen so you can see what matters and act immediately.",
          link: "https://my.feishu.cn/record/DtGTr0R5keDjjYc0FVgcUGHznWd",
        },
        {
          title: "Habit system",
          image: "/img/feature/habit.png",
          detail:
            "Habits usually fail because feedback is too weak. Build a visual tracking system with check-ins and data views so you can see trends early and reinforce execution.",
          link: "https://my.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
        },
      ],
    },
    userStories: {
      nodeLabel: "User stories",
      title: "User stories",
      subtitle:
        "They've been through the same problem: too many notes, too little action. See how real users build executable systems with Components.",
      loadMoreLabel: "Load more stories",
      items: [
        {
          author: "kairitsuhou",
          description: "A game artist in Tokyo surviving on Obsidian.",
          img: "/img/user-stories/kairitsuhou.jpg",
        },
        {
          author: "ZiQuan's SPACE",
          description: "Creator of the 'ZiQuan's SPACE'公众号 and a power user of productivity tools.",
          img: "/img/user-stories/ziquandespace.png",
          readMore: {
            url: "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ",
            text: "Read tutorial →",
          },
        },
        {
          author: "Erbao",
          description: "Academic writing coach who wrote a 140k-word thesis in Obsidian.",
          img: "/img/user-stories/erbao.jpg",
        },
        {
          author: "TracingOrigins",
          description: "Known in the community for Rainbow Components, a template library author.",
          img: "/img/user-stories/tracingorigins.png",
          readMore: {
            url: "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b",
            text: "Download template →",
          },
        },
        {
          author: "Moy",
          description: "Obsidian? This is even more fun than games!",
          img: "/img/user-stories/moy.jpeg",
        },
        {
          author: "Lian",
          description: "EVA theme example vault",
          img: "/img/user-stories/lian-eva.jpg",
          readMore: {
            url: "https://www.bilibili.com/video/BV1Ax4xeKEVf/",
            text: "Get template →",
          },
        },
        {
          author: "Mao Wuyu",
          img: "/img/user-stories/maowuyu.jpg",
        },
        {
          author: "🐟",
          description: "Cat pics on the wall 🐱",
          img: "/img/user-stories/fish.jpg",
        },
        {
          author: "Juzi",
          description: "Heavy Obsidian user who loves tinkering.",
          img: "/img/user-stories/橘子-2-light.jpg",
        },
        {
          author: "Juzi",
          description: "Heavy Obsidian user who loves tinkering.",
          img: "/img/user-stories/橘子-2-dark.jpg",
        },
        {
          author: "Moy",
          description: "Obsidian? This is even more fun than games!",
          img: "/img/user-stories/moy2.jpg",
        },
        {
          author: "Juzi",
          description: "Heavy Obsidian user who loves tinkering.",
          img: "/img/user-stories/橘子.jpg",
        },
        {
          author: "🐟",
          description: "Cat pics on the wall 🐱",
          img: "/img/user-stories/fish2.jpg",
        },
        {
          author: "vran",
          description: "Somehow sneaked into the showcase~",
          img: "/img/user-stories/vran.png",
          readMore: {
            url: "https://www.bilibili.com/video/BV1mm421G7xX/?share_source=copy_web&vd_source=8ccbcd34f75fd457148a9654b5ffab99",
            text: "Watch video →",
          },
        },
        {
          author: "vran",
          description: "Somehow sneaked into the showcase~",
          img: "/img/user-stories/vran2.jpg",
        },
        {
          author: "The Fool",
          description: "A helpful geek active in the Obsidian community.",
          img: "/img/user-stories/thefool.jpg",
        },
        {
          author: "Lin",
          img: "/img/user-stories/霖.jpg",
        },
        {
          author: "Jifeng",
          img: "/img/user-stories/季风.jpg",
        },
      ],
    },
    userReviews: {
      nodeLabel: "Real voices",
      title: "What users say",
      subtitle: "Long-term feedback from creators, developers, and power users",
      linkTitlePrefix: "Open profile for",
      items: [
        {
          name: "Moy",
          url: "https://forum-zh.obsidian.md/u/moy/summary",
          description: "Official Chinese translation contributor for Obsidian | Author of Easy-Copy and Yearly-Galance | Content creator",
          tone: "success",
          content: `Paid closed-source plugins are already at a disadvantage in the Obsidian community. So with so many free plugins available, why can this one charge money and still attract so many buyers?

To me, CPS is worth it because it truly expands Obsidian's lower-level capability boundary and gives it real potential to compete with Notion databases. It started building database capabilities inside Obsidian two years before official Bases, and the experience feels like Bases Plus. Among similar plugins, it's the best I've used.

On top of that, it comes with charts, stats, grid layouts, and a whole set of components, which also makes it a strong solution for homepage customization.`,
        },
        {
          name: "RavenHogWarts",
          url: "https://github.com/RavenHogWarts",
          description: "Founder of Raven-Pensieve | Author of Ace-Code-Editor, Custom-Icons, Next-TOC, and more | Community geek",
          tone: "success",
          content: `As one of the earliest testers from the public beta days, I've watched Components evolve at an astonishing speed. Inside the test group, every day felt like a new release.

For people who care about aesthetics and for non-coders, you don't have to wrestle with obscure Dataview code. A bit of drag and drop is enough to build a beautiful, executable system with almost no barrier.

For geeks and power tinkerers, custom components open up endless possibilities. You can generate what you want with AI in one shot, or write the code yourself for more advanced functionality.`,
        },
        {
          name: "Erbao",
          url: "https://mp.weixin.qq.com/s/R3i0jgXieuBEcHBjGmVGtA",
          description: "Academic writing coach in Marxist theory | Community leader and admin for a million-player gaming community | Special roundtable guest in the Chinese Obsidian community",
          tone: "success",
          content: `I've been lucky to witness the whole journey of the Component plugin—from its first emergence to the thriving ecosystem of more than a hundred blooming components today.

After years of polishing, the design philosophy has remained consistent: open without losing boundaries, flexible without falling into chaos. Whether you're a deep geek or a lightweight user, you can build your own component kingdom here.

As a humanities student with zero coding background, I was still able to build several useful mini components with the help of custom component support, which dramatically improved my knowledge management efficiency.`,
        },
        {
          name: "joeytoday",
          url: "https://joeytoday.com/",
          description: "Knowledge management enthusiast and content creator who loves tinkering with fun things",
          tone: "success",
          content: `My deepest impression of Obsidian used to be that its databases were just too ugly, which made me avoid them for a long time. But Components makes Obsidian databases look much more like Notion. For me, aesthetics are the first motivation for tinkering.

Once I started using Components heavily, I realized database display was only the baseline. I could also customize my own components, so I began building my own mood calendar and journal review widgets. It wasn't only prettier—my notes actually came alive.

If you like tinkering too, this is basically a must-buy plugin once you've chosen Obsidian.`,
        },
        {
          name: "闫羽鳞",
          description: "Founder of Miaoziguan | Lead designer for multiple billion-scale brands",
          tone: "success",
          content: `Before I use a piece of software, I always want to understand the developer behind it—whether they have a bad track record, whether this is just a passing whim, or whether they'll leave users behind after digging a big pit.

V is one of the very few real friends I have in the programming world.

His product has been updated steadily for years. As a paid plugin in the Obsidian ecosystem, it paid for itself long ago. I don't need to say how reliable it is. We even became friends because of this plugin. My level of support speaks for itself: to help V keep going for the long run, I teamed up with another big name, Erbao, and we co-funded and co-created a typeface called 'Miaobaozu Shining'. It's the only time I've used my professional skill to 'chase a star.'

V is my friend, and also someone I learn from.

I've always believed: only reliable people can build reliable products.`,
        },
      ],
    },
    price: {
      title: "Trial and buyout",
      subtitle: "Validate with a trial first, then buy only if it fits. Keep decision risk low.",
      statusLabel: "Components is still being refined",
      agreementLabel: "View purchase agreement",
      releaseLabel: "Latest changelog",
      trial: {
        title: "7-day full-feature trial",
        price: "$0 / seat",
        description: "Validate whether it solves your core problem before deciding to buy.",
        cta: "Start free",
      },
      buyout: {
        title: "One-time purchase, long-term use",
        price: "28 USD",
        result: "Keep getting iterations without paying again and again",
        features: [
          "Unlock all components and database capabilities",
          "Connect your own AI models for vault-wide collaboration",
          "Get support through the member community",
          "Keep receiving new ready-to-use templates",
          "Benefit from continuous component updates",
        ],
        cta: "Buy once",
      },
    },
    faq: {
      nodeLabel: "FAQ",
      title: "FAQ",
      documentLabel: "documentation",
      agreementLabel: "purchase agreement",
      items: [
        {
          question: "Are future updates included after purchase?",
          answer: "Yes. A one-time purchase includes continued access to new components and feature updates.",
        },
        {
          question: "Can I use Components without writing code?",
          answer: "Yes. The core experience is visual building, so coding is not a prerequisite.",
        },
        {
          question: "How do I connect AI features?",
          answer: "You can configure your own AI provider and model, keeping everything controllable and replaceable.",
        },
        {
          question: "What can the AI Agent do?",
          answer: "It can help manage knowledge across the whole vault, create components, and generate content.",
        },
        {
          question: "Where can I find the docs and agreement after purchase?",
          answerWithLinks: {
            prefix: "You can read the",
            middle: "and the",
            suffix: ".",
          },
        },
        {
          question: "How do I get support when I run into problems?",
          answer: "You can keep getting help through the docs, changelog, and post-purchase support channels.",
        },
      ],
    },
    about: {
      nodeLabel: "about-me",
      title: "About me",
      subtitle:
        "An old-school programmer lucky enough to survive from the previous century. I've open-sourced a few products (4k+ stars in total) and I'm now evolving with the new era. Representative works:",
      statusLabels: {
        openSource: "Open source",
        closedSource: "Closed source",
      },
      viewRepoLabel: "View repository",
      items: [
        {
          name: "Components",
          category: "Obsidian Plugin",
          description: "The current project: a plugin for visually building knowledge systems in Obsidian.",
          status: "closedSource",
          link: "https://github.com/obsidian-components/obsidian-components-release",
        },
        {
          name: "Composer",
          category: "Obsidian Theme",
          description: "A clean Obsidian theme.",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-composer",
        },
        {
          name: "Form-flow",
          category: "Obsidian Plugin",
          description: "A powerful productivity plugin for Obsidian, built for fast capture and automation workflows.",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-form-flow",
        },
        {
          name: "Contribution graph",
          category: "Dataview Plugin",
          description: "A flexible heatmap plugin for Obsidian powered by Dataview.",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-contribution-graph",
        },
        {
          name: "databasir",
          category: "Database Platform",
          description: "An open-source platform for automated database schema management.",
          status: "openSource",
          link: "https://github.com/vran-dev/databasir",
        },
        {
          name: "prettyZoo",
          category: "Developer Tool",
          description: "An open-source visual GUI client for ZooKeeper.",
          status: "openSource",
          link: "https://github.com/vran-dev/PrettyZoo",
        },
      ],
    },
  },
  videoTutorial: {
    pageTitle: "Video tutorials",
    tutorials: [
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000535727&bvid=BV1AzWPeTEGs&cid=500001653536537&p=1&autoplay=0",
        title: "How to install Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000469225&bvid=BV1CzWPeKEcF&cid=500001653538696&p=1&autoplay=0",
        title: "How to activate Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017313325&bvid=BV1PqWPeBETM&cid=500001653539950&p=1&autoplay=0",
        title: "How to create a component",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017247320&bvid=BV1CqWPeqE4W&cid=500001653540631&p=1&autoplay=0",
        title: "How to make a component fill the note content area",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112983023813371&bvid=BV1YHWKexEQn&cid=500001653794650&p=1&autoplay=0",
        title: "Combining components and layouts",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112988828992346&bvid=BV1S6pSeTEFf&cid=500001654951342&p=1&autoplay=0",
        title: "Introduction to data view components",
      },
    ],
  },
};

export default enCopy;
