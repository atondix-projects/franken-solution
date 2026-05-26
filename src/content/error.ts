export const errorContent = {
  vorzeile: "Fehler · Technischer Vorfall",
  überschrift: "Etwas ist schiefgelaufen.",
  einleitung: "Die Seite konnte nicht geladen werden. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück. Sollte der Fehler weiter bestehen, teilen Sie uns die Referenznummer mit.",
  wiederholenBeschriftung: "Erneut versuchen",
  startseiteBeschriftung: "Zur Startseite",
  referenzBeschriftung: "Referenz",
} as const;

export type ErrorContent = typeof errorContent;
