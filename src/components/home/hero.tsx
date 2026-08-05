"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingOrbs } from "@/components/interactive/floating-orbs";
import { siteConfig } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

/** Line-based mask reveal. Padding on the clip prevents descenders / gradient
 *  text from being cut off (the bug where "reality" went missing). */
function HeadingLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28"
    >
      <FloatingOrbs />
      {/* Three stacked radial gradients over ~1.1MP. `translateZ(0)` pins it to
          its own rasterised layer so WebKit paints the gradients once rather
          than re-evaluating them while the hero parallaxes over the top. */}
      <div
        className="pointer-events-none absolute inset-0 bg-mesh"
        style={{ transform: "translateZ(0)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      {/* `willChange: transform` keeps this on its own compositor layer.
          Without it WebKit repaints the hero's text, mesh and orbs together on
          every scroll tick instead of just translating a cached layer. */}
      <motion.div
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="container-x relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mb-8 flex flex-wrap items-center gap-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Open for new projects · 2026
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            A new creative technology studio
          </span>
        </motion.div>

        <h1 className="display-hero max-w-[15ch]">
          <HeadingLine delay={0.3}>We craft</HeadingLine>
          <HeadingLine delay={0.45}>
            dreams into <span className="text-gradient">reality</span>
          </HeadingLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.9 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {siteConfig.name} is a young studio at the meeting point of design,
            engineering and AI. We partner with a handful of ambitious teams at a time —
            and pour everything into their websites, apps and brands.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href="/contact" size="lg">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/services" size="lg" variant="outline">
              What we do
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground md:flex"
      >
        <span>Scroll</span>
        <span className="h-10 w-px overflow-hidden bg-border">
          <motion.span
            className="block h-4 w-px bg-brand"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
