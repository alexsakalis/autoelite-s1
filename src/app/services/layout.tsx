import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Services in Montreal",
  description:
    "Oil changes, brake service, vehicle diagnostics, suspension, engine repairs, performance upgrades, tire services, and inspections. Autoelite — serving Montreal and the West Island.",
  openGraph: {
    title: "Automotive Services | Autoelite Montreal",
    description: "Professional automotive repairs and performance upgrades in Montreal.",
  },
  twitter: { card: "summary_large_image", title: "Automotive Services | Autoelite" },
  alternates: { canonical: "https://autoelite.com/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
