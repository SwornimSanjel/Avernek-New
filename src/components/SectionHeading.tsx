import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "ivory" | "ink";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "ivory",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const titleColor = tone === "ivory" ? "text-ivory" : "text-ink";
  const descColor = tone === "ivory" ? "text-slate" : "text-slate";
  return (
    <ScrollReveal
      className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </span>
      )}
      <div className={`relative ${isCenter ? "max-w-3xl" : "max-w-2xl"}`}>
        {/* Faint glow so the heading feels lit, not boxed. Tone "ink" sections
            sit on light, where a blue bloom would muddy — skip it there. */}
        {tone === "ivory" && (
          <span
            aria-hidden
            className={`pointer-events-none absolute top-1/2 -z-10 h-28 w-[70%] -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[60px] ${
              isCenter ? "left-1/2 -translate-x-1/2" : "left-0"
            }`}
          />
        )}
        <h2
          className={`font-display text-3xl font-bold leading-tight md:text-[2.5rem] ${titleColor}`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className={`max-w-[58ch] text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
