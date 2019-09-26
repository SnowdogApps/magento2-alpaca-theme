function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Configurable product', function() {
  it('Visits product', () => {
    cy.visit('/configurable-product')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

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
      .contains('Details')
      .should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .should('be.visible')
  })

  it('Test reviews tab', () => {
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .click()
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
      .first()
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })

  it('Change product qty in cart', () => {
    cy.get('.cart-item-qty')
      .clear()
      .type('2')
    cy.get('.minicart-product__info')
      .contains('Update')
      .click()
  })

  it('Qty check', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty').should('eq', '2')
  })
})
