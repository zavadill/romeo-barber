import type { Metadata } from "next";
import { SITE, OPENING_HOURS, CASH_ONLY_NOTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt ROMEO'S BARBERSHOP – Schweitzerova 39, Olomouc.",
};

export default function KontaktPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Kontakt</h1>
        <p className="mt-4 text-lg text-muted">Těšíme se na vaši návštěvu</p>
      </header>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-card p-8" aria-labelledby="address-heading">
          <h2 id="address-heading" className="font-serif text-xl font-semibold text-gold">Adresa</h2>
          <address className="mt-4 not-italic text-foreground">
            <p className="text-lg">{SITE.name}</p>
            <p className="mt-2 text-muted">{SITE.address}</p>
            <p className="mt-4"><a href={"tel:" + SITE.phoneRaw} className="text-gold transition-colors hover:text-gold-hover">{SITE.phone}</a></p>
          </address>
        </section>
        <section className="rounded-xl border border-border bg-card p-8" aria-labelledby="hours-heading">
          <h2 id="hours-heading" className="font-serif text-xl font-semibold text-gold">Otevírací doba</h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>{OPENING_HOURS.weekdays}</li>
            <li>{OPENING_HOURS.weekend}</li>
          </ul>
          <p className="mt-6 text-sm text-muted">{CASH_ONLY_NOTICE}</p>
        </section>
      </div>
      <section className="mt-16" aria-labelledby="map-heading">
        <h2 id="map-heading" className="font-serif text-xl font-semibold text-gold mb-4">Kde nás najdete</h2>
        <div className="aspect-video w-full rounded-xl border border-border bg-card flex items-center justify-center text-muted" role="img" aria-label="Mapa – Schweitzerova 39, Olomouc">
          <p className="text-center px-4">Mapa bude doplněna. Schweitzerova 39, 779 00 Olomouc.</p>
        </div>
      </section>
    </article>
  );
}
