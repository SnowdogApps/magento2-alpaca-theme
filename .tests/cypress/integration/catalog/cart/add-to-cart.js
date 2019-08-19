/// <reference types="Cypress" />

function pickRandomitem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

describe('CATALOG - Add to cart test', () => {
  it('Go to catalog view', () => {
    cy.visit('men/tops-men')
  })

  it('click on add to cart button and redirect user to product page.', () => {
    cy.get('[data-testid="add-to-cart-button"]').first().trigger('mouseover').click()
    cy.get('.product-view').should('be.visible')

    cy.server()
    cy.route('customer/section/load/?sections*').as('waitGallery')
    cy.wait('@waitGallery')

    //choose size
    cy.get('.swatch-opt').should('be.visible').find('.size')
    cy.get('.size').find('.swatch__option').then(items => {
      pickRandomitem(items)
        .click()
    })

    //choose color
    cy.get('.color').find('.swatch__option').then(items => {
      pickRandomitem(items)
        .click()
    })
    //add to cart
    cy.get('#product-addtocart-button').click()

    cy.route('customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })
})
