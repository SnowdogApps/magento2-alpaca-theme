function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Configurable product', function() {
  it('Visits product', () => {
    // TODO: All store specific configurations, like special product URL, should be stored in fixtures, to easily change them
    cy.visit('/configurable-product')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  // TODO: There is no need to check visibility of elements to test adding to cart
  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-2048').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')

    cy.get('[data-testid=product-tab__title]')
      .contains('Details') // TODO: Don't use text as selector
      .should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews') // TODO: Don't use text as selector
      .should('be.visible')
  })

  // TODO: There is no need to check reviews to test adding to cart
  it('Test reviews tab', () => {
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews') // TODO: Don't use text as selector
      .click()
    // TODO: Don't use text as selector
    cy.get('.product-review__title').contains('Customers reviews')
    cy.get('#review-form').should('be.visible')
    cy.get('#reviewAddButton').should('be.visible')
  })

  it('Checks configurable options', () => {
    cy.get('.swatch-opt').should('be.visible')

    cy.get('.size .swatch__option').then(elements => {
      pickRandomitem(elements).click()
    })
    cy.get('.color .swatch__option').then(elements => {
      pickRandomitem(elements).click()
    })
    cy.get('#product-addtocart-button')
      .first() // TODO: Avoid using 'first`, write more precise selector instead
      .click()

    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    // TODO: Don't use text as selector
    // TODO: Check if there are items in cart, instead of checking if the message is not printed
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })
})
