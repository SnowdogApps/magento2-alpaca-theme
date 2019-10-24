describe('Header - header links as Guest user', () => {
  it('clicking account link navigates to a new url.', () => {
    cy.visit('/')
    cy.get('[data-testid=customer-account-link]').click()
    cy.url().should('include', '/customer/account/login')
  })

  it('clicking wishlist link navigates to a new url.', () => {
    cy.get('[data-testid=wishlist-link]').click()
    cy.url().should('include', '/customer/account/login')
  })
})

describe('Header - header links as logged in user', () => {
  it('clicking account link navigates to a new url', () => {
    cy.visit('/')
    cy.login()
    cy.get('[data-testid=customer-account-link]').click()
    cy.url().should('include', '/customer/account/')
  })

  it('clicking wishlist link navigates to a new url.', () => {
    cy.get('[data-testid=wishlist-link]').click()
    cy.url().should('include', '/wishlist/')
  })
})
