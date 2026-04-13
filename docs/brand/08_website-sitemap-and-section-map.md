# Website Sitemap And Section Map

## Purpose
- Uebersetzt die vorhandenen Brand-Dokumente und die aktuelle Repo-Copy in eine belastbare Informationsarchitektur fuer die Website.
- Definiert, welche Seiten es geben sollte, welche Aufgabe jede Seite hat und welche Informationen in welche Sektionen gehoeren.
- Dient als Prompt-konforme Grundlage fuer Copy-, Design- und Page-Generation.

## Authority
- Primaerquelle: `docs/brand/01_brand-context.md` bis `07_terminology-and-ai-rules.md`.
- Sekundaerquelle: aktueller Repo-Stand in `src/app` und `src/components`.
- Stand der Auswertung: 13. April 2026.
- Wenn UI-Copy und Brand-Dokumente widersprechen, gewinnen immer die Brand-Dokumente.

## Current Content Snapshot

### Beibehalten
- Regionalsignal Franken/Nuernberg als Vertrauensmarker.
- CTA-Richtung Beratung statt aggressiver Sales-CTA.
- Visuelle Richtung mit IBM Plex, Rot als Signalfarbe und technischer, ruhiger Anmutung.
- Aussage `Sichere hybride IT, planbar betreut` als starke, markenkonforme Verdichtung.

### Ersetzen Oder Einhegen
- `Portfolio` nicht als Top-Level-Navigation oder Kernseite weiterfuehren.
- `Resourcen` auf `Ressourcen` normalisieren.
- `IT-Service`, `Cloud-Loesungen`, `Support` nicht als Hero-Kernbotschaft verwenden, weil zu breit.
- `digitale Transformation` nicht als generellen Meta-Claim verwenden.
- `FrankenSolution` auf `Franken Solution` normalisieren, sofern kein juristischer Sonderfall vorliegt.

## IA-Prinzipien
- Die Website fuehrt immer von Risiko und Ausgangslage zu Struktur, Umsetzung und laufender Betreuung.
- Leistungen und Arbeitsweise stehen vor Unternehmenshistorie.
- `Managed Service` ist das Betriebsmodell, einzelne Leistungen sind Beweisbausteine dieses Modells.
- Regionale Naehe ist ein Vertrauenssignal, aber nie das Hauptargument.
- Ressourcen sind Support-Content und kein Ersatz fuer Leistungsseiten.
- Jede Seite braucht einen klaren naechsten Schritt: `Beratung anfragen` oder `Sicherheitscheck besprechen`.
- Proof-Elemente bleiben schlank, bis echte Referenzen, Zahlen oder Zertifizierungen vorliegen.

## Empfohlene Sitemap

### Phase 1: Kernseiten
| Prioritaet | Seite | URL | Aufgabe | Primaerer CTA |
| --- | --- | --- | --- | --- |
| P1 | Startseite | `/` | Positionierung, Vertrauen, Uebersicht, Einstieg | `Sicherheitscheck besprechen` |
| P1 | Leistungen Uebersicht | `/leistungen` | Gesamtangebot strukturieren und in Themenfelder aufteilen | `Leistungen ansehen` |
| P1 | Identitaet Und Zugriffsschutz | `/leistungen/identitaet-und-zugriffsschutz` | MFA, Zugriffsrichtlinien, Identitaetsschutz erklaeren | `Beratung anfragen` |
| P1 | E-Mail-Sicherheit Und Archivierung | `/leistungen/e-mail-sicherheit-und-archivierung` | Spam-, Phishing-, Malware-Schutz und Archivierung einordnen | `Beratung anfragen` |
| P1 | Backup Und Wiederherstellung | `/leistungen/backup-und-wiederherstellung` | Cloud-, Server- und Client-Backups plus Restore-Tests darstellen | `Beratung anfragen` |
| P1 | Endpoint-Schutz Und Monitoring | `/leistungen/endpoint-schutz-und-monitoring` | Endpoint-Schutz, Monitoring und regelmaessige Pruefungen zusammenfassen | `Beratung anfragen` |
| P1 | Security Awareness | `/leistungen/security-awareness` | Schulung und Managed Awareness als wiederkehrende Sicherheitsmassnahme positionieren | `Beratung anfragen` |
| P1 | Sicherheitscheck | `/sicherheitscheck` | Conversion-Seite fuer Erstgespraech, Bestandsaufnahme und priorisierten Massnahmenplan | `Sicherheitscheck anfragen` |
| P1 | Ueber Franken Solution | `/ueber-franken-solution` | Arbeitsweise, Ansprechpartner-Logik, Region und Standards erklaeren | `Kontakt aufnehmen` |
| P1 | Kontakt | `/kontakt` | Anfrage, Erstgespraech und regionale Erreichbarkeit abbilden | `Beratung anfragen` |

