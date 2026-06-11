import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import SiteShell from "@/components/SiteShell";
import QuickActions from "@/components/QuickActions";
import AmbientGlow from "@/components/AmbientGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

// Editorial high-contrast serif for headlines — 400 only (it has no bold).
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-display",
  weight: "400",
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
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
  themeColor: "#060B1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <JsonLd />
        <SiteShell>{children}</SiteShell>
        {/* Painted above the opaque section backgrounds (corner-only, ultra-low
            opacity) but below the navbar / floating button (higher z-index). */}
        <AmbientGlow />
        {/* Single floating assistant button — opens audit / demo / WhatsApp. */}
        <QuickActions />
      </body>
    </html>
  );
}
