"use client";

import { type MouseEvent, useEffect, useState } from "react";
import Logo from "./Logo";
import { LinkButton } from "./Button";
import { nav } from "@/lib/site";

const sectionIds = nav.map((item) => item.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("demo");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.68;
      const current =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= activationLine && rect.bottom >= activationLine;
        }) ??
        sections
          .filter((section) => section.getBoundingClientRect().top <= activationLine)
          .at(-1) ??
        sections[0];

      setActiveSection(current.id);
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-20% 0px -30% 0px",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const id = href.slice(1);
    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    setActiveSection(id);
    setOpen(false);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/*
        The slide (transform) and the backdrop-blur live on the SAME element.
        backdrop-filter is broken by a *transformed ancestor*, so the glass must
        not sit inside a separately-transformed wrapper — otherwise the blur
        never samples the page and the bar reads as a solid block.
      */}
      <header
        className={`fixed left-4 right-4 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border py-2 pl-5 pr-2 backdrop-blur-xl transition-[background-color,border-color,box-shadow,opacity,transform] duration-300 ease-out sm:left-6 sm:right-6 sm:top-4 sm:pl-7 sm:pr-2.5 ${
          scrolled
            ? "border-[#F7F7F8]/40 bg-[#09080D]/94 shadow-[0_22px_70px_-28px_rgba(0,0,0,0.98),inset_0_1px_0_rgba(247,247,248,0.12)]"
            : "border-transparent bg-[#09080D]/70 shadow-[0_16px_54px_-30px_rgba(0,0,0,0.82)]"
        }`}
      >
        {/* top hairline sweep — a slow-drifting pearl accent line so
            the bar reads as a lit instrument, not a flat pill */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#F7F7F8]/70 to-transparent transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Left: logo */}
        <Logo tone="ivory" />

        {/* Center: low-opacity nav links that brighten on hover */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  isActive
                    ? "border border-[#F7F7F8]/45 bg-[#171322]/90 text-ivory shadow-[inset_0_1px_0_rgba(247,247,248,0.18)]"
                    : "text-slate hover:text-ivory"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: primary CTA with an up-right (NE) arrow */}
        <div className="hidden md:block">
          <LinkButton href="#contact">
            Book an Audit
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M6 14 14 6M8 6h6v6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </LinkButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/15 text-ivory transition-colors duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-ivory transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ivory transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </header>

      {/* Mobile menu — its own fixed element (no transformed ancestor) so its
          glass blur also works correctly. */}
      {open && (
        <div className="fixed left-4 right-4 top-[4.75rem] z-50 mx-auto max-w-6xl rounded-3xl border border-[#F7F7F8]/35 bg-[#09080D]/95 p-3 backdrop-blur-2xl backdrop-saturate-150 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className="rounded-2xl px-3 py-3 text-base font-medium text-ivory/85 transition-colors hover:bg-accent/5 hover:text-accent-glow"
              >
                {item.label}
              </a>
            ))}
            <LinkButton href="#contact" className="mt-2 w-full">
              Book an Audit
            </LinkButton>
          </div>
        </div>
      )}
    </>
  );
}
