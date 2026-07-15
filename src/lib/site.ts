/**
 * Global site configuration.
 *
 * Contact handles used across the public site.
 */
export const site = {
  name: "Avernek",
  legalName: "Avernek",
  tagline: "The inquiry system between your ads and your sales team.",
  category: "AI Inquiry Systems for Growth-Focused Businesses",
  description:
    "Avernek builds the inquiry system that captures every customer inquiry, replies in seconds, qualifies real buyers, and routes them to your team before the lead goes cold.",
  // Replace with the live domain before launch.
  url: "https://avernek.com", // PLACEHOLDER — replace with real domain
  flow: ["Capture", "Respond", "Qualify", "Nurture", "Follow Up", "Report"] as const,
  contact: {
    email: "contact@avernek.com",
    phone: "+977-XX-XXXXXXX", // PLACEHOLDER — replace
    location: "Nepal", // PLACEHOLDER — confirm/replace
  },
  social: {
    instagram: "https://www.instagram.com/avernek.system?igsh=bmZhbGc4ODljdndl&utm_source=qr",
    facebook: "https://www.facebook.com/share/18oXPRJnuE/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@avenor.system?_r=1&_t=ZS-97KfH98oRbY",
  },
} as const;

export const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Demo", href: "#demo" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  // Temporarily unlinked from the public navigation. Keep the Team section/data intact.
  // { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
] as const;
