import faker from 'faker'

// TODO: There is no point to do this test separetly
describe('Newsletter', () => {
  it('submits newsletter form', () => {
    cy.visit('/')
    cy.get('#newsletter').type(faker.internet.email())
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('[data-ui-id=message-success]').should('be.visible')
  })
})
