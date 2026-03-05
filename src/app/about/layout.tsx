import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Autoelite — Family-Owned, 35+ Years Experience",
  description:
    "Family-owned with over 35 years of experience. Precision, performance, and trust — professional automotive service proudly based in Montreal.",
  openGraph: {
    title: "About Autoelite | Family-Owned Auto Service in Montreal",
    description: "Family-owned with 35+ years of automotive expertise. Learn about our story, approach, and commitment to quality.",
  },
  twitter: { card: "summary_large_image", title: "About | Autoelite" },
  alternates: { canonical: "https://autoelite.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
