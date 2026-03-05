"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BOOK_NOW_URL } from "@/lib/constants";
import { FadeIn } from "@/components/FadeIn";
import { ServiceAreaGrid } from "@/components/ServiceAreaGrid";
import { IMAGES } from "@/lib/images";

const APPROACH_POINTS = [
  "Thorough diagnostics",
  "Honest recommendations",
  "Quality parts and workmanship",
  "Clear communication with customers",
];

const CONTENT_SECTIONS = [
  {
    title: "Our Story",
    paragraphs: [
      "Autoelite was built from a passion for automotive excellence and a commitment to doing things the right way.",
      "With years of hands-on experience in the industry, our team understands that modern vehicles require more than basic mechanical knowledge. Today\u2019s cars demand advanced diagnostics, proper inspection procedures, and skilled technicians who know how to identify the real cause of a problem \u2014 not just treat the symptoms.",
      "From routine maintenance to complex repairs, we take the time to properly inspect, diagnose, and repair every vehicle with precision.",
    ],
    image: IMAGES.about.story,
    imageAlt: "Autoelite shop and history",
  },
  {
    title: "A Shop Built on Trust",
    paragraphs: [
      "We understand that bringing your vehicle to a repair shop requires trust. That\u2019s why transparency is at the core of everything we do.",
      "Our team takes the time to explain the issue, the repair process, and the options available so you can make informed decisions about your vehicle.",
    ],
    bold: "No unnecessary work. No shortcuts. Just professional automotive service you can rely on.",
    image: IMAGES.about.trust,
    imageAlt: "Autoelite technician explaining repairs to customer",
  },
  {
    title: "Our Facility",
    paragraphs: [
      "Our workshop is equipped to handle a wide range of automotive services, including diagnostics, maintenance, repairs, and performance upgrades.",
      "We work with modern diagnostic tools and industry-standard equipment to ensure repairs are performed accurately and efficiently.",
      "Whether it\u2019s a daily driver or a performance vehicle, we ensure every job is completed to the highest standard.",
    ],
    image: IMAGES.about.facility,
    imageAlt: "Inside the Autoelite workshop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero-gradient py-24 sm:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-orange/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-orange/3 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange"
          >
            About us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            About Autoelite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-xl font-semibold text-white/90"
          >
            Precision. Performance. Trust.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            Family-owned with over 35 years of experience — proudly based in Montreal.
          </motion.p>
        </div>
      </section>

      {/* ── Intro + family badge ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <p className="text-lg leading-relaxed text-text-secondary">
                At Autoelite, we believe automotive service should be built on trust, expertise, and attention to detail. Every vehicle that enters our shop is treated with the same level of care and precision we would expect for our own.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Located in the Montreal area, Autoelite provides professional diagnostics, maintenance, and performance-focused repairs for drivers who want their vehicles serviced properly the first time.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                Our goal is simple: deliver reliable service, honest diagnostics, and quality workmanship — every time.
              </p>

              <div className="mt-10 flex items-center gap-6 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  <span className="text-2xl font-extrabold">35+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Family-Owned. Over 35 Years of Experience.</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    Our passion for cars runs deep — and it shows in every job we deliver.
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

      {/* ── Content Sections (alternating) ── */}
      {CONTENT_SECTIONS.map((section, i) => (
        <section
          key={section.title}
          className={`py-20 sm:py-24 ${i % 2 === 0 ? "bg-surface" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <FadeIn
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{section.title}</h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="mt-4 leading-relaxed text-text-secondary">{p}</p>
                ))}
                {"bold" in section && section.bold && (
                  <p className="mt-4 font-semibold text-white">{section.bold}</p>
                )}
              </FadeIn>
              <FadeIn
                direction={i % 2 === 0 ? "right" : "left"}
                delay={0.1}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-surface-border">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
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
      ))}

      {/* ── Our Approach (special section with checklist) ── */}
      <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right" className="lg:order-2">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Approach</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                Many shops focus only on the immediate issue. At Autoelite, we believe in complete vehicle inspections and preventative thinking.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                If a vehicle comes in for a specific concern, we make sure to look beyond the obvious. Our technicians inspect related components to ensure the vehicle leaves the shop safe, reliable, and properly repaired.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                This attention to detail is what allows us to build long-term relationships with our customers.
              </p>
              <ul className="mt-6 space-y-3">
                {APPROACH_POINTS.map((point) => (
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

      {/* ── Bottom CTA ── */}
      <section className="border-t border-surface-border py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-white">Ready to experience the Autoelite difference?</h2>
          <p className="mt-3 text-text-secondary">Family-owned. 35+ years of experience. Montreal&apos;s trusted shop for automotive repair and performance.</p>
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-8 py-4 font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25"
          >
            Book Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
