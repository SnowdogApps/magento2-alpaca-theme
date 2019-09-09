
describe('Create order as guest', function () {
  it('Visits product', () => {
    cy.visit('/women')
  })

  it('Add product to cart', () => {
    cy.addProductToCart()
  })

  it('Can navigate to cart from minicart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('[data-testid=view-cart-link]').should('be.visible').click()
  })

  it('Is cupon code input visible', () => {
    cy.get('#coupon_code')
  })

  it('Are totals displayed', () => {
    cy.server({ whitelist: () => false })
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Checkout/template/cart/totals.html').as('getTotalsTemplate')
    cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Tax/template/checkout/cart/totals/grand-total.html').as('getGrandTotalTemplate')

    cy.wait('@getTotals')
    cy.wait('@getTotalsTemplate')
    cy.wait('@getGrandTotalTemplate')

    cy.get('#cart-totals').find('.cart-totals__row-value--total')
  })

  it('Can naviage to checkout from cart', () => {
    cy.get('[data-testid=proceed-to-checkout-button]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/checkout/')
  })
})
