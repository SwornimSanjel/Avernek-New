"use client";

import { useEffect, useRef, useState } from "react";
import Mark from "./Mark";
import AiHead from "./AiHead";

/**
 * Visitor-facing floating quick-action button (bottom-right).
 *
 * Branded with the Avernek "A" mark. Opens a panel with the two highest-intent
 * actions (book a system audit and watch the demo). Respects
 * prefers-reduced-motion, keyboard accessible, mobile-safe.
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
      {/* Quick-action panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Avernek quick actions"
          className="card-lift relative mb-3 w-[20rem] max-w-[calc(100vw-2.5rem)] animate-fade-up overflow-hidden"
        >
          {/* header */}
          <div className="relative flex items-start justify-between gap-3 border-b border-line px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
                <Mark className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight text-ink">How can we help?</p>
                <p className="mt-0.5 text-xs leading-tight text-muted">Two ways to get started.</p>
              </div>
            </div>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close quick actions"
              onClick={close}
              className="-mr-1 -mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-ink/[0.05] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
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
              title="Book a Free Audit"
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

      {/* The floating assistant — the robot head with a soft paper backlight so
          it stays readable over both light and dark sections. */}
      <button
        type="button"
        aria-label="Open Avernek assistant"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 bg-card shadow-btn-ink transition-transform duration-200 hover:scale-105 hover:border-brass active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      >
        <span className={`relative flex items-center justify-center text-paper ${open ? "" : "ai-settle"}`}>
          <AiHead className="h-10 w-10" />
        </span>
      </button>
    </div>
  );
}

/** A single action row inside the quick-action panel. */
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
      className="group/item flex items-center gap-3 rounded-2xl border border-line bg-paper p-3 transition-colors duration-200 hover:border-sky/50 hover:bg-sky-wash/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-wash text-sky">
        {children}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block truncate text-xs text-muted">{desc}</span>
      </span>
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-sky"
        aria-hidden
      >
        <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
