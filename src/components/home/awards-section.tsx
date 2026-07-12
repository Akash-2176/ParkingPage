export function AwardsSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-60" />
      <div className="container-x relative">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Our ambition
          </span>
          <h2 className="display-lg max-w-3xl text-white">
            We build to compete on the world stage
          </h2>
          <p className="max-w-2xl text-lg text-white/60">
            We&apos;re new — and unapologetically ambitious. Every project is crafted to the
            standard set by Awwwards, CSS Design Awards, The FWA and the Webby Awards, and
            we submit our strongest work to be judged against the best. Recognition is the
            goal; craft is the method.
          </p>
        </div>
      </div>
    </section>
  );
}
