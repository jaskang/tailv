const path = require('path')
const fs = require('fs-extra')
const ejs = require('ejs')
// const rimraf = require('rimraf')
// const { paramCase } = require('param-case')

const { pascalCase, pascalCaseTransformMerge } = require('pascal-case')

const rootDir = path.join(path.join(__dirname, '..'))
const srcDir = path.join(path.join(__dirname, '..', 'src'))
const svgsDir = path.join(rootDir, 'icons')
const iconTpl = fs.readFileSync(path.join(srcDir, 'Icon.tpl.ejs'), 'utf8')
const svgs = fs.readdirSync(svgsDir)
const indexPath = path.join(srcDir, 'index.tsx')
// const iconsDir = path.join(srcDir, 'icons')

fs.removeSync(indexPath)

const components = []
const compNames = []
const icondocs = []
for (const fileName of svgs) {
  const svgPath = path.join(svgsDir, fileName)
  const iconName = path.basename(fileName, '.svg')
  const className = iconName
  const compName = `Icon` + pascalCase(iconName, { transform: pascalCaseTransformMerge })
  const svgContent = fs.readFileSync(svgPath, 'utf8')
  const compSource = ejs
    .render(iconTpl, { icon: svgContent, compName: compName, className: className })
    .replace(/[\r\n]/g, '')
  // .replace(/class=[\"](.*?)[\"].*?/g, '')
  // fs.outputFileSync(path.join(iconsDir, `${compName}.tsx`), compSource, 'utf8')
  compNames.push(compName)
  components.push(compSource)
  icondocs.push(
    `<div class="icon-item"><div class="icon-item__icon">${svgContent}</div><div class="icon-item__text" data-text="${compName}">${compName}</div></div>`
  )
}

const indexExport = [
  `import createSvgIcon from './createSvgIcon'`,
  `export const namesArray = ${JSON.stringify(compNames)}`
]
  .concat(components)
  .join('\n')

const docsExport = icondocs.join('\n')

fs.outputFileSync(path.join(rootDir, `icons.json`), JSON.stringify(compNames), 'utf8')
fs.outputFileSync(path.join(srcDir, `index.tsx`), indexExport, 'utf8')
fs.outputFileSync(path.join(rootDir, `icondoc.html`), docsExport, 'utf8')
