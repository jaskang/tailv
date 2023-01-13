/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './docs/.vitepress/**/*.{vue,js,ts,tsx}',
      './docs/**/*.{md,vue,js,ts,tsx}',
    ],
  },
  plugin: [require('@tailwindcss/forms')],
}
