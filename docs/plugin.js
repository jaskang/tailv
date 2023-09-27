import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

function extractColorVars(colorObj, colorGroup = '') {
  return Object.keys(colorObj).reduce((vars, key) => {
    const value = colorObj[key]
    const cssVariable = key === 'DEFAULT' ? `--z-c${colorGroup}` : `--z-c${colorGroup}-${key}`
    const newVars =
      typeof value === 'string' ? { [cssVariable]: value } : extractColorVars(value, `-${key}`)
    return { ...vars, ...newVars }
  }, {})
}

export default plugin.withOptions(
  options =>
    ({ addBase, addUtilities, addComponents, theme }) => {
      const all = extractColorVars(theme('colors'))
      addBase({
        ':root': all,
      })
      addComponents({
        '.z-btn': {
          color: 'var(--z-btn-text, theme(colors.gray.700))',
          backgroundColor: 'var(--z-btn-bg, #fff)',
          borderColor: 'var(--z-btn-border, transparent)',
          outlineColor: 'var(--z-btn-outline)',
          '&:hover': {
            color: 'var(--z-btn-text_hover, var(--z-btn-text))',
            backgroundColor: 'var(--z-btn-bg_hover, var(--z-btn-bg))',
            borderColor: 'var(--z-btn-border_hover, var(--z-btn-border), transparent)',
          },
        },
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
