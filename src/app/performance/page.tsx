"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BOOK_NOW_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CTASection } from "@/components/CTASection";
import { IMAGES } from "@/lib/images";

const PERFORMANCE_SERVICES = [
  {
    title: "ECU Tuning & Calibration",
    description: "Unlock your engine's full potential with professional ECU tuning. We optimize fuel maps, ignition timing, and boost pressure for maximum performance and drivability.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Exhaust & Intake Systems",
    description: "Free-flowing exhaust systems, high-performance intakes, and downpipe installations. Better airflow means more power, better sound, and improved throttle response.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Suspension Upgrades",
    description: "Coilovers, lowering springs, sway bars, and performance alignment. We dial in your chassis for improved handling, response, and driving feel.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
      </svg>
    ),
  },
  {
    title: "Premium Parts Installation",
    description: "We source and install premium aftermarket and OEM performance parts — from brake kits and wheels to turbo systems and intercoolers. Quality parts, expert installation.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
];

export default function PerformancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-orange/3 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange">
                Performance Division
              </span>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Unlock Your Vehicle&apos;s Full Potential
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                From ECU tuning and exhaust upgrades to full suspension overhauls — Autoelite Performance delivers serious results for serious drivers in Montreal and the West Island.
              </p>
              <a
                href={BOOK_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-base font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-xl hover:shadow-brand-orange/25"
              >
                Book Performance Consultation
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border"
            >
              <Image
                src={IMAGES.performance.hero}
                alt="High-performance sports car — Autoelite Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label="What we offer"
            title="Performance Services"
            subtitle="Serious upgrades backed by expert installation — right here in Montreal."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {PERFORMANCE_SERVICES.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-surface-border bg-surface-card p-6 transition-colors hover:border-brand-orange/40">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{service.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Builds Showcase */}
      <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading label="Our builds" title="Performance Builds" subtitle="A showcase of what we do." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.performance.builds.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
                className="group overflow-hidden rounded-xl border border-surface-border"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={src}
                    alt={`Performance build ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade?"
        subtitle="Book your performance consultation with Autoelite."
        buttonLabel="Book Performance Consultation"
      />
    </>
  );
}
