describe('Category toolbar', () => {
  it('Open category page ', () => {
    // TODO: Store categories URLs in fixtures
    cy.visit('/women')
  })

  describe('Sorting', () => {
    it('Is sorter visible', () => {
      cy.get('.toolbar__sorter').should('be.visible')
    })

    it('Sorting by best sellers', () => {
      // Open select
      cy.get('.toolbar__sorter .choices').click()

      // Pick option from select
      cy.get(
        '.toolbar__sorter .choices__list--dropdown .select__field-item[data-id="1"]'
      ).click()

      cy.url().should('include', 'order=category.category')
    })

    it('Sorting by best sellers descendig', () => {
      // Open select
      cy.get('.toolbar__sorter .choices').click()

      // Pick option from select
      cy.get(
        '.toolbar__sorter .choices__list--dropdown .select__field-item[data-id="2"]'
      ).click()

      cy.url().should('include', 'order=category.category&dir=desc')
    })
  })

  describe('Limiter', () => {
    it('Set limiter to 15 items', () => {
      cy.get('.toolbar__limiter').should('be.visible')

      // Open select
      cy.get('.toolbar__limiter .choices').click()

      // Pick option from select
      cy.get(
        '.toolbar__limiter .choices__list--dropdown .select__field-item[data-id="2"]'
      ).click()

      cy.url().should('include', 'limit=15')
      cy.get('.catalog-grid-item').should($el => {
        expect($el).to.have.length(15)
      })
    })
  })

  describe('View modes', () => {
    it('List mode switch', () => {
      // Wait for the slowest part to be sure that the page is fully loaded
      cy.waitForCustomerData()

      // TODO: Add data-testid
      cy.get('.toolbar__mode-button[data-value="list"]').click()
      cy.url().should('include', 'mode=list')
      cy.get(
        '.toolbar__mode-button[data-value="list"] .toolbar__mode-icon--active'
      ).should('be.visible')
      cy.get('.catalog-list-item').should('be.visible')
    })

    it('Grid mode switch', () => {
      // Wait for the slowest part to be sure that the page is fully loaded
      cy.waitForCustomerData()

      // TODO: Add data-testid
      cy.get('.toolbar__mode-button[data-value="grid"]').click()
      cy.url().should('not.include', 'mode=list')
      cy.get(
        '.toolbar__mode-button[data-value="grid"] .toolbar__mode-icon--active'
      ).should('be.visible')
      cy.get('.catalog-grid').should('be.visible')
      cy.get('[data-testid=catalog-grid-item]').should('be.visible')
    })
  })

  describe('Pagination', () => {
    it('checks that pagination is visible', () => {
      cy.get('.pager').should('be.visible')
    })

    it('checks active pagination in next page', () => {
      cy.nextPage()
      cy.get('.pager').should('be.visible')
      cy.url().should('include', 'p=2')
    })

    it('checks active pagination in previous page', () => {
      cy.previousPage()
      cy.url().should('not.include', 'p=2')
    })
  })
})
