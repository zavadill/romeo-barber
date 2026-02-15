import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { Button } from "@/components/ui/Button";
import { SITE, TEAM, OPENING_HOURS } from "@/lib/constants";

const FEATURED_SERVICES = [
  { name: "Klasický střih", duration: "30–45 min", description: "Střih nůžkami a strojkem, mytí, vysušení, úprava obočí a aplikace kvalitních stylingových produktů.", price: "600 Kč", featured: false },
  { name: "Full servis", duration: "90–120 min", description: "Kompletní péče. Střih a úprava vousů, holení břitvou, Hot Towel, peeling, masáž a prémiový styling vlasů.", price: "1 350 Kč", featured: true },
  { name: "Vlasy + vousy", duration: "45–60 min", description: "Střih nůžkami i strojkem, úprava vousů, masáž hlavy, mytí, holení břitvou nebo strojkem a kolínská.", price: "1 000 Kč", featured: false },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeMarquee />

      <section id="o-nas" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="about-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="about-heading" className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Tradiční pánské holičství</h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            V ROMEO'S BARBERSHOP nabízíme klasické i moderní střihy, holení břitvou, úpravu vousů a stylingové poradenství. Důraz klademe na precizní práci a příjemnou atmosféru.
          </p>
          <div className="mt-10">
            <Button href="/sluzby" variant="outline">Nabídka služeb</Button>
          </div>
        </div>
      </section>

      <section id="sluzby" className="border-y border-border bg-background py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="font-serif text-3xl font-bold text-center text-foreground sm:text-4xl">Služby</h2>
          <p className="mt-4 text-center text-muted max-w-2xl mx-auto">Klasické i moderní střihy, holení břitvou, úprava vousů a barvení.</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {FEATURED_SERVICES.map(({ name, duration, description, price, featured }) => (
              <div
                key={name}
                className={"relative flex flex-col rounded-2xl border-2 p-6 transition-colors " + (featured ? "border-gold bg-card" : "border-border bg-card hover:border-gold/40")}
              >
                <span className={"inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide " + (featured ? "bg-gold/20 text-gold" : "bg-white/10 text-muted")}>{duration}</span>
                <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide text-foreground sm:text-xl">{name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted">Cena</p>
                    <p className={"text-2xl font-bold " + (featured ? "text-gold" : "text-foreground")}>{price}</p>
                  </div>
                  <Link href="/sluzby" className={"flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors " + (featured ? "bg-gold text-background hover:bg-gold-hover" : "bg-white/10 text-foreground hover:bg-white/20")} aria-label={"Detail služby " + name}>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/sluzby">Celý ceník</Button>
          </div>
        </div>
      </section>

      <section id="tym" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="team-heading">
        <h2 id="team-heading" className="font-serif text-3xl font-bold text-center text-foreground sm:text-4xl">Náš tým</h2>
        <p className="mt-4 text-center text-muted">Alfredo, Jarda a Kuba — vaši spolehliví pánští holiči v Olomouci.</p>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {TEAM.map((name) => (
            <li key={name} className="relative">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl border border-border bg-card" aria-hidden>
                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm"><span className="opacity-60">Foto připravujeme</span></div>
                <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-4 font-serif text-xl text-gold">{name}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="galerie" className="border-y border-border bg-card py-20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="font-serif text-3xl font-bold text-center text-foreground sm:text-4xl">Galerie</h2>
          <p className="mt-4 text-center text-muted max-w-2xl mx-auto">Prostředí a atmosféra našeho barbershopu.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl border border-border bg-background flex items-center justify-center text-muted text-sm">Foto připravujeme</div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/galerie" variant="outline">Zobrazit galerii</Button>
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="font-serif text-3xl font-bold text-center text-foreground sm:text-4xl">Kontakt</h2>
        <p className="mt-4 text-center text-muted">Těšíme se na vaši návštěvu. Přijďte k nám na Schweitzerově v Olomouci.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Adresa</h3>
            <address className="mt-3 not-italic text-foreground">
              <p className="text-lg leading-snug">{SITE.name}</p>
              <p className="mt-2 text-muted">{SITE.address}</p>
            </address>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Telefon</h3>
            <p className="mt-3">
              <a href={"tel:" + SITE.phoneRaw} className="text-lg font-medium text-gold transition-colors hover:text-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">{SITE.phone}</a>
            </p>
            <p className="mt-2 text-sm text-muted">Zavolejte pro rezervaci nebo dotazy.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Otevírací doba</h3>
            <ul className="mt-3 space-y-1 text-muted" aria-label="Otevírací doba">
              <li>{OPENING_HOURS.weekdays}</li>
              <li>{OPENING_HOURS.weekend}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button href="/kontakt" variant="outline">Mapa a otevírací doba</Button>
        </div>
      </section>

      <section id="rezervace" className="border-t border-border bg-card py-20" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 id="cta-heading" className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Rezervujte si termín</h2>
          <p className="mt-4 text-muted">Přijďte k nám na střih, holení nebo úpravu vousů.</p>
          <div className="mt-10">
            <Button href="/rezervace">Rezervovat termín</Button>
          </div>
        </div>
      </section>
    </>
  );
}
