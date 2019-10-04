// TODO: IDK what is this testing, would say that it should be removed
function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Add to cart', function() {
  it('Visits product', () => {
    cy.visit('/women')
  })

  it('adds product to cart', () => {
    cy.get('[data-testid=catalog-grid-item__link]').then(elements => {
      pickRandomitem(elements).click()
    })

    cy.get('[data-testid=product-gallery-placeholder]').should('be.visible')
    cy.get('.product-view__main-actions').should('be.visible')
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
  })
})
