"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CTASection } from "@/components/CTASection";

export default function GalleryPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="Our work"
            title="Gallery"
            subtitle="Browse our Montreal shop, repairs, performance builds, and before/after projects. Placeholder images — replace with real WebP photos."
          />
          <div className="mt-14">
            <GalleryGrid showFilters lightbox />
          </div>
        </div>
      </section>

      <BeforeAfterSlider />

      <CTASection
        title="Like what you see?"
        subtitle="Book your service and let us take care of your vehicle."
      />
    </>
  );
}
