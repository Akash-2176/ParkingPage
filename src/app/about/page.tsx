import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatsSection } from "@/components/home/stats";
import { CtaSection } from "@/components/home/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/interactive/reveal";
import { team, industries } from "@/data/general";
import { FounderAvatar } from "@/components/ui/founder-avatar";
import { siteConfig, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Studio",
  description:
    "Ezura Arc is a creative technology studio blending design, engineering, brand and AI. Meet the people crafting dreams into reality.",
  path: "/about",
});

const values = [
  { title: "Craft over volume", body: "We take fewer projects and pour more into each. Quality is a choice we make daily." },
  { title: "Clarity beats cleverness", body: "The best solution is usually the simplest one that fully solves the problem." },
  { title: "Own the outcome", body: "We measure ourselves by your results, not our deliverables." },
  { title: "Curiosity is the engine", body: "We stay obsessed with what's new — then use only what genuinely serves the work." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The studio"
        title="We turn ambition into interfaces"
        description="Ezura Arc is a creative technology studio. We sit at the intersection of design, engineering, brand and AI — and we exist to help ambitious people build things worth remembering."
      />

      {/* Story */}
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading eyebrow="Our story" title="Born to stand out, not blend in" />
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Modern businesses struggle to stand out in an oversaturated digital space.
              Outdated design, poor UX and generic solutions quietly kill engagement and
              trust. We started Ezura Arc to fix exactly that.
            </p>
            <p>
              We don&apos;t just make apps and websites — we create digital identities that
              convert and connect. Every project blends aesthetic precision with technical
              excellence, and every flagship is built to compete on the platforms that
              define our craft.
            </p>
            <p className="font-display text-xl font-medium text-foreground">
              Our mission: merge creativity and technology to craft digital experiences that
              inspire, engage and deliver real impact.
            </p>
          </div>
        </div>
      </section>

      {/* The name, decoded — the founder's story behind "EzuraArc" */}
      <section className="container-x py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-5xl bg-ink-950 p-8 text-white md:p-14 lg:p-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-50" />
          <div className="relative flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> The name
              </span>
              <h2 className="display-lg text-white">EzuraArc, decoded</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">
                When I sat down to name this studio, I didn&apos;t want a word that already
                existed — I wanted one that carried both where I come from and where
                we&apos;re going. So I fused three.
              </p>
            </div>

            <Stagger className="grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                {
                  word: "எழு",
                  key: "Ezhu · Tamil for rise",
                  body: "My roots — and a daily reminder to get up and build.",
                },
                {
                  word: "Aura",
                  key: "Presence",
                  body: "What great work leaves behind — the vibe you feel before anyone says a word.",
                },
                {
                  word: "Arc",
                  key: "The path of growth",
                  body: "Every arc begins at the bottom. That's where the climb starts.",
                },
              ].map((item) => (
                <StaggerItem key={item.key} className="h-full">
                  <div className="flex h-full flex-col gap-3 bg-ink-950 p-8">
                    {/* inline-block + generous leading/padding: bg-clip-text only
                        paints inside the box, and Tamil descenders (ழு) reach
                        well below the Latin baseline */}
                    <span className="inline-block w-fit pb-[0.25em] -mb-[0.15em] font-display text-5xl font-semibold leading-[1.2] text-gradient">
                      {item.word}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
                      {item.key}
                    </span>
                    <p className="text-sm leading-relaxed text-white/60">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal>
              <div className="flex flex-col gap-8">
                <p className="max-w-3xl font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                  Put them together: EzuraArc — a rise along a path of growth, carried by a
                  presence you can feel. I named us at the bottom of the arc on purpose.
                  From here, the only way is up.
                </p>
                <div className="flex items-center gap-4">
                  <FounderAvatar size={56} className="border-white/20" />
                  <div>
                    <p className="font-medium text-white">{siteConfig.founder}</p>
                    <p className="text-sm text-white/50">Founder</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Values */}
      <section className="bg-subtle py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we believe"
            title="Principles we don't compromise on"
          />
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="flex h-full flex-col gap-3 rounded-4xl border border-border bg-card p-8">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading
          eyebrow="The people"
          title="Meet the team"
          description="A small, senior team led by founder Akash M G. You work directly with the people doing the work."
        />
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group flex h-full flex-col gap-4 rounded-4xl border border-border bg-card p-7 transition-colors hover:border-brand/40">
                {m.image ? (
                  <FounderAvatar size={80} rounded="rounded-3xl" />
                ) : (
                  <div className="grid h-20 w-20 place-items-center rounded-3xl bg-brand-gradient font-display text-2xl font-semibold text-white">
                    {m.initials}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {m.name}
                  </h3>
                  <p className="text-sm text-brand">{m.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Industries */}
      <section className="bg-subtle py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Range, with depth"
            description="We've shipped across regulated, high-stakes and fast-moving industries alike."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-4xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.name} className="flex flex-col gap-2 bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
