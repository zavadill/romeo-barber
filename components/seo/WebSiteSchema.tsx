const baseUrl = "https://romeosbarber.cz";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "ROMEO'S BARBERSHOP",
    url: baseUrl,
    description: "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů.",
    inLanguage: "cs-CZ",
    publisher: { "@id": `${baseUrl}/#localbusiness` },
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", url: `${baseUrl}/rezervace` },
      name: "Rezervovat termín",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
