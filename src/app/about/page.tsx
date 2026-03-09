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

export default function AboutPage() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"
          >
            A Father-and-Sons Shop<br className="hidden sm:block" /> Built on Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            Family-owned and proudly serving Montreal with over 35 years of experience.
          </motion.p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <p className="text-lg leading-relaxed text-text-secondary">
                At Autoelite, cars have always been part of our family. As a father-and-sons business, we&apos;ve built this shop on shared values: hard work, honesty, attention to detail, and pride in doing the job right.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                We know that bringing your vehicle to a repair shop is about more than service — it&apos;s about trust. That&apos;s why we work hard to give every customer the kind of experience we would want for our own family: clear communication, honest advice, and quality repairs that last.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                From diagnostics and maintenance to repairs and performance work, we&apos;re proud to serve Montreal with the personal care and commitment that only a family business can offer.
              </p>

              <div className="mt-10 flex items-center gap-6 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  <span className="text-2xl font-extrabold">35+</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Family-Owned. Built on Experience.</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                    For over 35 years, our family&apos;s passion for cars and commitment to quality work has helped shape everything we do.
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
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Story</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                Autoelite was built on a shared passion between father and sons — a passion for cars, hard work, and building something meaningful together.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                What started with years of hands-on automotive experience grew into a family-run business founded on trust, pride, and a commitment to quality. For us, this shop is not just about repairing vehicles — it&apos;s about carrying on a standard of work and customer care that reflects our family name.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Working together as a family allows us to bring a different kind of service to the shop. We understand the value of relationships, loyalty, and treating people properly. That mindset carries into every repair, every diagnostic, and every conversation we have with our customers.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                From routine maintenance to complex repairs and performance work, we take the time to properly inspect, diagnose, and repair every vehicle with care and precision.
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
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">A Shop Built on Trust</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                As a family business, trust is at the center of everything we do.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                We know how important it is to find a repair shop you can rely on, and we never take that for granted. Our team believes in being transparent, explaining repairs clearly, and helping customers understand exactly what their vehicle needs — and just as importantly, what it doesn&apos;t.
              </p>
              <p className="mt-6 font-semibold text-white">
                No unnecessary work. No pressure. No shortcuts. Just honest service, quality workmanship, and the kind of care you expect from a business that puts its family name behind every job.
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
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Facility</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                Our workshop is equipped to handle a wide range of automotive services, including diagnostics, maintenance, repairs, and performance upgrades.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                We use modern diagnostic tools and professional-grade equipment to ensure every repair is completed accurately and efficiently. But beyond the tools, what really sets our shop apart is the pride we take in our work and the family values behind it.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Whether it&apos;s a daily driver, a family vehicle, or a performance car, every job is approached with the same level of attention, care, and professionalism.
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
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Approach</h2>
              <p className="mt-6 leading-relaxed text-text-secondary">
                At Autoelite, we believe in doing more than just fixing the obvious problem.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                When a vehicle comes in for a specific issue, we take the time to inspect it thoroughly and look at the bigger picture. Our goal is to make sure the vehicle leaves not only repaired, but safe, reliable, and properly looked after.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                That mindset comes from years of experience and from the values we&apos;ve built as a father-and-sons business: do the work properly, communicate honestly, and treat every customer with respect.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                That&apos;s how we build long-term relationships — and that&apos;s the standard we bring to every vehicle that comes through our shop.
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
          <p className="mt-3 text-text-secondary">
            A father-and-sons business with 35+ years of experience. Montreal&apos;s trusted shop for automotive repair and service.
          </p>
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
