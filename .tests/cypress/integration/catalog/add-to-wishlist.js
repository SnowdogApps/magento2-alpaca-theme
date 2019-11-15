function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog - Add to Wishlist by guest user', () => {
  before(() => {
    cy.fixture('urls.json').then(({ categoryWithConfigurableProducts }) => {
      cy.visit(categoryWithConfigurableProducts)
      cy.waitForCustomerData()
    })
  })
  it('adds a product to wishlist', () => {
    cy.get('[data-testid=add-to-wishlist-button]').then(item => {
      pickRandomItem(item).click()
    })

    // should be redirected to login page.
    cy.url().should('include', '/customer/account/login/')

    // should notify user to login or register to add item to wishlist
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })
})

describe('Catalog - Add to Wishlist by logged in user', () => {
  before(() => {
    cy.fixture('urls.json').then(({ categoryWithConfigurableProducts }) => {
      cy.login()
      cy.visit(categoryWithConfigurableProducts)
      cy.waitForCustomerData()
    })
  })
  it('adds a product to wishlist', () => {
    cy.get('[data-testid=add-to-wishlist-button]').then(item => {
      pickRandomItem(item).click()
    })

    // should be redirected to wishlist page.
    cy.url().should('include', '/wishlist/index/index/wishlist_id')

    cy.waitForCustomerData()
    cy.waitForCartData()

    // checks product visibility on wishlist page
    cy.get('[data-row="product-item"]').should('be.visible')
    cy.get('.wishlist__action').should('be.visible')
  })
})
