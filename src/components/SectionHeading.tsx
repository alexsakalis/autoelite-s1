"use client";

import { motion } from "framer-motion";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ label, title, subtitle, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
