import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
