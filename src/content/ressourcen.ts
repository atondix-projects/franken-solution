export const ressourcenContent = {
  hero: {
    eyebrow: "Ressourcen",
    title: "Werkzeuge, die wir Ihnen direkt zur Verfügung stellen.",
    lead: "Praktische Hilfsmittel für die Zusammenarbeit mit Franken Solution — vom Fernwartungs-Tool bis zu Informationsmaterialien, die Schritt für Schritt dazukommen.",
    subtext: "Alle Tools stammen direkt von Franken Solution und sind für Kunden und Partner bestimmt.",
  },
  download: {
    eyebrow: "Fernwartung",
    title: "Direkter Support-Zugang.",
    items: [
      {
        label: "Fernwartung",
        name: "Fernwartungs-Tool",
        description: "Schnelle Bildschirmübertragung für unseren Support. Nur nach telefonischer Aufforderung starten.",
        helper: "Windows · EXE-Datei",
        action: {
          href: "/downloads/fernwartung.exe",
          ariaLabel: "Fernwartungs-Tool als EXE-Datei herunterladen",
          downloadFilename: "fernwartung.exe",
        },
      },
    ],
    placeholder: {
      title: "Weitere Ressourcen folgen",
      description: "Checklisten, Whitepapers und weitere Werkzeuge kommen Schritt für Schritt dazu.",
    },
  },
  cta: {
    eyebrow: "Direkter Draht",
    title: "Fragen zum Tool. Wir sind direkt erreichbar.",
    description: "Unser Support steht Ihnen werktags von 09:00 bis 17:00 Uhr zur Verfügung. Ein kurzer Anruf genügt, um direkt loszulegen.",
    primaryCta: { label: "Kontakt aufnehmen", href: "/kontakt" },
    secondaryCta: { label: "Leistungen ansehen", href: "/leistungen" },
  },
} as const;

export type RessourcenContent = typeof ressourcenContent;
