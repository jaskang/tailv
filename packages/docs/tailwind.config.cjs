const preset = require('@tailv/preset')
// const typography = require('@tailwindcss/typography')
const path = require('node:path')

module.exports = {
  darkMode: 'class',
  content: ['./**/*.md', './.vitepress/**/*.{ts,tsx,vue}', path.resolve(__dirname, '../vue/src/**/*.{ts,tsx,vue}')],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  presets: [preset.tailwindcss],
  // plugins: [typography({ target: 'modern' })],
}
