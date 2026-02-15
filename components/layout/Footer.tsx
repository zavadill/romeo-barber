import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS, OPENING_HOURS, CASH_ONLY_NOTICE } from "@/lib/constants";

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image src="/Assets/logo.png" alt="ROMEO'S BARBERSHOP" width={160} height={64} className="h-14 w-auto object-contain" />
            </Link>
            <p className="mt-4 text-sm text-muted">{CASH_ONLY_NOTICE}</p>
          </div>
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Otevírací doba</h3>
            <ul className="mt-3 space-y-1 text-sm text-muted"><li>{OPENING_HOURS.weekdays}</li><li>{OPENING_HOURS.weekend}</li></ul>
          </div>
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Kontakt</h3>
            <address className="mt-3 not-italic text-sm text-muted">
              <p>{SITE.address}</p>
              <a href={`tel:${SITE.phoneRaw}`} className="text-foreground transition-colors hover:text-gold">{SITE.phone}</a>
            </address>
          </div>
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Odkazy</h3>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href} className="text-sm text-muted transition-colors hover:text-gold">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} {SITE.name}. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
