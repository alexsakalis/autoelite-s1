# Booking CTA Restoration Guide

All "Book Now" / "Book Appointment" CTAs were temporarily removed.
The component files (`CTASection.tsx`, `MidPageCTA.tsx`, `StickyMobileBook.tsx`) are still in the project — they just aren't imported anywhere.
Below is exactly what to re-add in each file to restore everything.

---

## 1. Layout — Restore StickyMobileBook

**File:** `src/app/[locale]/layout.tsx`

Add import:
```tsx
import { StickyMobileBook } from "@/components/StickyMobileBook";
```

Add `<StickyMobileBook />` after `<Footer />` inside `<NextIntlClientProvider>`:
```tsx
<NextIntlClientProvider messages={messages}>
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
  <StickyMobileBook />   {/* ← add this back */}
</NextIntlClientProvider>
```

---

## 2. Navbar — Restore BOOK NOW Button

**File:** `src/components/Navbar.tsx`

Add import:
```tsx
import { BOOK_NOW_URL } from "@/lib/constants";
```

Add desktop button — insert between `<LanguageSwitcher />` and the hamburger `<button>` inside the `<div className="flex items-center gap-3">`:
```tsx
<a
  href={BOOK_NOW_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25 sm:inline-block"
>
  {t("bookNow")}
</a>
```

Add mobile button — insert at the end of the mobile menu `<div className="space-y-1 px-5 py-4">`, after the nav links map:
```tsx
<a
  href={BOOK_NOW_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 block rounded-lg bg-brand-orange py-3 text-center text-sm font-bold text-brand-black"
>
  {t("bookNow")}
</a>
```

---

## 3. HeroSection — Restore Primary CTA Button

**File:** `src/components/HeroSection.tsx`

Add import:
```tsx
import { BOOK_NOW_URL } from "@/lib/constants";
```

Update the type and props to include:
```tsx
type HeroSectionProps = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;       // ← add
  primaryUrl?: string;         // ← add
  secondaryLabel?: string;
  secondaryHref?: string;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSection({
  title,
  subtitle,
  primaryLabel,               // ← add
  primaryUrl = BOOK_NOW_URL,   // ← add
  secondaryLabel,
  secondaryHref,
  showImage = true,
  imageSrc = IMAGES.hero,
  imageAlt = "Autoelite automotive service",
}: HeroSectionProps) {
  const t = useTranslations("hero");
  const resolvedPrimaryLabel = primaryLabel ?? t("bookAppointment");  // ← add
  const isExternal = primaryUrl.startsWith("http");                   // ← add
```

Replace the button area (where `{secondaryLabel && secondaryHref && ...}` is) with:
```tsx
<div className="mt-10 flex flex-wrap gap-4">
  {isExternal ? (
    <a
      href={primaryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3.5 text-base font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-xl hover:shadow-brand-orange/25"
    >
      {resolvedPrimaryLabel}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  ) : (
    <Link
      href={primaryUrl}
      className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3.5 text-base font-bold text-brand-black transition-all hover:brightness-110"
    >
      {resolvedPrimaryLabel}
    </Link>
  )}
  {secondaryLabel && secondaryHref && (
    <Link
      href={secondaryHref}
      className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-transparent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
    >
      {secondaryLabel}
    </Link>
  )}
</div>
```

---

## 4. Footer — Restore Book Online Button

**File:** `src/components/Footer.tsx`

Add `BOOK_NOW_URL` to the import:
```tsx
import { BOOK_NOW_URL, CONTACT, SOCIALS, SERVICE_AREAS } from "@/lib/constants";
```

Add the button after the tagline `<p>` tag (inside the first grid column, after `{t("tagline")}`):
```tsx
<a
  href={BOOK_NOW_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-block rounded-lg bg-brand-orange px-5 py-2.5 text-sm font-bold text-brand-black transition-all hover:brightness-110"
>
  {t("bookOnline")}
</a>
```

---

## 5. Homepage — Restore CTAs

**File:** `src/app/[locale]/page.tsx`

Add imports:
```tsx
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { BOOK_NOW_URL } from "@/lib/constants";
```

Add `primaryLabel` prop to `<HeroSection>`:
```tsx
<HeroSection
  title={t("hero.title")}
  subtitle={t("hero.subtitle")}
  primaryLabel={t("hero.bookAppointment")}    {/* ← add this */}
  secondaryLabel={t("hero.viewServices")}
  secondaryHref="/services"
  showImage
/>
```

Add first `<MidPageCTA>` after the Services Preview section:
```tsx
<MidPageCTA
  heading={t("midCta.inspection.heading")}
  subtext={t("midCta.inspection.subtext")}
/>
```

Add second `<MidPageCTA>` after the Google Reviews section:
```tsx
<MidPageCTA
  heading={t("midCta.topShape.heading")}
  subtext={t("midCta.topShape.subtext")}
  buttonLabel={t("cta.bookAppointment")}
/>
```

