describe("/mentors", function() {
  it("displays all mentors", function() {
    cy.visit('/#/mentors')
    cy.get(".card-wrapper")
    cy.should("contain", "Peeves")
  });
});