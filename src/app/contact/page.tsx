import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Ezura Arc. Tell us what you're building — we reply within one business day.",
};

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${siteConfig.whatsapp}`,
    },
    {
      icon: MapPin,
      label: "Studio",
      value: `${siteConfig.address.city}, ${siteConfig.address.state}, India`,
    },
    { icon: Clock, label: "Response time", value: "Within 1 business day" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Let's talk"
        title="Start something remarkable"
        description="Tell us about your project. Whether it's a fully-formed brief or a napkin sketch, we'll help you shape it — and reply within one business day."
      />

      <section className="container-x pb-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col divide-y divide-border rounded-4xl border border-border bg-card">
              {details.map((d) => {
                const content = (
                  <div className="flex items-center gap-4 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="font-medium text-foreground">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="transition-colors hover:bg-subtle"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={d.label}>{content}</div>
                );
              })}
            </div>

            <div className="rounded-4xl border border-border bg-subtle p-6">
              <p className="text-sm font-medium text-foreground">Registered office</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {siteConfig.legalName}
                <br />
                {siteConfig.address.line1},<br />
                {siteConfig.address.line2},<br />
                {siteConfig.address.city}, {siteConfig.address.state} -{" "}
                {siteConfig.address.zip}
              </p>
            </div>

            <div className="rounded-4xl border border-dashed border-border p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Prefer to talk it through?{" "}
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline-offset-2 hover:underline"
                >
                  Book a free discovery call
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
