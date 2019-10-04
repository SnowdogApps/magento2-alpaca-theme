// TODO: This test checks nothing, just wast time on loading the page
// TODO: It's not header related
describe('HEADER - Account header link as Guest user', () => {
  // There are no signs of checking if any redisrect happend
  it('redirects guest user to customer login page.', () => {
    cy.visit('/customer/account/')
  })
})
