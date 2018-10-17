describe("/mentors", function() {
  it("displays all mentors", function() {
    cy.visit("localhost:3000/#/mentors")
    cy.contains("All Mentors")
  });
});