import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { LeistungenHero } from "@/components/leistungen/LeistungenHero";
import { SituationMatrix } from "@/components/leistungen/SituationMatrix";
import { PillarDeepCards } from "@/components/leistungen/PillarDeepCards";
import { OngoingLoop } from "@/components/leistungen/OngoingLoop";
import { ProjectBridgeStrip } from "@/components/leistungen/ProjectBridgeStrip";
import { LeistungenCta } from "@/components/leistungen/LeistungenCta";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Sechs Leistungsgruppen, die einzeln eingesetzt werden können und zusammen einen verlässlichen Managed Service ergeben — keine lose Technikliste.",
  alternates: {
    canonical: "/leistungen",
  },
  openGraph: {
    title: "Leistungen | Franken Solution",
    description:
      "Sechs Leistungsgruppen, die einzeln eingesetzt werden können und zusammen einen verlässlichen Managed Service ergeben — keine lose Technikliste.",
    url: "/leistungen",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Franken Solution",
    description:
      "Sechs Leistungsgruppen, die einzeln eingesetzt werden können und zusammen einen verlässlichen Managed Service ergeben — keine lose Technikliste.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Leistungen() {
  return (
    <SiteFrame>
      <LeistungenHero />
      <SituationMatrix />
      <PillarDeepCards />
      <OngoingLoop />
      <ProjectBridgeStrip />
      <LeistungenCta />
    </SiteFrame>
  );
}
