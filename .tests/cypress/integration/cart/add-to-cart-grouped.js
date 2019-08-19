describe('Grouped product', function () {
  before(() => {
    // Hide premissions popup
    cy.setCookie('permission-cookies', 'true')
    cy.setCookie('permission-profiling', 'true')
    cy.setCookie('mage-cache-sessid', 'true')
    // Keep cookies beween tests
    Cypress.Cookies.defaults({
      whitelist: [
        'frontend',
        'X-Magento-Vary',
        'permission-profiling',
        'PHPSESSID',
        'form_key'
      ]
    })
  })

  it('Visits product', () => {
    cy.visit('https://alpaca-ce-solr-demo.snowdog.pro/grouped-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible').log('SKU VISIBLE')
    cy.get('#super-product-table').should('be.visible').log('Grouped product table visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Details').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
    cy.get('.fotorama__img')
  })

  it('Test grouped product table', () => {
    cy.get('#super-product-table').should('be.visible').find('>tbody')
      .then((elements) => {
        cy.log(elements.length)
      })
    cy.get('.product-view__grouped-product-name')
      .then((productsname) => {
        cy.log(productsname.length)
      })
    cy.get('[data-price-type=finalPrice]')
      .then((productsname) => {
        cy.log(productsname.length)
      })
    cy.get('.qty')
      .then((productsname) => {
        cy.log(productsname.length)
      })
  })

  it('Choose product from table', () => {
    cy.get('#super-product-table')
    cy.get('.input__field.input-text.qty')
      .click({
        multiple: true
      })
      .clear()

    cy.get('.input__field.input-text.qty').eq(0).type('1')
    cy.get('.input__field.input-text.qty').eq(1).type('1')
    cy.get('.input__field.input-text.qty').eq(2).type('1')
  })

  it('Add product to cart', () => {
    cy.server({
      whitelist: () => false
    })
    cy.get('#product-addtocart-button').click()
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.wait('@getTotals')

  })

  it('Check cart view', () => {
    cy.get('[data-testid=view-cart-link]').click().url('should.have','/cart')
    cy.get('.cart-list-item').contains('Configurable Product')
    cy.get('.cart-list-item__data')
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

  after

  after(() => {
    // Clear cookie after tests to enable running test several times
    cy.clearCookie('frontend')
    cy.clearCookie('permission-cookies')
    cy.clearCookie('permission-profiling')
    cy.clearCookie('form_key')
    cy.clearCookie('PHPSESSID')
    cy.clearCookie('mage-cache-sessid')
  })
})
