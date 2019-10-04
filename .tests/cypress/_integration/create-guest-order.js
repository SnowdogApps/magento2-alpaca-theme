// TODO: It's not making any orders
describe('Create order as guest', function() {
  // TODO: It's category, not product and there is no need to visit it, to add something to the cart
  it('Visits product', () => {
    cy.visit('/women')
  })

  it('Add product to cart', () => {
    cy.addProductToCart()
  })

  it('Can navigate to cart from minicart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('[data-testid=view-cart-link]')
      .should('be.visible')
      .click()
  })

  // TODO: It's not part of making an order, to check the cart elements visibility, or even to open the cart
  it('Is cupon code input visible', () => {
    cy.get('#coupon_code')
  })

  // TODO: It's not part of making an order to check if cart totals are visible
  it('Are totals displayed', () => {
    cy.server({ whitelist: () => false })
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

  // TODO: This test should navigate to the checkout manually, since that's the fastest way
  it('Can naviage to checkout from cart', () => {
    cy.get('[data-testid=proceed-to-checkout-button]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/checkout/')
  })
})
