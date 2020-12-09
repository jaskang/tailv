// const path = require('path')
const testBabelConfig = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [['@vue/babel-plugin-jsx', { optimize: true }]]
}

module.exports = {
  globals: {
    __DEV__: true,
    __TEST__: true,
    'ts-jest': {
      babelConfig: true
    }
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    // '^@/(.*?)$': '<rootDir>/packages/elenext/src/$1'
  },
  moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['packages/*/src/**/*.ts', '!packages/docs/**'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/', '/.vscode/', '/.github/'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.ts?(x)']
  // projects: [
  //   {
  //     displayName: 'elenext',
  //     moduleNameMapper: {
  //       '^@/(.*?)$': '<rootDir>/packages/elenext/src/$1'
  //     }
  //   }
  // ]
}
