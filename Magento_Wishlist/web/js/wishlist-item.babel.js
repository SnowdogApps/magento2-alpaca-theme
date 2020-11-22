define([
  'jquery',
  'Magento_Customer/js/customer-data',
  'mage/url',
  'mage/cookies',
  'domReady'
], function ($, customerData, url) {
  'use strict';

  return function(config, elem) {
    const button                 = elem,
      customer                   = customerData.get('customer'),
      wishlist                   = customerData.get('wishlist'),
      items                      = wishlist().items,
      productId                  = config.addToParams.data.product.toString(),
      buttonClass                = config.class,
      isEEVersion                = config.isEEVersion,
      loginUrl                   = url.build('customer/account'),
      productViewWrapperClass    = '.product-view__wrapper',
      pdpButtonClass             = 'product-view__button--wishlist',
      swatchContainerClass       = `.swatch-opt-${productId}`,
      swatchOptionContainerClass = '.swatch',
      multiwishlistButtonClass   = `.multiwishlist-btn-${productId}`;

    function addButtonClass() {
      if (isEEVersion) {
        const multiwishlistBtn = document.querySelector(multiwishlistButtonClass);

        multiwishlistBtn.classList.add(buttonClass);
      } else {
        button.classList.add(buttonClass);
      }
    }

    function moreWishlistButton() {
      // for PDP on OS - if is on product view,
      // add class to all add to wishlist buttons
      if (button.classList.contains(pdpButtonClass)) {
        const pdpButton = document.querySelector(`.${pdpButtonClass}`)

        pdpButton.classList.add(buttonClass);
      }
    }

    function addElementData(data, key, value) {
      if (key.substr(key.length - 2) == '[]') {
        key = key.substring(0, key.length - 2);
        data[`${key}[${value}]`] = value;
      } else {
        data[key] = value;
      }

      return data;
    }

    button.addEventListener('click', () => {
      const url = config.addToParams.action,
        formKey = $.mage.cookies.get('form_key'),
        productViewWrapper = document.querySelector(productViewWrapperClass),
        wishlistId = config.addToParams.data.wishlist_id,
        swatchContainer = document.querySelector(swatchContainerClass),
        data = {
          action: 'add-to-wishlist',
          form_key: formKey,
          product: productId,
          uenc: config.addToParams.data.uenc
        };

      // for condfigurable products
      // add options if selected
      if (swatchContainer) {
        const swatchOptionContainerArray = swatchContainer.querySelectorAll(swatchOptionContainerClass);

        swatchOptionContainerArray.forEach(swatchOptionContainer => {
          if (swatchOptionContainer.hasAttribute('option-selected')) {
            const key = `super_attribute[${swatchOptionContainer.getAttribute('attribute-id')}]`,
              value = swatchOptionContainer.getAttribute('option-selected');

            data[key] = value;
          }
        });
      }

      // if it's PDP, add selected options (other than swatches)
      // avoid adding options if it's not the main product
      // (i.e. it's in related products widget)
      if (productViewWrapper && productViewWrapper.contains(button)) {
        const inputArray = productViewWrapper.querySelectorAll('input'),
          selectArray = productViewWrapper.querySelectorAll('select');

        inputArray.forEach(input => {
          if (input.checked || input.type === 'number') {
            const key = input.getAttribute('name'),
              value = input.value;

            addElementData(data, key, value);
          }
        })

        selectArray.forEach(select => {
          const key = select.getAttribute('name'),
            selectOptionArray = select.querySelectorAll('option');

            selectOptionArray.forEach(selectOption => {
              if (selectOption.selected) {
                const value = selectOption.value;

                addElementData(data, key, value);
              }
            })
        })
      }

      // if it's EE
      // add item to the specified list
      if (wishlistId) {
        data['wishlist_id'] = wishlistId;
      }

      $.post(url, data).done(function() {
        if (customer().firstname) {
          const addToMessage = $.cookieStorage.get('mage-messages');
          // add class to mark that product is added to wishlist
          if (addToMessage[0].type === 'success') {
            addButtonClass();
            moreWishlistButton();
            // delay is needed, because M2 reload customer data
            // and msg dissapear after a second
            setTimeout(function() {
              customerData.set('messages', {
                messages: addToMessage
              });
              // remove msg from cookie to not show after reload the page
              $.cookieStorage.set('mage-messages', '');
            }, 2000);
          }
        }
        else {
          window.location.href = loginUrl;
        }
      });
    });

    if (items) {
      items.forEach(item => {
        if (item.product_id === productId) {
          addButtonClass();
        }
      });
    }
  };
});
