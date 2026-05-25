export const impressumContent = {
  eyebrow: "Rechtliches",
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG",
  notes: [
    "Unternehmensname: Franken Solution",
    "Adresse: Winzelbürgstr. 9, 90491 Nürnberg, Deutschland",
    "Telefon: 0911 95898731",
    "E-Mail: kontakt@franken-solution.de",
    "Vertreten durch: Markus Maenner, Sergej Stasenko (Geschäftsführer)",
    "Handelsregister: Placeholder: HRB-Nummer",
    "Registergericht: Placeholder: Amtsgericht",
    "Umsatzsteuer-ID: Placeholder: USt-IdNr. gemäß § 27 a UStG",
  ],
  cta: { label: "Zur Startseite", href: "/" },
} as const;

export type ImpressumContent = typeof impressumContent;
