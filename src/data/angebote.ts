// Alle HSC-Angebote für /angebote
// Aufbau: 5 Kernangebote prominent oben (kern) — weitere & saisonale ordnen sich unter (weitere).
// Jedes Angebot trägt ein Format-Zeichen (formatType) → einheitliches Badge auf der Karte.
// ⚠️ = Preis/URL mit A&H/Diana final klären

export type FormatType = 'kurs' | 'live-online' | 'live-vor-ort';

export type Angebot = {
  id?: string;             // optionaler Anker für Deep-Links (z. B. von /fokus2 „Zwei Wege")
  name: string;
  nutzen: string;
  formatType: FormatType;  // Format-Zeichen (Badge): Online-Kurs · Live online · Live vor Ort
  format: string;          // ausführliche Format-Beschreibung
  preis: string;
  cta: string;
  url: string;
  note?: string;
};

// ── Die 5 Kernangebote — stehen prominent oben ──────────────────────────────
export const kern: Angebot[] = [
  {
    id: 'leben-lesen',
    name: 'Dein Leben lesen lernen',
    nutzen: 'Lerne, die Hinweise deines Lebens zu lesen — und dir wieder selbst zu vertrauen.',
    formatType: 'kurs',
    format: 'Online-Jahreskurs · 12 Kapitel über 12 Monate · 220-Seiten-Workbook · Telegram-Gruppe',
    preis: 'ab 197 €',
    cta: 'Mehr erfahren',
    url: 'https://workshop.himmelstosscoaching.de/dein-leben-lesen-lernen-basic',
    note: '⚠️ Preise (Basic/Intensiv) mit A&H bestätigen',
  },
  {
    id: 'schatz',
    name: 'Schatz, coachst du mich?',
    nutzen: 'Der Kurs, in dem ihr lernt, euch gegenseitig zu coachen — und euch wieder nah zu sein, ob ihr streitet oder nur noch funktioniert.',
    formatType: 'kurs',
    format: 'Online-Kurs für Paare · 9 Kapitel über 9 Monate · gedrucktes Workbook',
    preis: 'ab 397 €',
    cta: 'Mehr erfahren',
    url: '/schatz',
  },
  {
    name: 'Intensivcoaching-Woche Zypern',
    nutzen: 'Eine Woche am Meer, die nachwirkt — ungestört, in eurem Tempo, mit Wirkung, die bleibt.',
    formatType: 'live-vor-ort',
    format: 'Retreat vor Ort (Pachyammos) · als Paar oder einzeln · inkl. Unterkunft & Verpflegung',
    preis: 'einzeln 4.200 € · als Paar 5.700 €',
    cta: 'Mehr erfahren',
    url: 'https://workshop.himmelstosscoaching.de/pachyammos-icw',
  },
  {
    name: 'Monatsausrichtung',
    nutzen: 'Jeden Monat neu ausgerichtet — lerne, Botschaften deiner inneren Führung zu empfangen, getragen von einer Gemeinschaft.',
    formatType: 'live-online',
    format: 'Jahresprogramm · monatliches Zoom-Treffen + Meditation + Telegram',
    preis: '800 € / Jahr',
    cta: 'Mehr erfahren',
    url: 'https://himmelstosscoaching.de/kontakt',
    note: '⚠️ Ziel-URL festlegen',
  },
  {
    name: 'Ein Thema im Einzelcoaching lösen',
    nutzen: 'Ein konkretes Thema, das dich belastet, gezielt auflösen — am Abend verstehen, am nächsten Tag lösen.',
    formatType: 'live-online',
    format: '1:1 · 3 Doppeltermine (6 Termine) · Zoom oder vor Ort',
    preis: '700 €',
    cta: 'Termin anfragen',
    url: 'https://outlook.office365.com/owa/calendar/HimmelstoCoaching1@himmelstosscoaching.de/bookings/',
    note: '⚠️ Einführungspreis? klären',
  },
];

