define([
  'jquery',
  'underscore',
  'mage/template',
  'mage/translate',
  'priceUtils',
  'select2'
], function ($, _, mageTemplate, $t, priceUtils, select2) {
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
          selectClass: 'select__field',
          moreButton: 'swatch-more',
          loader: 'swatch-option-loading',
          initLoader: 'loader'
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
        selectorProductTile: '[class*="-item__swatches"]',
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
        // special price wrapper selector
        specialPriceWrapper: '.price__wrapper',
        // sly-final-price block selector
        slyFinalPriceSelector: '.sly-final-price',
        // sly-old-price block selector
        slyOldPriceSelector: '.sly-old-price',
        // tier prise selectors start
        tierPriceTemplateSelector: '#tier-prices-template',
        tierPriceBlockSelector: '[data-role="tier-price-block"]',
        tierPriceTemplate: '',
        // tier prise selectors end
        // A price label selector
        normalPriceLabelSelector: '.product-info-main .normal-price .price-label',
        // option for select2 lib
        select2options: {
          minimumResultsForSearch: Infinity,
          width: null,
          position: 'bottom',
        },
      },
      /**
        * Callback for product media
        *
        * @param {Object} $this
        *
        * @param {Object} response
        * @param {String} response.large
        * @param {String} response.medium
        * @param {String} response.small
        * @param {String=} response.large_webp
        * @param {String=} response.medium_webp
        * @param {String=} response.small_webp
        * @param {Boolean} isInProductView
        * @private
      */
      _ProductMediaCallback: function ($this, response, isInProductView) {
        var $main = isInProductView ? $this.parents('.column.main') : $this.parents('.product-item-info'),
          $widget = this,
          images = [],

          /**
           * Check whether object supported or not
           *
           * @param {Object} e
           * @returns {*|Boolean}
           */
          support = function (e) {
            return e.hasOwnProperty('large') && e.hasOwnProperty('medium') && e.hasOwnProperty('small');
          };

        if (_.size($widget) < 1 || !support(response)) {
          this.updateBaseImage(this.options.mediaGalleryInitial, $main, isInProductView);

          return;
        }


        // SNOWDOG CHANGES START
        // With yireo/webp-images response is also
        // returning .webp files
        images.push({
          full: response.large,
          img: response.medium,
          thumb: response.small,
          isMain: true,
          full_webp: response.large_webp,
          img_webp: response.medium_webp,
          thumb_webp: response.small_webp
        });

        if (response.hasOwnProperty('gallery')) {
          $.each(response.gallery, function () {
            if (!support(this) || response.large === this.large) {
              return;
            }
            images.push({
              full: this.large,
              img: this.medium,
              thumb: this.small,
              full_webp: this.large_webp,
              img_webp: this.medium_webp,
              thumb_webp: this.small_webp
            });
          });
        }
        // SNOWDOG CHANGES END

        this.updateBaseImage(images, $main, isInProductView);
      },
      /**
        * Update [gallery-placeholder] or [product-image-photo]
         * @param {Array} images
         * @param {jQuery} context
         * @param {Boolean} isInProductView
      */
      updateBaseImage: function (images, context, isInProductView) {
        var justAnImage = images[0],
          initialImages = this.options.mediaGalleryInitial,
          imagesToUpdate,
          gallery = context.find(this.options.mediaGallerySelector).data('gallery'),
          isInitial;


        if (isInProductView) {
          if (_.isUndefined(gallery)) {
            context.find(this.options.mediaGallerySelector).on('gallery:loaded', function () {
              this.updateBaseImage(images, context, isInProductView);
            }.bind(this));

            return;
          }

          imagesToUpdate = images.length ? this._setImageType($.extend(true, [], images)) : [];
          isInitial = _.isEqual(imagesToUpdate, initialImages);

          if (this.options.gallerySwitchStrategy === 'prepend' && !isInitial) {
            imagesToUpdate = imagesToUpdate.concat(initialImages);
          }

          imagesToUpdate = this._setImageIndex(imagesToUpdate);

          gallery.updateData(imagesToUpdate);
          this._addFotoramaVideoEvents(isInitial);
        } else if (justAnImage && (justAnImage.img)) {
          // SNOWDOG CHANGES START
          // When swatch was loading an image it only loaded .jpg
          // so we need add basic support for .webp images
          context.find('img.product-image-photo').attr(
            {
              'src': justAnImage.img_webp ? justAnImage.img_webp : justAnImage.img,
              'data-src': justAnImage.img_webp ? justAnImage.img_webp : justAnImage.img,
              'srcset': justAnImage.img_webp ? justAnImage.img_webp : justAnImage.img,
            }
          );
          if (justAnImage.img_webp) {
            context
              .find('picture.product-image-photo source[type="image/webp"]')
              .attr(
                {
                  'data-src': justAnImage.img_webp,
                  'srcset': justAnImage.img_webp,
                }
              )
          }
          // SNOWDOG CHANGES END
        }
      },
      _determineProductData: function () {
        // Check if product is in a list of products.
        var productId,
          isInProductView = false;

        productId = this.element
          .parents('[class*="-item__swatches"]')
          .find('.price-box.price-final_price')
          .attr('data-product-id');

        if (!productId) {
          // Check individual product.
          productId = $('[name=product]').val();
          isInProductView = productId > 0;
        }

        return {
          productId: productId,
          isInProductView: isInProductView,
        };
      },
      _RenderControls: function () {
        var $widget = this,
          container = this.element,
          classes = this.options.classes,
          chooseText = this.options.jsonConfig.chooseText,
          showTooltip = this.options.showTooltip,
          $product = $widget.element.parents($widget.options.selectorProduct),
          prices = $widget._getNewPrices(),
          productData = this._determineProductData();

        $widget.optionsMap = {};

        $.each(this.options.jsonConfig.attributes, function () {
          var item = this,
            controlLabelId = 'option-label-' + productData.productId + '-' + item.code + '-' + item.id,
            options = $widget._RenderSwatchOptions(item, controlLabelId),
            select = $widget._RenderSwatchSelect(item, chooseText),
            input = $widget._RenderFormInput(item, productData),
            listLabel = '',
            label = '',
            initLoader = container.find($('.' + $widget.options.classes.initLoader)) ;

          // Show only swatch controls
          if ($widget.options.onlySwatches && !$widget.options.jsonSwatchConfig.hasOwnProperty(item.id)) {
            return;
          }

          if ($widget.options.enableControlLabel) {
            label +=
              '<span id="' + controlLabelId + '" class="' + classes.attributeLabelClass + '">' +
              $('<i></i>').text(item.label).html() +
              '</span>' +
              '<span class="' + classes.attributeSelectedOptionLabelClass + '"></span>';
          }

          if ($widget.inProductList) {
            $widget.productForm.append(input);
            input = '';
            listLabel = 'aria-label="' + $('<i></i>').text(item.label).html() + '"';
          } else {
            listLabel = 'aria-labelledby="' + controlLabelId + '"';
          }

          // Create new control

          if (initLoader.hasClass('loader--visible')) {
            initLoader.removeClass('loader--visible');
          }
          container.append(
            '<div class="swatch-attribute ' + classes.attributeClass + ' ' + item.code + '" ' +
                  'data-attribute-code="' + item.code + '" ' +
                  'data-attribute-id="' + item.id + '">' +
                label +
                '<div aria-activedescendant="" ' +
                      'tabindex="0" ' +
                      'aria-invalid="false" ' +
                      'aria-required="true" ' +
                      'role="listbox" ' + listLabel +
                      'class="' + classes.attributeOptionsWrapper + ' clearfix">' +
                    options + select +
                '</div>' + input +
            '</div>'
          );

          $widget.optionsMap[item.id] = {};

          // Aggregate options array to hash (key => value)
          $.each(item.options, function () {
            if (this.products.length > 0) {
              $widget.optionsMap[item.id][this.id] = {
                price: parseInt(
                  $widget.options.jsonConfig.optionPrices[this.products[0]].finalPrice.amount,
                  10
                ),
                products: this.products
              };
            }
          });
        });

        if (showTooltip === 1) {
          // Connect Tooltip
          container
            .find('[data-option-type="1"], [data-option-type="2"],' +
              ' [data-option-type="0"], [data-option-type="3"]')
            .SwatchRendererTooltip();
        }

        // Hide all elements below more button
        $('.' + classes.moreButton).nextAll().hide();

        // Display special price
        $widget._updateSpecialPrice(prices);
        $product.find(this.options.specialPriceWrapper).removeClass('display-none');

        // Handle events like click or change
        $widget._EventListener();

        // Rewind options
        $widget._Rewind(container);

        //Emulate click on all swatches from Request
        $widget._EmulateSelected($.parseQuery());
        $widget._EmulateSelected($widget._getSelectedAttributes());

        var selectSwatch = $(container.find('.' + $widget.options.classes.selectClass));

        $(selectSwatch).select2($widget.options.select2options);
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

        $.each(config.options, function (index) {
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
            ' index="' + index + '"' +
            ' aria-selected="false"' +
            ' aria-checked="false"' +
            ' tabindex="0"' +
            ' data-option-type="' + type + '"' +
            ' data-option-id="' + id + '"' +
            ' data-option-label="' + label + '"' +
            ' aria-label="' + config.code + ' ' + label + '"' +
            ' role="option"';

          attr += thumb !== '' ? ' data-option-tooltip-thumb="' + thumb + '"' : '';
          attr += value !== '' ? ' data-option-tooltip-value="' + value + '"' : '';

          if (!this.hasOwnProperty('products') || this.products.length <= 0) {
            attr += ' data-option-empty="true"';
          }

          html += '<div class="swatch-option ' + optionContainerClass + '" ' + attr + '><div class="' + optionClass;
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
          html += '</div></div>';
        });

        return html;
      },
      _RenderSwatchSelect: function (config, chooseText) {
        var html;

        if (this.options.jsonSwatchConfig.hasOwnProperty(config.id)) {
          return '';
        }

        html =
            '<select class="' + this.options.classes.selectClass + ' ' + config.code + '">' +
            '<option value="0" data-option-id="0">' + chooseText + '</option>';

        $.each(config.options, function () {
          var label = this.label,
              attr = ' value="' + this.id + '" data-option-id="' + this.id + '"';

          if (!this.hasOwnProperty('products') || this.products.length <= 0) {
            attr += ' data-option-empty="true"';
          }

          html += '<option ' + attr + '>' + label + '</option>';
        });

        html += '</select>';

        return html;
      },
      /**
         * Input for submit form.
         * This control shouldn't have "type=hidden", "display: none" for validation work :(
         *
         * @param {Object} config
         * @private
         */
        _RenderFormInput: function (config, productData) {
          return '<input class="swatch-input ' + this.options.classes.attributeInput + ' super-attribute-select" ' +
            'name="super_attribute[' + config.id + ']" ' +
            'type="text" ' +
            'value="" ' +
            'data-selector="super_attribute[' + config.id + ']" ' +
            'data-validate="{required: true}" ' +
            'data-product="' + productData.productId + '"' +
            'aria-required="true" ' +
            'aria-invalid="false" ' +
            'aria-hidden="true" ' +
            'tabindex="-1">';
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
          attributeId = $parent.data('attribute-id'),
          $input = $parent.find('.' + $widget.options.classes.attributeInput),
          $priceBox = $widget.element.parents($widget.options.selectorProduct)
            .find(this.options.selectorProductPrice);

        if ($widget.inProductList) {
          $input = $widget.productForm.find(
            '.' + $widget.options.classes.attributeInput + '[name="super_attribute[' + attributeId + ']"]'
          );
        }

        if ($this.hasClass('disabled')) {
          return;
        }

        if ($this.hasClass('selected')) {
          $parent.removeAttr('data-option-selected').find('.selected').removeClass('selected');
          $input.val('');
          $label.text('');
          $this.attr('aria-selected', false);
        } else {
          $parent.attr('data-option-selected', $this.data('option-id')).find('.selected').removeClass('selected');
          $label.text($this.data('option-label'));
          $input.val($this.data('option-id'));
          $input.attr('data-attr-name', this._getAttributeCodeById(attributeId));
          $this.addClass('selected');
          $widget._toggleCheckedAttributes($this, $wrapper);
        }

        $widget._Rebuild();

        if ($priceBox.is(':data(mage-priceBox)')) {
          $widget._UpdatePrice();
        }

        $(document).trigger('updateMsrpPriceBlock',
          [
            this._getSelectedOptionPriceIndex(),
            $widget.options.jsonConfig.optionPrices,
            $priceBox
          ]
        );

        $widget._loadMedia();
        $input.trigger('change');
      },
      _toggleCheckedAttributes: function ($this, $wrapper) {
        $wrapper.attr('aria-activedescendant', $this.attr('id'))
          .find('.' + this.options.classes.optionContainerClass).attr('aria-selected', false);
        $this.attr('aria-selected', true);
      },
      _Rebuild: function () {
        var $widget = this,
          controls = $widget.element.find('.' + $widget.options.classes.attributeClass + '[data-attribute-id]'),
          selected = controls.filter('[data-option-selected]');

        // Enable all options
        $widget._Rewind(controls);

        // done if nothing selected
        if (selected.length <= 0) {
          return;
        }

        // Disable not available options
        controls.each(function () {
          var $this = $(this),
            id = $this.data('attribute-id'),
            products = $widget._CalcProducts(id);

          if (selected.length === 1 && selected.first().data('attribute-id') === id) {
            return;
          }

          $this.find('[data-option-id]').each(function () {
            var $element = $(this),
              option = $element.data('option-id');

            if (!$widget.optionsMap.hasOwnProperty(id) || !$widget.optionsMap[id].hasOwnProperty(option) ||
              $element.hasClass('selected') ||
              $element.is(':selected')) {
              return;
            }

            if (_.intersection(products, $widget.optionsMap[id][option].products).length <= 0) {
              $element.attr('disabled', true).addClass('disabled');

              // rebuild select with select2 lib to set disabled options
              var selectSwatch = $widget.element.find('.' + $widget.options.classes.selectClass);
              $(selectSwatch).select2($widget.options.select2options);
            }
          });
        });
      },
      _UpdatePrice: function () {
        var $widget = this,
          $product = $widget.element.parents($widget.options.selectorProduct),
          $productPrice = $product.find(this.options.selectorProductPrice),
          options = _.object(_.keys($widget.optionsMap), {}),
          newPrices,
          result,
          tierPriceHtml;

        $widget.element.find('.' + $widget.options.classes.attributeClass + '[data-option-selected]').each(function () {
          var attributeId = $(this).data('attribute-id');

          options[attributeId] = $(this).attr('data-option-selected');
        });

        newPrices = $widget.options.jsonConfig.optionPrices[_.findKey($widget.options.jsonConfig.index, options)];

        $productPrice.trigger(
          'updatePrice', {
            'prices': $widget._getPrices(newPrices, $productPrice.priceBox('option').prices)
          }
        );

        result = newPrices ? newPrices : $widget._getNewPrices();

        $widget._updateSpecialPrice(result);

        if (typeof newPrices != 'undefined' && result.tierPrices.length) {
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
      _updateSpecialPrice: function(result) {
        var $widget = this,
          $product = $widget.element.parents($widget.options.selectorProduct),
          $productSlyOldPriceSelector = $product.find(this.options.slyOldPriceSelector),
          $productSlyFinalPriceSelector = $product.find(this.options.slyFinalPriceSelector);

        if (result.oldPrice.amount !== result.finalPrice.amount) {
          $productSlyOldPriceSelector.show();
          $productSlyFinalPriceSelector.addClass('price__value--special');
          $productSlyFinalPriceSelector.removeClass('price__value--normal');
        } else {
          $productSlyOldPriceSelector.hide();
          $productSlyFinalPriceSelector.removeClass('price__value--special');
          $productSlyFinalPriceSelector.addClass('price__value--normal');
        }
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
