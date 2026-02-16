"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallbackImage, setUseFallbackImage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleCanPlay = () => video.play().catch(() => setUseFallbackImage(true));
    const handleError = () => setUseFallbackImage(true);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    const timeout = setTimeout(() => { if (video.readyState < 2) setUseFallbackImage(true); }, 3000);
    if (video.readyState >= 2) video.play().catch(() => setUseFallbackImage(true));
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden" aria-label="Úvodní sekce">
      <div className="absolute inset-0">
        <Image src="/Assets/barber-interior.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className={"absolute inset-0 transition-opacity duration-500 " + (useFallbackImage ? "opacity-0 pointer-events-none" : "opacity-100")}>
        <video ref={videoRef} autoPlay muted loop playsInline className="h-full w-full object-cover" aria-hidden>
          <source src="/Assets/hero-video.mp" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
          ROMEO'S BARBERSHOP
        </h1>
        <p className="mt-6 text-lg text-white/90 sm:text-xl md:text-2xl">Tradiční pánské holičství v srdci Olomouce</p>
        <p className="mt-3 text-base text-white/80 sm:text-lg">Klasické i moderní střihy · Holení břitvou · Úprava vousů</p>
        <div className="mt-10">
          <a
            href="/rezervace"
            className="cta-animate inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-200 hover:scale-[1.03] hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
          >
            Rezervovat termín
          </a>
        </div>
      </div>
    </section>
  );
}
