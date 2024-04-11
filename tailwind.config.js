import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import typography from '@tailwindcss/typography'
import preset from './preset'

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(__dirname)

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    join(__dirname, './src/**/*.{ts,vue}'),
    join(__dirname, './site/components/**/*.{md,vue,ts}'),
    join(__dirname, './site/.vitepress/theme/**/*.{vue,ts}'),
  ],

  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  presets: [preset],
  plugins: [typography()],
  blocklist: ['container'],
}
