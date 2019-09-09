var faker = require('faker')

describe('Login validation test', () => {
  before(() => {
    cy.account()
  })

  it('checks login form is visible', () => {
    cy.get('.login__form').should('be.visible')
    cy.get('[data-testid=forgot-password-link').should('be.visible')
    cy.get('[data-testid=submit-login-button]').should('be.visible')
  })

  it('submits of empty form', () => {
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('#email-error').should('be.visible')
    cy.get('#pass-error').should('be.visible')
  })

  it('fills ONLY email address and submits form', () => {
    cy.get('#email').type(faker.internet.email())
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('#pass-error').should('be.visible')
      .and('have.text', 'This is a required field.')
  })

  it('fills ONLY password and submits form', () => {
    cy.get('#email').clear()
    cy.get('#pass').type(faker.internet.password())
    cy.get('[data-testid=submit-login-button]').click()
    cy.get('#email-error').should('be.visible')
      .and('have.text', 'This is a required field.')
  })
})