// ── Weitere & saisonale Angebote — ordnen sich unter ────────────────────────
// Sortiert nach Preis: günstiger Einstieg oben → Premium unten.
// Schätzwert (nicht veröffentlicht, nur zum Sortieren): Notfall-Paar ~500–800 €.
export const weitere: Angebot[] = [
  {
    name: 'Authentizität-Kongress (Aufzeichnung)',
    nutzen: 'Der ganze Kongress zum Nachhören — wann immer dich ein Thema gerade packt.',
    formatType: 'kurs',
    format: 'Aufzeichnungs-Paket · Silberpaket',
    preis: '39 €',
    cta: 'Mehr erfahren',
    url: 'https://authentisch.himmelstosscoaching.de',
  },
  {
    name: '12 Meditationen durchs Jahr',
    nutzen: 'Zwölf gechannelte Meditationen zu den Themen, die dich gerade bewegen.',
    formatType: 'kurs',
    format: 'Audio-Reihe · monatlich neu',
    preis: 'auf Anfrage',
    cta: 'Mehr erfahren',
    url: 'https://himmelstosscoaching.de/kontakt',
    note: '⚠️ Preis & Format mit A&H (~80 €?)',
  },
  {
    name: '12 heilige Nächte',
    nutzen: 'Ein geführter Jahreswechsel: zwölf Tage, zwölf Impulse, ein klarerer Start ins neue Jahr.',
    formatType: 'live-online',
    format: 'Saisonal · 25.12.–5.1. · täglich ~1¼ Std',
    preis: '240 € bis 15.11. · 270 € bis 10.12. · 330 € ab 11.12.',
    cta: 'Mehr erfahren',
    url: 'https://himmelstosscoaching.de/12-heilige-nachte/',
    note: 'Zielseite (alte Website) · später ins neue Format übertragen · führt zur Monatsausrichtung',
  },
  {
    name: 'Notfall-Paar-Coaching',
    nutzen: 'Wenn ihr nicht mehr weiterwisst — schnelle Hilfe in der Krise. Rückmeldung meist in 30 Minuten, spätestens nach 24 Stunden.',
    formatType: 'live-online',
    format: 'Direkt buchen · zeitnahes Zoom-Gespräch · so lange wie nötig',
    preis: '497 €',
    cta: 'Mehr erfahren',
    url: '/notfall',
    note: '⚠️ Kauf-Button auf /notfall braucht noch ThriveCart-Direktkauf-Link (Diana) · SOS-Bild folgt',
  },
];

// ── Kostenlose Einstiege — eigener Block (3 Freebies, Webinar raus lt. Call 11.6.) ──
export const kostenlos: Angebot[] = [
  {
    name: 'Dein Leben lesen lernen — Schnupper-Impuls',
    nutzen: 'Lerne in einem ersten kostenlosen Impuls, die Hinweise deines Lebens zu lesen.',
    formatType: 'kurs',
    format: 'Gratis-Freebie · per E-Mail',
    preis: 'kostenlos',
    cta: 'Impuls holen',
    url: '#freebie-leben',
    note: '⚠️ Opt-in-Page muss noch gebaut werden',
  },
  {
    name: '3 Tage Paar-Impulse',
    nutzen: 'Drei Tage, drei Impulse für eure Beziehung — der einfachste erste Schritt.',
    formatType: 'kurs',
    format: 'Gratis-Freebie · per E-Mail',
    preis: 'kostenlos',
    cta: 'Impulse holen',
    url: '#freebie-paar',
    note: '⚠️ PDF fertig, Opt-in-Page/Quentn-Flow noch nicht live',
  },
  {
    name: 'Sonntagsgespräche',
    nutzen: 'Jeden Sonntag ein Gespräch von uns auf YouTube — Gedanken fürs echte Leben.',
    formatType: 'live-online',
    format: 'YouTube · wöchentlich · ohne Anmeldung',
    preis: 'kostenlos',
    cta: 'Auf YouTube ansehen',
    url: 'https://www.youtube.com/@himmelstosscoaching/streams',
  },
];
