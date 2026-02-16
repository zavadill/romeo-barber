import type { MetadataRoute } from "next";

const baseUrl = "https://romeosbarber.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/sluzby`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/galerie`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/rezervace`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
  ];
}
