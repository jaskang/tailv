import js from '@eslint/js'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import typescript from '@typescript-eslint/eslint-plugin'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

import prettier from 'eslint-config-prettier'

const files = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
const tsFiles = ['**/*.{ts,cts,mts,tsx}']
const jsxFiles = ['**/*.{jsx,tsx}']
// const testFiles = ['**/*.test.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']

export default [
  js.configs.recommended,
  {
    files: tsFiles,
    plugins: { '@typescript-eslint': typescript },
    languageOptions: { parser: tsParser },
    rules: { ...typescript.configs.recommended.rules },
  },
  { files, ...reactRecommended },
  { files, ...reactJsxRuntime },
  {
    files,
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  // {
  //   files: jsxFiles,
  //   plugins: { 'jsx-a11y': jsxA11y },
  //   languageOptions: {
  //     globals: {
  //       ...globals.browser,
  //     },
  //   },
  //   ...jsxA11y.configs.recommended.rules,
  // },
  prettier,
  {
    files,
    languageOptions: {
      globals: { ...globals.browser },
    },
    settings: { react: { version: 'detect' } },
  },
]
