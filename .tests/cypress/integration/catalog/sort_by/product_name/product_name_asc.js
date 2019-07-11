describe('CATALOG - Sort By Product name ascending test', () => {

    it('selects sorting by Product name ascending', () => {
        cy.select_first_menu()
        cy.get('.toolbar__sorter').should('be.visible')
        cy.get('div[class="select__field"]').first().click()
        cy.get('#choices-sort-by-item-choice-5').click()
    })

    it('checks active sort by Product name ascending in next page', () => {
        cy.next_page()
        cy.url().should('include', '?p=2')
        cy.get('select[id="sort-by"]').should('be.visible')
    })

    it('checks active sort by Product name ascending in previous page', () => {
        cy.previous_page()
        cy.get('select[id="sort-by"]').should('be.visible')
    })

  })
  