"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const FAQ_ITEMS = [
  {
    q: "How do I book a service?",
    a: "You can book your appointment online anytime through our booking system at autoelite.nava360.com — it takes less than a minute. Alternatively, call us or fill out the contact form and we'll get back to you promptly.",
  },
  {
    q: "Do you offer diagnostics?",
    a: "Yes. We provide comprehensive computer diagnostics to identify check engine lights, drivability issues, and other problems. Our technicians use professional-grade scanning and testing equipment.",
  },
  {
    q: "What vehicles do you service?",
    a: "We service all makes and models — from daily drivers to performance vehicles. Whether you drive a sedan, SUV, truck, or a tuned sports car, we have the expertise and parts to handle it.",
  },
  {
    q: "Do you provide performance upgrades?",
    a: "Absolutely. We offer a full range of performance services including ECU tuning, intake and exhaust upgrades, suspension enhancements, and premium parts installation. Visit our Performance page for details.",
  },
  {
    q: "How long does a repair usually take?",
    a: "Most routine services (oil changes, brake pads, diagnostics) are completed within the same day. More involved work like engine repairs or performance builds can take 2–5 business days depending on parts availability and scope.",
  },
  {
    q: "Do you serve customers outside of Montreal?",
    a: "Yes — we serve Montreal and the surrounding West Island area including Vaudreuil-Dorion, Pointe-Claire, Dorval, Beaconsfield, and Kirkland. Customers regularly drive to us from across the region.",
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-surface-border"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-text-secondary">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our services."
        />
        <div className="mt-14">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
