import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "border border-[#F7F7F8] bg-[#F7F7F8] text-[#09080D] shadow-[0_0_34px_-12px_rgba(247,247,248,0.88)] hover:shadow-[0_0_44px_-10px_rgba(247,247,248,0.95)]",
  secondary:
    "border border-[#F7F7F8]/20 bg-transparent text-[#F7F7F8] hover:border-[#F7F7F8]/40 hover:bg-[#F7F7F8]/5",
  ghost: "text-ivory hover:text-accent-glow",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

export function LinkButton({ children, href, variant = "primary", className = "" }: LinkButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (external) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type SubmitButtonProps = CommonProps & {
  type?: "submit" | "button";
  disabled?: boolean;
};

export function ActionButton({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
}: SubmitButtonProps) {
  return (
    <button type={type} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
