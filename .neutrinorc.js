const eslint = require("@neutrinojs/eslint");
const neutrino = require("neutrino/Neutrino");
const react = require("@neutrinojs/react");
const jest = require("@neutrinojs/jest");

module.exports = {
  use: [
    /** NOTE this needs to be first element in this array */
    eslint({
      // Uses extensions from neutrino.options.extensions
      // test: neutrino.regexFromExtensions(),
      //include: [neutrino.options.source, neutrino.options.tests],
      exclude: [],
      eslint: {
        // For supported options, see:
        // https://github.com/webpack-contrib/eslint-loader#options
        // https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        cache: true,
        // Downgrade errors to warnings when in development, to reduce the noise in
        // the webpack-dev-server overlay (which defaults to showing errors only),
        // and to also ensure hot reloading isn't prevented.
        emitWarning: process.env.NODE_ENV === "development",
        // Make errors fatal for 'production' and 'test'.
        // However note that even when `false` webpack still fails the build:
        // https://github.com/webpack-contrib/eslint-loader/issues/257
        failOnError: process.env.NODE_ENV !== "development",
        //cwd: neutrino.options.root,
        useEslintrc: true,
        // Can be the name of a built-in ESLint formatter
        // or the module/path of an external one.
        formatter: "codeframe",
        // The options under `baseConfig` correspond to those
        // that can be used in an `.eslintrc.*` file.
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
