import { Counter } from "@/components/ui/counter";
import { stats } from "@/data/general";
import { Reveal } from "@/components/interactive/reveal";

export function StatsSection() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="flex flex-col gap-2 border-l border-border pl-6">
              <span className="font-display text-5xl font-semibold text-foreground md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} prefix={"prefix" in s ? s.prefix : ""} />
              </span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
