"use client";

import Marquee from "react-fast-marquee";

const MARQUEE_ITEMS = ["Klasický střih", "Vlasy + vousy", "Holení břitvou", "Úprava vousů", "Full servis", "Dětský střih", "Barvení", "Olomouc", "ROMEO'S BARBERSHOP"];

export function HomeMarquee() {
  return (
    <section className="bg-background py-10" aria-hidden>
      <Marquee speed={40} autoFill gradient gradientColor="#0d0d0d" gradientWidth={120} pauseOnHover className="overflow-hidden">
        {MARQUEE_ITEMS.map((item) => (
          <span key={item} className="mx-8 font-serif text-lg font-medium uppercase tracking-wider text-gold whitespace-nowrap">
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
