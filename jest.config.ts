import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const commonConfig: Config = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
  },
  testTimeout: 60 * 1_000,
};

const config: Config = {
  projects: [
    {
      ...commonConfig,
      displayName: "server",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/tests/unit/models/**/*.test.ts",
        "<rootDir>/tests/integration/api/**/*.test.ts",
      ],
    },
    {
      ...commonConfig,
      displayName: "ui",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/tests/unit/components/**/*.test.tsx"],
      setupFilesAfterEnv: ["<rootDir>/tests/setup-tests.ts"],
    },
  ],
};

async function jestConfig() {
  const nextJestConfig = await createJestConfig(commonConfig)();

  config.projects = (config.projects as Config[]).map((project) => ({
    ...nextJestConfig,
    ...project,
    moduleNameMapper: {
      ...nextJestConfig.moduleNameMapper,
      ...project.moduleNameMapper,
    },
  }));

  return config;
}

export default jestConfig;
