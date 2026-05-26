export const ueberFrankenSolutionContent = {
  kopfbereich: {
    vorzeile: "Über Franken Solution",
    überschrift: "Persönlich. Strukturiert. Herstellerneutral.",
    einleitung: "Franken Solution ist ein fokussierter B2B-Partner für IT-Sicherheit und sicheren IT-Betrieb – gegründet von zwei Fachinformatikern mit persönlichem Anspruch an die Betreuung ihrer Kunden.",
  },
  werte: {
    vorzeile: "Werte",
    überschrift: "Worauf unsere Arbeit aufbaut.",
    beschreibung:
      "Vier Grundsätze prägen die Zusammenarbeit mit Franken Solution. Sie bestimmen, wie wir kommunizieren, entscheiden und Verantwortung übernehmen.",
  },
  nächsterSchritt: {
    vorzeile: "Nächster Schritt",
    überschrift: "Klingt nach der richtigen Zusammenarbeit?",
    beschreibung:
      "Ob konkretes Anliegen oder erste Orientierung — ein sachliches Erstgespräch ist der einfachste Weg, sich kennenzulernen.",
    hinweis: "Kein Verkaufsdruck. Nur ein sachliches Erstgespräch.",
    primärerAufruf: {
      beschriftung: "Beratung anfragen",
      verlinkung: "/kontakt",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungen ansehen",
      verlinkung: "/leistungen",
    },
  },
} as const;

export type UeberFrankenSolutionContent = typeof ueberFrankenSolutionContent;
