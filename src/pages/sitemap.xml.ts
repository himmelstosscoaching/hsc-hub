import type { APIRoute } from 'astro';

// Dynamische Sitemap — hält sich SELBST aktuell.
// Liest automatisch alle .astro-Seiten aus src/pages/ (import.meta.glob),
// sodass neue Seiten von selbst in der Sitemap auftauchen.
// Ersetzt die alte, statische public/sitemap.xml (die veraltet war,
// eine nicht existierende Seite listete und einen falschen Namespace hatte).

const SITE = 'https://himmelstosscoaching.de';

// Seiten, die NICHT zu Google sollen (noindex / interne Entwürfe).
// Deckungsgleich mit den noindex-Seiten halten.
const EXCLUDE = new Set(['uebersicht', 'fokus', 'fokus2b']);

// Prioritäten je Seite (Default 0.7). Startseite oben, Rechtliches unten.
const PRIORITY: Record<string, number> = {
  '': 1.0,
  angebote: 0.9,
  impressum: 0.2,
  datenschutz: 0.2,
};

export const GET: APIRoute = () => {
  const modules = import.meta.glob('./**/*.astro');

  const slugs = Object.keys(modules)
    .map((f) => f.replace(/^\.\//, '').replace(/\.astro$/, ''))
    .filter((s) => !s.startsWith('_') && !EXCLUDE.has(s))
    .map((s) => (s === 'index' ? '' : s));

  // eindeutig + sortiert (Startseite zuerst, dann alphabetisch)
  const routes = Array.from(new Set(slugs)).sort((a, b) =>
    a === '' ? -1 : b === '' ? 1 : a.localeCompare(b, 'de')
  );

  const urls = routes
    .map((slug) => {
      const loc = `${SITE}/${slug}`;
      const priority = (PRIORITY[slug] ?? 0.7).toFixed(1);
      const changefreq =
        slug === ''
          ? 'weekly'
          : slug === 'impressum' || slug === 'datenschutz'
            ? 'yearly'
            : 'monthly';
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
