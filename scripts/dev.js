const execa = require('execa')

async function buildAll(target) {
  await execa('yarn', ['workspace', '@elenext/shared', 'run', 'build'], { stdio: 'inherit' })
  await execa('yarn', ['workspace', '@elenext/icons', 'run', 'build'], { stdio: 'inherit' })
  await execa('yarn', ['workspace', 'elenext', 'run', 'dev'], { stdio: 'inherit' })
}

buildAll()
