export default {
  preset: "ts-jest/presets/default-esm",
  transform: {
    '^.+\\.{ts|tsx}?$': ['ts-jest', {
      babel: true,
      tsConfig: 'tsconfig.json',
      "ts-jest": {
        useESM: true,
      }
    }],
}
};