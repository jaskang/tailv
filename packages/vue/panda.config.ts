import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Files to exclude
  exclude: [],
  outdir: 'styled-system',
  // Useful for theme customization
  theme: {
    semanticTokens: {
      spacing: {
        // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        'row-xs': { value: 'calc({spacing.7} + 2px)' },
        'row-sm': { value: 'calc({spacing.8} + 2px)' },
        'row-md': { value: 'calc({spacing.9} + 2px)' },
        'row-lg': { value: 'calc({spacing.10} + 2px)' },
        'row-xl': { value: 'calc({spacing.11} + 2px)' },
      },
    },
  },
  // The output directory for your css system
  staticCss: {
    css: [
      {
        properties: {
          color: ['*'],
        },
      },
    ],
  },
})
