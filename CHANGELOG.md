# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
### Fixed
- gdpr agreements templates after update (#68654)
- wrong name for review input field (#70089)
- Amasty Store Locator template for module version 2.4.2 (#69148)
- jumpung gallery while loading (#70217)
### Added
- paypal review component (#59142)
- curreny and language switchers in footer (#67313)
- EE - gift registry (#65717), Affects: all gift registry pages ('/giftregistry/*'), datepicker styles
- Component and styling for multishipping (#66917)
### Changed
- paypal review order page (#59142)
- contact-bar template to show/hide email/phone depending on config settings (#69969)
- checkboxes to be globally aligned vertically to center (#68654)
- zoomed in image background opacity & close button to dark (#69145)
- styles and validation for datepicker (#67654), Affects: structure of files (datepicker customization)
- store locator active store color (#69151)

## [Released]
## [2.6.0] - 2020-08-06
### Added
- pointer cursor for zoom in icon (#69031)
### Fixed
- modal close icon overlay on text (#69152)
- typo in newsletter (#67925)

### Changed
- loader to sth "standard" (#68653)

### Removed
- unused code (#64998)

### Fixed
- sasslint warnings (#64998)
- configurable produt special price visibility and styling, updating product price on swatch change (#69349)

## [2.5.0] - 2020-07-15
### Fixed
- cart & checkout discount summary (#68737)
## Removed
- 'what is paypal?' from paypal express template (#68737)

## [2.4.0] - 2020-07-13
### Added
- yotpo reviews  support (#68077)
- styled subscribe checkbox (#68462)
- zoom icon to product gallery (#68584)
- map object from original require-config file (#68776)
### Changed
- reduced spacing above Available in stores (#68585)
- $font-family-sans-serif to $font-family-base (#68405)
### Fixed
- bundle with multiselect - options in summary (#68469)
- issue with special characters in product name in minicart (#68844)
- missing price wrapper class (#61546)

## [2.3.0] - 2020-07-03
### Added
- extra variables to mega-menu template (#68257)
- styling for multiselect (#67928)
- requisition and wishlist dropdown to site (#66270)
- AuthorizeNet CC, PaypalExpress payment methods, Amazon_Payment checkout login adjustment (#68526)
- swatches to products widget, related, upsells, crosssells (#64777)
- adding to cart with ajax in product widget (#64777)
### Changed
- update variables name and styles in product view, swatches, mega menu (#62512)
- quicksearch display, variables & components view (#65066)
- show category description when category image isn't set (#68329)
- gift card template (#68589)
- update variables - brief-info--link title color, newsletter subtitle & checkbox, footer scroll top background (#67878)
### Fixed
- search autocomplete product image size (#68106)
- a translate function `__()` call in product view Qty template (#68056)
- product review stars validation (#67930)
- templates for mobile menu (#68012)
- amasty gift card price on init on PDP (#68423)
- customer account address country list `for` loop (#68610)
- product tabs sorting (#67940)
- remove duplicated add to cart button (#67929)
- escape keydown event binding on catalog (#59884)
- product grid item lazyload height, product grid display on safari, image_with_borders.phtml src value
### Removed
- recently ordered from left column in catalog (#67862)
- grouped product option table top border (#67844)

## [2.2.0] - 2020-06-15
### Fixed
- update theme templates for M v2.3.5 (#66621)
- fix missing tag in product-view--bundle.hbs (#67829)
- fix variable name $catalog-gird-item__primary-margin -> $product-gird-item__primary-margin (#61542)
- fix add product with swatches to cart from catalog (#67842)
- Focus on qty product button in minicart hidding update btn (#65973)
- Contact form - sending with webforms (#67205)
- fix single customer review template (#67837)
- fix add to wishlist (#67188)
- fix bundle PDP (#67863)
- extend extend messages class for backend generated notifications (#67840)

## [2.1.0] - 2020-06-09
### Added
- swatches on catalog (#67196)
### Changed
- shipping latency on catalog (#64632)
- pdp fotorama placeholder set size only of the main image (#66198)
- PDP - sticky footer product name only one line with dots (#66196)
- PDP - Product name under image on mobile (#66196)
- Quick order change styling for single sku row (#66172)
- Cookie popup amasty styling (#67268)
- My payment data template (#66712)
- Customer orders and returns form (#66891)
- update variables, sku font weight and display in product view (#66979)
- EE - dashboard - wishlist - create new / edit wishlist popup (#65998)


## [2.0.2] - 2020-05-29
### Added
- missing ACM templates

## [2.0.1] - 2020-05-27
### Fixed
- swatches layered template (hotfix 2.0.1)

## [2.0.0] - 2020-05-26

### Changed
- account wish list share with friends styling (#65997)
- link--button in atoms hover color (#65259)
- update contact-us variables (#65359)
- quantity update - optional label & event trigger for plus & minus buttons (#65259)
- update variables, link and titles in dashboard components (#65259)
- update variables in orders summary, shipping, estimation, discount (#65259)
- EE - dashboard - invitations (#65718)
- EE - hide the notification displayed on top (#65699)
- switch "signout" button to secondary CTA (#65952)
- standarize syntax of wrapping code in requirejs module files (#67166)
- EE - account wish list (#65714)
- EE - style gift options in cart (#65721)
- multishipping checkout (#61692)
- homepage home-brands-container block name (#66233-acm)
- checkout staep-title and calendar icon (#65911)
- account confirmation page (#66992)
- update variables - account form legend text transform (#66892)
- update product list template (#62915)
- header brief info styles (#67195)
- shipping latency on catalog (#64632)
- update Smile_Elasticsuite files in theme with Elastisuite 2.8.6 version changes (#66197)
- EE - style dashbaord reward points (#65719)
- usage of jquery/ui to jquery-ui-module/[module-name] (#66232)
- improve accessability of modal popup templates (#66232)
- Magento 2.3.4 update (#63718)
- EE - style quick order (#65700)
- EE - create b2b account on login page info (#65701)
- EE - company account registration form styling (#65702)
- EE - dashboard - address book - remove "street" label (#65711)
- EE - dashboard - requisition lists styles (#65712)
- EE - dashboard - store credit (#65713)
- EE - dashboard - gift card (#65715)
- change sliders lib from lory to slick (#64601, #64697, #64744)
- category banner styles nad template (#65344)
- amasty gift card styles (#65329)
- adjust select in case of long names (#65523)
- display stock_status_label instead of stock_status_description on grid (#65575)
- webforms templates and styles (#63440)
- PDP benefits popup moved to CMS (#64572)
- amasty gdpr (#64444)
- grouped product options with styles (#64633)
- checkbox, header, contact-bar, cookie-message (#61954)
- update variables + cleanup (#58633)
- EE - gift card view (#65866)

### Added
- atomic classes - uppercase/lowecase/none-text-transform (#65259)
- button--light (#65259)
- condition for compare and wishlist button in add to cart (#65259)
- posibility to change margins from 768px for .container class (#65259)
- conditions for compare and wishlist in dashboard nav (#65259)
- EE - dashboard - returns: 1. Create new return (#65986)
- EE - dashboard - returns: 2. my return (#66362)
- EE - dashboard - returns: 3. return view (#66363)
- Dashboard - order view - cleanup (#66229)
- webforms radio styles (#66959)
- amasty store locator styles (#57933)
- missing checkout templates (#58948)
- email templates (#58951)
- page builder styles (#56135)
- quote flow (#58953)
- recently viewed (#60510)
- login modal templates/styles (#63465)
- configure module-product-attribute-description (#63606)
- quotes styles fixes (#63543)
- styles for date picker (#66584)

### Fixed
- missing & double `!default` (#65259)
- quicksearch error (#66300)
- uncessessary pollution of window object by some theme js files (#67166)
- issue with double arrow on view order page in customer dashboard menu (#67109)
- set attributes in tab.babel.js (#66667)
- fix checkboxes on billing address (#65769)
- add missing wishlist classes (#66220)
- qty input error message styling (#66161)
- styles for privacy settings in dashboard (#66022)
- dashboard form, items and actions group spacers in templates (#65058)
- "See all brands button" styling broken (#66281)
- stretched gift card button (#65615)
- poor quality of thumbnail images on PDP (#65614)
- badge class modifiers for multiword attribute values (#62922)
- fix breadcrumbs issue (#65141)
- native selects (#63244)
- theme and components - initial working version
- contact bar & side menu mobie (#63497)
- shipping address in checkout (#63737)
- product options fixes (#63938)
- chekout styles adjustment (#64572)
- success page styles - spacing and standard header & footer (#64572)
- layerd navigation - spaceing alignment (#64572)
- removed double header tag & skip nav link (#64572)

### Removed
- doubled add to cart for configurable products (#67192)



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
