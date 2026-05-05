// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://rom42pla.github.io',
  base: '/biscuit_workshop',  // omit if deploying to a custom domain or user site
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});