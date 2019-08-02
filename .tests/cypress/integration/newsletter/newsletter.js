var faker = require('faker')

describe('Newsletter', () => {
  it('submits newsletter form', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type(faker.internet.email())
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid="submit-newsletter-button"]').click()
    cy.get('[data-ui-id=message-success]').should('be.visible')
  })
})
