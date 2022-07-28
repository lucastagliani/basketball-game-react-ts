/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(css|less|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  transform: {},
}
