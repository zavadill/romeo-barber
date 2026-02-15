import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Fotogalerie ROMEO'S BARBERSHOP Olomouc.",
};

export default function GaleriePage() {
  return (
    <article className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <header className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl">Galerie</h1>
        <p className="mt-4 text-lg text-muted">Prostředí a atmosféra ROMEO'S BARBERSHOP</p>
      </header>
      <section className="mt-16" aria-label="Fotografie">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl border border-border bg-card flex items-center justify-center text-muted text-sm">Foto připravujeme</div>
          ))}
        </div>
      </section>
    </article>
  );
}
