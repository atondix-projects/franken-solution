import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Founders } from "@/components/Founders";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ServicePillars } from "@/components/ServicePillars";
import { Trust } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Franken Solution | IT-Sicherheit und stabiler IT-Betrieb",
  description:
    "Franken Solution sichert und betreibt hybride IT-Umgebungen für Unternehmen mit klaren Standards, festen Ansprechpartnern und planbaren Managed Services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Franken Solution | IT-Sicherheit und stabiler IT-Betrieb",
    description:
      "Franken Solution sichert und betreibt hybride IT-Umgebungen für Unternehmen mit klaren Standards, festen Ansprechpartnern und planbaren Managed Services.",
    url: "/",
    siteName: "Franken Solution",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franken Solution | IT-Sicherheit und stabiler IT-Betrieb",
    description:
      "Franken Solution sichert und betreibt hybride IT-Umgebungen für Unternehmen mit klaren Standards, festen Ansprechpartnern und planbaren Managed Services.",
  },
};

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <About />
      <ServicePillars />
      <Process />
      <Trust />
      <Founders />
      <FinalCta />
    </SiteFrame>
  );
}
