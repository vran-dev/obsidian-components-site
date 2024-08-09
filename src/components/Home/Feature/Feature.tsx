import { Book, Home, Image, PanelsTopLeft, Target } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function () {
  const data = [
    {
      title: "个性主页",
      icon: <Home className={`text-pink-500`} />,
      description: "打造独一无二的 Obsidian 主页",
      image: "./img/feature/home-page.png",
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/UrTqwG98Lij4aLkczVbcOxX7njg",
        text: "下载模板",
      },
    },
    {
      title: "项目管理",
      icon: <PanelsTopLeft className={`text-orange-500`} />,
      description: "项目规划、管理、复盘，数据一览无余",
      image: "./img/feature/project-management.png",
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/QdHVwJqXmix3phkeVPucPvFGnNd",
        text: "下载模板",
      },
    },
    {
      title: "习惯养成",
      icon: <Target className={`text-blue-500`} />,
      description: "科学培养习惯，践行长期价值主义",
      image: "./img/feature/habit-tracker.png",
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
        text: "下载模板",
      },
    },
    {
      title: "书库影城",
      icon: <Book className={`text-amber-500`} />,
      description: "记录你的阅读和观影，与时间成为朋友",
      image: "./img/feature/books.png",
      link: {
        url: "",
        text: "",
      },
    },
    {
      title: "相册瀑布流",
      icon: <Image className={`text-amber-500`} />,
      description: "以另一种方式浏览 Obsidian 里的图片",
      image: "./img/feature/images.png",
      link: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/L1Jhw7HeSiJXtYkItc5cfb0Fnif",
        text: "下载组件",
      },
    },
  ];

  return (
    <div
      id="feature"
      className="flex flex-col gap-4 px-8 bg-slate-50 dark:bg-transparent py-2 w-full"
    >
      <div className="w-full text-center text-4xl p-4 tracking-wider text-stone-600 dark:text-stone-200 font-bold">
        来了解一下。
      </div>
      <div className="w-full text-center text-xl tracking-wider text-gray-400 font-bold relative">
        想象不再受限 🎉
      </div>

      <div className="flex flex-col w-full gap-4 p-4 md:p-0 md:items-center lg:flex-row lg:items-stretch lg:justify-center">
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className={`cursor-pointer w-full flex flex-col items-center gap-4 rounded-md bg-white dark:bg-transparent dark:text-stone-100  dark:border dark:border-stone-400 dark:hover:border-stone-200 shadow text-stone-800 font-bold p-4 hover:bg-neutral-50`}
            >
              {item.icon}
              <span className="text-base md:text-2xl">{item.title}</span>
              <div className="w-full text-center text-stone-500 dark:text-stone-300 tracking-wider text-base md:text-xl">
                {item.description}
              </div>
              <div>
                <a
                  className="rounded-md w-full py-1 px-4 underline font-bold hover:text-stone-900  text-stone-500 dark:text-stone-300 dark:hover:text-stone-200"
                  href={item.link.url ? item.link.url : "#"}
                >
                  {item.link.text}
                </a>
              </div>

              <div className="border-gray-200 w-full rounded-md p-1">
                <Zoom>
                  <img src={item.image} className="w-full" />
                </Zoom>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
