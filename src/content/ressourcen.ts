export const ressourcenContent = {
  kopfbereich: {
    vorzeile: "Ressourcen",
    überschrift: "Werkzeuge, die wir Ihnen direkt zur Verfügung stellen.",
    einleitung: "Praktische Hilfsmittel für die Zusammenarbeit mit Franken Solution — vom Fernwartungs-Tool bis zu Informationsmaterialien, die Schritt für Schritt dazukommen.",
    zusatztext: "Alle Tools stammen direkt von Franken Solution und sind für Kunden und Partner bestimmt.",
    vertrauensMerkmale: [
      "Direkt von Franken Solution",
      "Windows-kompatibel",
      "Kein Login erforderlich",
    ],
  },
  download: {
    vorzeile: "Fernwartung",
    überschrift: "Direkter Support-Zugang.",
    einträge: [
      {
        beschriftung: "Fernwartung",
        name: "Fernwartungs-Tool",
        beschreibung: "Schnelle Bildschirmübertragung für unseren Support. Nur nach telefonischer Aufforderung starten.",
        hilfetext: "Windows · EXE-Datei",
        aktion: {
          verlinkung: "/downloads/fernwartung.exe",
          barriereBeschriftung: "Fernwartungs-Tool als EXE-Datei herunterladen",
          downloadDateiname: "fernwartung.exe",
        },
      },
    ],
    platzhalter: {
      überschrift: "Weitere Ressourcen folgen",
      beschreibung: "Checklisten, Whitepapers und weitere Werkzeuge kommen Schritt für Schritt dazu.",
    },
  },
  nächsterSchritt: {
    vorzeile: "Direkter Draht",
    überschrift: "Fragen zum Tool. Wir sind direkt erreichbar.",
    beschreibung: "Unser Support steht Ihnen werktags von 09:00 bis 17:00 Uhr zur Verfügung. Ein kurzer Anruf genügt, um direkt loszulegen.",
    hinweis: "Werktags von 09:00 bis 17:00 Uhr erreichbar. Kein Ticket. Kein Umweg.",
    primärerAufruf: { beschriftung: "Kontakt aufnehmen", verlinkung: "/kontakt" },
    sekundärerAufruf: { beschriftung: "Leistungen ansehen", verlinkung: "/leistungen" },
  },
} as const;

export type RessourcenContent = typeof ressourcenContent;
