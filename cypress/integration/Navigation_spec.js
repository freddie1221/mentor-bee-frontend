describe('navigation', function() {
  beforeEach(function(){
    cy.visit('/')
  })
  describe('profile button', function() {
    it('can take you to profile page', function() {
      cy.contains('Profile').click()
      cy.url().should('include', '/profile')
    })
  })
  describe('sign in button', function() {
    it('can take you to the sign in page', function() {
      cy.contains('Sign in').click()
      cy.url().should('include', '/sign-in')
    })
  })
})