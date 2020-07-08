const execa = require('execa')
const { fuzzyMatchTarget } = require('./utils')
const args = require('minimist')(process.argv.slice(2))
const target = args._.length ? fuzzyMatchTarget(args._)[0] : 'elenext'

execa(
  'rollup',
  ['-c', '--environment', [`TARGET:${target}`].filter(Boolean).join(',')],
  {
    stdio: 'inherit'
  }
)
