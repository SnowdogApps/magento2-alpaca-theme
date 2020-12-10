# Alpaca - components & theme for Magento 2.3

## Description
Alpaca Theme for Magento 2 is part of a `alpaca-packages`
To make it work with all features, we use following modules:

Open source
* magepal/magento2-gmailsmtpapp
* magepal/magento2-googletagmanager
* mailchimp/mc-magento2
* smile/elasticsuite
* snowdog/module-bullet-points
* snowdog/module-category-attributes
* snowdog/module-alpaca-acm
* snowdog/module-menu
* snowdog/module-product-attribute-description
* snowdog/module-shipping-latency
* webshopapps/module-matrixrate
* paradoxlabs/authnetcim
* paradoxlabs/tokenbase
* authorizenet/magento-module-creditcard

and module-alpaca-acm (from github) which will be added in p.1

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


## Installation
Install whole package using composer:
`composer require snowdog/alpaca-packages`

Node >=12.13.0 <13.0.0 is required for frontools and components

### Theme
1. Create child theme composer repository:
  * default Magento 2 theme files: `theme.xml`, `registration.php`, `preview.jpg`, `.gitignore`, `composer.json`
  * `composer.json` example file:
  ```json
  {
    "name": "vendor/theme-frontend-child-theme",
    "description": "Child frontend theme",
    "type": "magento2-theme",
    "require": {
        "snowdog/theme-frontend-alpaca": "<latest-version>",
        "vendor/module-child-theme-frontools": "<latest-version>"
    },
    "autoload": {
        "files": [
            "registration.php"
        ]
    }
  }
  ```
  * in `theme.xml` set Alpaca theme as a parent: `<parent>Snowdog/alpaca</parent>`
  * add following files:
    * `styles/styles.scss`
    ```scss
    // Component variables
    @import '../Snowdog_Components/components/Atoms/variables/variables';
    @import '../Snowdog_Components/components/Atoms/variables/<child-theme>-variables';

    // Components
    @import '../Snowdog_Components/components/styles';

    // Theme styles
    @import 'theme';
    ```
    * `Snowdog_Components/components/Atoms/variables/_<child-theme>-variables.scss`
    to overwrite globals variables which you need
