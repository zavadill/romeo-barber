export const SITE = {
  name: "ROMEO'S BARBERSHOP",
  url: "https://romeosbarber.cz",
  address: "Schweitzerova 39, 779 00 Olomouc",
  phone: "+420 723 371 784",
  phoneRaw: "+420723371784",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Domů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const OPENING_HOURS = {
  weekdays: "Pondělí – Pátek: 9:30 – 19:00",
  weekend: "Sobota – Neděle: 9:30 – 18:00",
} as const;

export const PRICE_LIST = [
  { name: "Klasický střih", price: "600 Kč" },
  { name: "Vlasy + vousy", price: "1 000 Kč" },
  { name: "Strojek (jeden nástavec) + vousy", price: "800 Kč" },
  { name: "Úprava vousů a zaholení", price: "450 Kč" },
  { name: "Úprava vousů a barvení", price: "850 Kč" },
  { name: "Full servis (Vlasy + vousy + barva)", price: "1 350 Kč" },
  { name: "Dětský střih (do 10 let)", price: "450 Kč" },
  { name: "Vlasy + cover", price: "1 000 Kč" },
] as const;

export const GIFT_VOUCHERS = {
  values: ["400 Kč", "1 000 Kč", "1 400 Kč"],
  validity: "6 měsíců",
  note: "Dárkové poukázky jsou k dostání v holičství.",
} as const;

export const TEAM = ["Alfredo", "Jarda", "Kuba"] as const;

export const CASH_ONLY_NOTICE =
  "Platba je možná pouze v hotovosti." as const;

export const BOOKING_SERVICES = [
  { id: "1", name: "Klasický střih", duration: "45 min" },
  { id: "2", name: "Vlasy + vousy", duration: "1 h" },
  { id: "3", name: "Strojek (jeden nástavec) + vousy", duration: "45 min" },
  { id: "4", name: "Úprava vousů a zaholení", duration: "30 min" },
  { id: "5", name: "Úprava vousů a barvení", duration: "45 min" },
  { id: "6", name: "Vlasy + vousy + barva (full servis)", duration: "1 h 15 min" },
  { id: "7", name: "Dětský střih do 12ti let", duration: "30 min" },
  { id: "8", name: "Vlasy + cover", duration: "1 h" },
] as const;

export const BOOKING_STAFF = [
  { id: "0", name: "Libovolné" },
  { id: "1", name: "Alfredo" },
  { id: "2", name: "Jarda" },
  { id: "3", name: "Kuba" },
] as const;
