define(() => (config, element) => {
  'use strict'

  const content = document.querySelector('.dashboard-nav__content'),
    currentItem = content.querySelector('.item.current'),
    mobileNav = document.querySelector('.dashboard-nav__mobile')

  if (currentItem) {
    mobileNav.innerHTML = currentItem.textContent
  }

  mobileNav.addEventListener('click', () => {
    mobileNav.classList.toggle('dashboard-nav__mobile--active')
    content.classList.toggle('dashboard-nav__content--visible')
  })
})
