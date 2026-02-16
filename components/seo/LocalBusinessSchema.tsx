import { SITE, GOOGLE_REVIEWS } from "@/lib/constants";

const baseUrl = "https://romeosbarber.cz";

export function LocalBusinessSchema() {
  const ratingSum = GOOGLE_REVIEWS.reduce((a, r) => a + r.rating, 0);
  const reviewCount = GOOGLE_REVIEWS.length;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "@id": `${baseUrl}/#localbusiness`,
    name: SITE.name,
    url: baseUrl,
    telephone: SITE.phoneRaw.replace(/\s/g, ""),
    image: `${baseUrl}/Assets/barber-interior.jpg`,
    logo: `${baseUrl}/Assets/logo.png`,
    priceRange: "450 Kč - 1 350 Kč",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schweitzerova 39",
      addressLocality: "Olomouc",
      postalCode: "779 00",
      addressCountry: "CZ",
      addressRegion: "Olomoucký kraj",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:30", closes: "18:00" },
    ],
    ...(reviewCount > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (ratingSum / reviewCount).toFixed(1),
        bestRating: 5,
        worstRating: 1,
        ratingCount: reviewCount,
        reviewCount,
      },
    }),
    sameAs: [],
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", url: `${baseUrl}/rezervace` },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
