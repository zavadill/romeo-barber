import type { Metadata } from "next";
import { PRICE_LIST, GIFT_VOUCHERS, OPENING_HOURS, CASH_ONLY_NOTICE } from "@/lib/constants";

const baseUrl = "https://romeosbarber.cz";

export const metadata: Metadata = {
  title: "Služby a ceník",
  description: "Ceník služeb ROMEO'S BARBERSHOP Olomouc – klasický střih, full servis, holení břitvou, úprava vousů, dárkové poukázky. Ceny od 450 Kč.",
  openGraph: { url: `${baseUrl}/sluzby`, title: "Služby a ceník | ROMEO'S BARBERSHOP Olomouc", description: "Ceník služeb – klasické i moderní střihy, holení břitvou, úprava vousů. Olomouc." },
  alternates: { canonical: `${baseUrl}/sluzby` },
};

export default function SluzbyPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Služby a ceník</h1>
        <p className="mt-4 text-lg text-muted">Klasické i moderní střihy, holení břitvou, úprava vousů.</p>
      </header>
      <section className="mt-16" aria-labelledby="price-list-heading">
        <h2 id="price-list-heading" className="font-serif text-2xl font-semibold text-gold mb-10 text-center">Ceník služeb</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICE_LIST.map(({ name, price }) => (
            <div key={name} className="border-l-2 border-gold/50 pl-6 py-3">
              <p className="text-foreground font-medium leading-snug">{name}</p>
              <p className="mt-2 font-serif text-xl text-gold">{price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 grid gap-12 lg:grid-cols-2">
        <div className="border-l-2 border-gold/50 pl-8 lg:pl-10">
          <h2 className="font-serif text-2xl font-semibold text-gold">Dárkové poukázky</h2>
          <p className="mt-4 text-muted">{GIFT_VOUCHERS.note}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {GIFT_VOUCHERS.values.map((value) => (
              <span key={value} className="rounded-full border border-gold/50 bg-gold/5 px-5 py-2 font-medium text-gold">{value}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">Platnost: {GIFT_VOUCHERS.validity}</p>
        </div>
        <div className="border-l-2 border-gold/50 pl-8 lg:pl-10">
          <h2 className="font-serif text-2xl font-semibold text-gold">Otevírací doba</h2>
          <ul className="mt-6 space-y-3 text-muted">
            <li>{OPENING_HOURS.weekdays}</li>
            <li>{OPENING_HOURS.weekend}</li>
          </ul>
          <p className="mt-6 text-sm text-muted">{CASH_ONLY_NOTICE}</p>
        </div>
      </section>
    </article>
  );
}
