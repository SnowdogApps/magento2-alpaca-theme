import faker from 'faker'

describe('Registration', () => {
  // TODO: Loading login view is not testing the registration view
  before(() => {
    cy.visit('/customer/account/')
  })

  // TODO: It's not part of the registration view, to check if other view have working link to it
  it('redirects to create account page', () => {
    // TODO: Don't use text as selector
    cy.contains('New Customers').should('be.visible')
    cy.get('[data-testid=create-customer-account-link]').click()
    cy.url().should('include', '/customer/account/create/')
  })

  it('submits registration form', () => {
    // TOO generic selectors, there can be multiple forms on the page
    cy.get('#form-validate').should('be.visible')
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('.registration__newsletter-checkbox').click()
    cy.get('#email_address').type(faker.internet.email())
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('[data-testid=create-account-button]').click()
    cy.url().should('include', '/customer/account/')
    // TODO: Too generic selector, there is always some `.row` on the page
    cy.get('.row').should('be.visible')
  })
})
