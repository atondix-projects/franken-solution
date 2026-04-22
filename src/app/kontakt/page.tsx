import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { KontaktHero } from "@/components/kontakt/KontaktHero";
import { ContactMethodsGrid } from "@/components/kontakt/ContactMethodsGrid";
import { DirectDrahtStrip } from "@/components/kontakt/DirectDrahtStrip";
import { StandortMap } from "@/components/kontakt/StandortMap";
import { KontaktCta } from "@/components/kontakt/KontaktCta";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Direkter Draht zu Franken Solution aus Nürnberg: Telefon, E-Mail und Standort auf einen Blick – ohne Formular, ohne Umwege.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt | Franken Solution",
    description:
      "Direkter Draht zu Franken Solution aus Nürnberg: Telefon, E-Mail und Standort auf einen Blick – ohne Formular, ohne Umwege.",
    url: "/kontakt",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Franken Solution",
    description:
      "Direkter Draht zu Franken Solution aus Nürnberg: Telefon, E-Mail und Standort auf einen Blick – ohne Formular, ohne Umwege.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Franken Solution",
  description:
    "IT-Sicherheit und Managed Services für hybride IT-Umgebungen in der Metropolregion Nürnberg.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://frankensolution.de",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nürnberg",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  areaServed: "Metropolregion Nürnberg",
};

export default function KontaktPage() {
  return (
    <>
      <SiteFrame>
        <KontaktHero />
        <ContactMethodsGrid />
        <DirectDrahtStrip />
        <StandortMap />
        <KontaktCta />
      </SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
