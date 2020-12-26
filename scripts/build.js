const execa = require('execa')

async function buildAll(target) {
  await execa.command('yarn workspace @elenext/shared build', { stdio: 'inherit' })
  await execa.command('yarn workspace elenext build', { stdio: 'inherit' })
  await execa.command('yarn workspace @elenext/docs build', { stdio: 'inherit' })
}

buildAll()
