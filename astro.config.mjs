// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // /fokus2 war die Entwurfs-URL der Startseite — ist jetzt unter / live.
  // Alte Lesezeichen/Links auf /fokus2 sauber auf / umleiten.
  redirects: {
    '/fokus2': '/',
  },
});
