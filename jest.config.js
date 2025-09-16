/** @type {import('jest').Config} */
const config = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  coverageProvider: "v8",
  
  preset: 'ts-jest', 
};

module.exports = config;