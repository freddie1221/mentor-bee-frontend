describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('/')
    cy.get(".clearfix")
    cy.should("contain", "Sign Up")
  })
})

describe('Register component', function(){
  it.skip('can submit form', function() {
    cy.visit('/')
    cy.contains('Register').click()
    cy.get('form').within(($form) => {
      cy.get('input[name="name"]').type('Freddie')
      cy.get('input[name="email"]').type('a1b2c3@email.com')
      cy.get('input[name="password"]').type('password')
      cy.root().submit()
    })
  })
  it.skip('can sign out', function() {
    cy.contains('Sign out').click()
  })
})
