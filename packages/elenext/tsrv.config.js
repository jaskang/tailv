const path = require('path')
/**
 * @type { import('tsrv').TsrvUserConfig }
 */
module.exports = {
  postcssOptions: {
    inject: (css, id) => {
      console.log(`inject`, css, id)
      return ''
    }
  }
  // monorepoRoot: path.join(__dirname, '../../')
}
