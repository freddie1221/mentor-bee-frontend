describe('navigation', function() {
  beforeEach(function(){
    cy.visit("localhost:3000")
  })
  describe('profile button', function() {
    it('can take you to profile page', function() {
      cy.contains('Profile').click()
      cy.url().should('include', '/profile')
    })
  })
  
})