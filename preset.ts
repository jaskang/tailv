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

function createAliasColorVars(
  alias: string,
  source: string,
  addons: Record<string, string> = {}
): Record<string, string> {
  const { default: defaultKey = '500', foreground = '#FFFFFF', ...others } = addons
  const group = `--tui-${alias}`
  const result = {
    [group]: `var(--${source}-${defaultKey})`,
  }
  for (const key of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
    result[`${group}-${key}`] = `var(--${source}-${key})`
  }
  const config: Record<string, string> = { foreground, ...others }
  Object.keys(config).forEach(key => {
    const val =
      config[key].startsWith('#') || config[key].startsWith('hsl') || config[key].startsWith('grb')
        ? config[key]
        : `var(--${source}-${config[key]})`
    result[`${group}-${key}`] = val
  })
  return result
}

function createAliasColorDarkVars(
  alias: string,
  source: string,
  addons: Record<string, string> = {}
): Record<string, string> {
  const { default: defaultKey = '500', foreground = '#FFFFFF', ...others } = addons
  const group = `--tui-${alias}`
  const result = {
    [group]: `var(--${source}-${defaultKey})`,
  }
  for (const key of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
    result[`${group}-${key}`] = `var(--${source}-${1000 - key})`
  }
  const config: Record<string, string> = { foreground, ...others }
  Object.keys(config).forEach(key => {
    const val =
      config[key].startsWith('#') || config[key].startsWith('hsl') || config[key].startsWith('grb')
        ? config[key]
        : `var(--${source}-${config[key]})`
    result[`${group}-${key}`] = val
  })
  return result
}

const varPlugin: Plugin = {
  handler: ({ addBase, theme, config }) => {
    const { darkMode, darkClass } = darkConfig(config)
    const darkContext = darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : `:is(${darkClass})`
    const colorsVar = extractColorsVar(flattenColorPalette(theme('colors')))

    // const defaultColor = theme('tailv.default') || 'slate'
    const defaultColor: string = theme('tailv.default') || 'slate'
    const primaryColor: string = theme('tailv.primary') || 'indigo'
    const successColor: string = theme('tailv.success') || 'green'
    const warningColor: string = theme('tailv.warning') || 'amber'
    const dangerColor: string = theme('tailv.danger') || 'red'

    addBase({
      '*, ::before, ::after': {
        // 'border-color': `hsl(var(--tui-border))`,
        // '--tw-ring-offset-color': `hsl(var(--tui-border))`,
      },
      ':root': {
        ...colorsVar,

        ...createAliasColorVars('default', defaultColor, { default: '300', foreground: '700' }),
        ...createAliasColorVars('primary', primaryColor),
        ...createAliasColorVars('success', successColor),
        ...createAliasColorVars('warning', warningColor),
        ...createAliasColorVars('danger', dangerColor),
        '--tui-background': `var(--white)`,
        '--tui-foreground': `var(--${defaultColor}-700)`,
        '--tui-foreground2': toHsl(theme(`colors.${defaultColor}.900`)),

        '--tui-border': `var(--tui-default-200)`,
      },
      [darkContext]: {
        '--tui-background': `var(--${defaultColor}-950)`,
        '--tui-foreground': `var(--${defaultColor}-400)`,
        '--tui-foreground-dark': toHsl(theme(`colors.${defaultColor}.200`)),

        ...createAliasColorDarkVars('default', defaultColor, {
          default: '700',
          '950': theme(`colors.white`),
        }),
        ...createAliasColorDarkVars('primary', primaryColor),
        ...createAliasColorDarkVars('success', successColor),
        ...createAliasColorDarkVars('warning', warningColor),
        ...createAliasColorDarkVars('danger', dangerColor),
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
      borderColor: {
        DEFAULT: 'var(--tui-border)',
      },
      ringColor: {
        DEFAULT: 'var(--tui-border)',
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
              backgroundImage: 'var(--resizer-image)',
              backgroundColor: 'transparent',
              backgroundSize: '10px 10px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: theme('space.3'),
              height: theme('space.3'),
              borderRadius: theme('borderRadius.full'),
            },
          },
        })
      },
    } as Plugin,
    // forms({ strategy: 'base' }),
  ],
} as Preset
