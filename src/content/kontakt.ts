export const kontaktContent = {
  kopfbereich: {
    vorzeile: "Kontakt",
    überschrift: "Direkter Draht statt Ticketformular.",
    einleitung: "Sie haben eine Frage, ein konkretes Problem oder wollen einfach wissen, wie Franken Solution zu Ihnen passt — sprechen Sie uns direkt an.",
    zusatztext: "Kein Formular. Keine Ticketnummer. Ein Anruf oder eine E-Mail reichen.",
    vertrauensMerkmale: [
      "Kein Formular",
      "Keine Warteschleife",
      "Direkter Ansprechpartner",
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
    vorzeile: "Warum kein Formular",
    überschrift: "Weil Gespräche schneller tragen als Tickets.",
    fließtext: "Viele IT-Dienstleister verstecken sich hinter Ticketsystemen. Wir nicht. Wenn Sie ein Problem haben oder etwas fragen wollen, wollen wir das direkt hören — nicht aufbereitet in einem Formular, das zuerst durch drei Queues läuft. Kurze Wege sind kein Zufall bei Franken Solution, sondern Modell.",
    kontrastBeschriftung: "Was Sie bei uns nicht brauchen",
    kontrastZeilen: [
      "Kein Formular auszufüllen",
      "Kein Ticket abzuwarten",
      "Kein wechselnder Ansprechpartner",
    ],
  },
  standort: {
    vorzeile: "Standort",
    überschrift: "Verankert in Franken.",
    beschreibung:
      "Unser Büro liegt in Nürnberg, mitten in der Metropolregion Franken. Kurze Wege zu unseren Kunden sind kein Versprechen — sie sind ein strukturelles Merkmal unserer Arbeitsweise.",
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
    überschrift: "Lieber mit Struktur einsteigen?",
    hinweis: "Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
    beschreibung:
      "Kein Verkaufsdruck. Nur ein sachliches Erstgespräch — was Ihre IT heute kann, was fehlt, und wie eine Betreuung aussehen könnte.",
    primärerAufruf: {
      beschriftung: "Leistungen ansehen",
      verlinkung: "/leistungen",
    },
    sekundärerAufruf: {
      beschriftung: "Über uns",
      verlinkung: "/ueber-franken-solution",
    },
  },
} as const;

export type KontaktContent = typeof kontaktContent;
