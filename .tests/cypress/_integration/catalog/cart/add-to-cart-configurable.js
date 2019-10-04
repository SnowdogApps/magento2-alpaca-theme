function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Add to cart configurable test', () => {
  it('Go to mens catalog view', () => {
    // TODO: Full url
    // TODO: Keep URLs in fixtures
    cy.visit('https://alpaca-ce-demo.snowdog.pro/men.html')
  })

  it('Checks configurable options and adds to cart', () => {
    // TODO: Why is this chained that way?
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
          .first() // TODO: Avoid using first, use more precise selector instead
          .click()
      })
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Checks if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')

    // TODO: Check the `.tests/cypress/integration/catalog/add-to-cart.js` file to get the proper way of checking if there is something in the cart
    cy.contains('You have no item in your shopping cart.').should(
      'not.be.visible'
    )
  })
})
