describe('Home', () => {
  it('should display the app name', () => {
    cy.visit('/');

    cy.get('h1').should('contain.text', 'My Myoozik List');
  });
});

export {};
