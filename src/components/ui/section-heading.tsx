import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/interactive/reveal";
import { TextReveal } from "@/components/interactive/text-reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <TextReveal
        as="h2"
        text={title}
        className={cn(
          "display-lg max-w-4xl",
          align === "center" && "justify-center",
          titleClassName
        )}
      />
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
