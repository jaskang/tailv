
import colors from 'tailwindcss/colors'
import forms from '@tailwindcss/forms'


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
export default {
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
  plugin:[
    forms({ strategy: 'base' }),
    function ({ addBase, addComponents, theme }){
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
          '&:enabled:hover': {
            color: 'var(--z-btn-text_hover, var(--z-btn-text))',
            backgroundColor: 'var(--z-btn-bg_hover, var(--z-btn-bg))',
            borderColor: 'var(--z-btn-border_hover, var(--z-btn-border))',
          },
        }, 
      })
    },
  ]
}