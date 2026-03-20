import clsx from "clsx";
import {
  Braces,
  Clock,
  Command,
  CreditCard,
  File,
  Hash,
  Image,
  LayoutDashboard,
  SquareCheck,
  SquarePercent,
} from "lucide-react";
import { useCopy } from "../../i18n";

interface SystemCanvasProps {
  className?: string;
}

const icons = [
  <LayoutDashboard size={14} key="composition" />,
  <File size={14} key="markdown" />,
  <Braces size={14} key="custom-component" />,
  <CreditCard size={14} key="card" />,
  <Command size={14} key="button" />,
  <Hash size={14} key="stats" />,
  <SquarePercent size={14} key="date-progress" />,
  <Clock size={14} key="elapsed" />,
  <Clock size={14} key="countdown" />,
  <Clock size={14} key="clock" />,
  <SquareCheck size={14} key="checkin" />,
  <Image size={14} key="attachments" />,
] as const;

const spans = ["lg", "lg", "lg", "md", "md", "md", "md", "sm", "sm", "sm", "sm", "md"] as const;

export default function SystemCanvas({ className }: SystemCanvasProps) {
  const copy = useCopy();
  const items = copy.home.systemCanvas.items;

  return (
    <div className={clsx("cp-system-grid", className)}>
      {items.map((component, index) => {
        const span = spans[index] ?? "md";
        return (
          <article
            key={component.name}
            className={clsx("cp-system-card", {
              "cp-system-card--sm": span === "sm",
              "cp-system-card--md": span === "md",
              "cp-system-card--lg": span === "lg",
            })}
          >
            <div className="cp-system-card-title">
              {icons[index]}
              <span>{component.name}</span>
            </div>
            <p className="cp-system-card-desc">{component.description}</p>
          </article>
        );
      })}
    </div>
  );
}
