import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = "https://romeosbarber.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ROMEO'S BARBERSHOP | Pánské holičství Olomouc",
    template: "%s | ROMEO'S BARBERSHOP Olomouc",
  },
  description:
    "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů a stylingové poradenství. Schweitzerova 39.",
  keywords: ["pánské holičství", "barbershop", "Olomouc", "střih", "holení břitvou", "úprava vousů", "Romeo's Barbershop"],
  authors: [{ name: "ROMEO'S BARBERSHOP", url: siteUrl }],
  creator: "ROMEO'S BARBERSHOP",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "ROMEO'S BARBERSHOP",
    title: "ROMEO'S BARBERSHOP | Pánské holičství Olomouc",
    description: "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů. Schweitzerova 39.",
    images: [{ url: "/Assets/barber-interior.jpg", width: 1200, height: 630, alt: "Interiér ROMEO'S BARBERSHOP Olomouc" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMEO'S BARBERSHOP | Pánské holičství Olomouc",
    description: "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů.",
    images: ["/Assets/barber-interior.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
