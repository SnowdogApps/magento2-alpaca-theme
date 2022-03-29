# Working with Alpaca

You'll find here information how to work with different features of Alpaca Theme.
For installation details, check [Step by step Alpaca installation guide](./alpaca-step-by-step.md)

## Table of Contents
  * [Requirements](#requirements)
  * [Frontools](#frontools)
  * [Components](#components)
  * [Customisation of Alpaca Components](#alpaca-components-customisation)
  * [Customising theme files](#customising-theme-files)
  * [Styles](#styles)
  * [JS](#js)
  * [Images](#images)
    * [Responsive images](#responsive-images)
    * [Lazyloading images](#lazyloading-images)
    * [Preventing images from jumping on load](#preventing-images-from-jumping-on-load)
  * [SVG icons](#svg-icons)
  * [Sliders](#sliders)
  * [Header and Footer](#header-and-footer)
  * [Homepage](#homepage)
  * [Working with Snowdog Modules](#working-with-snowdog-modules)
  * [Magepack](#magepack)

## Requirements
* Working Magento 2.4.3
* Node version 16
* [yarn](https://yarnpkg.com/) (we recommended yarn but you can also use npm to install dependencies and run node command).

## Frontools
  Set of front-end tools for Magento 2. Run commands below in `tools`.
  - When developing run comand below to watch for style changes and running processing tasks:
    ````
    yarn watch
    ````
  - You can also use `yarn dev` to run [browserSync](https://browsersync.io/) and inheritance, babel, styles, watch tasks.
    ````
    yarn dev
    ````
      **NOTE!** To run `yarn dev`, set correct proxy values in file - `dev/tools/frontools/config/browser-sync.json`
  - After every application upgrade (`bin/magento setup:upgrade` command) run:
    ````
    yarn styles && yarn svg && yarn babel
    ````
  - Config files are kept in `dev/tools/frontools/config`.
  - `themes.json` file is essential. It needs to be set properly, without it frontools won't work. See [themes.json example.](https://github.com/SnowdogApps/magento2-frontools/blob/master/config/themes.json.sample)
  - Setting up frontools creates symlink, after set up, `yarn` commands are available from `<root-project-folder>/tools`
  - To learn how to fully utilize frontools see [frontools readme.md](https://github.com/SnowdogApps/magento2-frontools#magento-2-frontools)

## Components
  * `theme-frontend-alpaca/Snowdog_Components` it's separate [fractal.build](https://fractal.build/guide/) tool integrated with Alpaca Theme, which allows you to work with Magento UI styles easier and faster. It is not set as a separate composer package (neither separate git repository) to work with Magento theme easier and faster. But you can work on components separately and run them outside of Magento.
  * Check it out, go to **Snowdog_Components** (`app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components`), install node dependencies and run dev command:
    ````
    yarn
    yarn dev
    ````
  * Go to `http://localhost:4000/` to play with components. To learn how to change components, **read section below**.
  * Component styles in Alpaca follow [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/). Components are divided into Atomic groups, that is:
      * Atoms
      * Molecules
      * Organisms
      * Templates<br />
  * Styles written in fractal components are used in Magento theme. JS scripts and hbs templates are only for fractal purpose and they are not used inside Magento theme.
  * Check full styles structure in `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components`
  * **NOTE!** Detailled instruction how to set child theme inherited from Alapca theme you can find in out [Step by step Alpaca installation guide](./alpaca-step-by-step.md)
## Alpaca Components customisation
  - Customising components with variables
      * You can overwrite any of Alpaca Components variabales in child theme in
      `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Atoms/variables/_CHILD_THEME_NAME-variables.scss`
      * Child theme variables should be imported after Alpaca variables. Use values without `!default` to change variables declared in Alpaca theme or create new variables for your needs.
      * You can customise your styles by changing variables values - global or components variables), extending styles by using Alpaca's and custom and overwrite styles by creating totally new styles for components.
      * For Components, we use 2 create 2 main `.scss` files in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/docs/styles/`:
        * `styles.scss`
        * `checkout.scss`
      * Main `.scss` files are required in child components to use custom child theme's variables.
  - Customising components
      * Customize or add new files following the same structure as in Alpaca Components.
      Create file `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Molecules/button/_button-extend.scss`
      ```scss
      @import 'CHILD_THEME_NAME-button-variables'; // optional;
      @import 'button';
      @import 'CHILD_THEME_NAME-button';
      ```
      Inside `button-extend.scss`, `CHILD_THEME_NAME-button-variables` is a file where you change component's variable, `button` is an original Alpaca Component style and `CHILD_THEME_NAME-button` contains additional or overwritten by child theme styles. <br />
      * you need to import extended component, to do it, copy file(s) from `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/styles` and change `@import '../Molecules/button/button';` to `@import '../Molecules/button/button-extend';`
      * You can overwrite any component in your child theme by maintaining the same file structure (`.hbs`, `config.js`, `.scss`).
      * Read more about Alpaca components [here](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Snowdog_Components/README.md)
## Customising theme files
  * To customise layout `XML` files and template `.phtml` files, follow Magento theme inheritance [standard.](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/themes/theme-inherit.html)
  * Rememeber that:
    * Templates have to be overwritten in child theme
    * Layouts can be extended from parent theme, so there is no need for copying and overwriting file. Add, remove, change what you need.
## Styles
Are was mentionned before, Styles in Alpaca are separated:
* Components styles inside `theme-frontend-alpaca/Snowdog_Components` to work with components directly.<br>

Those styles are also imported inside the theme in `theme-frontend-alpaca/styles/` directory
* For Magento we need to create 3 main `.scss` files inside child theme:
  * `styles.scss` in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/styles/styles.scss` where components and theme styles are imported. And where child theme variable are imported after Alpaca variables
  * `critical.scss` in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/styles/critical.scss` to load basic critical styles for page loading.
  * `critical-checkout.scss` in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/styles/critical-checkout.scss` to load basic critical styles for checkout page loading.
  * `gallery-styles.scss` in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/styles/gallery-styles.scss` to load styles for fotorama gallery.
  * `checkout.scss` in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Magento_Checkout/styles/checkout.scss` where components and checkout styles are imported

* During styles compilation for theme, following directories are ignored:
```
"**/node_modules/**",
"**/Snowdog_Components/docs/**",
"**/Snowdog_Components/build/**"
```
It should be added in `themes.json` in [frontools config](#https://github.com/SnowdogApps/magento2-frontools/blob/master/config/themes.json.sample) as ignores files

## JS
* JS files from components are not imported in theme, they are only demonstrative. For theme we need to build JS files using RequireJS.
* If you use ES6 in theme's js files, you should use babel support, just add `.babel` in file name before `.js` extension, example: [script for tabs](../Magento_Theme/web/js/tab.babel.js) and run `yarn babel` with frontools

## Images
### Responsive images

* to display responsive image for banners and slider items, we use:
* template `picture.phtml`: `vendor/snowdog/theme-frontend-alpaca/Magento_Theme/templates/html/picture.phtml` you can adjust it for your needs in the child theme.
* usage of phtml in cms block/page:
```
{{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/picture.phtml" img480="<img-url>" img768="<img-url>" img960="<img-url>" img1024="<img-url>" img1328="<img-url>" img_full="<img-url>" picture_class="image" picture_alt="<descriptive image alternative text>" }}
```
* by default you can use different image for media query breakpoints, you can also implement images with different device-pixel-ratio, check the template's code for details
* `picture_class` is a required attribute

## Lazyloading images
We use [lazysizes](https://github.com/aFarkas/lazysizes) in project, so when you implement images with `<img>` tag (ex. in CMS content), use:
* placeholder in `src` attribute: `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=`
* image url in `data-src` attribute
* `lazyload` class on `<img>` tag

This solution is already implemented on responsive solution in `picture.phtml` template

## Preventing images from jumping on load
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
If responsive image aspect ratio is added, additional styles inline are generated, so use it ONLY if needed (if aspect ratio for responsive image is different that for default image) to keep your code as clean as possible.

## SVG icons

* {{block class="Magento\Framework\View\Element\Template" template="Magento_Theme::html/svg-icon.phtml" icon="<icon-code>" icon_class="icon" title="<svg-title>" role="presentation" focusable="false"}}
* as `icon` value use icon id (Alpaca components)
* as `title` use accessible title that describe the icon image
* base class for icon is `icon` you can add, adjust class according to your needs
* a11y - use role="presentation" and focusable="false" if an icon is only decorative to hide in a11y API tree
## Sliders
Sliders in Alpaca re build with `blackbird/contentmanager` extension<br>
* There is one template for all sliders. You can find it in [Magento_Theme/templates/html/slider.phtml](../Magento_Theme/templates/html/slider.phtml). It is based on [slick slider](https://kenwheeler.github.io/slick/).<br>
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

## Header and Footer
  * To  display and customise content in header or footer we use CMS block ([read more](https://docs.magento.com/user-guide/cms/blocks.html))
  * See default structure - `vendor/snowdog/theme-frontend-alpaca/Magento_Theme/layout/default.xml`.
## Homepage
  * To display homepage content we use static blocks.
  * See default structure - `vendor/snowdog/theme-frontend-alpaca/Magento_Cms/layout/cms_index_index.xml`

## Working with Snowdog Modules
  Snowdog Modules is a set of open source modules used with Alpaca Theme installed via [Magento 2 Alpaca Packages](https://github.com/SnowdogApps/magento2-alpaca-packages). You can find list of installed modules in [README description](../README.md#description) section.

  ### Magento2 menu - snowdog/magento2-menu
  * Provides powerful menu editor to replace category based menus in Magento 2.
  * Displays desktop menu, mobile menu or footer links menu
  * You can use Alpaca styles implementation to use different configuration of menu items, by adding classes to nodes, check Alpaca components for details to build menu's adjusted to your project's needs, for example: to create a column, create node "wrapper" with Node CSS Classes: list__column list__column--hidden
  * Example data can be imported [with alpaca db queries](https://github.com/SnowdogApps/create-alpaca-theme/blob/master/templates/database/queries.sql)).
  * See [Magento 2 menu details](https://github.com/SnowdogApps/magento2-menu).
  ### Shipping latency - snowdog/module-shipping-latency
  * It is an extension allowing to display additional informations about shipping time
  * Extension work on catalog and product detail page, to customise it you need to set attribute (dropdown) option and create cms block for popup content
  * See [Shipping latency module details](https://github.com/SnowdogApps/magento2-shipping-latency).
  * [Theme implementation for catalog](../Magento_Catalog/templates/product/list.phtml)
  * [Theme implementation for PDP](../Magento_Catalog/templates/product/view/shipping-latency.phtml)

  ### Bullet points - snowdog/module-bullet-points
  * Extension is used to display product attributes listed on product list item on catalog page
  * See [Bullet points module details](https://github.com/SnowdogApps/magento2-bullet-points).

  ### Category attributes - snowdog/module-category-attributes
  * This extension adds a field for additional content on the bottom of catalog page
  * See [Category attributes module details](https://github.com/SnowdogApps/magento2-category-attributes).

  ### Product attribute description - snowdog/module-product-attribute-description
  * This extension allows to add additional description for attribute, implemented from admin level
  * See [Product attribute description module details](https://github.com/SnowdogApps/magento2-product-attribute-description).
  * [theme implementation on catalog level as an additional tooltip](../Smile_ElasticsuiteCatalog/templates/layer/filter/attribute.phtml)
  * [theme implementation in swatches](../Magento_Swatches/templates/product/layered/renderer.phtml)
  * [theme implementation in range filter](../Smile_ElasticsuiteCatalog/templates/layer/filter/slider.phtml)
  ### Wishlist unlocker - snowdog/module-wishlist-unlocker
  * This extension allows to show more than 3 items in sidebar wishlist (M2 default is 3)
  * Limit value can be set in admin: `Store -> Configuration -> Customer -> Wish List -> General Option -> Items Limit`
  * See [Wishlist unlocker description module details](https://github.com/SnowdogApps/magento2-wishlist-unlocker).

## Blog
* we use Blackbird Content Manager `blackbird/contentmanager` for blog

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
