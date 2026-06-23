import {defineConfig} from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://yobix.in',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [
        tailwindcss()
    ]
  },

  server: {
    port: 3000,
    host: true
  },

  output: 'static',
  adapter: cloudflare()
});