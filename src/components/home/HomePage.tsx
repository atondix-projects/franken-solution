import { homepageContent } from "@/content/homepage";

import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicePillarsSection } from "@/components/home/ServicePillarsSection";
import { TrustSection } from "@/components/home/TrustSection";

export function HomePage() {
  return (
    <>
      <HeroSection content={homepageContent.hero} />
      <ProblemSection content={homepageContent.problem} />
      <ServicePillarsSection content={homepageContent.services} />
      <ProcessSection content={homepageContent.process} />
      <TrustSection content={homepageContent.trust} />
      <FinalCtaSection content={homepageContent.finalCta} />
    </>
  );
}
