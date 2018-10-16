

describe('visit homepage', function() {
  it('visits homepage', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Sign in')
    cy.contains('Register')
  })
  it('loads the registration page when register is clicked', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Register').click()
    cy.contains('Name:')
  })
})

describe('Register component', function(){
  it('has the expected fields', function() {
    cy.visit('localhost:3000/#')
    cy.contains('Register').click()
    cy.contains('Name:')
    cy.contains('Email:')
    cy.contains('Password:')
    cy.contains('Password confirmation:')
  })
  

})

describe('sign in form', function() {

})