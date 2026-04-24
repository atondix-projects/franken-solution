export const notFoundContent = {
  eyebrow: "404 · Nicht gefunden",
  title: "Diese Seite existiert nicht mehr.",
  lead: "Die aufgerufene Adresse wurde verschoben, umbenannt oder wurde nie veröffentlicht. Kehren Sie zur Startseite zurück oder sehen Sie sich unsere Leistungen an.",
  primaryCta: { label: "Zur Startseite", href: "/" },
  secondaryCta: { label: "Leistungen ansehen", href: "/leistungen" },
} as const;

export type NotFoundContent = typeof notFoundContent;
