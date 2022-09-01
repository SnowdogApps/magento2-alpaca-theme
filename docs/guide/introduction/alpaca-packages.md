# Alpaca Packages
Alpaca Theme is a part of [Alpaca Packages](https://github.com/SnowdogApps/magento2-alpaca-packages) - a set of open source modules that are required for some of Alpaca's base features.

## Snowdog Menu
[snowdog/module-menu](https://github.com/SnowdogApps/magento2-menu)<br>

* Gives greater control over site navigation menus than native Magento 2 offers. Provides a drag-and-drop interface to build menus with links to categories, products, CMS pages, or custom URLs in the admin.
* Used for desktop, mobile and footer menus. Example content can be imported with [these database queries](https://github.com/SnowdogApps/create-alpaca-theme/blob/master/src/database/queries.sql).
* You can modify the look of menu items by including Alpaca CSS classes in menu nodes configuration.

    For example: to create a column, add a menu node with type "wrapper" and classes `list__column list__column--hidden`.

    Check [Mega Menu](https://magento2-alpaca-theme.vercel.app/components/detail/mega-menu.html), [Side Menu](https://magento2-alpaca-theme.vercel.app/components/detail/side-menu.html) and [Footer](https://magento2-alpaca-theme.vercel.app/components/detail/footer--default.html) to see more options.

![expanded-menu-1](/images/expanded-menu-1.webp)
![expanded-menu-2](/images/expanded-menu-2.webp)
![menu-configuration](/images/menu-configuration.png)

## Snowdog Product Bullet Points
[snowdog/module-bullet-points](https://github.com/SnowdogApps/magento2-bullet-points)<br>

Allows for additional product content on the category page list view to provide customers with more information about each product.

![product-bullets](/images/product-bullets.webp)

## Snowdog Shipping Latency
[snowdog/module-shipping-latency](https://github.com/SnowdogApps/magento2-shipping-latency)<br>

Replaces default "In Stock/Out of Stock" indicators on category and product detail pages with custom labels to give customers more insight into the availability of products.
Displays popup content when stock indicator is clicked to inform customers about low stock, back in stock dates, delivery lead times, or any other messaging.
* [Theme implementation for Catalog](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Catalog/templates/product/list.phtml)
* [Theme implementation for PDP](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Catalog/templates/product/view/shipping-latency.phtml)


![stock-status-1](/images/stock-status-1.webp)
![stock-status-2](/images/stock-status-2.webp)

## Snowdog Product Attribute Descriptions
[snowdog/module-product-attribute-description](https://github.com/SnowdogApps/magento2-product-attribute-description)<br>

Allows for including a "More information" button next to attributes in category and search page layered navigation to explain what each attribute means to help guide customers.

* [Theme implementation for catalog tooltip](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Smile_ElasticsuiteCatalog/templates/layer/filter/attribute.phtml)
* [Theme implementation for swatches](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Swatches/templates/product/layered/renderer.phtml)
* [Theme implementation for range filter](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Smile_ElasticsuiteCatalog/templates/layer/filter/slider.phtml)

![attribute-description](/images/attribute-description.png)

## Snowdog Category Bottom Descriptions
[snowdog/module-category-attributes](https://github.com/SnowdogApps/magento2-category-attributes)<br>

Allows adding content to the bottom of a category to help guide user experience and improve SEO.

![category-bottom-descriptions-1](/images/category-bottom-descriptions-1.webp)

## Snowdog CSP
[snowdog/module-csp](https://github.com/SnowdogApps/magento2-module-csp)<br>

Adds CSP rules for resources utilized in Alpaca.

## Snowdog WishList Unlocker
[snowdog/module-wishlist-unlocker](https://github.com/SnowdogApps/magento2-wishlist-unlocker)<br>

Allows adding more than 3 products to the wishlist. Gives the ability to set the limit inside Magento whishlist configuration.

## Snowdog Alpaca General
[snowdog/module-alpaca-general](https://github.com/SnowdogApps/magento2-alpaca-general)<br>

Includes some general Alpaca adjustments and fixes.

## Smile ElasticSuite Search
[smile/elasticsuite](https://github.com/Smile-SA/elasticsuite)<br>

Provides out the box a lot of features usually only available with proprietary merchandising tools.

## MagePal SMTP Extension
[magepal/magento2-gmailsmtpapp](https://github.com/magepal/magento2-gmail-smtp-app)<br>

Send all transactional emails using Google App, Gmail, Amazon Simple Email Service (SES), Microsoft Office365 or any other SMTP servers.

## MagePal Google Tag Manager
[magepal/magento2-googletagmanager](https://github.com/magepal/magento2-google-tag-manager)<br>

Makes Google Tag Manager easier.

## MailChimp
[mailchimp/mc-magento2](https://github.com/mailchimp/mc-magento2)<br>

Syncs all data (subscriber, customers, orders, products) and enables marketing automation with email campaigns, automations, ads, postcards and more.

## Matrixrate Shipping
[webshopapps/module-matrixrate](https://github.com/webshopapps/module-matrixrate)<br>

 Gives the ability to define custom shipping methods and rates based on destination, cart, or product data via a CSV. Matrixrates Shipping grants the flexibility to cover custom shipping rates for business needs where standard carriers are more rigid.
