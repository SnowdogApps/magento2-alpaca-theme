var faker = require('faker')

describe('Invalid credentials login test', () => {
  before(() => {
    cy.account()
  })

  it('submits invalid credentials login form', () => {
    cy.get('#pass').type('Password123')
    cy.get('#email').type(faker.internet.email())
    cy.get('[data-testid="submit-login-button"]').click()
  })

  it('displays login error message', () => {
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })

})
