define([], function () {
  'use strict'

  class MarketingBar {
    constructor(element) {
      this.element = element
      this.closeBtn = element.querySelector('.marketing-bar__close')

      this.init()
    }

    close() {
      const focusable = this.element.parentElement.querySelector('a[href]:not(.skip-nav)')

      this.element.classList.add('marketing-bar--closed')
      localStorage.setItem(this.element.dataset.id, 'closed')

      focusable.focus()
    }

    setListeners() {
      this.closeBtn.addEventListener('click', this.close.bind(this))
    }

    init() {
      if (localStorage.getItem(this.element.dataset.id) !== 'closed') {
        this.element.classList.remove('marketing-bar--closed')
      }

      this.setListeners()
    }
  }

  return (config, element) => {
    new MarketingBar(element, config)
  }
})
