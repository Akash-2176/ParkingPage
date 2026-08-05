import { LogoMark } from "@/components/logo";
import { Reveal } from "@/components/interactive/reveal";
import { TextReveal } from "@/components/interactive/text-reveal";
import { siteConfig } from "@/lib/site";
import { FounderAvatar } from "@/components/ui/founder-avatar";

export function FounderNote() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="relative overflow-hidden rounded-5xl border border-border bg-subtle p-8 md:p-14 lg:p-20">
        <LogoMark className="absolute -right-10 -top-10 h-56 w-56 opacity-[0.06]" />
        <div className="relative flex max-w-3xl flex-col gap-8">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> A note from the founder
          </span>
          <TextReveal
            as="h2"
            text="Why start with a young studio?"
            className="display-lg"
          />
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
            <Reveal>
              <p>
                We won&apos;t pretend to be older or bigger than we are. Ezura Arc is new —
                and that&apos;s exactly why the work is so good. You get the founder in the
                room, a team that takes on only a few projects at a time, and an obsession
                with craft that established agencies quietly lost somewhere along the way.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Every client we take on shapes who we become. So we treat your project like
                it&apos;s the one that puts us on the map — because, honestly, it might be.
                That&apos;s a level of care no line item can buy.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 pt-2">
              <FounderAvatar />
              <div>
                <p className="font-medium text-foreground">{siteConfig.founder}</p>
                <p className="text-sm text-muted-foreground">Founder, {siteConfig.name}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
