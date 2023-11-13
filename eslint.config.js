import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['**/dist/**'],
  },
  {
    ...jsPlugin.configs.recommended,
    files: ['**/*.{js}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.es2021,
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    files: ['**/packages/react/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // project: './tsconfig.eslint.json',
        ...react.configs['jsx-runtime'].parserOptions,
      },
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...vuePlugin.configs['vue3-essential'].rules,
    },
  },
]

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:vue/vue3-essential',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   overrides: [],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['vue', '@typescript-eslint'],
//   rules: {},
// }
