export const datenschutzContent = {
  eyebrow: "Rechtliches",
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO",
  notes: [
    "Verantwortlicher: Franken Solution, Winzelbürgstr. 9, 90491 Nürnberg – kontakt@franken-solution.de",
    "Erhebung von Daten: Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Leistungen erforderlich ist.",
    "Zweck der Verarbeitung: Kontaktanfragen, Vertragserfüllung sowie berechtigte Interessen gemäß Art. 6 DSGVO.",
    "Hosting: Placeholder: Anbieter und Serverstandort",
    "Kontaktseite / Standortkarte: Auf der Kontaktseite zeigen wir eine statische Karten-Vorschau als selbst gehostetes Bild (OpenStreetMap-Daten, © OpenStreetMap contributors). Beim Aufruf der Seite werden dafür keine Karten-Dienste von Drittanbietern geladen. Der Link „In Google Maps öffnen“ führt erst bei Klick zu Google Maps.",
    "Cookies: Placeholder: Beschreibung eingesetzter Cookies und Dienste",
    "Ihre Rechte: Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21).",
    "Beschwerderecht: Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.",
    "Kontakt Datenschutz: Placeholder: Datenschutzbeauftragter (sofern bestellt)",
  ],
  cta: { label: "Zur Startseite", href: "/" },
} as const;

export type DatenschutzContent = typeof datenschutzContent;
