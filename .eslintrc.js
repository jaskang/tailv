module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'no-non-null-assertion': 'off'
  }
}
