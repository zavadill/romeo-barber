"use client";

import Marquee from "react-fast-marquee";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/ROMEO'S+BARBERSHOP";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label={`Hodnocení ${rating} z 5 hvězd`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsMarquee() {
  return (
    <Marquee
      speed={24}
      pauseOnHover
      gradient
      gradientColor="#0d0d0d"
      gradientWidth={80}
      className="overflow-hidden py-2"
      aria-label="Recenze z Google – při najetí myší se posun zastaví"
    >
      {[...GOOGLE_REVIEWS, ...GOOGLE_REVIEWS].map((review, i) => (
        <article
          key={`${review.author}-${review.date}-${i}`}
          className="mx-4 w-[min(100%,320px)] min-w-[280px] shrink-0 rounded-xl border border-border bg-card p-6"
        >
          <StarRating rating={review.rating} />
          <p className="mt-4 text-foreground leading-relaxed">&ldquo;{review.text}&rdquo;</p>
          <footer className="mt-4 flex items-center justify-between text-sm text-muted">
            <span>{review.author}</span>
            <span>{review.date}</span>
          </footer>
          <p className="mt-2">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-gold transition-colors">
              <span>Recenze na Google</span>
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </p>
        </article>
      ))}
    </Marquee>
  );
}
