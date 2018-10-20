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
  
})