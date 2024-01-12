const preset = require('@tailv/preset')
const typography = require('@tailwindcss/typography')
const path = require('node:path')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './core/**/*.{ts,tsx,vue,mdx}',
    './pages/**/*.{ts,tsx,vue,mdx}',
    path.resolve(__dirname, '../style/src/**/*.ts'),
    path.resolve(__dirname, '../react/src/**/*.{ts,tsx}'),
    path.resolve(__dirname, '../vue/src/**/*.{ts,tsx,vue}'),
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  presets: [preset.tailwindcss],
  plugins: [typography({ target: 'modern' })],
}
