import faker from 'faker'

// TODO: It should be part of the login page tests, there is no point to execute this tests separetly, other than wasting time
describe('Login validation test', () => {
  before(() => {
    cy.visit('/customer/account/')
  })

  it('checks login form is visible', () => {
    cy.get('.login__form').should('be.visible')
    cy.get('[data-testid=forgot-password-link').should('be.visible')
    cy.get('[data-testid=submit-login-button]').should('be.visible')
  })

  it('submits of empty form', () => {
    cy.get('[data-testid=submit-login-button]')
      .as('loginButton')
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections*').as('getMessages')
    cy.wait('@getMessages')
    cy.get('[data-ui-id=message-error]').should('be.visible')
  })

  it('fills ONLY email address and submits form', () => {
    cy.get('#email').type(faker.internet.email())
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('#pass-error').should('be.visible')
  })

  it('fills ONLY password and submits form', () => {
    cy.get('#email').clear()
    cy.get('#pass').type(faker.internet.password())
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('#email-error').should('be.visible')
  })
})
