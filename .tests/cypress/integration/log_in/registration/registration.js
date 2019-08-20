var faker = require('faker')

describe('Registration test', () => {
  before(() => {
    cy.account()
  })

  it('checks New Customer header title is visible', () => {
    cy.contains('New Customers').should('be.visible')
  })

  it('checks that Create an Account button is visble', () => {
    cy.get('[data-testid=create-customer-account-link]').should('be.visible')
  })

  it('redirects to create account page', () => {
    cy.get('[data-testid=create-customer-account-link]').click()
    cy.url().should('include', '/customer/account/create/')
  })

  it('submits registration form', () => {
    cy.get('form[id="form-validate"]').should('be.visible')
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('div[class="checkbox registration__newsletter-checkbox"]').click()
    cy.get('#email_address').type(faker.internet.email())
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('[data-testid=create-account-button]').click()
    cy.url().should('include', '/customer/account/index/')
    cy.get('div[class="row"]').should('be.visible')
  })
})
