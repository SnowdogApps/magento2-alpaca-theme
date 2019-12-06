# Colibri - components & theme for Magento 2.3

## Description
Colibri Theme for Magento 2 is part of a package: [snowdog/module-colibri-opensource-2.3-packages](link-on-github).
To make it work with all features, we use following modules:

Open source
* magepal/magento2-gmailsmtpapp - github
* magepal/magento2-googletagmanager - github
* mailchimp/mc-magento2 - github
* smile/elasticsuite - github
* snowdog/module-bullet-points - lab/repo.snowdog.pro, to move
* snowdog/module-category-attributes - lab/repo.snowdog.pro, to move
* snowdog/module-colibri-acm-fixes - lab/repo.snowdog.pro, to move
* snowdog/module-menu - github
* snowdog/module-product-attribute-description - lab/repo.snowdog.pro, to move
* snowdog/module-shipping-latency - lab/repo.snowdog.pro, to move
* snowdog/theme-frontend-colibri - lab/repo.snowdog.pro, to move
* webshopapps/module-matrixrate - github

Additional
* amasty/adminactionslog - lab/repo.snowdog.pro
* amasty/module-gift-card - lab/repo.snowdog.pro
* amasty/module-google-rich-snippets - lab/repo.snowdog.pro
* amasty/module-product-feed - lab/repo.snowdog.pro
* amasty/module-shipping-rules - lab/repo.snowdog.pro
* amasty/module-special-promo - lab/repo.snowdog.pro
* amasty/module-store-locator - lab/repo.snowdog.pro
* amasty/payrestriction - lab/repo.snowdog.pro
* amasty/shiprestriction - lab/repo.snowdog.pro
* apptrian/facebook-pixel - lab/repo.snowdog.pro
* blackbird/contentmanager - lab/repo.snowdog.pro
* vladimirpopov/webforms - lab/repo.snowdog.pro


## Installation
Install whole package using composer:
`composer require snowdog/module-colibri-opensource-2.3-packages`

### Theme
1. Create child theme composer repository:
  * default Magento 2 theme files: `theme.xml`, `regostration.php`, `preview.jpg`, `.gitignore`, `composer.json`
  * `composer.json` example file:
  ```json
  {
    "name": "vendor/theme-frontend-child-theme",
    "description": "Child frontend theme",
    "type": "magento2-theme",
    "require": {
        "snowdog/theme-frontend-colibri": "dev-master",
        "vendor/module-child-theme-frontools": "dev-master"
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
    overwrite globals variables which you need
2. Create frontools repo with config (it should be required in theme composer dependencies)
To store configuration for theme, use separate module: `vendor/module-child-theme-frontools`.
  * File structure:
    +--config
    |   +--browser-sync.json
    |   +--themes.json
    +--composer.json
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
  <a name="#theme-configuration">Themes configuration:</a>
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
      "dest": "pub/static/frontend/Snowdog/child-theme",
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
`theme-frontend-colibri/Snowdog_Components` it's separate [fractal.build](https://fractal.build/guide/) project integrated with Magento 2 Theme. It is not set as a separate composer package (neither separate git repository) to make work with Magento theme easier and faster.
But you can work on components separately and run them outside of Magento.

To build custom components based on Colibri components:

1. Copy-paste `package.json`, `gulpfile.js`, `.eslintignore`, `.eslintrc`, `.sass-lint.yml`, `.stylelintrc` files into `theme-frontend-<child-theme>/Snowdog_Components`:

2. Update project names in `package.json` and `gulpfile.js`

3. copy `styles.scss` from `theme-frontend-colibri/Snowdog_Components/docs/styles/` and add child project variables import there. The file should look like this:

```scss
// Variables
@import '../../components/Atoms/variables/variables';
@import '../../components/Atoms/variables/<child-theme>-variables';

// Components
@import '../../components/styles';

// Styles necessary only for Fractal purpoueses
@import 'fractal';
```
4. Create `modules.json` file with an array of paths to parent components libraries. To inherit dependencies from Colibri components, you have to define path to `theme-forntend-colibri/Snowdog_Components`
   In most cases it will look like this:
   ```json
  [
      "../../../snowdog/theme-frontend-colibri/Snowdog_Components"
  ]
  ```
5. Customize or add new files following the same structure as in Colibri components

6. run `yarn` and `yarn dev` to run components in fractal.build. :tada

If you don't work with Magento and want to use only components for some other project, you can create separate repository or/and composer package from `theme-frontend-colibri/Snowdog_Components` and set dependencie to Colibri components (`theme-frontend-colibri/Snwodog_Components`) inside it.

## Working with components & theme - customisation guide

### Customising components with variables

* Overwrite particular variables in child theme global variable files (`Snowdog_Components/components/Atoms/variables/_<child-theme>-variables.scss`).
* Overwrite component's variable file:
Almost every component has its own `_component-variables.scss` file.
You can overwrite single variable and add it to the global file or copy particular file to the same structure inside child-theme/Snwodgog_Components folder and change variables there.
* Create custom file with overwritten variables and import it in the child theme styles file

### Customising components

* Overwriting the same file in Snowdog_Components files structure (`.hbs`, `.config.js`, `.scss`)
* Creating new components and import styles for it

More about working with Colibri Components directly in components' [README.md](Snowdog_components/README.md)

### Customising theme files
* Templates - to customise template file, just overwrite it in the child theme
* Layout XML - Layout file extends the one from parent theme, so there is no need to copy file, just add particular Layout XML file and add what you need.

### styles

Styles in Colibri are separated:
* Components styles - inside Snowdog_Components and used to work with components directly.
  Inside components there are divided into Atomic groups (Atoms, Molecules, Organisms, Templates) and imported in [mian styles file](Snowdog_Components/docs/styles/styles.scss)
  Additionally, we have separated styles for [checkout](Snowdog_Components/docs/styles/checkout.scss)
  Those styles are imported too inside the theme in main styles file.
* To add new component and import style for it, copy-past the file for import styles inside group (ex. [Molecules styles import](Snowdog_Components/components/Molecules/_components.scss), and add your import there.
* during styles compilation for theme, following directories are ignored:
```
"**/node_modules/**",
"**/Snowdog_Components/docs/**",
"**/Snowdog_Components/build/**"
```
It should be added in `themes.json` in [frontools config](#theme-configuration) as ignores files
* Inside theme, we have main styles file and separate styles for [gallery](styles/gallery-styles.scss) and for [chekout](Magento_Checkout/styles/checkout.scss)


### Js
Js files from components are not imported in theme, they are only demonstrative. For theme we need to build js files using require js.
If you use ES6, you should use babel support, just add `.babel` in file name before `.js` extension, ex: [script for tabs](Magento_Theme/web/js/tab.babel.js)
