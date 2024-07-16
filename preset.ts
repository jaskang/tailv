import { TinyColor } from '@ctrl/tinycolor'
import { type Config } from 'tailwindcss'

interface Colors {
  [color: string]: string | Colors
}

type Preset = Required<Config>['presets'][number]
type Plugin = Required<Config>['plugins'][number]

function toHsl(color: string) {
  const c = new TinyColor(color)
  const hsl = c.toHsl()
  const hsla = c.toHslString()
  // return `${hsl.h} ${hsl.s}% ${hsl.l}%`
  //  'hsla(xxx, xxx, xxx, xx)' -> 'xxx xxx xxx'
  return c.toHslString().substring(4, hsla.indexOf(')')).replace(/\,/g, '')
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

const flattenColorPalette = (colors: Colors): Record<string, string> =>
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

function extractColorsVar(colors: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(colors).map(([key, val]) => [`--color-${key}`, val]))
}

function createAliasColorConfig(alias: string): Record<string, string> {
  return {
    DEFAULT: `var(--t-${alias})`,
    hover: `var(--t-${alias}-hover,--t-${alias})`,
    fg: `var(--t-${alias}-fg)`,
    soft: `var(--t-${alias}-soft)`,
    'soft-hover': `var(--t-${alias}-soft-hover,--t-${alias}-soft)`,
    'soft-fg': `var(--t-${alias}-soft-fg)`,
  }
}

const isCssValue = (val: string) =>
  val.startsWith('#') || val.startsWith('hsl') || val.startsWith('grb') || val.startsWith('var')

function create950ColorVars(
  alias: string,
  source: string,
  addons: Record<string, string>,
  lvHandler?: (scope: string, k: number) => string
): Record<string, string> {
  const { default: defaultValue = `var(--${source}-${500})`, foreground = '#FFFFFF', ...others } = addons
  const group = `--tui-${alias}`
  const result = {
    [group]: defaultValue,
  }
  for (const key of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
    result[`${group}-${key}`] = lvHandler ? lvHandler(source, key) : `var(--${source}-${key})`
  }
  const config: Record<string, string> = { foreground, ...others }
  Object.keys(config).forEach(key => {
    result[`${group}-${key}`] = config[key]!
  })
  return result
}

const createAliasColorVars = (alias: string, source: string) => {
  return {
    [`--t-${alias}`]: `var(--color-${source}-500)`,
    [`--t-${alias}-hover`]: `var(--color-${source}-600)`,
    [`--t-${alias}-fg`]: `var(--color-white)`,
    [`--t-${alias}-soft`]: `var(--color-${source}-50)`,
    [`--t-${alias}-soft-hover`]: `var(--color-${source}-100)`,
    [`--t-${alias}-soft-fg`]: `var(--color-${source}-500)`,
  }
}

const createAliasColorDarkVars = (alias: string, source: string, addons: Record<string, string> = {}) => {
  if (alias === 'default') {
    return create950ColorVars(alias, source, { ...addons, 950: 'var(--white)' }, (scope, k) => {
      const target = 900 - k
      return `var(--${scope}-${target === 850 ? 900 : target === 0 ? 50 : target})`
    })
  } else {
    return create950ColorVars(alias, source, addons, (scope, k) => `var(--${scope}-${1000 - k})`)
  }
}

const varPlugin: Plugin = {
  handler: ({ addBase, theme, config }) => {
    const { darkMode, darkClass } = darkConfig(config)
    const darkContext = darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : `:is(${darkClass})`
    const colorsVar = extractColorsVar(flattenColorPalette(theme('colors')))

    // const defaultColor = theme('tailv.default') || 'slate'
    const defaultColor: string = theme('tailv.default') || 'gray'
    const primaryColor: string = theme('tailv.primary') || 'indigo'
    const successColor: string = theme('tailv.success') || 'green'
    const warningColor: string = theme('tailv.warning') || 'amber'
    const dangerColor: string = theme('tailv.danger') || 'red'

    addBase({
      '*, ::before, ::after': {
        // '--tw-ring-color': 'var(--tui-border)',
        // 'border-color': `hsl(var(--tui-border))`,
        // '--tw-ring-offset-color': `hsl(var(--tui-border))`,
      },
      'input,button,textarea,select': {
        outline: 'none',
        appearance: 'none',
      },
      ':root': {
        ...colorsVar,

        // ...createAliasColorVars('default', defaultColor, {
        //   default: `var(--${defaultColor}-300)`,
        //   foreground: `var(--${defaultColor}-700)`,
        //   background: `var(--white)`,
        // }),
        '--t-background': `var(--color-white)`,
        '--t-border': `var(--color-${defaultColor}-200)`,
        '--t-input': `var(--color-${defaultColor}-200)`,
        '--t-mute-fg': `var(--color-${defaultColor}-400)`,
        '--t-mute': `var(--color-${defaultColor}-400)`,

        [`--t-default`]: `var(--color-${defaultColor}-700)`,
        [`--t-default-hover`]: `var(--color-${defaultColor}-800)`,
        [`--t-default-fg`]: `var(--color-white)`,
        [`--t-default-soft`]: `var(--color-${defaultColor}-50)`,
        [`--t-default-soft-hover`]: `var(--color-${defaultColor}-100)`,
        [`--t-default-soft-fg`]: `var(--color-${defaultColor}-700)`,

        ...createAliasColorVars('primary', primaryColor),
        ...createAliasColorVars('success', successColor),
        ...createAliasColorVars('warning', warningColor),
        ...createAliasColorVars('danger', dangerColor),
      },
      [darkContext]: {
        '--t-background': `var(--color-${defaultColor}-950)`,
        '--t-border': `var(--color-${defaultColor}-700)`,
        '--t-input': `var(--color-${defaultColor}-700)`,

        // ...createAliasColorDarkVars('default', defaultColor, {
        //   default: `var(--${defaultColor}-700)`,
        //   foreground: `var(--${defaultColor}-400)`,
        //   background: `var(--${defaultColor}-950)`,
        //   '950': theme(`colors.white`),
        // }),

        [`--t-default`]: `var(--color-${defaultColor}-200)`,
        [`--t-default-hover`]: `var(--color-${defaultColor}-100)`,
        [`--t-default-fg`]: `var(--color-${defaultColor}-700)`,
        [`--t-default-soft`]: `var(--color-${defaultColor}-950)`,
        [`--t-default-soft-hover`]: `var(--color-${defaultColor}-900)`,
        [`--t-default-soft-fg`]: `var(--color-${defaultColor}-200)`,
      },

      body: {
        color: 'var(--t-default)',
        'background-color': 'var(--t-background)',
        'font-synthesis-weight': 'none',
        'text-rendering': 'optimizeLegibility',
      },
    })
  },
}

