import {
  Book,
  GraduationCapIcon,
  Home,
  Image,
  PanelsTopLeft,
  Target,
} from "lucide-react";
import ImageTabs from "./ImageTabs";

export default function () {
  const data: Array<{
    title: string;
    icon: React.ReactNode;
    description: string;
    images: string[];
    link: {
      url: string;
      text: string;
    };
    className?: string;
    tabLabels?: string[];
  }> = [
    {
      title: "项目管理",
      icon: <PanelsTopLeft />,
      description:
        "通过看板和甘特图，可以直观的规划和管理时间资源，确保项目进度有条不紊，有效提升执行力。",
      images: [
        "./img/feature/project-management-gantt.png",
        "./img/feature/project-management-kanban.png",
        "./img/feature/project-management-dashboard.png",
      ],
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/QdHVwJqXmix3phkeVPucPvFGnNd",
        text: "下载模板",
      },
      tabLabels: ["甘特图", "看板", "仪表盘"],
      className: "grow",
    },
    {
      title: "知识库主页",
      icon: <Home />,
      description: "无需代码，通过简单的拖拽即可打造出专属于你的知识库主页",
      images: ["./img/feature/home-page.png", "./img/feature/home-page2.png"],
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/UrTqwG98Lij4aLkczVbcOxX7njg",
        text: "下载模板",
      },
      tabLabels: ["知识库主页", "输出主页"],
      className: "md:grow flex-1 min-w-0",
    },
    // {
    //   title: "学术研究",
    //   icon: <GraduationCapIcon />,
    //   description:
    //     "除了双链，你还可以用数据库和图表来辅助你的学术研究，摆脱碎片化的管理。",
    //   images: ["./img/feature/books.png"],
    //   link: {
    //     url: "",
    //     text: "",
    //   },
    //   className: "flex-1 min-w-0",
    // },
    {
      title: "书库影城",
      icon: <Book />,
      description: "用更直观的方式来管理你的读书和观影清单",
      images: ["./img/feature/books.png", "./img/feature/books2.png"],
      link: {
        url: "",
        text: "",
      },
      className: "flex-1 min-w-0",
      tabLabels: ["书架", "摘录"],
    },
    {
      title: "习惯养成",
      icon: <Target />,
      description: "更简单的",
      images: ["./img/feature/habit.png"],
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
        text: "下载模板",
      },
      className: "basis-full min-w-0",
    },

    // {
    //   title: "相册瀑布流",
    //   icon: <Image />,
    //   description: "以另一种方式浏览 Obsidian 里的图片",
    //   images: ["./img/feature/images.png"],
    //   link: {
    //     url: "https://wxycbt0cjk.feishu.cn/wiki/L1Jhw7HeSiJXtYkItc5cfb0Fnif",
    //     text: "下载组件",
    //   },
    //   className: "flex-1 min-w-0",
    // },
  ];

  return (
    <div id="feature" className="flex flex-col gap-6 px-8  py-4 w-full">
      <div className="w-full  text-5xl text-white  tracking-wider font-bold">
        能做什么？
      </div>
      <div className="w-full  text-xl tracking-wider text-gray-200 font-bold relative">
        一个插件管理你的项目、知识库、读书清单、观影清单，还能打造习惯养成系统，
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap w-full gap-2 p-4 md:p-0 md:items-stretch lg:justify-center">
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className={`cursor-pointer flex flex-col  gap-4 rounded-md bg-neutral-800  p-4  ${
                item.className || ""
              }`}
            >
              <div className="flex flex-col gap-4">
                {item.icon}
                <span className="text-base md:text-2xl text-gray-100 flex flex-col font-bold">
                  {item.title}
                </span>
                <div className="w-full tracking-wider text-base text-gray-300 md:text-xl">
                  {item.description}
                </div>
                {/* <div>
                  <a
                    className="rounded-md w-full py-1 underline font-bold"
                    href={item.link.url ? item.link.url : "#"}
                  >
                    {item.link.text}
                  </a>
                </div> */}
              </div>

              <div className="border-gray-200 w-full rounded-md">
                <ImageTabs images={item.images} tabLabels={item.tabLabels} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
