module.exports = {
  extends: ['@jaskang/eslint-config/vue'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
