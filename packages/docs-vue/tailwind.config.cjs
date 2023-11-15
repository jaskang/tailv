const preset = require('@zonda/preset')
const typography = require('@tailwindcss/typography')
const path = require('node:path')


module.exports = {
  darkMode: 'class', 
  content: [
    './index.html',
    './core/**/*.{ts,tsx,md,mdx}',
    './pages/**/*.{ts,tsx,md,mdx}',
    path.resolve(__dirname, '../style/src/**/*.ts'),
    path.resolve(__dirname, '../react/src/**/*.{ts,tsx}'),
    path.resolve(__dirname, '../vue/src/**/*.{ts,tsx,vue}'),
    // './node_modules/@zonda/style/src/**/*.{ts}',
    // './node_modules/@zonda/react/src/**/*.{ts,tsx}',
    // './node_modules/@zonda/vue/src/**/*.{ts,tsx,vue}',
  ],  
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  presets: [preset.tailwindcss],
  plugins: [typography({ target: 'modern' })],
}
