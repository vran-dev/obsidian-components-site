import { Sparkles } from "lucide-react";
import { Carousel, ValueStrip } from "../design-system";
import CtaGroup from "../design-system/CtaGroup";
import TimelineModule from "../design-system/TimelineModule";
import TypewriterTitleLine from "../typewriter-title-line/TypewriterTitleLine";
import { HOME_LINKS } from "../../constants/home";

const heroUseCases = [
  {
    image: "./img/feature/template-emotion.png",
  },
  {
    image: "./img/feature/homepage-3.png",
  },
  {
    image: "./img/feature/homepage2.png",
  },
  {
    image: "./img/feature/homepage.png",
  },
];

export default function Banner() {
  return (
    <TimelineModule
      id="banner"
      icon={<Sparkles size={14} />}
      nodeLabel="Components"
      title={
        <div className="relative inline-block w-fit pt-2">
          <div className="cp-mono-display text-5xl md:text-7xl leading-none">Components</div>
        </div>
      }
      contentOffsetClassName="mt-4"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <TypewriterTitleLine
          text="告别代码，让在 Obsidian 中搭建系统成为一种简单的乐趣"
          className="max-w-3xl"
        />

        <Carousel items={heroUseCases} />

        <ValueStrip
          items={[
            {
              label: "可视化搭建",
              tone: "success",
            },
            {
              label: "模板开箱即用",
              tone: "success",
            },
            {
              label: "AI 提效",
              tone: "success",
            },
            {
              label: "买断制授权",
              tone: "brand",
            },
          ]}
        />

        <CtaGroup
          primary={{ label: "开始试用", href: HOME_LINKS.trial, target: "_blank" }}
          secondary={{ label: "限时买断 →", href: HOME_LINKS.buyout, target: "_blank" }}
        />
      </div>
    </TimelineModule>
  );
}
