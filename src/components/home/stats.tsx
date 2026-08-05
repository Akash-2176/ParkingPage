import { Reveal } from "@/components/interactive/reveal";
import { credentials } from "@/data/general";

/**
 * Deliberately static — no count-up animation.
 *
 * The previous version animated from 0, so the pre-hydration HTML read
 * "0 projects delivered / 0% client satisfaction". On a slow connection that
 * is the first thing a prospect saw. These are plain verifiable facts instead
 * of self-awarded scores, and they render identically on the server.
 */
export function StatsSection() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {credentials.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <div className="flex flex-col gap-2 border-l border-border pl-6">
              <span className="font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                {c.value}
              </span>
              <span className="text-sm text-muted-foreground">{c.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
