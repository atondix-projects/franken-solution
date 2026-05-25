import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { impressumContent } from "@/content/impressum";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Franken Solution – Angaben gemäß § 5 TMG.",
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: "Impressum | Franken Solution",
    description:
      "Impressum von Franken Solution – Angaben gemäß § 5 TMG.",
    url: "/impressum",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Franken Solution",
    description:
      "Impressum von Franken Solution – Angaben gemäß § 5 TMG.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <SiteFrame>
      <PlaceholderPage
        eyebrow={impressumContent.eyebrow}
        title={impressumContent.title}
        description={impressumContent.description}
        notes={impressumContent.notes}
        primaryCta={impressumContent.cta}
      />
    </SiteFrame>
  );
}
