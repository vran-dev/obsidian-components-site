import type { SiteCopy } from "../types";

const zhHansCopy: SiteCopy = {
  common: {
    seo: {
      homeDescription: "一个可以改变 Obsidian 玩法的插件，用于设计、组织和管理你的知识系统。",
      videoTutorialDescription: "通过视频教程快速了解 Obsidian Components 的安装、激活与核心用法。",
    },
    navbar: {
      brand: "Components",
      tocTitle: "章节导航",
      items: {
        document: "文档",
        price: "价格",
        release: "更新日志",
      },
      localeSwitchLabel: "语言切换",
      localeNames: {
        "zh-Hans": "简体中文",
        "zh-Hant": "繁體中文",
        en: "English",
      },
    },
    carousel: {
      prevLabel: "上一条场景",
      nextLabel: "下一条场景",
      dotsLabel: "场景切换",
      fallbackAlt: "轮播图片",
    },
    dayCounter: {
      defaultLabel: "持续更新中",
      unitSingular: "天",
      unitPlural: "天",
    },
  },
  home: {
    hero: {
      nodeLabel: "Components",
      titleLine: "告别代码，让在 Obsidian 中搭建系统成为一种简单的乐趣",
      tags: ["可视化搭建", "模板开箱即用", "AI 提效", "买断制授权"],
      primaryCta: "开始试用",
      secondaryCta: "限时买断 →",
    },
    sections: {
      data: {
        title: "把笔记变成可执行系统",
        subtitle:
          "任务、资料、进度常常分散在不同页面。把它们拉到同一视图后，优先级和下一步会更清晰。",
      },
      components: {
        title: "用 15+ 种组件支撑你的想象力",
        subtitle: "不用写代码，拖拽组合即可搭建项目面板、知识主页、复盘系统与个人仪表盘。",
      },
      ai: {
        title: "一个真正可以帮你干活儿的 AI 助手",
        subtitle: "从整理全库笔记、生成组件到草拟内容，让“知道要做什么”变成“马上开始做”",
      },
    },
    featureBento: {
      dataView: {
        title: "数据视图",
        description:
          "基于筛选规则从全库文件中抽取同一批数据，再按表格、画廊、看板、日历、甘特切换视图。",
        result: "价值：同一事实，多种表达；计划、执行、复盘都围绕同一数据",
      },
      charts: {
        title: "图表",
        description:
          "支持柱状图、折线图、饼图、日历热力图、漏斗图、堆叠图等，适用于周报、复盘和经营看板。",
        result: "价值：把分散数据转成可快速沟通的结论",
        pieSegments: ["新特性", "优化改进", "Bug 修复", "AI 能力"],
        barAriaLabel: "每周更新数量柱状图",
        lineAriaLabel: "功能活跃趋势折线图",
        pieAriaLabel: "发布类型占比饼图",
        heatmapAriaLabel: "图表日历热力图示例",
        heatmapTooltipLabel: "发布活跃度",
      },
      databaseViews: {
        tabsAriaLabel: "数据库视图切换",
        tabs: {
          table: "表格视图",
          gallery: "画廊视图",
          kanban: "Kanban 视图",
          calendar: "日历视图",
          gantt: "甘特视图",
        },
        tableHeaders: {
          name: "名称",
          status: "状态",
          priority: "优先级",
          owner: "负责人",
          due: "截止",
        },
        galleryLabels: {
          type: "类型",
          owner: "负责人",
        },
        calendarWeekdays: ["一", "二", "三", "四", "五", "六", "日"],
        statuses: {
          planned: "待规划",
          inProgress: "进行中",
          released: "已发布",
        },
        useCases: [
          {
            title: "看板",
            description: "看板非常适合用来管理项目，能直观地看到每个任务的状态和优先级。",
            image: "/img/feature/project-management-kanban.png",
          },
          {
            title: "甘特图",
            description: "甘特图可以帮助你直观地看到项目时间线和任务进度，便于管理和协调。",
            image: "/img/feature/project-management-gantt.png",
          },
          {
            title: "画廊",
            description: "画廊视图可以把数据以卡片形式展示出来，适合用来做知识库、案例库等内容展示。",
            image: "/img/feature/books.png",
          },
        ],
      },
      records: [
        {
          id: "task-1",
          title: "发布 AI Agent 工作流",
          status: "inProgress",
          priority: "P0",
          owner: "Vran",
          start: "03-02",
          due: "03-09",
          type: "功能",
          cover: "linear-gradient(135deg, #8f9cff 0%, #6370c7 100%)",
        },
        {
          id: "task-2",
          title: "升级数据库模板库",
          status: "planned",
          priority: "P1",
          owner: "Moy",
          start: "03-10",
          due: "03-15",
          type: "内容",
          cover: "linear-gradient(135deg, #67d4ff 0%, #3ea2cf 100%)",
        },
        {
          id: "task-3",
          title: "梳理用户案例中心",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "内容",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-3-1",
          title: "撰写用户案例中心文档",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "内容",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-4",
          title: "上线组件文档 2.0",
          status: "released",
          priority: "P0",
          owner: "自权",
          start: "03-01",
          due: "03-04",
          type: "功能",
          cover: "linear-gradient(135deg, #7a8fd8 0%, #55629f 100%)",
        },
        {
          id: "task-5",
          title: "优化数据同步稳定性",
          status: "planned",
          priority: "P2",
          owner: "The Fool",
          start: "03-18",
          due: "03-26",
          type: "运维",
          cover: "linear-gradient(135deg, #6c7b92 0%, #465263 100%)",
        },
      ],
    },
    systemCanvas: {
      items: [
        {
          name: "组合",
          description: "提供多种布局模式在页面中组合组件，包括标签页布局、分栏布局、列表布局等。",
        },
        {
          name: "Markdown",
          description: "可以嵌入任意 markdown 文本内容并进行渲染，也支持与其他代码块类插件联动。",
        },
        {
          name: "自定义组件",
          description: "使用 JSX 创建个性化组件，也可以让 AI 快速生成并持续迭代。",
        },
        {
          name: "卡片",
          description: "多功能卡片组件，可以用来展示图片、文字，也可以作为一个按钮。",
        },
        {
          name: "按钮",
          description: "设置点击执行命令、创建文件、打开链接等操作。",
        },
        {
          name: "统计数字",
          description: "根据指定规则统计笔记、任务的数量。",
        },
        {
          name: "日期进度",
          description: "实时显示距离某个截止日期的进度。",
        },
        {
          name: "正计时",
          description: "显示当前时间距离过去某个时间已经过去了多久。",
        },
        {
          name: "倒计时",
          description: "显示当前时间距离未来某个时间还有多久。",
        },
        {
          name: "时钟",
          description: "一个极简的实时时钟组件。",
        },
        {
          name: "打卡",
          description: "通过打卡记录自己的长期习惯。",
        },
        {
          name: "附件库",
          description: "管理全库附件，包括图片、PDF 等内容。",
        },
      ],
    },
    aiSample: {
      executionLogs: [
        "Read: 组件规范与模板文件",
        "Read: archive/database.components",
        "tool_call: read/write",
        "shell: npm run build",
        "subagent: ui-polish",
        "深度思考 15.8s",
      ],
      featureItems: [
        {
          title: "支持工具调用",
          detail: "让 AI 成为真正能干活的助手，整理知识库、生成组件、创建文章、总结历史内容都不在话下。",
        },
        {
          title: "适配 SKILL",
          detail: "支持接入第三方 SKILL，能力可以无限扩展，满足不同场景需求，比如创建 PPT、创建数据库、创建 canvas 等。",
        },
        {
          title: "多模型切换",
          detail: "可接入你喜欢的模型，兼容 OpenAI、Gemini、Claude、智谱、DeepSeek 等海量模型。",
        },
        {
          title: "视觉接入",
          detail: "支持接入视觉能力，能够自动识别图像内容，扩展 AI 的感知能力。",
        },
      ],
      chat: {
        title: "创建图润像素风格时钟组件",
        tokenLabel: "20.9K tokens",
        timeLabel: "13:09",
        message: "创建一个像素风时钟组件，可以显示当前时间。",
        requirements: [
          "第一行标题显示时分秒",
          "第二行标题显示年月日",
          "点击年月日跳转到当日日记",
          "简洁设计，避免过多装饰",
        ],
        attachments: ["database", "自定义组件规范-prompt.md"],
        confirmationTitle: "需求确认",
        confirmations: [
          "两行标题：时分秒 / 年月日",
          "交互：点击日期跳转当日日记",
          "风格：像素风、简洁、可执行",
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
      title: "你不需要从空白页开始",
      subtitle: "常见难题都已沉淀成模板：项目推进、主页搭建、习惯追踪。套用即用，边用边改，快速进入可执行状态。",
      ctaLabel: "查看模板方案",
      items: [
        {
          title: "VPara",
          image: "/img/feature/template-vpara.png",
          detail: "当任务和资料越积越乱时，VPara 用 PARA 结构和最少插件帮你统一收集、分拣、执行。已在多领域实践，累计项目超 1000 个，完成率约 90%。",
          link: "https://my.feishu.cn/wiki/Ol44wnbF9iO3iAkbqeJcCqnJn9b",
        },
        {
          title: "Emotion",
          image: "/img/feature/template-emotion.png",
          detail: "情绪管理常见问题是“记了很多，却看不清规律”。这个模板把打卡、日记、仪表盘串成闭环，帮助你识别触发因素并调整节奏。",
          link: "https://my.feishu.cn/wiki/Ddh4wfyO8ihTEEkkXFHckWy2nPe",
        },
        {
          title: "Home",
          image: "/img/feature/homepage-3.png",
          detail: "主页常见痛点是“好看但不好用”。这个模板把组件、图表、数据视图整合在一屏，让你每天打开就能看清重点并立即行动。",
          link: "https://my.feishu.cn/record/DtGTr0R5keDjjYc0FVgcUGHznWd",
        },
        {
          title: "习惯系统",
          image: "/img/feature/habit.png",
          detail: "习惯难坚持，多半因为反馈太弱。用打卡组件和数据视图搭建可视化追踪系统，及时看到趋势变化，持续强化执行。",
          link: "https://my.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
        },
      ],
    },
    userStories: {
      nodeLabel: "用户案例",
      title: "用户案例",
      subtitle: "他们也经历过“笔记很多、行动很少”。看看真实用户如何用 Components 搭出可执行系统。",
      loadMoreLabel: "加载更多案例",
      items: [
        {
          author: "kairitsuhou",
          description: "在东京靠 Obsidian 吊命的游戏美术人",
          img: "/img/user-stories/kairitsuhou.jpg",
        },
        {
          author: "自权的 SPACE",
          description: "公众号“自权的 SPACE”作者，效率工具玩家",
          img: "/img/user-stories/ziquandespace.png",
          readMore: {
            url: "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ",
            text: "查看教程 →",
          },
        },
        {
          author: "二宝学长",
          description: "用 Obsidian 写了 14 万字论文的学术写作教练",
          img: "/img/user-stories/erbao.jpg",
        },
        {
          author: "TracingOrigins",
          description: "江湖人称惊佬，模板库 Rainbow Components 作者。",
          img: "/img/user-stories/tracingorigins.png",
          readMore: {
            url: "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b",
            text: "下载模板 →",
          },
        },
        {
          author: "Moy",
          description: "Obsidian？这可比游戏好玩儿多了！",
          img: "/img/user-stories/moy.jpeg",
        },
        {
          author: "里安",
          description: "EVA 主题示例库",
          img: "/img/user-stories/lian-eva.jpg",
          readMore: {
            url: "https://www.bilibili.com/video/BV1Ax4xeKEVf/",
            text: "获取模板 →",
          },
        },
        {
          author: "毛无语",
          img: "/img/user-stories/maowuyu.jpg",
        },
        {
          author: "🐟",
          description: "猫猫上墙🐱",
          img: "/img/user-stories/fish.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜欢折腾",
          img: "/img/user-stories/橘子-2-light.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜欢折腾",
          img: "/img/user-stories/橘子-2-dark.jpg",
        },
        {
          author: "Moy",
          description: "Obsidian？这可比游戏好玩儿多了！",
          img: "/img/user-stories/moy2.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜欢折腾",
          img: "/img/user-stories/橘子.jpg",
        },
        {
          author: "🐟",
          description: "猫猫上墙🐱",
          img: "/img/user-stories/fish2.jpg",
        },
        {
          author: "vran",
          description: "不小心混进来的～",
          img: "/img/user-stories/vran.png",
          readMore: {
            url: "https://www.bilibili.com/video/BV1mm421G7xX/?share_source=copy_web&vd_source=8ccbcd34f75fd457148a9654b5ffab99",
            text: "观看视频 →",
          },
        },
        {
          author: "vran",
          description: "不小心混进来的～",
          img: "/img/user-stories/vran2.jpg",
        },
        {
          author: "The Fool",
          description: "活跃在 Obsidian 社区的热心极客",
          img: "/img/user-stories/thefool.jpg",
        },
        {
          author: "霖",
          img: "/img/user-stories/霖.jpg",
        },
        {
          author: "季风",
          img: "/img/user-stories/季风.jpg",
        },
      ],
    },
    userReviews: {
      nodeLabel: "真实声音",
      title: "用户口碑",
      subtitle: "来自创作者、开发者与重度用户的长期反馈",
      linkTitlePrefix: "跳转到",
      items: [
        {
          name: "Moy",
          url: "https://forum-zh.obsidian.md/u/moy/summary",
          description: "Ob 官方中文翻译贡献者 | Easy-Copy、Yearly-Galance 插件作者 | 内容创作者",
          tone: "success",
          content: `付费闭源插件本身在 OB 社群其实是个劣势，所以在有这么多免费插件的情况下，凭什么这个插件能卖钱？还这么多人买？

我自己是觉得 CPS 物有所值，因为它确实从底层拓展了 OB 的能力边界，让它有了和 Notion 数据库掰掰手腕的潜力。它比官方 Bases 早了两年开始做 OB 内数据库，体验相当于 Bases Plus，是我用过的同类插件中最好的。

何况还附带图表/统计等一大堆组件，以及网格布局，对于主页定制的需求也是很好的解决方案。`,
        },
        {
          name: "RavenHogWarts",
          url: "https://github.com/RavenHogWarts",
          description: "Raven-Pensieve 组织创建者 | Ace-Code-Editor、Custom-Icons、Next-TOC 等插件作者 | 社区极客",
          tone: "success",
          content: `作为从公测跟过来的“开朝元老”，Components 的进化是疯狂的，内测特战队中体验着“日日新”的迭代。

对于颜值党和代码小白，不用死磕晦涩难懂的 Dataview 代码，只需简单的拖拽，就能零门槛搭建出“高颜值可执行系统”。

对于极客和“折腾狂魔”，自定义组件给了无尽可能，我们可以直接通过 AI 一键生成自己想要的组件，也能自己手动写代码实现更复杂和高级的功能。`,
        },
        {
          name: "二宝学长",
          url: "https://mp.weixin.qq.com/s/R3i0jgXieuBEcHBjGmVGtA",
          description: "马克思主义理论学术论文写作教练 | 百万游戏用户社区首席意见领袖与管理员 | Obsidian 中文社区特邀圆桌分享嘉宾",
          tone: "success",
          content: `有幸全程见证，Component 插件从无到有的破土孵化，到如今百余款组件百花齐放的蓬勃生态。

多年磨一剑。Component 的设计哲学始终如一：开放而不失边界，自由而不陷混乱。无论你是深度极客，还是轻量用户，皆能在此构筑属于自己的“组件王国”。

对于我这种 0 代码基础的文科生，也在 component 自定义组件功能支持下，顺利开发出了若干适用的功能小组件，极大提升了我的知识管理效率。`,
        },
        {
          name: "joeytoday",
          url: "https://joeytoday.com/",
          description: "知识管理爱好者、内容创作者，爱折腾一切好玩的事",
          tone: "success",
          content: `我对 Obsidian 的最深印象就是数据库实在太丑了，让我迟迟不想使用，但是 Components 的数据库功能，让 Obsidian 的数据库能够类 Notion 地展示，对于我来说，美观是第一折腾动力。

当我开始重度使用 Components 之后，发现数据库展示只是最基础的功能，我还可以定制自己的组件，于是我开始构建自己的心情日历和日记复盘组件，不仅是美观，也真正让我的笔记活起来了。

如果你也喜欢折腾，这个组件简直是选择 Obsidian 之后的必购插件。`,
        },
        {
          name: "闫羽鳞",
          description: "喵字馆创始人｜多个亿级品牌的主案设计师",
          tone: "success",
          content: `我用一款软件之前，习惯先了解一下作者的开发背景——看看有没有黑历史，会不会只是一时兴起挖个大坑，最后丢下用户不管。

V 佬是我在程序圈里为数不多真正认识的朋友之一。

他的产品稳定更新了好多年，作为 OB 生态下的一款付费插件，早就值回票价了。有多靠谱，不必我多说。我们也是因为这款插件慢慢变成朋友。你就看我的认可程度吧——为了支持 V 佬长久地做下去，我拉上另一位大佬二宝学长，一起出钱出力，联名定制了一款字体《喵宝组·闪光体》。这是我唯一一次用自己的专业能力去“追星”。

V 佬是我的朋友，也是我学习的榜样。

我始终相信：人靠谱，产品才靠谱。`,
        },
      ],
    },
    price: {
      title: "试用和买断",
      subtitle: "先试用验证，再按需买断，把决策风险降到最低。",
      statusLabel: "Components 持续打磨中",
      agreementLabel: "查看购买协议",
      releaseLabel: "最近更新日志",
      trial: {
        title: "7 天全功能试用",
        price: "0 元 / 人",
        description: "先验证是否解决你的核心问题，再决定是否买断。",
        cta: "免费开始",
      },
      buyout: {
        title: "一次买断，长期可用",
        price: "人民币 128 元",
        result: "解决方案持续迭代，不再重复投入",
        features: [
          "解锁全部组件与数据库能力",
          "可接入 AI 模型，支持全库协作",
          "会员群答疑与使用支持",
          "模板库持续扩展，开箱即用",
          "组件能力持续更新",
        ],
        cta: "限时买断",
      },
    },
    faq: {
      nodeLabel: "FAQ",
      title: "常见问题",
      documentLabel: "使用文档",
      agreementLabel: "购买协议",
      items: [
        {
          question: "买断后是否包含后续更新？",
          answer: "包含。买断后可持续获取新组件与功能更新。",
        },
        {
          question: "不会写代码可以使用 Components 吗？",
          answer: "可以。核心能力是可视化搭建，代码不是使用前提。",
        },
        {
          question: "AI 功能如何接入？",
          answer: "你可以配置自己的 AI 服务商与模型，保持可控、可替换。",
        },
        {
          question: "AI Agent 可以做什么？",
          answer: "可在全库范围协助管理知识、创建组件、生成内容。",
        },
        {
          question: "购买后在哪里查看文档和协议？",
          answerWithLinks: {
            prefix: "可查看",
            middle: "与",
            suffix: "。",
          },
        },
        {
          question: "遇到问题如何获得支持？",
          answer: "可通过文档、更新日志和购买后支持渠道获得持续帮助。",
        },
      ],
    },
    about: {
      nodeLabel: "about-me",
      title: "关于我",
      subtitle: "上世纪侥幸生存下来的古法编程爱好者，开源过几个产品（累计 star 4k+），正在适应新时代进化，代表作：",
      statusLabels: {
        openSource: "开源",
        closedSource: "闭源",
      },
      viewRepoLabel: "查看仓库",
      items: [
        {
          name: "Components",
          category: "Obsidian Plugin",
          description: "当前项目，一个可视化构建 Obsidian 知识系统的插件。",
          status: "closedSource",
          link: "https://github.com/obsidian-components/obsidian-components-release",
        },
        {
          name: "Composer",
          category: "Obsidian Theme",
          description: "一款简洁的 Obsidian 主题。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-composer",
        },
        {
          name: "Form-flow",
          category: "Obsidian Plugin",
          description: "超强大的 Obsidian 生产力插件，可用于快速收集内容与执行自动化逻辑。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-form-flow",
        },
        {
          name: "Contribution graph",
          category: "Dataview Plugin",
          description: "依赖 Dataview 的超灵活 Obsidian 热力图插件。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-contribution-graph",
        },
        {
          name: "databasir",
          category: "Database Platform",
          description: "一款开源的数据库 Schema 自动化管理平台。",
          status: "openSource",
          link: "https://github.com/vran-dev/databasir",
        },
        {
          name: "prettyZoo",
          category: "Developer Tool",
          description: "开源的 ZooKeeper 可视化 GUI 客户端。",
          status: "openSource",
          link: "https://github.com/vran-dev/PrettyZoo",
        },
      ],
    },
  },
  videoTutorial: {
    pageTitle: "视频教程",
    tutorials: [
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000535727&bvid=BV1AzWPeTEGs&cid=500001653536537&p=1&autoplay=0",
        title: "如何安装 Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000469225&bvid=BV1CzWPeKEcF&cid=500001653538696&p=1&autoplay=0",
        title: "如何激活 Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017313325&bvid=BV1PqWPeBETM&cid=500001653539950&p=1&autoplay=0",
        title: "如何创建组件",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017247320&bvid=BV1CqWPeqE4W&cid=500001653540631&p=1&autoplay=0",
        title: "如何让组件铺满笔记内容区",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112983023813371&bvid=BV1YHWKexEQn&cid=500001653794650&p=1&autoplay=0",
        title: "组合组件和布局",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112988828992346&bvid=BV1S6pSeTEFf&cid=500001654951342&p=1&autoplay=0",
        title: "数据视图组件介绍",
      },
    ],
  },
};

export default zhHansCopy;
