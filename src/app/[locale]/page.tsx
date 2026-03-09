"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SocialFeed } from "@/components/SocialFeed";
import { FAQSection } from "@/components/FAQSection";
import { GoogleReviews } from "@/components/GoogleReviews";
import { SERVICES } from "@/lib/services-data";
import { BOOK_NOW_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const SERVICES_PREVIEW = SERVICES.slice(0, 6);

export default function HomePage() {
  const t = useTranslations();

  const WHY_CHOOSE = [
    {
      title: t("whyChoose.items.technicians.title"),
      desc: t("whyChoose.items.technicians.desc"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        </svg>
      ),
    },
    {
      title: t("whyChoose.items.diagnostics.title"),
      desc: t("whyChoose.items.diagnostics.desc"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
    {
      title: t("whyChoose.items.parts.title"),
      desc: t("whyChoose.items.parts.desc"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      title: t("whyChoose.items.performance.title"),
      desc: t("whyChoose.items.performance.desc"),
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <HeroSection
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        primaryLabel={t("hero.bookAppointment")}
        secondaryLabel={t("hero.viewServices")}
        secondaryHref="/services"
        showImage
      />

      {/* Why Choose Autoelite */}
      <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("whyChoose.label")}
            title={t("whyChoose.title")}
            subtitle={t("whyChoose.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-surface-border bg-surface-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("services.label")}
            title={t("services.title")}
            subtitle={t("services.subtitle")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_PREVIEW.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} icon={s.icon} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-orange px-6 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
            >
              {t("services.viewAll")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading={t("midCta.inspection.heading")}
        subtext={t("midCta.inspection.subtext")}
      />

      {/* Before & After */}
      <BeforeAfterSlider />

      {/* Gallery Preview */}
      <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading label={t("gallery.label")} title={t("gallery.title")} />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.gallery.slice(0, 6).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
                className="group overflow-hidden rounded-xl border border-surface-border"
              >
                <div className="aspect-square relative">
                  <Image
                    src={src}
                    alt={`Autoelite work sample ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-bold text-brand-black transition-all hover:brightness-110"
            >
              {t("gallery.viewFull")}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews — Google Reviews */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <GoogleReviews />
        </div>
      </section>

      {/* Mid-page CTA */}
      <MidPageCTA
        heading={t("midCta.topShape.heading")}
        subtext={t("midCta.topShape.subtext")}
        buttonLabel={t("cta.bookAppointment")}
      />

      {/* Social Feed */}
      <SocialFeed />

      {/* Service Areas */}
      <ServiceAreaGrid />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
