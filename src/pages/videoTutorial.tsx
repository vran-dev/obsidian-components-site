import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../css/custom.css";

export default function VideoTutorial(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const tutorials = [
    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000535727&bvid=BV1AzWPeTEGs&cid=500001653536537&p=1&autoplay=0",
      title: "如何安装 components",
      description: "",
    },
    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112982000469225&bvid=BV1CzWPeKEcF&cid=500001653538696&p=1&autoplay=0",
      title: "如何激活 components",
      description: "",
    },
    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017313325&bvid=BV1PqWPeBETM&cid=500001653539950&p=1&autoplay=0",
      title: "如何创建组件",
      description: "",
    },
    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112982017247320&bvid=BV1CqWPeqE4W&cid=500001653540631&p=1&autoplay=0",
      title: "如何让组件铺满笔记内容区",
      description: "",
    },
    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112983023813371&bvid=BV1YHWKexEQn&cid=500001653794650&p=1&autoplay=0",
      title: "组合组件和布局",
      description: "",
    },

    {
      url: "//player.bilibili.com/player.html?isOutside=true&aid=112988828992346&bvid=BV1S6pSeTEFf&cid=500001654951342&p=1&autoplay=0",
      title: "数据视图组件介绍",
      description: "",
    },
  ];
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="一个可以改变 obsidian 玩法的插件"
    >
      <main className="flex flex-row  w-full justify-center">
        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(400px,_1fr))] gap-2 w-full justify-center 2xl:w-[1280px] xl:w-full">
          {tutorials.map((item, index) => {
            return (
              <div className="flex-col items-center justify-center p-1 gap-2">
                <iframe
                  src={item.url}
                  scrolling="no"
                  border="0"
                  frameborder="no"
                  framespacing="0"
                  width={"100%"}
                  allowfullscreen="true"
                  className="aspect-video  rounded-md border max-w-sm"
                ></iframe>
                <div className="text-slate-950 text-base hover:text-blue-600 cursor-pointer mt-2 font-bold">
                  {index}.{item.title}
                </div>
              </div>
            );
          })}
        </div>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
