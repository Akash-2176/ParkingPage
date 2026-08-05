import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontDisplay, fontSans } from "./fonts";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/interactive/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { FloatingDock } from "@/components/layout/floating-dock";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { PageTransition } from "@/components/layout/page-transition";

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

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  slogan: siteConfig.tagline,
  foundingDate: siteConfig.incorporated,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CIN",
    value: siteConfig.cin,
  },
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
    jobTitle: siteConfig.founderRole,
    image: `${siteConfig.url}${siteConfig.founderImage}`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "IN",
  },
  sameAs: Object.values(siteConfig.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontDisplay.variable} ${fontSans.variable}`}>
      <body>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Analytics placeholder — drop your GA4 / Plausible snippet here. */}
        <ThemeProvider>
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
