import { useEffect, useState } from "react";

interface TypewriterTitleLineProps {
  text: string;
  className?: string;
}

export default function TypewriterTitleLine(props: TypewriterTitleLineProps) {
  const { text, className } = props;
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let cursor = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        cursor += 1;
        setDisplayText(text.slice(0, cursor));
        if (cursor >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, 36);
    }, 180);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [text]);

  const done = displayText.length >= text.length;

  return (
    <p
      className={`cp-typewriter-line text-base md:text-lg text-[var(--cp-text-secondary)] leading-relaxed ${className ?? ""}`}
      aria-label={text}
    >
      <span>{displayText}</span>
      <span className={`cp-typewriter-caret ${done ? "cp-typewriter-caret--idle" : ""}`} aria-hidden />
    </p>
  );
}