### Phase 2: Sekundaerseiten
| Prioritaet | Seite | URL | Aufgabe | Primaerer CTA |
| --- | --- | --- | --- | --- |
| P2 | Ressourcen Hub | `/ressourcen` | Wissen, Checklisten, FAQ und spaetere Artikel buendeln | `Sicherheitscheck besprechen` |
| P2 | FAQ | `/ressourcen/faq` | wiederkehrende Einwaende und Grundsatzfragen beantworten | `Kontakt aufnehmen` |
| P2 | Projekte Und Modernisierung | `/leistungen/projekte-und-modernisierung` | Migrationen, Konsolidierung und Modernisierung als angrenzende Projektleistung zeigen | `Projekt besprechen` |

### Utility-Seiten
| Prioritaet | Seite | URL | Aufgabe |
| --- | --- | --- | --- |
| P1 | Impressum | `/impressum` | Rechtliche Pflichtseite |
| P1 | Datenschutz | `/datenschutz` | Rechtliche Pflichtseite |

## Empfohlene Navigation

### Primary Nav
- `Start`
- `Leistungen`
- `Sicherheitscheck`
- `Ueber Franken Solution`
- `Kontakt`

### Secondary Nav Oder Footer
- `Ressourcen`
- `FAQ`
- `Impressum`
- `Datenschutz`

### Nicht Empfohlen
- `Portfolio`
- `Resourcen`
- allgemeine Sammelbegriffen wie `IT-Service` oder `Support` als Navigationsanker

## Informations-Zuordnung Nach Sektion
| Information | Gehoert Primaer In Diese Sektion | Nicht Dort Platzieren |
| --- | --- | --- |
| Kernpositionierung | Hero der Startseite, Hero der Leistungsuebersicht | Footer allein, About-Seite als erste Erklaerung |
| Zielgruppe | `Fuer wen wir arbeiten`, Problemblock, Kontaktseite | nur in FAQ verstecken |
| Typische Ausloeser | Homepage-Problemblock, Sicherheitscheck-Seite, Leistungsuebersicht | Legal-Seiten, About-Hero |
| Gewuenschte Outcomes | Nutzenblock, CTA-Naehe, Leistungsdetails | rein technische Tabellen ohne Kontext |
| Kernleistungen | Leistungsuebersicht, Servicekarten, Service-Detailseiten | Homepage-Hero als ungeordnete Liste |
| Managed-Service-Modell | Ablaufblock, Sicherheitscheck-Seite, Service-Detailseiten | isoliert auf Kontaktseite |
| Herstellerneutralitaet | Vertrauensblock, About-Seite, Service-Prozessabschnitt | als alleiniger Hero-Claim |
| Persoenliche Ansprechpartner | Vertrauensblock, About-Seite, Kontaktseite | nur Footer |
| Regionalbezug Franken/Nuernberg | Hero-Subline, Trust-Strip, Kontaktseite | jede zweite Zwischenheadline |
| DSGVO-konforme E-Mail-Archivierung | E-Mail-Sicherheitsseite, Leistungsuebersicht | genereller Markenclaim auf jeder Seite |
| Referenzen, Zahlen, Zertifikate | spaeterer Proof-Block, sobald belegt | bis dahin nicht erfinden |
| Ressourcen-Content | Ressourcen Hub, FAQ, Guide-Seiten | Leistungsseiten als Blog-Ersatz |

## Section Map Pro Seite

### Startseite `/`
- Ziel: Die Marke in einem Blick verstaendlich machen und vom diffusen IT-Problem zum strukturierten Sicherheits- und Betriebsansatz fuehren.
- Zielgruppe: Geschaeftsfuehrung, IT-Verantwortliche, Office- und Verwaltungsleitungen in KMU.
- Primaere Botschaft: Franken Solution sichert und betreibt hybride IT-Umgebungen fuer Unternehmen planbar, persoenlich und herstellerneutral.
- Primaerer CTA: `Sicherheitscheck besprechen`
- Sektionen:
1. Hero
   Klarer Positionierungssatz, regionale Einordnung, ruhiger CTA.
