// HSC Angebote — Single Source of Truth für die Hub-Seite
// 14 Karten, gruppiert in 3 Bündel (F1/F2/F3) + 1 Sonderblock (Online-Kongress)
// Stand: 2026-05-18 V01 — Preise mit ⚠️ sind mit A&H noch zu bestätigen

export type OfferCluster = 'F1' | 'F2' | 'F3' | 'special';

export type OfferTier = {
  name: string;
  price: string;
  url: string;
  includes: string[];
};

export type Offer = {
  id: string;
  cluster: OfferCluster;
  eyebrow: string;
  headline: string;
  promise: string;
  bullets: string[];
  format: string;
  priceFrom: string;
  ctaText: string;
  ctaUrl: string;
  tiers?: OfferTier[];
  highlight?: boolean;
  note?: string;
};

export const offers: Offer[] = [
  // ───────── F1 — Selbst-Lernen ─────────
  {
    id: 'schatz-coachst-du-mich',
    cluster: 'F1',
    eyebrow: 'Online-Kurs für Paare',
    headline: 'Wenn der nächste Streit der letzte seiner Art wäre',
    promise: 'Der Kurs, in dem ihr lernt, euch gegenseitig zu coachen — statt euch im Streit zu verlieren.',
    bullets: ['9 Kapitel + Bonus-Kapitel', 'Workbook digital & physisch', 'Telegram-Gruppe + Live-Call'],
    format: 'Online-Kurs · self-paced',
    priceFrom: 'ab 397 €',
    ctaText: 'Zum Kurs',
    ctaUrl: 'https://aktion.himmelstosscoaching.de',
    tiers: [
      {
        name: 'Basic',
        price: '397 €',
        url: 'https://aktion.himmelstosscoaching.de',
        includes: ['Kompletter Kurs', 'Workbook digital & physisch', 'Telegram-Gruppe', '1 Live-Call'],
      },
      {
        name: 'Premium',
        price: 'auf Anfrage',
        url: 'https://aktion.himmelstosscoaching.de#premium',
        includes: ['Alles aus Basic', 'Regelmäßige Live-Gruppen-Calls mit A&H'],
      },
    ],
    highlight: true,
  },
  {
    id: 'dein-leben-lesen-lernen',
    cluster: 'F1',
    eyebrow: 'Online-Kurs für innere Klarheit',
    headline: 'Nicht länger im Außen suchen — im Inneren finden',
    promise: 'Lerne, dein Leben wie ein Buch zu lesen — und bewusst zu gestalten.',
    bullets: ['12 Kapitel, ~120 Lektionen', 'Workbook digital & physisch + geführte Meditationen', 'Lebenslanger Zugriff'],
    format: 'Online-Videokurs (+ Masterclass beim Intensiv-Paket)',
    priceFrom: 'ab 197 €',
    ctaText: 'Zum Kurs',
    ctaUrl: '/dein-leben-lesen-lernen',
    tiers: [
      {
        name: 'Basic',
        price: '197 €',
        url: '/dein-leben-lesen-lernen',
        includes: ['12 Kapitel Videokurs', 'Workbook digital & physisch', 'Geführte Meditationen', 'Lebenslanger Zugriff'],
      },
      {
        name: 'Intensiv',
        price: '697 €',
        url: '/dein-leben-lesen-lernen',
        includes: ['Alles aus Basic', '6 Monate Masterclass', '2 Live-Zoom-Sessions/Monat', 'Telegram-Gruppe'],
      },
    ],
    highlight: true,
  },
  {
    id: 'zwoelf-meditationen',
    cluster: 'F1',
    eyebrow: 'Online · 12 geführte Meditationen',
    headline: 'Mit 12 Meditationen durch das Jahr',
    promise: 'Eine Reise durch den Jahreskreis — zu den Naturwesen und zu deinen inneren Helfern.',
    bullets: ['12 geführte Meditationen', 'Erste 2 sofort, dann monatlich eine', 'Dauerhaft verfügbar'],
    format: 'Online · self-paced',
    priceFrom: '88 €',
    ctaText: 'Mehr erfahren',
    ctaUrl: '/12-meditationen',
  },
  {
    id: 'achtgliedriger-pfad',
    cluster: 'F1',
    eyebrow: 'Übungsprogramm Persönlichkeit',
    headline: '8 Übungen, die deine Glaubenssätze lösen',
    promise: 'Acht aufeinander aufbauende Übungen, die alte Muster sichtbar machen und auflösen.',
    bullets: ['8 strukturierte Übungen', 'Als tägliche Praxis geeignet', 'Selbstständig oder begleitet'],
    format: 'Online-Programm · self-paced',
    priceFrom: 'auf Anfrage',
    ctaText: 'Mehr erfahren',
    ctaUrl: 'https://himmelstosscoaching.de/8-gliedriger-pfad',
    note: 'Preis & finale URL mit A&H',
  },
  {
    id: 'tierkreis-coaching',
    cluster: 'F1',
    eyebrow: 'Jahresbegleitung',
    headline: 'Dein Jahr — gelesen wie ein Tierkreis',
    promise: 'Eine Jahresreise mit zwölf Schwerpunkten — ein Thema pro Monat, ein Tierkreiszeichen pro Phase.',
    bullets: ['12 Monatsphasen mit Themen', 'Impulse + Übungen + Reflexion', 'Begleitmaterial inklusive'],
    format: 'Jahresprogramm',
    priceFrom: 'auf Anfrage',
    ctaText: 'Mehr erfahren',
    ctaUrl: 'https://himmelstosscoaching.de/tierkreis',
    note: 'Preis & finale URL mit A&H',
  },

  // ───────── F2 — Begleitung ─────────
  {
    id: 'gruppen-paar-coaching',
    cluster: 'F2',
    eyebrow: 'Live-Coaching mit anderen Paaren',
    headline: 'Mit anderen Paaren auf ein neues Level',
    promise: 'Regelmäßige Live-Sessions mit motivierten Paaren — gemeinsam wachsen, einander spiegeln.',
    bullets: ['Live-Zoom-Calls', 'Kleine Gruppe — echte Tiefe', 'Mit Annette & Herbert'],
    format: 'Gruppen-Live (Zoom)',
    priceFrom: 'auf Anfrage',
    ctaText: 'Termin anfragen',
    ctaUrl: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
  },
  {
    id: 'zweidopzwei-exklusiv',
    cluster: 'F2',
    eyebrow: 'Annette & Herbert + ihr beide',
    headline: 'Vier Menschen. Eine Sitzung. Maximale Tiefe.',
    promise: 'Annette und Herbert begleiten euch als Paar gemeinsam — minimaler Zeitaufwand, maximaler Effekt.',
    bullets: ['Beide Coaches gleichzeitig', 'Individuell auf euer Thema', 'Wenige Termine, hohe Wirkung'],
    format: '2:2-Sessions mit Annette & Herbert',
    priceFrom: 'auf Anfrage',
    ctaText: 'Termin anfragen',
    ctaUrl: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
  },
  {
    id: 'einseins-life-coaching',
    cluster: 'F2',
    eyebrow: 'Einzelcoaching',
    headline: 'Wenn du bei dir anfangen willst',
    promise: 'Persönliche Begleitung bei individuellen Herausforderungen — mit Annette oder Herbert.',
    bullets: ['Einzelne Themen oder Zielkette', 'Termine in deinem Tempo', 'Annette oder Herbert wählbar'],
    format: '1:1 · Zoom oder vor Ort',
    priceFrom: '770 €',
    ctaText: 'Termin anfragen',
    ctaUrl: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
  },
  {
    id: 'jahresbegleitung',
    cluster: 'F2',
    eyebrow: 'Langfristiges Coaching',
    headline: 'Ein Jahr — mit jemandem an der Seite',
    promise: 'Eine durchgehende Begleitung über zwölf Monate — Themen tief, Beziehung verlässlich.',
    bullets: ['Regelmäßige Termine über 12 Monate', 'Begleitete Übergänge / Lebensphasen', 'Frequenz individuell vereinbart'],
    format: 'Langfrist-Coaching',
    priceFrom: 'auf Anfrage',
    ctaText: 'Beratungsgespräch',
    ctaUrl: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
  },

  // ───────── F3 — Vor Ort ─────────
  {
    id: 'intensiv-coaching-zypern',
    cluster: 'F3',
    eyebrow: 'Retreat im Mittelmeer',
    headline: 'Eine Woche Zypern. Tiefes Coaching. Für dich — oder zu zweit.',
    promise: 'Tiefes Coaching am Meer — für dich allein oder mit deinem Partner. Eingebettet in Pause, Natur und Stille.',
    bullets: ['Privater Standort Pachyammos', 'Tägliche Sessions mit Annette & Herbert', 'Strand, Stille, Raum für dich'],
    format: '1 Woche Retreat · einzeln oder als Paar',
    priceFrom: 'einzeln 4.200 € · als Paar 5.700 €',
    ctaText: 'Zum Retreat',
    ctaUrl: '/intensiv-coaching-zypern',
  },
  {
    id: 'karma-konkret',
    cluster: 'F3',
    eyebrow: 'Themen-Retreat',
    headline: 'Karma — wenn du es sehen kannst, kannst du es lösen',
    promise: 'Ein Retreat, in dem ihr lernt, wiederkehrende Muster im Außen als innere Bewegung zu erkennen — und zu transformieren.',
    bullets: ['Themen-fokussiertes Format', 'Intensive Tage in Gruppe', 'Werkzeuge zum Mitnehmen'],
    format: 'Mehrtägiges Retreat',
    priceFrom: 'auf Anfrage',
    ctaText: 'Zum Retreat',
    ctaUrl: 'https://himmelstosscoaching.eu-3.quentn-site.com/karma-konkret',
  },
  {
    id: 'heilige-naechte',
    cluster: 'F3',
    eyebrow: 'Saisonal · Winter',
    headline: 'Zwölf Nächte. Zwölf Impulse. Ein neues Jahr.',
    promise: 'Eine geführte Reise vom 25. Dezember bis 6. Januar — zwölf Nächte, zwölf Themen, ein klarerer Start ins neue Jahr.',
    bullets: ['Tägliche Impulse + Übung', 'Reflexionsraum am Jahreswechsel', 'Selbstständig oder in Gruppe'],
    format: 'Saisonal (Dez/Jan)',
    priceFrom: 'auf Anfrage',
    ctaText: 'Mehr erfahren',
    ctaUrl: '/12-heilige-naechte',
  },
  {
    id: 'community-event-2026',
    cluster: 'F3',
    eyebrow: 'Live-Event · 2.–5. September 2026',
    headline: 'Vier Tage. Eine Community. Ein besonderer Ort.',
    promise: 'Treffen mit Annette, Herbert und der HSC-Community — Seelenarbeit, Austausch, Inspiration in ruhiger Natur.',
    bullets: ['4 Tage Programm', '20 feste Plätze + Tagesgäste', 'Gestaltet von Annette & Herbert'],
    format: 'Live-Event vor Ort',
    priceFrom: 'auf Anfrage',
    ctaText: 'Plätze sichern',
    ctaUrl: 'https://himmelstosscoaching.de/community-event-2026',
    highlight: true,
    note: 'Nur 20 feste Plätze',
  },

  // ───────── Special: Online-Kongress ─────────
  {
    id: 'authentisch-kongress',
    cluster: 'special',
    eyebrow: 'Online-Kongress',
    headline: 'Authentizität — der Weg in deine Freiheit',
    promise: 'Fünf Tage, viele Gespräche, ein Thema: Wie du dein authentisches Leben findest und lebst.',
    bullets: ['5 Tage Kongress online', 'Viele Gast-Stimmen', 'Kostenfreies Ticket'],
    format: 'Online-Kongress',
    priceFrom: 'kostenfrei',
    ctaText: 'Gratis Ticket',
    ctaUrl: 'https://authentisch.himmelstosscoaching.de',
  },
];

export const f1 = offers.filter((o) => o.cluster === 'F1');
export const f2 = offers.filter((o) => o.cluster === 'F2');
// Event 2026 wird in eigener Highlight-Sektion gezeigt, nicht im F3-Grid
export const f3 = offers.filter((o) => o.cluster === 'F3' && o.id !== 'community-event-2026');
export const kongress = offers.find((o) => o.id === 'authentisch-kongress')!;
export const event2026 = offers.find((o) => o.id === 'community-event-2026')!;
