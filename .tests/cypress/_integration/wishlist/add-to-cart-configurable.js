function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Add to cart configurable test', () => {
  it('Go to mens catalog view', () => {
    cy.visit('https://alpaca-ce-demo.snowdog.pro/men.html')
  })

  it('Checks configurable options and adds to cart', () => {
    cy.get('[data-testid=list-product-item]')
      .first()
      .focus()
      .then(() => {
        cy.get('.catalog-grid-item__options').should('be.visible')
        // TODO: Hardcoded option ID
        cy.get('.swatch-opt-1033 .swatch.size .swatch__option').then(item => {
          pickRandomitem(item).click(item)
        })
        // TODO: Hardcoded option ID
        cy.get('.swatch-opt-1033 .swatch.color .swatch__option').then(item => {
          pickRandomitem(item).click(item)
        })
        cy.get('.tocart')
          .first() // TODO: Avoind using first, use more precise selectors
          .click()
      })
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Checks if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no item in your shopping cart.').should(
      'not.be.visible'
    )
  })
})
