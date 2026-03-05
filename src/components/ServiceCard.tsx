"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceIcon } from "./ServiceIcon";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  index?: number;
};

export function ServiceCard({
  title,
  description,
  icon,
  href = "/services",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link
        href={href}
        className="flex h-full flex-col rounded-2xl border border-surface-border bg-surface-card p-6 transition-colors hover:border-brand-orange/40 hover:bg-surface-dark"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange/20">
          <ServiceIcon icon={icon} />
        </div>
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-orange">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
        <span className="mt-auto flex items-center gap-1 pt-5 text-xs font-semibold uppercase tracking-wider text-brand-orange opacity-0 transition-opacity group-hover:opacity-100">
          Learn more
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}
