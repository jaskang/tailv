module.exports = {
  inputDir: './src/components/Icon/svgs',
  outputDir: './src/components/Icon/fonts',
  fontTypes: ['woff', 'woff2'],
  assetTypes: ['ts', 'scss', 'json', 'html'],
  name: 'el-icon',
  prefix: 'el-icon',
  selector: '.el-icon',
  fontHeight: 1000,
  normalize: true,
  // startunicode: 20000,
  formatOptions: {
    json: {
      indent: 2
    },
    ts: {
      types: ['literalId']
    }
  },
  templates: {
    scss: './src/components/Icon/templates/scss.hbs',
    html: './src/components/Icon/templates/html.hbs'
  },
  pathOptions: {}
}
