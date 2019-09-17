/// <reference types="Cypress" />

describe('HEADER - Wishlist header link as Guest user', () => {
  it('clicks on wushlist header link', () => {
    cy.visit('/')
    cy.get('[data-testid=wishlist-link]').click()
  })

  it('redirects guest to customer login page.', () => {
    cy.url().should('include', '/customer/account/login/')
    cy.get('.login__form').should('be.visible')
  })
})