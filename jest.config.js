module.exports = {
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: require('./package.json').version,
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json'
    }
  },
  verbose: true,
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: [
    'packages/*/src/**/*.ts?(x)',
    '!**/components/*/index.ts'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  transform: {
    // '^.+\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/elenext/src/$1',
    '\\.(css|less|scss)$': '<rootDir>/scripts/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/scripts/__mocks__/fileMock.js'
  },
  rootDir: __dirname
}
