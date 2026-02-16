"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) setScrolled(true);
      else if (window.scrollY < 20) setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={
          "fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-[background-color,border-color] duration-300 ease-out " +
          (scrolled ? "bg-background border-border" : "bg-transparent")
        }
      >
        <nav
          className={
            "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-[height] duration-300 ease-out " +
            (scrolled ? "h-16" : "h-20")
          }
          aria-label="Hlavní navigace"
        >
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded" aria-label="Domů">
            <Image
              src="/Assets/logo.png"
              alt="ROMEO'S BARBERSHOP"
              width={150}
              height={60}
              className={"w-auto object-contain transition-[height] duration-300 ease-out " + (scrolled ? "h-9" : "h-12")}
              priority
            />
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    "text-sm font-medium tracking-wide transition-colors hover:text-gold " +
                    (pathname === href ? "text-gold" : "text-foreground")
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/rezervace" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background hover:bg-gold-hover">
                Rezervace
              </Link>
            </li>
          </ul>
          <div className="flex md:hidden items-center gap-3">
            <Link href="/rezervace" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background">
              Rezervace
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="rounded-lg p-2 text-foreground hover:bg-white/10 focus:ring-2 focus:ring-gold"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <div
        id="mobile-menu"
        className={
          "fixed inset-0 z-40 md:hidden glass transition-[opacity] duration-300 " +
          (mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
        aria-hidden={!mobileOpen}
      >
        <div className="bg-background flex min-h-full flex-col items-center justify-center px-8 py-20">
          <ul className="w-full max-w-xs space-y-6 text-center">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={"block py-2 text-xl font-bold uppercase tracking-wide " + (pathname === href ? "text-gold" : "text-white")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/rezervace" className="mt-12 block w-full max-w-xs rounded-full bg-gold px-8 py-4 text-center text-lg font-semibold text-white">
            Rezervovat termín
          </Link>
        </div>
      </div>
    </>
  );
}
