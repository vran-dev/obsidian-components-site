// @ts-ignore
import Masonry from "react-responsive-masonry";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ExternalLink } from "lucide-react";
import useMasonryResponsiveCount from "../../hooks/useMasonryResponsiveCount";
import { useEffect, useRef, useState } from "react";
import "./UserStories.css";

interface StoryItem {
  author: string;
  img: string;
  readMore?: {
    url: string;
    text: string;
  };
  description?: string;
}

export default function () {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { columnCount } = useMasonryResponsiveCount(containerRef);

  const shares = [
    {
      author: "自权的 SPACE",
      description: "公众号'自权的 SPACE'作者，效率工具玩家",
      img: "./img/user-stories/ziquandespace.png",
      readMore: {
        url: "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ",
        text: "查看教程 →",
      },
    },
    {
      author: "二宝学长",
      description: "用 obsidian 写了 14 万字论文的学术写作教练",
      img: "./img/user-stories/erbao.jpg",
    },
    {
      author: "TracingOrigins",
      description: "江湖人称惊佬，模板库 Rainbow Components 作者。",
      img: "./img/user-stories/tracingorigins.png",
      readMore: {
        url: "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b",
        text: "下载模板 →",
      },
    },
    {
      author: "Moy",
      img: "./img/user-stories/moy.jpeg",
      description: "Obisidian？这可比游戏好玩儿多了！",
    },
    {
      author: "Moy",
      img: "./img/user-stories/moy2.jpg",
      description: "Obisidian？这可比游戏好玩儿多了！",
    },

    {
      author: "vran",
      img: "./img/user-stories/vran.png",
      description: "不小心混进来的～",
      readMore: {
        url: "https://www.bilibili.com/video/BV1mm421G7xX/?share_source=copy_web&vd_source=8ccbcd34f75fd457148a9654b5ffab99",
        text: "观看视频 →",
      },
    },
    {
      author: "vran",
      img: "./img/user-stories/vran2.jpg",
      description: "不小心混进来的～",
    },
    {
      author: "毛无语",
      img: "./img/user-stories/maowuyu.jpg",
    },
    {
      author: "🐟",
      description: "猫猫上墙🐱",
      img: "./img/user-stories/fish.jpg",
    },
    {
      author: "🐟",
      description: "猫猫上墙🐱",
      img: "./img/user-stories/fish2.jpg",
    },

    {
      author: "橘子",
      description: "",
      img: "./img/user-stories/橘子-2-light.jpg",
    },
    {
      author: "橘子",
      description: "Obsidian重度使用者，喜欢折腾",
      img: "./img/user-stories/橘子-2-dark.jpg",
    },
    {
      author: "橘子",
      description: "Obsidian重度使用者，喜欢折腾",
      img: "./img/user-stories/橘子.jpg",
    },
    {
      author: "里安",
      description: "EVA 主题示例库",
      img: "./img/user-stories/lian-eva.jpg",
      readMore: {
        url: "https://www.bilibili.com/video/BV1Ax4xeKEVf/",
        text: "获取模板 →",
      },
    },
    {
      author: "kairitsuhou",
      description: "在东京靠Obsidian吊命的游戏美术人",
      img: "./img/user-stories/kairitsuhou.jpg",
    },
    {
      author: "The Fool",
      description: "活跃在 obsidian 社区的热心极客",
      img: "./img/user-stories/thefool.jpg",
    },
    {
      author: "霖",
      img: "./img/user-stories/霖.jpg",
    },
    {
      author: "季风",
      img: "./img/user-stories/季风.jpg",
    },
  ];
  return (
    <div
      id="stories"
      className="flex flex-col gap-4 px-8  py-4 mt-4"
      ref={containerRef}
    >
      <div className="w-full text-5xl tracking-wider  font-bold">
        看看 TA 们是
        <span className=" bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text">
          如何使用的
        </span>
      </div>
      <div className="w-full text-xl tracking-wider text-gray-400 font-bold relative">
        美好的事物总是值得分享 🌈
      </div>
      <Masonry columnsCount={columnCount} gutter={16}>
        {shares.map((item, index) => {
          return <StoryItemEl item={item} key={index} />;
        })}
      </Masonry>
    </div>
  );
}

function StoryItemEl(props: { item: StoryItem }) {
  const item = props.item;
  const [canScroll, setCanScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (containerRef.current && imageRef.current) {
      const res =
        containerRef.current.clientHeight < containerRef.current.scrollHeight;
      setCanScroll(res);
    }
  }, [containerRef, imageRef]);
  return (
    <div
      key={item.author}
      className={`flex flex-col items-center gap-2 w-full rounded-md font-bold `}
    >
      <div
        className="max-h-96 overflow-y-auto scroll-smooth scrollable-image"
        ref={containerRef}
      >
        <Zoom>
          <img
            src={item.img}
            alt={item.author}
            ref={imageRef}
            className="rounded-md border border-transparent hover:shadow-lg hover:border-slate-50 "
          />
        </Zoom>
      </div>
      {canScroll && (
        <div className=" w-full align-left text-xs">滚动或下拉查看长图</div>
      )}
      <div className="w-full mt-2 tracking-wider text-base">@{item.author}</div>
      {item.description && (
        <div className="w-full text-slate-200 tracking-wider text-sm">
          {item.description}
        </div>
      )}
      {item.readMore && (
        <a
          className="rounded-md flex flex-row items-center gap-2 w-full underline text-stone-200 text-xs"
          href={item.readMore.url}
          target="_blank"
        >
          <ExternalLink size={14} /> {item.readMore.text}
        </a>
      )}
    </div>
  );
}
