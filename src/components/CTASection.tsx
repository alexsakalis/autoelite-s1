"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BOOK_NOW_URL } from "@/lib/constants";

type Props = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonUrl?: string;
};

export function CTASection({
  title,
  subtitle,
  buttonLabel,
  buttonUrl = BOOK_NOW_URL,
}: Props) {
  const t = useTranslations("cta");
  title = title ?? t("defaultTitle");
  subtitle = subtitle ?? t("defaultSubtitle");
  buttonLabel = buttonLabel ?? t("bookNow");
  return (
    <section className="relative overflow-hidden bg-brand-orange">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-brand-black/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:py-24 lg:px-8"
      >
        <h2 className="text-3xl font-extrabold text-brand-black sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-brand-black/70">{subtitle}</p>
        )}
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-black px-8 py-4 text-lg font-bold text-white transition-all hover:bg-brand-black/90 hover:shadow-xl"
        >
          {buttonLabel}
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
