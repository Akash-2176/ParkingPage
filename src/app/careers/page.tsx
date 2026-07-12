import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { CareerForm } from "@/components/forms/career-form";
import { Reveal } from "@/components/interactive/reveal";
import { MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Ezura Arc — a small, senior creative technology studio where craft is the point. Open roles in design, engineering and AI.",
};

// Flip to true when hiring reopens — the roles below and the application form
// come back to life without any other changes.
const HIRING_OPEN = false;

const roles = [
  {
    title: "Senior Product Designer",
    type: "Full-time",
    location: "Karur / Remote",
    body: "Own end-to-end product design across web and mobile. You obsess over interaction detail and can defend every decision.",
  },
  {
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Karur / Remote",
    body: "Ship production Next.js and React Native. Type-safe, tested, performance-minded — and you care how it feels, not just that it works.",
  },
  {
    title: "Motion / Creative Developer",
    type: "Contract",
    location: "Remote",
    body: "Bring interfaces to life with GSAP, Framer Motion and the occasional WebGL flourish. You've studied Awwwards, not just browsed it.",
  },
  {
    title: "AI Engineer",
    type: "Full-time",
    location: "Remote",
    body: "Build grounded, evaluated AI features. You know that trust — not novelty — is what makes AI products stick.",
  },
];

const perks = [
  "Small team, huge ownership",
  "Work on award-standard projects",
  "Remote-friendly, outcome-focused",
  "Direct mentorship from the founder",
  "Latest tools & hardware",
  "Time budget for learning",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Craft is the whole point"
        description="We're a small, senior studio that takes fewer projects and pours more into each. If you'd rather do a few things exceptionally than many things adequately — we should talk."
      />

      <section className="container-x py-16 lg:py-24">
        <SectionHeading eyebrow="Why join" title="What you'll get" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p} delay={(i % 3) * 0.06}>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="text-sm text-foreground">{p}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-subtle py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Open roles" title="Where you fit" />
          {HIRING_OPEN ? (
            <div className="mt-12 flex flex-col gap-4">
              {roles.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 0.05}>
                  <div className="group flex flex-col gap-4 rounded-4xl border border-border bg-card p-7 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="font-display text-xl font-semibold text-foreground">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {r.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" /> {r.location}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-12 flex flex-col items-start gap-4 rounded-4xl border border-dashed border-border bg-card p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  No open positions right now
                </span>
                <p className="max-w-2xl text-muted-foreground">
                  We&apos;re a small studio that hires slowly and deliberately. New roles
                  will appear here first — and when they do, the application form below
                  opens with them.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Apply"
            title="Tell us about you"
            description="No cover-letter theatre. Show us something you're proud of and tell us why the studio appeals to you."
          />
          <CareerForm roles={roles.map((r) => r.title)} disabled={!HIRING_OPEN} />
        </div>
      </section>
    </>
  );
}
