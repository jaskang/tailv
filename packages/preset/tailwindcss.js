const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')

function extractColorVars(colorObj, colorGroup = '') {
  return Object.keys(colorObj).reduce((vars, key) => {
    const value = colorObj[key]
    if (typeof value === 'string') {
      return { ...vars, [`--z-${colorGroup}${key}`]: value }
    } else {
      return { ...vars, ...extractColorVars(value, `${key}`) }
    }
  }, {})
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        success: colors.green,
        warning: colors.amber,
        error: colors.red,
      },
    },
  },
  plugins: [
    forms({ strategy: 'base' }),
    function ({ addBase, addComponents, theme }) {
      const all = extractColorVars(theme('colors'))
      addBase({
        ':root': all,
      })
    },
  ],
}
