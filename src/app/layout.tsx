import type { Metadata, Viewport } from "next";
import { fontDisplay, fontSans } from "./fonts";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { siteGraph } from "@/lib/schema";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { FloatingDock } from "@/components/layout/floating-dock";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { PageTransition } from "@/components/layout/page-transition";
import { HydrationGate } from "@/components/providers/hydration-gate";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Creative Technology Studio`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "creative technology studio",
    "web design agency",
    "web development",
    "mobile app development",
    "UI UX design",
    "brand identity",
    "SaaS development",
    "AI applications",
    "Ezura Arc",
    "Karur",
    "Tamil Nadu",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Creative Technology Studio`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Creative Technology Studio`,
    description: siteConfig.description,
    creator: "@Ezura_Arc",
    images: [siteConfig.ogImage],
  },
  // Canonical is set PER ROUTE via `pageMeta()` in @/lib/site.
  // Declaring it here made every interior page canonicalise to the homepage.
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0E0F14" },
  ],
  width: "device-width",
  initialScale: 1,
};

// The Organization/Person/WebSite graph now lives in @/lib/schema so the same
// @id constants can be referenced from service, blog and case-study pages.

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <head>
        {/*
          Reveal fail-safe. If React hasn't hydrated within 2.5s — broken JS, or
          a phone so slow it may as well be — this adds `no-hydrate`, and
          globals.css then forces every [data-reveal] block visible. The page can
          never end up permanently blank below the hero.
          HydrationGate cancels the timer the moment React is actually running,
          so on any healthy load this never fires.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__ezRevealFailsafe=setTimeout(function(){document.documentElement.classList.add('no-hydrate')},2500);`,
          }}
        />
        {/*
          MUST be a plain <script>, never next/script. next/script defaults to
          strategy="afterInteractive", which injects the tag client-side — so it
          never reaches the static HTML and no AI crawler (they don't run JS)
          ever sees it. This shipped 0 of 32 pages with structured data.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph) }}
        />
      </head>
      <body>
        {/* Analytics placeholder — drop your GA4 / Plausible snippet here. */}
        <ThemeProvider>
          <HydrationGate />
          <LoadingScreen />
          <CustomCursor />
          <SmoothScroll>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </SmoothScroll>
          <FloatingDock />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
