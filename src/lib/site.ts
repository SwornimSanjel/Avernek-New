/**
 * Global site configuration.
 *
 * NOTE: Contact handles below are PLACEHOLDERS and must be replaced before
 * launch. Only `email` is a real (temporary) starter address from the
 * Avernek blueprint. See README "Replace before launch".
 */
export const site = {
  name: "Avernek",
  legalName: "Avernek",
  tagline: "The inquiry system between your ads and your sales team.",
  category: "AI Inquiry Systems for Growth-Focused Businesses",
  description:
    "Avernek builds the inquiry system that captures every customer inquiry, replies in seconds, qualifies real buyers, and routes them to your team around the clock.",
  // Replace with the live domain before launch.
  url: "https://avernek.com", // PLACEHOLDER — replace with real domain
  flow: ["Capture", "Respond", "Qualify", "Nurture", "Follow Up", "Report"] as const,
  contact: {
    // LAUNCH TODO: replace this temporary Gmail with a proper domain email
    // (e.g. hello@avernek.xxx) before going live.
    email: "avenor.system@gmail.com",
    phone: "+977-XX-XXXXXXX", // PLACEHOLDER — replace
    whatsapp: "+977-XXXXXXXXXX", // PLACEHOLDER — replace (display only)
    // Digits only, country code, no "+" — used to build wa.me links.
    // TODO: replace with the real WhatsApp number.
    whatsappNumber: "9779800000000",
    location: "Kathmandu, Nepal", // PLACEHOLDER — confirm/replace
  },
  social: {
    instagram: "https://instagram.com/avernek", // PLACEHOLDER — replace
    facebook: "https://facebook.com/avernek", // PLACEHOLDER — replace
  },
} as const;

/** Default prefilled message for WhatsApp deep links. */
export const whatsappDefaultText = "Hi Avernek, I'd like a system audit.";

/** Build a wa.me deep link with a prefilled message. */
export function whatsappLink(text: string = whatsappDefaultText): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { label: "Demo", href: "#demo" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
] as const;
