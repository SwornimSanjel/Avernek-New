import { ReactNode } from "react";

/**
 * Pass-through shell.
 *
 * The intro preloader has been removed for stability — it repeatedly trapped
 * the page behind an overlay that depended on client JS / animation completion.
 * The site content now renders directly and is always visible.
 *
 * (Preloader.tsx is kept in the repo so a safe, CSS-only intro can be added
 * back later without affecting page rendering.)
 */
export default function SiteShell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
