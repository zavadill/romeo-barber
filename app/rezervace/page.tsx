import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";

const baseUrl = "https://romeosbarber.cz";

export const metadata: Metadata = {
  title: "Rezervace",
  description: "Rezervujte si termín v ROMEO'S BARBERSHOP Olomouc online. Vyberte službu, zaměstnance a datum návštěvy.",
  openGraph: { url: `${baseUrl}/rezervace`, title: "Rezervace | ROMEO'S BARBERSHOP Olomouc", description: "Rezervujte si termín – střih, holení břitvou, úprava vousů. Olomouc." },
  alternates: { canonical: `${baseUrl}/rezervace` },
};

export default function RezervacePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Rezervace</h1>
        <p className="mt-4 text-muted">Vyberte si službu, zaměstnance a datum návštěvy.</p>
      </header>
      <div className="mt-16 border-l-2 border-gold/50 pl-6 sm:pl-10 py-6">
        <BookingForm />
      </div>
    </article>
  );
}
