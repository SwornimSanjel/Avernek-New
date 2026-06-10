import Image from "next/image";

/**
 * A faux browser window framing a website screenshot — three macOS-style dots,
 * a centered URL pill, and a 16:10 screenshot area.
 */
export default function BrowserFrame({
  url,
  src,
  alt,
}: {
  url: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-panel/60">
      <div className="flex h-9 items-center border-b border-white/10 px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/25" />
        </div>
        <span className="mx-auto max-w-[70%] truncate rounded-md bg-white/[0.04] px-3 py-0.5 text-xs text-slate">
          {url}
        </span>
        {/* Spacer matches the dots' width so the URL pill stays centered. */}
        <span aria-hidden className="w-[42px] shrink-0" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(min-width: 640px) 45vw, 90vw" className="object-cover" />
      </div>
    </div>
  );
}
