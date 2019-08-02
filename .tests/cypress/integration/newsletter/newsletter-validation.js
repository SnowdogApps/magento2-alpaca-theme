var faker = require('faker')

describe('Newsletter validation', () => {
  before(() => {
    cy.setCookie('permission-cookies', 'true')
    cy.setCookie('permission-profiling', 'true')
    cy.setCookie('mage-cache-sessid', 'true')

    Cypress.Cookies.defaults({
      whitelist: [
        'frontend',
        'PHPSESSID',
        'form_key',
        'mage-cache-sessid',
        'permission-cookies',
        'permission-profiling',
        'X-Magento-Vary'
      ]
    })
    cy.visit('/')
  })

  it('checks newsletter functionality in footer.', () => {
    cy.get('.footer').should('be.visible')
    cy.get('#newsletter-validate-detail').should('be.visible')
    cy.get('.newsletter__heading').should('be.visible')
    cy.get('input[id="newsletter"]')
      .should('have.attr', 'placeholder', 'Enter your email')
    cy.get('[data-testid="submit-newsletter-button"]').as('submitButton')
      .should('be.visible')
    cy.get('div[class="newsletter__agreements"]').should('be.visible')
  })

  it('Submit empty newsletter form', () => {
    cy.get('[data-testid="submit-newsletter-button"]').click()
    cy.get('#newsletter-error').should('have.text', 'This is a required field.')
    cy.get('#newsletterAgrrement-error').should('have.text', 'This is a required field.')
  })

  it('Submit already subcribed user to newsletter', () => {
    cy.get('input[name="email"]').type('qwe@qwe.com')
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid="submit-newsletter-button"]').click()
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })

  it('Submit newsletter form using invalid email', () => {
    cy.get('input[name="email"]').type('qwe@')
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid="submit-newsletter-button"]').click()
    cy.get('#newsletter-error').should('have.text', 'Please enter a valid email address.')
  })

  it('Submit newsletter form without selecting Terms and condition checkbox', () => {
    cy.get('input[name="email"]').type(faker.internet.email())
    cy.get('[data-testid="submit-newsletter-button"]').click()
    cy.get('#newsletterAgrrement-error').should('have.text', 'This is a required field.')
  })

  after(() => {
    cy.clearCookie('PHPSESSID')
    cy.clearCookie('form_key')
    cy.clearCookie('mage-cache-sessid')
    cy.clearCookie('X-Magento-Vary')
    cy.clearCookie('frontend')
  })
})
