module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  }
}
