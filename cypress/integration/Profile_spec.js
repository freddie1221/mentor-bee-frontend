describe('/profile', function() {

  // beforeEach(function(){
  //   cy.visit('/#/profile')
  // })

  it.skip('become a mentor buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentor")
  })
  it.skip('become a mentee buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentee")
  })

}) 