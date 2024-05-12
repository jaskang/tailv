import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors.js'
import { TinyColor } from '@ctrl/tinycolor'

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

function createAliasColorConfig(alias: string): Record<string, string> {
  return {
    DEFAULT: `hsl(var(--tui-${alias}))`,
    foreground: `hsl(var(--tui-${alias}-foreground))`,
    50: `hsl(var(--tui-${alias}-50))`,
    100: `hsl(var(--tui-${alias}-100))`,
    200: `hsl(var(--tui-${alias}-200))`,
    300: `hsl(var(--tui-${alias}-300))`,
    400: `hsl(var(--tui-${alias}-400))`,
    500: `hsl(var(--tui-${alias}-500))`,
    600: `hsl(var(--tui-${alias}-600))`,
    700: `hsl(var(--tui-${alias}-700))`,
    800: `hsl(var(--tui-${alias}-800))`,
    900: `hsl(var(--tui-${alias}-900))`,
    950: `hsl(var(--tui-${alias}-950))`,
  }
}

function createAliasColorVars(
  alias: string,
  colors: Record<string, string>,
  options: {
    defaultKey: string
    addons?: Record<string, string>
    formatter?: ((k: string) => string) | 'reverse'
  }
): Record<string, string> {
  const { defaultKey, formatter, addons = {} } = options
  const keys = Object.keys(colors)
  const group = `--tui-${alias}`
  const result = {
    [group]: toHsl(colors[defaultKey]),
  }
  for (const key of keys) {
    let aliasKey = key
    if (typeof formatter === 'function') {
      aliasKey = formatter(key)
    } else if (formatter === 'reverse' && /^\d+$/.test(key)) {
      aliasKey = `${1000 - Number(key)}`
    }
    if (aliasKey) {
      result[`${group}-${aliasKey}`] = toHsl(colors[key])
    }
  }
  Object.keys(addons).forEach(key => {
    result[`${group}-${key}`] = toHsl(addons[key])
  })
  return result
}

