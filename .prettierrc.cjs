module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  // 语句末尾分号
  semi: false,
  // 单引号
  singleQuote: true,
  // 对象属性加引号
  quoteProps: 'as-needed',
  // 在JSX中使用单引号
  jsxSingleQuote: false,
  // 在多行逗号分隔的语法结构中，尽可能加尾随逗号
  trailingComma: 'es5',
  // 对象中括号之间的空格
  bracketSpacing: true,
  // 将多行HTML (HTML, JSX, Vue, Angular)元素的 > 放在最后一行的末尾，而不是单独放在下一行(不适用于自闭元素)。
  bracketSameLine: false,
  // Deprecated
  jsxBracketSameLine: false,
  // 箭头函数形参周围包含圆括号
  arrowParens: 'avoid',
  // 换行行为
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  plugins: [require('prettier-plugin-tailwindcss')],
}
