import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { RessourcenHero } from "@/components/ressourcen/RessourcenHero";
import { DownloadGrid } from "@/components/ressourcen/DownloadGrid";
import { RessourcenCta } from "@/components/ressourcen/RessourcenCta";

export const metadata: Metadata = {
  title: "Ressourcen",
  description:
    "Werkzeuge und Hilfsmittel von Franken Solution: Fernwartungs-Tool für schnellen Support-Zugang sowie weitere Ressourcen für Kunden und Partner.",
  alternates: {
    canonical: "/ressourcen",
  },
  openGraph: {
    title: "Ressourcen | Franken Solution",
    description:
      "Werkzeuge und Hilfsmittel von Franken Solution: Fernwartungs-Tool für schnellen Support-Zugang sowie weitere Ressourcen für Kunden und Partner.",
    url: "/ressourcen",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ressourcen | Franken Solution",
    description:
      "Werkzeuge und Hilfsmittel von Franken Solution: Fernwartungs-Tool für schnellen Support-Zugang sowie weitere Ressourcen für Kunden und Partner.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RessourcenPage() {
  return (
    <SiteFrame>
      <RessourcenHero />
      <DownloadGrid />
      <RessourcenCta />
    </SiteFrame>
  );
}
