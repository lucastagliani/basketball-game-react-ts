/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|svg|mp3|png|jpeg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: {},
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
}
