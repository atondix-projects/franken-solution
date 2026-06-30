export const impressumContent = {
  vorzeile: "Rechtliches",
  überschrift: "Impressum",
  beschreibung: "Angaben gemäß § 5 TMG",
  hinweise: ["Franken-Solution Maenner und Stasenko GbR", "Winzelbürgstr.9", "90491 Nürnberg", "Telefon: +49 (0)911 95898731", "Telefax: +49 (0)911 96844888", "E-Mail: kontakt@franken-solution.de", "Vertreten durch:", "Markus Maenner", "Sergej Stasenko", "Umsatzsteuer-ID:", "Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:", "Umsatzsteuer-ID: DE324774956"],
  nächsterSchritt: { beschriftung: "Zur Startseite", verlinkung: "/" },
} as const;

export type ImpressumContent = typeof impressumContent;
