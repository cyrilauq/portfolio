// @ts-check
import { defineConfig } from 'astro/config'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

import vue from '@astrojs/vue'

export default defineConfig({
  output: 'server',
  server: {
    host: true, // Force l'écoute sur 0.0.0.0
    port: 4321,
  },
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
})