2. Problem- Und Ausloeserblock
   Historisch gewachsene IT, Phishing, Datenverlust, fehlende Planbarkeit.
3. Leistungs-Pfeiler
   Identitaet, E-Mail, Backup, Endpoint, Monitoring, Awareness.
4. Ablaufblock
   Bestandsaufnahme, priorisierter Massnahmenplan, Umsetzung, laufende Betreuung.
5. Vertrauensblock
   feste Ansprechpartner, klare Standards, Herstellerneutralitaet, verstaendliche Kommunikation.
6. Abschluss-CTA
   Beratung oder Sicherheitscheck als naechster Schritt.
- Nicht hier unterbringen:
  Gruenderstory, breit gestreute Techniklisten, unbewiesene Referenzen, aggressive Alarm-Sprache.

### Leistungen Uebersicht `/leistungen`
- Ziel: Das Gesamtangebot klar strukturieren und den Zusammenhang zwischen Einzelthemen und Managed Service sichtbar machen.
- Zielgruppe: Besucher mit konkreterem Informationsbedarf als auf der Startseite.
- Primaere Botschaft: Die Leistungen sind keine lose Technikliste, sondern Bausteine fuer sicheren und stabilen IT-Betrieb.
- Primaerer CTA: `Leistungen ansehen` oder `Beratung anfragen`
- Sektionen:
1. Intro-Hero
   Gesamtversprechen und Einordnung als Managed-Service-Modell.
2. Fuer Welche Situationen
   Typische Ausloeser und Betriebsprobleme.
3. Leistungsgruppen
   Karten oder Module fuer die einzelnen Service-Seiten.
4. Was Laufende Betreuung Bedeutet
   Monitoring, Wartung, Pruefung, Dokumentation, Weiterentwicklung.
5. Angrenzende Projektleistungen
   Migration, Modernisierung, Beratung, Konsolidierung.
6. CTA
   zu Detailseiten oder Sicherheitscheck.
- Nicht hier unterbringen:
  Preisstufen, SLA-Versprechen, Herstellerlisten ohne Kontext.

### Service-Detailseiten Unter `/leistungen/...`
- Ziel: Ein Leistungsfeld fachlich klar erklaeren, den Nutzen fuer Entscheider sichtbar machen und den Einstieg ins Gespraech erleichtern.
- Primaerer CTA: `Beratung anfragen`
- Gemeinsame Sektionslogik fuer jede Detailseite:
1. Hero
   Problem, Leistung und Ergebnis in einer Linie.
2. Ausgangslagen Und Risiken
   Typische Schwachstellen oder betriebliche Folgen.
3. Was Enthalten Ist
   Konkrete Leistungsbausteine.
4. Welcher Nutzen Entsteht
   Schutz, Stabilitaet, Nachvollziehbarkeit, weniger Ausfaelle.
5. Wie Es In Die Laufende Betreuung Passt
   Verbindung zum Managed-Service-Modell.
6. FAQ
   Einordnung, Abgrenzung, typische Rueckfragen.
7. CTA
   Beratung oder Sicherheitscheck.

