describe('CATALOG - product grid view test', () => {
  Cypress._.times(3, () => {
    it('checks that products are displayed in grid view ', () => {
      cy.visit('/women')
      cy.get('.catalog-grid').should('be.visible')
      cy.get('[data-testid=catalog-grid-item]').should('be.visible')
    })

    it('Goes to the next page', () => {
      cy.nextPage()
    })
  })
})
