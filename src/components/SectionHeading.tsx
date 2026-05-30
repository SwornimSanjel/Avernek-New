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
      <h2
        className={`font-display text-3xl font-bold leading-tight md:text-[2.5rem] ${titleColor} ${
          isCenter ? "max-w-3xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-[58ch] text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
