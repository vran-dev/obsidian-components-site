import { Sparkles } from "lucide-react";
import { Carousel, ValueStrip } from "../design-system";
import CtaGroup from "../design-system/CtaGroup";
import TimelineModule from "../design-system/TimelineModule";
import TypewriterTitleLine from "../typewriter-title-line/TypewriterTitleLine";
import { HOME_LINKS } from "../../constants/home";
import { useCopy } from "../../i18n";

const heroUseCases = [
  { image: "/img/feature/template-emotion.png" },
  { image: "/img/feature/homepage-3.png" },
  { image: "/img/feature/homepage2.png" },
  { image: "/img/feature/homepage.png" },
];

export default function Banner() {
  const copy = useCopy();
  const { hero } = copy.home;

  return (
    <TimelineModule
      id="banner"
      icon={<Sparkles size={14} />}
      nodeLabel={hero.nodeLabel}
      title={
        <div className="relative inline-block w-fit pt-2">
          <div className="cp-mono-display text-5xl md:text-7xl leading-none">Components</div>
        </div>
      }
      contentOffsetClassName="mt-4"
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <TypewriterTitleLine text={hero.titleLine} className="max-w-3xl" />

        <Carousel items={heroUseCases} />

        <ValueStrip
          items={hero.tags.map((label, index) => ({
            label,
            tone: index === hero.tags.length - 1 ? "brand" : "success",
          }))}
        />

        <CtaGroup
          primary={{ label: hero.primaryCta, href: HOME_LINKS.trial, target: "_blank" }}
          secondary={{ label: hero.secondaryCta, href: HOME_LINKS.buyout, target: "_blank" }}
        />
      </div>
    </TimelineModule>
  );
}
