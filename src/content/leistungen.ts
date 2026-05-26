export const leistungenContent = {
  kopfbereich: {
    vorzeile: "Leistungen",
    überschrift: "Sechs Bausteine. Ein verlässlicher IT-Betrieb.",
    diagrammTitel: "Managed Service mit sechs verlinkten Leistungsgruppen",
    einleitung: "Jede Leistungsgruppe lässt sich einzeln einsetzen – und zusammen ergeben sie einen Managed Service, der Sicherheit und stabilen Betrieb dauerhaft verbindet.",
    primärerAufruf: {
      beschriftung: "Kontakt aufnehmen",
      verlinkung: "/kontakt",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungen entdecken",
      verlinkung: "#leistungsgruppen",
    },
    sprungMarken: [
      { beschriftung: "Leistungsgruppen", sprungZiel: "#leistungsgruppen" },
      { beschriftung: "Laufende Betreuung", sprungZiel: "#laufende-betreuung" },
      { beschriftung: "Projektleistungen", sprungZiel: "#projektleistungen" },
      { beschriftung: "Nächster Schritt", sprungZiel: "#naechster-schritt" },
    ],
    diagrammMittelbeschriftung: "Managed Service",
  },
  situationen: {
    vorzeile: "Typische Auslöser",
    überschrift: "Welche Situation beschreibt Ihre aktuelle Lage?",
    tabellenKöpfe: {
      situation: "Situation",
      ansatz: "Ansatz",
    },
    beschreibung:
      "Diese Situationen tauchen selten einzeln auf. Die Tabelle zeigt, welche Leistungsgruppe als erstes ansetzt.",
    zeilen: [
      {
        situation: "Konten, Berechtigungen und Admin-Zugänge sind nicht klar geregelt",
        leistungsgruppen: [
          { beschriftung: "Identität und Zugriffsschutz", sprungZiel: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation: "Phishing-Mails treffen Mitarbeitende, Postfächer wurden kompromittiert",
        leistungsgruppen: [
          { beschriftung: "E-Mail-Sicherheit", sprungZiel: "#email-sicherheit-und-archivierung" },
          { beschriftung: "Security Awareness", sprungZiel: "#security-awareness" },
        ],
      },
      {
        situation: "Backups laufen – aber ob eine Wiederherstellung klappt, ist unklar",
        leistungsgruppen: [
          { beschriftung: "Backup und Wiederherstellung", sprungZiel: "#backup-und-wiederherstellung" },
        ],
      },
      {
        situation: "Endgeräte sind schlecht sichtbar, Patches laufen unsauber",
        leistungsgruppen: [
          { beschriftung: "Endpoint-Schutz und Monitoring", sprungZiel: "#endpoint-schutz-und-monitoring" },
        ],
      },
      {
        situation: "Versicherung oder Datenschutz fordert nachweisbare Schutzmaßnahmen",
        leistungsgruppen: [
          { beschriftung: "Security Awareness", sprungZiel: "#security-awareness" },
          { beschriftung: "Identität und Zugriffsschutz", sprungZiel: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation: "Das Netzwerk ist historisch gewachsen und nicht mehr sauber dokumentiert",
        leistungsgruppen: [
          { beschriftung: "Netzwerk und Infrastruktur", sprungZiel: "#netzwerk-und-infrastruktur" },
        ],
      },
    ],
  },
  leistungsgruppen: {
    vorzeile: "Leistungsgruppen",
    überschrift: "Was wir konkret übernehmen",
    beschreibung:
      "Jede Gruppe hat einen klaren Verantwortungsbereich. Auslöser, Bausteine und erwartetes Ergebnis sind für jede Gruppe separat beschrieben.",
    detailLinkText: "Details ansehen",
    gruppen: [
      {
        überschrift: "Identität und Zugriffsschutz",
        pfadKennung: "identitaet-und-zugriffsschutz",
        verlinkung: "/leistungen/identitaet-und-zugriffsschutz",
        einführung:
          "Konten und Berechtigungen sind ein häufiger Einstiegspunkt für Angriffe. Dieser Baustein regelt, wer auf was zugreifen darf – und wie das nachvollziehbar bleibt.",
        auslöserText:
          "Konten ohne MFA, unklare Berechtigungsstrukturen oder unkontrollierte Admin-Zugänge.",
        bausteine: [
          "MFA und Conditional Access",
          "Rollenbasierte Berechtigungsstrukturen",
          "Privileged Identity Management",
          "Lifecycle-Management für Konten und Gruppen",
        ],
        ergebnis:
          "Klarer Zugang für die richtigen Personen – mit nachvollziehbaren Regeln und dokumentierten Verantwortlichkeiten.",
      },
      {
        überschrift: "E-Mail-Sicherheit und Archivierung",
        pfadKennung: "email-sicherheit-und-archivierung",
        verlinkung: "/leistungen/email-sicherheit-und-archivierung",
        einführung:
          "E-Mail ist nach wie vor einer der häufigsten Angriffsvektoren. Dieser Baustein sichert den Kommunikationskanal und regelt Archivierung als eigene Aufgabe.",
        auslöserText:
          "Phishing-Mails, kompromittierte Postfächer oder fehlende Archivierungsstrategie.",
        bausteine: [
          "Spam- und Phishing-Schutz",
          "DKIM, SPF und DMARC-Konfiguration",
          "Mailbox-Sicherheitsrichtlinien",
          "Archivierung nach betrieblichen und gesetzlichen Anforderungen",
        ],
        ergebnis:
          "E-Mail als strukturierter und gesicherter Kommunikationskanal – mit klarer Trennung zwischen operativem Betrieb und Archivierung.",
      },
      {
        überschrift: "Backup und Wiederherstellung",
        pfadKennung: "backup-und-wiederherstellung",
        verlinkung: "/leistungen/backup-und-wiederherstellung",
        einführung:
          "Datensicherung existiert oft auf dem Papier – aber ob eine Wiederherstellung im Ernstfall klappt, ist selten geprüft. Dieser Baustein schließt diese Lücke.",
        auslöserText:
          "Datenverluste, nicht geprüfte Backups oder unklare Wiederherstellungsverantwortlichkeit.",
        bausteine: [
          "Server- und Cloud-Backups",
          "Client-Datensicherung",
          "Regelmäßige Wiederherstellungstests",
          "Dokumentierte Recovery-Prozesse und Verantwortlichkeiten",
        ],
        ergebnis:
          "Datensicherung, die nicht nur auf dem Papier existiert – mit getesteten Prozessen und klar geregelter Verantwortung.",
      },
      {
        überschrift: "Endpoint-Schutz und Monitoring",
        pfadKennung: "endpoint-schutz-und-monitoring",
        verlinkung: "/leistungen/endpoint-schutz-und-monitoring",
        einführung:
          "Endgeräte sind oft der blinde Fleck im IT-Betrieb. Dieser Baustein schafft Sichtbarkeit und stellt sicher, dass Auffälligkeiten früh erkannt und eingeordnet werden.",
        auslöserText:
          "Ungeschützte Endgeräte, fehlende Sichtbarkeit oder unstrukturierte Patch-Prozesse.",
        bausteine: [
          "Endpoint Detection and Response (EDR)",
          "Patch-Management und Software-Inventar",
          "Geräteverwaltung und -inventarisierung",
          "Regelmäßige Sicherheitsberichte und Auswertungen",
        ],
        ergebnis:
          "Endgeräte im Blick – mit strukturiertem Schutz, nachvollziehbaren Meldungen und klaren Verantwortlichkeiten.",
      },
      {
        überschrift: "Security Awareness",
        pfadKennung: "security-awareness",
        verlinkung: "/leistungen/security-awareness",
        einführung:
          "Mitarbeitende sind häufig der letzte Schutzwall vor einem Angriff. Dieser Baustein verankert Sicherheitsbewusstsein im Alltag – nicht als Pflichtschulung.",
        auslöserText:
          "Mitarbeitende als häufiger Einstiegspunkt für Angriffe oder fehlendes Sicherheitsbewusstsein im Team.",
        bausteine: [
          "Gezielte Schulungsmaßnahmen",
          "Phishing-Simulationen",
          "Richtlinien für sicheres Verhalten",
          "Wiederkehrende Awareness-Kommunikation im Arbeitsalltag",
        ],
        ergebnis:
          "Sicherheitsbewusstsein als Teil des Arbeitsalltags – nicht als einmalige Pflichtveranstaltung.",
      },
      {
        überschrift: "Netzwerk und Infrastruktur",
        pfadKennung: "netzwerk-und-infrastruktur",
        verlinkung: "/leistungen/netzwerk-und-infrastruktur",
        einführung:
          "Ein historisch gewachsenes Netzwerk ohne klare Segmentierung ist schwer zu schützen und schwerer zu betreiben. Dieser Baustein schafft Struktur als Grundlage.",
        auslöserText:
          "Unstrukturierte Netzwerke, fehlendes Segmentierungskonzept oder mangelnde Dokumentation der Infrastruktur.",
        bausteine: [
          "Netzwerksegmentierung und VLAN-Konzepte",
          "Firewall-Konfiguration und -Monitoring",
          "VPN und Remote-Access-Konzepte",
          "Dokumentation der Netzwerktopologie",
        ],
        ergebnis:
          "Eine strukturierte Infrastruktur als belastbare Grundlage – klar dokumentiert, nachvollziehbar und auf Ihren Betrieb abgestimmt.",
      },
    ],
  },
  laufendeBetreuung: {
    vorzeile: "Laufende Betreuung",
    überschrift: "Managed Service als fortlaufender Prozess",
    diagrammTitel: "Vier Schritte des fortlaufenden Managed-Service-Prozesses",
    beschreibung:
      "Einmalige Maßnahmen greifen zu kurz. Sicherheit und stabiler Betrieb entstehen durch einen strukturierten Zyklus, der kontinuierlich wiederkehrt.",
    zyklus: [
      {
        überschrift: "Monitoring und Erkennung",
        fließtext: "Sicherheitsrelevante Ereignisse und Betriebsauffälligkeiten werden laufend beobachtet und eingeordnet.",
      },
      {
        überschrift: "Bewertung und Priorisierung",
        fließtext: "Erkannte Themen werden fachlich bewertet und in eine sinnvolle Bearbeitungsreihenfolge gebracht.",
      },
      {
        überschrift: "Umsetzung und Anpassung",
        fließtext: "Maßnahmen werden umgesetzt, dokumentiert und bei Bedarf nachjustiert.",
      },
      {
        überschrift: "Weiterentwicklung",
        fließtext: "Die IT-Umgebung wird regelmäßig auf neue Anforderungen, Bedrohungslagen und technische Entwicklungen hin geprüft.",
      },
    ],
    hervorhebung:
      "Planbar betreut bedeutet: feste Ansprechpartner, klare Prozesse und eine IT-Umgebung, die nicht zwischen Notfällen reaktiv geflickt wird.",
    mittelbeschriftung: "Betrieb",
  },
  projekte: {
    vorzeile: "Projektleistungen",
    überschrift: "Wenn strukturierte Änderungen anstehen",
    beschreibung:
      "Neben dem laufenden Managed Service übernehmen wir Projekte, die eine klare Ausgangslage, einen Umfang und einen definierten Abschluss haben.",
    kacheln: [
      {
        nummer: "01",
        überschrift: "IT-Infrastruktur-Projekte",
        fließtext: "Strukturierte Planung und Umsetzung von Infrastrukturvorhaben – vom Netzwerkdesign und Serverkonsolidierung bis zum vollständigen Rollout.",
      },
      {
        nummer: "02",
        überschrift: "Migrationen und Umstellungen",
        fließtext: "Cloud-Migrationen, Plattformwechsel oder Tenant-Konsolidierungen – mit klarem Scope, dokumentiertem Ablauf und definiertem Übergabepunkt.",
      },
      {
        nummer: "03",
        überschrift: "Sicherheitskonzepte und Analysen",
        fließtext: "Strukturierte Bestandsaufnahme der IT-Sicherheitslage – mit Risikobewertung und priorisierten, umsetzbaren Handlungsempfehlungen.",
      },
      {
        nummer: "04",
        überschrift: "Onboarding und Transition",
        fließtext: "Strukturierter Übergang zu Franken Solution – mit Bestandsaufnahme, Schnittstellendokumentation und Einarbeitung in Ihre Umgebung.",
      },
    ],
  },
  nächsterSchritt: {
    vorzeile: "Nächster Schritt",
    überschrift: "Sicherheit und Betrieb. Klar aufgestellt.",
    beschreibung:
      "Wenn Ihre IT professioneller und planbarer aufgestellt werden soll, ist ein erstes Beratungsgespräch der saubere Einstieg.",
    primärerAufruf: {
      beschriftung: "Kontakt aufnehmen",
      verlinkung: "/kontakt",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungen ansehen",
      verlinkung: "/leistungen",
    },
    hinweis: "Placeholder: Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
  },
  leistungsgruppeDetail: {
    zurückLink: "Alle Leistungen",
    vorzeileGruppe: "Leistungsgruppe",
    vorzeileAuslöser: "Typischer Auslöser",
    vorzeileBausteine: "Was wir konkret übernehmen",
    bausteineÜberschrift: "Vier Bausteine, klar verantwortet.",
    vorzeileErgebnis: "Was Sie erreichen",
    nächsterSchritt: {
      vorzeile: "Nächster Schritt",
      überschriftAnfang: "Soll",
      überschriftEnde: "bei Ihnen sauber aufgestellt werden?",
      fließtext: "Ein erstes Beratungsgespräch ist der saubere Einstieg – ohne Verkaufsdruck.",
      primärerAufruf: { beschriftung: "Kontakt aufnehmen", verlinkung: "/kontakt" },
      sekundärerAufruf: { beschriftung: "Alle Leistungen", verlinkung: "/leistungen" },
    },
  },
} as const;

export type LeistungenContent = typeof leistungenContent;
export type LeistungenHeroContent = LeistungenContent["kopfbereich"];
export type LeistungenSituationsContent = LeistungenContent["situationen"];
export type LeistungenPillarsContent = LeistungenContent["leistungsgruppen"];
export type LeistungenPillarGroup = LeistungenContent["leistungsgruppen"]["gruppen"][number];
export type LeistungenOngoingContent = LeistungenContent["laufendeBetreuung"];
export type LeistungenProjectsContent = LeistungenContent["projekte"];
export type LeistungenCtaContent = LeistungenContent["nächsterSchritt"];
