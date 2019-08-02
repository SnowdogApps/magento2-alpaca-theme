describe('CATALOG - product grid view test', () => {

  it('selects the first menu option', () => {
    cy.select_first_menu()
  })

  for (var i = 0; i < 3; i++) {

    it('checks that products are displayed in grid view ', () => {
      cy.get('.catalog-grid').should('be.visible')
      cy.get('[data-testid="catalog-grid-item"]').should('be.visible')
    })

    it('Goes to the next page', () => {
      cy.next_page()
    })
  }

})
