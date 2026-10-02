// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://domelier.fr',
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  build: {
    // CSS intégré à chaque page : pas de requête bloquante, et le CV s'imprime en PDF hors serveur
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
