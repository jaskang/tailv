const preset = require('@zonda/preset')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,md,mdx}',
    './node_modules/@zonda/react/src/**/*.{ts,tsx}',
  ],
  presets: [preset.tailwindcss],
  plugins: [],
}
