const cartDiscountElement = document.querySelector('.cart-discount')

cartDiscountElement.querySelector('.cart-discount__title')
  .addEventListener('click', () => {
    cartDiscountElement.classList.toggle('active')
  })
