export const leistungenContent = {
  hero: {
    eyebrow: "Leistungen",
    headline: "Sechs Bausteine. Ein verlässlicher IT-Betrieb.",
    lead: "Jede Leistungsgruppe lässt sich einzeln einsetzen – und zusammen ergeben sie einen Managed Service, der Sicherheit und stabilen Betrieb dauerhaft verbindet.",
    primaryCta: {
      label: "Sicherheitscheck besprechen",
      href: "/sicherheitscheck",
    },
    secondaryCta: {
      label: "Kontakt aufnehmen",
      href: "/kontakt",
    },
    anchorChips: [
      { label: "Leistungsgruppen", anchor: "#leistungsgruppen" },
      { label: "Laufende Betreuung", anchor: "#laufende-betreuung" },
      { label: "Projektleistungen", anchor: "#projektleistungen" },
      { label: "Nächster Schritt", anchor: "#naechster-schritt" },
    ],
    diagramCenterLabel: "Managed Service",
  },
  situations: {
    eyebrow: "Typische Auslöser",
    headline: "Welche Situation beschreibt Ihre aktuelle Lage?",
    description:
      "Diese Situationen tauchen selten einzeln auf. Die Tabelle zeigt, welche Leistungsgruppe als erstes ansetzt.",
    rows: [
      {
        situation: "Konten, Berechtigungen und Admin-Zugänge sind nicht klar geregelt",
        pillars: [
          { label: "Identität und Zugriffsschutz", anchor: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation: "Phishing-Mails treffen Mitarbeitende, Postfächer wurden kompromittiert",
        pillars: [
          { label: "E-Mail-Sicherheit", anchor: "#email-sicherheit-und-archivierung" },
          { label: "Security Awareness", anchor: "#security-awareness" },
        ],
      },
      {
        situation: "Backups laufen – aber ob eine Wiederherstellung klappt, ist unklar",
        pillars: [
          { label: "Backup und Wiederherstellung", anchor: "#backup-und-wiederherstellung" },
        ],
      },
      {
        situation: "Endgeräte sind schlecht sichtbar, Patches laufen unsauber",
        pillars: [
          { label: "Endpoint-Schutz und Monitoring", anchor: "#endpoint-schutz-und-monitoring" },
        ],
      },
      {
        situation: "Versicherung oder Datenschutz fordert nachweisbare Schutzmaßnahmen",
        pillars: [
          { label: "Security Awareness", anchor: "#security-awareness" },
          { label: "Identität und Zugriffsschutz", anchor: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation: "Das Netzwerk ist historisch gewachsen und nicht mehr sauber dokumentiert",
        pillars: [
          { label: "Netzwerk und Infrastruktur", anchor: "#netzwerk-und-infrastruktur" },
        ],
      },
    ],
  },
  pillars: {
    eyebrow: "Leistungsgruppen",
    headline: "Was wir konkret übernehmen",
    description:
      "Jede Gruppe hat einen klaren Verantwortungsbereich. Auslöser, Bausteine und erwartetes Ergebnis sind für jede Gruppe separat beschrieben.",
    detailLinkLabel: "Details ansehen",
    groups: [
      {
        title: "Identität und Zugriffsschutz",
        slug: "identitaet-und-zugriffsschutz",
        href: "/leistungen/identitaet-und-zugriffsschutz",
        intro:
          "Konten und Berechtigungen sind ein häufiger Einstiegspunkt für Angriffe. Dieser Baustein regelt, wer auf was zugreifen darf – und wie das nachvollziehbar bleibt.",
        triggerText:
          "Konten ohne MFA, unklare Berechtigungsstrukturen oder unkontrollierte Admin-Zugänge.",
        bausteine: [
          "MFA und Conditional Access",
          "Rollenbasierte Berechtigungsstrukturen",
          "Privileged Identity Management",
          "Lifecycle-Management für Konten und Gruppen",
        ],
        outcome:
          "Klarer Zugang für die richtigen Personen – mit nachvollziehbaren Regeln und dokumentierten Verantwortlichkeiten.",
      },
      {
        title: "E-Mail-Sicherheit und Archivierung",
        slug: "email-sicherheit-und-archivierung",
        href: "/leistungen/email-sicherheit-und-archivierung",
        intro:
          "E-Mail ist nach wie vor einer der häufigsten Angriffsvektoren. Dieser Baustein sichert den Kommunikationskanal und regelt Archivierung als eigene Aufgabe.",
        triggerText:
          "Phishing-Mails, kompromittierte Postfächer oder fehlende Archivierungsstrategie.",
        bausteine: [
          "Spam- und Phishing-Schutz",
          "DKIM, SPF und DMARC-Konfiguration",
          "Mailbox-Sicherheitsrichtlinien",
          "Archivierung nach betrieblichen und gesetzlichen Anforderungen",
        ],
        outcome:
          "E-Mail als strukturierter und gesicherter Kommunikationskanal – mit klarer Trennung zwischen operativem Betrieb und Archivierung.",
      },
      {
        title: "Backup und Wiederherstellung",
        slug: "backup-und-wiederherstellung",
        href: "/leistungen/backup-und-wiederherstellung",
        intro:
          "Datensicherung existiert oft auf dem Papier – aber ob eine Wiederherstellung im Ernstfall klappt, ist selten geprüft. Dieser Baustein schließt diese Lücke.",
        triggerText:
          "Datenverluste, nicht geprüfte Backups oder unklare Wiederherstellungsverantwortlichkeit.",
        bausteine: [
          "Server- und Cloud-Backups",
          "Client-Datensicherung",
          "Regelmäßige Wiederherstellungstests",
          "Dokumentierte Recovery-Prozesse und Verantwortlichkeiten",
        ],
        outcome:
          "Datensicherung, die nicht nur auf dem Papier existiert – mit getesteten Prozessen und klar geregelter Verantwortung.",
      },
      {
        title: "Endpoint-Schutz und Monitoring",
        slug: "endpoint-schutz-und-monitoring",
        href: "/leistungen/endpoint-schutz-und-monitoring",
        intro:
          "Endgeräte sind oft der blinde Fleck im IT-Betrieb. Dieser Baustein schafft Sichtbarkeit und stellt sicher, dass Auffälligkeiten früh erkannt und eingeordnet werden.",
        triggerText:
          "Ungeschützte Endgeräte, fehlende Sichtbarkeit oder unstrukturierte Patch-Prozesse.",
        bausteine: [
          "Endpoint Detection and Response (EDR)",
          "Patch-Management und Software-Inventar",
          "Geräteverwaltung und -inventarisierung",
          "Regelmäßige Sicherheitsberichte und Auswertungen",
        ],
        outcome:
          "Endgeräte im Blick – mit strukturiertem Schutz, nachvollziehbaren Meldungen und klaren Verantwortlichkeiten.",
      },
      {
        title: "Security Awareness",
        slug: "security-awareness",
        href: "/leistungen/security-awareness",
        intro:
          "Mitarbeitende sind häufig der letzte Schutzwall vor einem Angriff. Dieser Baustein verankert Sicherheitsbewusstsein im Alltag – nicht als Pflichtschulung.",
        triggerText:
          "Mitarbeitende als häufiger Einstiegspunkt für Angriffe oder fehlendes Sicherheitsbewusstsein im Team.",
        bausteine: [
          "Gezielte Schulungsmaßnahmen",
          "Phishing-Simulationen",
          "Richtlinien für sicheres Verhalten",
          "Wiederkehrende Awareness-Kommunikation im Arbeitsalltag",
        ],
        outcome:
          "Sicherheitsbewusstsein als Teil des Arbeitsalltags – nicht als einmalige Pflichtveranstaltung.",
      },
      {
        title: "Netzwerk und Infrastruktur",
        slug: "netzwerk-und-infrastruktur",
        href: "/leistungen/netzwerk-und-infrastruktur",
        intro:
          "Ein historisch gewachsenes Netzwerk ohne klare Segmentierung ist schwer zu schützen und schwerer zu betreiben. Dieser Baustein schafft Struktur als Grundlage.",
        triggerText:
          "Unstrukturierte Netzwerke, fehlendes Segmentierungskonzept oder mangelnde Dokumentation der Infrastruktur.",
        bausteine: [
          "Netzwerksegmentierung und VLAN-Konzepte",
          "Firewall-Konfiguration und -Monitoring",
          "VPN und Remote-Access-Konzepte",
          "Dokumentation der Netzwerktopologie",
        ],
        outcome:
          "Eine strukturierte Infrastruktur als belastbare Grundlage – klar dokumentiert, nachvollziehbar und auf Ihren Betrieb abgestimmt.",
      },
    ],
  },
  ongoing: {
    eyebrow: "Laufende Betreuung",
    headline: "Managed Service als fortlaufender Prozess",
    description:
      "Einmalige Maßnahmen greifen zu kurz. Sicherheit und stabiler Betrieb entstehen durch einen strukturierten Zyklus, der kontinuierlich wiederkehrt.",
    cycle: [
      {
        title: "Monitoring und Erkennung",
        body: "Sicherheitsrelevante Ereignisse und Betriebsauffälligkeiten werden laufend beobachtet und eingeordnet.",
      },
      {
        title: "Bewertung und Priorisierung",
        body: "Erkannte Themen werden fachlich bewertet und in eine sinnvolle Bearbeitungsreihenfolge gebracht.",
      },
      {
        title: "Umsetzung und Anpassung",
        body: "Maßnahmen werden umgesetzt, dokumentiert und bei Bedarf nachjustiert.",
      },
      {
        title: "Weiterentwicklung",
        body: "Die IT-Umgebung wird regelmäßig auf neue Anforderungen, Bedrohungslagen und technische Entwicklungen hin geprüft.",
      },
    ],
    callout:
      "Planbar betreut bedeutet: feste Ansprechpartner, klare Prozesse und eine IT-Umgebung, die nicht zwischen Notfällen reaktiv geflickt wird.",
    centerLabel: "Betrieb",
  },
  projects: {
    eyebrow: "Projektleistungen",
    headline: "Wenn strukturierte Änderungen anstehen",
    description:
      "Neben dem laufenden Managed Service übernehmen wir Projekte, die eine klare Ausgangslage, einen Umfang und einen definierten Abschluss haben.",
    tiles: [
      {
        index: "01",
        title: "IT-Infrastruktur-Projekte",
        body: "Strukturierte Planung und Umsetzung von Infrastrukturvorhaben – vom Netzwerkdesign und Serverkonsolidierung bis zum vollständigen Rollout.",
      },
      {
        index: "02",
        title: "Migrationen und Umstellungen",
        body: "Cloud-Migrationen, Plattformwechsel oder Tenant-Konsolidierungen – mit klarem Scope, dokumentiertem Ablauf und definiertem Übergabepunkt.",
      },
      {
        index: "03",
        title: "Sicherheitskonzepte und Analysen",
        body: "Strukturierte Bestandsaufnahme der IT-Sicherheitslage – mit Risikobewertung und priorisierten, umsetzbaren Handlungsempfehlungen.",
      },
      {
        index: "04",
        title: "Onboarding und Transition",
        body: "Strukturierter Übergang zu Franken Solution – mit Bestandsaufnahme, Schnittstellendokumentation und Einarbeitung in Ihre Umgebung.",
      },
    ],
  },
  cta: {
    eyebrow: "Nächster Schritt",
    headline: "Sicherheit und Betrieb. Klar aufgestellt.",
    description:
      "Wenn Ihre IT professioneller und planbarer aufgestellt werden soll, ist ein Sicherheitscheck oder ein erstes Beratungsgespräch der saubere Einstieg.",
    primaryCta: {
      label: "Sicherheitscheck besprechen",
      href: "/sicherheitscheck",
    },
    secondaryCta: {
      label: "Kontakt aufnehmen",
      href: "/kontakt",
    },
    note: "Placeholder: Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
  },
} as const;

export type LeistungenContent = typeof leistungenContent;
export type LeistungenHeroContent = LeistungenContent["hero"];
export type LeistungenSituationsContent = LeistungenContent["situations"];
export type LeistungenPillarsContent = LeistungenContent["pillars"];
export type LeistungenPillarGroup = LeistungenContent["pillars"]["groups"][number];
export type LeistungenOngoingContent = LeistungenContent["ongoing"];
export type LeistungenProjectsContent = LeistungenContent["projects"];
export type LeistungenCtaContent = LeistungenContent["cta"];
