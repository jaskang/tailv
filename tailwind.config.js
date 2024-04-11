import preset from './preset'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{ts,vue}', './site/**/*.{md,ts,vue}'],
  presets: [preset],
}
