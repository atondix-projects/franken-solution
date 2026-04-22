export const kontaktContent = {
  hero: {
    eyebrow: "Kontakt",
    title: "Direkter Draht statt Ticketformular.",
    lead: "Sie haben eine Frage, ein konkretes Problem oder wollen einfach wissen, wie Franken Solution zu Ihnen passt — sprechen Sie uns direkt an.",
    subtext: "Kein Formular. Keine Ticketnummer. Ein Anruf oder eine E-Mail reichen.",
  },
  methods: {
    eyebrow: "Erreichbarkeit",
    title: "So erreichen Sie uns.",
    items: [
      {
        iconKey: "phone" as const,
        title: "Telefon",
        value: "Placeholder: +49 911 000 000",
        helper: "Placeholder: werktags zu Kernzeiten erreichbar",
        action: {
          href: "tel:+49911000000",
          ariaLabel: "Franken Solution anrufen",
        },
      },
      {
        iconKey: "mail" as const,
        title: "E-Mail",
        value: "Placeholder: info@frankensolution.de",
        helper: "Antwort in der Regel am selben Arbeitstag",
        action: {
          href: "mailto:info@frankensolution.de",
          ariaLabel: "E-Mail an Franken Solution senden",
        },
      },
      {
        iconKey: "mapPin" as const,
        title: "Standort",
        value: "Nürnberg",
        helper: "Metropolregion Franken",
        action: {
          href: "https://www.google.com/maps/search/?api=1&query=Franken+Solution+N%C3%BCrnberg",
          ariaLabel: "Adresse in Google Maps öffnen",
        },
      },
    ],
  },
  directDraht: {
    eyebrow: "Warum kein Formular",
    title: "Weil Gespräche schneller tragen als Tickets.",
    body: "Viele IT-Dienstleister verstecken sich hinter Ticketsystemen. Wir nicht. Wenn Sie ein Problem haben oder etwas fragen wollen, wollen wir das direkt hören — nicht aufbereitet in einem Formular, das zuerst durch drei Queues läuft. Kurze Wege sind kein Zufall bei Franken Solution, sondern Modell.",
  },
  standort: {
    eyebrow: "Standort",
    title: "Verankert in Franken.",
    description:
      "Unser Büro liegt in Nürnberg, mitten in der Metropolregion Franken. Kurze Wege zu unseren Kunden sind kein Versprechen — sie sind ein strukturelles Merkmal unserer Arbeitsweise.",
    address: {
      company: "Franken Solution",
      street: "Placeholder: Musterstraße 1",
      zip: "Placeholder: 90000",
      city: "Nürnberg",
      region: "Metropolregion Franken",
    },
    erreichbarkeit: "Placeholder: werktags zu Kernzeiten",
    map: {
      alt: "Stilisierte Karte der Region Nürnberg",
      outboundUrl:
        "https://www.google.com/maps/search/?api=1&query=Franken+Solution+N%C3%BCrnberg",
      outboundLabel: "In Google Maps öffnen",
    },
  },
  cta: {
    eyebrow: "Nächster Schritt",
    title: "Lieber mit Struktur einsteigen?",
    description:
      "Placeholder: Kein Verkaufsdruck. Nur ein sachliches Erstgespräch — was Ihre IT heute kann, was fehlt, und wie eine Betreuung aussehen könnte.",
    primaryCta: {
      label: "Sicherheitscheck besprechen",
      href: "/sicherheitscheck",
    },
    secondaryCta: {
      label: "Leistungen ansehen",
      href: "/leistungen",
    },
  },
} as const;

export type KontaktContent = typeof kontaktContent;
