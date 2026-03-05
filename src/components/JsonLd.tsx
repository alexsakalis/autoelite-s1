import { CONTACT } from "@/lib/constants";

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Autoelite",
  description:
    "Professional automotive repair, diagnostics, and performance upgrades in Montreal. Trusted by drivers across the West Island.",
  url: "https://autoelite.com",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Auto Street",
    addressLocality: "Montreal",
    addressRegion: "QC",
    postalCode: "H1A 1A1",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Montreal" },
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
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  image: "https://autoelite.com/og-image.jpg",
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
