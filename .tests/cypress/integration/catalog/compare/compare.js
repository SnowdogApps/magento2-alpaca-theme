/// <reference types="Cypress" />

function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Compare metric test', () => {
  it('hovers over product', () => {
    cy.visit('/men/tops-men')
    cy.get('[data-testid=catalog-grid-item]')
      .first()
      .trigger('mouseover')
    cy.get('[data-testid=add-to-compare-button]').should('be.visible')
  })

  it('confirms product is added to comparison list', () => {
    cy.get('[data-testid=add-to-compare-button]').then(item => {
      pickRandomItem(item).click()
    })
    cy.server()
    cy.route('/customer/section/load/?sections*').as('getMessages')
    cy.route('/customer/section/load/?sections=cart*').as('getCart')
    cy.wait('@getMessages')
    cy.wait('@getCart')
    cy.get('[data-ui-id=message-success]').should('be.visible')
  })
})
