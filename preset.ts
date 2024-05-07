import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'
import forms from '@tailwindcss/forms'

type Preset = Required<Config>['presets'][number]
type Plugin = Required<Config>['plugins'][number]

const flattenColors = (colors: Record<string, Record<string, string>> | Record<string, string> | undefined) => {
  return Object.assign({}, ...Object.entries(colors ?? {}).map(([color, values]) => ({ [color]: color })))
}

const flattenColorPalette = (
  colors: Record<string, Record<string, string>> | Record<string, string> | undefined
): Record<string, string> =>
  Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  )

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

const varPlugin: Plugin = {
  handler: ({ addBase, theme, config }) => {
    let [mode, className = '.dark'] = ([] as any[]).concat(config('darkMode', 'media'))
    if (mode === false) {
      mode = 'media'
    }
    const darkContext = mode === 'media' ? '@media (prefers-color-scheme: dark)' : `:is(${className})`

    const all = extractColorVars(theme('colors'))

    // .theme-blue {
    //   --background: 0 0% 100%;
    //   --foreground: 222.2 84% 4.9%;
    //   --muted: 210 40% 96.1%;
    //   --muted-foreground: 215.4 16.3% 46.9%;
    //   --popover: 0 0% 100%;
    //   --popover-foreground: 222.2 84% 4.9%;
    //   --card: 0 0% 100%;
    //   --card-foreground: 222.2 84% 4.9%;
    //   --border: 214.3 31.8% 91.4%;
    //   --input: 214.3 31.8% 91.4%;
    //   --primary: 221.2 83.2% 53.3%;
    //   --primary-foreground: 210 40% 98%;
    //   --secondary: 210 40% 96.1%;
    //   --secondary-foreground: 222.2 47.4% 11.2%;
    //   --accent: 210 40% 96.1%;
    //   --accent-foreground: 222.2 47.4% 11.2%;
    //   --destructive: 0 84.2% 60.2%;
    //   --destructive-foreground: 210 40% 98%;
    //   --ring: 221.2 83.2% 53.3%;
    //   --radius:
    // }

    // .dark .theme-blue {
    //   --background: 222.2 84% 4.9%;
    //   --foreground: 210 40% 98%;
    //   --muted: 217.2 32.6% 17.5%;
    //   --muted-foreground: 215 20.2% 65.1%;
    //   --popover: 222.2 84% 4.9%;
    //   --popover-foreground: 210 40% 98%;
    //   --card: 222.2 84% 4.9%;
    //   --card-foreground: 210 40% 98%;
    //   --border: 217.2 32.6% 17.5%;
    //   --input: 217.2 32.6% 17.5%;
    //   --primary: 217.2 91.2% 59.8%;
    //   --primary-foreground: 222.2 47.4% 11.2%;
    //   --secondary: 217.2 32.6% 17.5%;
    //   --secondary-foreground: 210 40% 98%;
    //   --accent: 217.2 32.6% 17.5%;
    //   --accent-foreground: 210 40% 98%;
    //   --destructive: 0 62.8% 30.6%;
    //   --destructive-foreground: 210 40% 98%;
    //   --ring: 224.3 76.3% 48%
    // }
    const bg = theme('tailv.bg') || 'slate'
    const border = theme('tailv.border') || 'slate'
    addBase({
      ':root': {
        ...all,
        '--t-primary': theme(`colors.primary.500`),
        '--t-border': theme(`colors.${border}.200`),
        '--t-bg': theme(`colors.white`),
        '--t-input-bg': theme(`colors.white`),
      },
      [darkContext]: {
        '--t-primary': theme(`colors.primary.500`),
        '--t-border': theme(`colors.${border}.700`),
        '--t-bg': theme(`colors.${bg}.900`),
        '--t-input-bg': theme(`colors.${bg}.800`),
      },
    })
  },
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
      tailv: {},
    },
  },
  plugins: [
    varPlugin,
    {
      handler: ({ addUtilities, matchUtilities, addBase, matchComponents, theme, config }) => {
        let [mode, className = '.dark'] = ([] as any[]).concat(config('darkMode', 'media'))
        if (mode === false) {
          mode = 'media'
        }

        const darkContext = mode === 'media' ? '@media (prefers-color-scheme: dark)' : `&:is(${className} *)`

        const resizerColor = theme('colors.gray.500')!.replace('#', '%23')

        const resizeYImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/></svg>')`
        // const resizeXImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 12h6"/><path d="M8 12H2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M12 20v2"/><path d="m19 15 3-3-3-3"/><path d="m5 9-3 3 3 3"/></svg>')`
        const resizeAllImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/></svg>')`

        addUtilities({
          '.scrollbar': {
            '--resizer-image': resizeYImage,
            '&::-webkit-scrollbar': {
              width: theme('space.3'),
              height: theme('space.3'),
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb,&::-webkit-scrollbar-track': {
              backgroundClip: 'padding-box',
              border: `${theme('borderWidth.4')} solid transparent`,
              borderRadius: theme('borderRadius.full'),
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: theme('colors.gray.200'),
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.gray.500'),
            },
            '&:not(:disabled)::-webkit-scrollbar-thumb': {
              cursor: 'pointer',
            },
            '&:not(:disabled)::-webkit-scrollbar-thumb:hover': {
              backgroundColor: theme('colors.gray.800'),
            },
            '&::-webkit-scrollbar-button': {
              display: 'none',
            },
            '&::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-resizer': {
              backgroundImage: 'var(--resizer-image)',
              backgroundColor: 'transparent',
              backgroundSize: '10px 10px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: theme('space.3'),
              height: theme('space.3'),
              borderRadius: theme('borderRadius.full'),
            },
            [darkContext]: {
              '&::-webkit-scrollbar-track': {
                backgroundColor: theme('colors.gray.700'),
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme('colors.gray.500'),
              },
              '&:not(:disabled)::-webkit-scrollbar-thumb:hover': {
                backgroundColor: theme('colors.gray.200'),
              },
            },
          },
        })

        addUtilities({
          '.input-bg': { backgroundColor: 'var(--t-input-bg)' },
        })
        matchUtilities(
          {
            'input-bg': value => ({ '--t-input-bg': value }),
          },
          { values: flattenColorPalette(theme('colors')), type: ['color'] }
        )

        addUtilities({
          '.input-border': {
            outline: 'none',
            border: `1px solid var(--t-border)`,
            '&:focus': { outline: 'none' },
          },
          '.ring-border': {
            outline: 'none',
            '--tw-ring-offset-width': '0px',
            '--tw-ring-color': 'var(--t-border)',
            '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--t-bg)',
            '--tw-ring-shadow':
              'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
          },
          '.ring-outline': {
            outline: 'none',
            '--tw-ring-offset-width': '2px',
            '--tw-ring-color': 'var(--t-primary)',
            '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--t-bg)',
            '--tw-ring-shadow':
              'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
            // focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
          },
        })
        matchUtilities(
          {
            'input-border': value => ({ '--t-border': value }),
          },
          { values: flattenColorPalette(theme('colors')), type: ['color'] }
        )
      },
    } as Plugin,
    // forms({ strategy: 'base' }),
  ],
} as Preset
