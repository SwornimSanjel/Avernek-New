"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Logo from "./Logo";
import { LinkButton } from "./Button";
import { nav } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <Logo tone="ivory" />
        </motion.div>

        {/* Underline-reveal nav (distinct, editorial — no pill container) */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm font-medium text-ivory/70 transition-colors duration-200 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {item.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-px left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-accent-grad transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span aria-hidden className="h-5 w-px bg-white/10" />
          <LinkButton href="#contact">
            Book a system audit
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M4 10h11M11 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ivory transition-colors duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-ivory transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-ivory transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ivory/85 transition-colors hover:bg-white/5 hover:text-accent-glow"
              >
                {item.label}
              </a>
            ))}
            <LinkButton href="#contact" className="mt-2 w-full">
              Book a system audit
            </LinkButton>
          </Container>
        </div>
      )}
    </header>
  );
}