export default {
  future: {
    respectDefaultRingColorOpacity: true,
  },
  theme: {
    extend: {
      colors: {
        input: 'var(--t-input)',
        border: 'var(--t-border)',
        background: 'var(--t-background)',
        mute: {
          DEFAULT: 'var(--t-mute)',
          fg: 'var(--t-mute-fg)',
        },

        default: createAliasColorConfig('default'),
        primary: createAliasColorConfig('primary'),
        success: createAliasColorConfig('success'),
        warning: createAliasColorConfig('warning'),
        danger: createAliasColorConfig('danger'),
      },
      borderColor: {
        DEFAULT: 'var(--t-border)',
      },
      ringColor: {
        DEFAULT: 'var(--t-primary)',
      },
      ringOffsetColor: {
        DEFAULT: 'var(--t-background)',
      },
      tailv: {},
    },
  },
  plugins: [
    varPlugin,
    {
      handler: ({ addUtilities, matchUtilities, addBase, matchComponents, theme, config }) => {
        const currentColor = theme('colors.gray.500')!.replace('#', '%23')

        const resizeImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="${currentColor}" d="M4 5q-.425 0-.712-.288T3 4t.288-.712T4 3t.713.288T5 4t-.288.713T4 5m4 0q-.425 0-.712-.288T7 4t.288-.712T8 3t.713.288T9 4t-.288.713T8 5m4 0q-.425 0-.712-.288T11 4t.288-.712T12 3t.713.288T13 4t-.288.713T12 5M4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m16 0q-.425 0-.712-.288T19 12t.288-.712T20 11t.713.288T21 12t-.288.713T20 13m0 4q-.425 0-.712-.288T19 16t.288-.712T20 15t.713.288T21 16t-.288.713T20 17m-8 4q-.425 0-.712-.288T11 20t.288-.712T12 19t.713.288T13 20t-.288.713T12 21m4 0q-.425 0-.712-.288T15 20t.288-.712T16 19t.713.288T17 20t-.288.713T16 21m4 0q-.425 0-.712-.288T19 20t.288-.712T20 19t.713.288T21 20t-.288.713T20 21M19 8V5h-3q-.425 0-.712-.288T15 4t.288-.712T16 3h3q.825 0 1.413.588T21 5v3q0 .425-.288.713T20 9t-.712-.288T19 8M3 19v-3q0-.425.288-.712T4 15t.713.288T5 16v3h3q.425 0 .713.288T9 20t-.288.713T8 21H5q-.825 0-1.412-.587T3 19"/></svg>')`
        // const resizeImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="${currentColor}" stroke-width="2"><path d="M10 20h10V10"/><path d="M12 17h5v-5"/></g></svg>')`

        addUtilities({
          '.scrollbar': {
            '--resizer-image': resizeImage,
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
              backgroundColor: theme('colors.default.200'),
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.default.500'),
            },
            '&:not(:disabled)::-webkit-scrollbar-thumb': {
              cursor: 'pointer',
            },
            '&:not(:disabled)::-webkit-scrollbar-thumb:hover': {
              backgroundColor: theme('colors.default.800'),
            },
            '&::-webkit-scrollbar-button': {
              display: 'none',
            },
            '&::-webkit-scrollbar-corner': {
              backgroundColor: 'transparent',
            },
            '&::-webkit-resizer': {
              // backgroundImage: 'var(--resizer-image)',
              // backgroundSize: '12px 12px',
              // backgroundPosition: 'center center',
              backgroundColor: 'transparent',
              color: 'red',
              backgroundRepeat: 'no-repeat',
              width: theme('space.3'),
              height: theme('space.3'),
              borderRadius: theme('borderRadius.full'),
              backgroundImage:
                'linear-gradient(135deg, transparent 0%,transparent 45%, currentColor 50%,  transparent 70%, currentColor 90%, transparent 90%, transparent 100%)',
              backgroundSize: '50% 50%',
              backgroundPosition: 'center center',
            },
          },
        })
      },
    } as Plugin,
    // forms({ strategy: 'base' }),
  ],
} as Preset