const varPlugin: Plugin = {
  handler: ({ addBase, theme, config }) => {
    const { darkMode, darkClass } = darkConfig(config)
    const darkContext = darkMode === 'media' ? '@media (prefers-color-scheme: dark)' : `:is(${darkClass})`
    const all = extractColorVars(theme('colors'))

    //   .light, :root, [data-theme=light] {
    //     color-scheme: light;
    //     --nextui-background: 0 0% 100%;
    //     --nextui-foreground-50: 0 0% 98.04%;
    //     --nextui-foreground-100: 240 4.76% 95.88%;
    //     --nextui-foreground-200: 240 5.88% 90%;
    //     --nextui-foreground-300: 240 4.88% 83.92%;
    //     --nextui-foreground-400: 240 5.03% 64.9%;
    //     --nextui-foreground-500: 240 3.83% 46.08%;
    //     --nextui-foreground-600: 240 5.2% 33.92%;
    //     --nextui-foreground-700: 240 5.26% 26.08%;
    //     --nextui-foreground-800: 240 3.7% 15.88%;
    //     --nextui-foreground-900: 240 5.88% 10%;
    //     --nextui-foreground: 201.81999999999994 24.44% 8.82%;
    //     --nextui-divider: 0 0% 6.67%;
    //     --nextui-divider-opacity: 0.15;
    //     --nextui-focus: 212.01999999999998 100% 46.67%;
    //     --nextui-overlay: 0 0% 0%;
    //     --nextui-content1: 0 0% 100%;
    //     --nextui-content1-foreground: 201.81999999999994 24.44% 8.82%;
    //     --nextui-content2: 240 4.76% 95.88%;
    //     --nextui-content2-foreground: 240 3.7% 15.88%;
    //     --nextui-content3: 240 5.88% 90%;
    //     --nextui-content3-foreground: 240 5.26% 26.08%;
    //     --nextui-content4: 240 4.88% 83.92%;
    //     --nextui-content4-foreground: 240 5.2% 33.92%;
    //     --nextui-default-50: 0 0% 98.04%;
    //     --nextui-default-100: 240 4.76% 95.88%;
    //     --nextui-default-200: 240 5.88% 90%;
    //     --nextui-default-300: 240 4.88% 83.92%;
    //     --nextui-default-400: 240 5.03% 64.9%;
    //     --nextui-default-500: 240 3.83% 46.08%;
    //     --nextui-default-600: 240 5.2% 33.92%;
    //     --nextui-default-700: 240 5.26% 26.08%;
    //     --nextui-default-800: 240 3.7% 15.88%;
    //     --nextui-default-900: 240 5.88% 10%;
    //     --nextui-default-foreground: 0 0% 0%;
    //     --nextui-default: 240 4.88% 83.92%;
    //     --nextui-primary-50: 212.5 92.31% 94.9%;
    //     --nextui-primary-100: 211.84000000000003 92.45% 89.61%;
    //     --nextui-primary-200: 211.84000000000003 92.45% 79.22%;
    //     --nextui-primary-300: 212.24 92.45% 68.82%;
    //     --nextui-primary-400: 212.14 92.45% 58.43%;
    //     --nextui-primary-500: 212.01999999999998 100% 46.67%;
    //     --nextui-primary-600: 212.14 100% 38.43%;
    //     --nextui-primary-700: 212.24 100% 28.82%;
    //     --nextui-primary-800: 211.84000000000003 100% 19.22%;
    //     --nextui-primary-900: 211.84000000000003 100% 9.61%;
    //     --nextui-primary-foreground: 0 0% 100%;
    //     --nextui-primary: 212.01999999999998 100% 46.67%;
    //     --nextui-secondary-50: 270 61.54% 94.9%;
    //     --nextui-secondary-100: 270 59.26% 89.41%;
    //     --nextui-secondary-200: 270 59.26% 78.82%;
    //     --nextui-secondary-300: 270 59.26% 68.24%;
    //     --nextui-secondary-400: 270 59.26% 57.65%;
    //     --nextui-secondary-500: 270 66.67% 47.06%;
    //     --nextui-secondary-600: 270 66.67% 37.65%;
    //     --nextui-secondary-700: 270 66.67% 28.24%;
    //     --nextui-secondary-800: 270 66.67% 18.82%;
    //     --nextui-secondary-900: 270 66.67% 9.41%;
    //     --nextui-secondary-foreground: 0 0% 100%;
    //     --nextui-secondary: 270 66.67% 47.06%;
    //     --nextui-success-50: 146.66999999999996 64.29% 94.51%;
    //     --nextui-success-100: 145.71000000000004 61.4% 88.82%;
    //     --nextui-success-200: 146.2 61.74% 77.45%;
    //     --nextui-success-300: 145.78999999999996 62.57% 66.47%;
    //     --nextui-success-400: 146.01 62.45% 55.1%;
    //     --nextui-success-500: 145.96000000000004 79.46% 43.92%;
    //     --nextui-success-600: 146.01 79.89% 35.1%;
    //     --nextui-success-700: 145.78999999999996 79.26% 26.47%;
    //     --nextui-success-800: 146.2 79.78% 17.45%;
    //     --nextui-success-900: 145.71000000000004 77.78% 8.82%;
    //     --nextui-success-foreground: 0 0% 0%;
    //     --nextui-success: 145.96000000000004 79.46% 43.92%;
    //     --nextui-warning-50: 54.55000000000001 91.67% 95.29%;
    //     --nextui-warning-100: 37.139999999999986 91.3% 90.98%;
    //     --nextui-warning-200: 37.139999999999986 91.3% 81.96%;
    //     --nextui-warning-300: 36.95999999999998 91.24% 73.14%;
    //     --nextui-warning-400: 37.00999999999999 91.26% 64.12%;
    //     --nextui-warning-500: 37.02999999999997 91.27% 55.1%;
    //     --nextui-warning-600: 37.00999999999999 74.22% 44.12%;
    //     --nextui-warning-700: 36.95999999999998 73.96% 33.14%;
    //     --nextui-warning-800: 37.139999999999986 75% 21.96%;
    //     --nextui-warning-900: 37.139999999999986 75% 10.98%;
    //     --nextui-warning-foreground: 0 0% 0%;
    //     --nextui-warning: 37.02999999999997 91.27% 55.1%;
    //     --nextui-danger-50: 339.13 92% 95.1%;
    //     --nextui-danger-100: 340 91.84% 90.39%;
    //     --nextui-danger-200: 339.3299999999999 90% 80.39%;
    //     --nextui-danger-300: 339.11 90.6% 70.78%;
    //     --nextui-danger-400: 339 90% 60.78%;
    //     --nextui-danger-500: 339.20000000000005 90.36% 51.18%;
    //     --nextui-danger-600: 339 86.54% 40.78%;
    //     --nextui-danger-700: 339.11 85.99% 30.78%;
    //     --nextui-danger-800: 339.3299999999999 86.54% 20.39%;
    //     --nextui-danger-900: 340 84.91% 10.39%;
    //     --nextui-danger-foreground: 0 0% 100%;
    //     --nextui-danger: 339.20000000000005 90.36% 51.18%;
    //     --nextui-code-background: 245.71000000000004 16.8% 24.51%;
    //     --nextui-strong: 316.95000000000005 100% 65.29%;
    //     --nextui-code-mdx: 316.95000000000005 100% 65.29%;
    //     --nextui-divider-weight: 1px;
    //     --nextui-disabled-opacity: .5;
    //     --nextui-font-size-tiny: 0.75rem;
    //     --nextui-font-size-small: 0.875rem;
    //     --nextui-font-size-medium: 1rem;
    //     --nextui-font-size-large: 1.125rem;
    //     --nextui-line-height-tiny: 1rem;
    //     --nextui-line-height-small: 1.25rem;
    //     --nextui-line-height-medium: 1.5rem;
    //     --nextui-line-height-large: 1.75rem;
    //     --nextui-radius-small: 8px;
    //     --nextui-radius-medium: 12px;
    //     --nextui-radius-large: 14px;
    //     --nextui-border-width-small: 1px;
    //     --nextui-border-width-medium: 2px;
    //     --nextui-border-width-large: 3px;
    //     --nextui-box-shadow-small: 0px 0px 5px 0px rgba(0,0,0,.02), 0px 2px 10px 0px rgba(0,0,0,.06), 0px 0px 1px 0px rgba(0,0,0,.3);
    //     --nextui-box-shadow-medium: 0px 0px 15px 0px rgba(0,0,0,.03), 0px 2px 30px 0px rgba(0,0,0,.08), 0px 0px 1px 0px rgba(0,0,0,.3);
    //     --nextui-box-shadow-large: 0px 0px 30px 0px rgba(0,0,0,.04), 0px 30px 60px 0px rgba(0,0,0,.12), 0px 0px 1px 0px rgba(0,0,0,.3);
    //     --nextui-hover-opacity: .8;
    // }
    //   .dark, [data-theme=dark] {
    //     color-scheme: dark;
    //     --nextui-background: 0 0% 0%;
    //     --nextui-foreground-50: 240 5.88% 10%;
    //     --nextui-foreground-100: 240 3.7% 15.88%;
    //     --nextui-foreground-200: 240 5.26% 26.08%;
    //     --nextui-foreground-300: 240 5.2% 33.92%;
    //     --nextui-foreground-400: 240 3.83% 46.08%;
    //     --nextui-foreground-500: 240 5.03% 64.9%;
    //     --nextui-foreground-600: 240 4.88% 83.92%;
    //     --nextui-foreground-700: 240 5.88% 90%;
    //     --nextui-foreground-800: 240 4.76% 95.88%;
    //     --nextui-foreground-900: 0 0% 98.04%;
    //     --nextui-foreground: 210 5.56% 92.94%;
    //     --nextui-focus: 212.01999999999998 100% 46.67%;
    //     --nextui-overlay: 0 0% 0%;
    //     --nextui-divider: 0 0% 100%;
    //     --nextui-divider-opacity: 0.15;
    //     --nextui-content1: 240 5.88% 10%;
    //     --nextui-content1-foreground: 0 0% 98.04%;
    //     --nextui-content2: 240 3.7% 15.88%;
    //     --nextui-content2-foreground: 240 4.76% 95.88%;
    //     --nextui-content3: 240 5.26% 26.08%;
    //     --nextui-content3-foreground: 240 5.88% 90%;
    //     --nextui-content4: 240 5.2% 33.92%;
    //     --nextui-content4-foreground: 240 4.88% 83.92%;
    //     --nextui-default-50: 240 5.88% 10%;
    //     --nextui-default-100: 240 3.7% 15.88%;
    //     --nextui-default-200: 240 5.26% 26.08%;
    //     --nextui-default-300: 240 5.2% 33.92%;
    //     --nextui-default-400: 240 3.83% 46.08%;
    //     --nextui-default-500: 240 5.03% 64.9%;
    //     --nextui-default-600: 240 4.88% 83.92%;
    //     --nextui-default-700: 240 5.88% 90%;
    //     --nextui-default-800: 240 4.76% 95.88%;
    //     --nextui-default-900: 0 0% 98.04%;
    //     --nextui-default-foreground: 0 0% 100%;
    //     --nextui-default: 240 5.26% 26.08%;
    //     --nextui-primary-50: 211.84000000000003 100% 9.61%;
    //     --nextui-primary-100: 211.84000000000003 100% 19.22%;
    //     --nextui-primary-200: 212.24 100% 28.82%;
    //     --nextui-primary-300: 212.14 100% 38.43%;
    //     --nextui-primary-400: 212.01999999999998 100% 46.67%;
    //     --nextui-primary-500: 212.14 92.45% 58.43%;
    //     --nextui-primary-600: 212.24 92.45% 68.82%;
    //     --nextui-primary-700: 211.84000000000003 92.45% 79.22%;
    //     --nextui-primary-800: 211.84000000000003 92.45% 89.61%;
    //     --nextui-primary-900: 212.5 92.31% 94.9%;
    //     --nextui-primary-foreground: 0 0% 100%;
    //     --nextui-primary: 212.01999999999998 100% 46.67%;
    //     --nextui-secondary-50: 270 66.67% 9.41%;
    //     --nextui-secondary-100: 270 66.67% 18.82%;
    //     --nextui-secondary-200: 270 66.67% 28.24%;
    //     --nextui-secondary-300: 270 66.67% 37.65%;
    //     --nextui-secondary-400: 270 66.67% 47.06%;
    //     --nextui-secondary-500: 270 59.26% 57.65%;
    //     --nextui-secondary-600: 270 59.26% 68.24%;
    //     --nextui-secondary-700: 270 59.26% 78.82%;
    //     --nextui-secondary-800: 270 59.26% 89.41%;
    //     --nextui-secondary-900: 270 61.54% 94.9%;
    //     --nextui-secondary-foreground: 0 0% 100%;
    //     --nextui-secondary: 270 59.26% 57.65%;
    //     --nextui-success-50: 145.71000000000004 77.78% 8.82%;
    //     --nextui-success-100: 146.2 79.78% 17.45%;
    //     --nextui-success-200: 145.78999999999996 79.26% 26.47%;
    //     --nextui-success-300: 146.01 79.89% 35.1%;
    //     --nextui-success-400: 145.96000000000004 79.46% 43.92%;
    //     --nextui-success-500: 146.01 62.45% 55.1%;
    //     --nextui-success-600: 145.78999999999996 62.57% 66.47%;
    //     --nextui-success-700: 146.2 61.74% 77.45%;
    //     --nextui-success-800: 145.71000000000004 61.4% 88.82%;
    //     --nextui-success-900: 146.66999999999996 64.29% 94.51%;
    //     --nextui-success-foreground: 0 0% 0%;
    //     --nextui-success: 145.96000000000004 79.46% 43.92%;
    //     --nextui-warning-50: 37.139999999999986 75% 10.98%;
    //     --nextui-warning-100: 37.139999999999986 75% 21.96%;
    //     --nextui-warning-200: 36.95999999999998 73.96% 33.14%;
    //     --nextui-warning-300: 37.00999999999999 74.22% 44.12%;
    //     --nextui-warning-400: 37.02999999999997 91.27% 55.1%;
    //     --nextui-warning-500: 37.00999999999999 91.26% 64.12%;
    //     --nextui-warning-600: 36.95999999999998 91.24% 73.14%;
    //     --nextui-warning-700: 37.139999999999986 91.3% 81.96%;
    //     --nextui-warning-800: 37.139999999999986 91.3% 90.98%;
    //     --nextui-warning-900: 54.55000000000001 91.67% 95.29%;
    //     --nextui-warning-foreground: 0 0% 0%;
    //     --nextui-warning: 37.02999999999997 91.27% 55.1%;
    //     --nextui-danger-50: 340 84.91% 10.39%;
    //     --nextui-danger-100: 339.3299999999999 86.54% 20.39%;
    //     --nextui-danger-200: 339.11 85.99% 30.78%;
    //     --nextui-danger-300: 339 86.54% 40.78%;
    //     --nextui-danger-400: 339.20000000000005 90.36% 51.18%;
    //     --nextui-danger-500: 339 90% 60.78%;
    //     --nextui-danger-600: 339.11 90.6% 70.78%;
    //     --nextui-danger-700: 339.3299999999999 90% 80.39%;
    //     --nextui-danger-800: 340 91.84% 90.39%;
    //     --nextui-danger-900: 339.13 92% 95.1%;
    //     --nextui-danger-foreground: 0 0% 100%;
    //     --nextui-danger: 339.20000000000005 90.36% 51.18%;
    //     --nextui-strong: 190.14 94.67% 44.12%;
    //     --nextui-code-background: 0 8.33% 4.71%;
    //     --nextui-code-mdx: 190.14 94.67% 44.12%;
    //     --nextui-divider-weight: 1px;
    //     --nextui-disabled-opacity: .5;
    //     --nextui-font-size-tiny: 0.75rem;
    //     --nextui-font-size-small: 0.875rem;
    //     --nextui-font-size-medium: 1rem;
    //     --nextui-font-size-large: 1.125rem;
    //     --nextui-line-height-tiny: 1rem;
    //     --nextui-line-height-small: 1.25rem;
    //     --nextui-line-height-medium: 1.5rem;
    //     --nextui-line-height-large: 1.75rem;
    //     --nextui-radius-small: 8px;
    //     --nextui-radius-medium: 12px;
    //     --nextui-radius-large: 14px;
    //     --nextui-border-width-small: 1px;
    //     --nextui-border-width-medium: 2px;
    //     --nextui-border-width-large: 3px;
    //     --nextui-box-shadow-small: 0px 0px 5px 0px rgba(0,0,0,.05), 0px 2px 10px 0px rgba(0,0,0,.2), inset 0px 0px 1px 0px hsla(0,0%,100%,.15);
    //     --nextui-box-shadow-medium: 0px 0px 15px 0px rgba(0,0,0,.06), 0px 2px 30px 0px rgba(0,0,0,.22), inset 0px 0px 1px 0px hsla(0,0%,100%,.15);
    //     --nextui-box-shadow-large: 0px 0px 30px 0px rgba(0,0,0,.07), 0px 30px 60px 0px rgba(0,0,0,.26), inset 0px 0px 1px 0px hsla(0,0%,100%,.15);
    //     --nextui-hover-opacity: .9;
    // }

    // const defaultColor = theme('tailv.default') || 'slate'
    const defaultColor = theme('tailv.default') || 'zinc'
    const primaryColor = theme('tailv.primary') || 'indigo'
    const successColor = theme('tailv.success') || 'green'
    const warningColor = theme('tailv.warning') || 'amber'
    const dangerColor = theme('tailv.danger') || 'red'

    addBase({
      '*, ::before, ::after': {
        // 'border-color': `hsl(var(--tui-border))`,
        // '--tw-ring-offset-color': `hsl(var(--tui-border))`,
      },
      ':where(*):focus': { outline: 'none' },
      ':root': {
        '--tui-border': `var(--tui-default-200)`,

        '--tui-background': toHsl(theme('colors.white')),
        '--tui-foreground': toHsl(theme(`colors.${defaultColor}.700`)),

        ...createAliasColorVars('default', theme(`colors.${defaultColor}`), {
          defaultKey: '200',
          addons: { foreground: theme(`colors.${defaultColor}.700`) },
        }),
        ...createAliasColorVars('primary', theme(`colors.${primaryColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
        }),
        ...createAliasColorVars('success', theme(`colors.${successColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
        }),
        ...createAliasColorVars('warning', theme(`colors.${warningColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
        }),
        ...createAliasColorVars('danger', theme(`colors.${dangerColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
        }),
      },
      [darkContext]: {
        '--tui-background': toHsl(theme(`colors.${defaultColor}.950`)),
        '--tui-foreground': toHsl(theme(`colors.${defaultColor}.400`)),
        ...createAliasColorVars('default', theme(`colors.${defaultColor}`), {
          defaultKey: '700',
          addons: { foreground: theme(`colors.white`), 950: theme(`colors.white`) },
          formatter: k => {
            if (/^\d+$/.test(k)) {
              let key: number | string = 900 - Number(k)
              key = key === 850 ? 900 : key === 0 ? 50 : key === -50 ? '' : key
              // console.log(`${k} -> ${key}`)
              return `${key}`
            }
            return k
          },
        }),
        ...createAliasColorVars('primary', theme(`colors.${primaryColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
          formatter: 'reverse',
        }),
        ...createAliasColorVars('success', theme(`colors.${successColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
          formatter: 'reverse',
        }),
        ...createAliasColorVars('warning', theme(`colors.${warningColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
          formatter: 'reverse',
        }),
        ...createAliasColorVars('danger', theme(`colors.${dangerColor}`), {
          defaultKey: '500',
          addons: { foreground: theme(`colors.white`) },
          formatter: 'reverse',
        }),
      },

      body: {
        color: 'hsl(var(--tui-foreground))',
        'background-color': 'hsl(var(--tui-background))',
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
        border: 'hsl(var(--tui-border))',
        background: 'hsl(var(--tui-background))',
        foreground: 'hsl(var(--tui-foreground))',

        default: createAliasColorConfig('default'),
        primary: createAliasColorConfig('primary'),
        success: createAliasColorConfig('success'),
        warning: createAliasColorConfig('warning'),
        danger: createAliasColorConfig('danger'),
      },
      borderColor: {
        DEFAULT: 'hsl(var(--tui-border))',
      },
      ringColor: {
        DEFAULT: 'hsl(var(--tui-border))',
      },
      ringOffsetColor: {
        DEFAULT: 'hsl(var(--tui-background))',
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
