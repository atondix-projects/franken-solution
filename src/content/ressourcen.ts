export const ressourcenContent = {
  kopfbereich: {
    vorzeile: "Ressourcen",
    überschrift: "Support & Downloads für unsere Kunden.",
    einleitung:
      "Hier finden Sie den passenden Fernwartungsclient und weitere Hilfsmittel für die Zusammenarbeit mit Franken Solution. Bitte starten Sie die Fernwartung nur nach Aufforderung durch unser Support-Team.",
    vertrauensMerkmale: [
      "Direkt von Franken Solution",
      "Windows & macOS",
      "Start nur nach Absprache",
    ],
  },
  download: {
    vorzeile: "Fernwartung",
    überschrift: "Schneller Support-Zugang.",
    einleitung:
      "Laden Sie den passenden Fernwartungsclient herunter, wenn unser Support Sie dazu auffordert. Die Verbindung wird nur mit Ihrer Zustimmung gestartet und kann jederzeit beendet werden.",
    einträge: [
      {
        plattform: "Windows",
        verfügbar: true,
        name: "Fernwartung für Windows",
        beschreibung:
          "Für Windows-PCs und Notebooks. Bitte starten Sie das Tool nur nach telefonischer oder direkter Aufforderung durch Franken Solution.",
        hilfetext: "Windows · EXE-Datei",
        feldText: "Windows-Client herunterladen",
        aktion: {
          verlinkung: "/downloads/fernwartung.exe",
          barriereBeschriftung: "Windows-Client herunterladen",
          downloadDateiname: "fernwartung.exe",
        },
      },
      {
        plattform: "macOS",
        verfügbar: false,
        name: "Fernwartung für macOS",
        beschreibung:
          "Für MacBooks und iMacs. Je nach macOS-Version müssen Bildschirmfreigabe und Bedienungshilfen einmalig freigegeben werden.",
        hilfetext: "macOS · in Vorbereitung",
        feldText: "macOS-Client herunterladen",
        aktion: {
          verlinkung: "",
          barriereBeschriftung: "macOS-Client – bald verfügbar",
          downloadDateiname: "",
        },
      },
    ],
  },
  fernwartungsAblauf: {
    vorzeile: "Fernwartung",
    überschrift: "So funktioniert die Fernwartung",
    schritte: [
      {
        nummer: "01",
        überschrift: "Passenden Client herunterladen",
        fließtext:
          "Wählen Sie den Fernwartungsclient für Windows oder macOS und starten Sie die heruntergeladene Datei.",
      },
      {
        nummer: "02",
        überschrift: "Verbindung freigeben",
        fließtext:
          "Unser Support begleitet Sie telefonisch oder nach vorheriger Abstimmung durch die Sitzung. Sie behalten jederzeit die Kontrolle über die Verbindung.",
      },
      {
        nummer: "03",
        überschrift: "Unterstützung erhalten",
        fließtext:
          "Wir sehen nur, was für die abgestimmte Unterstützung notwendig ist, und beenden die Sitzung nach Abschluss gemeinsam mit Ihnen.",
      },
    ],
  },
  weitereHilfsmittel: {
    vorzeile: "Weitere Hilfsmittel",
    überschrift: "Weitere Hilfsmittel",
    karten: [
      {
        überschrift: "Kurzanleitung Fernwartung",
        beschreibung:
          "Eine kompakte Anleitung für den Start einer Fernwartungssitzung unter Windows und macOS.",
      },
      {
        überschrift: "Onboarding-Checkliste für Neukunden",
        beschreibung:
          "Welche Informationen und Zugänge für eine strukturierte Übernahme Ihrer IT hilfreich sind.",
      },
      {
        überschrift: "IT-Sicherheits-Notfallkarte",
        beschreibung:
          "Was im Verdachtsfall bei Phishing, kompromittierten Konten oder ungewöhnlichen Systemmeldungen zu tun ist.",
      },
    ],
  },
  nächsterSchritt: {
    vorzeile: "Direkter Draht",
    überschrift: "Fragen zur Fernwartung oder den Hilfsmitteln? Wir helfen direkt weiter.",
    beschreibung:
      "Unser Support ist werktags von 09:00 bis 17:00 Uhr erreichbar. Ein kurzer Anruf genügt, um den nächsten Schritt abzustimmen.",
    hinweis: "Persönlich, direkt und ohne unnötige Umwege.",
    primärerAufruf: { beschriftung: "Kontakt aufnehmen", verlinkung: "/kontakt" },
    sekundärerAufruf: { beschriftung: "Leistungen ansehen", verlinkung: "/leistungen" },
  },
} as const;

export type RessourcenContent = typeof ressourcenContent;
export type RessourcenDownloadItem =
  RessourcenContent["download"]["einträge"][number];
export type RessourcenAblaufSchritt =
  RessourcenContent["fernwartungsAblauf"]["schritte"][number];
export type RessourcenHilfsmittelKarte =
  RessourcenContent["weitereHilfsmittel"]["karten"][number];
