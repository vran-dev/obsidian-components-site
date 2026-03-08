import {
  BotIcon,
  Layers3
} from "lucide-react";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import { AiSample, SystemCanvas } from "../components/design-system";
import DesignSection from "../components/design-system/DesignSection";
import HeroFeatureBento from "../components/design-system/HeroFeatureBento";
import TimelineModule from "../components/design-system/TimelineModule";
import VerticalTimeline from "../components/design-system/VerticalTimeline";
import Faq from "../components/faq/Faq";
import Price from "../components/price/Price";
import Templates from "../components/templates/Templates";
import UserReviews from "../components/user-reviews/UserReviews";
import UserStories from "../components/user-stories/UserStories";
export default function Main() {
  return (
    <div className="cp-tech-bg">
      <DesignSection surface="transparent" className="pt-8 md:pt-12 pb-8 md:pb-12">
        <VerticalTimeline className="max-w-[1160px]">
          <Banner />

          <TimelineModule
            id="feature-data"
            icon={<Layers3 size={14} />}
            title="把笔记变成可执行系统"
            subtitle="任务、资料、进度常常分散在不同页面。把它们拉到同一视图后，优先级和下一步会更清晰。"
          >
            <HeroFeatureBento />
          </TimelineModule>

          <TimelineModule
            id="feature-components"
            icon={<Layers3 size={14} />}
            title="用 15+ 种组件支撑你的想象力"
            subtitle="不用写代码，拖拽组合即可搭建项目面板、知识主页、复盘系统与个人仪表盘。"
          >
            <SystemCanvas />
          </TimelineModule>

          <TimelineModule
            id="feature-ai"
            icon={<BotIcon size={14} />}
            title="一个真正可以帮你干活儿的 AI 助手"
            subtitle="从整理全库笔记、生成组件到草拟内容，让“知道要做什么”变成“马上开始做”"
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
