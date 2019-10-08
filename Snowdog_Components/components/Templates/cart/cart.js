const cartDiscountElement = document.querySelector('.cart-discount'),
      discountTitleElement = cartDiscountElement.querySelector('.cart-discount__button'),
      discountContentElement = cartDiscountElement.querySelector('.cart-discount__content')

discountTitleElement.addEventListener('click', () => {
  cartDiscountElement.classList.toggle('active')
  const titleAria = discountTitleElement.getAttribute('aria-expanded') === 'true',
        contentAria = discountContentElement.getAttribute('aria-hidden') === 'true'

  discountTitleElement.setAttribute('aria-expanded', !titleAria)
  discountContentElement.setAttribute('aria-hidden', !contentAria)
})
