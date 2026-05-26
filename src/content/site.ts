export const siteContent = {
  navigation: {
    verknüpfungen: [
      { beschriftung: "Start", verlinkung: "/" },
      { beschriftung: "Leistungen", verlinkung: "/leistungen" },
      { beschriftung: "Ressourcen", verlinkung: "/ressourcen" },
    ],
    desktopAufruf: { beschriftung: "Kontakt aufnehmen", verlinkung: "/kontakt" },
    mobilerAufruf: { beschriftung: "Beratung vereinbaren", verlinkung: "/kontakt" },
    menüÖffnenBeschriftung: "Menü schließen",
    menüSchließenBeschriftung: "Menü öffnen",
    markenname: "Franken Solution",
  },
  fußzeile: {
    markenname: "Franken Solution",
    slogan: "Sichere hybride IT, planbar betreut.",
    beschreibung:
      "Franken Solution unterstützt Unternehmen mit klaren Standards, persönlicher Betreuung und laufender IT-Sicherheit für hybride Umgebungen.",
    nächsterSchritt: { beschriftung: "Beratung anfragen", verlinkung: "/kontakt" },
    downloadBeschriftung: "Fernwartung herunterladen",
    verknüpfungen: [
      { beschriftung: "Leistungen", verlinkung: "/leistungen" },
      { beschriftung: "Ressourcen", verlinkung: "/ressourcen" },
      { beschriftung: "Kontakt", verlinkung: "/kontakt" },
      { beschriftung: "Impressum", verlinkung: "/impressum" },
      { beschriftung: "Datenschutz", verlinkung: "/datenschutz" },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
export type NavContent = SiteContent["navigation"];
export type FooterContent = SiteContent["fußzeile"];
