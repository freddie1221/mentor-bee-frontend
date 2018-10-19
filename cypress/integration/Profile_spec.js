describe('/profile', function() {

  beforeEach(function(){
    cy.visit("localhost:3000/#/profile")
  })

  it('become a mentor buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentor")
  })
  it('become a mentee buutton', function() {
    cy.get(".profile-wrapper")
    cy.should("contain", "Become a mentee")
  })

  it('when mentor button is clicked', function() {
    cy.contains("Become a mentor").click()
    cy.window()
  });
})