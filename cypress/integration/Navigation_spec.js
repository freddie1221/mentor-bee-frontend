describe('navigation', function() {
  beforeEach(function(){
    cy.visit('/')
  })
  
  describe('sign in button', function() {
    it('can take you to the sign in page', function() {
      cy.contains('Sign in').click()
      cy.url().should('include', '/sign-in')
    })
  })
})