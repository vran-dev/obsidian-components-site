import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import MainPage from "../components/home/MainPage";
import { useCopy } from "../i18n";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const copy = useCopy();

  return (
    <Layout title={`${siteConfig.title}`} description={copy.common.seo.homeDescription}>
      <main className="flex flex-row w-full justify-center">
        <div className="w-full">
          <MainPage />
        </div>
        <Analytics />
        <SpeedInsights />
      </main>
    </Layout>
  );
}
