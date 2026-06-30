export const leistungenContent = {
  kopfbereich: {
    vorzeile: "Leistungen",
    überschrift: "Sechs Bausteine. Ein sicherer und stabiler IT-Betrieb.",
    diagrammTitel: "Managed Service mit sechs verlinkten Leistungsgruppen",
    einleitung:
      "Jede Leistungsgruppe kann einzeln eingesetzt werden. Zusammen entsteht daraus ein Managed Service, der Sicherheit, Stabilität und laufende Betreuung sinnvoll verbindet.",
    primärerAufruf: {
      beschriftung: "Erstgespräch vereinbaren",
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
    überschrift: "Welche Situation passt zu Ihrer aktuellen Lage?",
    tabellenKöpfe: {
      situation: "Ausgangslage",
      ansatz: "Sinnvoller Einstieg",
    },
    beschreibung:
      "Häufig hängen mehrere Themen zusammen. Die Übersicht zeigt, wo ein sinnvoller erster Ansatzpunkt liegt.",
    zeilen: [
      {
        situation:
          "Konten, Berechtigungen und Admin-Zugänge sind nicht klar geregelt oder dokumentiert",
        leistungsgruppen: [
          { beschriftung: "Identität & Zugriff", sprungZiel: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation:
          "Phishing-Mails erreichen Mitarbeitende oder Postfächer wurden bereits kompromittiert",
        leistungsgruppen: [
          { beschriftung: "E-Mail-Sicherheit", sprungZiel: "#email-sicherheit-und-archivierung" },
          { beschriftung: "Awareness und Prozesse", sprungZiel: "#security-awareness" },
        ],
      },
      {
        situation:
          "Backups sind vorhanden, aber ob eine Wiederherstellung funktioniert, ist unklar",
        leistungsgruppen: [
          { beschriftung: "Backup & Recovery", sprungZiel: "#backup-und-wiederherstellung" },
        ],
      },
      {
        situation:
          "Endgeräte sind uneinheitlich verwaltet, Updates fehlen oder Sicherheitsrisiken sind nicht transparent",
        leistungsgruppen: [
          { beschriftung: "Endpoint Management", sprungZiel: "#endpoint-schutz-und-monitoring" },
        ],
      },
      {
        situation:
          "Cyberversicherung, Datenschutz oder Audits verlangen nachvollziehbare Schutzmaßnahmen",
        leistungsgruppen: [
          { beschriftung: "Awareness und Prozesse", sprungZiel: "#security-awareness" },
          { beschriftung: "Identität & Zugriff", sprungZiel: "#identitaet-und-zugriffsschutz" },
        ],
      },
      {
        situation: "Das Netzwerk ist historisch gewachsen und nicht mehr sauber dokumentiert",
        leistungsgruppen: [
          { beschriftung: "Netzwerk & Infrastruktur", sprungZiel: "#netzwerk-und-infrastruktur" },
        ],
      },
    ],
  },
  leistungsgruppen: {
    vorzeile: "Leistungsgruppen",
    überschrift: "Was wir konkret übernehmen",
    beschreibung:
      "Jede Leistungsgruppe hat einen klaren Schwerpunkt. Auslöser, Maßnahmen und erwartetes Ergebnis sind transparent beschrieben.",
    detailLinkText: "Details ansehen",
    gruppen: [
      {
        überschrift: "Identität und Zugriffsschutz",
        pfadKennung: "identitaet-und-zugriffsschutz",
        verlinkung: "/leistungen/identitaet-und-zugriffsschutz",
        einführung:
          "Konten und Berechtigungen sind ein häufiger Einstiegspunkt für Angriffe. Dieser Baustein sorgt dafür, dass Zugriffe klar geregelt, geschützt und nachvollziehbar dokumentiert werden.",
        auslöserText:
          "Konten ohne MFA, unklare Berechtigungsstrukturen oder unkontrollierte Admin-Zugänge.",
        bausteine: [
          "MFA und Conditional Access",
          "Rollenbasierte Berechtigungsstrukturen",
          "Privileged Identity Management",
          "Lifecycle-Management für Konten und Gruppen",
        ],
        ergebnis:
          "Klare Zugriffe für die richtigen Personen – mit nachvollziehbaren Regeln und dokumentierten Verantwortlichkeiten.",
        nächsterSchrittTitel:
          "Sollen Identitäten und Zugriffe bei Ihnen sauber geregelt werden?",
      },
      {
        überschrift: "E-Mail-Sicherheit und Archivierung",
        pfadKennung: "email-sicherheit-und-archivierung",
        verlinkung: "/leistungen/email-sicherheit-und-archivierung",
        einführung:
          "E-Mail ist nach wie vor einer der häufigsten Angriffswege. Dieser Baustein schützt den Kommunikationskanal und sorgt dafür, dass Archivierung nachvollziehbar geregelt ist.",
        auslöserText:
          "Phishing-Mails erreichen Mitarbeitende, Postfächer wurden kompromittiert oder eine klare Archivierungsstrategie fehlt.",
        bausteine: [
          "Spam- und Phishing-Schutz",
          "SPF, DKIM und DMARC-Konfiguration",
          "Postfach-Sicherheitsrichtlinien",
          "Archivierung nach betrieblichen und gesetzlichen Anforderungen",
        ],
        ergebnisKurz:
          "Geschützte E-Mail-Kommunikation mit revisionssicherer Archivierung.",
        ergebnis:
          "Geschützte E-Mail-Kommunikation mit revisionssicherer Archivierung und klarer Trennung zwischen Betrieb und Aufbewahrung.",
        nächsterSchrittTitel:
          "Soll Ihre E-Mail-Sicherheit klar geregelt und die Archivierung revisionssicher aufgestellt werden?",
      },
      {
        überschrift: "Backup und Wiederherstellung",
        pfadKennung: "backup-und-wiederherstellung",
        verlinkung: "/leistungen/backup-und-wiederherstellung",
        einführung:
          "Datensicherung existiert oft auf dem Papier – aber ob eine Wiederherstellung im Ernstfall klappt, ist selten geprüft. Diese Leistungsgruppe schließt genau diese Lücke.",
        auslöserText:
          "Datenverlust, ungeprüfte Backups oder unklare Verantwortlichkeiten bei der Wiederherstellung.",
        bausteine: [
          "Server- und Cloud-Backups",
          "Client-Datensicherung",
          "Regelmäßige Wiederherstellungstests",
          "Dokumentierte Recovery-Prozesse und Verantwortlichkeiten",
        ],
        ergebnis:
          "Datensicherung, die im Ernstfall funktioniert – mit getesteten Wiederherstellungsprozessen und klar geregelten Verantwortlichkeiten.",
        nächsterSchrittTitel:
          "Soll Ihre Datensicherung im Ernstfall zuverlässig funktionieren?",
      },
      {
        überschrift: "Endpoint Management",
        pfadKennung: "endpoint-schutz-und-monitoring",
        verlinkung: "/leistungen/endpoint-schutz-und-monitoring",
        einführung:
          "Endgeräte sind oft der blinde Fleck im IT-Betrieb. Dieser Baustein schafft Sichtbarkeit und stellt sicher, dass Auffälligkeiten früh erkannt und eingeordnet werden.",
        auslöserText:
          "Endgeräte sind uneinheitlich verwaltet, Updates fehlen oder Sicherheitsrisiken sind nicht ausreichend sichtbar.",
        bausteine: [
          "Endpoint Detection and Response (EDR)",
          "Patch-Management und Software-Inventar",
          "Geräteverwaltung und -inventarisierung",
          "Regelmäßige Sicherheitsberichte und Auswertungen",
        ],
        ergebnis:
          "Endgeräte bleiben geschützt, aktuell und im Blick – mit klaren Meldungen, strukturierten Auswertungen und geregelten Verantwortlichkeiten.",
        nächsterSchrittTitel:
          "Sollen Ihre Endgeräte geschützt, verwaltet und laufend überwacht werden?",
      },
      {
        überschrift: "Awareness und Prozesse",
        pfadKennung: "security-awareness",
        verlinkung: "/leistungen/security-awareness",
        einführung:
          "Technische Schutzmaßnahmen reichen allein nicht aus. Security Awareness sorgt dafür, dass Mitarbeitende typische Angriffe erkennen, richtig reagieren und Sicherheit im Arbeitsalltag präsent bleibt.",
        auslöserText:
          "Phishing und Social Engineering zielen direkt auf Ihre Mitarbeitenden. Fehlt ein gemeinsames Sicherheitsbewusstsein, steigt das Risiko für erfolgreiche Angriffe.",
        bausteine: [
          "Praxisnahe Schulungsmaßnahmen",
          "Phishing-Simulationen",
          "Klare Verhaltensrichtlinien",
          "Regelmäßige Sicherheitsimpulse im Arbeitsalltag",
        ],
        ergebnis:
          "Sicherheitsbewusstsein, das im Arbeitsalltag wirkt – mit klaren Regeln, realistischen Übungen und regelmäßigen Impulsen.",
        nächsterSchrittTitel:
          "Soll Sicherheitsbewusstsein in Ihrem Unternehmen dauerhaft verankert werden?",
      },
      {
        überschrift: "Netzwerk und Infrastruktur",
        pfadKennung: "netzwerk-und-infrastruktur",
        verlinkung: "/leistungen/netzwerk-und-infrastruktur",
        einführung:
          "Netzwerk und Infrastruktur bilden die Grundlage für sicheren IT-Betrieb. Diese Leistungsgruppe sorgt für klare Strukturen, getrennte Bereiche und eine dokumentierte Basis, auf der sich Systeme verlässlich betreiben lassen.",
        auslöserText:
          "Historisch gewachsene Netzwerke, fehlende Segmentierung oder unvollständige Dokumentation der Infrastruktur.",
        bausteine: [
          "Netzwerksegmentierung und VLAN-Konzepte",
          "Firewall-Konfiguration und Monitoring",
          "VPN- und Remote-Access-Konzepte",
          "Dokumentation der Netzwerktopologie",
        ],
        ergebnis:
          "Eine strukturierte Netzwerkinfrastruktur als Grundlage für sicheren IT-Betrieb – klar dokumentiert, sinnvoll segmentiert und auf Ihr Unternehmen abgestimmt.",
        nächsterSchrittTitel:
          "Soll Ihre Netzwerkinfrastruktur sicher und strukturiert aufgestellt werden?",
      },
    ],
  },
  laufendeBetreuung: {
    vorzeile: "Laufende Betreuung",
    überschrift: "Managed Service heißt: dranbleiben.",
    diagrammTitel: "Vier Schritte des fortlaufenden Managed-Service-Prozesses",
    beschreibung:
      "Einmalige Maßnahmen reichen selten aus. Sichere und stabile IT entsteht durch einen strukturierten Zyklus aus Überwachung, Bewertung, Umsetzung und Weiterentwicklung.",
    zyklus: [
      {
        überschrift: "Monitoring und Erkennung",
        fließtext:
          "Sicherheitsrelevante Ereignisse, Systemzustände und Auffälligkeiten werden laufend überwacht – damit Risiken und Störungen früh sichtbar werden.",
      },
      {
        überschrift: "Bewertung und Priorisierung",
        fließtext:
          "Erkannte Themen werden nach Risiko, Dringlichkeit und Nutzen bewertet – damit klar ist, was zuerst sinnvoll bearbeitet wird.",
      },
      {
        überschrift: "Umsetzung und Anpassung",
        fließtext:
          "Priorisierte Maßnahmen werden geplant, umgesetzt und dokumentiert – bei Bedarf angepasst, ohne den laufenden Betrieb unnötig zu stören.",
      },
      {
        überschrift: "Weiterentwicklung",
        fließtext:
          "Ihre IT-Umgebung wird regelmäßig überprüft und an neue Anforderungen, Sicherheitsrisiken und technische Entwicklungen angepasst.",
      },
    ],
    hervorhebung:
      "Planbar betreut bedeutet: feste Ansprechpartner, klare Prozesse und eine IT-Umgebung, die kontinuierlich im Blick bleibt – nicht erst, wenn etwas ausfällt.",
    mittelbeschriftung: "Betrieb",
  },
  projekte: {
    vorzeile: "Projektleistungen",
    überschrift: "Wenn strukturierte Änderungen anstehen",
    beschreibung:
      "Neben der laufenden Betreuung übernehmen wir klar abgegrenzte IT-Projekte – mit definierter Ausgangslage, abgestimmtem Umfang und sauberem Abschluss.",
    kacheln: [
      {
        nummer: "01",
        überschrift: "IT-Infrastruktur-Projekte",
        fließtext:
          "Strukturierte Infrastrukturprojekte – von Netzwerkdesign und Serveranpassungen bis zum geordneten Rollout im laufenden Betrieb.",
      },
      {
        nummer: "02",
        überschrift: "Migrationen und Umstellungen",
        fließtext:
          "Cloud-Migrationen, Plattformwechsel oder die Zusammenführung von Microsoft-365-Umgebungen – mit klarem Umfang, abgestimmtem Ablauf und definiertem Übergabepunkt.",
      },
      {
        nummer: "03",
        überschrift: "Sicherheitskonzepte und Analysen",
        fließtext:
          "Strukturierte Analyse der IT-Sicherheitslage – mit Risikobewertung, klarer Priorisierung und umsetzbaren Handlungsempfehlungen.",
      },
      {
        nummer: "04",
        überschrift: "Onboarding und Transition",
        fließtext:
          "Strukturierter Übergang von bestehender Betreuung zu Franken Solution – mit Bestandsaufnahme, sauberer Übergabe und Einarbeitung in Ihre IT-Umgebung.",
      },
    ],
  },
  nächsterSchritt: {
    vorzeile: "Nächster Schritt",
    überschrift: "Sichere Unternehmens-IT. Klar priorisiert. Planbar betreut.",
    beschreibung:
      "In einem ersten Gespräch klären wir, wo Ihre IT steht, welche Risiken bestehen und welche nächsten Schritte sinnvoll sind.",
    primärerAufruf: {
      beschriftung: "Erstgespräch vereinbaren",
      verlinkung: "/kontakt",
    },
    sekundärerAufruf: {
      beschriftung: "Leistungsgruppen ansehen",
      verlinkung: "#leistungsgruppen",
    },
    hinweis: "Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch.",
  },
  leistungsgruppeDetail: {
    zurückLink: "Alle Leistungen",
    vorzeileGruppe: "Leistungsgruppe",
    vorzeileAuslöser: "Typischer Auslöser",
    vorzeileBausteine: "Was wir konkret übernehmen",
    bausteineÜberschrift: "Vier Maßnahmenbereiche, klar verantwortet.",
    vorzeileErgebnis: "Was Sie erreichen",
    nächsterSchritt: {
      vorzeile: "Nächster Schritt",
      fließtext:
        "In einem ersten Gespräch klären wir, wo Ihre IT steht, welche Risiken bestehen und welche nächsten Schritte sinnvoll sind.",
      primärerAufruf: { beschriftung: "Erstgespräch vereinbaren", verlinkung: "/kontakt" },
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
