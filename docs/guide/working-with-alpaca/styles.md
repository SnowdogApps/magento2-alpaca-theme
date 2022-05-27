# Styles
As explained in [Components](/guide/working-with-alpaca/components.html), component related styles are located in `Snowdog_Components` directory.

These styles are also imported in `styles` directory so that they can be used across the whole theme.

## Architecture
Here's an overview of main style files that are compiled into CSS files and loaded in Magento:
```
theme-frontend-alpaca/
├── styles/
│   ├── critical.scss
│   ├── styles.scss
│   ├── critical-checkout.scss
│   ├── gallery-styles.scss
│   ├── email.scss
│   ├── email-inline.scss
│   └── ...
└──  Magento_Checkout
│   ├── styles/
│   │   └── checkout.scss
```

**All of these files include component global variables and mixins. Additionally:**
* `critical.scss` includes component and theme styles for above-the-fold content that's loaded inline ([learn about Critical CSS](https://web.dev/extract-critical-css/))
* `styles.scss` includes non-critical component and theme styles

The above files aren't loaded in checkout. Instead, checkout-specific files are used:
* `critical-checkout.scss` includes checkout-specific component and theme styles for above-the-fold content that's loaded inline
* `checkout.scss` includes checkout-specific non-critical component and theme styles

Gallery and email styles are also separated:
* `gallery-styles.scss` includes styles for fotorama gallery
* `email-inline.scss` includes inline styles for email
* `email.scss` includes styles for email



## Animate elements on scroll
Alpaca includes [AOS - Animate on scroll library](https://github.com/michalsnik/aos/tree/v2).

We use it for:
* [Messages](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Theme/templates/messages.phtml)
* [Tabs on product page](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Catalog/templates/product/view/details.phtml)
* [Sticky add to cart on product page](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Catalog/templates/product/view/addtocart-sticky.phtml)
