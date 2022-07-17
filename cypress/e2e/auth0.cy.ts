describe('Auth0', () => {
  beforeEach(() => {
    cy.loginByAuth0Api(
      Cypress.env('auth0_test_username'),
      Cypress.env('auth0_test_password')
    );
  });

  it('should show the logged in user nickname and name', () => {
    cy.contains(`nickname: johndoe`).should('be.visible');
    cy.contains(`name: ${Cypress.env('auth0_test_username')}`).should(
      'be.visible'
    );
  });
});

export {};
