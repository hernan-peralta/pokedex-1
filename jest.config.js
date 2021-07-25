module.exports = {
  verbose: true,
  rootDir: 'src',
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  resetMocks: false,
  resolver: 'jest-ts-webcompat-resolver',
  setupFiles: ['jest-localstorage-mock'],
};
