# CLAUDE — hsc-hub (Code-Repo)

## Projekt in einem Satz
Astro-basierter One-Pager für `himmelstosscoaching.de` — zeigt alle Angebote von Annette & Herbert Himmelstoß übersichtlich und leitet zu den existierenden Sales-/Opt-In-Seiten weiter.

## Verwandte Projekte
| Pfad | Inhalt |
|------|--------|
| `../hsc-website/` | Projektdoku: Konzept, Strategie, Audit, Texte, Aufgaben, Protokoll — **vor Code-Änderungen lesen** |
| `hsc-web` (Christians Rechner) | Funnel-Repo für `aktion.himmelstosscoaching.de` |

## Lokale Entwicklung
```bash
npm install
npm run dev       # → http://localhost:4321/
npm run build
npm run preview
```

## Architektur
```
src/
├── data/offers.ts          ← Single Source of Truth für alle 14 Angebote
├── pages/index.astro       ← Sektionen A–K (Hero → CTA → Footer)
├── components/             ← OfferCard, HeroHub, SelfCheck, Testimonial …
├── layouts/BaseLayout.astro
└── styles/
    ├── brand.css           ← Farben, Typo, Tokens (Single Source of Truth)
    └── atmospheres.css     ← 7 Farbverläufe
public/
└── img/                    ← Bilder (Platzhalter mit <!-- IMAGE-SLOT: --> markiert)
```

## Seitenstruktur (index.astro)
A. Hero · B. Manifest · C. Über A&H · D. Selbstcheck · E. Trust-Bridge
F. Angebote (F1 Selbst-Lernen · F2 Begleitung · F3 Vor Ort) · G. Community Event 2026
H. Online-Kongress · I. Testimonials · J. FAQ · K. Final-CTA · Footer

## Angebote & Preise (Stand 2026-05-30, von A&H bestätigt)
| ID | Titel | Preis |
|----|-------|-------|
| schatz-coachst-du-mich | Schatzcoach du mich | Basic 397 € / Intensiv 1.400 € |
| dein-leben-lesen-lernen | Dein Leben lesen lernen | Basic 197 € / Intensiv 697 € |
| intensiv-coaching-zypern | Intensivcoaching-Woche Zypern | 4.000 € (inkl. Verpflegung + Übernachtung) |
| kurzzeit-coaching | Kurzzeit-Coaching (3× kurz + 3× lang) | 700 € |
| monatsausrichtung | Monatsausrichtung | 800 €/Jahr |
| heilige-naechte | 12 Heilige Nächte | 270 € |
| community-event-2026 | Community Event 2.–5. Sept 2026 | tbd |

⚠️ In `offers.ts` stehen einige Preise noch als „auf Anfrage" — mit obiger Tabelle abgleichen.

## Brand & Ton
- **Kein** Marketing-Jargon, keine Dreier-Sätze, kein „Kennst du das auch?"
- Klar und direkt — nichts relativieren, nichts weichspülen
- Freilassen: Menschen einladen, nicht drängen
- Stil-Referenz: User-Memory `style_buch_traukeinem.md`
- Spirituelle Themen (Karma, Meditation, Heilige Nächte) nicht ausklammern — gehören zum Kern

## Regeln für Claude im Code-Repo

1. **Vor jeder Session:** `../hsc-website/A - Projektbeschreibung-HSC-Website-V01.md` und `B - Aufgaben` lesen — dort liegt der aktuelle Stand
2. **Texte nie im Chat ausgeben** — immer in Dateien schreiben, kurz auf Datei verweisen
3. **Keine Dateien löschen** — in `xold/` verschieben
4. **Versionierung:** neue Version = neue Nummer (V01, V02 …), nie überschreiben
5. **offers.ts ist Single Source of Truth** für alle Angebote — Preise und URLs nur dort ändern
6. **brand.css und atmospheres.css nie duplizieren** — immer aus `src/styles/` referenzieren

## Beteiligte
| Person | Rolle |
|--------|-------|
| Annette & Herbert Himmelstoß | Inhalte, Freigabe, Ton |
| Christian Seitz | Projektleitung, Astro-Build |
| Godiwa | Design / UX |

## Hosting & Domain
- Aktuell: Netlify-Subdomain (Preview)
- Ziel: `himmelstosscoaching.de` (Domain-Umzug von Strato/WordPress — erst nach A&H-Freigabe)
