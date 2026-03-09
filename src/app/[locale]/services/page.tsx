"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BOOK_NOW_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { FAQSection } from "@/components/FAQSection";

export default function ServicesPage() {
  const t = useTranslations("services");
  const tc = useTranslations("common");
  const midT = useTranslations("midCta");

  return (
    <>
      {/* Top CTA banner */}
      <div className="bg-brand-orange">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-3.5 sm:flex-row lg:px-8">
          <p className="text-sm font-semibold text-brand-black">
            {t("bannerText")}
          </p>
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-black/90"
          >
            {tc("bookNow")}
          </a>
        </div>
      </div>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitleFull")}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
                icon={s.icon}
                index={i}
                href="/services"
              />
            ))}
          </div>
        </div>
      </section>

      <MidPageCTA
        heading={midT("performance.heading")}
        subtext={midT("performance.subtext")}
        buttonLabel="View Performance"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-text-secondary leading-relaxed">
            Autoelite is your trusted auto repair shop in <strong className="text-white">Montreal</strong>. We proudly serve drivers from{" "}
            <strong className="text-white">Vaudreuil-Dorion</strong>, <strong className="text-white">Pointe-Claire</strong>,{" "}
            <strong className="text-white">Dorval</strong>, <strong className="text-white">Beaconsfield</strong>,{" "}
            <strong className="text-white">Kirkland</strong>, and throughout the West Island. From oil changes and brake service to full engine rebuilds and performance upgrades — we do it all with quality parts and honest pricing.
          </p>
        </div>
      </section>

      <FAQSection />

      <CTASection />
    </>
  );
}
