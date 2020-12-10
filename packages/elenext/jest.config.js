// const path = require('path')
const testBabelConfig = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [['@vue/babel-plugin-jsx', { optimize: true }]]
}

console.log(__dirname)
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
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue', 'json', 'node'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['/src/**/*.ts'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testMatch: ['<rootDir>/**/__tests__/**/*spec.ts?(x)'],
  rootDir: __dirname
  // projects: [
  //   {
  //     displayName: 'elenext',
  //     moduleNameMapper: {
  //       '^@/(.*?)$': '<rootDir>/packages/elenext/src/$1'
  //     }
  //   }
  // ]
}
