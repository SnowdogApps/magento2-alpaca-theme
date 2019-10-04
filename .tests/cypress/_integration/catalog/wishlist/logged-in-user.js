function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Add to Wishlist by Logged in user', () => {
  before(() => {
    cy.login()
  })

  it('clicks on wishlist button', () => {
    cy.randomCategory()
    cy.get('[data-testid=add-to-wishlist-button]').then(item => {
      pickRandomItem(item).click()
    })
    // TODO: Lack of consequence - there the redict is part of a single test, in gest it's moved to next test
    cy.url().should('include', '/wishlist/')
    cy.get('[data-ui-id="message-success"]').should('be.visible')
  })

  it('checks product visibility in wishlist page', () => {
    cy.get('div[data-row="product-item"]').should('be.visible')
    cy.get('div[class="action wishlist__action"]').should('be.visible')
    // TODO: Why double click?
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })

  it('remove product from wishlist', () => {
    // TODO: Why double click?
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })
})
