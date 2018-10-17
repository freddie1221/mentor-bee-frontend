describe('sign in', function() {
  it('enters login credentials', function() {
    cy.visit('localhost:3000/#')
    cy.get('form').within(($form) => {
      cy.get('input[name="email"]').type('john.doe@email.com')
      cy.get('input[name="password"]').type('password')
      cy.root().submit()
    });
  })
})
