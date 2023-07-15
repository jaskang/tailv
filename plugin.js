import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

function extractColorVars(colorObj, colorGroup = '') {
  return Object.keys(colorObj).reduce((vars, key) => {
    const value = colorObj[key]
    const cssVariable = key === 'DEFAULT' ? `--t-c${colorGroup}` : `--t-c${colorGroup}-${key}`
    const newVars = typeof value === 'string' ? { [cssVariable]: value } : extractColorVars(value, `-${key}`)
    return { ...vars, ...newVars }
  }, {})
}

export default plugin.withOptions(
  options =>
    ({ addBase, theme }) => {
      const all = extractColorVars(theme('colors'))
      addBase({
        ':root': all,
      })
    },
  options => ({
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
  })
)
