export const BOOK_NOW_URL = "https://autoelite.nava360.com";
export const SITE_URL = "https://autoelite.com";

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/23ACC1akBNtaZ2wL9";

export const GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;

export const ELFSIGHT_APP_ID = "0f53bcee-e793-4675-83b4-793000a205b8";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

export const CONTACT = {
  address: "3354 Boul des Sources, Dollard-des-Ormeaux, QC H9B 1Z9",
  phone: "(514) 822-4449",
  email: "info@autoelite.ca",
  hours: "Mon–Fri: 8am–5pm",
} as const;

export const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/autoeliteinc/" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61588411277618" },
  { name: "TikTok", href: "https://www.tiktok.com/@autoeliteddo" },
] as const;

export const SERVICE_AREAS = [
  "Montreal",
  "Dollard-des-Ormeaux",
  "Vaudreuil-Dorion",
  "Pointe-Claire",
  "Dorval",
  "Beaconsfield",
  "Kirkland",
] as const;
