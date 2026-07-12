import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/interactive/reveal";
import { TextReveal } from "@/components/interactive/text-reveal";
import { FloatingOrbs } from "@/components/interactive/floating-orbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 lg:pt-52 lg:pb-24">
      <FloatingOrbs />
      <div className="container-x relative">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        {/* Full container width (no max-w) so long single words like
            "Development" fit at hero scale — the word-mask reveal clips
            anything wider than the headline's box */}
        <TextReveal
          as="h1"
          text={title}
          className="mt-6 display-hero"
        />
        {description && (
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
