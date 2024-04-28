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
  handler: ({ addBase, theme }) => {
    const all = extractColorVars(theme('colors'))
    addBase({
      ':root': all,
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
    },
  },
  plugins: [
    varPlugin,
    {
      handler: ({ addUtilities, matchUtilities, matchComponents, theme, config }) => {
        let [mode, className = '.dark'] = ([] as any[]).concat(config('darkMode', 'media'))
        if (mode === false) {
          mode = 'media'
        }

        const darkContext = mode === 'media' ? '@media (prefers-color-scheme: dark)' : `&:is(${className} *)`

        const resizerColor = theme('colors.gray.500')!.replace('#', '%23')

        // const resizeYImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-6"/><path d="M12 8V2"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/><path d="m15 19-3 3-3-3"/><path d="m15 5-3-3-3 3"/></svg>')`
        // const resizeXImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 12h6"/><path d="M8 12H2"/><path d="M12 2v2"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M12 20v2"/><path d="m19 15 3-3-3-3"/><path d="m5 9-3 3 3 3"/></svg>')`
        const resizeAllImage = `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${resizerColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/></svg>')`

        addUtilities({
          '.scrollbar': {
            '--resizer-image': resizeAllImage,
            '&::-webkit-scrollbar': {
              width: theme('space.3'),
              height: theme('space.3'),
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
            '&::-webkit-resizer': {
              backgroundImage: 'var(--resizer-image)',
              backgroundColor: theme('colors.white'),
              backgroundSize: '10px 10px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: theme('space.3'),
              height: theme('space.3'),
            },
            [darkContext]: {
              '&::-webkit-resizer': {
                backgroundColor: theme('colors.gray.900'),
              },
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
        matchComponents(
          {
            'focus-ring': value => {
              const isDeepValue = typeof theme('colors')?.[value] === 'object'
              return {
                '--tw-ring-offset-color': theme('colors.white'),
                '&:focus': {
                  '@apply ring-2 ring-offset-2 ring-primary-500': {},
                },
                [darkContext]: {
                  '--tw-ring-offset-color': theme('colors.gray.900'),
                },
              }
            },
            'focus-visible-ring': value => {
              const isDeepValue = typeof theme('colors')?.[value] === 'object'
              return {
                '--tw-ring-offset-color': theme('colors.white'),
                '&:focus-visible': {
                  '@apply ring-2 ring-offset-2 ring-primary-500': {},
                },
                [darkContext]: {
                  '--tw-ring-offset-color': theme('colors.gray.900'),
                },
              }
            },
            'focus-within-ring': value => {
              const isDeepValue = typeof theme('colors')?.[value] === 'object'
              return {
                '--tw-ring-offset-color': theme('colors.white'),
                '&:focus-within': {
                  '@apply ring-2 ring-offset-2 ring-primary-500': {},
                },
                [darkContext]: {
                  '--tw-ring-offset-color': theme('colors.gray.900'),
                },
              }
            },
          },
          {
            values: flattenColors(theme('colors')),
            type: ['color'],
          }
        )

        addUtilities({
          '.input-border': {
            '--tw-input-border-color': theme('colors.gray.200'),
            outline: 'none',
            border: `1px solid var(--tw-input-border-color)`,
            '&:focus': {
              outline: 'none',
            },
            [darkContext]: {
              '--tw-input-border-color': theme('colors.gray.700'),
              borderColor: 'var(--tw-input-border-color)',
            },
          },
          '.input-border-ring': {
            '--tw-ring-opacity': '1',
            '--tw-ring-color': 'var(--tw-input-border-color)',
            '--tw-ring-offset-shadow':
              'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow':
              'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            'box-shadow': 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
          },
        })
        matchUtilities(
          {
            // ring-offset-white dark:ring-offset-gray-900 focus-visible:ring-1 focus-visible:ring-primary-500
            'input-border-color': value => {
              const isDeepValue = typeof theme('colors')?.[value] === 'object'
              const color: string = isDeepValue ? theme(`colors.${value}.500`) : theme(`colors.${value}`)
              return {
                '--tw-input-border-color': color,
              }
            },
            // 'input-focus-border': value => {
            //   const isDeepValue = typeof theme('colors')?.[value] === 'object'
            //   return {
            //     borderWidth: '1px',
            //     borderStyle: 'solid',
            //     borderColor: theme(`colors.gray.200`),
            //     '&:focus-within': {
            //       borderColor: theme(`colors.primary.500`),
            //       '@apply ring-1 ring-offset-0 ring-primary-500': {},
            //     },
            //     [darkContext]: {
            //       borderColor: theme(`colors.gray.700`),
            //     },
            //   }
            // },
          },
          {
            values: flattenColors(theme('colors')),
            type: ['color'],
          }
        )
      },
    } as Plugin,
    // forms({ strategy: 'base' }),
  ],
} as Preset
