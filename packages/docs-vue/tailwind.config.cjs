const preset = require('@zonda/preset')
const typography = require('@tailwindcss/typography')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './core/**/*.{ts,tsx,md,mdx}',
    './pages/**/*.{ts,tsx,md,mdx}',
    './node_modules/@zonda/style/src/**/*.{ts}',
    './node_modules/@zonda/react/src/**/*.{ts,tsx}',
    './node_modules/@zonda/vue/src/**/*.{ts,tsx}',
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
