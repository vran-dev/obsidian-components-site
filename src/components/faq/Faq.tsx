import { CircleHelp } from "lucide-react";
import FaqList from "./FaqList";
import TimelineModule from "../design-system/TimelineModule";
import type { FaqItem } from "../design-system/types";
import { HOME_LINKS } from "../../constants/home";
import "./Faq.css";
import { useCopy } from "../../i18n";

export default function Faq() {
  const copy = useCopy();
  const { faq } = copy.home;

  const faqItems: FaqItem[] = faq.items.map((item) => ({
    question: item.question,
    answer:
      item.answer ?? (
        <span>
          {item.answerWithLinks?.prefix}{" "}
          <a href={HOME_LINKS.document} target="_blank" rel="noreferrer" className="cp-faq-link">
            {faq.documentLabel}
          </a>{" "}
          {item.answerWithLinks?.middle}{" "}
          <a href={HOME_LINKS.agreement} target="_blank" rel="noreferrer" className="cp-faq-link">
            {faq.agreementLabel}
          </a>
          {item.answerWithLinks?.suffix}
        </span>
      ),
  }));

  return (
    <TimelineModule id="faq" icon={<CircleHelp size={14} />} nodeLabel={faq.nodeLabel} title={faq.title}>
      <FaqList items={faqItems} className="cp-faq-list" />
    </TimelineModule>
  );
}
