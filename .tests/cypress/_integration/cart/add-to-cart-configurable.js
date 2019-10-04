function pickRandomitem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

describe('Configurable product', function() {
  it('Visits product', () => {
    cy.visit('/configurable-product')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  // TODO: You don't need to check visibility of the page elements to test adding to cart
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

  // TODO: This is test of adding to cart, not the product page, you don't need reviews to add product to cart
  it('Test reviews tab', () => {
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .click()
    cy.get('.product-review__title').contains('Customers reviews')
    cy.get('#review-form').should('be.visible')
    cy.get('#reviewAddButton')
  })

  // TODO: Missleading description, bc you are adding here product to the cart, not just checking the options
  it('Checks configurable options', () => {
    cy.get('.swatch-opt').should('be.visible')

    cy.get('.size .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
    cy.get('.color .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
    cy.get('#product-addtocart-button')
      .first() // TODO: Avoid using first, use more precise selector instead
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')

    // TODO: Check the `.tests/cypress/integration/catalog/add-to-cart.js` file to get the proper way of checking if there is something in the cart
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })

  // TODO: This is test of adding to cart, not the cart itself, it shouldn't be the part of this test
  it('Check cart view', () => {
    cy.get('[data-testid=view-cart-link]')
      .click()
      .url('should.have', '/cart')
    cy.get('.cart-list-item').contains('Configurable Product')
    cy.get('.cart-list-item__data').should('be.visible')
  })

  // TODO: This is test of adding to cart, not the cart itself, it shouldn't be the part of this test
  it('Are totals displayed', () => {
    cy.server({
      whitelist: () => false
    })
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.route(
      '/static/*/frontend/Snowdog/alpaca/*/Magento_Checkout/template/cart/totals.html'
    ).as('getTotalsTemplate')
    cy.route(
      '/static/*/frontend/Snowdog/alpaca/*/Magento_Tax/template/checkout/cart/totals/grand-total.html'
    ).as('getGrandTotalTemplate')
    cy.wait('@getTotals')
    cy.wait('@getTotalsTemplate')
    cy.wait('@getGrandTotalTemplate')
    cy.get('#cart-totals .cart-totals__row-value--total')
  })
})
