describe("ProfilePage", function() {
  
  it("has the mentor's name", function() {
    cy.visit('/#/mentors/1')
    cy.get("p").should("contain", "'s Profile")
  })

  it("has the mentor's skills", function() {
    cy.visit('/#/mentors/1')
    cy.get("p").should("contain", "is available to mentor in the following areas:")
  })
  
  it("has the mentor's contact", function() {
    cy.visit('/#/mentors/1')
    cy.get("#book-btn").should("contain", "Book")
  })

});