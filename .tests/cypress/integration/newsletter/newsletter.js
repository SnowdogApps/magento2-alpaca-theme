import faker from 'faker'

describe('Newsletter tests', () => {
  it('submitting form with valid email displays success message', () => {
    cy.visit('/')
    cy.waitForCustomerData()
    cy.get('#newsletter').type(faker.internet.email())
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('[data-ui-id=message-success]').should('be.visible')
  })

  it('submitting "empty" form displays error messages', () => {
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('#newsletter-error').should('be.visible')
    cy.get('#newsletterAgrrement-error').should('be.visible')
  })

  it('displays error message when already subcribed user resubmits form', () => {
    cy.fixture('user.json').then(({ login }) => {
      cy.get('#newsletter').type(login)
    })
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })

  it('submitting form without agreeing to Terms and condition displays error message', () => {
    cy.get('#newsletter').type(faker.internet.email())
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('#newsletterAgrrement-error').should('be.visible')
  })

  it('submitting form using invalid email displays error message', () => {
    cy.get('#newsletter')
      .clear()
      .type('qwe@')
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('#newsletter-error').should('be.visible')
  })
})
