define([
  'ko',
  'jquery',
  'underscore',
  'mage/template',
  'Magento_Catalog/js/price-utils',
  'Magento_Ui/js/lib/knockout/template/loader',
  'Magento_Ui/js/modal/modal',
  'mage/translate',
  'Magento_Search/js/form-mini'
], function (ko, $, _, mageTemplate, priceUtil, templateLoader) {
  'use strict';

  return function (widget) {
    $.widget('snowdog.quickSearch', widget, {

      _getResultWrapper: function () {
        return $('<div class="quicksearch__content"></div>');
      },

      _getProductsWrapper: function () {
        return $('<ul class="quicksearch__list quicksearch__list--column"></ul>');
      },

      _getSidebarWrapper: function () {
        return $('<div class="quicksearch__sidebar-column"></div>');
      },

      _renderSearchHeader: function(query) {
        const data = {
          type: 'results_header',
          query: query,
          text: $.mage.__('Results for your request')
        };

        return this._renderItem(data, 0);
      },

      _renderSearchFooter: function(query) {
        const data = {
          type: 'results_footer',
          link: {
            text: $.mage.__('See all'),
            href: `/catalogsearch/result?q=${query}`,
            title: $.mage.__('See all results')
          }
        };

        return this._renderItem(data, 0);
      },

      _renderCloseButton: function() {
        const data = {
          type: 'close_button',
          title: $.mage.__('Close quicksearch'),
          href: require.toUrl('images/icons-sprite.svg#close')
        };

        return this._renderItem(data, 0);
      },

      _initTitleRenderer: function() {
        this.titleRenderers = {};
        for (var typeIdentifier in this.options.templates) {
          if (typeIdentifier !== 'product' && this.options.templates[typeIdentifier]['titleRenderer']) {
            require([this.options.templates[typeIdentifier]['titleRenderer']], function (renderer) {
              this.component.titleRenderers[this.type] = renderer;
            }.bind({component: this, type: typeIdentifier}));
          }
        }
      },

      _getSidebarSection: function(type, data) {
        var title = '';
        var section = $('<ul class="quicksearch__list quicksearch__sidebar-list"></ul>');

        if (type !== undefined) {
          title = this._getSidebarTitle(type, data);
          section.append(title);
          section.attr('aria-labelledby', 'qs-' + type + '-title');
        }

        return section;
      },

      _getSidebarTitle: function(type, data) {
        var title = '';
        var heading = $('<h3 id="qs-' + type + '-title" class="quicksearch__sidebar-title title-' + type + '"></h3>');

        if (this.titleRenderers && this.titleRenderers[type]) {
          title = heading.html(this.titleRenderers[type].render(data));
        }
        else if (this.options.templates && this.options.templates[type].title) {
          title = heading.html(this.options.templates[type].title);
        }

        return title;
      },

      _onPropertyChange: _.debounce(function () {
        var value = this.element.val();

        this.submitBtn.disabled = this._isEmpty(value);

        if (value.trim().length >= parseInt(this.options.minSearchLength, 10)) {
          this.searchForm.addClass('processing');
          this.currentRequest = $.ajax({
            method: "GET",
            url: this.options.url,
            data:{q: value},
            // This function will ensure proper killing of the last Ajax call.
            // In order to prevent requests of an old request to pop up later and replace results.
            beforeSend: function() { if (this.currentRequest !== null) { this.currentRequest.abort(); }}.bind(this),
            success: $.proxy(function (data) {
              var self = this;
              var lastElement = false;
              var content = this._getResultWrapper();
              var productsWrapper = this._getProductsWrapper();
              var sidebarWrapper = this._getSidebarWrapper();
              var resultsHeader = this._renderSearchHeader(value);
              var resultsFooter = this._renderSearchFooter(value);
              var closeButton = this._renderCloseButton();

              this.autoComplete.empty();

              var products = data.filter(function(el) {
                return el.type === 'product'
              });

              var sidebarElements = data.filter(function(el) {
                return el.type !== 'product'
              });

              $.each(products, function(index, element) {
                var elementHtml = this._renderItem(element, index);

                productsWrapper.append(elementHtml);

                if (!lastElement || (lastElement && lastElement.type !== element.type)) {
                  content.append(productsWrapper);
                }

                lastElement = element;
              }.bind(this));

              $.each(sidebarElements, function(index, element) {
                if (!lastElement || (lastElement && lastElement.type !== element.type)) {
                   var sidebarSection = this._getSidebarSection(element.type, data);
                   var elementHtml = this._renderItem(element, index);

                   sidebarSection.append(elementHtml);
                   sidebarWrapper.append(sidebarSection);
                   content.append(sidebarWrapper);
                }

                lastElement = element;
              }.bind(this));

              if (!products.length) {
                var contentText = $.mage.__('We can\'t find products matching the selection.');
                content.text(contentText);
              }

              this.responseList.indexList = this.autoComplete.html(content)
                .show()
                .find(this.options.responseFieldElements + ':visible');

              this.autoComplete.prepend(resultsHeader);
              if (products.length) {
                this.autoComplete.append(resultsFooter);
              }

              this.autoComplete.append(closeButton);

              this._resetResponseList(false);
              this.element.removeAttr('aria-activedescendant');

              if (this.responseList.indexList.length) {
                this._updateAriaHasPopup(true);
              } else {
                this._updateAriaHasPopup(false);
              }

              $('.quicksearch__close-button').on('click', function (e) {
                self._resetResponseList(true);
                self.autoComplete.hide();
              })

              this.responseList.indexList
                .on('click', function (e) {
                  self.responseList.selected = $(this);
                  if (self.responseList.selected.attr("href")) {
                    window.location.href = self.responseList.selected.attr("href");
                    e.stopPropagation();
                    return false;
                  }
                  self.searchForm.trigger('submit');
                })
                .on('mouseenter mouseleave', function (e) {
                  self.responseList.indexList.removeClass(self.options.selectClass);
                  $(this).addClass(self.options.selectClass);
                  self.responseList.selected = $(e.target);
                  self.element.attr('aria-activedescendant', $(e.target).attr('id'));
                })
                .on('mouseout', function () {
                  if (!self._getLastElement() && self._getLastElement().hasClass(self.options.selectClass)) {
                    $(this).removeClass(self.options.selectClass);
                    self._resetResponseList(false);
                  }
                });
            },this),
            complete : $.proxy(function () {
              this.searchForm.removeClass('processing');
            }, this)
          });
        } else {
          this._resetResponseList(true);
          this.autoComplete.hide();
          this._updateAriaHasPopup(false);
          this.element.removeAttr('aria-activedescendant');
        }
      }, 250)
    });

    return $.snowdog.quickSearch;
  }
});
