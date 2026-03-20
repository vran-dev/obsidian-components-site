import { BotIcon, Layers3 } from "lucide-react";
import About from "../about/About";
import Banner from "../banner/Banner";
import { AiSample, SystemCanvas } from "../design-system";
import DesignSection from "../design-system/DesignSection";
import HeroFeatureBento from "../design-system/HeroFeatureBento";
import TimelineModule from "../design-system/TimelineModule";
import VerticalTimeline from "../design-system/VerticalTimeline";
import Faq from "../faq/Faq";
import Price from "../price/Price";
import Templates from "../templates/Templates";
import UserReviews from "../user-reviews/UserReviews";
import UserStories from "../user-stories/UserStories";
import { useCopy } from "../../i18n";

export default function MainPage() {
  const copy = useCopy();
  const { sections } = copy.home;

  return (
    <div className="cp-tech-bg">
      <DesignSection surface="transparent" className="pt-8 md:pt-12 pb-8 md:pb-12">
        <VerticalTimeline className="max-w-[1160px]">
          <Banner />

          <TimelineModule
            id="feature-data"
            icon={<Layers3 size={14} />}
            title={sections.data.title}
            subtitle={sections.data.subtitle}
          >
            <HeroFeatureBento />
          </TimelineModule>

          <TimelineModule
            id="feature-components"
            icon={<Layers3 size={14} />}
            title={sections.components.title}
            subtitle={sections.components.subtitle}
          >
            <SystemCanvas />
          </TimelineModule>

          <TimelineModule
            id="feature-ai"
            icon={<BotIcon size={14} />}
            title={sections.ai.title}
            subtitle={sections.ai.subtitle}
          >
            <AiSample />
          </TimelineModule>

          <Templates />
          <UserStories />
          <UserReviews />
          <Price />
          <Faq />
          <About />
        </VerticalTimeline>
      </DesignSection>
    </div>
  );
}
