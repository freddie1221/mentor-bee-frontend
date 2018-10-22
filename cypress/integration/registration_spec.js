describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('/')
    cy.get(".clearfix")
    cy.should("contain", "Sign Up")
  })
})

describe('Register component', function(){
  it.skip('redirects to /mentors on submission', function() {
    cy.visit('/')
    cy.contains('Register').click()
    cy.get('form').within(($form) => {
      cy.get('input[name="name"]').type('Freddie')
      cy.get('input[name="email"]').type('abc3@email.com')
      cy.get('input[name="password"]').type('password')
      cy.root().submit()
      cy.url().should("include", "/mentors");
    })
  }) 
})
