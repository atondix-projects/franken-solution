export const ueberFrankenSolutionContent = {
  kopfbereich: {
    vorzeile: "Über Franken Solution",
    überschrift: "IT-Betreuung mit persönlicher Verantwortung.",
    einleitung:
      "Hinter Franken Solution stehen zwei Geschäftsführer, die nicht nur organisieren, sondern aktiv in der Kundenbetreuung eingebunden bleiben. So entstehen kurze Wege, nachvollziehbare Entscheidungen und IT-Lösungen, die wirklich zu Ihrem Unternehmen passen.",
  },
  gründer: {
    vorzeile: "Gründer & Geschäftsführung",
    überschrift: "Aus Franken. Aus der Praxis.",
    beschreibung:
      "Franken Solution ist aus der Überzeugung entstanden, dass IT-Betreuung persönlich, verständlich und verlässlich sein muss. Markus Maenner und Sergej Stasenko sind der Region Franken eng verbunden und bringen ihre Erfahrung aus Systemintegration, Betrieb und IT-Sicherheit direkt in die Kundenbetreuung ein. Als langjährige IT-Spezialisten wissen sie, dass Technik den Arbeitsalltag erleichtern soll, nicht ausbremsen. Deshalb stehen klare Entscheidungen, kurze Wege und Lösungen im Mittelpunkt, die den Betrieb unserer Kunden möglichst wenig stören und langfristig stabil halten.",
    einträge: [
      {
        kennung: "markus-maenner",
        nummer: "01",
        name: "Markus Maenner",
        rolle: "Geschäftsführer",
        qualifikationen: ["Fachinformatiker Systemintegration", "IHK Nürnberg"],
        fotoQuelle: "/markus-maenner.png" as string | undefined,
        fotoBeschreibung: "Porträt Markus Maenner, Geschäftsführer Franken Solution",
      },
      {
        kennung: "sergej-stasenko",
        nummer: "02",
        name: "Sergej Stasenko",
        rolle: "Geschäftsführer",
        qualifikationen: ["Fachinformatiker Systemintegration", "IHK Nürnberg"],
        fotoQuelle: "/sergej-stasenko.png" as string | undefined,
        fotoBeschreibung: "Porträt Sergej Stasenko, Geschäftsführer Franken Solution",
      },
    ],
  },
  werte: {
    vorzeile: "Werte",
    überschrift: "Wofür Franken Solution steht.",
    beschreibung:
      "Unsere Zusammenarbeit basiert nicht auf Standardpaketen oder schnellen Versprechen. Wir setzen auf transparente Entscheidungen, persönliche Verantwortung und Lösungen, die zur jeweiligen IT-Umgebung und zum Unternehmen dahinter passen.",
    einträge: [
      {
        symbolName: "magnifier",
        überschrift: "Transparenz",
        beschreibung:
          "Wir erklären Empfehlungen, Entscheidungen und Kosten so, dass sie nachvollziehbar bleiben. Vom technischen Konzept bis zur laufenden Betreuung soll klar sein, warum eine Maßnahme sinnvoll ist und welchen Nutzen sie für Ihr Unternehmen hat.",
      },
      {
        symbolName: "scale",
        überschrift: "Herstellerneutralität",
        beschreibung:
          "Unsere Empfehlungen orientieren sich an Ihrer Ausgangslage – nicht an festen Herstellerpaketen oder vorgegebenen Produktkatalogen. Entscheidend ist, welche Lösung fachlich passt, zuverlässig betrieben werden kann und langfristig sinnvoll bleibt.",
      },
      {
        symbolName: "user",
        überschrift: "Persönliche Verantwortung",
        beschreibung:
          "Die Geschäftsführung bleibt aktiv in die Kundenbetreuung eingebunden. Dadurch bleiben Entscheidungen nah an der Praxis, Wege kurz und Verantwortung sichtbar – vom ersten Gespräch bis zur laufenden Betreuung.",
      },
      {
        symbolName: "phone",
        überschrift: "Direkte Betreuung",
        beschreibung:
          "Sie sprechen mit Ansprechpartnern, die Ihre IT-Umgebung kennen und Themen fachlich einordnen können. So müssen Anliegen nicht jedes Mal neu erklärt werden und Entscheidungen bleiben im Zusammenhang Ihrer Umgebung.",
      },
    ],
  },
  nächsterSchritt: {
    vorzeile: "Nächster Schritt",
    überschrift: "Lernen wir uns kennen.",
    beschreibung:
      "In einem ersten Gespräch klären wir, wo Ihre IT steht, was Sie benötigen und ob Franken Solution der passende Partner für Ihre Betreuung ist.",
    hinweis: "Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
    primärerAufruf: {
      beschriftung: "Erstgespräch vereinbaren",
      verlinkung: "/kontakt",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungen ansehen",
      verlinkung: "/leistungen",
    },
  },
} as const;

export type UeberFrankenSolutionContent = typeof ueberFrankenSolutionContent;
export type UeberWerteItem =
  UeberFrankenSolutionContent["werte"]["einträge"][number];
