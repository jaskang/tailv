module.exports = {
  git: {
    commitMessage: 'chore: release v${version}'
  },
  github: {
    release: true
  },
  npm: {
    skipChecks: true
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md'
    }
  }
}
