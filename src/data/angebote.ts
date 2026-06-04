// Alle HSC-Angebote, kategorisiert nach Format (für /angebote)
// Quellen: offersFokus.ts (5 Hauptangebote) + Konzept V02 Seite-2 (Zusatzprodukte)
// ⚠️ = Preis/URL mit A&H/Diana final klären

export type Angebot = {
  name: string;
  nutzen: string;
  format: string;
  preis: string;
  cta: string;
  url: string;
  highlight?: boolean;
  note?: string;
};

export type Kategorie = {
  id: string;
  label: string;
  intro: string;
  items: Angebot[];
};

export const kategorien: Kategorie[] = [
  {
    id: 'online',
    label: 'Online lernen',
    intro: 'In deinem Tempo, von überall — mit Workbook, Videos und Community.',
    items: [
      {
        name: 'Dein Leben lesen lernen',
        nutzen: 'Lerne, die Hinweise deines Lebens zu lesen und deiner inneren Stimme zu folgen.',
        format: 'Online-Jahreskurs · 12 Kapitel · 220-Seiten-Workbook · Telegram-Gruppe',
        preis: 'ab 197 €',
        cta: 'Zum Kurs',
        url: 'https://workshop.himmelstosscoaching.de/dein-leben-lesen-lernen-basic',
        highlight: true,
        note: '⚠️ Preise (Basic/Intensiv) mit A&H bestätigen',
      },
      {
        name: 'Schatz, coachst du mich?',
        nutzen: 'Der Kurs, in dem ihr lernt, euch gegenseitig zu coachen — statt euch im Streit zu verlieren.',
        format: 'Online-Kurs für Paare · 9 Kapitel über 9 Monate · gedrucktes Workbook',
        preis: 'ab 397 €',
        cta: 'Zum Kurs',
        url: 'https://aktion.himmelstosscoaching.de',
        highlight: true,
      },
      {
        name: '12 Meditationen durchs Jahr',
        nutzen: 'Zwölf gechannelte Meditationen zu den Themen, die dich gerade bewegen.',
        format: 'Audio-Reihe · monatlich neu',
        preis: 'auf Anfrage',
        cta: 'Mehr erfahren',
        url: 'https://himmelstosscoaching.de/kontakt',
        note: '⚠️ Preis & Format mit A&H',
      },
      {
        name: 'Authentizität-Kongress (Aufzeichnung)',
        nutzen: 'Der komplette Kongress als zeitlose Aufzeichnung — alle Gespräche, jederzeit verfügbar.',
        format: 'Aufzeichnungs-Paket · Silberpaket',
        preis: 'auf Anfrage',
        cta: 'Zum Silberpaket',
        url: 'https://authentisch.himmelstosscoaching.de',
        note: '⚠️ Preis Silberpaket',
      },
    ],
  },
  {
    id: 'begleitung',
    label: 'Persönlich begleitet',
    intro: 'Eins zu eins oder als Paar — per Zoom oder vor Ort, ganz auf euch zugeschnitten.',
    items: [
      {
        name: 'Ein Thema im Einzelcoaching lösen',
        nutzen: 'Ein konkretes Thema, das dich belastet, gezielt auflösen — am Abend verstehen, am nächsten Tag lösen.',
        format: '1:1 · 3 Doppeltermine (6 Termine)',
        preis: '700 €',
        cta: 'Termin anfragen',
        url: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
        note: '⚠️ Einführungspreis? klären',
      },
      {
        name: 'Monatsausrichtung',
        nutzen: 'Jeden Monat neu ausgerichtet — empfange deine eigenen Botschaften, getragen von einer Gemeinschaft.',
        format: 'Jahresprogramm · monatliches Zoom-Treffen + Meditation + Telegram',
        preis: '800 € / Jahr',
        cta: 'Mehr erfahren',
        url: 'https://himmelstosscoaching.de/kontakt',
        note: '⚠️ Ziel-URL festlegen',
      },
      {
        name: 'Notfall-Paar-Coaching',
        nutzen: 'Wenn ihr nicht mehr weiterwisst und es schnell gehen muss — fokussierte Begleitung aus der akuten Lage.',
        format: '1:1 oder 2:2 · Zoom oder vor Ort · kurzfristig',
        preis: 'auf Anfrage',
        cta: 'Termin anfragen',
        url: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
      },
      {
        name: '2:2 exklusiv',
        nutzen: 'Annette und Herbert begleiten euch als Paar gemeinsam — maximale Tiefe, minimaler Zeitaufwand.',
        format: '2:2-Sessions mit beiden Coaches',
        preis: 'auf Anfrage',
        cta: 'Anfragen',
        url: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
        note: 'Premium',
      },
    ],
  },
  {
    id: 'vor-ort',
    label: 'Vor Ort & Saisonal',
    intro: 'Tiefe Zeit an einem besonderen Ort — oder eine geführte Reise durchs Jahr.',
    items: [
      {
        name: 'Intensivcoaching-Woche Zypern',
        nutzen: 'Sieben Tage am Meer, die nachwirken — ungestört, in eurem Tempo, mit Wirkung, die bleibt.',
        format: 'Retreat vor Ort (Pachyammos) · als Paar oder einzeln',
        preis: 'auf Anfrage',
        cta: 'Zum Retreat',
        url: 'https://workshop.himmelstosscoaching.de/pachyammos-icw',
        highlight: true,
      },
      {
        name: '12 heilige Nächte',
        nutzen: 'Ein geführter Jahreswechsel: zwölf Tage, zwölf Impulse, ein klarerer Start ins neue Jahr.',
        format: 'Saisonal · 25.12.–5.1. · täglich ~1¼ Std',
        preis: '270 € Frühbucher / 340 € regulär',
        cta: 'Mehr erfahren',
        url: 'https://himmelstosscoaching.de/kontakt',
        note: '⚠️ nächstes Datum',
      },
    ],
  },
];

// Kostenlose Einstiege — eigener Block
export const kostenlos: Angebot[] = [
  {
    name: 'Kostenfreies Webinar',
    nutzen: 'Sei live dabei, stell deine Fragen — und merk sofort, wie wir arbeiten.',
    format: 'Live · Zoom',
    preis: 'kostenlos',
    cta: 'Zum nächsten Webinar',
    url: '#webinar',
    note: '⚠️ Quentn-Anmeldelink',
  },
  {
    name: '3 Tage Paar-Impulse',
    nutzen: 'Drei Tage, drei Impulse für eure Beziehung — der einfachste erste Schritt.',
    format: 'Gratis-Freebie · per E-Mail',
    preis: 'kostenlos',
    cta: 'Impulse holen',
    url: '#freebie',
    note: '⚠️ Funnel-Link',
  },
  {
    name: 'Sonntagsgespräche',
    nutzen: 'Jeden Sonntag ein Gespräch von uns auf YouTube — Gedanken fürs echte Leben.',
    format: 'YouTube · wöchentlich · ohne Anmeldung',
    preis: 'kostenlos',
    cta: 'Auf YouTube ansehen',
    url: '#youtube',
    note: '⚠️ YouTube-Link',
  },
];
