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
$sliderBlock = $this->getSliderBlock(); //
$sliderBlock->setData(['slider_html'=>'before-slides', ...]);
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
    'arrows'            => '', //optional value (yes/no)
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
$sliderBlock->setData(['slider_html'=>'after-slides', ...]);
?>
<?= $sliderBlock->toHtml(); ?>
```
