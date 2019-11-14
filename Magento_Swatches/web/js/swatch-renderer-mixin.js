define([
  'jquery',
  'underscore',
  'mage/template',
  'mage/translate',
  'priceUtils',
], function ($, _, mageTemplate, $t, priceUtils) {
  'use strict';

  return function (widget) {
    $.widget('mage.SwatchRenderer', widget, {
      options: {
        classes: {
          attributeClass: 'swatch',
          attributeLabelClass: 'swatch__title product-view__swatch-option-title',
          attributeSelectedOptionLabelClass: 'swatch__selected-option',
          attributeOptionsWrapper: 'swatch__wrapper',
          attributeInput: 'swatch__input',
          optionClass: 'swatch__option',
          optionContainerClass: 'swatch__option-container',
          selectClass: 'swatch-select',
          moreButton: 'swatch-more',
          loader: 'swatch-option-loading'
        },
        // option's json config
        jsonConfig: {},
        // swatch's json config
        jsonSwatchConfig: {},
        // selector of parental block of prices and swatches (need to know where to seek for price block)
        selectorProduct: '.product-info-main',
        // selector of price wrapper (need to know where set price)
        selectorProductPrice: '[data-role=priceBox]',
        //selector of product images gallery wrapper
        mediaGallerySelector: '[data-gallery-role=gallery-placeholder]',
        // selector of category product tile wrapper
        selectorProductTile: '.product-item-details',
        // number of controls to show (false or zero = show all)
        numberToShow: false,
        // show only swatch controls
        onlySwatches: false,
        // enable label for control
        enableControlLabel: true,
        // control label id
        controlLabelId: '',
        // text for more button
        moreButtonText: $t('More'),
        // Callback url for media
        mediaCallback: '',
        // Local media cache
        mediaCache: {},
        // Cache for BaseProduct images. Needed when option unset
        mediaGalleryInitial: [{}],
        // Use ajax to get image data
        useAjax: false,
        /**
         * Defines the mechanism of how images of a gallery should be
         * updated when user switches between configurations of a product.
         *
         * As for now value of this option can be either 'replace' or 'prepend'.
         *
         * @type {String}
         */
        gallerySwitchStrategy: 'replace',
        // whether swatches are rendered in product list or on product page
        inProductList: false,
        // sly-old-price block selector
        slyOldPriceSelector: '.sly-old-price',
        // tier prise selectors start
        tierPriceTemplateSelector: '#tier-prices-template',
        tierPriceBlockSelector: '[data-role="tier-price-block"]',
        tierPriceTemplate: '',
        // tier prise selectors end
        // A price label selector
        normalPriceLabelSelector: '.normal-price .price-label'
      },
      _RenderSwatchOptions: function (config, controlId) {
        var optionConfig = this.options.jsonSwatchConfig[config.id],
          optionClass = this.options.classes.optionClass,
          optionContainerClass = this.options.classes.optionContainerClass,
          moreLimit = parseInt(this.options.numberToShow, 10),
          moreClass = this.options.classes.moreButton,
          moreText = this.options.moreButtonText,
          countAttributes = 0,
          html = '';

        if (!this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
          return '';
        }

        $.each(config.options, function () {
          var id,
            type,
            value,
            thumb,
            label,
            attr;

          if (!optionConfig.hasOwnProperty(this.id)) {
            return '';
          }

          // Add more button
          if (moreLimit === countAttributes++) {
            html += '<a href="#" class="' + moreClass + '">' + moreText + '</a>';
          }

          id = this.id;
          type = parseInt(optionConfig[id].type, 10);
          value = optionConfig[id].hasOwnProperty('value') ? optionConfig[id].value : '';
          thumb = optionConfig[id].hasOwnProperty('thumb') ? optionConfig[id].thumb : '';
          label = this.label ? this.label : '';
          attr =
            ' id="' + controlId + '-item-' + id + '"' +
            ' aria-selected="false"' +
            ' aria-describedby="' + controlId + '"' +
            ' tabindex="0"' +
            ' option-type="' + type + '"' +
            ' option-id="' + id + '"' +
            ' option-label="' + label + '"' +
            ' aria-label="' + label + '"' +
            ' option-tooltip-thumb="' + thumb + '"' +
            ' option-tooltip-value="' + value + '"' +
            ' role="option"';

          if (!this.hasOwnProperty('products') || this.products.length <= 0) {
            attr += ' option-empty="true"';
          }

          html += '<div class="' + optionContainerClass + '" ' + attr + '><div class="' + optionClass;
          if (type === 0) {
            // Text
            html += '">' + (value ? value : label);
          } else if (type === 1) {
            // Color
            if (value === '#ffffff') {
              html += ' ' + optionClass + '--white';
            }
            html += '" style="background-color: ' + value + '">';
          } else if (type === 2) {
            // Image
            html += ' ' + optionClass + '--image"' + ' style="background-image: url(' + value + ')">';
          } else if (type === 3) {
            // Clear
            html += '">';
          } else {
            // Default
            html += '">' + label;
          }
          html += '</div></div>'
        });

        return html;
      },
      _EventListener: function () {
        var $widget = this,
          options = this.options.classes,
          target;

        $widget.element.on('click', '.' + options.optionContainerClass, function () {
          return $widget._OnClick($(this), $widget);
        });

        $widget.element.on('change', '.' + options.selectClass, function () {
          return $widget._OnChange($(this), $widget);
        });

        $widget.element.on('click', '.' + options.moreButton, function (e) {
          e.preventDefault();

          return $widget._OnMoreClick($(this));
        });

        $widget.element.on('keydown', function (e) {
          if (e.which === 13) {
            target = $(e.target);

            if (target.is('.' + options.optionContainerClass)) {
              return $widget._OnClick(target, $widget);
            } else if (target.is('.' + options.selectClass)) {
              return $widget._OnChange(target, $widget);
            } else if (target.is('.' + options.moreButton)) {
              e.preventDefault();

              return $widget._OnMoreClick(target);
            }
          }
        });
      },
      _OnClick: function ($this, $widget) {
        var $parent = $this.parents('.' + $widget.options.classes.attributeClass),
          $wrapper = $this.parents('.' + $widget.options.classes.attributeOptionsWrapper),
          $label = $parent.find('.' + $widget.options.classes.attributeSelectedOptionLabelClass),
          attributeId = $parent.attr('attribute-id'),
          $input = $parent.find('.' + $widget.options.classes.attributeInput);

        if ($widget.inProductList) {
          $input = $widget.productForm.find(
            '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
          );
        }

        if ($this.hasClass('disabled')) {
          return;
        }

        if ($this.hasClass('selected')) {
          $parent.removeAttr('option-selected').find('.selected').removeClass('selected');
          $input.val('');
          $label.text('');
          $this.attr('aria-selected', false);
        } else {
          $parent.attr('option-selected', $this.attr('option-id')).find('.selected').removeClass('selected');
          $label.text($this.attr('option-label'));
          $input.val($this.attr('option-id'));
          $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
          $this.addClass('selected');
          $widget._toggleCheckedAttributes($this, $wrapper);
        }

        $widget._Rebuild();

        if ($widget.element.parents($widget.options.selectorProduct)
          .find(this.options.selectorProductPrice).is(':data(mage-priceBox)')
        ) {
          $widget._UpdatePrice();
        }

        $widget._loadMedia();
        $input.trigger('change');
      },
      _toggleCheckedAttributes: function ($this, $wrapper) {
        $wrapper.attr('aria-activedescendant', $this.attr('id'))
          .find('.' + this.options.classes.optionContainerClass).attr('aria-selected', false);
        $this.attr('aria-selected', true);
      },
      _UpdatePrice: function () {
        var $widget = this,
          $product = $widget.element.parents($widget.options.selectorProduct),
          $productPrice = $product.find(this.options.selectorProductPrice),
          options = _.object(_.keys($widget.optionsMap), {}),
          result,
          tierPriceHtml;

        $widget.element.find('.' + $widget.options.classes.attributeClass + '[option-selected]').each(function () {
          var attributeId = $(this).attr('attribute-id');

          options[attributeId] = $(this).attr('option-selected');
        });

        result = $widget.options.jsonConfig.optionPrices[_.findKey($widget.options.jsonConfig.index, options)];

        $productPrice.trigger(
          'updatePrice', {
            'prices': $widget._getPrices(result, $productPrice.priceBox('option').prices)
          }
        );

        if (typeof result != 'undefined' && result.oldPrice.amount !== result.finalPrice.amount) {
          $(this.options.slyOldPriceSelector).show();
        } else {
          $(this.options.slyOldPriceSelector).hide();
        }

        if (typeof result != 'undefined' && result.tierPrices.length) {
          if (this.options.tierPriceTemplate) {
            tierPriceHtml = mageTemplate(
              this.options.tierPriceTemplate, {
                'tierPrices': result.tierPrices,
                '$t': $t,
                'currencyFormat': this.options.jsonConfig.currencyFormat,
                'priceUtils': priceUtils
              }
            );
            $(this.options.tierPriceBlockSelector).html(tierPriceHtml).show();
          }
        } else {
          $(this.options.tierPriceBlockSelector).hide();
        }

        $(this.options.normalPriceLabelSelector).hide();

        _.each($('.' + this.options.classes.attributeOptionsWrapper), function (attribute) {
          if ($(attribute).find('.' + this.options.classes.optionContainerClass + '.selected').length === 0) {
            if ($(attribute).find('.' + this.options.classes.selectClass).length > 0) {
              _.each($(attribute).find('.' + this.options.classes.selectClass), function (dropdown) {
                if ($(dropdown).val() === '0') {
                  $(this.options.normalPriceLabelSelector).show();
                }
              }.bind(this));
            } else {
              $(this.options.normalPriceLabelSelector).show();
            }
          }
        }.bind(this));
      },
      _EnableProductMediaLoader: function ($this) {
        var $widget = this;

        if ($('body.catalog-product-view').length > 0) {
          $this.parents('.column.main').find('.photo.image')
            .addClass($widget.options.classes.loader);
        } else {
          //Category View
          $this.parents('.product-item-details')
            .find('.lazyload-wrapper')
            .append('<div class="loader loader--visible"><div class="loader__circle"></div></div>');
        }
      },
      _DisableProductMediaLoader: function ($this) {
        var $widget = this;

        if ($('body.catalog-product-view').length > 0) {
          $this.parents('.column.main').find('.photo.image')
            .removeClass($widget.options.classes.loader);
        } else {
          //Category View
          $this.parents('.product-item-details').find('.loader').remove();
        }
      }
    });

    return $.mage.SwatchRenderer;
  }
});
