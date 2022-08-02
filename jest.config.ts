import { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  roots: [
    '<rootDir>/src',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  coverageDirectory: '.coverage',
  // coverageThreshold: undefined,
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
};

export default config;
