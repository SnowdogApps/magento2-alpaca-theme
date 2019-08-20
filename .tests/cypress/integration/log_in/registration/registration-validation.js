var faker = require('faker')

describe('Registration validation', () => {
  before(() => {
    cy.account()
  })

  it('checks New Customer header title is visible', () => {
    cy.contains('New Customers').should('be.visible')
  })

  it('checks that Create an Account button is visble', () => {
    cy.get('[data-testid=create-customer-account-link]').should('be.visible')
  })

  it('clicks on Create an Account button', () => {
    cy.get('[data-testid=create-customer-account-link]').click()
  })

  it('redirects to create account page', () => {
    cy.url().should('include', '/customer/account/create/')
  })

  it('checks that registration form is visible', () => {
    cy.get('form[id="form-validate"]').should('be.visible')
  })

  it('checks error message in submission of empty form', () => {
    cy.submit_reg_form()
  })

  it('fills ONLY first name and submits form', () => {
    cy.get('#lastname').type(faker.name.firstName())
    cy.submit_reg_form()
  })

  it('fills ONLY last name and submits form', () => {
    cy.get('#lastname').type(faker.name.lastName())
    cy.submit_reg_form()
  })

  it('select ONLY Sign Up for Newsletter checkbox and submits form', () => {
    cy.get('div[class="checkbox registration__newsletter-checkbox"]').click()
    cy.submit_reg_form()
  })

  it('fills ONLY email address and submits form', () => {
    cy.get('#email_address').type(faker.internet.email())
    cy.submit_reg_form()
  })

  it('fills ONLY password and submits form', () => {
    cy.get('#password').type('Password123')
    cy.submit_reg_form()
  })

  it('fills wrong email address and submits form', () => {
    cy.get('#email_address').type('test@')
    cy.submit_reg_form()
    cy.get('#email_address-error').should('be.visible')
      .and('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('fills password less than 8 characters and submits form', () => {
    cy.get('#password').clear().type('Pass')
    cy.submit_reg_form()
    cy.get('#password-error').should('be.visible')
      .and('have.text',
        'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
  })

  it('fills wrong passsword in Confirm Password field and submits form', () => {
    cy.get('#password').clear().type('Password123')
    cy.get('#password-confirmation').type('Password124')
    cy.submit_reg_form()
    cy.get('#password-confirmation-error').should('be.visible')
      .and('have.text', 'Please enter the same value again.')
  })
})
