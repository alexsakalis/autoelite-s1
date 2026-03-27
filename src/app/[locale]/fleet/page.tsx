"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { IMAGES } from "@/lib/images";

const FLEET_SERVICES = [
  {
    title: "Fleet Maintenance",
    description: "Scheduled oil changes, brake inspections, tire rotations, and preventative care to keep your entire fleet running at peak reliability.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Commercial Vehicle Servicing",
    description: "Light-duty trucks, vans, and commercial vehicles. We handle the unique needs of commercial fleets with the same quality and precision as our consumer service.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Priority Scheduling",
    description: "Your fleet can't afford downtime. We offer priority scheduling for fleet clients so your vehicles get in, get serviced, and get back on the road fast.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Preventative Maintenance Programs",
    description: "Custom maintenance schedules tailored to your fleet size and usage. Reduce unexpected breakdowns and control operating costs with planned service intervals.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

export default function FleetPage() {
  const t = useTranslations("fleet");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-24 sm:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
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
                {t("title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-6 max-w-xl text-lg text-text-secondary"
              >
                {t("subtitle")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border"
            >
              <Image
                src={IMAGES.fleet.hero}
                alt="Fleet vehicles ready for service"
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

      {/* Fleet Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("servicesLabel")}
            title={t("servicesTitle")}
            subtitle={t("servicesSubtitle")}
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {FLEET_SERVICES.map((service, i) => (
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

      {/* Why Autoelite for Fleet */}
      <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <SectionHeading
            label={t("whyLabel")}
            title={t("whyTitle")}
            subtitle={t("whySubtitle")}
          />
          <FadeIn delay={0.1}>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {[
                { stat: t("stats.vehicles.stat"), label: t("stats.vehicles.label") },
                { stat: t("stats.turnaround.stat"), label: t("stats.turnaround.label") },
                { stat: t("stats.satisfaction.stat"), label: t("stats.satisfaction.label") },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-surface-border bg-surface-card p-6">
                  <p className="text-3xl font-extrabold text-brand-orange">{item.stat}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
