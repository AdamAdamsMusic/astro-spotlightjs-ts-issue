import { defineConfig } from 'astro/config';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  experimental: {
    contentCollectionCache: true,
  },
  srcDir: './src',
  publicDir: './public',
  outDir: './target',
  compressHTML: false,
  integrations: [
    sentry(),
    spotlightjs(),
  ],
  vite: {
    build: {
      sourcemap: true,
    },
  },
});
