describe('Auth0', () => {
  it('should login', () => {
    cy.loginWithAuth0().then(() => {
      cy.contains('name: e2e-testing').should('exist');
      cy.contains(`email: ${Cypress.env('auth0Username')}`).should('exist');
    });
  });
});

export {};
