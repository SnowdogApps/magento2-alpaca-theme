# Colibri - components & theme for Magento 2.3

## Description
Colibri Theme for Magento 2 is part of a `colibri-packages`
To make it work with all features, we use following modules:

Open source
* magepal/magento2-gmailsmtpapp
* magepal/magento2-googletagmanager
* mailchimp/mc-magento2
* smile/elasticsuite
* snowdog/module-bullet-points
* snowdog/module-category-attributes
* snowdog/module-colibri-acm-fixes
* snowdog/module-colibri-acm
* snowdog/module-menu
* snowdog/module-product-attribute-description
* snowdog/module-shipping-latency
* snowdog/theme-frontend-colibri
* webshopapps/module-matrixrate

Additional, non-opensource modules the theme works with
* amasty/adminactionslog
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
`composer require snowdog/colibri-packages`

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
        "snowdog/theme-frontend-colibri": "<latest-version>",
        "vendor/module-child-theme-frontools": "<latest-version>"
    },
    "autoload": {
        "files": [
            "registration.php"
        ]
    }
  }
  ```
  * in `theme.xml` set Colibri theme as a parent: `<parent>Snowdog/colibri</parent>`
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
    "colibri": {
      "src": "vendor/snowdog/theme-frontend-colibri",
      "dest": "pub/static/frontend/Snowdog/colibri",
      "locale": ["en_US"],
      "ignore": [
        "**/node_modules/**",
        "**/Snowdog_Components/docs/**",
        "**/Snowdog_Components/build/**"
      ]
    },
    "child-theme": {
      "parent": "colibri",
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
`theme-frontend-colibri/Snowdog_Components` it's separate [fractal.build](https://fractal.build/guide/) project integrated with Magento 2 Theme. It is not set as a separate composer package (neither separate git repository) to work with Magento theme easier and faster.
But you can work on components separately and run them outside of Magento.

#### To build custom components based on Colibri components:

1. Copy-paste `package.json`, `gulpfile.js`, `.eslintignore`, `.eslintrc`, `.sass-lint.yml`, `.stylelintrc` files into `theme-frontend-<child-theme>/Snowdog_Components`:

2. Update project names in `package.json` and `gulpfile.js`

3. Copy `styles.scss` from `theme-frontend-colibri/Snowdog_Components/docs/styles/` and add child project variables import there.
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
To inherit dependencies from Colibri components, you have to define path to `theme-forntend-colibri/Snowdog_Components`.
In most cases it will look like this:
  ```json
  [
      "../../../snowdog/theme-frontend-colibri/Snowdog_Components"
  ]
  ```
5. Customize or add new files following the same structure as in Colibri components

6. Run `yarn` and `yarn dev` to run components in fractal :tada:

If you don't work with Magento and want to use only components for some other project, you can create separate repository or/and composer package from `theme-frontend-colibri/Snowdog_Components` and set dependence to Colibri components (`theme-frontend-colibri/Snowdog_Components`) inside it.

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

More about working with Colibri Components directly in components' [README.md](Snowdog_Components/README.md)

### Customising theme files
* Follow standard Magento way to work with [Theme inheritance](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/themes/theme-inherit.html)
Remember:
* Layout XML file extends the one from parent theme, so there is no need to copy file, just add particular Layout XML file and add/remove/customize what you need.
* Template has to be overwritten in the child theme

### styles

Styles in Colibri are separated:
* Components styles inside `theme-frontend-colibri/Snowdog_Components` to work with components directly.
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
