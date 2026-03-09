"use client";

import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CTASection } from "@/components/CTASection";

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
          <div className="mt-14">
            <GalleryGrid showFilters lightbox />
          </div>
        </div>
      </section>

      <BeforeAfterSlider />

      <CTASection />
    </>
  );
}
