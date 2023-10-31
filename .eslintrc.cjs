// const files = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
// const tsFiles = ['**/*.{ts,cts,mts,tsx}']
// const jsxFiles = ['**/*.{jsx,tsx}']
// const testFiles = ['**/*.test.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']

const perfectionistBaseConfig = { type: 'natural' }
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'perfectionist'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'perfectionist/sort-named-exports': ['error', { ...perfectionistBaseConfig }],
    'perfectionist/sort-named-imports': ['error', { ...perfectionistBaseConfig }],
    'perfectionist/sort-exports': ['error', { ...perfectionistBaseConfig }],
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {},
          type: {},
        },
        'newlines-between': 'always',
        'internal-pattern': ['~/**'],
        ...perfectionistBaseConfig,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
}
