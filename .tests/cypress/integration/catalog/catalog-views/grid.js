/// <reference types="Cypress" />

describe('CATALOG - product grid view test', () => {
  it('selects the first menu option', () => {
    cy.randomCategory()
  })

  Cypress._.times(3, () => {
    it('checks that products are displayed in grid view ', () => {
      cy.get('.catalog-grid').should('be.visible')
      cy.get('[data-testid=catalog-grid-item]').should('be.visible')
    })

    it('Goes to the next page', () => {
      cy.nextPage()
    })
  })
})
