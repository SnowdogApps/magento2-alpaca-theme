function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Compare metric test', () => {
  // TODO: The way how the tests are splited and described requires changes, since there're not test cases
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
    // TODO: Why to wait for cart data, if the test is not related to the card in any way?
    cy.wait('@getCart')
    cy.get('[data-ui-id=message-success]').should('be.visible')
  })
})
