export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: "ROMEO'S BARBERSHOP",
    url: "https://romeosbarber.cz",
    telephone: "+420723371784",
    address: { "@type": "PostalAddress", streetAddress: "Schweitzerova 39", addressLocality: "Olomouc", postalCode: "779 00", addressCountry: "CZ" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
