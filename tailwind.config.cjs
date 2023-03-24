const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'base' }),
    require('@tailwindcss/aspect-ratio'),
  ],
}
