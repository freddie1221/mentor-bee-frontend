describe("/mentors", function() {
  it.skip("displays all mentors", function() {
    cy.visit('/#/mentors')
    cy.get(".card-wrapper")
    cy.should("contain", "Peeves")
  });
});