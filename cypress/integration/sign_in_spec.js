describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Email')
    cy.contains('Password')
  })
