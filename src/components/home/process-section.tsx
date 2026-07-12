"use client";

import { motion } from "framer-motion";
import { process } from "@/data/general";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="container-x py-24 lg:py-32">
      <SectionHeading
        eyebrow="How we work"
        title="A process built for craft"
        description="Four deliberate phases. No black boxes, no surprises — just steady progress toward something excellent."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-4">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col gap-4 rounded-4xl border border-border bg-card p-7 transition-colors hover:border-brand/40"
          >
            <div className="flex items-center gap-3">
              <span className="font-display text-5xl font-semibold text-brand/20 transition-colors group-hover:text-brand/40">
                {p.step}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            {standalone && (
              <ul className="mt-2 flex flex-col gap-1.5 border-t border-border pt-4">
                {p.outputs.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {o}
                  </li>
                ))}
              </ul>
            )}
            <span className="pointer-events-none absolute right-6 top-6 h-2 w-2 rounded-full bg-brand opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
