const url = require('postcss-url')
// const base64 = require('postcss-base64')
/**
 * @type { import('tsrv').TsrvUserConfig }
 */
module.exports = {
  postcssOptions: {
    inject: (css, id) => {
      console.log(`inject`, css, id)
      return ''
    }
  },
  postcssOptions: {
    plugins: [
      url({ url: 'inline' })
      // base64({ extensions: ['.woff'], excludeAtFontFace: false })
    ]
  }
  // monorepoRoot: path.join(__dirname, '../../')
}
