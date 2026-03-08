import { ArrowUpRight, Users2 } from "lucide-react";
import { useState } from "react";
import TimelineModule from "../design-system/TimelineModule";
import "./UserStories.css";

interface UserStory {
  author: string;
  img: string;
  description?: string;
  readMore?: {
    url: string;
    text: string;
  };
}

const userStories: UserStory[] = [
  {
    author: "kairitsuhou",
    description: "在东京靠Obsidian吊命的游戏美术人",
    img: "./img/user-stories/kairitsuhou.jpg",
  },
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
    description: "Obsidian？这可比游戏好玩儿多了！",
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
    author: "毛无语",
    img: "./img/user-stories/maowuyu.jpg",
  },
  {
    author: "🐟",
    description: "猫猫上墙🐱",
    img: "./img/user-stories/fish.jpg",
  },

  {
    author: "橘子",
    description: "Obsidian重度使用者，喜欢折腾",
    img: "./img/user-stories/橘子-2-light.jpg",
  },
  {
    author: "橘子",
    description: "Obsidian重度使用者，喜欢折腾",
    img: "./img/user-stories/橘子-2-dark.jpg",
  },


  {
    author: "Moy",
    img: "./img/user-stories/moy2.jpg",
    description: "Obsidian？这可比游戏好玩儿多了！",
  },
  {
    author: "橘子",
    description: "Obsidian重度使用者，喜欢折腾",
    img: "./img/user-stories/橘子.jpg",
  },
  {
    author: "🐟",
    description: "猫猫上墙🐱",
    img: "./img/user-stories/fish2.jpg",
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

const INITIAL_VISIBLE_STORIES = 8;

export default function UserStories() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_STORIES);
  const visibleStories = userStories.slice(0, visibleCount);
  const hasMoreStories = visibleCount < userStories.length;

  return (
    <TimelineModule
      id="cases"
      icon={<Users2 size={14} />}
      nodeLabel="用户案例"
      title="用户案例"
      subtitle="他们也经历过“笔记很多、行动很少”。看看真实用户如何用 Components 搭出可执行系统。"
    >
      <div className="cp-user-story-scroll">
        <div className="cp-user-story-track">
          {visibleStories.map((item) => (
            <article key={item.author + item.img} className="cp-user-story-card">
              <div className="cp-user-story-image-wrap">
                <img src={item.img} alt={item.author} className="cp-user-story-image" />
              </div>
              <p className="cp-user-story-author">@{item.author}</p>
              {item.description ? <p className="cp-user-story-description">{item.description}</p> : null}
              {item.readMore ? (
                <a href={item.readMore.url} target="_blank" rel="noreferrer" className="cp-user-story-link">
                  {item.readMore.text} <ArrowUpRight size={14} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
      {hasMoreStories ? (
        <div className="cp-user-story-actions">
          <button
            type="button"
            className="cp-user-story-load-more"
            onClick={() => setVisibleCount((count) => Math.min(count + INITIAL_VISIBLE_STORIES, userStories.length))}
          >
            加载更多案例
          </button>
        </div>
      ) : null}
    </TimelineModule>
  );
}
