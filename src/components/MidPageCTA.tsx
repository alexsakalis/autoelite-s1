"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BOOK_NOW_URL } from "@/lib/constants";

type Props = {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
};

export function MidPageCTA({
  heading = "Need your vehicle inspected?",
  subtext = "Book your service today.",
  buttonLabel,
}: Props) {
  const t = useTranslations("cta");
  buttonLabel = buttonLabel ?? t("bookAppointment");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-y border-surface-border bg-surface py-12"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">{heading}</h3>
          <p className="mt-1 text-sm text-text-secondary">{subtext}</p>
        </div>
        <a
          href={BOOK_NOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-brand-orange px-6 py-3 text-sm font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25"
        >
          {buttonLabel}
        </a>
      </div>
    </motion.section>
  );
}
