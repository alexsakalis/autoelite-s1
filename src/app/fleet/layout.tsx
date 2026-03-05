import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fleet Services — Commercial Vehicle Maintenance",
  description:
    "Fleet maintenance, commercial vehicle servicing, priority scheduling, and preventative maintenance programs in Montreal. Autoelite keeps your fleet on the road.",
  openGraph: {
    title: "Fleet Services | Autoelite Montreal",
    description: "Commercial fleet maintenance and servicing in Montreal.",
  },
  twitter: { card: "summary_large_image", title: "Fleet Services | Autoelite" },
  alternates: { canonical: "https://autoelite.com/fleet" },
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
