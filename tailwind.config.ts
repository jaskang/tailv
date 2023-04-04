import type { Config } from 'tailwindcss'
// import colors from 'tailwindcss/colors'
// import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts,tsx}', './docs/**/*.{vue,ts,tsx,md}'],
  theme: {
    extend: {
      // colors: {
      //   normal: colors.slate,
      //   primary: colors.indigo,
      //   success: colors.green,
      //   warning: colors.amber,
      //   error: colors.red,
      // },
    },
  },
  plugins: [
    // forms({ strategy: 'base' })
  ],
} satisfies Config
