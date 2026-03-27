"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/FadeIn";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { IMAGES } from "@/lib/images";

export default function AboutPage() {
  const t = useTranslations("about");
  const approachPoints = [
    t("approachPoints.0"),
    t("approachPoints.1"),
    t("approachPoints.2"),
    t("approachPoints.3"),
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero-gradient py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-orange/3 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange"
          >
            {t("label")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            {t("heroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <p className="text-lg leading-relaxed text-text-secondary">
                {t("intro1")}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                {t("intro2")}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                {t("intro3")}
              </p>

              <div className="mt-10 flex items-center gap-6 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  <span className="text-2xl font-extrabold">35+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t("badgeTitle")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    {t("badgeDesc")}
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                <Image
                  src={IMAGES.about.approach}
                  alt="Autoelite technician performing diagnostics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t("storyTitle")}</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                {t("story1")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("story2")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("story3")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("story4")}
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                <Image
                  src={IMAGES.about.story}
                  alt="Autoelite shop and history"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── A Shop Built on Trust ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right" className="lg:order-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t("trustTitle")}</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                {t("trust1")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("trust2")}
              </p>
              <p className="mt-6 font-semibold text-white">
                {t("trustBold")}
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                <Image
                  src={IMAGES.about.trust}
                  alt="Autoelite technician explaining repairs to customer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Facility ── */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t("facilityTitle")}</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                {t("facility1")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("facility2")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("facility3")}
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                <Image
                  src={IMAGES.about.facility}
                  alt="Inside the Autoelite workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="border-t border-surface-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right" className="lg:order-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t("approachTitle")}</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                {t("approach1")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("approach2")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("approach3")}
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                {t("approach4")}
              </p>
              <ul className="mt-6 space-y-3">
                {approachPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-text-secondary">
                    <svg className="h-5 w-5 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" delay={0.1} className="lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                <Image
                  src={IMAGES.about.approach}
                  alt="Mechanic performing thorough vehicle inspection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <ServiceAreaGrid />

    </>
  );
}
