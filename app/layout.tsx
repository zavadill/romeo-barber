import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://romeosbarber.cz"),
  title: {
    default: "ROMEO'S BARBERSHOP | Pánské holičství Olomouc",
    template: "%s | ROMEO'S BARBERSHOP Olomouc",
  },
  description:
    "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů a stylingové poradenství. Schweitzerova 39.",
  openGraph: {
    title: "ROMEO'S BARBERSHOP | Pánské holičství Olomouc",
    description:
      "Tradiční pánské holičství v Olomouci – klasické i moderní střihy, holení břitvou, úprava vousů.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen antialiased bg-background text-foreground">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
