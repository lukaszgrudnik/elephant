// cypress/e2e/helloWorld.cy.ts

/// <reference types="cypress" />

describe('Hello World Page', () => {
  it('should display Hello World', () => {
    // Visit the base URL (configured in cypress.config.ts, e.g., http://localhost:3000)
    cy.visit('/');

    // Check if "Hello World" text is visible
    cy.contains('App Component').should('be.visible');
  });
});
