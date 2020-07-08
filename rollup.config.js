import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import ts from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es6', '.es', '.mjs']
const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const name = path.basename(packageDir)
const resolve = p => path.resolve(packageDir, p)
const pkg = require(resolve(`package.json`))

function createConfig(format, output, hasTSChecked, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`))
    process.exit(1)
  }

  const shouldEmitDeclarations = !hasTSChecked

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['path', 'url']
  ]

  return {
    input: resolve(`src/index.ts`),
    external,
    plugins: [
      alias({
        entries: [
          {
            // alias `@/`
            find: /^@\/(.*)/g,
            replacement: `${resolve('src')}/$1`
          }
        ]
      }),
      postcss({
        // support import style with id
        inject: (css, fileId) => {
          const id = path.relative(resolve('src'), fileId).replace(/\//g, '_')
          return `
            import injectCss from '@/utils/injectCss';
            injectCss(${css},'${id}');`
        },
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default'
          })
        ]
      }),
      json({
        namedExports: false
      }),
      nodeResolve({ mainFields: ['module', 'main', 'jsnext:main', 'browser'], extensions }),
      commonjs({
        include: /node_modules/
      }),
      ts({
        check: process.env.NODE_ENV === 'production' && !hasTSChecked,
        tsconfig: resolve('tsconfig.json'),
        cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: output.sourcemap,
            declaration: shouldEmitDeclarations,
            declarationMap: shouldEmitDeclarations
          },
          exclude: ['**/__tests__', 'test-dts']
        }
      }),
      babel({
        exclude: /\/node_modules\//,
        extensions: extensions
        // babelHelpers: 'runtime'
      }),

      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }),
      ...plugins
    ],
    output: {
      ...output,
      sourcemap: !!process.env.SOURCE_MAP,
      externalLiveBindings: false
    },
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false
    }
  }
}

function createPackageConfigs() {
  const outputConfigs = {
    esm: {
      file: resolve(`dist/${name}.esm.js`),
      format: `es`
    },
    cjs: {
      file: resolve(`dist/${name}.cjs.js`),
      format: `cjs`
    }
  }
  let hasTSChecked = false
  const packageConfigs = ['esm', 'cjs'].reduce((prev, format, index) => {
    const { terser } = require('rollup-plugin-terser')
    const output = outputConfigs[format]
    const outputProd = { ...output, file: output.file.replace(/\.js$/, '.prod.js') }
    prev.push(createConfig(format, output, hasTSChecked))
    if (index === 0) {
      hasTSChecked = true
    }
    prev.push(
      createConfig(format, outputProd, hasTSChecked, [
        format === 'esm' &&
          terser({
            module: true,
            compress: {
              ecma: 2015,
              pure_getters: true
            }
          })
      ])
    )
    return prev
  }, [])
  return packageConfigs
}

export default createPackageConfigs()
