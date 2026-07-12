import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Avernek — premium dusk system. Single source of truth
        // lives in globals.css :root; these map utility names onto it.
        obsidian: "rgb(var(--bg-rgb) / <alpha-value>)", // page background — near-black
        ink: "rgb(var(--bg-deep-rgb) / <alpha-value>)", // section alternates
        // Legacy aliases kept so existing utility names keep working.
        navy: {
          DEFAULT: "rgb(var(--bg-deep-rgb) / <alpha-value>)",
          deep: "rgb(var(--bg-deep-rgb) / <alpha-value>)",
        },
        panel: {
          DEFAULT: "rgb(var(--bg-card-rgb) / <alpha-value>)", // elevated panels
          light: "#171322",
        },
        ivory: "rgb(var(--text-rgb) / <alpha-value>)", // headings / strong text
        silver: "#D8D6DD", // body text — soft monochrome with a faint ink-violet cast
        slate: {
          DEFAULT: "rgb(var(--text-muted-rgb) / <alpha-value>)", // warm graphite muted
        },
        // Primary: high-contrast white signal.
        accent: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          glow: "#F7F7F8",
        },
        // Secondary accent: soft #1B1626-tinted highlight.
        iris: {
          DEFAULT: "#1B1626",
          glow: "#F7F7F8",
        },
        // Gold — review stars ONLY. Never headings, CTAs or tags.
        gold: {
          DEFAULT: "var(--gold-star)",
          glow: "#F7F7F8",
        },
        line: "var(--border)",
      },
      fontFamily: {
        // Headlines: classic Times New Roman-style serif (Tinos).
        display: ["var(--font-serif-display)", "Times New Roman", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif-display)", "Times New Roman", "serif"],
      },
      maxWidth: {
        container: "1152px", // = max-w-6xl
      },
      boxShadow: {
        glow: "0 0 60px -18px var(--primary-glow)",
        "glow-iris": "0 0 60px -20px rgba(247,247,248, 0.22)",
        card: "0 20px 50px -28px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(120deg, #F7F7F8 0%, #D8D6DD 52%, #8A8194 100%)",
        "ink-grad": "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 100%)",
        "panel-grad": "linear-gradient(160deg, rgba(247,247,248,0.04) 0%, rgba(247,247,248,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0.38", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseNode: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.2)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        typing: {
          "0%, 80%, 100%": { transform: "translateY(0)", opacity: "0.35" },
          "40%": { transform: "translateY(-3px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.38s ease-out both",
        node: "pulseNode 2.8s ease-in-out infinite",
        sweep: "sweep 4.8s linear infinite",
        typing: "typing 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
