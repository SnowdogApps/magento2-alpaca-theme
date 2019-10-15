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
    cy.server({
      whitelist: () => false
    })
    cy.get('#product-addtocart-button').click()
  })

  it('Delate item form cart', () => {
    cy.get('[data-testid=delete-item-link]').click()
    // TODO: Why is this chained that way?
    cy.get('.modal-inner-wrap .modal-footer').then(() => {
      cy.get('.modal-footer button')
        .eq(1)
        .click()
      cy.go('forward')
      cy.server()
      cy.request('/checkout/cart/').as('cartStatus')
      cy.request('/customer/section/load/?sections=cart*').as('cartSection')
      cy.route('/checkout/sidebar/removeItem/').as('removeItem')
      cy.wait('@removeItem')
    })
  })
})
