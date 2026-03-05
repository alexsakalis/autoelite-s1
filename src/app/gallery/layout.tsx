import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Repairs, Performance & Shop Photos",
  description:
    "Browse photos of our Montreal shop, repairs, performance builds, and before/after projects at Autoelite.",
  openGraph: {
    title: "Gallery | Autoelite Montreal",
    description: "Autoelite workshop and project gallery.",
  },
  twitter: { card: "summary_large_image", title: "Gallery | Autoelite" },
  alternates: { canonical: "https://autoelite.com/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
