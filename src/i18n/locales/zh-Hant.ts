import type { SiteCopy } from "../types";

const zhHantCopy: SiteCopy = {
  common: {
    seo: {
      homeDescription: "一個可以改變 Obsidian 玩法的插件，用於設計、組織和管理你的知識系統。",
      videoTutorialDescription: "通過視頻教程快速瞭解 Obsidian Components 的安裝、激活與核心用法。",
    },
    navbar: {
      brand: "Components",
      tocTitle: "章節導航",
      items: {
        document: "文檔",
        price: "價格",
        release: "更新日誌",
      },
      localeSwitchLabel: "語言切換",
      localeNames: {
        "zh-Hans": "簡體中文",
        "zh-Hant": "繁體中文",
        en: "English",
      },
    },
    carousel: {
      prevLabel: "上一條場景",
      nextLabel: "下一條場景",
      dotsLabel: "場景切換",
      fallbackAlt: "輪播圖片",
    },
    dayCounter: {
      defaultLabel: "持續更新中",
      unitSingular: "天",
      unitPlural: "天",
    },
  },
  home: {
    hero: {
      nodeLabel: "Components",
      titleLine: "告別代碼，讓在 Obsidian 中搭建系統成爲一種簡單的樂趣",
      tags: ["可視化搭建", "模板開箱即用", "AI 提效", "買斷制授權"],
      primaryCta: "開始試用",
      secondaryCta: "限時買斷 →",
    },
    sections: {
      data: {
        title: "把筆記變成可執行系統",
        subtitle:
          "任務、資料、進度常常分散在不同頁面。把它們拉到同一視圖後，優先級和下一步會更清晰。",
      },
      components: {
        title: "用 15+ 種組件支撐你的想象力",
        subtitle: "不用寫代碼，拖拽組合即可搭建項目面板、知識主頁、覆盤系統與個人儀表盤。",
      },
      ai: {
        title: "一個真正可以幫你幹活兒的 AI 助手",
        subtitle: "從整理全庫筆記、生成組件到草擬內容，讓“知道要做什麼”變成“馬上開始做”",
      },
    },
    featureBento: {
      dataView: {
        title: "數據視圖",
        description:
          "基於篩選規則從全庫文件中抽取同一批數據，再按表格、畫廊、看板、日曆、甘特切換視圖。",
        result: "價值：同一事實，多種表達；計劃、執行、覆盤都圍繞同一數據",
      },
      charts: {
        title: "圖表",
        description:
          "支持柱狀圖、折線圖、餅圖、日曆熱力圖、漏斗圖、堆疊圖等，適用於週報、覆盤和經營看板。",
        result: "價值：把分散數據轉成可快速溝通的結論",
        pieSegments: ["新特性", "優化改進", "Bug 修復", "AI 能力"],
        barAriaLabel: "每週更新數量柱狀圖",
        lineAriaLabel: "功能活躍趨勢折線圖",
        pieAriaLabel: "發佈類型佔比餅圖",
        heatmapAriaLabel: "圖表日曆熱力圖示例",
        heatmapTooltipLabel: "發佈活躍度",
      },
      databaseViews: {
        tabsAriaLabel: "數據庫視圖切換",
        tabs: {
          table: "表格視圖",
          gallery: "畫廊視圖",
          kanban: "Kanban 視圖",
          calendar: "日曆視圖",
          gantt: "甘特視圖",
        },
        tableHeaders: {
          name: "名稱",
          status: "狀態",
          priority: "優先級",
          owner: "負責人",
          due: "截止",
        },
        galleryLabels: {
          type: "類型",
          owner: "負責人",
        },
        calendarWeekdays: ["一", "二", "三", "四", "五", "六", "日"],
        statuses: {
          planned: "待規劃",
          inProgress: "進行中",
          released: "已發佈",
        },
        useCases: [
          {
            title: "看板",
            description: "看板非常適合用來管理項目，能直觀地看到每個任務的狀態和優先級。",
            image: "/img/feature/project-management-kanban.png",
          },
          {
            title: "甘特圖",
            description: "甘特圖可以幫助你直觀地看到項目時間線和任務進度，便於管理和協調。",
            image: "/img/feature/project-management-gantt.png",
          },
          {
            title: "畫廊",
            description: "畫廊視圖可以把數據以卡片形式展示出來，適合用來做知識庫、案例庫等內容展示。",
            image: "/img/feature/books.png",
          },
        ],
      },
      records: [
        {
          id: "task-1",
          title: "發佈 AI Agent 工作流",
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
          title: "升級數據庫模板庫",
          status: "planned",
          priority: "P1",
          owner: "Moy",
          start: "03-10",
          due: "03-15",
          type: "內容",
          cover: "linear-gradient(135deg, #67d4ff 0%, #3ea2cf 100%)",
        },
        {
          id: "task-3",
          title: "梳理用戶案例中心",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "內容",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-3-1",
          title: "撰寫用戶案例中心文檔",
          status: "inProgress",
          priority: "P1",
          owner: "vran",
          start: "03-12",
          due: "03-21",
          type: "內容",
          cover: "linear-gradient(135deg, #aab8ff 0%, #7284de 100%)",
        },
        {
          id: "task-4",
          title: "上線組件文檔 2.0",
          status: "released",
          priority: "P0",
          owner: "自權",
          start: "03-01",
          due: "03-04",
          type: "功能",
          cover: "linear-gradient(135deg, #7a8fd8 0%, #55629f 100%)",
        },
        {
          id: "task-5",
          title: "優化數據同步穩定性",
          status: "planned",
          priority: "P2",
          owner: "The Fool",
          start: "03-18",
          due: "03-26",
          type: "運維",
          cover: "linear-gradient(135deg, #6c7b92 0%, #465263 100%)",
        },
      ],
    },
    systemCanvas: {
      items: [
        {
          name: "組合",
          description: "提供多種佈局模式在頁面中組合組件，包括標籤頁佈局、分欄佈局、列表佈局等。",
        },
        {
          name: "Markdown",
          description: "可以嵌入任意 markdown 文本內容並進行渲染，也支持與其他代碼塊類插件聯動。",
        },
        {
          name: "自定義組件",
          description: "使用 JSX 創建個性化組件，也可以讓 AI 快速生成並持續迭代。",
        },
        {
          name: "卡片",
          description: "多功能卡片組件，可以用來展示圖片、文字，也可以作爲一個按鈕。",
        },
        {
          name: "按鈕",
          description: "設置點擊執行命令、創建文件、打開鏈接等操作。",
        },
        {
          name: "統計數字",
          description: "根據指定規則統計筆記、任務的數量。",
        },
        {
          name: "日期進度",
          description: "實時顯示距離某個截止日期的進度。",
        },
        {
          name: "正計時",
          description: "顯示當前時間距離過去某個時間已經過去了多久。",
        },
        {
          name: "倒計時",
          description: "顯示當前時間距離未來某個時間還有多久。",
        },
        {
          name: "時鐘",
          description: "一個極簡的實時時鐘組件。",
        },
        {
          name: "打卡",
          description: "通過打卡記錄自己的長期習慣。",
        },
        {
          name: "附件庫",
          description: "管理全庫附件，包括圖片、PDF 等內容。",
        },
      ],
    },
    aiSample: {
      executionLogs: [
        "Read: 組件規範與模板文件",
        "Read: archive/database.components",
        "tool_call: read/write",
        "shell: npm run build",
        "subagent: ui-polish",
        "深度思考 15.8s",
      ],
      featureItems: [
        {
          title: "支持工具調用",
          detail: "讓 AI 成爲真正能幹活的助手，整理知識庫、生成組件、創建文章、總結歷史內容都不在話下。",
        },
        {
          title: "適配 SKILL",
          detail: "支持接入第三方 SKILL，能力可以無限擴展，滿足不同場景需求，比如創建 PPT、創建數據庫、創建 canvas 等。",
        },
        {
          title: "多模型切換",
          detail: "可接入你喜歡的模型，兼容 OpenAI、Gemini、Claude、智譜、DeepSeek 等海量模型。",
        },
        {
          title: "視覺接入",
          detail: "支持接入視覺能力，能夠自動識別圖像內容，擴展 AI 的感知能力。",
        },
      ],
      chat: {
        title: "創建圖潤像素風格時鐘組件",
        tokenLabel: "20.9K tokens",
        timeLabel: "13:09",
        message: "創建一個像素風時鐘組件，可以顯示當前時間。",
        requirements: [
          "第一行標題顯示時分秒",
          "第二行標題顯示年月日",
          "點擊年月日跳轉到當日日記",
          "簡潔設計，避免過多裝飾",
        ],
        attachments: ["database", "自定義組件規範-prompt.md"],
        confirmationTitle: "需求確認",
        confirmations: [
          "兩行標題：時分秒 / 年月日",
          "交互：點擊日期跳轉當日日記",
          "風格：像素風、簡潔、可執行",
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
      title: "你不需要從空白頁開始",
      subtitle: "常見難題都已沉澱成模板：項目推進、主頁搭建、習慣追蹤。套用即用，邊用邊改，快速進入可執行狀態。",
      ctaLabel: "查看模板方案",
      items: [
        {
          title: "VPara",
          image: "/img/feature/template-vpara.png",
          detail: "當任務和資料越積越亂時，VPara 用 PARA 結構和最少插件幫你統一收集、分揀、執行。已在多領域實踐，累計項目超 1000 個，完成率約 90%。",
          link: "https://my.feishu.cn/wiki/Ol44wnbF9iO3iAkbqeJcCqnJn9b",
        },
        {
          title: "Emotion",
          image: "/img/feature/template-emotion.png",
          detail: "情緒管理常見問題是“記了很多，卻看不清規律”。這個模板把打卡、日記、儀表盤串成閉環，幫助你識別觸發因素並調整節奏。",
          link: "https://my.feishu.cn/wiki/Ddh4wfyO8ihTEEkkXFHckWy2nPe",
        },
        {
          title: "Home",
          image: "/img/feature/homepage-3.png",
          detail: "主頁常見痛點是“好看但不好用”。這個模板把組件、圖表、數據視圖整合在一屏，讓你每天打開就能看清重點並立即行動。",
          link: "https://my.feishu.cn/record/DtGTr0R5keDjjYc0FVgcUGHznWd",
        },
        {
          title: "習慣系統",
          image: "/img/feature/habit.png",
          detail: "習慣難堅持，多半因爲反饋太弱。用打卡組件和數據視圖搭建可視化追蹤系統，及時看到趨勢變化，持續強化執行。",
          link: "https://my.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
        },
      ],
    },
    userStories: {
      nodeLabel: "用戶案例",
      title: "用戶案例",
      subtitle: "他們也經歷過“筆記很多、行動很少”。看看真實用戶如何用 Components 搭出可執行系統。",
      loadMoreLabel: "加載更多案例",
      items: [
        {
          author: "kairitsuhou",
          description: "在東京靠 Obsidian 吊命的遊戲美術人",
          img: "/img/user-stories/kairitsuhou.jpg",
        },
        {
          author: "自權的 SPACE",
          description: "公衆號“自權的 SPACE”作者，效率工具玩家",
          img: "/img/user-stories/ziquandespace.png",
          readMore: {
            url: "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ",
            text: "查看教程 →",
          },
        },
        {
          author: "二寶學長",
          description: "用 Obsidian 寫了 14 萬字論文的學術寫作教練",
          img: "/img/user-stories/erbao.jpg",
        },
        {
          author: "TracingOrigins",
          description: "江湖人稱驚佬，模板庫 Rainbow Components 作者。",
          img: "/img/user-stories/tracingorigins.png",
          readMore: {
            url: "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b",
            text: "下載模板 →",
          },
        },
        {
          author: "Moy",
          description: "Obsidian？這可比遊戲好玩兒多了！",
          img: "/img/user-stories/moy.jpeg",
        },
        {
          author: "裏安",
          description: "EVA 主題示例庫",
          img: "/img/user-stories/lian-eva.jpg",
          readMore: {
            url: "https://www.bilibili.com/video/BV1Ax4xeKEVf/",
            text: "獲取模板 →",
          },
        },
        {
          author: "毛無語",
          img: "/img/user-stories/maowuyu.jpg",
        },
        {
          author: "🐟",
          description: "貓貓上牆🐱",
          img: "/img/user-stories/fish.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜歡折騰",
          img: "/img/user-stories/橘子-2-light.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜歡折騰",
          img: "/img/user-stories/橘子-2-dark.jpg",
        },
        {
          author: "Moy",
          description: "Obsidian？這可比遊戲好玩兒多了！",
          img: "/img/user-stories/moy2.jpg",
        },
        {
          author: "橘子",
          description: "Obsidian 重度使用者，喜歡折騰",
          img: "/img/user-stories/橘子.jpg",
        },
        {
          author: "🐟",
          description: "貓貓上牆🐱",
          img: "/img/user-stories/fish2.jpg",
        },
        {
          author: "vran",
          description: "不小心混進來的～",
          img: "/img/user-stories/vran.png",
          readMore: {
            url: "https://www.bilibili.com/video/BV1mm421G7xX/?share_source=copy_web&vd_source=8ccbcd34f75fd457148a9654b5ffab99",
            text: "觀看視頻 →",
          },
        },
        {
          author: "vran",
          description: "不小心混進來的～",
          img: "/img/user-stories/vran2.jpg",
        },
        {
          author: "The Fool",
          description: "活躍在 Obsidian 社區的熱心極客",
          img: "/img/user-stories/thefool.jpg",
        },
        {
          author: "霖",
          img: "/img/user-stories/霖.jpg",
        },
        {
          author: "季風",
          img: "/img/user-stories/季風.jpg",
        },
      ],
    },
    userReviews: {
      nodeLabel: "真實聲音",
      title: "用戶口碑",
      subtitle: "來自創作者、開發者與重度用戶的長期反饋",
      linkTitlePrefix: "跳轉到",
      items: [
        {
          name: "Moy",
          url: "https://forum-zh.obsidian.md/u/moy/summary",
          description: "Ob 官方中文翻譯貢獻者 | Easy-Copy、Yearly-Galance 插件作者 | 內容創作者",
          tone: "success",
          content: `付費閉源插件本身在 OB 社羣其實是個劣勢，所以在有這麼多免費插件的情況下，憑什麼這個插件能賣錢？還這麼多人買？

我自己是覺得 CPS 物有所值，因爲它確實從底層拓展了 OB 的能力邊界，讓它有了和 Notion 數據庫掰掰手腕的潛力。它比官方 Bases 早了兩年開始做 OB 內數據庫，體驗相當於 Bases Plus，是我用過的同類插件中最好的。

何況還附帶圖表/統計等一大堆組件，以及網格佈局，對於主頁定製的需求也是很好的解決方案。`,
        },
        {
          name: "RavenHogWarts",
          url: "https://github.com/RavenHogWarts",
          description: "Raven-Pensieve 組織創建者 | Ace-Code-Editor、Custom-Icons、Next-TOC 等插件作者 | 社區極客",
          tone: "success",
          content: `作爲從公測跟過來的“開朝元老”，Components 的進化是瘋狂的，內測特戰隊中體驗着“日日新”的迭代。

對於顏值黨和代碼小白，不用死磕晦澀難懂的 Dataview 代碼，只需簡單的拖拽，就能零門檻搭建出“高顏值可執行系統”。

對於極客和“折騰狂魔”，自定義組件給了無儘可能，我們可以直接通過 AI 一鍵生成自己想要的組件，也能自己手動寫代碼實現更復雜和高級的功能。`,
        },
        {
          name: "二寶學長",
          url: "https://mp.weixin.qq.com/s/R3i0jgXieuBEcHBjGmVGtA",
          description: "馬克思主義理論學術論文寫作教練 | 百萬遊戲用戶社區首席意見領袖與管理員 | Obsidian 中文社區特邀圓桌分享嘉賓",
          tone: "success",
          content: `有幸全程見證，Component 插件從無到有的破土孵化，到如今百餘款組件百花齊放的蓬勃生態。

多年磨一劍。Component 的設計哲學始終如一：開放而不失邊界，自由而不陷混亂。無論你是深度極客，還是輕量用戶，皆能在此構築屬於自己的“組件王國”。

對於我這種 0 代碼基礎的文科生，也在 component 自定義組件功能支持下，順利開發出了若干適用的功能小組件，極大提升了我的知識管理效率。`,
        },
        {
          name: "joeytoday",
          url: "https://joeytoday.com/",
          description: "知識管理愛好者、內容創作者，愛折騰一切好玩的事",
          tone: "success",
          content: `我對 Obsidian 的最深印象就是數據庫實在太醜了，讓我遲遲不想使用，但是 Components 的數據庫功能，讓 Obsidian 的數據庫能夠類 Notion 地展示，對於我來說，美觀是第一折騰動力。

當我開始重度使用 Components 之後，發現數據庫展示只是最基礎的功能，我還可以定製自己的組件，於是我開始構建自己的心情日曆和日記覆盤組件，不僅是美觀，也真正讓我的筆記活起來了。

如果你也喜歡折騰，這個組件簡直是選擇 Obsidian 之後的必購插件。`,
        },
        {
          name: "閆羽鱗",
          description: "喵字館創始人｜多個億級品牌的主案設計師",
          tone: "success",
          content: `我用一款軟件之前，習慣先了解一下作者的開發背景——看看有沒有黑歷史，會不會只是一時興起挖個大坑，最後丟下用戶不管。

V 佬是我在程序圈裏爲數不多真正認識的朋友之一。

他的產品穩定更新了好多年，作爲 OB 生態下的一款付費插件，早就值回票價了。有多靠譜，不必我多說。我們也是因爲這款插件慢慢變成朋友。你就看我的認可程度吧——爲了支持 V 佬長久地做下去，我拉上另一位大佬二寶學長，一起出錢出力，聯名定製了一款字體《喵寶組·閃光體》。這是我唯一一次用自己的專業能力去“追星”。

V 佬是我的朋友，也是我學習的榜樣。

我始終相信：人靠譜，產品才靠譜。`,
        },
      ],
    },
    price: {
      title: "試用和買斷",
      subtitle: "先試用驗證，再按需買斷，把決策風險降到最低。",
      statusLabel: "Components 持續打磨中",
      agreementLabel: "查看購買協議",
      releaseLabel: "最近更新日誌",
      trial: {
        title: "7 天全功能試用",
        price: "0 元 / 人",
        description: "先驗證是否解決你的核心問題，再決定是否買斷。",
        cta: "免費開始",
      },
      buyout: {
        title: "一次買斷，長期可用",
        price: "人民幣 128 元",
        result: "解決方案持續迭代，不再重複投入",
        features: [
          "解鎖全部組件與數據庫能力",
          "可接入 AI 模型，支持全庫協作",
          "會員羣答疑與使用支持",
          "模板庫持續擴展，開箱即用",
          "組件能力持續更新",
        ],
        cta: "限時買斷",
      },
    },
    faq: {
      nodeLabel: "FAQ",
      title: "常見問題",
      documentLabel: "使用文檔",
      agreementLabel: "購買協議",
      items: [
        {
          question: "買斷後是否包含後續更新？",
          answer: "包含。買斷後可持續獲取新組件與功能更新。",
        },
        {
          question: "不會寫代碼可以使用 Components 嗎？",
          answer: "可以。核心能力是可視化搭建，代碼不是使用前提。",
        },
        {
          question: "AI 功能如何接入？",
          answer: "你可以配置自己的 AI 服務商與模型，保持可控、可替換。",
        },
        {
          question: "AI Agent 可以做什麼？",
          answer: "可在全庫範圍協助管理知識、創建組件、生成內容。",
        },
        {
          question: "購買後在哪裏查看文檔和協議？",
          answerWithLinks: {
            prefix: "可查看",
            middle: "與",
            suffix: "。",
          },
        },
        {
          question: "遇到問題如何獲得支持？",
          answer: "可通過文檔、更新日誌和購買後支持渠道獲得持續幫助。",
        },
      ],
    },
    about: {
      nodeLabel: "about-me",
      title: "關於我",
      subtitle: "上世紀僥倖生存下來的古法編程愛好者，開源過幾個產品（累計 star 4k+），正在適應新時代進化，代表作：",
      statusLabels: {
        openSource: "開源",
        closedSource: "閉源",
      },
      viewRepoLabel: "查看倉庫",
      items: [
        {
          name: "Components",
          category: "Obsidian Plugin",
          description: "當前項目，一個可視化構建 Obsidian 知識系統的插件。",
          status: "closedSource",
          link: "https://github.com/obsidian-components/obsidian-components-release",
        },
        {
          name: "Composer",
          category: "Obsidian Theme",
          description: "一款簡潔的 Obsidian 主題。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-composer",
        },
        {
          name: "Form-flow",
          category: "Obsidian Plugin",
          description: "超強大的 Obsidian 生產力插件，可用於快速收集內容與執行自動化邏輯。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-form-flow",
        },
        {
          name: "Contribution graph",
          category: "Dataview Plugin",
          description: "依賴 Dataview 的超靈活 Obsidian 熱力圖插件。",
          status: "openSource",
          link: "https://github.com/vran-dev/obsidian-contribution-graph",
        },
        {
          name: "databasir",
          category: "Database Platform",
          description: "一款開源的數據庫 Schema 自動化管理平臺。",
          status: "openSource",
          link: "https://github.com/vran-dev/databasir",
        },
        {
          name: "prettyZoo",
          category: "Developer Tool",
          description: "開源的 ZooKeeper 可視化 GUI 客戶端。",
          status: "openSource",
          link: "https://github.com/vran-dev/PrettyZoo",
        },
      ],
    },
  },
  videoTutorial: {
    pageTitle: "視頻教程",
    tutorials: [
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000535727&bvid=BV1AzWPeTEGs&cid=500001653536537&p=1&autoplay=0",
        title: "如何安裝 Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000469225&bvid=BV1CzWPeKEcF&cid=500001653538696&p=1&autoplay=0",
        title: "如何激活 Components",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017313325&bvid=BV1PqWPeBETM&cid=500001653539950&p=1&autoplay=0",
        title: "如何創建組件",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017247320&bvid=BV1CqWPeqE4W&cid=500001653540631&p=1&autoplay=0",
        title: "如何讓組件鋪滿筆記內容區",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112983023813371&bvid=BV1YHWKexEQn&cid=500001653794650&p=1&autoplay=0",
        title: "組合組件和佈局",
      },
      {
        url: "//player.bilibili.com/player.html?isOutside=true&aid=112988828992346&bvid=BV1S6pSeTEFf&cid=500001654951342&p=1&autoplay=0",
        title: "數據視圖組件介紹",
      },
    ],
  },
};

export default zhHantCopy;
