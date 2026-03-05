"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { IMAGES } from "@/lib/images";

const COMPARISONS = [
  { label: "Suspension Repair", ...IMAGES.beforeAfter.suspension },
  { label: "Brake Job", ...IMAGES.beforeAfter.brakes },
  { label: "Engine Repair", ...IMAGES.beforeAfter.engine },
  { label: "Performance Upgrade", ...IMAGES.beforeAfter.performance },
];

function Slider({ item }: { item: typeof COMPARISONS[number] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(() => { dragging.current = true; }, []);
  const handlePointerUp = useCallback(() => { dragging.current = false; }, []);
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <div className="overflow-hidden rounded-xl border border-surface-border">
      <div className="px-4 py-3 text-sm font-semibold text-white bg-surface-card">{item.label}</div>
      <div
        ref={containerRef}
        className="relative aspect-[16/9] cursor-col-resize select-none bg-surface-dark"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        onClick={(e) => updatePosition(e.clientX)}
      >
        {/* "After" layer (full width background) */}
        <Image
          src={item.after}
          alt={`${item.label} — after repair`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          loading="lazy"
        />

        {/* "Before" layer (clipped to slider position) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.label} — before repair`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
          />
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-brand-orange"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange bg-brand-black/80 text-brand-orange shadow-lg">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 z-10 rounded bg-brand-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 z-10 rounded bg-brand-orange/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-black">
          After
        </span>
      </div>
    </div>
  );
}

type Props = { showHeading?: boolean };

export function BeforeAfterSlider({ showHeading = true }: Props) {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {showHeading && (
          <SectionHeading
            label="Results"
            title="Before & After"
            subtitle="Drag the slider to see the difference our work makes."
          />
        )}
        <div className={`grid gap-6 sm:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          {COMPARISONS.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Slider item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
