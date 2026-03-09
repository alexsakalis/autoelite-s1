"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GoogleReviews } from "@/components/GoogleReviews";
import { CTASection } from "@/components/CTASection";

export default function ReviewsPage() {
  const t = useTranslations("reviews");

  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GoogleReviews />
          </motion.div>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        subtitle={t("ctaSubtitle")}
      />
    </>
  );
}
