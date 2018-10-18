describe("/mentors", function() {
  it("displays all mentors", function() {
    cy.visit("localhost:3000/#/mentors")
    cy.get(".card-wrapper")
    cy.should("contain", "Newt Scamander")
  });

  it("mentor card contains link to mentor profile", function() {
    cy.visit("localhost:3000/#/mentors")
    cy.get(".profile-link").click()
    cy.should("contain", "Profile")

  })
});