#### Inhaltsschwerpunkte Pro Service-Seite
| Seite | Hauptproblem | Muss Rein | Nicht Ueberdehnen |
| --- | --- | --- | --- |
| `/leistungen/identitaet-und-zugriffsschutz` | kompromittierte Konten, unklare Rechte, fehlende MFA | MFA, Richtlinien, Zugriffslogik, Rollen, kontrollierter Zugriff | kein Identity-Buzzword-Sprech ohne Alltagsbezug |
| `/leistungen/e-mail-sicherheit-und-archivierung` | Phishing, Spam, Malware, Nachvollziehbarkeit im Mailverkehr | E-Mail-Schutz, Archivierung, Einordnung als klarer Baustein, optional Bezug zu Mail-Backups | Archivierung nicht als Gesamt-Compliance-Versprechen der Marke aufladen |
| `/leistungen/backup-und-wiederherstellung` | Datenverlust, fehlende Wiederanlauf-Sicherheit, Scheinsicherheit durch ungetestete Backups | Cloud-, Server- und Client-Backups, Restore-Tests, Dokumentation | keine Verfuegbarkeitsgarantien erfinden |
| `/leistungen/endpoint-schutz-und-monitoring` | unerkannte Vorfaelle, unsichere Endgeraete, fehlende Sichtbarkeit | Endpoint-Schutz, Monitoring, regelmaessige Sicherheitspruefungen | nicht wie ein SOC-Enterprise-Anbieter auftreten, wenn das nicht belegt ist |
| `/leistungen/security-awareness` | menschliche Fehler, wiederkehrende Phishing-Risiken | Mitarbeiterschulungen, wiederkehrende Awareness, Managed-Service-Einbindung | nicht als einmalige Schulung ohne Betriebskontext verkaufen |
| `/leistungen/projekte-und-modernisierung` | veraltete Struktur, Umzuege, Konsolidierung, Cloud- oder Server-Umbauten | Migrationen, Modernisierung, Beratung, Sicherheits- und Backup-Konzepte | nicht das Kernmodell vom Managed Service auf Projektgeschaeft verschieben |

### Sicherheitscheck `/sicherheitscheck`
- Ziel: Die wichtigste Conversion-Seite fuer Besucher mit akutem Handlungsbedarf oder konkretem Pruefungswunsch.
- Zielgruppe: Unternehmen mit Sicherheitsvorfaellen, Unklarheit ueber Risiken oder dem Wunsch nach strukturiertem Einstieg.
- Primaere Botschaft: Der Sicherheitscheck ist der saubere Einstieg von der Bestandsaufnahme zum priorisierten Massnahmenplan.
- Primaerer CTA: `Sicherheitscheck anfragen`
- Sektionen:
1. Hero
   Sicherheitscheck als Einstieg statt Alarm- oder Notfallseite.
2. Wann Der Check Sinnvoll Ist
   Phishing-Vorfaelle, unklare IT-Lage, Dienstleisterwechsel, Wachstum, Versicherungsdruck.
3. Was Geprueft Wird
   Identitaet, E-Mail, Backup, Endgeraete, Monitoring, Dokumentation.
4. Was Das Ergebnis Ist
   Risiken, Priorisierung, Massnahmenplan, naechste Schritte.
5. Wie Es Danach Weitergeht
   Umsetzung als Projekt oder laufende Betreuung.
6. FAQ
   Umfang, Vorbereitung, Beteiligte.
7. Anfrageblock
   Kontaktform, Region, Erwartungsmanagement.
- Nicht hier unterbringen:
  Incident-Response-Versprechen, 24/7-Claims, Panik-Sprache.

### Ueber Franken Solution `/ueber-franken-solution`
- Ziel: Vertrauen durch Arbeitsweise, Haltung und Zusammenarbeit aufbauen, ohne in eine lange Unternehmensgeschichte abzurutschen.
- Primaere Botschaft: Franken Solution arbeitet persoenlich, technisch fundiert, herstellerneutral und mit klaren Standards.
- Primaerer CTA: `Kontakt aufnehmen`
- Sektionen:
1. Intro
   Rolle als fokussierter B2B-Partner fuer IT-Sicherheit und sicheren IT-Betrieb.
2. So Arbeiten Wir
   Struktur, Standards, Dokumentation, klare Priorisierung.
3. Persoenliche Betreuung
   feste Ansprechpartner, verstaendliche Kommunikation, Entscheidungssicherheit.
4. Region Und Reichweite
   Franken/Nuernberg lokal, remote deutschlandweit fuer passende Leistungen.
5. Wofuer Wir Nicht Stehen
   kein Bauchladen, kein Privatkunden-Support, keine Einzelreparatur-Logik.
6. CTA
   Kontakt oder Sicherheitscheck.
- Nicht hier unterbringen:
  ausufernde Historie, erfundene Teamfotos, Folklore oder Heimatromantik.

### Kontakt `/kontakt`
- Ziel: Reibungsarmen Kontakt fuer qualifizierte B2B-Anfragen herstellen.
- Primaere Botschaft: Der erste Kontakt ist ruhig, strukturiert und auf Klaerung statt auf Verkaufsdruck ausgerichtet.
- Primaerer CTA: `Beratung anfragen`
- Sektionen:
1. Kontakt-Hero
   fuer wen die Anfrage gedacht ist und welche Themen passen.
