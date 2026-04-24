export const errorContent = {
  eyebrow: "Fehler · Technischer Vorfall",
  title: "Etwas ist schiefgelaufen.",
  lead: "Die Seite konnte nicht geladen werden. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück. Sollte der Fehler weiter bestehen, teilen Sie uns die Referenznummer mit.",
  retryLabel: "Erneut versuchen",
  homeLabel: "Zur Startseite",
  digestLabel: "Referenz",
} as const;

export type ErrorContent = typeof errorContent;
