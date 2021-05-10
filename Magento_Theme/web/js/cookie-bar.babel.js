define(["Amasty_GdprCookie/js/model/cookie"], function (cookieModel) {
  "use strict";

  class CookieBar {
    // eslint-disable-line
    constructor(element, config) {
      this.config = config;
      this.cookieBar = element;

      if (this.isShowNotificationBar()) {
        this.cookieBar.classList.remove('display-none')
      }

      this.setListeners();
    }

    allowAllCookies() {
      this.cookieBar.remove();

      cookieModel()
        .allowAllCookies()
        .done(
          function () {
            cookieModel().triggerAllow();
            if (this.config.websiteInteraction == 1) {
              cookieModel().restoreInteraction();
            }
          }.bind(this)
        );
    }

    isShowNotificationBar() {
      return cookieModel().isShowNotificationBar(
        this.config.isNotice,
        this.config.websiteInteraction,
        this.config.settingsLink,
        this.config.firstShowProcess
      );
    }

    setListeners() {
      this.cookieBar.allowAllButton = this.cookieBar.querySelector(
        '[data-amcookie-js="allow-all-cookies"]'
      );

      // allow all cookies
      if (this.cookieBar.allowAllButton) {
        this.cookieBar.allowAllButton.addEventListener("click", (e) =>
          this.allowAllCookies(e)
        );
      }
    }
  }

  return function (config, element) {
    new CookieBar(element, config);
  };
});
