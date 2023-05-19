const forms = require('@tailwindcss/forms')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx}', './docs/**/*.{vue,ts,tsx,md}'],
  theme: {
    extend: {},
  },
  plugins: [forms({ strategy: 'base' })],
}
