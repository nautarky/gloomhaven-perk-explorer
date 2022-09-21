const nextJest = require("next/jest");

// Provide the path to your Next.js app to load next.config.js and .env files in your test environment.
const createJestConfig = nextJest({ dir: "./" });

// Add any custom config to be passed to Jest
const customJestConfig = {
  coverageReporters: ["lcov", "text"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.js",
    "@testing-library/jest-dom/extend-expect",
  ],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
