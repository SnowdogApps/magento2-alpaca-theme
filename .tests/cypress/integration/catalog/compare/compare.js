function pickRandomItem (item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Compare metric test', () => {
  it('hovers over product', () => {
    cy.select_first_menu()
    cy.get('[data-testid=catalog-grid-item]').first().trigger('mouseover')
    cy.get('[data-testid=add-to-compare-button]').should('be.visible')
  })

  it('confirms product is added to comparison list', () => {
    cy.get('[data-testid=add-to-compare-button]')
      .then(item => {
        pickRandomItem(item)
          .click()
      })
    cy.get('div[data-ui-id="message-success"]').should('be.visible')
  })
})
