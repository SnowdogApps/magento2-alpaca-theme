describe('HEADER - Wishlist header link as Logged In user', () => {
  before(() => {
    cy.login()
  })

  it('clicks on wishlist header link', () => {
    cy.get('[data-testid=wishlist-link]').click()
  })

  it('redirects user to wishlist page.', () => {
    cy.url().should('include', '/wishlist/')
    cy.get('.dashboard-nav').should('be.visible')
    cy.get('.current strong').should('have.text', 'My Wish List')
  })
})
