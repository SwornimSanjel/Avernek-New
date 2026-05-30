/**
 * The Avenor mark — the finalized "filter-A" glyph: two diverging legs forming an
 * upward "A" with two rounded notches between them (the qualify / filter motif).
 *
 * Geometry taken from the finalized logo (avenor_filter_a_square.svg), cropped
 * and centred into a square viewBox. Uses `currentColor` so the parent controls
 * the fill (ivory on the dark chips); the brand square's framing comes from the
 * chip/rounded-square containers that wrap this mark.
 */
type MarkProps = {
  className?: string;
  title?: string;
};

export default function Mark({ className, title = "Avenor" }: MarkProps) {
  return (
    <svg
      viewBox="272 270 480 480"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <polygon points="468,320 504,320 448,700 308,700" />
      <polygon points="520,320 556,320 716,700 576,700" />
      <rect x="462" y="480" width="40" height="50" rx="12" />
      <rect x="522" y="480" width="40" height="50" rx="12" />
    </svg>
  );
}
