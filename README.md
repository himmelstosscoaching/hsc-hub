# HSC-Hub — Himmelstoß Coaching Hauptseite

Astro-basierter One-Pager für **himmelstosscoaching.de**.
Übersicht über alle HSC-Angebote, leitet zu existierenden Sales-/Opt-In-Pages weiter.

**Konzept & Strategie:** `/Users/benutzer/Documents/Claude/Projekte/HSC-Website/`
**Funnel-Repo:** `/Users/benutzer/Documents/Claude/Projekte/HSC-Web/` (für `aktion.himmelstosscoaching.de`)

---

## Lokal arbeiten

```bash
npm install
npm run dev
```
→ http://localhost:4321/

## Build & Preview

```bash
npm run build
npm run preview
```

## Sektionen (siehe `src/pages/index.astro`)

A. Hero · B. Manifest · C. Über A&H · D. Selbstcheck · E. Trust-Bridge
F. Angebote (F1 Selbst-Lernen, F2 Begleitung, F3 Vor Ort) · G. Community Event 2026
H. Online-Kongress · I. Testimonials · J. FAQ · K. Final-CTA · Footer

## Bild-Slots

Stellen ohne fertiges Bild zeigen einen sichtbaren Platzhalter mit Beschreibung.
Suche im Code nach `<!-- IMAGE-SLOT: -->` Kommentaren.

## Daten-Modell

Alle 14 Angebote leben in `src/data/offers.ts` — eine Karte = ein Eintrag.
