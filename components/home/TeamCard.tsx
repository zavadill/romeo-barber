import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/lib/constants";

type TeamCardProps = { member: TeamMember };

export function TeamCard({ member }: TeamCardProps) {
  const bookingHref = `/rezervace?staff=${member.id}`;

  return (
    <article className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border bg-card">
      {/* Portrait – černobílý (grayscale), placeholder nebo obrázek */}
      <div className="absolute inset-0">
        {member.image ? (
          <Image
            src={member.image}
            alt=""
            fill
            className="object-cover grayscale"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-muted text-sm" aria-hidden>
            Foto připravujeme
          </div>
        )}
      </div>

      {/* Jméno – velký serif přes fotku (dole) */}
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-5 py-6 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {member.name}
      </p>

      {/* Hover overlay: specializace, popis, tlačítko (glass) */}
      <div
        className="team-card-overlay glass-overlay absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
        style={{ transitionProperty: "opacity, transform" }}
      >
        <p className="text-gold text-sm font-semibold uppercase tracking-wider">{member.specialization}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/90 text-pretty">{member.description}</p>
        <p className="mt-4">
          <Link
            href={bookingHref}
            className="inline-flex items-center justify-center rounded-full border-2 border-gold bg-gold px-6 py-2.5 text-sm font-medium text-background transition-[color,background-color,border-color,opacity] duration-200 hover:bg-gold-hover hover:border-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{ transitionProperty: "color, background-color, border-color, opacity" }}
            aria-label={`Rezervovat termín u ${member.name}`}
          >
            Rezervovat u něj
          </Link>
        </p>
      </div>

      {/* Reduced motion: overlay visible when focused for keyboard users; no animation needed in reduced-motion */}
    </article>
  );
}
