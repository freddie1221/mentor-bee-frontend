describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('localhost:3000/#')
    const form = cy.get(form)
    form.find('input').should('contain', 'placeholder', 'Email');
  })
