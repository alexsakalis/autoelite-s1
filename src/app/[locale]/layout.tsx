import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
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

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Autoelite Performance Centre | Trusted Automotive Service in Montreal",
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
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Autoelite Performance Centre | Trusted Automotive Service",
    description:
      "Professional automotive repair, diagnostics, and performance upgrades. Book your appointment online with Autoelite.",
    type: "website",
    locale: "en_CA",
    siteName: "Autoelite Performance Centre",
    images: [{ url: "/logo-full.png", width: 1200, height: 630, alt: "Autoelite Performance Centre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoelite Performance Centre",
    description:
      "Professional automotive repair, diagnostics, and performance upgrades in Montreal.",
    images: ["/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://autoelite.com",
  },
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <JsonLd />
        <AnalyticsHead />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileBook />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
