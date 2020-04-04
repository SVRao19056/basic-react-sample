const process = require("process");
const neutrino = require("neutrino");

process.env.NODE_ENV = process.env.NODE_ENV || "test";
module.exports = neutrino().jest({
  bail: 1,
  verbose: true,
  setupFiles: ["./src/test/_shim.js", "./src/test/test_setup.js"],
});
