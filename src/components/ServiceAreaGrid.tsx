"use client";

import { motion } from "framer-motion";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreaGrid() {
  return (
    <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
            Service Area
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Proudly Serving Montreal &amp; the West Island
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {SERVICE_AREAS.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-card px-5 py-2.5 text-sm font-medium text-white"
            >
              <svg className="h-3.5 w-3.5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-sm leading-relaxed text-text-secondary"
        >
          Conveniently located in Dollard-des-Ormeaux, we serve drivers across the Greater Montreal Area.
        </motion.p>
      </div>
    </section>
  );
}
