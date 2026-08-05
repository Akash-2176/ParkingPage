import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { siteConfig, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Ezura Arc website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      intro="These terms govern your use of our website and services. By engaging with us, you agree to them."
      sections={[
        {
          heading: "Agreement",
          body: [
            `By accessing ${siteConfig.url} or engaging ${siteConfig.legalName} for services, you agree to these terms. If you don't agree, please don't use the site or services.`,
          ],
        },
        {
          heading: "Services & engagements",
          body: [
            "Project scope, deliverables, timelines and fees are defined in a separate proposal or statement of work. Those documents, once signed, take precedence over general marketing content on this site.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Upon full payment, ownership of the final deliverables transfers to the client, except for third-party assets and any pre-existing tools or frameworks we retain rights to. We may showcase completed work in our portfolio unless otherwise agreed.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "Fees, milestones and payment schedules are set out in your engagement agreement. Late payments may pause work until resolved.",
          ],
        },
        {
          heading: "Warranties & liability",
          body: [
            "We deliver our services with professional care and skill. To the extent permitted by law, our liability is limited to the fees paid for the relevant engagement. We are not liable for indirect or consequential losses.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "Both parties agree to keep confidential information shared during an engagement private and to use it only for the purposes of the project.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of India, with jurisdiction in the courts of Tamil Nadu.",
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Email ${siteConfig.email}.`],
        },
      ]}
    />
  );
}
