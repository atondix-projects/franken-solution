export const notFoundContent = {
  vorzeile: "404 · Nicht gefunden",
  überschrift: "Diese Seite existiert nicht mehr.",
  einleitung: "Die aufgerufene Adresse wurde verschoben, umbenannt oder wurde nie veröffentlicht. Kehren Sie zur Startseite zurück oder sehen Sie sich unsere Leistungen an.",
  primärerAufruf: { beschriftung: "Zur Startseite", verlinkung: "/" },
  sekundärerAufruf: { beschriftung: "Leistungen ansehen", verlinkung: "/leistungen" },
} as const;

export type NotFoundContent = typeof notFoundContent;
