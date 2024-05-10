import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'
import { TinyColor } from '@ctrl/tinycolor'

type Preset = Required<Config>['presets'][number]
type Plugin = Required<Config>['plugins'][number]

function toHsl(color: string) {
  const c = new TinyColor(color)
  const hsla = c.toHslString()
  //  'hsla(xxx, xxx, xxx, xx)' -> 'xxx xxx xxx'
  return hsla.substring(4, hsla.indexOf(')')).replace(/\,/g, '')
}

const flattenColors = (colors: Record<string, Record<string, string>> | Record<string, string> | undefined) => {
  return Object.assign({}, ...Object.entries(colors ?? {}).map(([color, values]) => ({ [color]: color })))
}

const darkConfig = (config: any) => {
  let [darkMode, darkClass = '.dark'] = ([] as any[]).concat(config('darkMode', 'media'))
  if (darkMode === false) {
    darkMode = 'media'
  }
  const darkContext = darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : `&:is(${darkClass} *)`
  return { darkMode, darkClass, darkContext }
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
    const { darkMode, darkClass } = darkConfig(config)
    const darkContext = darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : `:is(${darkClass})`
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
    const text = theme('tailv.text') || 'slate'

    addBase({
      ':where(*)': {
        'border-color': 'hsl(var(--border))',
      },
      ':where(*):focus': { outline: 'none' },

      ':root': {
        '--border': toHsl(theme('colors.slate.200')),
        '--input': toHsl(theme('colors.slate.200')),
        '--background': toHsl(theme('colors.white')),
        '--foreground': toHsl(theme('colors.slate.900')),

        '--accent': toHsl(theme('colors.slate.100')),
        // '--accent-foreground': toHsl(theme('colors.slate.500')),
        '--accent-foreground': toHsl(theme('colors.slate.800')),

        '--muted': toHsl(theme('colors.slate.100')),
        '--muted-foreground': toHsl(theme('colors.slate.500')),

        '--primary': toHsl(theme('colors.fuchsia.500')),
        '--primary-foreground': toHsl(theme('colors.slate.50')),
        '--primary-light': toHsl(theme('colors.fuchsia.400')),
        '--primary-dark': toHsl(theme('colors.fuchsia.600')),
        '--primary-soft': toHsl(theme('colors.fuchsia.100')),

        '--success': toHsl(theme('colors.green.500')),
        '--success-foreground': toHsl(theme('colors.slate.50')),
        '--success-light': toHsl(theme('colors.green.400')),
        '--success-dark': toHsl(theme('colors.green.600')),
        '--success-soft': toHsl(theme('colors.green.100')),

        '--warning': toHsl(theme('colors.amber.500')),
        '--warning-foreground': toHsl(theme('colors.slate.50')),
        '--warning-light': toHsl(theme('colors.amber.400')),
        '--warning-dark': toHsl(theme('colors.amber.600')),
        '--warning-soft': toHsl(theme('colors.amber.100')),

        '--danger': toHsl(theme('colors.red.500')),
        '--danger-foreground': toHsl(theme('colors.slate.50')),
        '--danger-light': toHsl(theme('colors.red.400')),
        '--danger-dark': toHsl(theme('colors.red.600')),
        '--danger-soft': toHsl(theme('colors.red.100')),

        '--popper': toHsl(theme('colors.white')),
        '--popper-foreground': toHsl(theme('colors.white')),

        // '--ring': toHsl(theme('colors.white')),

        // '--t-primary': theme(`colors.primary.500`),
        // '--t-background': theme(`colors.white`),
        // '--t-foreground': theme(`colors.${text}.100`),
        // '--t-border': theme(`colors.${border}.200`),
        // '--t-muted': theme(`colors.${bg}.100`),
        // '--t-input-bg': theme(`colors.white`),
      },
      [darkContext]: {
        '--border': toHsl(theme('colors.slate.700')),
        '--input': toHsl(theme('colors.slate.800')),
        '--background': toHsl(theme('colors.slate.900')),
        '--foreground': toHsl(theme('colors.slate.50')),

        '--accent': toHsl(theme('colors.slate.800')),
        '--accent-foreground': toHsl(theme('colors.slate.100')),

        '--muted': toHsl(theme('colors.slate.800')),
        '--muted-foreground': toHsl(theme('colors.slate.400')),

        '--primary': toHsl(theme('colors.fuchsia.500')),
        '--primary-foreground': toHsl(theme('colors.slate.50')),
        '--primary-light': toHsl(theme('colors.fuchsia.600')),
        '--primary-dark': toHsl(theme('colors.fuchsia.400')),
        '--primary-soft': toHsl(theme('colors.fuchsia.950')),

        '--success': toHsl(theme('colors.green.500')),
        '--success-foreground': toHsl(theme('colors.slate.50')),
        '--success-light': toHsl(theme('colors.green.600')),
        '--success-dark': toHsl(theme('colors.green.400')),
        '--success-soft': toHsl(theme('colors.green.950')),

        '--warning': toHsl(theme('colors.amber.500')),
        '--warning-foreground': toHsl(theme('colors.slate.50')),
        '--warning-light': toHsl(theme('colors.amber.600')),
        '--warning-dark': toHsl(theme('colors.amber.400')),
        '--warning-soft': toHsl(theme('colors.amber.950')),

        '--danger': toHsl(theme('colors.red.500')),
        '--danger-foreground': toHsl(theme('colors.slate.50')),
        '--danger-light': toHsl(theme('colors.red.600')),
        '--danger-dark': toHsl(theme('colors.red.400')),
        '--danger-soft': toHsl(theme('colors.red.950')),

        '--popper': toHsl(theme('colors.white')),
        '--popper-foreground': toHsl(theme('colors.white')),

        // '--ring': toHsl(theme('colors.white')),

        // '--t-primary': theme(`colors.primary.500`),
        // '--t-border': theme(`colors.${border}.700`),
        // '--t-foreground': theme(`colors.${text}.100`),
        // '--t-background': theme(`colors.${bg}.900`),
        // '--t-muted': theme(`colors.${bg}.800`),
        // '--t-input-bg': theme(`colors.${bg}.800`),
      },

      body: {
        color: 'hsl(var(--foreground))',
        'background-color': 'hsl(var(--background))',
        'font-synthesis-weight': 'none',
        'text-rendering': 'optimizeLegibility',
      },
    })
  },
}

export default {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          light: 'hsl(var(--primary-light))',
          dark: 'hsl(var(--primary-dark))',
          soft: 'hsl(var(--primary-soft))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
          light: 'hsl(var(--success-light))',
          dark: 'hsl(var(--success-dark))',
          soft: 'hsl(var(--success-soft))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
          light: 'hsl(var(--warning-light))',
          dark: 'hsl(var(--warning-dark))',
          soft: 'hsl(var(--warning-soft))',
        },
        danger: {
          DEFAULT: 'hsl(var(--danger))',
          foreground: 'hsl(var(--danger-foreground))',
          light: 'hsl(var(--danger-light))',
          dark: 'hsl(var(--danger-dark))',
          soft: 'hsl(var(--danger-soft))',
        },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popper: { DEFAULT: 'hsl(var(--popper))', foreground: 'hsl(var(--popper-foreground))' },
      },
      tailv: {},
    },
  },
  plugins: [
    varPlugin,
    {
      handler: ({ addUtilities, matchUtilities, addBase, matchComponents, theme, config }) => {
        const { darkContext } = darkConfig(config)

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
      },
    } as Plugin,
    // forms({ strategy: 'base' }),
  ],
} as Preset
