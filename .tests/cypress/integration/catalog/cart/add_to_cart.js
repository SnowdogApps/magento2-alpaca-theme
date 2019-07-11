describe('CATALOG - Add to cart test', () => {

    it('Go to catalog view', () => {
        cy.select_first_menu()
    })

    it('click on add to cart button and redirect user to product page.', () => {
        cy.get('[data-testid="add-to-cart-button"]').first().trigger('mouseover').click()
        cy.get('div[class="product-view container"]').should('be.visible')
    })

  })