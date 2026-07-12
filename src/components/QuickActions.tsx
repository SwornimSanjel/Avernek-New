"use client";

import { useEffect, useRef, useState } from "react";
import Mark from "./Mark";
import AiHead from "./AiHead";

/**
 * Visitor-facing floating quick-action button (bottom-right).
 *
 * Branded with the Avernek "A" mark. Opens a premium command panel with the two
 * highest-intent actions (book a system audit and watch the demo). Subtle
 * constant animation, respects prefers-reduced-motion, keyboard accessible,
 * mobile-safe.
 */
export default function QuickActions() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on outside click + Escape; focus the close button when opening.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end sm:bottom-6 sm:right-6"
    >
      {/* Premium quick-action panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Avernek quick actions"
          className="hud-cut hud-brackets relative mb-3 w-[20rem] max-w-[calc(100vw-2.5rem)] animate-fade-up overflow-hidden border border-accent/12 bg-ink/95 shadow-card backdrop-blur-xl"
        >
          {/* top accent hairline + soft corner glow */}
          <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-grad opacity-70" />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full bg-accent/15 blur-3xl"
          />

          {/* header */}
          <div className="relative flex items-start justify-between gap-3 border-b border-accent/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="hud-cut-xs flex h-9 w-9 items-center justify-center border border-accent/10 bg-panel-light shadow-card">
                <Mark className="h-5 w-5 text-ivory" />
              </span>
              <div>
                <p className="text-sm font-medium leading-tight text-ivory">
                  How can we help?
                </p>
                <p className="mt-0.5 text-xs leading-tight text-slate">Two ways to get started.</p>
              </div>
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close quick actions"
              onClick={close}
              className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-slate transition-colors hover:bg-accent/5 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* actions */}
          <div className="relative flex flex-col gap-2 p-3">
            <ActionRow
              href="#contact"
              onClick={close}
              title="Book an Audit"
              desc="Map your inquiry flow in one call."
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden>
                <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.7" />
                <path d="m15 15 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </ActionRow>

            <ActionRow
              href="#demo"
              onClick={close}
              title="Watch the live demo"
              desc="See one inquiry move through the system."
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                <path d="M10.5 8.5 16 12l-5.5 3.5z" fill="currentColor" />
              </svg>
            </ActionRow>
          </div>
        </div>
      )}

      {/* The floating assistant — just the robot head, no box / border / glow.
          A slow head-turn loop keeps it alive without a distracting halo. */}
      <button
        type="button"
        aria-label="Open Avernek assistant"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
      >
        {/* soft low-opacity backlight so the head reads as part of the page,
            not pasted on — diffuse, no hard circle/border */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(27,22,38,0.22),rgba(247,247,248,0.14)_45%,transparent_72%)] blur-md"
        />
        <span className={`relative flex items-center justify-center ${open ? "" : "ai-settle"}`}>
          <AiHead className="h-12 w-12" />
        </span>
      </button>
    </div>
  );
}

/** A single premium action row inside the quick-action panel. */
function ActionRow({
  href,
  onClick,
  title,
  desc,
  children,
}: {
  href: string;
  onClick: () => void;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="hud-cut-sm group/item flex items-center gap-3 border border-accent/10 bg-accent/[0.03] p-3 transition-colors duration-200 hover:border-accent/40 hover:bg-accent/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <span className="hud-cut-xs flex h-9 w-9 shrink-0 items-center justify-center border border-accent/10 bg-accent/15 text-accent-glow">
        {children}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-ivory">{title}</span>
        <span className="block truncate text-xs text-slate">{desc}</span>
      </span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4 shrink-0 text-slate transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-accent-glow"
        aria-hidden
      >
        <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
