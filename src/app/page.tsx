import { SiteFrame } from "@/components/SiteFrame";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { ProblemTriggers } from "@/components/ProblemTriggers";
import { Process } from "@/components/Process";
import { ServicePillars } from "@/components/ServicePillars";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <About />
      <ProblemTriggers />
      <ServicePillars />
      <Process />
      <Trust />
      <FinalCta />
    </SiteFrame>
  );
}
