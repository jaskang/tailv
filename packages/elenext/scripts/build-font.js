const svgtofont = require('svgtofont')
const path = require('path')

svgtofont({
  src: path.resolve(__dirname, '../src/components/Icon/svgs'),
  dist: path.resolve(__dirname, '../src/components/Icon/fonts'),
  fontName: 'elenext-icons',
  emptyDist: true,
  outSVGReact: true,
  outSVGPath: true,
  fontName: 'el-icon', // font name
  css: true, // Create CSS files.
  startNumber: 20000, // unicode start number
  nodemo: true, // no demo html files
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  }
}).then(() => {
  console.log('done!')
})
