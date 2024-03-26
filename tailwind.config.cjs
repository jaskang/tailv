/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './packages/vue/src/**/*.{ts,vue}',
    './packages/docs/components/**/*.{md}',
    './packages/docs/.vitepress/theme/**/*.{ts,vue}',
  ],
}
