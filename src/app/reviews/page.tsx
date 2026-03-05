"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { TESTIMONIALS } from "@/lib/services-data";

export default function ReviewsPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Customers Say"
            subtitle="Real reviews from Montreal-area drivers who trust Autoelite."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} name={t.name} rating={t.rating} text={t.text} index={i} />
            ))}
          </div>

          {/* Google Reviews embed placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-surface-border bg-surface-card p-10 text-center"
          >
            <h2 className="text-2xl font-bold text-white">See more reviews on Google</h2>
            <p className="mt-3 text-sm text-text-secondary">
              Embed your Google Reviews widget here. Add your Google Place ID and embed code.
            </p>
            <div className="mx-auto mt-8 flex min-h-[220px] max-w-3xl items-center justify-center rounded-xl bg-surface-dark text-sm text-text-muted">
              Google Reviews widget placeholder
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-brand-orange px-6 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
            >
              View More Reviews on Google
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Ready to experience Autoelite?"
        subtitle="Join hundreds of satisfied Montreal drivers."
      />
    </>
  );
}
