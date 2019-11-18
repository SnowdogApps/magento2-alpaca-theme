describe('Header - click header links as Guest user', () => {
  before(() => {
    cy.visit('/')
  })
  it('checks "account" link navigates to login page.', () => {
    cy.get('[data-testid=customer-account-link]').click()
    cy.url().should('include', '/customer/account/login')
  })

  it('checks "wishlist" link navigates to  login page.', () => {
    cy.get('[data-testid=wishlist-link]').click()
    cy.url().should('include', '/customer/account/login')
  })
})

describe('Header - click header links as logged in user', () => {
  before(() => {
    cy.login()
  })
  it('checks "account" link navigates to customer page', () => {
    cy.get('[data-testid=customer-account-link]').click()
    cy.url().should('include', '/customer/account/')
  })

  it('checks "wishlist" link navigates to wishlist page.', () => {
    cy.get('[data-testid=wishlist-link]').click()
    cy.url().should('include', '/wishlist/')
  })
})
