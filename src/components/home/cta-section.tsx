import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/interactive/text-reveal";
import { Reveal } from "@/components/interactive/reveal";
import { siteConfig } from "@/lib/site";

/**
 * Problem-first CTA: the footer band right below speaks to people who already
 * have an idea — this one welcomes those who only have a problem.
 */
export function CtaSection() {
  return (
    <section className="container-x py-12 lg:py-20">
      <div className="relative overflow-hidden rounded-5xl bg-brand-gradient px-8 py-20 text-center md:px-16 lg:py-28">
        <div className="noise absolute inset-0" />
        {/* arc motif */}
        <svg
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 opacity-20"
          aria-hidden
        >
          <circle cx="200" cy="200" r="150" fill="none" stroke="#fff" strokeWidth="3" />
        </svg>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8">
          <TextReveal
            as="h2"
            text="No solution yet? Bring us the problem."
            className="justify-center text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg text-white/85">
              You don&apos;t need a brief, a spec or even an idea. Describe the challenge
              you&apos;re facing — we&apos;ll research it, explore the options and come back
              with a solution crafted for you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-ink-900">
                Describe your problem <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-white underline-offset-4 hover:underline"
              >
                or email {siteConfig.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
