import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "../css/custom.css";
import { useCopy } from "../i18n";

export default function VideoTutorial(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const copy = useCopy();
  const { pageTitle, tutorials } = copy.videoTutorial;

  return (
    <Layout title={`${siteConfig.title} · ${pageTitle}`} description={copy.common.seo.videoTutorialDescription}>
      <main className="flex flex-row w-full justify-center">
        <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(400px,_1fr))] gap-2 w-full justify-center 2xl:w-[1280px] xl:w-full">
          {tutorials.map((item, index) => {
            return (
              <div key={item.url} className="flex-col items-center justify-center p-1 gap-2">
                <iframe
                  src={item.url}
                  scrolling="no"
                  frameBorder="0"
                  width="100%"
                  allowFullScreen
                  className="aspect-video rounded-md border max-w-sm"
                  title={`${pageTitle}-${index + 1}`}
                />
                <div className="text-slate-950 text-base hover:text-blue-600 cursor-pointer mt-2 font-bold">
                  {index + 1}. {item.title}
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
