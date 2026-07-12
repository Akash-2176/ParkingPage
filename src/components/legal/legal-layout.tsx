import { PageHeader } from "@/components/ui/page-header";

export type LegalSection = { heading: string; body: string[] };

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />
      <section className="container-x pb-24 lg:pb-32">
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-10 flex max-w-3xl flex-col gap-10">
          {sections.map((s, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {i + 1}. {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
