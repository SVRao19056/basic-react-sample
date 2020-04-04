const eslint = require("@neutrinojs/eslint");
const neutrino = require("neutrino/Neutrino");
const react = require("@neutrinojs/react");
const jest = require("@neutrinojs/jest");

module.exports = {
  use: [
    /** NOTE this needs to be first element in this array */
    eslint({
      exclude: [],
      eslint: {
        cache: true,
        emitWarning: process.env.NODE_ENV === "development",
        failOnError: process.env.NODE_ENV !== "development",
        useEslintrc: true,
        baseConfig: {
          env: {
            es6: true,
          },
          extends: [],
          globals: {
            process: true,
          },
          overrides: [],
          parser: require.resolve("babel-eslint"),
          parserOptions: {
            ecmaVersion: 6,
            sourceType: module,
            ecmaFeatures: {
              jsx: true,
            },
          },
          setupFilesAfterEnv: [],
          plugins: ["babel"],
          root: true,
          settings: {},
        },
      },
    }),
    react(),
    jest({
      // setup script for the framework
      setupFilesAfterEnv: ["./src/test/test_setup.js"],
      // and / or shims
      setupFiles: ["./src/test/_shim.js", "./src/test/test_setup.js"], //This Needs to be first entry ./src/test/_shim.js

      collectCoverage: true,
      collectCoverageFrom: ["**/src/components/**/*.{js,jsx}"],
    }),
  ],
};
