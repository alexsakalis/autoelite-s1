"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { BOOK_NOW_URL } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_KEYS = [
  { href: "/" as const, key: "home" },
  { href: "/services" as const, key: "services" },
  { href: "/gallery" as const, key: "gallery" },
  { href: "/about" as const, key: "about" },
  { href: "/reviews" as const, key: "reviews" },
  { href: "/contact" as const, key: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-brand-black/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/logo-icon.png"
            alt="Autoelite"
            width={40}
            height={40}
            className="block sm:hidden"
            priority
          />
          <Image
            src="/logo-full.png"
            alt="Autoelite Performance Centre"
            width={240}
            height={52}
            className="hidden sm:block"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_KEYS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-orange"
                      : "text-text-secondary hover:bg-surface-dark hover:text-white"
                  }`}
                >
                  {t(link.key)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25 sm:inline-block"
          >
            {t("bookNow")}
          </a>
          <button
            type="button"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary hover:bg-surface-dark hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-surface-border bg-brand-black md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV_KEYS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-surface-dark text-brand-orange"
                      : "text-text-secondary hover:bg-surface-dark hover:text-white"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <a
                href={BOOK_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-lg bg-brand-orange py-3 text-center text-sm font-bold text-brand-black"
              >
                {t("bookNow")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
