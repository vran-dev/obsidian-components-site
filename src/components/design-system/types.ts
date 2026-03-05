import type { ReactNode } from "react";

export interface CtaAction {
  label: string;
  href: string;
  target?: "_self" | "_blank";
}

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

export interface ValueTagItem {
  label: string;
  tone?: "default" | "brand" | "ai" | "success";
}
