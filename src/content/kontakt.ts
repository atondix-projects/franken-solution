export const kontaktContent = {
  kopfbereich: {
    vorzeile: "Kontakt",
    überschrift: "Direkter Kontakt statt anonymem Formularweg.",
    einleitung: "Sie haben eine Frage, ein konkretes Anliegen oder möchten wissen, ob Franken Solution zu Ihrem Unternehmen passt? Sprechen Sie uns direkt an – wir klären gemeinsam, welcher nächste Schritt sinnvoll ist.",
    zusatztext: "Kein Formular. Keine Ticketnummer. Ein Anruf oder eine E-Mail reichen.",
    vertrauensMerkmale: [
      "Direkt erreichbar",
      "Keine Warteschleife",
      "Feste Ansprechpartner",
    ],
  },
  kontaktwege: {
    vorzeile: "Erreichbarkeit",
    überschrift: "So erreichen Sie uns.",
    einträge: [
      {
        symbolName: "phone" as const,
        überschrift: "Telefon",
        wert: "0911 95898731",
        hilfetext: "Mo.–Fr. 09:00–17:00 erreichbar",
        aktion: {
          verlinkung: "tel:091195898731",
          barriereBeschriftung: "Franken Solution anrufen",
        },
      },
      {
        symbolName: "mail" as const,
        überschrift: "E-Mail",
        wert: "kontakt@franken-solution.de",
        hilfetext: "Antwort in der Regel am selben Arbeitstag",
        aktion: {
          verlinkung: "mailto:kontakt@franken-solution.de",
          barriereBeschriftung: "E-Mail an Franken Solution senden",
        },
      },
      {
        symbolName: "mapPin" as const,
        überschrift: "Standort",
        wert: "Nürnberg",
        hilfetext: "Metropolregion Franken",
        aktion: {
          verlinkung: "https://www.google.com/maps/search/?api=1&query=Winzelb%C3%BCrgstr.+9%2C+90491+N%C3%BCrnberg",
          barriereBeschriftung: "Adresse in Google Maps öffnen",
        },
      },
    ],
  },
  direkterDraht: {
    vorzeile: "Warum direkter Kontakt?",
    überschrift: "Weil Gespräche vieles schneller klären als Formulare.",
    fließtext: "Gerade bei IT-Fragen hilft ein kurzer Austausch oft mehr als ein langes Formular. Wir hören zu, ordnen Ihr Anliegen fachlich ein und besprechen direkt, was als Nächstes sinnvoll ist.",
    kontrastBeschriftung: "Was Sie bei uns nicht brauchen",
    kontrastZeilen: [
      "Kein langes Formular ausfüllen",
      "Keine anonyme Warteschleife",
      "Kein ständig wechselnder Ansprechpartner",
    ],
  },
  standort: {
    vorzeile: "Standort",
    überschrift: "Verankert in Franken.",
    beschreibung:
      "Unser Büro liegt in Nürnberg, mitten in der Metropolregion Franken. Kurze Wege, persönliche Betreuung und moderne Remote-Unterstützung sind Teil unserer Arbeitsweise.",
    adresse: {
      firma: "Franken Solution",
      straße: "Winzelbürgstr. 9",
      postleitzahl: "90491",
      stadt: "Nürnberg",
      region: "Metropolregion Franken",
    },
    erreichbarkeit: "Mo.–Fr. 09:00–17:00",
    karte: {
      bildBeschreibung: "Karte: Standort Franken Solution, Winzelbürgstr. 9 in Nürnberg",
      bildQuelle: "/standort-map.webp",
      bildBreite: 1200,
      bildHöhe: 900,
      bildnachweis: "© OpenStreetMap contributors",
      bildnachweisLink: "https://www.openstreetmap.org/copyright",
      externerLink:
        "https://www.google.com/maps/search/?api=1&query=Winzelb%C3%BCrgstr.+9%2C+90491+N%C3%BCrnberg",
      externerLinkText: "In Google Maps öffnen",
    },
  },
  nächsterSchritt: {
    vorzeile: "Nächster Schritt",
    überschrift: "Lassen Sie uns strukturiert starten.",
    hinweis: "Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
    beschreibung:
      "In einem ersten Gespräch klären wir, wo Ihre IT steht, was Sie benötigen und wie eine Betreuung aussehen könnte.",
    primärerAufruf: {
      beschriftung: "Erstgespräch vereinbaren",
      verlinkung: "mailto:kontakt@franken-solution.de",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungen ansehen",
      verlinkung: "/leistungen",
    },
  },
} as const;

export type KontaktContent = typeof kontaktContent;
