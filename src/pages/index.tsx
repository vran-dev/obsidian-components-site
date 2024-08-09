import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Banner from "../components/Home/Banner/Banner";
import ComponentList from "../components/Home/ComponentList/ComponentList";
import Price from "../components/Home/Price/Price";
import UserStories from "../components/Home/UserStories/UserStories";
import Feature from "../components/Home/Feature/Feature";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="一个可以改变 obsidian 玩法的插件"
    >
      <main className="flex flex-row  w-full justify-center">
        <div className="flex flex-col gap-2 w-full justify-center 2xl:w-[1280px] xl:w-full">
          <Banner />
          <Feature />
          <ComponentList />
          <Price />
          <UserStories />
        </div>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
