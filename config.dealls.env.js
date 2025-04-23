const { defineConfig } = require("cypress");
const setupNodeEvents = require("./cypress/plugins/index.js");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalRunAllSpecs: true,
    video: true,
    videoCompression: true,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
    supportFile: "cypress/support/commands.js",
    reporter: "./node_modules/mochawesome/src/mochawesome.js",
    reporterOptions: {
      overwrite: false,
      html: false,
      json: true,
    },

    specPattern: ["**/integration/**"],
  },
  env: {
    environment: "staging",
    apiTest: "https://dummyjson.com/",
  },
});
