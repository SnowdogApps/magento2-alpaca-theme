describe('Grouped product', function() {
  it('Visits product', () => {
    cy.visit('/grouped-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku')
      .should('be.visible')
      .log('SKU VISIBLE')
    cy.get('#super-product-table')
      .should('be.visible')
      .log('Grouped product table visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Details')
      .should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .should('be.visible')
    cy.get('.fotorama__img').should('be.visible')
  })

  it('Test grouped product table', () => {
    cy.get('#super-product-table').should('be.visible')
  })

  it('Choose product from table', () => {
    cy.get('#super-product-table')

    // TODO: Use better selector to avoid using "multiple"
    cy.get('.input__field.input-text.qty')
      .click({ multiple: true })
      .clear()
    cy.get('.input__field.input-text.qty')
      .eq(0)
      .type('1')
    cy.get('.input__field.input-text.qty')
      .eq(1)
      .type('1')
    cy.get('.input__field.input-text.qty')
      .eq(2)
      .type('1')
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })

  it('Change product qty in cart', () => {
    // We should not be able to remove product from cart by typing 0
    cy.get('.cart-item-qty')
      .clear()
      .type('0')
    cy.get('.minicart-product__info')
      .contains('Update')
      .should('not.be.visible')
    cy.contains('See Details').click()
    cy.get('.cart-item-qty').should('have.value', '1')
  })
})
