const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx}', './docs/**/*.{vue,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        normal: colors.slate,
        primary: colors.indigo,
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' }), require('@tailwindcss/aspect-ratio')],
}
