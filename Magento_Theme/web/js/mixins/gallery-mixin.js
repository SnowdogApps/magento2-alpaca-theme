define([
  'jquery',
  'underscore',
  'matchMedia',
  'mage/template',
  'text!mage/gallery/gallery.html',
  'mage/translate'
], function ($, _, mediaCheck, template, galleryTpl, $t) {
  'use strict';

  return function (targetModule) {
    /**
    * Retrieves index if the main item.
    * @param {Array.<Object>} data - Set of gallery items.
    */
    var getMainImageIndex = function (data) {
      var mainIndex;

      if (_.every(data, function (item) {
        return _.isObject(item);
      })
      ) {
        mainIndex = _.findIndex(data, function (item) {
          return item.isMain;
        });
      }

      return mainIndex > 0 ? mainIndex : 0;
    };
    return targetModule.extend({
      /**
      * Initializes gallery with configuration options.
      */
      initGallery: function () {
        var breakpoints = {},
          settings = this.settings,
          config = this.config,
          tpl = template(galleryTpl, {
            nextLabel: $t('Next'),
            previousLabel: $t('Previous'),
            exitFullScreenLabel: $t('Exit fullscreen'),
            zoomInLabel: $t('Zoom in'),
            zoomOutLabel: $t('Zoom out')
          }),
          mainImageIndex,
          $element = settings.$element,
          $fotoramaElement,
          $fotoramaStage;

        if (settings.breakpoints) {
          _.each(_.values(settings.breakpoints), function (breakpoint) {
            var conditions;

            _.each(_.pairs(breakpoint.conditions), function (pair) {
              conditions = conditions ? conditions + ' and (' + pair[0] + ': ' + pair[1] + ')' :
                '(' + pair[0] + ': ' + pair[1] + ')';
            });
            breakpoints[conditions] = breakpoint.options;
          });
          settings.breakpoints = breakpoints;
        }

        _.extend(config, config.options,
          {
            options: undefined,
            click: false,
            breakpoints: null
          }
        );
        settings.currentConfig = config;

        $element
          .css('min-height', settings.$element.height())
          .append(tpl);

        $fotoramaElement = $element.find('[data-gallery-role="gallery"]');

        $fotoramaStage = $fotoramaElement.find('.fotorama__stage');
        $fotoramaStage.css('position', 'absolute');

        $fotoramaElement.fotorama(config);
        $fotoramaElement.find('.fotorama__stage__frame.fotorama__active')
          .one('f:load', function () {
            // Remove placeholder when main gallery image loads.
            $element.find('.gallery-placeholder__image').remove();
            $element
              .removeClass('_block-content-loading')
              .css('min-height', '');

            $fotoramaStage.css('position', '');
          });
        settings.$elementF = $fotoramaElement;
        settings.fotoramaApi = $fotoramaElement.data('fotorama');

        $.extend(true, config, this.startConfig);

        mainImageIndex = getMainImageIndex(config.data);

        if (mainImageIndex) {
          this.settings.fotoramaApi.show({
            index: mainImageIndex,
            time: 0
          });
        }
      },
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
