// TODO: This test checks almost nothing, but we waste time of two page loads
// TODO: There is no point to keep tests of each header button separetly, it's a wste of time to load a page over and over just to click a button, do it one after another, header is the same on every page, except checkout
describe('HEADER - Wishlist header link as Guest user', () => {
  it('clicks on wishlist header link', () => {
    cy.visit('/')
    cy.get('[data-testid=wishlist-link]').click()
  })

  it('redirects guest to customer login page.', () => {
    // TODO: Should be part of the first test, since that's the effect of a single user action
    cy.url().should('include', '/customer/account/login/')

    // TODO: It's not header related
    cy.get('.login__form').should('be.visible')
  })
})
