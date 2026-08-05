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
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
        {credentials.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08} className="min-w-0">
            <div className="flex min-w-0 flex-col gap-2 border-l border-border pl-4 sm:pl-6">
              {/* Word values ("30+ stations") need to be able to break, or they
                  set a min-width wider than a 2-col cell and scroll the page. */}
              <span className="font-display text-2xl font-semibold leading-tight text-foreground [overflow-wrap:anywhere] sm:text-3xl md:text-4xl">
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
