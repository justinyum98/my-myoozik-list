describe('Auth0', () => {
  const testUsername = Cypress.env('auth0_test_username');
  const testPassword = Cypress.env('auth0_test_password');

  afterEach(() => {
    cy.visit('/api/auth/logout');
  });

  it('should login', () => {
    // Login with Auth0
    cy.loginWithAuth0(testUsername, testPassword);

    // ASSERT
    cy.findByText(`name: ${testUsername}`);
  });
});

export {};
