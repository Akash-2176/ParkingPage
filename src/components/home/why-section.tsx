import { whyChoose } from "@/data/general";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/interactive/reveal";

export function WhySection() {
  return (
    <section className="bg-subtle py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Ezura Arc"
          title="A studio, not a factory"
          description="Six reasons ambitious teams choose us over a bigger, blander agency."
        />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <StaggerItem key={w.title} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-card p-8">
                <span className="font-display text-2xl font-semibold text-brand">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {w.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
