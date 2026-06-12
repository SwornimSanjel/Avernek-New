"use client";

/**
 * Infinite right-to-left marquee of the tools the system is built on.
 *
 * The list is rendered twice back-to-back and the track is translated by -50%
 * on a linear infinite loop, so it scrolls seamlessly in one direction with no
 * snap. Edge fade masks soften both sides. Honors prefers-reduced-motion
 * (`motion-reduce:animate-none`) — the names simply sit static.
 */
const tools = [
  "OpenAI",
  "Meta",
  "Google",
  "WhatsApp Business",
  "n8n",
  "Make",
  "Notion",
  "Python",
  "Google Sheets",
];

export default function LogoMarquee() {
  return (
    <div
      className="marquee-shell relative w-full overflow-hidden"
      aria-label="Automation tools Avernik works with"
    >
      <div className="marquee-track flex w-max items-center gap-[90px] motion-reduce:animate-none">
        {[0, 1].map((copy) =>
          tools.map((name) => (
            <span
              key={`${copy}-${name}`}
              aria-hidden={copy === 1}
              className="shrink-0 whitespace-nowrap text-2xl font-medium tracking-tight text-slate transition-colors duration-200 hover:text-ivory sm:text-[1.7rem]"
            >
              {name}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
