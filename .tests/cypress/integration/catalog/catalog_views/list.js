describe('CATALOG - product list view test', () => {

    it('changes catalog product view to list view', () => {
        cy.select_first_menu()
        cy.get('#mode-list').click()
    })

    for (var i = 0; i < 3; i++) {

        it('checks that products are displayed in list view', () => {
            cy.get('.catalog-list__products').should('be.visible')
            cy.get('[data-testid="catalog-grid-item"]').should('be.visible')
        })
    
        it('Goes to the next page', () => {
            cy.next_page()
        })
    }

  })