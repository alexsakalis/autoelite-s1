"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { IMAGES } from "@/lib/images";

const POSTS = IMAGES.social.map((src, i) => ({
  id: i + 1,
  src,
  type: i % 2 === 0 ? "instagram" as const : "tiktok" as const,
}));

export function SocialFeed() {
  return (
    <section className="border-t border-surface-border bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Social"
          title="Follow Our Work"
          subtitle="Stay up to date with our latest repairs, builds, and shop life."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-surface-border"
            >
              <Image
                src={post.src}
                alt={`Autoelite ${post.type} post`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {post.type === "instagram" ? "Instagram" : "TikTok"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-orange/40 hover:bg-surface-dark"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-[9px] font-bold text-white">
              IG
            </span>
            Follow Autoelite on Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-card px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-orange/40 hover:bg-surface-dark"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-black text-[9px] font-bold text-white">
              TK
            </span>
            Watch our repairs on TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
