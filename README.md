# Alpaca - components & theme for Magento 2.4
## Migration guide for Alpaca theme >= 2.26.0
`2.26.0` version includes a lot of changes and has different files structure, please go to [Migration Guide](.doc/MIGRATION_GUIDE.md) for more informations

Latest Alpaca version supports work with Magento 2.4.3.<br>
If you use lower Magento versionb, check the [Changelog file](../CHANGELOG.md) to decide which version to use.<br>.
## Description
Alpaca Theme for Magento 2 is part of a `alpaca-packages`
To make it work with all features, we use following modules:

Open source
* [magepal/magento2-gmailsmtpapp](https://github.com/magepal/magento2-gmail-smtp-app)
* [magepal/magento2-googletagmanager](https://github.com/magepal/magento2-google-tag-manager)
* [mailchimp/mc-magento2](https://github.com/mailchimp/mc-magento2)
* [smile/elasticsuite](https://github.com/Smile-SA/elasticsuite)
* [snowdog/module-alpaca-general](https://github.com/SnowdogApps/magento2-alpaca-general)
* [snowdog/module-bullet-points](https://github.com/SnowdogApps/magento2-bullet-points)
* [snowdog/module-csp](https://github.com/SnowdogApps/magento2-module-csp)
* [snowdog/module-category-attributes](https://github.com/SnowdogApps/magento2-category-attributes)
* [snowdog/module-menu](https://github.com/SnowdogApps/magento2-menu)
* [snowdog/module-product-attribute-description](https://github.com/SnowdogApps/magento2-product-attribute-description)
* [snowdog/module-shipping-latency](https://github.com/SnowdogApps/magento2-shipping-latency)
* [snowdog/module-wishlist-unlocker](https://github.com/SnowdogApps/magento2-wishlist-unlocker)
* [webshopapps/module-matrixrate](https://github.com/webshopapps/module-matrixrate)

Alpaca supports also following OS modules:
* paradoxlabs/authnetcim
* paradoxlabs/tokenbase
* authorizenet/magento-module-creditcard
* [snowdog/module-alpaca-acm](https://github.com/SnowdogApps/magento2-alpaca-acm) - alpaca customisation for paid `blackbird/contentmanager` extension

Additional, non-opensource modules the theme works with to cover additional features:
* amasty/adminactionslog
* amasty/module-gdpr
* amasty/module-gift-card
* amasty/module-google-rich-snippets
* amasty/module-product-feed
* amasty/module-shipping-rules
* amasty/module-special-promo
* amasty/module-store-locator
* amasty/payrestriction
* amasty/shiprestriction
* apptrian/facebook-pixel
* blackbird/contentmanager
* vladimirpopov/webforms

## What Alpaca is?
Alpaca is a Magento 2 theme based on components system.

### Alpaca features:
* Components system, build with fractal as a separate tool, on which you can work outside of Magento. You can customise it with variables or change and overwrite whole components.
* SVG icons - easily used also in CMS content
* Menu build with [Snowdog Module Menu](https://github.com/SnowdogApps/magento2-menu)
* Optimised images - responsive images, lazyloading, webp, and aspect ratio
* Customisable content with banners
* Sliders build with Blackbird Content type and slick slider.

And much more. Check how to work with different features in [Working with Alpaca guide](./docs/working-with-alpaca.md)

## Installation
Check [Alpaca installation step by step guide](./docs/alpaca-step-by-step.md)

## Alpaca preview

* [Alpaca components preview](https://magento2-alpaca-theme-git-master-snowdog1.vercel.app/)
* [Alpaca theme on Magento 2 Community](https://alpaca-community.snowdog.dev/)
* [Alpaca theme on Magento 2 Commerce](https://alpaca-commerce.snowdog.dev/)

