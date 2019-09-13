function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Guest user Add to Wishlist test', () => {
  it('clicks on wishlist button', () => {
    cy.randomCategory()
    cy.get('[data-testid=add-to-wishlist-button]').then(item => {
      pickRandomItem(item).click()
    })
  })

  it('redirects user to login page', () => {
    cy.url().should('include', '/customer/account/login/')
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })
})
