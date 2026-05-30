import { site } from "@/lib/site";

/**
 * Organization structured data for search engines.
 * Rendered once in the root layout.
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.contact.email,
    slogan: site.tagline,
    areaServed: "NP",
    // `sameAs` (social profiles) intentionally omitted until real, verified
    // profile URLs exist — don't point search engines at placeholder handles.
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
