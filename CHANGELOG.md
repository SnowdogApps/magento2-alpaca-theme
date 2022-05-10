# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
### Fixed
- items spacing in cart totals (#548)
### Updated
- theme files to Magento 2.4.3

## [1.7.0] - 2020-09-26
### Changed
- hide label for tooltip icon after updates in template (#66923)
### Fixed
- container styles for customer/checkout. Affects: containers positioning/spacing in those areas (#66923)
- styles for modal heading (#66923)
### Removed
- some row classess from totals related templates (Magento_Ui). Affects: checkout/cart totals/shipping methods etc. (#66923)

## [1.6.0] - 2020-09-26
### Changed
- update theme files to Magento 2.3.5 p1

## [1.5.0] - 2020-05-26
### Added
- Page builder styles
- Skip navigation links
- Registration forms adjustments

## [1.4.0] - 2019-10-15
### Added
- Adding data-testid attributes for autometed tests Cypress.io

### Fixed
- Add-to-cart for solr templates with updated form_key
- fix multiple rating
- fixed swatches images in catalog
- Details dropdown id in minicart

### Added
- Focus & keyboard support for mega-menu
- add scroll to top button

## [1.3.1] - 2019-05-30
### Fixed
- Add-to-cart for solr templates with updated form_key

## [1.3.0] - 2019-04-17
### Changed
- Wishlist and catalog elements for focus state
- Catalog grid item link class name

### Fixed
- Fotorama video styles
- Aria attributes do not have valid values

## [1.2.0] - 2019-03-04
### Added
- Support for escape key in dropdown script
- Quickorder page styles

### Changed
- Refactor filters and accessibility improvements
- Connect footer links with module-menu
- Price rendering for simple and configurable products

### Fixed
- Duplicated `email` id on company users view
- Duplicated `My wishlist` section in sidebar
- Login form for disabled 'Guest Checkout'
- Swatches in catalog and product page for magento 2.3.0
- Details dropdown in minicart
- Price updating in configurable products
- Related products slider in product page

## [1.1.0] - 2019-01-07
### Added
- Reset password styles
- Email to a Friend page styles
- Missing homepagge container class for top notifications
- Support for B2B module
- Templates for product's page breadcrumbs
- Confirmation link page styles
- Support for bundle products
- Support for grouped products

### Fixed
- Missing class for product attributes
- Customer save password/email action

### Changed
- Refactor dropdown list and nested list
- Grid classes in whole project
- Refactor menu and submenu templates

## [1.0.0] - 2018-10-15
### Changed
- Better docs
- Refactor rating and reviews, a11y implementation

### Fixed
- Rating stars in catalog (solr)
- 2 column layouts

## [0.6.1] - 2018-09-24
### Added
- Link to log out

## [0.6.0] - 2018-09-18
### Added
- Sidebar to search results
- Classes for stock status in catalog

### Changed
- Input classes
- Sidebar blocks heading
- Catalog structure
- Moved sidebar blocks to the bottom on mobile
- Category links styles in catalog (solr)

### Fixed
- State select
- Nested links in mobile menu

### Removed
- Lazyload from captcha in forgot password page

## [0.5.1] - 2018-09-06
### Changed
- Updated components version to version 0.9.1

## [0.5.0] - 2018-09-05
### Changed
- Product review details page
- Moved theme styles to components
- Styles and markup for checkout page

## [0.4.0] - 2018-08-22
### Added
- Loaders to sidebar blocks
- Border to white swatch
- Quicksearch (solr)

### Changed
- Compare products page
- Swatch option loader
- Update cart button in product edit
- Aria attributes in swatches
- Updated sidebar blocks styles
- Moved sidebar blocks from my account to catalog
- Share wishlist page
- Wishlist styles
- Catalog item improvements

### Fixed
- Update cart by enter
- Swatch selecting in product edit
- Error in solr navigation
- Product gallery
- Discount in cart
- Product image size in catalog (solr)
- Swatch border
- Sorting of numbers in limiter select
- Rating display in compare page
- Counter displaying in header buttons
- Search results in catalog (solr)
- Links to add review in product page

### Removed
- Lazyload from minicart image

## [0.3.4] - 2018-07-09
### Changed
 - module-alpaca-components version to 0.7.3

## [0.3.3] - 2018-07-02
### Removed
- Remove package version from composer.json

## [0.3.2] - 2018-07-02
### Changed
- snowdog/module-menu version (~2.4.0 to ^2.4.0)

## [0.3.1] - 2018-04-05
### Added
- Swatches to list mode in default catalog

### Changed
- Product images size
- remove <move> entries leading to not existing block in 1column layout

## [0.2.1] - 2018-04-05
### Fixed
- Version in `composer.json`

## [0.2.0] - 2018-04-05
### Added
 - Product page added
 - Swatches in product page
 - Tabs in product page
 - Related/upsell slider update
 - on dashboard order view - links to invoices, shipments and crmemo lists
 - Footer implemented
 - Footer links
 - Newsletter module styles
 - Social links
 - Login page
 - Mini cart
 - Forgot password page
 - Catalog (without solr)
 - Templates for mega menu and side menu

### Changed
  - registration form to fit new components
  - homepage container
  - header borders
  - captcha appearance

## [0.1.2] - 2017-10-10
### Added
 - CHANGELOG.md

### Changed
 - module-alpaca-components version to 0.1.2
