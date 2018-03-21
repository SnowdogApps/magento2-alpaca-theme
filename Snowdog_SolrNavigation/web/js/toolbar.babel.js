define([
  "jquery",
  "jquery/ui"
], function($) {

  // ProductListToolbarForm Widget
  // it's setting cookie and submitting form according to toolbar controls
  $.widget('snowdog.productListToolbarForm', {

      options: {
          modeControl: '[data-role="mode-switcher"]',
          mode: 'mode',
          modeDefault: 'grid',
          url: ''
      },

      _create: function () {
          this._bind($(this.options.modeControl), this.options.mode, this.options.modeDefault);
      },

      _bind: function (element, paramName, defaultValue) {
        element.on('click', {paramName: paramName, default: defaultValue}, $.proxy(this._processLink, this));
      },

      _processLink: function (event) {
          event.preventDefault();
          this.changeUrl(
              event.data.paramName,
              $(event.currentTarget).data('value'),
              event.data.default
          );
      },

      changeUrl: function (paramName, paramValue, defaultValue) {
          var decode = window.decodeURIComponent,
              optionsUrl = this.options.url;

          if (optionsUrl === '') {
              optionsUrl = window.location.href;
          }

          var urlPaths = optionsUrl.split('?'),
              baseUrl = urlPaths[0],
              urlParams = urlPaths[1] ? urlPaths[1].split('&') : [],
              paramData = {},
              parameters;
          for (var i = 0; i < urlParams.length; i++) {
              parameters = urlParams[i].split('=');
              paramData[decode(parameters[0])] = parameters[1] !== undefined
                  ? decode(parameters[1].replace(/\+/g, '%20'))
                  : '';
          }
          paramData[paramName] = paramValue;
          if (paramValue == defaultValue) {
              delete paramData[paramName];
          }
          paramData = $.param(paramData);

          location.href = baseUrl + (paramData.length ? '?' + paramData : '');
      }
  });
  return $.snowdog.productListToolbarForm;
});