2. Was Sie Mitbringen Koennen
   aktuelle Lage, bekannte Probleme, Zielbild, vorhandene Systeme.
3. Kontaktwege
   Formular, E-Mail, Telefon, regionale Verortung.
4. Erwartungsmanagement
   wie der Erstkontakt ablaeuft und was danach passiert.
5. Kurzer Vertrauensblock
   feste Ansprechpartner, klare Kommunikation, Herstellerneutralitaet.
- Nicht hier unterbringen:
  lange Leistungsbeschreibungen, Blog-Inhalte, unklare CTA-Dopplung.

### Ressourcen Hub `/ressourcen`
- Ziel: Wissensinhalte buendeln, ohne die Kernnavigation in Richtung Magazin oder Blog zu verschieben.
- Status: Erst live schalten, wenn mindestens drei belastbare Inhalte vorhanden sind.
- Primaere Botschaft: Ressourcen helfen bei Einordnung und Vorbereitung, ersetzen aber keine individuelle Analyse.
- Primaerer CTA: `Sicherheitscheck besprechen`
- Sektionen:
1. Hero
   Orientierung, fuer wen die Inhalte gedacht sind.
2. Themencluster
   Identitaet, E-Mail, Backup, Awareness, FAQ.
3. Inhalte Nach Lesetyp
   fuer Geschaeftsfuehrung, fuer IT-Verantwortliche, fuer Teams.
4. CTA
   individuelle Einordnung anfragen.
- Nicht hier unterbringen:
  allgemeinen Newsfeed ohne Relevanz, SEO-Fuellartikel, breit gestreute IT-Themen ausserhalb des Markenkerns.

### FAQ `/ressourcen/faq`
- Ziel: haeufige Fragen knapp und markenkonform beantworten.
- Sektionen:
1. Einstiegsfrageblock
2. Fragen zu Leistungen und Abgrenzung
3. Fragen zu Zusammenarbeit und Startpunkt
4. CTA zum Kontakt
- Geeignete Fragen:
  `Ist Franken Solution nur in Franken aktiv?`
  `Arbeiten Sie nur als Managed Service oder auch projektbezogen?`
  `Wie startet die Zusammenarbeit?`
  `Welche Themen decken Sie konkret ab?`

## Rollout-Empfehlung
- Zuerst bauen: `/`, `/leistungen`, drei bis fuenf Kern-Detailseiten, `/sicherheitscheck`, `/kontakt`, Legal.
- Danach erweitern: `/ueber-franken-solution`.
- Erst spaeter live: `/ressourcen` und `/ressourcen/faq`, wenn echte Inhalte vorhanden sind.

## Offene Inhalte Und Platzhalter
- Offen: echte Ansprechpartner mit Namen, Rollen und Kontaktangaben.
- Offen: konkrete Beschreibung des Sicherheitscheck-Deliverables.
- Offen: echte Referenzen, Zahlen, Kundenlogos oder belastbare Proof-Elemente.
- Offen: juristisch verbindliche Firmierung fuer Impressum und Datenschutz.
- Offen: konkrete Formularlogik und CRM-Weiterleitung.
- Offen: belastbare Details zu Reaktionszeiten, SLA oder Betriebsfenstern.

## Prompt-Ready Handoff Template
Verwende fuer jede kuenftige Copy- oder Design-Generierung mindestens diese Struktur:

```text
page_name:
url:
page_goal:
primary_audience:
primary_message:
secondary_messages:
primary_cta:
allowed_proof:
missing_proof:
must_include:
must_avoid:
sections:
  1. section_name:
     purpose:
     content_inputs:
     desired_outcome:
```

## Default Prompt Guardrails
- Nutze immer `Franken Solution` als Display-Name.
- Fuehre von Problem zu Struktur zu Ergebnis.
- Nutze Services als Beweis fuer die Positionierung, nicht als lose Sammlung.
- Erfinde keine Referenzen, Kennzahlen, Zertifizierungen, Preise oder SLA.
- Verwende `Ressourcen` statt `Resourcen` und `Leistungen` statt `Portfolio`.
- Halte die Sprache ruhig, praezise, technisch fundiert und fuer Entscheider verstaendlich.
