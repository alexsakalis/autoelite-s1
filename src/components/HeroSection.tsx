"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/lib/images";

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSection({
  title,
  subtitle,
  secondaryLabel,
  secondaryHref,
  showImage = true,
  imageSrc = IMAGES.hero,
  imageAlt = "Autoelite automotive service",
}: HeroSectionProps) {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-orange/3 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange"
          >
            {t("badge")}
          </motion.span>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              {subtitle}
            </p>
          )}

          {secondaryLabel && secondaryHref && (
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                {secondaryLabel}
              </Link>
            </div>
          )}
        </motion.div>

        {showImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-surface-border lg:aspect-square"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
