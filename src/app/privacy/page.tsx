import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Ezura Arc collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="July 2026"
      intro="Your privacy matters to us. This policy explains what we collect, why, and the control you have over your information."
      sections={[
        {
          heading: "Who we are",
          body: [
            `${siteConfig.legalName} ("Ezura Arc", "we", "us") operates ${siteConfig.url}. For any privacy questions, reach us at ${siteConfig.email}.`,
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect information you give us directly — such as your name, email, company and message when you use our contact, quote or careers forms.",
            "We also collect limited technical data automatically, such as your browser type, device and pages visited, to understand and improve how our site performs.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "To respond to enquiries and provide our services; to improve our website and offerings; and to send occasional updates if you've opted in. We never sell your personal data.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "We use essential cookies to run the site and, with your consent, analytics cookies to measure usage. You can manage your choice at any time via the cookie banner or your browser settings.",
          ],
        },
        {
          heading: "Data retention & security",
          body: [
            "We keep personal data only as long as necessary for the purposes above, and protect it with reasonable technical and organisational measures.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `You may request access to, correction of, or deletion of your personal data. To exercise any right, email ${siteConfig.email} and we'll respond promptly.`,
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. Material changes will be reflected by the 'last updated' date above.",
          ],
        },
      ]}
    />
  );
}
