import { areas, packages, site } from "@/lib/site";

// LocalBusiness structured data for Google's local results.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    additionalType: "https://schema.org/AutoWash",
    name: "Stan's Auto Detailing",
    slogan: site.tagline,
    description:
      "Locally owned mobile auto detailing company serving Raleigh, Durham, Cary, Apex, and the entire Triangle area of North Carolina.",
    url: site.domain,
    telephone: "+1-315-380-4885",
    image: `${site.domain}/photos/IMG_5768.jpg`,
    logo: `${site.domain}/brand/logo-black.png`,
    priceRange: "$75 - $450",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raleigh",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: `${a.name}, NC`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Detailing packages",
      itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.priceCoupe,
        priceCurrency: "USD",
        description: p.blurb,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
