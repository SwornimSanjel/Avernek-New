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
        // Avernik — deep-space navy system (Mach33-inspired). Single source of
        // truth lives in globals.css :root; these map utility names onto it.
        obsidian: "rgb(var(--bg-rgb) / <alpha-value>)", // page background — very dark navy
        ink: "rgb(var(--bg-deep-rgb) / <alpha-value>)", // section alternates
        // Legacy aliases kept so existing utility names keep working.
        navy: {
          DEFAULT: "rgb(var(--bg-deep-rgb) / <alpha-value>)",
          deep: "rgb(var(--bg-deep-rgb) / <alpha-value>)",
        },
        panel: {
          DEFAULT: "rgb(var(--bg-card-rgb) / <alpha-value>)", // elevated panels
          light: "#131D44",
        },
        ivory: "rgb(var(--text-rgb) / <alpha-value>)", // headings / strong text
        silver: "#BFC6E0", // body text — between text and muted
        slate: {
          DEFAULT: "rgb(var(--text-muted-rgb) / <alpha-value>)", // cool blue-grey muted
        },
        // Primary: vivid royal blue. Saturated, never pastel/sky.
        accent: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          glow: "#6B8AFF", // saturated light blue for links / highlights
        },
        // De-purpled: iris now leans blue so legacy usages stay in-palette.
        iris: {
          DEFAULT: "#4C70FF",
          glow: "#8AA2FF",
        },
        // Gold — review stars ONLY. Never headings, CTAs or tags.
        gold: {
          DEFAULT: "var(--gold-star)",
          glow: "#F8CD74",
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
        "glow-iris": "0 0 60px -20px rgba(91, 116, 245, 0.3)",
        card: "0 20px 50px -28px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(120deg, #6B8AFF 0%, #2D5BFF 60%, #2D5BFF 100%)",
        "ink-grad": "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg) 100%)",
        "panel-grad": "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
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
        "fade-up": "fade-up 0.6s ease-out both",
        node: "pulseNode 2.6s ease-in-out infinite",
        sweep: "sweep 3.5s linear infinite",
        typing: "typing 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
