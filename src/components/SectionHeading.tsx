import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "light" = ink text on paper (default) · "dark" = paper text on charcoal */
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-ink" : "text-char-text";
  const descColor = tone === "light" ? "text-muted" : "text-char-muted";
  const eyebrowColor = tone === "light" ? "text-sky" : "text-sky-bright";
  const ruleColor = tone === "light" ? "bg-sky/50" : "bg-sky-bright/50";
  return (
    <ScrollReveal
      className={`flex flex-col gap-5 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span
          className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${eyebrowColor}`}
        >
          <span aria-hidden className={`h-px w-8 ${ruleColor}`} />
          {eyebrow}
          {isCenter && <span aria-hidden className={`h-px w-8 ${ruleColor}`} />}
        </span>
      )}
      <h2
        className={`max-w-3xl font-display text-4xl font-medium leading-[1.06] tracking-[-0.01em] md:text-[3rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-[56ch] text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
