function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog - Add to Wishlist by logged in user', () => {
  it('adds a product to wishlist', () => {
    cy.fixture('urls.json').then(({ men }) => {
      cy.login()
      cy.visit(men)
      cy.waitForCustomerData()
      cy.get('[data-testid=add-to-wishlist-button]').then(item => {
        pickRandomItem(item).click()
      })
      cy.waitForCustomerData()
      cy.waitForCartData()
      // checks product visibility on wishlist page
      cy.get('[data-row="product-item"]').should('be.visible')
      cy.get('.wishlist__action').should('be.visible')
    })
  })

  it('removes product from wishlist', () => {
    cy.get('.wishlist__remove').click()
    cy.get('[data-ui-id="message-success"]').should('be.visible')
    cy.get('[data-testid=log-out-link]').click()
  })
})

describe('Catalog - Add to Wishlist by guest user', () => {
  it('adds a product to wishlist', () => {
    cy.fixture('urls.json').then(({ men }) => {
      cy.visit(men)
      cy.waitForCustomerData()
      cy.get('[data-testid=add-to-wishlist-button]').then(item => {
        pickRandomItem(item).click()
      })
      cy.get('[data-ui-id="message-error"]').should('be.visible')
    })
  })
})
