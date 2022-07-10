describe('Home', () => {
  it('should display Hello World', () => {
    cy.visit('/');

    cy.get('div').should('contain.text', 'Hello World');
  });
});

export {};
