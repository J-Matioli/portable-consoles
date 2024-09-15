import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  testMatch: ['<rootDir>/src/**/*.test.ts']
};

export default config;
