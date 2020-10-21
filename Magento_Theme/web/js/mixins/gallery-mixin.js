define([
  'jquery',
  'underscore',
  'matchMedia',
], function ($, _, mediaCheck) {
  'use strict';

  return function (targetModule) {
    return targetModule.extend({
      /**
       * Creates breakpoints for gallery.
       */
      setupBreakpoints: function () {
        var pairs,
          settings = this.settings,
          config = this.config,
          startConfig = this.startConfig,
          isTouchEnabled = this.isTouchEnabled;

        if (_.isObject(settings.breakpoints)) {
          pairs = _.pairs(settings.breakpoints);
          var isInitialized = {};
          _.each(pairs, function (pair) {
            var mediaQuery = pair[0];
            isInitialized[mediaQuery] = false;
            mediaCheck({
              media: mediaQuery,

              /**
               * Is triggered when breakpoint enties.
               */
              entry: function () {
                $.extend(true, config, _.clone(startConfig));

                settings.api.updateOptions(settings.defaultConfig.options, true);

                if (settings.isFullscreen) {
                  settings.api.updateOptions(settings.fullscreenConfig, true);
                }

                if (isTouchEnabled) {
                  settings.breakpoints[mediaQuery].options.arrows = false;

                  if (settings.breakpoints[mediaQuery].options.fullscreen) {
                    settings.breakpoints[mediaQuery].options.fullscreen.arrows = false;
                  }
                }

                settings.api.updateOptions(settings.breakpoints[mediaQuery].options, true);
                $.extend(true, config, settings.breakpoints[mediaQuery]);
                settings.activeBreakpoint = settings.breakpoints[mediaQuery];

                isInitialized[mediaQuery] = true;
              },

              /**
               * Is triggered when breakpoint exits.
               */
              exit: function () {
                if (isInitialized[mediaQuery]) {
                  $.extend(true, config, _.clone(startConfig));
                  settings.api.updateOptions(settings.defaultConfig.options, true);

                  if (settings.isFullscreen) {
                    settings.api.updateOptions(settings.fullscreenConfig, true);
                  }
                  settings.activeBreakpoint = {};
                }
                else {
                  isInitialized[mediaQuery] = true;
                }
              }
            });
          });
        }
      }
    });
  };
});
