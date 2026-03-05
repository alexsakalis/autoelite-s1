"use client";

import { motion } from "framer-motion";
import { SERVICE_AREAS } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreaGrid() {
  return (
    <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Service area"
          title="Areas We Serve"
          subtitle="Serving Montreal and the West Island with professional automotive repair and performance services."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="font-semibold text-white">{area}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          Located in Montreal, Autoelite serves customers across the Greater Montreal Area. Whether you&apos;re in Dorval,
          Pointe-Claire, Vaudreuil, Beaconsfield, or Kirkland — we&apos;re your trusted local auto shop.
        </p>
      </div>
    </section>
  );
}
