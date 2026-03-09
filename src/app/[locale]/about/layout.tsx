import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Autoelite — Father & Sons, 35+ Years Experience",
  description:
    "A father-and-sons business with over 35 years of experience. Trust, honesty, and quality workmanship — proudly serving Montreal.",
  openGraph: {
    title: "About Autoelite | Father-and-Sons Auto Shop in Montreal",
    description: "Family-owned with 35+ years of automotive expertise. A father-and-sons shop built on trust, hard work, and quality.",
  },
  twitter: { card: "summary_large_image", title: "About | Autoelite" },
  alternates: { canonical: "https://autoelite.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
