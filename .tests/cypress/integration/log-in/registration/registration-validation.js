import faker from 'faker'

// TODO: Form validation should be part of registaion view test, there is literaly nothing else on this page, just a form
describe('Registration validation', () => {
  // TODO: It's not related to testing te registation itself
  before(() => {
    cy.visit('/customer/account/')
  })

  // TODO: It's not related to testing te registation itself
  it('checks New Customer header title is visible', () => {
    // TODO: Don't use text as selector
    cy.contains('New Customers').should('be.visible')
  })

  // TODO: It's not related to testing te registation itself
  // TODO: It's repetitive, next test is checking the same, you can't click if element it not visible
  it('checks that Create an Account button is visble', () => {
    cy.get('[data-testid=create-customer-account-link]').should('be.visible')
  })

  // TODO: It's not related to testing te registation itself
  it('clicks on Create an Account button', () => {
    cy.get('[data-testid=create-customer-account-link]').click()
  })

  // TODO: It's not related to testing te registation itself
  it('redirects to create account page', () => {
    cy.url().should('include', '/customer/account/create/')
  })

  it('checks that registration form is visible', () => {
    // Wait for the slowest part to be sure that the page is fully loaded
    cy.waitForCustomerData()

    cy.get('#form-validate').should('be.visible')
  })

  it('checks error message in submission of empty form', () => {
    cy.get('[data-testid=create-account-button]').click()
    cy.get('.mage-error').should('be.visible')
  })

  it('fills ONLY first name and submits form', () => {
    cy.get('#firstname').type(faker.name.firstName())
    cy.get('[data-testid=create-account-button]').click()
    cy.get('.mage-error').should('be.visible')
  })

  it('fills ONLY last name and submits form', () => {
    cy.get('#lastname').type(faker.name.lastName())
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
  })

  it('select ONLY Sign Up for Newsletter checkbox and submits form', () => {
    cy.get('.registration__newsletter-checkbox').click()
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
  })

  it('fills ONLY email address and submits form', () => {
    cy.get('#email_address').type(faker.internet.email())
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
  })

  it('fills ONLY password and submits form', () => {
    cy.get('#password').type('Password123')
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
  })

  it('fills wrong email address and submits form', () => {
    cy.get('#email_address').type('test@')
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
    cy.get('#email_address-error').should('be.visible')
  })

  it('fills password less than 8 characters and submits form', () => {
    cy.get('#password')
      .clear()
      .type('Pass')
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
    cy.get('#password-error').should('be.visible')
  })

  it('fills wrong passsword in Confirm Password field and submits form', () => {
    cy.get('#password')
      .clear()
      .type('Password123')
    cy.get('#password-confirmation').type('Password124')
    cy.get('[data-testid=create-account-button]').click()
    // TODO: You should excpect to get the error only below certain inputs, not just somewhere on the page
    cy.get('.mage-error').should('be.visible')
    cy.get('#password-confirmation-error').should('be.visible')
  })
})
