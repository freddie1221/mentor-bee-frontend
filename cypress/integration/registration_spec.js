describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('localhost:3000/#')
    cy.get(".clearfix")
    cy.should("contain", "Sign Up")
  })
})

describe('Register component', function(){
  it('redirects to /mentors on submission', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Register').click()
    cy.get('form').within(($form) => {
      cy.get('input[name="name"]').type('Freddie')
      cy.get('input[name="email"]').type('john.doe@email.com')
      cy.get('input[name="password"]').type('password')
      cy.get('input[name="passwordConfirmation"]').type('password')
      cy.root().submit()
      cy.url().should("include", "/mentors");
    })
  })
})
