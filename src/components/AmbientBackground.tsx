type Variant = "hero" | "section" | "subtle";

/**
 * Legacy no-op. The dark "space atmosphere" system was removed in the light
 * editorial redesign — sections now own their own backgrounds. Kept so
 * currently-unrendered sections (Team, Services, …) keep compiling.
 */
export default function AmbientBackground(_props: { variant?: Variant; className?: string }) {
  return null;
}
