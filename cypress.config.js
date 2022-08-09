const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4ux9sc',
  e2e: {    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://gorest.co.in/public/v2'
}})