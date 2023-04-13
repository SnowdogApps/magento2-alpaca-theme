# Changelog
All notable changes to this project will be documented in this file.

USE GITHUB ISSUE/PULL REQUEST NUMBERS, NOT INTERNAL ONE
=========================================================

## [Unreleased]
### Added
### Changed
### Fixed
### Removed
### Updated

## [Released]

## [2.28.4] - 2023-04-06
### Fixed
- Mage error styles on PDP (#581)

## [2.28.3] - 2023-03-31
### Added
- Added styles and templates for MageMe_WebForms (old VladimirPopov_WebForms) module (#575)
### Fixed
- Fix call to not existing method, backwards compatible up to 2.2.0 (#580)
## [2.28.2] - 2022-09-05
### Fixed
- Magento_PageBuilder styles imports (#571)
## [2.28.1] - 2022-09-01
### Fixed
- broken `Magento_Msrp/web/template/product/price/price_box.html` template (add missing quote)
## [2.28.0] - 2022-08-23
### Added
- some component variables (#567)
### Changed
### Fixed
- syntax error, `unexpected ','` in `Magento_Catalog/templates/product/widget/viewed/list.phtml` (#560)
- missing Forgot password link in Login/Create account modal (#564)
- CLS issue caused by scrollbar appearing when non-critical styles are loaded (#566)
- small component issues (#566)
### Removed
### Updated
- amasty/module-gdpr => 2.8.3 (#562)
- amasty/module-gift-card => 2.8.4 (#562)
- amasty/module-store-locator => 2.5.3 (#562)
- amasty/shiprules => 2.8.3 (#562)
## [2.27.0] - 2022-06-14
### Added
- New config options for Modal (closeOnEsc, closeOnBackdrop)
- Missing arguments in layout for multishipping address (#541)
### Changed
- LCP image loading on PDP for performance (#543)
- Order summary design in Quote (#553)
- replace ObjectManager in phtml (#552)
### Fixed
- passing all properties when adding product to wishlist (#534)
- minicart - "See Details" dropdown JS init (#88897)
- Wrong display of discount amount in order summary on review & payments page (#540)
- Misaligned contact bar (#542)
- fotorama.js and magnifier.js magepack errors fixes (#544)
- checkout - shipping method item error display (#85516)
- hiding State/Province field when it's not required for selected country (#554)
- My Orders styling issues in M244 (#556)
- File upload link styling in Request a Quote (#557)
- Remove reward points button leading to 404 (#558)
### Removed
- unnecessary !important flags (#537)
- elasticsuite footer (#549)
- `Snowdog_Acm` module and moved files to `Blackbird_ContentManager` directory (#555)
- `select2magepack.full.min.js` that doesn't work correctly (select 2 ends up loading twice in magepack bundle and as a separate file), select2 should be removed from magepack config instead (#559)
### Updated
- Magento to 2.4.4 (#546)
## [2.26.3] - 2022-05-19
### Changed
- docs url
### Fixed
- docs - comment about custom variables import order
## [2.26.2] - 2022-05-19
### Fixed
- vitepress- dead link error
## [2.26.1] - 2022-05-19
### Added
- docs and new readme (#535)
## [2.26.0] - 2022-03-10
### Added
- In-store pickup components (#82620)
- Missing classes to home, product-view and catalog pages (#84674)
- Conditional rendering in footer.hbs (#84599)
- Missing variables in _footer.scss (#84599)
- Missing fractal component variants (#84723)
- Messages component variant (#84729)
- Checkbox 'link-checked' variant (#492)
- option to remove Qty input and update button from minicart in Admin > Store > Configuration > Snowdog > Alpaca General > Mini Cart > Qty Update Disabled (#486)
- missing store pickup style imports (#520)
### Fixed
- Display error message - phone number field (#83240)
- Webform checkboxes inline style & Department select on Contact Page (#83891)
- Update button in minicart always shown (#83009)
- Galery showing multiple pictures in magnifier view (#80429)
- Overflow on x axis caused by `slider--full-width` class (#84443)
- Some styles loaded twice in checkout (#83768)
- Messages component display (#84729)
- Order summary not expanded by default (#84748)
- Alpaca readme - wrong link and missing content (#85061)
- Multiple product attribute description API requests (#490)
- Checkbox link variant with class 'checkbox--link-checked' missing background (#492)
- New customer registration - middle name always required (#493)
- Base paragraph styles overriding typography paragraph styles (#494)
- Quantity buttons on multishipping checkout (#499)
- slider a11y - keyboard support, repeated price IDs, when product is included in multiple sliders on the page (#459)
- more info component js - close more info on ESC (#459)
- More info button - bottom spacing (#496)
- Country selector styling in contact-us form (#497)
- Added escape methods to more-info (attribute description) (#495)
- Inheritance task in components (#501)
- Mobile menu custom_url template (#472)
- Checkout cart icon hover style (#504)
- Checkout - apply gift card styles (#508)
- Checkout - cart link styles (#507)
- Checkout - "Ship to" and "Shipping method" edit icons styles (#505)
- Checkout recaptcha checkbox visibility (#506)
- PDP - add to wishlist/requsition list button styles (#509)
- duplicated styles from extends imports (#510)
- Recently Viewed - temporary wishlist button fix (#511)
- Store Locator - Location View - "Additional Information" section display (#512)
- Side menu close button position & text on hover (#513)
- Side menu close button position on Safari (#513)
- Recently Viewed - Minimum Advertised Price'd products (#514)
- Magento Gift Card - page reloading when adding to cart (#515)
- Magento Gift Card - missing required sign & validation messages (#515)
- Dashboard -> Privacy Settings - html in content doesn't render (#516)
- Dashboard -> My Orders - table row overflows table on mobile (#516)
- styles loaded in fractal for checkout related components (#520)
- Fotorama - 'exit fullscreen' click triggers event on element below (#521)
- Checkout success page and multishipping styles after performance & quality improvements (#517)
- Shopping cart - quantity not visible when quantity error message is displayed (#522)
- configurable product price related issues - price not displayed when a configurable product doesn't have swatches, final price displayed as special in red when selected option doesn't have old price but some other options do, jumping price on load (use `opacity-0` instead of `display-none`) (#525)
- configurable product select field width changing on load (#525)
- spacing between Magento UI form element and its error message (#527)
- PDP - not working Yotpo button "Write a review" under the product's name (#530)
- catalog list view - add to cart button changing width when text is changed to "Adding..." (#529)
- catalog list view - add to cart button display on mobile (#528)
- Amasty Gift Card form validation on PDP (#526)
- `.label` extends (#526)
- Wishlist item update loses selected options in wishlist (#533)
### Changed
- MQ values for picture aspect ratio padding (#86854)
- Changed and improved GDPR cookie module behavior (#400)
- Checkout summary "View Details" styling (#498)
- Refactor and improve yotpo styles (#485)
- Atomic styles import placement from critical styles to the end of non critical (#519)
### Updated
- Performance & quality improvements (#474)
- Amasty Gift Card to `2.8.0` (#526)
- Amasty Gift Card Account to `1.4.0` (#526)
### Removed
- Redundant EE store switcher (#503)
## [2.25.1] - 2021-11-30
### Fixed
- Remote shopping assistance on account creation (#83738)

## [2.25.0] - 2021-10-19
### Fixed
- Filters position on category view (#83483)
### Updated
- Update requisition list button on product view (#83517)
- Update to Magento 2.4.3 (#81212)
## [2.24.1] - 2021-10-13
### Changed
- Frontools dependency removed
### Fixed
- Asterix position in required checkboxes (#80129)
## [2.24.0] - 2021-09-09
### Added
- column template variables for catalog grid styles (#81732)
- 'Recently viewed' component in fractal product bundle and product grouped templates
- fractal template for gift registy items (#81936)
- background color for 'Add to wishlist' button (#81767)
### Fixed
 - webforms templates (#79614)
- jquery and fotorama don't use passive listeners to improve scrolling performance (#72752)
- styling for store credit checkbox in multishipping checkout (#81559)
- tax field styling on checkout (#81627)
- styling for payment & shipping information on company profile page (#81661)
- user role styling on My Account page (#81750)
- border styling for multishipping view (#81624)
- styling for table in gift registry items (#81936)
- quantity styling in table when product name is too long (#81950)
- error on privacy settings section in account settings (#81873)
- cookie modal not showing when clicking save button (#81873)
- some icons a11y in templates (#80844)
- Quote reorder popup when having items in cart not displaying correctly (#82047)
### Changed
- moved catalog grid scss variables to separate file (#81732)
- move all content to the left for product list view on mobile (#81767)
- restored cookie-settings page for Amasty GDPR (#81873)
- `xlink:href` (deprecated) to `href` (#80844)
- some icons code in templates to lower the number of icon related requests (#80844)
### Updated
- bump select2, `select--search` component (#80105, #81472)
- cookie settings modal to new version of Amasty GDPR (#81873)
- styling for cookie table information (#81873)
### Removed
- svg4everybody (no longer needed for browser support (#80844)
## [2.23.0] - 2021-08-03
### Added
- yireo/magento2-webp2 package for webp images (#72754)
### Fixed
- duplicated loader on PDP (#79360)
- quickorder search suggestions styling (#78133)
- select2 a11y - element `span[aria-labelledby="select2-sorter-container"] > .select2-selection__arrow[role="presentation"] > b` shouldn't have ARIA role presentation (#80452)
- shopping cart - visually hide qty label instead of display none (#80422)
- `aria-label` in gallery (#80417)
- add to cart sticky shouldn't have focusable elements when it has `aria-hidden="true"` (#80420)
- some a11y issues in checkout (#80424)
- gallery navigation not showing on load (#80752)
- gallery placeholder not showing on load and jumping image on load (#80752)
- shopping cart - product image not visible (#80868)
### Changed
- instead of using atomic classes for some page heading styles added in a lot of places, created a new class for easier customization (#80498)
- magnificPopup to Alpaca custom modal for Webforms, updated submit and button template to the newest version (#80758)
- disable locate nearby button until ajax call is executed (#80047)
### Updated
- adjusted styles for webp images (#72754)
- store locator to the newest version (#80756)

### Removed
- lazy loading for slider and banner images (#72754)
- authentication popup (#79679)

## [2.22.0] - 2021-06-17
### Added
- focus state for amlocator route creator icons (#73168)
### Fixed
- code cleanup (#77782)
- aos error & button add to cart sticky text on edit product in shopping cart page (#79328)
- missing `_` in translations (#79500)
- incorrent unit in store distance (#73168)
- store review stars & input styling (#73168)
- multishipping and requisition list styling (#79008)
### Updated
- unified store locator buttons styling (#73168)
- store locator range slider replaced with noUiSlider (#73168)
- store locator thumbnails `object-fit` set to cover (#73168)
- route creator colors (#73168)
## [2.21.0] - 2021-06-09
### Updated
- gallery style variables (#78380)
### Fixed
- empty product reviews list in customer dashboard (#78932)
- safari tab scroll issue on PDP (#78961)
- quantity update button styles on focus (#79275)
- escaper method used in qtyUpdater data-mage-init (#78380)

## [2.20.0] - 2021-05-24
### Fixed
- duplicated ids for msrp price popup (#78814)
### Added
- margin top to quote button in cart (#78684)
### Updated
- tabs component accessibility
## [2.19.3] - 2021-05-18
### Fixed
- fix product display with long names in minicart (#78748)

## [2.19.2] - 2021-05-18
### Fixed
- fix sales status label (#78562)

## [2.19.1] - 2021-05-17
### Fixed
- not visible images in minicart (#78682)

## [2.19.0] - 2021-05-12
### Fixed
- image ratio in recently viewed widget & wishlist (#77269)
- password trigger on reset password page (#78130)
- checkout agreement checkbox text on multishipping page (#78227)
### Added
- styles for Braintree Credit Card form on multishipping page (#78227)
- typo in checkout subtotal (#78230)
- Magento_Ui dropdown styles mixin position (#78230)
- price doesn't update on PDP after filling out product customizable options - type field and area (#78230)
- not centered images on full screen (#78144)
- validation for google and apple pay buttons (#78181)
## [2.18.0] - 2021-04-21
### Added
- titles for compare and wishlist buttons (#77368)
### Fixed
- error on paypal payment submit (#77324)
### Updated
- markup for gift card code on paypal express review page (#70133)
- default image width set to `auto` and `max-wdith` to `100%` Affects: all images width
## [2.17.0] - 2021-03-30
### Added
- images in snowdog menu desktop template (#70218), compatible with `snowdog/module-menu` version `2.14.0`

## [2.16.0] - 2021-03-24
### Updated
- Fractal npm dependencies (PLEASE UPDATE IN CHILD THEMES) (#75847)
### Fixed
- jumping images on PDP (#75491) Affects: images on PDP
- Backorder product notification in minicart (#76180)
- EE - Password trigger (#76538)
- Disabled search button, styles on focus (#76537)
- remove duplicated quantity-update import
- remove php code from authentication-popup.html

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

## [2.12.1] - 2021-02-08
### Updated
- theme to Magento 2.3.6.p1 (#75169)
### Fixed
- error on multishipping page (#75169)
- error on EE checkout (#75169)
### Added
- requirement verification for captcha (#75169)
- cookie options in sidebar mixin (#75169)
### Changed
- Update escaping functions for captcha and multishipping (#75169)

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

## [1.8.0] - 2022-06-09
### Fixed
- items spacing in cart totals (#548)
- wishlist PDP - change of qty using +/- buttons doesn't save (##551)
- country list select on address edit view - while there is one country allowed, it's not displayed in select options (#469)
### Removed
- share wishlist - pre-populated whitespace in email and message fields (#547)
### Updated
- theme files to Magento 2.4.3 (#469)

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
