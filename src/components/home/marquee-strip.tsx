import { Marquee } from "@/components/interactive/marquee";

export function MarqueeStrip() {
  const words = [
    "Websites",
    "Web Apps",
    "Mobile Apps",
    "UI/UX",
    "Branding",
    "Ecommerce",
    "SaaS",
    "AI Products",
    "Cloud",
  ];
  return (
    <section className="border-y border-border bg-subtle py-6">
      <Marquee className="text-foreground">
        {words.map((w) => (
          <span key={w} className="flex items-center">
            <span className="px-8 font-display text-2xl font-medium md:text-4xl">{w}</span>
            <span className="text-brand">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
