# Ezura Arc — Creative Technology Studio

> Where dreams are crafted to reality.

The production website for **Ezura Arc Private Limited** — an award-standard, animation-rich
marketing site built as a creative technology studio would build its own.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **TailwindCSS** design system with brand tokens
- **Framer Motion** + **GSAP** + **Lenis** smooth scroll
- **React Hook Form** + **Zod** for validated forms
- **next-themes** for dark / light mode
- Dynamic **OpenGraph** images via `next/og`, `sitemap.ts`, `robots.ts`, JSON-LD schema

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
src/
├── app/                  # Routes (App Router)
│   ├── layout.tsx        # Root layout: fonts, SEO, providers, chrome
│   ├── page.tsx          # Home
│   ├── about, services, portfolio, case-studies, industries,
│   │   technologies, process, faq, blog, careers, contact,
│   │   privacy, terms
│   ├── services/[slug]   # Dynamic service pages
│   ├── portfolio/[slug]  # Dynamic case studies
│   ├── blog/[slug]       # Dynamic articles
│   ├── not-found.tsx     # Animated 404
│   ├── sitemap.ts, robots.ts, opengraph-image.tsx
│   └── globals.css       # Design tokens + utilities
├── components/
│   ├── layout/           # Navbar, footer, loading screen, dock, cookie consent
│   ├── interactive/      # Cursor, magnetic, reveal, marquee, tilt, orbs
│   ├── ui/               # Button, badge, cards, pricing, FAQ, counter…
│   ├── home/             # Home page sections
│   ├── forms/            # Contact & career forms
│   ├── portfolio/, tech/, legal/
│   └── providers/        # Theme + Lenis smooth scroll
├── data/                 # services, portfolio, blog, faq, general
└── lib/                  # site config, utils, formatting
```

## Content & data

All content lives in `src/data/*`. Editing a data file updates the site — services,
portfolio case studies, blog posts and FAQs are all data-driven and
CMS-ready (swap the arrays for a headless CMS fetch when you're ready).

Company details (address, phone, email, socials) live in `src/lib/site.ts`.

## Things to wire before launch

These are intentionally stubbed with clear placeholders:

- **Contact & career forms** — `src/components/forms/*` log to console. Connect Resend /
  EmailJS or a Next route handler at the marked `// Placeholder submit`.
- **Newsletter** — `src/components/layout/newsletter-form.tsx`.
- **Analytics** — drop your GA4 / Plausible snippet at the marked spot in `layout.tsx`.
- **Calendly** — links point at `https://calendly.com`; replace with your booking URL.
- **WhatsApp** — already wired to `+91 9500264291` via `siteConfig.whatsapp`.

## Brand

| Token   | Value     |
| ------- | --------- |
| Primary | `#FF5A2E` |
| Dark    | `#434A5C` |
| White   | `#FFFFFF` |
| Light   | `#F7F7F7` |

Display type: **Space Grotesk** · Body: **Inter**.

Accessibility: honours `prefers-reduced-motion`, keyboard focus states, semantic landmarks,
and WCAG-minded contrast.
