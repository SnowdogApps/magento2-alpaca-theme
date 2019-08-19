/// <reference types="Cypress" />

function pickRandomitem (items) {
  return items[Math.floor(Math.random() * items.length)]
}

describe('CATALOG - Add to cart configurable test', () => {
  it('Go to mens catalog view', () => {
    cy.visit('https://alpaca-ce-demo.snowdog.pro/men.html')
  })

  it('Checks configurable options and adds to cart', () => {
    cy.get('[data-testid=list-product-item]').first().focus()
      .then(() => {
        cy.get('.catalog-grid-item__options').should('be.visible').find('.size')
        cy.get('.swatch-opt-1033').children('.swatch.size').find('.swatch__option')
          .then((items) => {
            cy.log(items)
            pickRandomitem(items)
              .click(items)
          })
        cy.get('.swatch-opt-1033').children('.swatch.color').find('.swatch__option')
          .then((items) => {
            cy.log(items)
            pickRandomitem(items)
              .click(items)
          })
        cy.get('.tocart').first().click()
      })
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Checks if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })
})
