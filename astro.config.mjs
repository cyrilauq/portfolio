// @ts-check
import { defineConfig } from 'astro/config'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'

import vue from '@astrojs/vue'

import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: {
    host: true, // Force l'écoute sur 0.0.0.0
    port: 4321,
  },
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss({ optimize: true })],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
})