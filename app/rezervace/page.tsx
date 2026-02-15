import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Rezervace",
  description: "Rezervujte si termín v ROMEO'S BARBERSHOP Olomouc.",
};

export default function RezervacePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Rezervace</h1>
        <p className="mt-4 text-muted">Vyberte si službu, zaměstnance a datum návštěvy.</p>
      </header>
      <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-10">
        <BookingForm />
      </div>
    </article>
  );
}
