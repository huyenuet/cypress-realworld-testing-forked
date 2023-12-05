import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    projectId: "cypressRealworldTesting",
    specPattern: "./cypress/e2e/**.cy.ts",
    baseUrl: 'http://localhost:3000/',
    defaultCommandTimeout: 5000
  },
});
