# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
### Updated
- Fractal npm dependencies (PLEASE UPDATE IN CHILD THEMES) (#75847)
### Fixed
- jumping images on PDP (#75491) Affects: images on PDP

## [Released]

## [2.15.0] - 2021-02-25
### Updated
- header variable & template; atomic `width-full-screen` class (#75554)
### Fixed
- method typo (#76074)

### Added
- handlebar `or` helper (#75554)

## [2.14.0] - 2021-02-09
### Updated
- theme to Magento 2.4.2 (#75141)
### Fixed
- quality of images on compare products page (#74635)
- error on multishipping and requisition list pages on quantity update (#75141)
- error on mouse move in checkout address search modal (#75141)
### Removed
- EE - removed review amount and add your review link from product grid (#74637)
- duplicated requisition list button (#74883)
### Added
- new styles for my orders filters (#74638)
### Changed
- apply code buttons to uppercase, update placeholders for gift card, add new template for gift card on commerce version (#74636)

## [2.13.0] - 2021-01-21
### Updated
- theme to Magento 2.4.1 (#70133)

## [2.12.0] - 2021-01-19
### Updated
- theme to Magento 2.3.6 (#72223)
### Fixed
- paypal button covers popups on PDP and cart (#73943)
- message in review section requires spaces bewteen links in text (#73943)
- image width in requisition list (#73942)
- search result pages (#68876)
- scss variable for grid on PDP (#71511)
- order details in user dashboard (#73940)
- conatiner top space on PDP, category, home (#74745)
### Added
- option to customize number of slides to show in templates with sliders (#70261)
### Removed
- duplicated stock status for configurable products (#73939)
### Changed
- payment method template in customer dashboard (#73941)

## [2.11.0] - 2020-12-10

### Added
- adjustems to store credit templates (#72456) Affects: store credit daschboard & checkout payment step
- store credit dashboard to components (#72456)
- adjustments to checkout address search templates (#72454)
- adjustments to reward points templates (#70571) Affects: cart & checkout payment step
- variables for product view add to cart button and cms contact max-width (#73403)

### Fixed
- performance, changes for magepack - optimise js (minify js libs, datapicker, calendar, M2 bootstrap, marketing bar), styles loading (preload, remove useless variables), fonts (swap)
- search input styling on iOS (#68780)
- slider container before & after gradient on Safari & iOS (#68780)
- product add to cart sticky covering footer on Safari & iOS (#68780)
- images stretching vertically inside links on Safari & iOS (#68780)
- dropdown list styling in checkout footer (#68780)
- 'back' link styling in 'my product reviews' (#68780)
- actions toolabr styling in 'company users' (#68780)
- order table in account sachboard (#68780)
- discount & gift card templates from checkout (#68780)
- giftcard account action-toolbar styles (#68780)
- link href in reward/customer/info/ (#68780)
- thicker table bottom border (#68780)
- order-summary background color in checkout sidebar (#68780)
- table - scope row variant borders (#73250)
- fix gallery placeholder img size & position (#70469) Affects: PDP
- selects on catalog page and product list images (#70830)
- product name in quicksearch, budnle options in cart, minicart z-index (#73341); affects: quicksearch product template, minicart template and cart item template
- shipping latency modal on catalog list - always displays modal of the first product on the page (#73101)
- amasty styles loading (#73336)
- product-grid-item on safari (#73677)
- reward points tooltips position on cart view - moved inside messages (#70571)
- buttons alignemnt on PDP for out of stock product (#72455)
- adding products to wishlist with ajax (on grid, catalog, PDP) with selected product options (#70731)
- bundle product - price styling in wishlist (#70731)
- bundle/downloadable PDP for editing wishlist item - broken layout (#70731)
- bundle/configurable PDP for editing wishlist item - selected options don't save after clicking "update wish list" (#70731)
- breadcrumbs on PDP - missing crumbs when some navigation nodes have type "wrapper" (#73409)
- magepack issues with config generation for configurable products (#73183)

### Changed
- a11y features on PDP - headings order, bundle fields, price labels, buttons labels, qty update buttons, rating form (#66039); Affects: bundles options and price templates, add to cart sticky, qty update implementation, rating, requires templates update is overwritten
- a11y dashboard & blog (#66042) - labels, titles, skip to navigation.content links, form fields; Affects: dashboard template required update if overwritten, dashboard xml updated
- a11y cart & checkout (#66041) - labels, fields, fieldset, semantic elements. Affects: checkout and card templates - update required if overwritten
- header wishlist & minicart buttons margins on mobile (#68780)
- dashboard-table__header direction & alignment on mobile (#68780)
- no-results_link width (#68780)
- contact us button & description styles (#68780)
- shipping method options paddings & radio margin (#68780)
- discount-code__content paddings in checkout & cart (#68780)
- discount-code__input margin (#68780)
- checkout email templates (adjusted classes) (#68780)
- content-block__link margin (#68780)
- show phone input tooltip in checkout shipping address modal (#68780)

### Removed
- unnecessary header-button margin styles (#68780)
- focus effect from button-add-to on mobile & desktop (caused issues on touch screens) (#73623)

## [Released]
## [2.10.0] - 2020-10-21

### Added
- full with variant styles to slider (#69023)
- "back" link to requisiton list page (#70586)
### Changed
- requisition list toolbar styling (#70586)

### Fixed
- issue with arrows looking wrong if gallery vertical/horizontal nav breakpoints are changed via configuration (#71113); Affects: gallery navigation
- input and select styles in poduct gift card template (#70690); Affects: gift card PDP
- review snippets (#69786)
- tooltip text align on product list (#71074)
- amasty gdpr cookie modal on checkout (#71134)
- a translate function `__()` syntax error in wishlist item column cart template (#71267)
- jumping images: in products grid & list on catalog, in widgets, in banners and cms images (#69133);
  Affects: cms blocks width images (homepage), catalog grid and list (products images & category image), products widgets, banners (CT), blog, sliders;
  required: import scss file: `_image-ratio.scss`, additional fields in banner content type
- paypal express button (#71512)
- division by zero warning (#71513)
- AuthorizeNet 'Save for later use' checkbox styling in checkout (#71077)
- swatch images on product page (#71579); Affects: swatch images
- gallery rendering on page load so current breakpoint configuration isn't replaced by any other configuration (fix from Magento 2.4-develop PR 29934) (#71518)
- a11y in header, footer & homepage: fieldset & legend, inputs wrong ids, keyboard support, focus management, sidebar menu, aria roles, semantic HTML (#66038)
- loader scope for in swatches (#71300)
- error on company profle page (#72234)
- tab content in quote view - removed escaping (#72243)
- loading state/province options (#72291)

### Added
- adjust sliders loading time + add slider widget template (#65842)
- scroll-to.js file and added it for reviews on product page (#71248); Affects: Reviews buttons on PDP
- variables for footer bottom bar (#71488)
- downloadable product PDP (#70550)
- wishlist - config items - show "see details" with selected options (#71268); Affects: wishlist in dashboard
- loader for picture element (#71300)
- swatch variables (#71396), Affects: swatches on catalog
- base.scss variables (#71396)
- variables for product-view, review and tab (#71110);
- pager to wishlist (#71692)
### Changed
- a11y catalog update - skip links (go to filters/products), a11y open mediaQuery modal feature (filters), update a11y labels (sorter, pager), focus management update, mobile menu View all link added (#66040);
Affects: if catalog (toolbar, filters, list) or mobile menu templates are overwritten in theme, update required

### Removed
- unnecessary title from svgs with role presentation (#71268)
- reference to Magento\Rma\Block\Order\Button block on OS (#71741); Affects: order view, order invoice & order shipment



## [2.9.0] - 2020-09-21
### Fixed
- input and select styles in poduct gift card template (#70690); Affects: gift card PDP
- review snippets (#69786)
- amasty gdpr module error on checkout page (#71078)
- account - stored payment methods table (#70628)
### Added
- minimum advertised price on grid and product page (#70656); Info: @import '../Magento_Msrp/styles/module'; should be added to /styles/theme.scss
### Changed
- recaptcha badge position on mobile PDP (#70725); Affects: PDP

## [2.8.0] - 2020-09-15
### Fixed
- missing actions group on Account Information page; Affects: dashboard account information page
- spaces between buttons uneven on EE product list (#68745); Affects: catalog product list
- typo in shipping address config (#68745)
- item checkbox in requisition list (#68745); Affects: Requisition list
- wishlist item actions covering active textarea border (#68745)
- js error on bundle PDP - removed escaping method from bundle options template (#68745)
- fixed problems when cms blocks saved with Page Builder (#69990)
### Added
- customer balance history template (#68745)
- grouped product final price template (#68745); Affects: Grouped PDP
- missing dashboard-table__link class to account dashboard templates (#68745); Affects: dashboard
### Changed
- basic variable with component variable for easier updates of mega menu (#69969); Affects: mega menu
- sidebar 'Compare' link classes (#68745): Affects: catalog sidebar
- bundle product price template and styling (#68745); Affects: Bundle PDP
- make compare__product div take up 100% height of td & space items between (#68745)
- escaping php variables in templates (#70322)

## [2.7.0] - 2020-08-20
### Fixed
- gdpr agreements templates after update (#68654)
- wrong name for review input field (#70089)
- Amasty Store Locator template for module version 2.4.2 (#69148)
- jumpung gallery while loading (#70217)
- untranslatable aria-label text for close button in ElasticSuite quicksearch autocomplete template (#67310)
- user registration - gdpr checkbox after validation missing checked icon (#70169)

### Added
- paypal review component (#59142)
- curreny and language switchers in footer (#67313)
- EE - gift registry (#65717), Affects: all gift registry pages ('/giftregistry/*'), datepicker styles
- Component and styling for multishipping (#66917)
- color property with variable for easier override of select2 styles (#67443)

### Changed
- paypal review order page (#59142)
- paypal express button, Affects: product page, cart page, checkout payment step (#69885)
- contact-bar template to show/hide email/phone depending on config settings (#69969)
- checkboxes to be globally aligned vertically to center (#68654)
- zoomed in image background opacity & close button to dark (#69145)
- styles and validation for datepicker (#67654), Affects: structure of files (datepicker customization)
- escaping php variables in templates, Affects: amasty gdpr elements and pages (newsletter, agreements, ettings, etc.) - can limit html output there (#67311)
- store locator active store color (#69151)

### Removed
- duplicate variables in contact-bar (#67443)

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
