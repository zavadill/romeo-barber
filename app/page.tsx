import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { Button } from "@/components/ui/Button";
import { TeamCard } from "@/components/home/TeamCard";
import { SITE, TEAM_MEMBERS, OPENING_HOURS, VALUE_BULLETS, GOOGLE_REVIEWS } from "@/lib/constants";

const FEATURED_SERVICES = [
  { name: "Klasický střih", duration: "30–45 min", description: "Střih nůžkami a strojkem, mytí, vysušení, úprava obočí a aplikace kvalitních stylingových produktů.", price: "600 Kč", featured: false },
  { name: "Full servis", duration: "90–120 min", description: "Kompletní péče. Střih a úprava vousů, holení břitvou, Hot Towel, peeling, masáž a prémiový styling vlasů.", price: "1 350 Kč", featured: true },
  { name: "Vlasy + vousy", duration: "45–60 min", description: "Střih nůžkami i strojkem, úprava vousů, masáž hlavy, mytí, holení břitvou nebo strojkem a kolínská.", price: "1 000 Kč", featured: false },
];

const GALLERY_ITEMS = [
  "Mid Fade",
  "Náš interiér",
  "High Fade",
  "Holení břitvou",
  "Skin Fade",
  "Barbershop",
  "Klasický střih",
  "Full servis",
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
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Naše hodnoty">
            {VALUE_BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-left">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold bg-gold/10" aria-hidden>
                  <svg className="h-3.5 w-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="text-foreground font-medium">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/sluzby" variant="outline">Nabídka služeb</Button>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-20">
          <h3 className="font-serif text-2xl font-bold text-center text-foreground sm:text-3xl">Recenze z Google</h3>
          <p className="mt-2 text-center text-muted">Co o nás říkají zákazníci</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((review) => (
              <article key={review.author + review.date} className="border-l-4 border-gold/60 pl-6 py-2">
                <div className="flex items-center gap-1 text-gold" aria-label={`Hodnocení ${review.rating} z 5 hvězd`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-5 w-5" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 flex items-center justify-between text-sm text-muted">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </footer>
                <p className="mt-2">
                  <a href="https://www.google.com/maps/place/ROMEO'S+BARBERSHOP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-gold transition-colors">
                    <span>Recenze na Google</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </p>
              </article>
            ))}
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
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto list-none p-0 m-0">
          {TEAM_MEMBERS.map((member) => (
            <li key={member.id}>
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </section>

      <section id="galerie" className="border-y border-border py-20" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="font-serif text-3xl font-bold text-center text-foreground sm:text-4xl">Galerie</h2>
          <p className="mt-4 text-center text-muted max-w-2xl mx-auto">Prostředí a atmosféra našeho barbershopu.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY_ITEMS.map((label, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-background">
                <div className="absolute inset-0 flex items-center justify-center text-muted text-sm">
                  Foto připravujeme
                </div>
                <div
                  className="gallery-hover glass-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden
                >
                  <span className="font-serif text-lg font-semibold uppercase tracking-wider text-white">
                    {label}
                  </span>
                </div>
              </div>
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
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="border-l-2 border-gold/50 pl-6">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Adresa</h3>
            <address className="mt-3 not-italic text-foreground">
              <p className="text-lg leading-snug">{SITE.name}</p>
              <p className="mt-2 text-muted">{SITE.address}</p>
            </address>
          </div>
          <div className="border-l-2 border-gold/50 pl-6">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Telefon</h3>
            <p className="mt-3">
              <a href={"tel:" + SITE.phoneRaw} className="text-lg font-medium text-gold transition-colors hover:text-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">{SITE.phone}</a>
            </p>
            <p className="mt-2 text-sm text-muted">Zavolejte pro rezervaci nebo dotazy.</p>
          </div>
          <div className="border-l-2 border-gold/50 pl-6 sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Otevírací doba</h3>
            <ul className="mt-3 space-y-1 text-muted" aria-label="Otevírací doba">
              <li>{OPENING_HOURS.weekdays}</li>
              <li>{OPENING_HOURS.weekend}</li>
            </ul>
          </div>
        </div>
        <div className="map-dark mt-12 overflow-hidden rounded-lg border border-border">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa – ROMEO'S BARBERSHOP, Schweitzerova 39, Olomouc"
            className="block w-full min-h-[280px] sm:min-h-[320px]"
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/kontakt" variant="outline">Mapa a otevírací doba</Button>
        </div>
      </section>

      <section id="rezervace" className="border-t border-border py-20" aria-labelledby="cta-heading">
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
