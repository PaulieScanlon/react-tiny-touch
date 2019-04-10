module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts'
  ],
  verbose: false,
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
