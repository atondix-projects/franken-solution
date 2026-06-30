# Umsetzungsplan – Homepage-Anpassungen (`HP_Anpassungen.pdf`)

Abgeleitet aus `HP_Anpassungen.pdf` (16 Seiten). Es handelt sich fast ausschließlich
um **deutschsprachige Copy-Änderungen** im content-getriebenen Aufbau (`src/content/*`),
plus einige strukturelle Eingriffe.

## Sortier-Kriterium

Sortiert **von der kleinsten zur größten Änderung**, gemessen an **Umsetzungsaufwand /
betroffener Code-Oberfläche** – nicht an inhaltlicher Wichtigkeit:

| Tier | Art | Aufwand |
| ---- | --- | ------- |
| **1** | Reiner Text-/String-Tausch in *einer* Content-Datei | trivial |
| **2** | CTA-Button-Labels & -Ziele (mechanisch, aber Scope-Entscheidung nötig) | klein |
| **3** | Mehrdateiges Umbenennen eines Anzeigetitels (Slug bleibt!) | mittel |
| **4** | Layout-/Komponenten-Änderung (kein neues Datenschema) | mittel-groß |
| **5** | Struktur-/Datenschema-Änderung & Entkopplung geteilter Daten | groß |

Jeder Punkt ist mit **Datei** und **PDF-Seite** annotiert, damit gegen die Vorlage
geprüft werden kann, dass nichts verloren geht.

---

## ⚠️ Wichtige Constraints (vor Umsetzung lesen)

1. **Slug ≠ Anzeigetitel.** Bei allen Gruppen-Umbenennungen (S. 5, 8) **nur `überschrift`
   ändern, niemals `pfadKennung`/`verlinkung`/`sprungZiel`.** Die Slugs steuern die Routen
   (`generateStaticParams` + Route-Suche `findGroup` in `[slug]/page.tsx`), die
   `#anchor`-Sprungmarken (`sprungZiel`) und den Diagramm-Link `href={#pfadKennung}`.
   *(`sitemap.ts` listet nur `/`, `/leistungen`, `/kontakt` – keine Detail-Slugs, dort irrelevant.)*
2. **„Bausteine" → „Maßnahmenbereiche" ist NICHT global.** Nur *innerhalb* der
   Leistungsgruppen (die 4 Unterpunkte + `leistungsgruppeDetail.bausteineÜberschrift`).
   Die Homepage behält bewusst „**Sechs Bausteine**" (PDF: „weil Bausteine verwenden wir schon").
3. **Backup-Label ist kontextabhängig (S. 5):** „**Backup & Recovery**" nur in Tags /
   kleinen Grafiken; „**Backup & Wiederherstellung**" überall, wo Platz ist. Kein Blanket-Replace.
4. **Geteilte Daten = Tier 5.** Drei Stellen rendern Homepage-Daten auf der Über-Seite mit:
   - `UeberWerte` nutzt `homepageContent.vertrauen.einträge`
   - `Founders` (Über + Homepage) nutzt `homepageContent.gründer`
   - `UeberHero` nutzt `homepageContent.überUns.kennzahlen`

   Da die Über-Seite hier abweichende Inhalte braucht, muss vor den Textänderungen
   **entkoppelt** werden – sonst „leaken" Homepage-Edits auf die Über-Seite.
5. **Quell-Typos im PDF werden stillschweigend korrigiert.** Der Plan übernimmt die
   bereinigte deutsche Schreibweise, nicht die PDF-Tippfehler: „Ihre Arbeitsalltag" → „**Ihren**
   Arbeitsalltag" (S. 3), „Standrads" → „**Standards**" (S. 3), „Phising" → „**Phishing**" (S. 1).
   Bewusste redaktionelle Abweichung von der wörtlichen Vorlage – vor Umsetzung kurz bestätigen.

---

## ❓ Offene Fragen (vor Umsetzung klären)

