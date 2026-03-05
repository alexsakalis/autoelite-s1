import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsHead } from "@/components/AnalyticsHead";
import { StickyMobileBook } from "@/components/StickyMobileBook";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Autoelite Performance & Repair | Trusted Automotive Service in Montreal",
    template: "%s | Autoelite",
  },
  description:
    "Professional automotive repair, diagnostics, and performance upgrades in Montreal. Serving the West Island — Vaudreuil, Dorval, Pointe-Claire & more. Book your appointment online with Autoelite.",
  keywords: [
    "auto repair Montreal",
    "automotive service West Island",
    "car mechanic Vaudreuil",
    "performance upgrades Montreal",
    "brake service Dorval",
    "vehicle diagnostics Pointe-Claire",
  ],
  openGraph: {
    title: "Autoelite Performance & Repair | Trusted Automotive Service",
    description:
      "Professional automotive repair, diagnostics, and performance upgrades. Book your appointment online with Autoelite.",
    type: "website",
    locale: "en_CA",
    siteName: "Autoelite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoelite Performance & Repair",
    description:
      "Professional automotive repair, diagnostics, and performance upgrades in Montreal.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://autoelite.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
        <AnalyticsHead />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileBook />
      </body>
    </html>
  );
}