Add `<CTASection />` at the very end (before `</>`):
```tsx
<CTASection />
```

---

## 6. Services Page — Restore CTAs

**File:** `src/app/[locale]/services/page.tsx`

Add imports:
```tsx
import { Link } from "@/i18n/navigation";
import { BOOK_NOW_URL } from "@/lib/constants";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
```

Add `const tc = useTranslations("common");` and `const midT = useTranslations("midCta");`.

Add top CTA banner before the services section:
```tsx
<div className="bg-brand-orange">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-3.5 sm:flex-row lg:px-8">
    <p className="text-sm font-semibold text-brand-black">
      {t("bannerText")}
    </p>
    <a
      href={BOOK_NOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-brand-black px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-black/90"
    >
      {tc("bookNow")}
    </a>
  </div>
</div>
```

Add `<MidPageCTA>` after the services grid section:
```tsx
<MidPageCTA
  heading={midT("performance.heading")}
  subtext={midT("performance.subtext")}
  buttonLabel="View Performance"
/>
```

Add `<CTASection />` at the very end.

---

## 7. Contact Page — Restore CTAs

**File:** `src/app/[locale]/contact/page.tsx`

Add imports:
```tsx
import { CTASection } from "@/components/CTASection";
import { BOOK_NOW_URL } from "@/lib/constants";
```

Add `const tc = useTranslations("common");`.

Add "Prefer to book directly?" card in the info sidebar (after Google Maps placeholder):
```tsx
<div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-6">
  <h3 className="font-bold text-white">{t("preferBook")}</h3>
  <p className="mt-2 text-sm text-text-secondary">
    {t("preferBookDesc")}
  </p>
  <a
    href={BOOK_NOW_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-sm font-bold text-brand-black transition-all hover:brightness-110"
  >
    {tc("bookNow")}
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </a>
</div>
```

Add `<CTASection>` at the end:
```tsx
<CTASection title={t("preferBook")} subtitle={t("subtitle")} buttonLabel={tc("bookNow")} />
```

---

## 8. About Page — Restore Bottom CTA

**File:** `src/app/[locale]/about/page.tsx`

Add imports:
```tsx
import { BOOK_NOW_URL } from "@/lib/constants";
```

Add `const tc = useTranslations("common");`.

Add bottom CTA section before `</>`:
```tsx
<section className="border-t border-surface-border py-20">
  <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
    <h2 className="text-2xl font-bold text-white">{t("ctaTitle")}</h2>
    <p className="mt-3 text-text-secondary">
      {t("ctaSubtitle")}
    </p>
    <a
      href={BOOK_NOW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-8 py-4 font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-lg hover:shadow-brand-orange/25"
    >
      {tc("bookNow")}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  </div>
</section>
```

---

## 9. Reviews Page — Restore CTA

**File:** `src/app/[locale]/reviews/page.tsx`

Add imports:
```tsx
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/CTASection";
```

Add `const t = useTranslations("reviews");` in the component.

Add `<CTASection>` at the end:
```tsx
<CTASection
  title={t("ctaTitle")}
  subtitle={t("ctaSubtitle")}
/>
```

---

## 10. Fleet Page — Restore CTAs

**File:** `src/app/[locale]/fleet/page.tsx`

Add import:
```tsx
import { BOOK_NOW_URL } from "@/lib/constants";
import { CTASection } from "@/components/CTASection";
```

Add hero booking button — insert after the `<motion.p>` subtitle, before the closing `</div>` of the left column:
```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="mt-10"
>
  <a
    href={BOOK_NOW_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-base font-bold text-brand-black transition-all hover:brightness-110 hover:shadow-xl hover:shadow-brand-orange/25"
  >
    {t("requestService")}
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </a>
</motion.div>
```

Add `<CTASection>` at the very end:
```tsx
<CTASection
  title={t("ctaTitle")}
  subtitle={t("ctaSubtitle")}
  buttonLabel={t("requestService")}
/>
```

---

## Translation Keys (already in messages files)

These keys are still present in `messages/en.json` and `messages/fr.json`:
- `nav.bookNow` — "BOOK NOW" / "RÉSERVER"
- `hero.bookAppointment` — "Book Appointment" / "Prendre rendez-vous"
- `cta.defaultTitle`, `cta.defaultSubtitle`, `cta.bookNow`, `cta.bookAppointment`
- `midCta.inspection.*`, `midCta.topShape.*`, `midCta.performance.*`
- `footer.bookOnline` — "Book your appointment online" / "Prenez rendez-vous en ligne"
- `contact.preferBook`, `contact.preferBookDesc`
- `reviews.ctaTitle`, `reviews.ctaSubtitle`
- `fleet.ctaTitle`, `fleet.ctaSubtitle`, `fleet.requestService`
- `about.ctaTitle`, `about.ctaSubtitle`
- `common.bookNow`

## BOOK_NOW_URL

Defined in `src/lib/constants.ts`:
```tsx
export const BOOK_NOW_URL = "https://autoelite.nava360.com";
```
