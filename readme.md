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

## Integrations

These are intentionally stubbed with clear placeholders:

- **Contact & career forms** — wired to **Web3Forms** (public access key in `src/lib/site.ts`). Submissions arrive at the inbox tied to that key. File attachments need aWeb3Forms paid plan, so forms send the filename only.
- **Calendly** — booking links point to `siteConfig.calendly` (`https://calendly.com/hello-ezuraarc`) in the floating dock and contact page.
- **WhatsApp** — wired to `+91 9500264291` via `siteConfig.whatsapp`.

## Still to wire before launch

- **Newsletter** — marked "Coming soon"; flip `COMING_SOON` in
  `src/components/layout/newsletter-form.tsx` and connect your ESP.
- **Careers** — no open roles; flip `HIRING_OPEN` in `src/app/careers/page.tsx`
  to relist roles and re-enable the (already wired) application form.

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