1. **CTA-Umbenennung „Kontakt aufnehmen" → „Erstgespräch vereinbaren": Geltungsbereich?**
   Das PDF nennt sie nur für *Seiten-Inhalte*, **nicht** für Navbar/Footer-CTAs in `site.ts`
   (`desktopAufruf`, `mobilerAufruf`, `fußzeile.nächsterSchritt`). Auf der Ressourcen-Seite
   (S. 13) bleibt sogar bewusst „Kontakt aufnehmen". → **Rename ist pro Seite, nicht global.**
   Navbar/Footer mitziehen oder nicht?
2. **Link-Ziel von „Erstgespräch vereinbaren":** Aktuell zeigen alle primären CTAs auf
   `/kontakt`. Auf der **Kontakt-Seite selbst** (S. 14) ergibt das keinen Sinn – `tel:`,
   `mailto:` oder Anker?
3. ~~**E-Mail-Ergebnis-Konflikt**~~ → **BESTÄTIGT, Feld muss gesplittet werden (siehe 5.7).**
   Übersichtskarten (`FeaturedPillarCard.tsx:98`, `CompactPillarCard.tsx:81`) **und** Detailseite
   (`[slug]/page.tsx:173`) rendern dasselbe `gruppen[1].ergebnis`. PDF will kurz auf der Übersicht
   („… mit revisionssicherer Archivierung.", S. 6) und lang auf der Detailseite
   („… und klarer Trennung zwischen Betrieb und Aufbewahrung.", S. 7) → ein Feld reicht nicht.
4. **Homepage-Kachel 6 (S. 2):** PDF betitelt sie „**Awareness und Prozesse**", die
   `/leistungen`-Gruppe heißt weiter „Security Awareness". Bewusst nur Homepage-Label? Bestätigen.
5. **macOS-Client (S. 12):** Existiert eine macOS-Fernwartungs-Binary zum Verlinken
   (`/downloads/...`)? Ohne Asset kann die zweite Download-Karte nur „Bald verfügbar" sein.
6. **Arbeitsweise-Kacheln (S. 2–3):** Schritte haben aktuell `beschreibung` **und** `ergebnis`.
   Das PDF liefert je *einen* Text pro Kachel → ersetzt `beschreibung`. Bleiben die
   `ergebnis`-Zeilen („Sie bekommen ein klares Bild …") erhalten?

---

# TIER 1 — Reine Textänderungen (String-Tausch in einer Content-Datei)

> Trivial: jeweils ein String ersetzen. Keine Schema-/Layout-Folgen.

## 1.1 `src/content/homepage.ts`

- **Hero-Bannerwörter** `kopfbereich.akzentwörter` → `["IT-Sicherheit", "zuverlässige IT", "Microsoft 365", "proaktive Betreuung"]` *(S. 1; bisher 3 Wörter → jetzt 4)*
- **Hero-Untertitel** `kopfbereich.unterüberschrift` → „Transparent betreut. Nachvollziehbar erklärt. Passend zu Ihrem Unternehmen." *(S. 1)*
- **Merkmal-Karte rechts** `kopfbereich.merkmalKarten[2]`: Überschrift „Stabil im Alltag" → „Unternehmerischer Weitblick"; Beschreibung „Saubere Lösungen für den Alltag." → „Langfristig tragfähige Lösungen." *(S. 1)*
- **Über-Abschnitt** `überUns.überschrift` „Persönlich. Strukturiert. Herstellerneutral." → „Persönlich. Strukturiert. Nachvollziehbar." *(S. 1)*
- **Über-Fließtext** `überUns.beschreibung` → „Franken Solution steht für persönliche Betreuung, klare Standards und nachvollziehbare Lösungen – für sichere und stabile IT in Ihrem Unternehmen." *(S. 1)*
- **Über-Bulletpoints** `überUns.unterscheidungsMerkmale` → `["Klare Standards und nachvollziehbare Prozesse", "Feste Ansprechpartner, die Ihre Umgebung kennen", "Herstellerneutrale Empfehlungen"]` *(S. 1)*
- **Leistungen-Beschreibung** `leistungen.beschreibung` → „Jeder Baustein stärkt einen wichtigen Bereich Ihrer IT. Zusammen entsteht eine strukturierte Betreuung, die Sicherheit, Stabilität und Transparenz verbindet." *(S. 1; Überschrift „Sechs Bausteine…" bleibt)*
- **6 Leistungs-Kacheltexte** `leistungen.einträge[].beschreibung` neu (Identität / E-Mail / Endpoint / Backup / Netzwerk / Awareness) *(S. 2 – Texte siehe PDF)*. ⚠️ Kachel 6 evtl. zusätzlich Überschrift „Security Awareness" → „Awareness und Prozesse" (siehe offene Frage 4).
- **Arbeitsweise-Beschreibung** `arbeitsweise.beschreibung` → „Wir schaffen zuerst Klarheit über Risiken und Handlungsbedarf – danach folgen priorisierte Maßnahmen und eine planbare Betreuung." *(S. 2)*
- **Arbeitsweise-Kacheltexte** `arbeitsweise.schritte[0..3].beschreibung` neu (Bestandsaufnahme / Priorisierter Maßnahmenplan / Umsetzung / Laufende Betreuung) *(S. 2–3 – Texte siehe PDF; vgl. offene Frage 6)*
- **Vertrauen-Überschrift** `vertrauen.überschrift` → „Zusammenarbeit, die Ruhe in Ihren Arbeitsalltag bringt" *(S. 3)*
- **Vertrauen-Beschreibung** `vertrauen.beschreibung` → „Keine lauten Versprechen, sondern klare Standards, feste Ansprechpartner und nachvollziehbare Entscheidungen – damit Ihre IT verlässlich betreut bleibt." *(S. 3)*
- **Vertrauen-Einträge** `vertrauen.einträge[0..3].beschreibung` neu (Feste Ansprechpartner / Klare Standards und Dokumentation / Herstellerneutral / Franken lokal, deutschlandweit remote) *(S. 3–4)* — ⚠️ **gekoppelt an Über-Werte, siehe 5.2.**
- **Abschluss-CTA (Bereich „Nächster Schritt")** `abschlussAufruf.überschrift` „Sichere hybride IT" → „Sichere Unternehmens-IT"; `abschlussAufruf.beschreibung` → „In einem ersten Gespräch nehmen wir uns Zeit, Ihre IT-Situation und Anforderungen zu verstehen — und legen gemeinsam fest, welche nächsten Schritte sinnvoll sind." *(S. 4; Button-Labels/-Ziele siehe Tier 2)*

## 1.2 `src/content/leistungen.ts`

- **Hero-Überschrift** `kopfbereich.überschrift` → „Sechs Bausteine. Ein sicherer und stabiler IT-Betrieb." *(S. 5; statt „verlässlicher")*
- **Hero-Einleitung** `kopfbereich.einleitung` → „Jede Leistungsgruppe kann einzeln eingesetzt werden. Zusammen entsteht daraus ein Managed Service, der Sicherheit, Stabilität und laufende Betreuung sinnvoll verbindet." *(S. 5)*
- **Situationen-Überschrift** `situationen.überschrift` → „Welche Situation passt zu Ihrer aktuellen Lage?" *(S. 5)*
- **Situationen-Beschreibung** `situationen.beschreibung` → „Häufig hängen mehrere Themen zusammen. Die Übersicht zeigt, wo ein sinnvoller erster Ansatzpunkt liegt." *(S. 5)*
- **Tabellenköpfe** `situationen.tabellenKöpfe`: „Situation" → „Ausgangslage", „Ansatz" → „Sinnvoller Einstieg" *(S. 5)*
- **5 Situations-Zeilen** `situationen.zeilen[0..4].situation` neu formuliert *(S. 5 – Zeile 6 „Netzwerk historisch gewachsen" bleibt)*
- **Leistungsgruppen-Beschreibung** `leistungsgruppen.beschreibung` → „Jede Leistungsgruppe hat einen klaren Schwerpunkt. Auslöser, Maßnahmen und erwartetes Ergebnis sind transparent beschrieben." *(S. 6; „Bausteine" → „Maßnahmen")*
- **Detail-Template** `leistungsgruppeDetail.bausteineÜberschrift` → „Vier Maßnahmenbereiche, klar verantwortet." *(S. 6; gilt für alle 6 Detailseiten gleichzeitig)*
- **Detail-Untertext** `leistungsgruppeDetail.nächsterSchritt.fließtext` → „In einem ersten Gespräch klären wir, wo Ihre IT steht, welche Risiken bestehen und welche nächsten Schritte sinnvoll sind." *(S. 6–10; einmal ändern = alle Detailseiten)*
- **Pro Gruppe** `gruppen[0..5]` – `auslöserText`, `bausteine[]`, `ergebnis`, `einführung` neu *(S. 6–10)*:
  - **Identität** `gruppen[0]`: `ergebnis` „Klare Zugriffe für die richtigen Personen …"; `einführung` neu *(S. 6)*
  - **E-Mail** `gruppen[1]`: `auslöserText` neu; `bausteine` „SPF, DKIM und DMARC-Konfiguration", „Postfach-Sicherheitsrichtlinien"; `ergebnis` (vgl. offene Frage 3); `einführung` neu *(S. 6–7)*
  - **Backup** `gruppen[2]`: `auslöserText`, `ergebnis`, `einführung` neu *(S. 7)*
  - **Endpoint** `gruppen[3]`: `auslöserText`, `ergebnis` neu *(S. 8; Titel-Rename siehe 3.1)*
  - **Security Awareness** `gruppen[4]`: `auslöserText`; `bausteine` „Praxisnahe Schulungsmaßnahmen", „Klare Verhaltensrichtlinien", „Regelmäßige Sicherheitsimpulse im Arbeitsalltag"; `ergebnis`; `einführung` neu *(S. 8–9)*
  - **Netzwerk** `gruppen[5]`: `auslöserText`; `bausteine`-Bindestriche „Firewall-Konfiguration und Monitoring" (Minus weg) + „VPN- und Remote-Access-Konzepte" (Minus dazu); `ergebnis`; `einführung` neu *(S. 9–10)*
- **Laufende Betreuung** `laufendeBetreuung`: `überschrift` → „Managed Service heißt: dranbleiben."; `beschreibung` neu; `zyklus[0..3].fließtext` neu; `hervorhebung` neu *(S. 10–11)*
- **Projekte** `projekte`: `beschreibung` neu + `kacheln[0..3].fließtext` neu *(S. 11)*
- **Nächster Schritt** `nächsterSchritt`: `überschrift` → „Sichere Unternehmens-IT. Klar priorisiert. Planbar betreut."; `beschreibung` neu; `hinweis` → „Placeholder:"-Präfix entfernen *(S. 11)*

## 1.3 `src/content/kontakt.ts` *(S. 14)*

- `kopfbereich.überschrift` → „Direkter Kontakt statt anonymem Formularweg."
- `kopfbereich.einleitung` neu; `kopfbereich.vertrauensMerkmale` → `["Direkt erreichbar", "Keine Warteschleife", "Feste Ansprechpartner"]`
- `direkterDraht.vorzeile` → „Warum direkter Kontakt?"; `.überschrift` → „Weil Gespräche vieles schneller klären als Formulare."; `.fließtext` neu
- `direkterDraht.kontrastZeilen` → „Kein langes Formular ausfüllen", „Keine anonyme Warteschleife", „Kein ständig wechselnder Ansprechpartner"
- `standort.beschreibung` neu („Unser Büro liegt in Nürnberg …")
- `nächsterSchritt.überschrift` → „Lassen Sie uns strukturiert starten."; `.beschreibung` neu; `.hinweis` → „Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch." *(S. 14; Zeile unter den Buttons – falls im aktuellen Wert „Kein Aktionismus." noch fehlt, einfügen)*

## 1.4 `src/content/ressourcen.ts` *(S. 12–13, Textanteil)*

- `kopfbereich.überschrift` → „Support & Downloads für unsere Kunden."; `.einleitung` neu; `.vertrauensMerkmale` → „Direkt von Franken Solution", „Windows & macOS", „Start nur nach Absprache"
- `download.überschrift` → „Schneller Support-Zugang."
- `nächsterSchritt.überschrift` → „Fragen zur Fernwartung oder den Hilfsmitteln? Wir helfen direkt weiter."; `.beschreibung` → „Unser Support ist werktags von 09:00 bis 17:00 Uhr erreichbar. Ein kurzer Anruf genügt, um den nächsten Schritt abzustimmen."; `.hinweis` → „Persönlich, direkt und ohne unnötige Umwege." (Buttons bleiben „Kontakt aufnehmen" + „Leistungen ansehen" – S. 13: hier bewusst **kein** CTA-Rename)
- *(Neue Sektionen Windows/macOS-Karten, 3-Schritte, „Weitere Hilfsmittel" → Tier 5, siehe 5.5)*

## 1.5 `src/content/ueber-franken-solution.ts` *(S. 15–16, Textanteil)*

- `kopfbereich.überschrift` → „IT-Betreuung mit persönlicher Verantwortung."; `.einleitung` neu
- `werte.überschrift` → „Wofür Franken Solution steht."; `.beschreibung` neu
- `nächsterSchritt.überschrift` → „Lernen wir uns kennen."; `.beschreibung` neu; `.hinweis` → „Kein Verkaufsdruck. Kein Aktionismus. Nur ein sachliches Erstgespräch." („Kein Aktionismus." ergänzen)
- *(4 Werte-Inhalte + Gründer-Text → Tier 5, siehe 5.2 / 5.3)*

## 1.6 `src/content/site.ts` (Footer – „Abschlussbereich Franken Solution", S. 4)

- `fußzeile.slogan` „Sichere hybride IT, planbar betreut." → „Sichere Unternehmens-IT, planbar betreut."
- `fußzeile.beschreibung` → „Franken Solution unterstützt Kunden mit klaren Standards, festen Ansprechpartnern und nachvollziehbaren Lösungen – für sichere und stabile IT."
- ⚠️ Footer erscheint auf **allen** Seiten – wirkt global.

---

# TIER 2 — CTA-Labels & -Ziele

> Mechanisch, aber Geltungsbereich klären (offene Fragen 1 & 2). Pro Seite, **nicht** blind global.

- **Homepage** `homepage.ts abschlussAufruf` *(S. 4)*: primär „Kontakt aufnehmen" → „**Erstgespräch vereinbaren**" (links, `/kontakt`); sekundär (akt. doppelt „Kontakt aufnehmen") → „**Leistungen ansehen**" (`/leistungen`). Text-Änderungen (`überschrift` „Sichere hybride IT" → „Sichere Unternehmens-IT" + neue `beschreibung`) → **jetzt vollständig in 1.1 erfasst**.
- **Footer** `site.ts fußzeile.nächsterSchritt.beschriftung` „Beratung anfragen" → „**Erstgespräch vereinbaren**" *(S. 4)*
- **Leistungen Hero** `leistungen.ts kopfbereich.primärerAufruf.beschriftung` → „**Erstgespräch vereinbaren**" *(S. 5)*
- **Leistungen Detail (alle 6)** `leistungen.ts leistungsgruppeDetail.nächsterSchritt.primärerAufruf.beschriftung` → „**Erstgespräch vereinbaren**" *(S. 6)*
- **Leistungen Nächster Schritt** `leistungen.ts nächsterSchritt`: primär → „**Erstgespräch vereinbaren**"; sekundär „Leistungen ansehen" → „**Leistungsgruppen ansehen**" *(S. 11)*
- **Kontakt Nächster Schritt** `kontakt.ts nächsterSchritt`: primär → „**Erstgespräch vereinbaren**", sekundär → „**Leistungen ansehen**" (`/leistungen`) *(S. 14; Link-Ziel: offene Frage 2)*
- **Über Nächster Schritt** `ueber-franken-solution.ts nächsterSchritt.primärerAufruf.beschriftung` „Beratung anfragen" → „**Erstgespräch vereinbaren**" *(S. 16)*

---

# TIER 3 — Mehrdateiges Umbenennen von Anzeigetiteln

> ⚠️ **Nur `überschrift`/Label – Slug (`pfadKennung`/`verlinkung`/`sprungZiel`) bleibt unverändert.**

- **„Endpoint-Schutz und Monitoring" → „Endpoint Management"** *(S. 8)* an allen Anzeige-Stellen:
  - `homepage.ts leistungen.einträge[2].überschrift`
  - `leistungen.ts leistungsgruppen.gruppen[3].überschrift`
  - `leistungen.ts situationen.zeilen[…].leistungsgruppen[].beschriftung` (Endpoint-Verweis)
  - Detailseite + Diagramm folgen automatisch aus `gruppen[3].überschrift`
- **Situations-Matrix Verweis-Labels** (`leistungen.ts situationen.zeilen[].leistungsgruppen[].beschriftung`) an die neuen Kurznamen angleichen, soweit Platz/Tag *(S. 5: „zumindest bei Tags und Links")* – Backup-Sonderfall (Constraint 3) beachten.

> Die *kurzen* Diagramm-Labels selbst („Identität & Zugriff", „Backup & Recovery" …)
> sind **kein** simpler Rename: sie kommen aus einer fest verdrahteten Override-Map
> `DIAGRAM_LABEL_OVERRIDES` in `LeistungenHero.tsx` (nach Slug) → **Tier 5.6**.

---

# TIER 4 — Layout-/Komponenten-Änderungen (kein neues Datenschema)

- **Über-Hero: Werte-Kacheln entfernen** – `src/components/ueber/UeberHero.tsx`: den `counters`-Block (Zeilen ~68–87) inkl. Import von `homepageContent.überUns.kennzahlen` entfernen *(S. 15: „Kacheln mit Werten komplett weg")*. → entkoppelt die Über-Seite von den Homepage-Kennzahlen (vgl. 5.4).
- **Laufende-Betreuung-Grafik** – **nur** `src/components/leistungen/OngoingLoop.tsx` (Desktop-SVG) *(S. 10)*:
  - In den Diagramm-Knoten „&" statt „und" anzeigen, wo das Wort fehlt (z. B. „Monitoring & Erkennung").
    Achtung: rechte Detail-Liste behält „und" → Kurzlabel im Diagramm von `zyklus[].überschrift` trennen.
  - „Weiterentwicklung"-Umbruch wird bereits über `LOOP_LABEL_OVERRIDES` (OngoingLoop Z. 42–44)
    gesteuert – dort kürzen / Kachel verbreitern.
  - **`OngoingLoopMobile.tsx` NICHT anfassen:** rendert `step.überschrift` als Textliste, „und" ist dort korrekt.

---

# TIER 5 — Struktur-/Datenschema-Änderungen & Entkopplung

> Größter Aufwand: Datenmodell erweitern, geteilte Quellen auftrennen, Komponenten anpassen.

### 5.1 Pro-Gruppe individuelle „Nächster Schritt"-Überschrift (Detailseiten)
*(S. 6–10)* Aktuell baut `src/app/leistungen/[slug]/page.tsx` die Überschrift fix aus
`überschriftAnfang` + `group.überschrift.toLowerCase()` + `überschriftEnde` →
„Soll … bei Ihnen sauber aufgestellt werden?". Das PDF will je Gruppe eigene Fragen:
- Identität: „Sollen Identitäten und Zugriffe bei Ihnen sauber geregelt werden?"
- E-Mail: „Soll Ihre E-Mail-Sicherheit klar geregelt und die Archivierung revisionssicher aufgestellt werden?"
- Backup: „Soll Ihre Datensicherung im Ernstfall zuverlässig funktionieren?"
- Endpoint: „Sollen Ihre Endgeräte geschützt, verwaltet und laufend überwacht werden?"
- Awareness: „Soll Sicherheitsbewusstsein in Ihrem Unternehmen dauerhaft verankert werden?"
- Netzwerk: „Soll Ihre Netzwerkinfrastruktur sicher und strukturiert aufgestellt werden?"

**Umsetzung:** Feld `nächsterSchrittTitel` je `gruppen[]` ergänzen; `[slug]/page.tsx`
(Zeile ~183) auf `group.nächsterSchrittTitel` umstellen statt Template-Konkatenation.

### 5.2 Über-Werte von Homepage entkoppeln + 4 neue Werte
*(S. 15–16)* `UeberWerte.tsx` rendert derzeit `homepageContent.vertrauen.einträge`.
Das PDF will **vier andere** Werte mit eigenem Text:
**Transparenz, Herstellerneutralität, Persönliche Verantwortung, Direkte Betreuung.**
**Umsetzung:** `werte.einträge[]` in `ueber-franken-solution.ts` neu anlegen (4 Objekte mit
`symbolName`/`überschrift`/`beschreibung`), `UeberWerte.tsx` darauf umstellen. Erst danach
die Homepage-Vertrauen-Edits (1.1) gefahrlos durchführen.

### 5.3 Über-Gründer von Homepage entkoppeln
*(S. 4 vs. S. 15–16)* `Founders.tsx` nutzt `homepageContent.gründer` für **beide** Seiten.
PDF will unterschiedliche Kopfzeilen/Texte: Homepage behält „Persönlich betreut – von Anfang an."
(nur neuer Fließtext, Placeholder-Präfix raus); Über-Seite: „**Aus Franken. Aus der Praxis.**"
+ langer 2-Absatz-Text.
**Umsetzung:** `Founders` parametrisieren (Content per Prop) **oder** eigene Über-Founders-
Komponente; eigenes `gründer`-Textobjekt für die Über-Seite anlegen.

### 5.4 Homepage-Kennzahlen neu, Über-Kennzahlen entfernt
*(S. 1 / S. 15)* `homepage.ts überUns.kennzahlen` neu:
„Jahre IT-Erfahrung → **25+**", „Betreute Benutzer & Systeme → **200+**",
„Blockierte Spam- & Phishing-Mails pro Jahr → **40.000+**" (Werte **und** Labels ändern).
Da `UeberHero` dieselbe Quelle nutzt, muss dort der Block entfernt sein (4. Tier-Punkt erledigt
das) – eine Quelle, zwei Ergebnisse.

### 5.5 Ressourcen-Seite inhaltlich ausbauen
*(S. 12–13)* Über reine Texte hinaus neue Struktur. **Die Karten-Texte sind konkrete
PDF-Vorgaben (definitiv), nicht nur Struktur** – nur das macOS-Download-*Asset* ist bedingt:
- **Fernwartungs-Intro** (S. 12): „Laden Sie den passenden Fernwartungsclient herunter, wenn unser
  Support Sie dazu auffordert. Die Verbindung wird nur mit Ihrer Zustimmung gestartet und kann
  jederzeit beendet werden."
- **Zwei Download-Karten** (Windows **+ macOS**) statt einer; `download.einträge` um macOS-Eintrag
  erweitern, Komponente auf 2-Spalten-Layout. **Beide Karten-Texte umsetzen:**
  - *Windows*: „Fernwartung für Windows" · „Für Windows-PCs und Notebooks. Bitte starten Sie das Tool
    nur nach telefonischer oder direkter Aufforderung durch Franken Solution." · Feld „Windows-Client herunterladen".
  - *macOS*: „Fernwartung für macOS" · „Für MacBooks und iMacs. Je nach macOS-Version müssen
    Bildschirmfreigabe und Bedienungshilfen einmalig freigegeben werden." · Feld „macOS-Client herunterladen".
    Karte **shippt in jedem Fall** (Download sonst „Bald verfügbar", offene Frage 5).
- **„So funktioniert die Fernwartung"** – neue 3-Schritte-Sektion (1. Passenden Client herunterladen /
  2. Verbindung freigeben / 3. Unterstützung erhalten, je mit Fließtext aus S. 12) → neues
  Content-Objekt + Komponente.
- **„Weitere Hilfsmittel"** – 3 Karten je „Bald verfügbar" (Kurzanleitung Fernwartung,
  Onboarding-Checkliste für Neukunden, IT-Sicherheits-Notfallkarte) statt des einzelnen
  `platzhalter`-Blocks. *(S. 13)*

### 5.6 Diagramm-Kurzlabels (Leistungen-Hero)
*(S. 5)* ⚠️ **Mechanismus-Korrektur:** `LeistungenHero.tsx` nutzt **nicht** `splitDiagramTitle`,
sondern eine inline `diagramLabelLines`-Funktion (Z. 86–100) + eine **fest verdrahtete
`DIAGRAM_LABEL_OVERRIDES`-Map (Z. 80–83), nach Slug**. Diese Map setzt heute schon
E-Mail → `["E-Mail-Schutz","Archivierung"]` und Backup → `["Backup","Wiederherst."]` – und
**widerspricht** den gewünschten PDF-Werten (z. B. „E-Mail-Sicherheit"). Also ein echter Edit,
kein No-Op. (`splitDiagramTitle` betrifft nur `OngoingLoop.tsx`.)
Gewünschte Kurzformen: „Identität & Zugriff", „E-Mail-Sicherheit", „Backup & Recovery",
„Endpoint Management", „Netzwerk & Infrastruktur".
**Umsetzung:** `DIAGRAM_LABEL_OVERRIDES` aktualisieren (oder durch Content-Feld
`diagrammKurzname` je `gruppen[]` ersetzen). Labels rendern **zweizeilig** (`node.lines[0]/[1]`,
Hero Z. 422–423) → Wert muss ein **`[string, string]`-Tupel** sein, kein einzelner String
(z. B. Backup → `["Backup","& Recovery"]`). Backup-Kontextregel (Constraint 3) damit sauber:
Kurzname im Diagramm, Volltitel „Backup und Wiederherstellung" wo Platz ist.

### 5.7 E-Mail-Ergebnis aufsplitten (kurz vs. lang)
*(S. 6 / S. 7)* `gruppen[].ergebnis` wird an zwei Stellen gerendert: Übersichtskarten
(`FeaturedPillarCard.tsx:98`, `CompactPillarCard.tsx:81`) **und** Detailseite (`[slug]/page.tsx:173`).
Für E-Mail will das PDF zwei Fassungen (kurz/lang). **Umsetzung:** zusätzliches Feld einführen
(z. B. `ergebnisKurz` für die Karte, `ergebnis` lang für die Detailseite) und beide Komponenten
entsprechend umstellen. Betrifft v. a. E-Mail; übrige Gruppen können dasselbe Feld weiternutzen.

---

## Empfohlene Reihenfolge

1. **Tier 5.2 / 5.3 / 5.4 zuerst entkoppeln** (sonst leaken Homepage-Edits auf die Über-Seite).
2. Danach **Tier 1** (Masse der Texte) sicher durchziehen.
3. **Tier 2/3** (CTAs, Renames) – nach Klärung der offenen Fragen 1–2.
4. **Tier 4 / 5.1 / 5.5 / 5.6 / 5.7** (Komponenten/Struktur) abschließend.
5. **Vor Commit:** `npm run lint` + `npm run type-check` / `tsc --noEmit` grün (CLAUDE.md).
   `as const`-Strukturen beachten: zusätzliche Array-Einträge/Felder ändern die abgeleiteten
   Typen – betroffene `*Content`-Typen prüfen.
