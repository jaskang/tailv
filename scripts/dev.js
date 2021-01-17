const execa = require('execa')

async function buildAll() {
  await execa('yarn', ['workspace', '@elenext/shared', 'run', 'build'], { stdio: 'inherit' })
  await execa('yarn', ['workspace', '@elenext/icons', 'run', 'build'], { stdio: 'inherit' })
  await execa('yarn', ['workspace', 'elenext', 'run', 'dev'], { stdio: 'inherit' })
}

buildAll()
