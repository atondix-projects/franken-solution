import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-hidden pt-24 sm:pt-28">{children}</main>
      <Footer />
    </>
  );
}
