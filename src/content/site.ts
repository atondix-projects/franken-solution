export const siteContent = {
  nav: {
    links: [
      { label: "Start", href: "/" },
      { label: "Leistungen", href: "/leistungen" },
      { label: "Ressourcen", href: "/ressourcen" },
    ],
    desktopCta: { label: "Kontakt aufnehmen", href: "/kontakt" },
    mobileCta: { label: "Beratung vereinbaren", href: "/kontakt" },
    menuAriaOpen: "Menü schließen",
    menuAriaClose: "Menü öffnen",
    brandName: "Franken Solution",
  },
  footer: {
    brandName: "Franken Solution",
    tagline: "Sichere hybride IT, planbar betreut.",
    description:
      "Franken Solution unterstützt Unternehmen mit klaren Standards, persönlicher Betreuung und laufender IT-Sicherheit für hybride Umgebungen.",
    cta: { label: "Beratung anfragen", href: "/kontakt" },
    downloadLabel: "Fernwartung herunterladen",
    links: [
      { label: "Leistungen", href: "/leistungen" },
      { label: "Ressourcen", href: "/ressourcen" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
export type NavContent = SiteContent["nav"];
export type FooterContent = SiteContent["footer"];
