const execa = require('execa')

async function buildAll(target) {
  await execa.command('yarn workspace @elenext/shared build', { stdio: 'inherit' })
  await execa.command('yarn workspace @elenext/icons build', { stdio: 'inherit' })
  await execa.command('yarn workspace elenext dev', { stdio: 'inherit' })
}

buildAll()
