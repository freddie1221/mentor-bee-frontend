describe('/profile', function() {

  beforeEach(function(){
    cy.visit('/#/profile')
  })

  it('become a mentor buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentor")
  })
  it('become a mentee buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentee")
  })

})