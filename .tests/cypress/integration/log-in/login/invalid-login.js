import faker from 'faker'

describe('Invalid credentials login test', () => {
  before(() => {
    cy.visit('/customer/account/')

    // Wait for the slowest part to be sure that the page is fully loaded
    cy.waitForCustomerData()
  })

  it('submits invalid credentials login form', () => {
    cy.get('#email').type(faker.internet.email())
    cy.get('#pass').type('Password123')
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })
})
