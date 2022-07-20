/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      loginWithAuth0(): Chainable<any>;
    }
  }
}

/**
 * Logs in with Auth0
 */
Cypress.Commands.add('loginWithAuth0', () => {
  cy.visit('/');
  // Click the "Sign in" link
  cy.contains('Sign in')
    .click()
    .then(() => {
      // Fill in login data, click login
      cy.get('input[name=username]').type(Cypress.env('auth0Username'));
      cy.get('input[name=password]').type(Cypress.env('auth0Password'));
      cy.get('button[name=action]')
        .click()
        .then(() => {
          // A bit of a hack, but must re-login multiple times because Cypress doesn't work well with OAuth.
          cy.contains('Sign in with Auth0')
            .click()
            .then(() => {
              cy.contains('Sign in with Auth0').click();
            });
        });
    });
});

export {};
