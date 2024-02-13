// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
//   //console.log(config) // see what all is in here!

//   // modify config values
//   // config.defaultCommandTimeout = 10000
//   // config.baseUrl = 'https://staging2.paper.id/webappv1/#/login'

//   // // modify env var value
//   // config.env.ENVIRONMENT = 'staging'

//   // // return config
//   // return config

//   const fs = require('fs-extra')
//   const path = require('path')

//   function getConfigurationByFile (file) {
//   const pathToConfigFile = path.resolve('..','paper_test_cypress', 'cypress', 'config', `${file}.json`)

//   return fs.readJson(pathToConfigFile)
//   }

// // plugins file

//   const file = config.env.configFile || 'staging'

//   return getConfigurationByFile(file)

// }

// // TestRail
// const TestRailReporter = require('cypress-testrail');

// // Cucumber with ESBuild
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

// Cucumber Processor
const cucumber = require("cypress-cucumber-preprocessor").default;

// variable of bridge to store data
const testStore = {}

module.exports = (on, config) => {
 
  on("file:preprocessor", cucumber());
  
  return config
}
