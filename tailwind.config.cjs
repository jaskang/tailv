const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
  content: [
    './index.html',
    './packages/vue/src/**/*.{ts,tsx,vue}',
    './packages/docs/*.{md,mdx}',
    './packages/docs/components/**/*.{md,mdx}',
    './packages/docs/.vitepress/theme/**/*.{md,mdx}',
  ],
}
