"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/lib/images";

type Filter = "all" | "repairs" | "shop" | "performance" | "before-after";

const ITEMS = IMAGES.gallery.map((src, i) => ({
  id: i + 1,
  src,
  category: (["repairs", "shop", "performance", "before-after"] as const)[i % 4],
}));

type Props = {
  showFilters?: boolean;
  limit?: number;
  lightbox?: boolean;
};

export function GalleryGrid({ showFilters = true, limit, lightbox = true }: Props) {
  const t = useTranslations("gallery.filters");
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: t("all") },
    { id: "repairs", label: t("repairs") },
    { id: "shop", label: t("shop") },
    { id: "performance", label: t("performance") },
    { id: "before-after", label: t("beforeAfter") },
  ];

  const filtered = filter === "all" ? ITEMS : ITEMS.filter((i) => i.category === filter);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  const openLightbox = useCallback((idx: number) => lightbox && setLightboxIdx(idx), [lightbox]);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setLightboxIdx((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        if (next < 0) return visible.length - 1;
        if (next >= visible.length) return 0;
        return next;
      });
    },
    [visible.length]
  );

  return (
    <>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-brand-orange text-brand-black shadow-lg shadow-brand-orange/20"
                  : "bg-surface-card text-text-secondary hover:bg-surface-dark hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-surface-border bg-surface-card"
              onClick={() => openLightbox(idx)}
            >
              <div className="aspect-square relative">
                <Image
                  src={item.src}
                  alt={`Gallery image — ${item.category}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-brand-orange/0 transition-colors group-hover:bg-brand-orange/10" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-brand-black/80 to-transparent p-4 transition-transform group-hover:translate-y-0">
                <span className="text-xs font-semibold capitalize text-white">{item.category.replace("-", " / ")}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[80vh] w-[90vw] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={visible[lightboxIdx]?.src ?? ""}
                  alt={`Gallery image ${visible[lightboxIdx]?.id}`}
                  fill
                  className="object-cover"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
