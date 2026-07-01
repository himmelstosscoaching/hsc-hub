// Annettes Fokus-Konzept V02 — 5 Hauptangebote für die Startseite
// Quelle: hsc-website/03-Inhalte/01-Startseite-Texte-V01.md + 02-Konzept/02-Konzept-V02-Fokus.md
// Reihenfolge laut Konzept: Dein Leben lesen → Schatz → Einzelcoaching → Monatsausrichtung → Zypern
// ⚠️ = Preis/URL mit A&H bzw. Christian/Diana noch zu bestätigen

import type { Offer } from './offers';

export const fokusOffers: Offer[] = [
  {
    id: 'dein-leben-lesen-lernen',
    cluster: 'F1',
    eyebrow: 'Dein Leben lesen lernen',
    headline: 'Versteh, was dein Leben dir sagt',
    promise:
      'Lerne, die Hinweise deines Lebens zu lesen und deiner inneren Stimme zu folgen — Schritt für Schritt, im Jahreskurs mit Workbook und Community.',
    bullets: ['12 Kapitel, monatliche Freischaltung', '220-Seiten-Workbook', 'Telegram-Community'],
    format: 'Online-Jahreskurs',
    priceFrom: 'ab 197 €',
    ctaText: 'Zum Kurs',
    ctaUrl: 'https://workshop.himmelstosscoaching.de/dein-leben-lesen-lernen-basic',
    tiers: [
      { name: 'Basic', price: '197 €', url: 'https://workshop.himmelstosscoaching.de/dein-leben-lesen-lernen-basic', includes: ['Kurs + Workbook + Telegram'] },
      { name: 'Intensiv', price: '697 €', url: 'https://workshop.himmelstosscoaching.de/dein-leben-lesen-lernen-intensiv', includes: ['+ monatliche Gruppencalls'] },
    ],
    highlight: true,
    note: '⚠️ Preise mit A&H bestätigen',
  },
  {
    id: 'schatz-coachst-du-mich',
    cluster: 'F1',
    eyebrow: 'Schatz, coachst du mich?',
    headline: 'Wie ein zweites Verlieben — nach all den Jahren',
    promise:
      'Der Kurs, in dem ihr lernt, euch gegenseitig zu coachen — und schwere Themen mit dem Menschen löst, der euch am nächsten ist.',
    bullets: ['9 Kapitel über 9 Monate', 'Gedrucktes Workbook', 'Basic oder mit Gruppenbegleitung'],
    format: 'Online-Kurs für Paare',
    priceFrom: 'ab 397 €',
    ctaText: 'Zum Kurs',
    ctaUrl: 'https://aktion.himmelstosscoaching.de',
    highlight: true,
    note: '⚠️ Intensiv-Preis offen',
  },
  {
    id: 'einzelcoaching-thema',
    cluster: 'F2',
    eyebrow: 'Einzelcoaching',
    headline: 'Lös das Thema, das dich gerade belastet',
    promise: 'Drei Doppeltermine, ein Thema: am Abend verstehen, am nächsten Tag lösen.',
    bullets: ['3 Doppeltermine (6 Termine gesamt)', 'Partnerthemen, Ängste, Konflikte', 'Persönlich mit Annette & Herbert'],
    format: '1:1 Prozessbegleitung',
    priceFrom: '700 €',
    ctaText: 'Termin anfragen',
    ctaUrl: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
    note: '⚠️ Einführungspreis? · Ziel-URL festlegen',
  },
  {
    id: 'monatsausrichtung',
    cluster: 'F2',
    eyebrow: 'Monatsausrichtung',
    headline: 'Jeden Monat neu ausgerichtet — empfange deine eigenen Botschaften',
    promise:
      'Monatliche Treffen, Meditationen und eine Gemeinschaft, die dich trägt, während du lernst, dir selbst zu vertrauen.',
    bullets: ['Monatliches Zoom-Treffen + Meditation', '12 gechannelte Meditationen pro Jahr', 'Einstieg meist über „12 heilige Nächte"'],
    format: 'Jahresprogramm',
    priceFrom: '888 € / Jahr · 88 € / Monat',
    ctaText: 'Mehr erfahren',
    ctaUrl: '/monatsausrichtung',
  },
  {
    id: 'intensiv-coaching-zypern',
    cluster: 'F3',
    eyebrow: 'Intensivcoaching-Woche Zypern',
    headline: 'Sieben Tage am Meer, die nachwirken',
    promise:
      'Eine Woche intensives Coaching am Meer — ungestört, in eurem Tempo, mit Wirkung, die bleibt.',
    bullets: ['Eine Woche vor Ort (Pachyammos)', 'Auf Anfrage auch in Deutschland', 'Als Paar oder einzeln'],
    format: 'Retreat vor Ort',
    priceFrom: 'auf Anfrage',
    ctaText: 'Zum Retreat',
    ctaUrl: 'https://workshop.himmelstosscoaching.de/pachyammos-icw',
  },
];
