export const homepageContent = {
  hero: {
    headlinePrefix: "Ihr fränkischer Partner für",
    accentTexts: ["IT-Support", "Cloud-Lösungen", "IT-Sicherheit"],
    subtitle:
      "Wir betreuen die IT von Unternehmen in Franken: persönlich, sicher und zuverlässig im Alltag.",
    primaryCta: {
      label: "Beratung vereinbaren",
      href: "/kontakt",
    },
    secondaryCta: {
      label: "Leistungen ansehen",
      href: "/leistungen",
    },
    featureCards: [
      {
        iconKey: "mapPin",
        title: "Direkt aus Nürnberg",
        description: "Kurze Wege. Schnelle Hilfe.",
      },
      {
        iconKey: "users",
        title: "Persönlicher Kontakt",
        description: "Ein Team, das Ihre IT kennt.",
      },
      {
        iconKey: "shieldCheck",
        title: "Stabil im Alltag",
        description: "Saubere Lösungen für den Alltag.",
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    title: "Sechs Bausteine für sichere und stabile IT",
    description:
      "Jeder Baustein hat einen klaren Verantwortungsbereich. Gemeinsam ergeben sie einen Managed Service für hybride IT-Umgebungen.",
    items: [
      {
        slug: "identitaet-und-zugriffsschutz",
        title: "Identität und Zugriffsschutz",
        description:
          "MFA, Rollen und Lifecycle-Management regeln, wer auf was zugreift – nachvollziehbar und dokumentiert.",
      },
      {
        slug: "email-sicherheit-und-archivierung",
        title: "E-Mail-Sicherheit und Archivierung",
        description:
          "Schutz vor Phishing und Spam, saubere Domänen-Konfiguration und Archivierung als eigenständiger Baustein.",
      },
      {
        slug: "endpoint-schutz-und-monitoring",
        title: "Endpoint-Schutz und Monitoring",
        description:
          "EDR, Patch-Management und strukturierte Sicherheitsberichte schaffen Sichtbarkeit auf allen Endgeräten.",
      },
      {
        slug: "backup-und-wiederherstellung",
        title: "Backup und Wiederherstellung",
        description:
          "Datensicherung, die nicht nur auf dem Papier existiert – mit getesteten Wiederherstellungsprozessen.",
      },
      {
        slug: "netzwerk-und-infrastruktur",
        title: "Netzwerk und Infrastruktur",
        description:
          "Strukturierte Netzwerke, saubere Segmentierung und dokumentierte Infrastruktur als belastbare Grundlage.",
      },
      {
        slug: "security-awareness",
        title: "Security Awareness",
        description:
          "Gezielte Schulungen und Phishing-Simulationen verankern Sicherheitsbewusstsein dauerhaft im Arbeitsalltag.",
      },
    ],
    supportingStatement:
      "Je nach Ausgangslage starten wir mit einer Bestandsaufnahme und entwickeln daraus einen priorisierten Maßnahmenplan.",
    cta: {
      label: "Leistungen ansehen",
      href: "/leistungen",
    },
  },
  process: {
    eyebrow: "Arbeitsweise",
    title: "Von der Bestandsaufnahme zur laufenden Betreuung",
    description:
      "Der Ablauf bleibt bewusst nachvollziehbar: erst Klarheit über Risiken, dann ein priorisierter Weg in die Umsetzung und den Betrieb.",
    steps: [
      {
        iconKey: "magnifier",
        title: "Bestandsaufnahme",
        description:
          "Wir erfassen die aktuelle IT-Lage und machen Sicherheits- und Betriebsrisiken sichtbar.",
        outcome: "Sie bekommen ein klares Bild statt diffuser Vermutungen.",
      },
      {
        iconKey: "clipboardCheck",
        title: "Priorisierter Maßnahmenplan",
        description:
          "Die nächsten Schritte werden fachlich eingeordnet und in eine sinnvolle Reihenfolge gebracht.",
        outcome: "Sie wissen, was zuerst sinnvoll ist und warum.",
      },
      {
        iconKey: "wrench",
        title: "Umsetzung",
        description:
          "Priorisierte Maßnahmen werden sauber geplant, umgesetzt und nachvollziehbar dokumentiert.",
        outcome: "Sicherheit und Betrieb werden strukturiert verbessert.",
      },
      {
        iconKey: "shieldCheck",
        title: "Laufende Betreuung",
        description:
          "Monitoring, Wartung und Weiterentwicklung bleiben Teil eines planbaren Managed Service.",
        outcome:
          "Ihre IT wird stabiler, transparenter und langfristig betreut.",
      },
    ],
  },
  trust: {
    eyebrow: "Vertrauenssignale",
    title:
      "Warum die Zusammenarbeit bewusst ruhig und strukturiert angelegt ist",
    description:
      "Franken Solution positioniert sich nicht über Lautstärke, sondern über klare Standards, persönliche Betreuung und nachvollziehbare Entscheidungen.",
    items: [
      {
        iconKey: "user",
        title: "Feste Ansprechpartner",
        description:
          "Sie sprechen mit Menschen, die Ihre Umgebung kennen und Themen fachlich einordnen können.",
      },
      {
        iconKey: "clipboardCheck",
        title: "Klare Standards und Dokumentation",
        description:
          "Maßnahmen, Entscheidungen und Betriebslogik werden nachvollziehbar festgehalten.",
      },
      {
        iconKey: "scale",
        title: "Herstellerneutral",
        description:
          "Technische Entscheidungen orientieren sich an Ihrer Ausgangslage und nicht an einem vorgegebenen Produktkatalog.",
      },
      {
        iconKey: "mapPin",
        title: "Franken lokal, deutschlandweit remote",
        description:
          "Die regionale Nähe schafft Vertrauen. Managed Services und cloud-nahe Leistungen lassen sich auch remote sauber betreiben.",
      },
    ],
  },
  about: {
    eyebrow: "Über Franken Solution",
    title: "Persönlich. Strukturiert. Herstellerneutral.",
    description:
      "Franken Solution ist ein fokussierter B2B-Partner für IT-Sicherheit und sicheren IT-Betrieb. Wir betreuen hybride IT-Umgebungen mit klaren Standards, festen Ansprechpartnern und planbaren Managed Services.",
    imageAlt: "Stadtansicht von Nürnberg — Heimat von Franken Solution",
    differentiators: [
      "Klare Standards und nachvollziehbare Dokumentation",
      "Feste Ansprechpartner, die Ihre Umgebung kennen",
      "Herstellerneutrale Empfehlungen",
    ],
    counters: [
      {
        value: "10+",
        label: "Jahre IT-Erfahrung",
      },
      {
        value: "150+",
        label: "Betreute Arbeitsplätze",
      },
      {
        value: "100%",
        label: "Persönliche Betreuung",
      },
    ],
    cta: {
      label: "Mehr erfahren",
      href: "/ueber-franken-solution",
    },
  },
  founders: {
    eyebrow: "Gründer & Geschäftsführung",
    title: "Persönlich betreut – von Anfang an.",
    description:
      "Placeholder: Hinter Franken Solution stehen zwei Fachinformatiker mit langjähriger Erfahrung in der Systemintegration. Als Gründer und Geschäftsführer sind sie persönlich in die Betreuung eingebunden.",
    items: [
      {
        id: "markus-maenner",
        number: "01",
        name: "Markus Maenner",
        role: "Geschäftsführer",
        credentials: ["Fachinformatiker Systemintegration", "IHK Nürnberg"],
        photoSrc: "/markus-maenner.png" as string | undefined,
        photoAlt: "Porträt Markus Maenner, Geschäftsführer Franken Solution",
      },
      {
        id: "sergej-stasenko",
        number: "02",
        name: "Sergej Stasenko",
        role: "Geschäftsführer",
        credentials: ["Fachinformatiker Systemintegration", "IHK Nürnberg"],
        photoSrc: "/sergej-stasenko.png" as string | undefined,
        photoAlt: "Porträt Sergej Stasenko, Geschäftsführer Franken Solution",
      },
    ],
  },
  finalCta: {
    eyebrow: "Nächster Schritt",
    title: "Sichere hybride IT. Klar priorisiert. Langfristig betreut.",
    description:
      "Wenn Ihre IT professioneller, sicherer und planbarer aufgestellt werden soll, ist ein erstes Beratungsgespräch der saubere Einstieg.",
    note: "Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
    primaryCta: {
      label: "Kontakt aufnehmen",
      href: "/kontakt",
    },
    secondaryCta: {
      label: "Kontakt aufnehmen",
      href: "/kontakt",
    },
  },
} as const;

export type HomepageContent = typeof homepageContent;
export type FoundersSectionContent = HomepageContent["founders"];
export type FounderItem = HomepageContent["founders"]["items"][number];
export type HeroSectionContent = HomepageContent["hero"];
export type ServicePillarsSectionContent = HomepageContent["services"];
export type ServicePillarItem = HomepageContent["services"]["items"][number];
export type ProcessSectionContent = HomepageContent["process"];
export type TrustSectionContent = HomepageContent["trust"];
export type FinalCtaSectionContent = HomepageContent["finalCta"];
export type AboutSectionContent = HomepageContent["about"];
