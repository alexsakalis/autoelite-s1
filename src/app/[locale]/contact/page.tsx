"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT, BOOK_NOW_URL } from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tc = useTranslations("common");

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            label={t("label")}
            title={t("title")}
            subtitle={t("subtitle")}
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white">{t("formTitle")}</h2>
              <p className="mt-2 text-sm text-text-secondary">
                {t("formSubtitle")}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </motion.div>

            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Contact details */}
              <div className="rounded-2xl border border-surface-border bg-surface-card p-6">
                <h3 className="font-bold text-white">{t("visitUs")}</h3>
                <ul className="mt-4 space-y-3 text-sm text-text-secondary">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {CONTACT.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {CONTACT.hours}
                  </li>
                </ul>
              </div>

              {/* Google Maps placeholder */}
              <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface-card">
                <div className="flex min-h-[220px] items-center justify-center bg-surface-dark text-sm text-text-muted">
                  Google Maps embed placeholder — add your embed code here
                </div>
              </div>

              {/* Prefer to book directly */}
              <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-6">
                <h3 className="font-bold text-white">{t("preferBook")}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {t("preferBookDesc")}
                </p>
                <a
                  href={BOOK_NOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-bold text-brand-black transition-all hover:brightness-110"
                >
                  {tc("bookNow")}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection title={t("preferBook")} subtitle={t("subtitle")} buttonLabel={tc("bookNow")} />
    </>
  );
}
