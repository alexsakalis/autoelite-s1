export const BOOK_NOW_URL = "https://autoelite.nava360.com";
export const SITE_URL = "https://autoelite.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  address: "123 Auto Street, Montreal, QC H1A 1A1",
  phone: "(514) 555-0199",
  email: "info@autoelite.com",
  hours: "Mon–Fri: 8am–6pm | Sat: 9am–4pm",
} as const;

export const SOCIALS = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "TikTok", href: "#" },
] as const;

export const SERVICE_AREAS = [
  "Montreal",
  "Vaudreuil-Dorion",
  "Pointe-Claire",
  "Dorval",
  "Beaconsfield",
  "Kirkland",
] as const;
