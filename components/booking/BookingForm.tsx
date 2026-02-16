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

const TIME_SLOTS = ["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

const inputBase =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";
const cardBase =
  "relative flex cursor-pointer flex-col rounded-xl border-2 py-4 px-4 text-left transition-all duration-200 hover:border-gold/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const cardSelected = "border-gold bg-gold/10";
const cardDefault = "border-border bg-background/50";

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [staff, setStaff] = useState("0");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="mx-auto max-w-2xl" aria-live="polite">
      <div className="mb-10 flex flex-wrap justify-between gap-2 border-b border-border pb-6">
        {STEPS.map((s) => (
          <div
            key={s.id}
            className={
              "flex flex-col items-center gap-1 " +
              (s.id === step ? "text-gold" : s.id < step ? "text-muted" : "text-muted opacity-60")
            }
          >
            <span className="text-sm font-medium">
              {s.id}. {s.label}
            </span>
            <div
              className={
                "h-0.5 w-12 rounded-full transition-colors " +
                (s.id === step ? "bg-gold" : s.id < step ? "bg-gold/50" : "bg-border")
              }
            />
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-8">
          <div>
            <p className="mb-4 font-semibold text-foreground">Vyberte službu</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {BOOKING_SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setService(s.id)}
                  className={cardBase + " " + (service === s.id ? cardSelected : cardDefault)}
                  aria-pressed={service === s.id}
                >
                  <span className="font-medium text-foreground">{s.name}</span>
                  <span className="mt-1 text-sm text-muted">{s.duration}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 font-semibold text-foreground">Zaměstnanec</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {BOOKING_STAFF.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setStaff(s.id)}
                  className={cardBase + " " + (staff === s.id ? cardSelected : cardDefault)}
                  aria-pressed={staff === s.id}
                >
                  <span className="font-medium text-foreground">{s.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!service}
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            >
              Následující
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Vyberte datum a čas</p>
          <div>
            <label htmlFor="booking-date" className="mb-2 block text-sm font-medium text-muted">
              Datum
            </label>
            <input
              id="booking-date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={inputBase}
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-muted">Čas</p>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={
                    "rounded-lg border-2 py-2.5 text-sm font-medium transition-all " +
                    (time === t ? "border-gold bg-gold/10 text-gold" : "border-border bg-background/50 text-foreground hover:border-gold/50")
                  }
                  aria-pressed={time === t}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Zpět
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!date || !time}
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            >
              Následující
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Vaše kontaktní údaje</p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="mb-2 block text-sm font-medium text-muted">
                Jméno
              </label>
              <input
                id="booking-name"
                type="text"
                placeholder="Jan Novák"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputBase + " placeholder:text-muted"}
              />
            </div>
            <div>
              <label htmlFor="booking-phone" className="mb-2 block text-sm font-medium text-muted">
                Telefon
              </label>
              <input
                id="booking-phone"
                type="tel"
                placeholder="+420 123 456 789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputBase + " placeholder:text-muted"}
              />
            </div>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Zpět
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold-hover"
            >
              Následující
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Způsob platby</p>
          <div className="border-l-2 border-gold/50 py-4 pl-6">
            <p className="text-muted">{CASH_ONLY_NOTICE}</p>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Zpět
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold-hover"
            >
              Následující
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <p className="font-semibold text-foreground">Zkontrolujte rezervaci</p>
          <div className="border-l-2 border-gold/50 space-y-4 py-4 pl-6">
            {service && (
              <p className="text-foreground">
                <span className="text-muted">Služba:</span>{" "}
                {BOOKING_SERVICES.find((s) => s.id === service)?.name}
              </p>
            )}
            {staff !== "0" && (
              <p className="text-foreground">
                <span className="text-muted">Zaměstnanec:</span> {BOOKING_STAFF.find((s) => s.id === staff)?.name}
              </p>
            )}
            {date && (
              <p className="text-foreground">
                <span className="text-muted">Datum:</span> {new Date(date + "T12:00:00").toLocaleDateString("cs-CZ", { weekday: "short", day: "numeric", month: "long", year: "numeric" })}
              </p>
            )}
            {time && (
              <p className="text-foreground">
                <span className="text-muted">Čas:</span> {time}
              </p>
            )}
            {(name || phone) && (
              <p className="text-foreground">
                <span className="text-muted">Kontakt:</span> {name || "—"} {phone ? ` · ${phone}` : ""}
              </p>
            )}
            <p className="pt-2 text-muted">Pro dokončení vás budeme kontaktovat.</p>
          </div>
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={() => setStep(4)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Zpět
            </button>
            <button
              type="button"
              className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-gold-hover"
            >
              Potvrdit rezervaci
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
