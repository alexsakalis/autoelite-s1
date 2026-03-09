import { CONTACT } from "@/lib/constants";

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Autoelite Performance Centre",
  description:
    "Family-owned automotive repair shop with 35+ years of experience. Professional diagnostics, repairs, and performance upgrades in Montreal.",
  url: "https://autoelite.com",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "3354 Boul des Sources",
    addressLocality: "Dollard-des-Ormeaux",
    addressRegion: "QC",
    postalCode: "H9B 1Z9",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Montreal" },
    { "@type": "City", name: "Dollard-des-Ormeaux" },
    { "@type": "City", name: "Vaudreuil-Dorion" },
    { "@type": "City", name: "Pointe-Claire" },
    { "@type": "City", name: "Dorval" },
    { "@type": "City", name: "Beaconsfield" },
    { "@type": "City", name: "Kirkland" },
  ],
  serviceType: "Automotive Repair",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  image: "https://autoelite.com/logo-full.png",
  priceRange: "$$",
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
