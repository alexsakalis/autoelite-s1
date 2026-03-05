import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Autoelite — Get in Touch or Book Online",
  description:
    "Get in touch or book your appointment at Autoelite in Montreal. Contact us for service inquiries, diagnostics, and performance upgrades.",
  openGraph: {
    title: "Contact | Autoelite Montreal",
    description: "Contact Autoelite or book your appointment online.",
  },
  twitter: { card: "summary_large_image", title: "Contact | Autoelite" },
  alternates: { canonical: "https://autoelite.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
