"use client";

import { useState } from "react";
import { BOOKING_SERVICES, BOOKING_STAFF, CASH_ONLY_NOTICE } from "@/lib/constants";

const STEPS = [
  { id: 1, label: "Servis" },
  { id: 2, label: "Čas" },
  { id: 3, label: "Detaily" },
  { id: 4, label: "Platba" },
  { id: 5, label: "Potvrdit" },
];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [staff, setStaff] = useState("0");

  return (
    <div className="mx-auto max-w-2xl" aria-live="polite">
      <div className="mb-10 flex flex-wrap justify-between gap-2 border-b border-border pb-6">
        {STEPS.map((s) => (
          <div key={s.id} className={"flex flex-col items-center gap-1 " + (s.id === step ? "text-gold" : s.id < step ? "text-muted" : "text-muted opacity-60")}>
            <span className="text-sm font-medium">{s.id}. {s.label}</span>
            <div className={"h-0.5 w-12 rounded-full transition-colors " + (s.id === step ? "bg-gold" : s.id < step ? "bg-gold/50" : "bg-border")} />
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Prosím vyberte si službu:</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-service" className="mb-2 block text-sm font-medium text-muted">Služba</label>
              <select id="booking-service" value={service} onChange={(e) => setService(e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                <option value="">Vyberte službu</option>
                {BOOKING_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>{s.name} ({s.duration})</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="booking-staff" className="mb-2 block text-sm font-medium text-muted">Zaměstnanec</label>
              <select id="booking-staff" value={staff} onChange={(e) => setStaff(e.target.value)} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                {BOOKING_STAFF.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <button type="button" onClick={() => setStep(2)} disabled={!service} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover disabled:opacity-50 disabled:cursor-not-allowed">
              Následující
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Vyberte datum a čas:</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-date" className="mb-2 block text-sm font-medium text-muted">Datum</label>
              <input id="booking-date" type="date" min={new Date().toISOString().split("T")[0]} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="booking-time" className="mb-2 block text-sm font-medium text-muted">Čas</label>
              <select id="booking-time" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                {["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" onClick={() => setStep(1)} className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:text-gold">Zpět</button>
            <button type="button" onClick={() => setStep(3)} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover">Následující</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Vaše kontaktní údaje:</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="mb-2 block text-sm font-medium text-muted">Jméno</label>
              <input id="booking-name" type="text" placeholder="Jan Novák" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="booking-phone" className="mb-2 block text-sm font-medium text-muted">Telefon</label>
              <input id="booking-phone" type="tel" placeholder="+420 123 456 789" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" />
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" onClick={() => setStep(2)} className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:text-gold">Zpět</button>
            <button type="button" onClick={() => setStep(4)} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover">Následující</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Způsob platby</p>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-muted">{CASH_ONLY_NOTICE}</p>
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" onClick={() => setStep(3)} className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:text-gold">Zpět</button>
            <button type="button" onClick={() => setStep(5)} className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover">Následující</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Zkontrolujte rezervaci</p>
          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <p className="text-muted">Rezervace je připravena. Pro dokončení vás budeme kontaktovat.</p>
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" onClick={() => setStep(4)} className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:text-gold">Zpět</button>
            <button type="button" className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover">Potvrdit rezervaci</button>
          </div>
        </div>
      )}
    </div>
  );
}
