import type { Metadata, Viewport } from "next";
import { Inter, Tinos, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

// Minimal Times New Roman-style serif (Tinos) used ONLY for the italic
// accent word in headings — restrained, not a fancy calligraphic Didone.
const tinos = Tinos({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// High-contrast editorial display serif used for the hero headline (and its
// italic accent). Variable font, so the full weight axis is available via
// Tailwind font-* utilities. Scoped to the hero — other headings stay sans.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.category}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "inquiry system",
    "lead qualification",
    "lead tracking",
    "follow-up system",
    "Nepal",
  ],
  authors: [{ name: site.name }],
  // Static assets from /public (no dynamic image/icon routes).
  icons: {
    icon: "/avenor_filter_a_square.svg",
    shortcut: "/avenor_filter_a_square.svg",
    apple: "/avenor_filter_a_square.svg",
  },
  openGraph: {
    type: "website",
    title: `${site.name} · ${site.category}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.category}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020514",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${tinos.variable} ${playfair.variable}`}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
