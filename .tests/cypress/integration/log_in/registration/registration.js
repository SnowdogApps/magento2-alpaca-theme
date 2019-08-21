var faker = require('faker')

describe('Registration test', () => {
  before(() => {
    cy.account()
  })

  it('redirects to create account page', () => {
    cy.contains('New Customers').should('be.visible')
    cy.get('[data-testid=create-customer-account-link]').click()
    cy.url().should('include', '/customer/account/create/')
  })

  it('submits registration form', () => {
    cy.get('#form-validate').should('be.visible')
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('.registration__newsletter-checkbox').click()
    cy.get('#email_address').type(faker.internet.email())
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('[data-testid=create-account-button]').click()
    cy.url().should('include', '/customer/account/')
    cy.get('.row').should('be.visible')
  })
})
