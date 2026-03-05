import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews — What Montreal Drivers Say",
  description:
    "Real reviews from real Montreal drivers. See why customers trust Autoelite for automotive repairs and performance upgrades.",
  openGraph: {
    title: "Reviews | Autoelite Montreal",
    description: "Customer testimonials and reviews for Autoelite automotive service.",
  },
  twitter: { card: "summary_large_image", title: "Reviews | Autoelite" },
  alternates: { canonical: "https://autoelite.com/reviews" },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
