// Webinar „Die 12 heiligen Nächte“ am Do 26.11.2026, 19:30 Uhr — alle festen Angaben an EINER Stelle.
// Genutzt von /12-heilige-naechte-webinar, -fast-dabei, -danke, -aufzeichnung.
// Projekt-Doku: ../HSC-12-heilige-Naechte-Webinar/

// 🔴 Vor dem Livegang: ID des neuen Quentn-Formulars eintragen (Formular „Webinar 12 heilige Nächte 26.11.2026“).
export const QUENTN_FORM_ID = '1333';
export const QUENTN_FORM_URL = `https://himmelstosscoaching.eu-3.quentn-site.com/public/forms/${QUENTN_FORM_ID}/raw/submit`;
export const FORMULAR_BEREIT = !QUENTN_FORM_ID.startsWith('FORMULAR');

export const ZOOM_URL = 'https://us06web.zoom.us/j/8233498646';
export const DATUM_LANG = 'Donnerstag, 26. November 2026';
export const DATUM_KURZ = 'Do 26. November';
export const UHRZEIT = '19:30 Uhr';

// Kalender: 19:30–21:00 Uhr deutscher Zeit (= 18:30–20:00 UTC)
const kalText = encodeURIComponent('Webinar: Die 12 heiligen Nächte (Annette & Herbert Himmelstoß)');
const kalInfo = encodeURIComponent(`Zoom-Raum: ${ZOOM_URL}`);
export const GOOGLE_KALENDER_URL =
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${kalText}&dates=20261126T183000Z/20261126T200000Z&details=${kalInfo}&location=${encodeURIComponent(ZOOM_URL)}`;
export const ICS_URL = '/downloads/12-heilige-naechte-webinar.ics';

// Aufzeichnung: nach dem Webinar hier die Bunny-Video-ID (Bibliothek 708695) ODER eine YouTube-ID eintragen.
export const BUNNY_VIDEO_ID = '';
export const YOUTUBE_VIDEO_ID = '';
// Die Aufzeichnung ist 72 Stunden zu sehen: bis So 29.11.2026, 23:59 Uhr (deutsche Zeit) — gleiche Frist wie der 240-€-Preis.
export const AUFZEICHNUNG_BIS = '2026-11-29';

export const SALESPAGE_URL = '/12-heilige-naechte';
export const CHECKOUT_BASIS = 'https://www.digistore24.com/product/751668';

// Preisstufen wie auf /12-heilige-naechte (Gutscheine in Digistore, Produkt 751668).
// „bis“ = letzter Tag der Stufe (ISO, deutsche Zeit). Die letzte Stufe läuft ohne Ende.
export const PREISSTUFEN = [
  { tag: 'Frühbucherpreis', preis: '240 €', bis: '2026-11-29', frist: 'Nur bis Sonntag, 29. November', ab: '',                code: 'FRUEHBUCHER26' },
  { tag: 'Aktionspreis',    preis: '270 €', bis: '2026-12-12', frist: 'Nur bis 12. Dezember',          ab: 'Ab 30. November', code: 'ADVENT2026' },
  { tag: 'Regulärer Preis', preis: '330 €', bis: null,         frist: '',                              ab: 'Ab 13. Dezember', code: null },
];
