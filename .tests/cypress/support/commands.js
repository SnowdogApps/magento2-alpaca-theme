Cypress.Commands.add('login', () => {
  cy.visit('/customer/account/login/')
  cy.get('input[name="form_key"]')
    .invoke('val')
    .then(form_key => {
      cy.request({
        method: 'POST',
        url: '/customer/account/loginPost',
        form: true,
        body: {
          form_key: form_key,
          'login[username]': 'qwe@qwe.com',
          'login[password]': 'Qweqwe_1'
        }
      })
    })
})

Cypress.Commands.add('randomCategory', () => {
  cy.visit('/')
  cy.get('.mega-menu__link').then(elements => {
    elements[Math.floor(Math.random() * elements.length)].click(elements)
  })
})

Cypress.Commands.add('goToProductPage', () => {
  cy.get('[data-testid=catalog-grid-item__link]').then(elements => {
    elements[Math.floor(Math.random() * elements.length)].click(elements)
  })
})

Cypress.Commands.add('addProductToCart', () => {
  cy.randomCategory()
  cy.goToProductPage()
  cy.get('.breadcrumbs__item')

  cy.get('.size')
    .find('.swatch__option')
    .as('Size')
    .then(elements => {
      elements[Math.floor(Math.random() * elements.length)].click(elements)
    })

  cy.get('.color')
    .find('.swatch__option')
    .then(elements => {
      elements[Math.floor(Math.random() * elements.length)].click(elements)
    })

  cy.get('#product-addtocart-button')
    .first()
    .click()

  cy.get('[data-ui-id=message-success]')
    .should('be.visible')
    .log('product added to cart')
})

Cypress.Commands.add('nextPage', () => {
  cy.get('[data-testid=pager-next-link]').click()
})

Cypress.Commands.add('previousPage', () => {
  cy.get('[data-testid=pager-prev-link]').click()
})
