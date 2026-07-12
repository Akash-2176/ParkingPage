"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/general";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/interactive/marquee";

export function TechSection() {
  const row1 = techStack.slice(0, 9);
  const row2 = techStack.slice(9);
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our toolkit"
          title="Modern tools, mastered"
          description="We use the best of the modern web — not because it's trendy, but because it lets us ship faster, safer and smoother."
          align="center"
        />
      </div>

      <div className="mt-16 flex flex-col gap-4">
        {[row1, row2].map((row, r) => (
          <Marquee key={r} reverse={r === 1}>
            {row.map((t) => (
              <TechPill key={t.name} name={t.name} category={t.category} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}

function TechPill({ name, category }: { name: string; category: string }) {
  return (
    <motion.div className="mx-2 flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3">
      <span className="h-2 w-2 rounded-full bg-brand" />
      <span className="font-display text-lg font-medium text-foreground">{name}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{category}</span>
    </motion.div>
  );
}
