define([
  'Amasty_GdprCookie/js/action/allow'
], function (actionAllow) {
  'use strict'

  class CookieBar {
    constructor(element, config) {
      this.config = config
      this.cookieBar = element
 
      this.setListeners()
      this.openModal()
    }

    allowAllCookies() {
      this.closeModal()
      actionAllow()
    }

    openModal() {
      if (this.config.isNotice && localStorage.getItem('amCookieBarFirstShow') !== '1') {
        this.cookieBar.classList.remove('display-none')
      }
    }

    closeModal() {
      this.cookieBar.classList.add('display-none')
      localStorage.setItem('amCookieBarFirstShow', 1)
    }


    setListeners() {
      this.cookieBar.allowAllButton = this.cookieBar.querySelector(
        '[data-amcookie-js="allow-all-cookies"]'
      )
      this.cookieBar.cookieSettingsButton = document.getElementById(
        'btn-cookie-disallow'
      )

      if (this.cookieBar.allowAllButton) {
        this.cookieBar.allowAllButton.addEventListener('click', () =>
          this.allowAllCookies()
        )
      }
      if (this.cookieBar.cookieSettingsButton) {
        this.cookieBar.cookieSettingsButton.addEventListener('click', () =>
          localStorage.setItem('amCookieBarFirstShow', 1)
        )
      }
    }
  }

  return function (config, element) {
    new CookieBar(element, config)
  }
})
