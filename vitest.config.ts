import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default defineConfig({
  ...viteConfig,
  test: {
    environment: 'happy-dom',
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
})
