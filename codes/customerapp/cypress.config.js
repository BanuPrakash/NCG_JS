const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },   
      baseUrl: 'http://localhost:3000',
      fixturesFolder: './e2e',
      specPattern: './e2e/**/*.spec.js'
  },
});

