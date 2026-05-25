import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { UeberHero } from "@/components/ueber/UeberHero";
import { UeberFounders } from "@/components/ueber/UeberFounders";
import { UeberWerte } from "@/components/ueber/UeberWerte";
import { UeberCta } from "@/components/ueber/UeberCta";

const description =
  "Franken Solution ist ein B2B-Partner für IT-Sicherheit und sicheren IT-Betrieb aus Nürnberg – gegründet von zwei Fachinformatikern mit persönlichem Anspruch an Betreuung.";

export const metadata: Metadata = {
  title: "Über Franken Solution",
  description,
  alternates: {
    canonical: "/ueber-franken-solution",
  },
  openGraph: {
    title: "Über Franken Solution | Franken Solution",
    description,
    url: "/ueber-franken-solution",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Über Franken Solution | Franken Solution",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UeberFrankenSolutionPage() {
  return (
    <SiteFrame>
      <UeberHero />
      <UeberFounders />
      <UeberWerte />
      <UeberCta />
    </SiteFrame>
  );
}
