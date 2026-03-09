"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "fr" : "en";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded-lg border border-surface-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary transition-colors hover:border-brand-orange/40 hover:text-white"
      aria-label={`Switch to ${otherLocale === "fr" ? "French" : "English"}`}
    >
      {otherLocale === "fr" ? "FR" : "EN"}
    </button>
  );
}
