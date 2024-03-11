import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

const files = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
const tsFiles = ['**/*.{ts,cts,mts,tsx}']
// const jsxFiles = ['**/*.{jsx,tsx}']
// const testFiles = ['**/*.test.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']

export default [
  { ignores: ['**/node_modules/', '.git/', '**/dist/', '**/.vitepress/cache/'] },
  {
    files,
    rules: jsPlugin.configs.recommended.rules,
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: tsFiles,
    plugins: { '@typescript-eslint': tsPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/ban-types': { '{}': false },
      '@typescript-eslint/ban-ts-comment': 0,
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/ban-types': { '{}': false },
      '@typescript-eslint/ban-ts-comment': 0,
      ...vuePlugin.configs['vue3-essential'].rules,
    },
  },
  prettier,
]

// module.exports = {
//   "env": {
//       "browser": true,
//       "es2021": true,
//       "node": true
//   },
//   "extends": [
//       "eslint:recommended",
//       "plugin:@typescript-eslint/recommended",
//       "plugin:vue/vue3-essential"
//   ],
//   "overrides": [
//       {
//           "env": {
//               "node": true
//           },
//           "files": [
//               ".eslintrc.{js,cjs}"
//           ],
//           "parserOptions": {
//               "sourceType": "script"
//           }
//       }
//   ],
//   "parserOptions": {
//       "ecmaVersion": "latest",
//       "parser": "@typescript-eslint/parser",
//       "sourceType": "module"
//   },
//   "plugins": [
//       "@typescript-eslint",
//       "vue"
//   ],
//   "rules": {
//   }
// }
