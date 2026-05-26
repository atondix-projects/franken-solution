export const impressumContent = {
  vorzeile: "Rechtliches",
  überschrift: "Impressum",
  beschreibung: "Angaben gemäß § 5 TMG",
  hinweise: [
    "Unternehmensname: Franken Solution",
    "Adresse: Winzelbürgstr. 9, 90491 Nürnberg, Deutschland",
    "Telefon: 0911 95898731",
    "E-Mail: kontakt@franken-solution.de",
    "Vertreten durch: Markus Maenner, Sergej Stasenko (Geschäftsführer)",
    "Handelsregister: Placeholder: HRB-Nummer",
    "Registergericht: Placeholder: Amtsgericht",
    "Umsatzsteuer-ID: Placeholder: USt-IdNr. gemäß § 27 a UStG",
  ],
  nächsterSchritt: { beschriftung: "Zur Startseite", verlinkung: "/" },
} as const;

export type ImpressumContent = typeof impressumContent;
