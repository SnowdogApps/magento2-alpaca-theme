describe('Grouped product', function() {
  it('Visits product', () => {
    // TODO: All store specific configurations, like special product URL, should be stored in fixtures, to easily change them
    cy.visit('/grouped-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  // TODO: There is no need to check visibility of elements to test adding to cart
  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku')
      .should('be.visible')
      .log('SKU VISIBLE') // TODO: Pointless logging
    cy.get('#super-product-table')
      .should('be.visible')
      .log('Grouped product table visible') // TODO: Pointless logging
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Details') // TODO: Don't use text as selector
      .should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews') // TODO: Don't use text as selector
      .should('be.visible')
    cy.get('.fotorama__img').should('be.visible')
  })

  // TODO: Looks pointless
  it('Test grouped product table', () => {
    cy.get('#super-product-table').should('be.visible')
  })

  it('Choose product from table', () => {
    // TODO: It do nothing and kinda repeat previous test
    cy.get('#super-product-table')
    cy.get('.input__field.input-text.qty').each(el =>
      cy
        .get(el)
        .clear()
        .type('1')
    )
  })

  it('Add product to cart', () => {
    cy.server({ whitelist: () => false })
    cy.route('POST', '/checkout/cart/add/uenc/*/product/*/').as('addToCart')
    cy.route('/customer/section/load/?sections=cart,messages*').as(
      'getCartAndMessages'
    )
    cy.get('#product-addtocart-button').click()
    cy.wait('@addToCart')
    cy.wait('@getCartAndMessages')
    // TODO: Don't use text as selector
    cy.get('.messages').contains(
      'You added Grouped Product to your shopping cart.'
    )
  })
})
