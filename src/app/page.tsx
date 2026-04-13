import { SiteFrame } from "@/components/SiteFrame";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { ProblemTriggers } from "@/components/ProblemTriggers";
import { ServicePillars } from "@/components/ServicePillars";

export default function Home() {
  return (
    <SiteFrame>
      <Hero />
      <About />
      <ProblemTriggers />
      <ServicePillars />
    </SiteFrame>
  );
}
