const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')
const ejs = require('ejs')
const { pascalCase, pascalCaseTransformMerge } = require('pascal-case')
// const rimraf = require('rimraf')

const rootDir = path.join(__dirname, '..')
const srcDir = path.join(__dirname, '..', 'src')
const svgsDir = path.join(srcDir, 'svgs')
const iconTpl = fs.readFileSync(path.join(srcDir, 'templates/Icon.tpl.ejs'), 'utf8')
const indexPath = path.join(srcDir, 'icons/index.ts')

const globPromise = (pattern, options = {}) => {
  return new Promise((resolve, reject) => {
    glob(pattern, options, function (err, svgs) {
      if (err) {
        reject()
        return
      }
      resolve(svgs)
    })
  })
}

async function build() {
  fs.removeSync(indexPath)

  const components = []
  const compNames = []
  const icondocs = {}

  const svgs = await globPromise(path.join(srcDir, 'svgs/**/*.svg'), {})

  for (const file of svgs) {
    const filePathArr = path.relative(svgsDir, file).split('/')
    const fileName = filePathArr.length > 1 ? filePathArr[1] : filePathArr[0]
    const dirName = filePathArr.length > 1 ? filePathArr[0] : 'others'
    const iconName = path.basename(fileName, '.svg')
    const compName = `Icon` + pascalCase(iconName, { transform: pascalCaseTransformMerge })
    const svgContent = fs.readFileSync(file, 'utf8').replace(`width="16" height="16"`, `width="1em" height="1em"`)
    const compSource = ejs
      .render(iconTpl, { icon: svgContent, compName: compName, className: iconName })
      .replace(/[\r\n]/g, '')
    // .replace(/class=[\"](.*?)[\"].*?/g, '')
    // fs.outputFileSync(path.join(iconsDir, `${compName}.tsx`), compSource, 'utf8')
    compNames.push(compName)
    components.push(compSource)
    if (!icondocs[dirName]) {
      icondocs[dirName] = []
    }
    icondocs[dirName].push(
      `<div class="icon-item"><div class="icon-item__icon">${svgContent}</div><div class="icon-item__text" data-text="${compName}">${compName}</div></div>`
    )
  }

  const indexExport = [
    `import createSvgIcon from '../SvgIcon'`,
    `export const iconTypes = ${JSON.stringify(compNames)}`
  ]
    .concat(components)
    .concat(
      `export const plugin = {
        install: (app:any) => {
          ${compNames.map(item => `app.component('${item}', ${item})`).join('\n')}
        }
      }`
    )
    .join('\n')

  const docsExport = ['base', 'control', 'status', 'arrow', 'list', 'file', 'media', 'keyboard', 'others']
    .reduce((prev, scope) => {
      prev.push(`<h4 >${scope}</h4>`)
      prev.push(`<div class="icon-items">`)
      prev = prev.concat(icondocs[scope])
      prev.push(`</div>`)
      return prev
    }, [])
    .join('\n')

  fs.outputFileSync(path.join(rootDir, `icons.json`), JSON.stringify(compNames), 'utf8')
  fs.outputFileSync(indexPath, indexExport, 'utf8')
  fs.outputFileSync(path.join(rootDir, `icondoc.html`), docsExport, 'utf8')
}

build()
