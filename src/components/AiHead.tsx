/**
 * Avenor assistant — a clean line-art robot head (transparent body; only the
 * outline strokes + glowing eyes are drawn, so the dark site shows through).
 *
 * The `.ai-line` / `.ai-pop` classes (defined in globals.css) make it draw /
 * assemble itself on a slow loop. Eye colour uses the brand electric blue.
 */
type AiHeadProps = {
  className?: string;
  title?: string;
};

const LINE = "#ECEEF4"; // ivory outline
const EYE = "#60A5FA"; // accent-glow (brand electric blue)

export default function AiHead({ className, title = "Avenor assistant" }: AiHeadProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* antenna */}
      <line className="ai-line" x1="24" y1="11" x2="24" y2="15.5" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
      <circle className="ai-pop" cx="24" cy="8.6" r="2.3" fill={LINE} />

      {/* side sensors / ears */}
      <line className="ai-line" x1="7" y1="23" x2="7" y2="29" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
      <line className="ai-line" x1="41" y1="23" x2="41" y2="29" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />

      {/* head */}
      <rect className="ai-line" x="9.5" y="15.5" width="29" height="26" rx="9" stroke={LINE} strokeWidth="2.4" />

      {/* eyes */}
      <rect className="ai-pop" x="16.5" y="24" width="5" height="7.5" rx="2.5" fill={EYE} />
      <rect className="ai-pop" x="26.5" y="24" width="5" height="7.5" rx="2.5" fill={EYE} />

      {/* mouth */}
      <path className="ai-line" d="M19 35.5H29" stroke={LINE} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
