/// <reference types="Cypress" />

describe('CATALOG - product list view test', () => {
  it('changes catalog product view to list view', () => {
    cy.randomCategory()
    cy.get('#mode-list').click()
  })

  Cypress._.times(3, () => {
    it('checks that products are displayed in list view', () => {
      cy.get('.catalog-list__products').should('be.visible')
      cy.get('[data-testid=catalog-grid-item]').should('be.visible')
    })

    it('Goes to the next page', () => {
      cy.nextPage()
    })
  })
})
