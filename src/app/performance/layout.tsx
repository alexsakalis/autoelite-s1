import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Upgrades — Tuning, Exhaust, Suspension",
  description:
    "Performance upgrades, suspension work, ECU tuning, exhaust systems, and premium parts installation in Montreal. Book a performance consultation with Autoelite.",
  openGraph: {
    title: "Performance Upgrades | Autoelite Montreal",
    description: "Performance tuning, exhaust, suspension upgrades, and more at Autoelite.",
  },
  twitter: { card: "summary_large_image", title: "Performance | Autoelite" },
  alternates: { canonical: "https://autoelite.com/performance" },
};

export default function PerformanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
