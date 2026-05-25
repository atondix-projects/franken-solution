import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { datenschutzContent } from "@/content/datenschutz";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Franken Solution – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: "Datenschutzerklärung | Franken Solution",
    description:
      "Datenschutzerklärung von Franken Solution – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
    url: "/datenschutz",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutzerklärung | Franken Solution",
    description:
      "Datenschutzerklärung von Franken Solution – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <SiteFrame>
      <PlaceholderPage
        eyebrow={datenschutzContent.eyebrow}
        title={datenschutzContent.title}
        description={datenschutzContent.description}
        notes={datenschutzContent.notes}
        primaryCta={datenschutzContent.cta}
      />
    </SiteFrame>
  );
}
