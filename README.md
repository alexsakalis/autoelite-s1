# Autoelite — Premium Automotive Service Website

A modern, high-converting marketing website for Autoelite, built with **Next.js 14** (App Router), **TypeScript**, **TailwindCSS**, **Framer Motion**, and **React Hook Form + Zod**.

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 14 (App Router)             |
| Language     | TypeScript                          |
| Styling      | TailwindCSS                         |
| Animations   | Framer Motion                       |
| Forms        | React Hook Form + Zod               |
| Deployment   | Vercel                              |

## Brand

- **Orange**: `#FF6A00`
- **Black**: `#0B0B0F`
- **Dark Gray**: `#1A1A1A`
- **Light Gray**: `#A0A0A0`
- **Off-white**: `#F5F5F5`

## Pages

| Route      | Description                                           |
| ---------- | ----------------------------------------------------- |
| `/`        | Home — hero, why choose us, services, gallery, reviews, CTA |
| `/services`| Services — full grid of 8 services + top CTA banner   |
| `/gallery` | Gallery — filterable grid with lightbox viewer         |
| `/about`   | About — story, mission, workshop, team                 |
| `/reviews` | Reviews — testimonial grid + Google embed placeholder  |
| `/contact` | Contact — form (validated), info, maps, book CTA       |

## Primary CTA

All "Book Now" buttons across the site link to **https://autoelite.nava360.com** and open in a new tab.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
```

Deploy to Vercel. Update `SITE_URL` in `src/lib/constants.ts` with your production domain.

## Placeholder Content

- **Images**: All image sections use gradient placeholders. Replace with real images using `next/image`.
- **Contact form**: Logs to console — wire to your API or form service (Formspree, Resend, etc.).
- **Google Maps / Reviews**: Placeholder blocks — add your embed code when ready.
- **Social links**: Placeholder `#` hrefs — replace with real social URLs.

## Project Structure

```
src/
├── app/              # Pages and layouts (App Router)
│   ├── layout.tsx    # Root layout (Navbar + Footer)
│   ├── page.tsx      # Home page
│   ├── services/     # Services page
│   ├── gallery/      # Gallery page
│   ├── about/        # About page
│   ├── reviews/      # Reviews page
│   ├── contact/      # Contact page
│   ├── sitemap.ts    # Auto-generated sitemap
│   └── robots.ts     # Robots.txt
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── ServiceIcon.tsx
│   ├── GalleryGrid.tsx
│   ├── TestimonialCard.tsx
│   ├── CTASection.tsx
│   ├── SectionHeading.tsx
│   ├── ContactForm.tsx
│   └── FadeIn.tsx
└── lib/              # Constants and data
    ├── constants.ts
    └── services-data.ts
```
# autoelite-s1
