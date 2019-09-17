/// <reference types="Cypress" />

describe('CATALOG - product list view test', () => {
  Cypress._.times(3, () => {
    it('checks that products are displayed in list view', () => {
      cy.visit('/women')
      cy.get('#mode-list').click()
      cy.get('.catalog-list__products').should('be.visible')
      cy.get('[data-testid=catalog-grid-item]').should('be.visible')
    })

    it('Goes to the next page', () => {
      cy.nextPage()
    })
  })
})
