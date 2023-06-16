module.exports = {
  extends: ['@jaskang/eslint-config/vue'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['perfectionist'],
  root: true,
  rules: {
    'perfectionist/sort-named-exports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-named-imports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-exports': ['error', { type: 'natural', order: 'asc' }],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'builtin-type',
          'builtin',
          'external-type',
          'external',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {},
        'internal-pattern': ['@/**', '~/**', '#/**'],
        'newlines-between': 'ignore',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
}
