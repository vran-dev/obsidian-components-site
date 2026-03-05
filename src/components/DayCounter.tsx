import clsx from "clsx";
import { useEffect, useState } from "react";

interface DayCounterProps {
  startDate: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  numberClassName?: string;
  unitClassName?: string;
}

export default function DayCounter({
  startDate,
  label = "持续更新中",
  className = "",
  labelClassName = "",
  numberClassName = "",
  unitClassName = "",
}: DayCounterProps) {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const start = new Date(startDate);
      const now = new Date();
      const safeStart = Number.isNaN(start.getTime()) ? now : start;
      const diffTime = now.getTime() - safeStart.getTime();
      const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
      setDays(diffDays);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className={clsx("cp-day-counter", className)}>
      <div className="cp-day-counter-head">
        <span className="cp-day-counter-dot" aria-hidden />
        <span className={clsx("cp-day-counter-label", labelClassName)}>{label}</span>
      </div>
      <div className="cp-day-counter-main">
        <span className={clsx("cp-day-counter-number", numberClassName)}>{days}</span>
        <span className={clsx("cp-day-counter-unit", unitClassName)}>天</span>
      </div>
      <div className="cp-day-counter-ecg" aria-hidden>
        <svg viewBox="0 0 220 36" preserveAspectRatio="none">
          <path
            className="cp-day-counter-ecg-track"
            d="M0 18 L32 18 L42 18 L50 7 L58 30 L66 10 L74 18 L108 18 L118 18 L126 8 L134 28 L142 18 L220 18"
          />
          <path
            className="cp-day-counter-ecg-wave"
            d="M0 18 L32 18 L42 18 L50 7 L58 30 L66 10 L74 18 L108 18 L118 18 L126 8 L134 28 L142 18 L220 18"
          />
        </svg>
      </div>
    </div>
  );
}
