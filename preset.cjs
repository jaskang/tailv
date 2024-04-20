const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')

/**
 *
 * @param {import('tailwindcss/colors')} colorObj
 * @param {string} scope
 * @returns
 */
function extractColorVars(colorObj, scope = '') {
  return Object.keys(colorObj).reduce((vars, key) => {
    const value = colorObj[key]
    if (typeof value === 'string') {
      return { ...vars, [`--color-${scope ? scope + '-' + key : key}`]: value }
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
        danger: colors.red,
      },
    },
  },
  plugins: [
    forms({ strategy: 'base' }),
    function ({ addBase, theme }) {
      const all = extractColorVars(theme('colors'))
      addBase({
        ':root': all,
      })
    },
  ],
}
