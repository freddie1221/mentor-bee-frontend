describe("ProfilePage", function() {
  
  it("has the mentor's name", function() {
    cy.visit("localhost:3000/#/mentors/1")
    cy.get("h2").should("contain", "'s Profile")
  })

  it("has the mentor's skills", function() {
    cy.visit("localhost:3000/#/mentors/1")
    cy.get("p").should("contain", "is available to mentor in the following areas:")
  })
  
  it("has the mentor's contact", function() {
    cy.visit("localhost:3000/#/mentors/1")
    cy.get(".email").should("contain", "Contact: ")
  })

});