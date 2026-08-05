import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig, navLinks } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { TextReveal } from "@/components/interactive/text-reveal";

const serviceLinks = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
];

const companyLinks = [
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Process", href: "/process" },
  { label: "Careers", href: "/careers" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-subtle">
      {/* CTA band */}
      <div className="container-x py-24 lg:py-32">
        <div className="flex flex-col items-start gap-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Let&apos;s build something remarkable
          </span>
          <TextReveal
            as="h2"
            text="Have an idea? Let's craft it."
            className="display-xl max-w-4xl"
          />
          <p className="max-w-xl text-lg text-muted-foreground">
            Tell us where you want to go. We&apos;ll design the route, engineer the
            vehicle, and get you there — beautifully.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/portfolio" size="lg" variant="outline">
              View our work
            </Button>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="border-t border-border">
        <div className="container-x grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-5 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. A creative technology studio blending design,
              engineering and AI.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" /> {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center gap-2.5 hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> {siteConfig.phone}
              </a>
              <span className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                  {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                  {siteConfig.address.zip}
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Services
            </p>
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Studio
            </p>
            {companyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              Newsletter
              <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-medium normal-case tracking-normal text-brand">
                Coming soon
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              Design, engineering and AI notes. Once a month. No noise.
            </p>
            <NewsletterForm />
            <div className="mt-2 flex gap-3">
              {Object.entries(siteConfig.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-xs capitalize text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  aria-label={name}
                >
                  {name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            <span className="mt-1 block text-xs text-muted-foreground/80">
              CIN: {siteConfig.cin}
            </span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand">
              Terms
            </Link>
            <span className="hidden md:inline">Crafted in Karur, India</span>
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-8 mt-4 whitespace-nowrap text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-foreground/[0.03]">
          EZURA ARC
        </p>
      </div>
    </footer>
  );
}
