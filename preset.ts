import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'
import { TinyColor } from '@ctrl/tinycolor'

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
  return Object.fromEntries(Object.entries(colors).map(([key, val]) => [`--${key}`, val]))
}

function createAliasColorConfig(alias: string): Record<string, string> {
  return {
    DEFAULT: `var(--tui-${alias})`,
    foreground: `var(--tui-${alias}-foreground)`,
    50: `var(--tui-${alias}-50)`,
    100: `var(--tui-${alias}-100)`,
    200: `var(--tui-${alias}-200)`,
    300: `var(--tui-${alias}-300)`,
    400: `var(--tui-${alias}-400)`,
    500: `var(--tui-${alias}-500)`,
    600: `var(--tui-${alias}-600)`,
    700: `var(--tui-${alias}-700)`,
    800: `var(--tui-${alias}-800)`,
    900: `var(--tui-${alias}-900)`,
    950: `var(--tui-${alias}-950)`,
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

const createAliasColorVars = (alias: string, source: string, addons: Record<string, string> = {}) =>
  create950ColorVars(alias, source, addons)

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
        '--tw-ring-color': 'var(--tui-border)',
        // 'border-color': `hsl(var(--tui-border))`,
        // '--tw-ring-offset-color': `hsl(var(--tui-border))`,
      },
      'input,button,textarea,select': {
        outline: 'none',
        appearance: 'none',
      },
      ':root': {
        ...colorsVar,

        ...createAliasColorVars('default', defaultColor, {
          default: `var(--${defaultColor}-300)`,
          foreground: `var(--${defaultColor}-700)`,
          background: `var(--white)`,
        }),
        ...createAliasColorVars('primary', primaryColor),
        ...createAliasColorVars('success', successColor),
        ...createAliasColorVars('warning', warningColor),
        ...createAliasColorVars('danger', dangerColor),

        '--tui-border': `var(--${defaultColor}-200)`,

        '--tui-background': `var(--tui-default-background)`,
        '--tui-foreground': `var(--tui-default-foreground)`,
        '--tw-ring-color': `var(--tui-border)`,
      },
      [darkContext]: {
        ...createAliasColorDarkVars('default', defaultColor, {
          default: `var(--${defaultColor}-700)`,
          foreground: `var(--${defaultColor}-400)`,
          background: `var(--${defaultColor}-950)`,
          '950': theme(`colors.white`),
        }),
        ...createAliasColorDarkVars('primary', primaryColor),
        ...createAliasColorDarkVars('success', successColor),
        ...createAliasColorDarkVars('warning', warningColor),
        ...createAliasColorDarkVars('danger', dangerColor),

        '--tui-border': `var(--${defaultColor}-700)`,
      },

      body: {
        color: 'var(--tui-foreground)',
        'background-color': 'var(--tui-background)',
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
        border: 'var(--tui-border)',
        background: 'var(--tui-background)',
        foreground: 'var(--tui-foreground)',
        'foreground-dark': 'var(--tui-foreground-dark)',

        default: createAliasColorConfig('default'),
        primary: createAliasColorConfig('primary'),
        success: createAliasColorConfig('success'),
        warning: createAliasColorConfig('warning'),
        danger: createAliasColorConfig('danger'),
      },
      outlineColor: {
        DEFAULT: 'var(--tui-primary)',
      },
      outlineStyle: {
        DEFAULT: 'solid',
      },
      borderColor: {
        DEFAULT: 'var(--tui-border)',
      },
      ringOpacity: {
        DEFAULT: '1',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--tui-border-hsl))',
      },
      ringOffsetColor: {
        DEFAULT: 'var(--tui-background)',
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
