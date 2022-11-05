module.exports = {
  testEnvironment: "node",
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.(m)?js$": "$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?ts$",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/*.ts",
    "src/**/*.ts",
    "src/**/*.mts",
    "!src/**/*.d.ts",
    "!src/**/*.d.mts",
  ],
};
