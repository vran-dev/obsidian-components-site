import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Main from "../components/Home/Main";
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
        <div className="w-full">
          <Main />
        </div>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
