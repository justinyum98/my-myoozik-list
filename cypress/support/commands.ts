/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      loginWithAuth0(username: string, password: string): Chainable<any>;
    }
  }
}

/**
 * Logs in with Auth0
 */
Cypress.Commands.add('loginWithAuth0', (username, password) => {
  // Click the "Login" link
  cy.contains('Login')
    .click()
    .then(() => {
      cy.url().then((url) => {
        // If it goes to Auth0 website and didn't cache user...
        if (!url.includes(Cypress.config().baseUrl!)) {
          // Fill in login data, click login
          cy.get('input[name=username]').type(username);
          cy.get('input[name=password]').type(password);
          cy.get('button[name=action]').click();
        } else {
          // If SSO occurs and login process is skipped...
          // Verify that user is logged in.
          cy.contains('Logout').should('exist');
          cy.get('p').contains('nickname: e2e-testing');
        }
      });
    });
});

export {};
