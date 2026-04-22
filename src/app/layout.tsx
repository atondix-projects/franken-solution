import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frankensolution.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Franken Solution | IT-Sicherheit und stabiler IT-Betrieb",
    template: "%s | Franken Solution",
  },
  description:
    "Franken Solution sichert und betreibt hybride IT-Umgebungen für Unternehmen mit klaren Standards, festen Ansprechpartnern und planbaren Managed Services.",
  alternates: {
    languages: { "de-DE": "/" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Franken Solution",
  url: SITE_URL,
  areaServed: "Metropolregion Nürnberg",
  description:
    "IT-Sicherheit und Managed Services für hybride IT-Umgebungen in Franken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col font-sans">
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
