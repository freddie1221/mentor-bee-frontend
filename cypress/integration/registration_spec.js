

describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Sign in')
    cy.contains('Register')
  })
  it('loads the registration page when register is clicked', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Register').click()
  })
})

describe('Register component', function(){
  it('has the expected fields', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Register').click()
    cy.get('form').within(($form) => {
      cy.get('input[name="name"]').type('Freddie')
      cy.get('input[name="email"]').type('john.doe@email.com')
      cy.get('input[name="password"]').type('password')
      cy.get('input[name="passwordConfirmation"]').type('password')
      cy.root().submit()
    })
  })
    
})