2. Create separate module with frontools configuration (it should be required in theme composer dependencies).
Example: `vendor/module-child-theme-frontools`.
  * File structure:

  ```
    +--config
    |   +--browser-sync.json
    |   +--themes.json
    +--composer.json
  ```
  * `config/browser-sync.json`:

    Basic configuration for browsersync (set path for project's local url):
    ```json
    {
      "proxy": "child-theme.test",
      "rewriteRules": [
        {
          "match": ".child-theme.test",
          "replace": ""
        }
      ]
    }
    ```
  * `config/themes.json`

  <a name="theme-configuration">Themes configuration:</a>

  ```json
  {
    "alpaca": {
      "src": "vendor/snowdog/theme-frontend-alpaca",
      "dest": "pub/static/frontend/Snowdog/alpaca",
      "locale": ["en_US"],
      "ignore": [
        "**/node_modules/**",
        "**/Snowdog_Components/docs/**",
        "**/Snowdog_Components/build/**"
      ]
    },
    "child-theme": {
      "parent": "alpaca",
      "src": "vendor/theme-frontend-child-theme",
      "dest": "pub/static/frontend/Vendor/child-theme",
      "locale": ["en_US"],
      "ignore": [
        "**/node_modules/**",
        "**/Snowdog_Components/docs/**",
        "**/Snowdog_Components/build/**"
      ]
    }
  }
  ```
  * `composer.json`:

  add `snowdog/frontools` as a dependency,
  it is recommended to use latest version but you can choose the frontools version you need.
  ```json
  {
    "name": "vendor/module-child-theme-frontools",
    "type": "magento2-component",
    "require": {
      "snowdog/frontools": "^1.8.0"
    },
    "extra": {
      "map": [
        [
          "config",
          "dev/tools/frontools/config"
        ]
      ]
    }
  }
  ```
3. Install theme with frontools dependencies using composer:

`composer require vendor/theme-frontend-child-theme`

### Components
`theme-frontend-alpaca/Snowdog_Components` it's separate [fractal.build](https://fractal.build/guide/) project integrated with Magento 2 Theme. It is not set as a separate composer package (neither separate git repository) to work with Magento theme easier and faster.
But you can work on components separately and run them outside of Magento.

#### To build custom components based on Alpaca components:

1. Copy-paste `package.json`, `gulpfile.js`, `.eslintignore`, `.eslintrc`, `.sass-lint.yml`, `.stylelintrc` files into `theme-frontend-<child-theme>/Snowdog_Components`:

2. Update project names in `package.json` and `gulpfile.js`

3. Copy `styles.scss` from `theme-frontend-alpaca/Snowdog_Components/docs/styles/` and add child project variables import there.
The file should look like this:

```scss
// Variables
@import '../../components/Atoms/variables/variables';
@import '../../components/Atoms/variables/<child-theme>-variables';

// Components
@import '../../components/styles';

// Styles necessary only for Fractal purposes
@import 'fractal';
```
4. Create `modules.json` file with an array of paths to parent components libraries.
To inherit dependencies from Alpaca components, you have to define path to `theme-forntend-alpaca/Snowdog_Components`.
In most cases it will look like this:
  ```json
  [
      "../../../snowdog/theme-frontend-alpaca/Snowdog_Components"
  ]
  ```
5. Customize or add new files following the same structure as in Alpaca components

6. Run `yarn` and `yarn dev` to run components in fractal :tada:

If you don't work with Magento and want to use only components for some other project, you can create separate repository or/and composer package from `theme-frontend-alpaca/Snowdog_Components` and set dependence to Alpaca components (`theme-frontend-alpaca/Snowdog_Components`) inside it.

## Working with components & theme - customisation guide

### Customising components with variables

* Overwrite any variable in child theme global variable files (`Snowdog_Components/components/Atoms/variables/_<child-theme>-variables.scss`).
* Overwrite component's variable file:

Almost every component has its own `_component-variables.scss` file.
You can overwrite single variable and add it to the global file or copy particular file to the same structure inside `theme-frontend-child-name/Snowdog_Components` folder and change variables there.
* Create custom file with overwritten variables and import it in the main styles file

### Customising components

* Overwrite the same file in Snowdog_Components files structure (`.hbs`, `.config.js`, `.scss`)
* Creating new components and import styles for it

More about working with Alpaca Components directly in components' [README.md](Snowdog_Components/README.md)

### Customising theme files
* Follow standard Magento way to work with [Theme inheritance](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/themes/theme-inherit.html)
Remember:
* Layout XML file extends the one from parent theme, so there is no need to copy file, just add particular Layout XML file and add/remove/customize what you need.
* Template has to be overwritten in the child theme

### styles

Styles in Alpaca are separated:
* Components styles inside `theme-frontend-alpaca/Snowdog_Components` to work with components directly.
  Components are divided into Atomic groups (Atoms, Molecules, Organisms, Templates) and imported in [main styles file](Snowdog_Components/docs/styles/styles.scss)

  Those styles are also imported inside the theme in [main styles file](styles/styles.scss)
  Additionally, inside components, we have separated styles for [checkout](Snowdog_Components/docs/styles/checkout.scss).

* To add new component and import style for it, copy-paste the file for import styles inside group (ex. [Molecules styles import](Snowdog_Components/components/Molecules/_components.scss), and add your import there.
* During styles compilation for theme, following directories are ignored:
```
"**/node_modules/**",
"**/Snowdog_Components/docs/**",
"**/Snowdog_Components/build/**"
```
It should be added in `themes.json` in [frontools config](#theme-configuration) as ignores files
* Inside theme, we have main styles file and separate styles for [gallery](styles/gallery-styles.scss) and for [checkout](Magento_Checkout/styles/checkout.scss)


### JS
JS files from components are not imported in theme, they are only demonstrative. For theme we need to build JS files using RequireJS.
If you use ES6, you should use babel support, just add `.babel` in file name before `.js` extension, ex: [script for tabs](Magento_Theme/web/js/tab.babel.js)

### Sliders
Used lib: [slick slider](https://kenwheeler.github.io/slick/)
Magento Theme: One template for all sliders (theme-frontend-alpaca/Magento_Theme/templates/html/slider.phtml)
How to use:
1. If possible define block in xml:
```
<referenceBlock name="some_block_name">
    <arguments>
        //required option with uniq name
        <argument
            name="slider_block"
            xsi:type="string"
        >
            some_slider_name
        </argument>

        //required option for sliders using content type `pictures` as slides
        <argument
            name="slider_picture_block"
            xsi:type="string"
        >
            some_picture_block_name
        </argument>

        // optional option used to define slider variant
        <argument
            name="slider_class"
            xsi:type="string"
        >
            some_class_name
        </argument>

        // optional option used to define classes for slider title
        <argument
            name="slider_title_class"
            xsi:type="string"
        >
            heading heading--first-level margin-0
        </argument>
    </arguments>

    // required block with name parameter same as defined in slider_block argument
    <block
        class="Magento\Framework\View\Element\Template"
        name="some_slider_name"
        template="Magento_Theme::html/slider.phtml"
    />
</referenceBlock>
```
if not use:
```
$sliderBlock = $this->getLayout()
    ->createBlock("Magento\Framework\View\Element\Template")
    ->setTemplate("Magento_Theme::html/slider.phtml");
```
2. Initialize "before-slides" block in .phtml file
```
<?php
$sliderBlockBefore = $this->getSliderBlock(); //
$sliderBlockBefore->setData(['slider_html'=>'before-slides', ...]);
?>
<?= $sliderBlockBefore->toHtml(); ?>
```

"..." - additional config options:
```
$sliderBlock->setData([
    'slider_html'       => 'before-slides', //required option
    'slider_class'      => '', //optional slider class name
    'wrapper_class'     => '', //optional slider wrapper class name
    'display_title'     => '', //optional bool value
    'slider_title'      => '', //optional slider title
    'title_class'       => '', //optional slider title class name
    'content_before'    => '', //optional content before slides
    'arrows'            => '', //optional bool value
    'is_ajax'           => '', //bool value - set to true when slides are loaded with ajax

    //below options are optional and described in: [https://kenwheeler.github.io/slick/#settings]
    'infinite'          => '', //default true
    'mobile_first'      => '', //default true
    'center_mode'       => '', //default false
    'dots'              => '', //default true
    'autoplay'          => '', //default false
    'autoplay_speed'    => '', //default 3000
    'pause_on_focus'    => '', //default true
    'pause_on_hover'    => '', //default true
    'slides_to_show'    => '', //default 1
    'slides_to_scroll'  => '', //default 1
    'responsive_config' => '', //default false
]);
```

3. Render html for slides

```
<?php foreach ($items as $key => $item) : ?>
    <div class="slider__item">
        ...
    </div>
<?php endforeach ?>
```

4. Initialize "after-slides" block in .phtml file
```
<?php
$sliderBlockAfter->setData(['slider_html'=>'after-slides', ...]);
?>
<?= $sliderBlockAfter->toHtml(); ?>
```

5. Sliders created using Advanced Content Manager can be placed in any CMS content using Content Manager Content List widget.
Click on "Insert Widget..." button when editing CMS content with wysiwyg editor. Select "Content Manager Content List" as Widget Type. Set options:
"Content Type" -> "Sliders"
"Number of Contents to Display" -> 1
"Template" -> "Slider Content List Template"
"Condition" -> Slider ID is "your-slider-id"
"Attributes to show" -> not required
Click on "Insert Widget"

6. Full width variant

To display slider full width, just add  class `slider--full-with`, by extending block `home-slider` with argument `slider_class` in `cms_index_index.xml`.

## Alpaca Content - Set up your store, admin / db changes for alpaca theme

### Menu - to display menu use [Snowdog's magento2-menu](https://github.com/SnowdogApps/magento2-menu) module
1. Desktop menu:
  * identifier: main-desktop
  * Menu Main CSS Class: mega-menu
2. Mobile menu:
  * identifier: main-mobile
  * Menu Main CSS Class: dropdown-list
3. Footer links menu
  * identifier: main-footer
  * Menu Main Class: dropdown-list


You can use Alpaca styles implementation to use different configuration of menu items, by adding classes to nodes, check Alpaca components for details to build menu's adjusted to your project's needs, for example: to create a column, create node "wrapper" with Node CSS Classes: list__column list__column--hidden

### Header & Footer CMS blocks

We use cms block to display and customise some content in header and footer, check `vendor/snowdog/theme-frontend-colibri/Magento_Theme/layout/default.xml`  which cms block we use and Alpaca components to buld the content structure

### Homepage blocks

Homepage content is build using static blocks, check `vendor/snowdog/theme-frontend-colibri/Magento_Cms/layout/cms_index_index.xml` to see which cms blocks are displayed by default and check Alpaca components to build HTML structure

### SVG icons in cms block:

* {{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/svg-icon.phtml" icon="<icon-code>" icon_class="icon" title="<svg-title>" role="presentation" focusable="false"}}
* as `icon` value use icon id (Alpaca components)
* as `title` use accessible title that describe the icon image
* base class for icon is `icon` you can add, adjust class according to your needs
* a11y - use role="presentation" and focusable="false" if an icon is only decorative to hide in a11y API tree

### Responsive images

* to display responsive image for banners and slider items, we use:
* template `picture.phtml`: `vendor/snowdog/theme-frontend-colibri/Magento_Theme/templates/html/picture.phtml` you can adjust it for your needs in the child theme.
* usage of phtml in cms block/page:
```
{{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/picture.phtml" img480="<img-url>" img768="<img-url>" img960="<img-url>" img1024="<img-url>" img1328="<img-url>" img_full="<img-url>" picture_class="image" picture_alt="<descriptive image alternative text>" }}
```
* by default you can use different image for media query breakpoints, you can also implement images with different device-pixel-ratio, check the template's code for details
* `picture_class` is a required attribute

### Lazyloading images
We use [lazysizes](https://github.com/aFarkas/lazysizes) in project, so when you implement images with `<img>` tag (ex. in CMS content), use:
* placeholder in `src` attribute: `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=`
* image url in `data-src` attribute
* `lazyload` class on `<img>` tag

This solution is already implemented on responsive solution in `picture.phtml` template

### Preventing images from jumping on load
* to prevent jumping we need aspect ratio of image which we can calculate with formula: $aspectRatio = (imgHeight / imgWidth) * 100
* usage for single image (with lazyloading):
```
<div
    class="ratio-container"
    style="padding-bottom: $aspectRatio%"
>
    <img
        src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII="
        data-src="<image url>"
        alt="<descriptive alternative text for image>"
        class="ratio-image"
    />
</div>
```
* usage for images added with picture.phtml. To work we need set `img_ratio_width` and `img_ratio_height`:
```
{{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/picture.phtml" img_default="cms/home/banners/my-file.jpg" picture_class="image" img_ratio_width="656" img_ratio_height="264"}}
```
* aspect ratio for responsive images implemented using `picture.phtml`:
If responsive images - images for different viewports - have different aspect ratio than the default image, we should implement each of them: either in picture content type (if blackbird contentmanager is used), or in picture.phtml template. We need to add a unique `id` and `picture_class` attribute, which is required to make it works.
Use additional attributes for responsive aspect ratio:
  `img_ratio_width_480` -> for image max-width 480px
  `img_ratio_width_768` -> for image max-width 768px
  `img_ratio_width_1024` -> for image max-width 1024px
  `img_ratio_width_1328` -> for image min-width 1025px

usage example:
```
{{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/picture.phtml" img_768="<img-url>" img_1024="<img-url>" img_full="<img-url>" img_default="<img-url>" picture_class="image" picture_alt="<descriptive alternative text for image>" img_ratio_width="1200" img_ratio_height="600" img_ratio_width_768="768" img_ratio_height_768="500" img_ratio_width_1024="472" img_ratio_height_1024="376" img_ratio_width_1328="1328" img_ratio_height_1328="1200" id="<unique-id>"}}
```
!Important Note:
If responisve image aspect ratio is added, additional styles inline are generated, so use it ONLY if needed (if aspect ratio for responsive image is different that for default image) to keep your code as clean as possible.

### Blog
* we use Blackbird Content Manager (paid extension) for blog

### Shipping latency - snowdog/module-shipping-latency

* is an extension to display additional information about shipping time
* Extension work on catalog and product detail page, to customise it you need to set attribute (dropdown) option and create cms block for popup content
* check [Shipping latency extension details](https://lab.snowdog.pro/colibri/magento2-shipping-latency) and theme implementation in: `vendor/snowdog/theme-frontend-colibri/Magento_Catalog/templates/product/list.phtml` (for catalog) and `vendor/snowdog/theme-frontend-colibri/Magento_Catalog/templates/product/view/shipping-latency.phtml` (for product detail page)

### Bullet points - snowdog/module-bullet-points
* Extension is used to display product attributes listed on product list item on catalog page
* check [Bullet points extension details](https://lab.snowdog.pro/colibri/magento2-bullet-points)

### Category attributes - snowdog/module-category-attributes
* it add a field for additional content on the bottom of catalog page
* check [Category attributes extension details](https://lab.snowdog.pro/colibri/magento2-category-attributes)

### Product attribute description - snowdog/module-product-attribute-description
* Extension allow to add additional description for attribute, implemented from admin level
* check [Product attribute description extension details](https://lab.snowdog.pro/colibri/magento2-product-attribute-description)
* in theme is implemented on catalog level as an additional tooltip, check implementation:
  * `vendor/snowdog/theme-frontend-colibri/Smile_ElasticsuiteCatalog/templates/layer/filter/attribute.phtml`
  * `vendor/snowdog/theme-frontend-colibri/Magento_Swatches/templates/product/layered/renderer.phtml` (swatches)
  * `vendor/snowdog/theme-frontend-colibri/Smile_ElasticsuiteCatalog/templates/layer/filter/slider.phtml` (range filter)

### Wishlist unlocker -  snowdog/module-wishlist-unlocker
* This extension allow to show more than 3 items in sidebar wishlist (M2 default is 3)
* Limit value can be set in admin: Store -> COnfiguration -> Customer -> Wish List -> General option -> Items Limit

## Magepack
for Magento version < 2.3.6, mixins.js module patch is required/ [Patch provided and explained here](https://github.com/magento/baler/issues/23)

Magepack is already integrated with [Frontools](https://github.com/SnowdogApps/magento2-frontools)

### Generate magepack config
To start using magepack we need to generate magepack config.
Before start:
* clear Magento cache
* compile assest for production mode (in `/tools` directory):
```
yarn styles --prod && yarn babel --prod && yarn svg
```
* generate config with command (with appropriate path for each site):
```
yarn magepackGenerate --cms-url="https://baseUrl/" --category-url="https://baseUrl/categoryPage" --product-url="https://baseUrl/productPage"
```
Magepack config will be generated in `/tools` as `magepack.config.js` (which is a symlink to vendor/snowdog/frontools/magepack.config.js).
You can move this file to main repo or to other location, add this to `.gitignore` and commit changes.

With commited magepack config, during deployment, after assets compilation, run magepack bundling:
```
yarn magepackBundle --config <config_path>
```

### Add assets
* If you added fonts or external assets that can be load with `preload`, add them in:
`vendor/snowdog/theme-frontend-alpaca/Magento_Theme/templates/root.phtml` with `preload` attribute.

* if assets come from external module which is not always enable, add preload assets in following way:
in module folder inside theme:
  * using xml layout add block in `head.additional` and in custom template add assets:
  ```
  <link
    href="<?= $this->getViewFileUrl('Namespace_ModuleName::css/styles-file.min.css') ?>"
    rel="stylesheet preload"
    as="style"
  />
  ```
  an example can be found here: `vendor/snowdog/theme-frontend-alpaca/Amasty_GdprCookie`

### Test magepack locally

To test magepack locally:
* clear and enable cache,
* enable merging, minifying and magepack budnling in your db:
```
bin/magento config:set dev/js/enable_magepack_js_bundling 1
bin/magento config:set dev/js/merge_files 1
bin/magento config:set dev/js/minify_files 1
bin/magento config:set dev/css/minify_files 1
bin/magento config:set dev/css/merge_css_files 1
```
* run tools compilation for production:
```
yarn styles --prod && yarn babel --prod && yarn svg
```
* generate magepack config:
yarn magepackGenerate ..

* switch to production mode:
```
bin/magento deploy:mode:set production
```
* bundle magepack
in `/tools`
```
yarn magepackBundle --config <config_path>
```
* clear cache
* check results in browser
