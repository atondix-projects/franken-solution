export const ueberFrankenSolutionContent = {
  hero: {
    eyebrow: "Über Franken Solution",
    title: "Persönlich. Strukturiert. Herstellerneutral.",
    lead: "Franken Solution ist ein fokussierter B2B-Partner für IT-Sicherheit und sicheren IT-Betrieb – gegründet von zwei Fachinformatikern mit persönlichem Anspruch an die Betreuung ihrer Kunden.",
  },
  werte: {
    eyebrow: "Werte",
    title: "Worauf unsere Arbeit aufbaut.",
    description:
      "Vier Grundsätze prägen die Zusammenarbeit mit Franken Solution. Sie bestimmen, wie wir kommunizieren, entscheiden und Verantwortung übernehmen.",
  },
  cta: {
    eyebrow: "Nächster Schritt",
    title: "Klingt nach der richtigen Zusammenarbeit?",
    description:
      "Ob konkretes Anliegen oder erste Orientierung — ein sachliches Erstgespräch ist der einfachste Weg, sich kennenzulernen.",
    note: "Kein Verkaufsdruck. Nur ein sachliches Erstgespräch.",
    primaryCta: {
      label: "Beratung anfragen",
      href: "/kontakt",
    },
    secondaryCta: {
      label: "Leistungen ansehen",
      href: "/leistungen",
    },
  },
} as const;

export type UeberFrankenSolutionContent = typeof ueberFrankenSolutionContent;
