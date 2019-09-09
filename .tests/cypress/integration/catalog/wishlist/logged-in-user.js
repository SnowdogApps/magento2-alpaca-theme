function pickRandomItem (item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Add to Wishlist by Logged in user', () => {
  before(() => {
    cy.login()
  })

  it('clicks on wishlist button', () => {
    cy.randomCategory()
    cy.get('[data-testid=add-to-wishlist-button]')
      .then(item => {
        pickRandomItem(item)
          .click()
      })
    cy.url().should('include', '/wishlist/')
    cy.get('[data-ui-id="message-success"]').should('be.visible')
  })

  it('checks if product visibility in wishlist page', () => {
    cy.get('div[data-row="product-item"]').should('be.visible')
    cy.get('div[class="action wishlist__action"]').should('be.visible')
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })

  it('remove product from wishlist', () => {
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })
})
