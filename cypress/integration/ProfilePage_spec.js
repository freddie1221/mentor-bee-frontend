describe("ProfilePage", function() {

  beforeEach(function() {
    cy.visit('/')
    cy.clearLocalStorage().then( ls => {
      cy.contains('Register').click()
      cy.get('form').within(($form) => {
        cy.get('input[name="name"]').type('Freddie')
        cy.get('input[name="email"]').type('a1b2c4@email.com')
        cy.get('input[name="password"]').type('password')
        cy.root().submit()
      })
    })
  })
  
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