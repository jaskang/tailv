import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'
import forms from '@tailwindcss/forms'

type Preset = Required<Config>['presets'][number]
type Plugin = Required<Config>['plugins'][number]

function extractColorVars(colorObj: any, scope = ''): Record<string, string> {
  return Object.keys(colorObj).reduce((vars, key) => {
    const value = colorObj[key]
    if (typeof value === 'string') {
      return { ...vars, [`--color-${scope ? scope + '-' + key : key}`]: value }
    } else {
      return { ...vars, ...extractColorVars(value, `${key}`) }
    }
  }, {})
}

const varPlugin:Plugin = {
  handler: ({ addBase, theme }) => {
    const all = extractColorVars(theme('colors'))
    addBase({
      ':root': all,
    })
  }
}

export default {
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
    varPlugin,
  ],
} as Preset
