# Set up Alpaca Theme on Magento 2.4

This is a step-by-step guide of how to install Snowdog's Alpaca Theme and child theme based on Alpaca Theme on working Magento 2.4 project.<br />
If you need to help with setup Magento project locally, check our [Magento 2 setup guide here](magento-setup-guide.md) <br />

Alpaca Theme components and templates preview - see [Alpaca Components Preview](https://magento2-alpaca-theme-git-master-snowdog1.vercel.app/)<br />
Alpaca Theme preview: [Alpaca Magento OS](https://alpaca-community.snowdog.dev/), [Alpaca Magento Commerce](https://alpaca-commerce.snowdog.dev/)<br />

## Create Alpaca Child Theme with npx:
There is a tool that make a full child theme based on alpaca in existing Magento project with one command:
Try it out running `npx create-alpaca-theme` in your Magento root directory (node@16 and working Magento 2.4 required).
More info: [alpaca boilerplate npm project page](#to-do-here)

// TO DO update table of contents
## Table of Contents
  * [Requirements](#requirements)
  * [Alpaca Versions](#alpaca-versions)
  * [Set up Alpaca Theme](#set-up-alpaca-theme)
  * [Set up Alpaca Child Theme](#set-up-alpaca-child-theme)
  * [Working with Alpaca Theme](#working-with-alpaca-theme)
  * [Useful Links](#useful-links)

## Requirements
* Working Magento 2.4 project
* Node ver 16

## Alpaca versions
// TO DO - information about Alpaca Version for Magento OS versions

## Set up Alpaca Theme
  When using **Valet Plus** run commands in main project directory, with **Warden** remember to launch shell session see [Warden usage and common commands](https://docs.warden.dev/usage.html)

1. Add Snowdog Alpaca Packages: <br />
    ```
    composer require snowdog/module-alpaca-packages
    ```
    See [content of Alpaca Packages here](https://github.com/SnowdogApps/magento2-alpaca-packages)
2. Install Alpaca Theme latest version:
    ```
    composer require snowdog/theme-frontend-alpaca:2.26.*
    ```
3. Add frontools:
    ```
    composer require snowdog/frontools
    ```
    [Learn about Frontools here](https://github.com/SnowdogApps/magento2-frontools)
4. Run db queries to add to your database all Alpaca CMS block & content
    [Link to db queries](#link-here)

5. Upgrade application, DB data and schema (_[learn more here](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db-upgr.html#instgde-cli-db-upgr)_):
    ```
    bin/magento setup:upgrade
    ```
6. Go to `vendor/snowdog/frontools` and run commands:
    ````
    yarn install
    yarn setup
    yarn styles && yarn svg && yarn babel
    ````
    Setting up frontools creates symlinks. After set up, `yarn` commands are available from `<root-project-folder>/tools`<br/>
7. Log in to admin panel.
    - You can find admin page URL in `env.php` file in `backend` section
    - You can create new admin user by using magento CLI:
        ```
        bin/magento admin:user:create --admin-user="YOUR_USER_NAME" --admin-password="YOUR_PASS" --admin-firstname="Test" --admin-lastname="Test" --admin-email="test@test.com"
        ```
    - Go to `Content -> Design -> Configuration`, and choose Alpaca Theme
8. Flush cache storage - `System -> Tools -> Cache Managment` or run command below:
    ```
    bin/magento cache:flush
    ```
9. Run Alpaca components
 - go to `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components`
 - run `yarn` to install node dependencies
 - run `yarn dev` and check localhost to see Alpaca components in development mode.
<br/><br/>
Congrats! You've installed Alpaca Theme successfully!<br/>

To create your own child theme see instructions below:
## Set up Alpaca Child Theme
After installing Alpaca theme, you can create child theme based on Alpaca Theme as a separate composer package (in `vendor` directory) or in `app/design/frontend` directory.
In this guide, we will create it in `app/design/frontend`.

1. Go to `app/design/frontend` and create directories with your Vendor name and with you theme name: `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME`, example: `app/design/frontend/Snowdog/alpaca-child`
2. Create configuration theme files:
Inside `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME`, create `registration.php` and `theme.xml` files.
    * `registration.php`:

    ```php
    <?php

    \Magento\Framework\Component\ComponentRegistrar::register(
        \Magento\Framework\Component\ComponentRegistrar::THEME,
        'frontend/VENDOR_NAME/CHILD_THEME_NAME',
        __DIR__
    );
    ```

    adjust `VENDOR_NAME` and `CHILD_THEME_NAME`
    * `theme.xml`:

    ```xml
    <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
        <title>CHILD_THEME_NAME</title>
        <parent>Snowdog/alpaca</parent>
        <media>
            <preview_image>preview.jpg</preview_image>
        </media>
    </theme>
    ```
    Adjust `CHILD_THEME_NAME`

3. Copy theme files:
Copy following files from Alpaca theme (`vendor/snowdog/theme-frontend-alpaca`):
* `.editorconfig`
* `.eslintignore`
* `.gitignore`
* `preview.jpg`
You can create also `README.md` and `CHANGELOG.md` files.

4. Adjust styles inheritance in child theme:
### Add basic styles and child theme variables:
In components:
  * `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Atoms/variables/_CHILD_THEME_NAME-variables.scss` - child theme variables, where you can create basic variables for a child theme or overwrite those from `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/Atoms/variables/_variables.scss` - change assigned value without `!default`)
    * `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/docs/styles/styles.scss`:
    ```scss
    // Variables
    @import '../../components/Atoms/variables/variables';

    // Child theme variables
    @import "../../components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components
    @import '../../components/styles/critical';
    @import '../../components/styles/non-critical';

    // Styles necessary only for Fractal purposes
    @import 'fractal';
    ```

  *  `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/docs/styles/checkout.scss`
    ```scss
    // Variables
    @import '../../components/Atoms/variables/variables';

    // Child theme variables
    @import "../../components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components
    @import '../../components/styles/critical-checkout';
    @import '../../components/styles/checkout';

    // Styles necessary only for Fractal purposes
    @import 'fractal';
    ```

In theme:
  * `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/styles.scss`:

    ```scss
    // Variables
    @import '../Snowdog_Components/components/Atoms/variables/variables';

    // Child theme variables
    @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components
    @import '../Snowdog_Components/components/styles/non-critical';

    // Theme partials
    @import '../Amasty_Storelocator/styles/module';
    @import '../Amasty_GiftCard/styles/module';
    @import '../Magento_Ui/styles/module';
    @import '../Magento_Catalog/styles/module';
    @import '../Magento_Customer/styles/module';
    @import '../VladimirPopov_WebForms/styles/module';
    @import '../Magento_PageBuilder/styles/module';
    @import '../Magento_QuickOrder/styles/module';
    @import '../Yotpo_Yotpo/styles/module';
    @import '../Magento_Msrp/styles/module';
    @import '../PayPal_Braintree/styles/module';
    @import '../Magento_ReCaptchaFrontendUi/styles/module';
    @import '../Magento_Theme/styles/module-non-critical';

    // Show sections hidden in critical.scss
    .page-main,
    .footer {
        display: block !important;
    }
    ```

  * `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/critical.scss`:

    ```scss
    // Variables
    @import '../Snowdog_Components/components/Atoms/variables/variables';

    // Child theme variables
    @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components
    @import '../Snowdog_Components/components/styles/critical';
    @import '../Magento_Theme/styles/module-critical';

    // Hide non-critical sections, before loading full stylesheet
    .page-main,
    .footer,
    .breadcrumbs {
        display: none;
    }
    ```
  * `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/critical-checkout.scss`:
  ```scss
    // Variables
    @import '../Snowdog_Components/components/Atoms/variables/variables';

    // Child theme variables
    @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components
    @import '../Snowdog_Components/components/styles/critical-checkout';
    @import '../Magento_Theme/styles/module-critical';

    // Hide non-critical sections, before loading full stylesheet
    .page-main,
    .footer,
    .breadcrumbs {
        display: none;
    }

  ```
  * `app/design/VENDOR_NAME/CHILD_THEME_NAME/Magento_Checkout/styles/checkout.scss`:
  ```scss
    // Mixins
    @import '../../Snowdog_Components/components/styles/mixins';

    // Component variables
    @import '../../Snowdog_Components/components/Atoms/variables/variables';
    // Child theme variables
    @import "../../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

    // Components partials for checkout
    @import '../../Snowdog_Components/components/styles/checkout';

    // Theme partials for checkout
    @import '../../Amasty_GiftCard/styles/module';
    @import '../../Magento_Msrp/styles/module';
    @import '../../Magento_Ui/styles/module';
    @import '../../Magento_PageBuilder/styles/module';
    @import '../../Magento_ReCaptchaFrontendUi/styles/module';
    @import '../../Magento_Theme/styles/module-non-critical';
    @import '../../PayPal_Braintree/styles/module';

    // Show sections hidden in critical.scss
    .page-main,
    .footer {
        display: block !important;
    }
  ```


### Extend components styles:
It's a quick guide to create extended styles for `button` component.
More details about styles in Alpaca Theme & components and theits inheritance, you can find in [Working with Alpaca guide](./working-with-alpaca.md)

  * Button Alpaca components styles can be found at: `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/Molecules/button/_button.scss`
  * In your child theme, create 3 files:
    1) `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Molecules/button/_CHILD_THEME_NAME-button-variables.scss`:
    ```scss
    // change button text color:
    $button__text-color: $seafoam-blue;
    ```
    2) `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Molecules/button/_CHILD_THEME_NAME-button.scss`:
    ```scss
    // EDIT/ADD COMPONENT STYLES ACCORDING TO YOUR NEEDS
    // to test you can check .button { background-color: blue !important; }
    ```
    3) `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Molecules/button/_button-extend.scss`:
    ```scss
    @import 'CHILD_THEME_NAME-button-variables';
    @import 'button';
    @import 'CHILD_THEME_NAME-button';
    ```
    you need to change all import of `_button.scss` to `_button-extend.scss`:
    * copy `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_critical-checkout.scss` to `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/styles/_critical-checkout.scss` and change line `@import '../Molecules/button/button';` to `@import '../Molecules/button/button-extend';`
    * copy `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_critical.scss` to `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/styles/_critical-checkout.scss` and change line `@import '../Molecules/button/button';` to `@import '../Molecules/button/button-extend';`

    If you extend a component imported in `non-critical` styles, you need to copy `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_non-critical.scss` and `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_checkout.scss` and update component's import styles to `...-extend.scss` accordingly.


5. Create components:
1) From Alpaca components directory (`vendor/snowdog/theme-frontend-alpaca/Snwodog_Components`) copy follwing files:
* `.browserslistrc`
* `.editorconfig`
* `.eslintignore`
* `.eslintrc.json`
* `.node-version`
* `.sass-lint.yml`
* `.stylelintrc`
* `gulpfile.mjs`
* `package.json`

2) in `package.json` and `gulpfile.mjs` replace Alpaca name to `CHILD_THEME_NAME`
3) Set inheritance from Alpaca component by creating `modules.mjs` file with following content:
```mjs
export default [
  "../../../../../../vendor/snowdog/theme-frontend-alpaca/Snowdog_Components"
]
```
4) run `yarn` to install dependencies
5) run `yarn dev` to work with components in dev mode.

6. Create frontools config file to compile theme static assets:
Go to `dev/tools/frontools/themes.json` and add your theme:
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
  "YOUR_THEME_NAME": {
    "src": "app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME",
    "dest": "pub/static/frontend/VENDOR_NAME/CHILD_THEME_NAME",
    "parent": "alpaca",
    "locale": ["en_US"],
    "ignore": [
        "**/node_modules/**",
        "**/Snowdog_Components/docs/**",
        "**/Snowdog_Components/build/**"
    ]
  }
}

```
7. Go to `dev/tools/frontools/browser-sync.json` and set proper values:
```json
{
  "proxy": "your-local-domain.test",
  "rewriteRules": [
    {
      "match": ".your-local-domain.test",
      "replace": ""
    }
  ]
}

```
8. Upgrade application, DB data and schema:
    ```
    bin/magento setup:upgrade
    ```
9. Frontools are already installed with Alpaca theme, so after update config, go to `<project-root-dir>/tool`and run:
    ````
    yarn styles && yarn svg && yarn babel
    ````
10. Log in to the admin panel.
11. Go to `Content -> Design -> Configuration`, and choose your theme
12. Flush cache storage.

## Useful Links
  * [Alpaca Theme details](https://github.com/SnowdogApps/magento2-alpaca-theme)
  * [Snowdog Frontools](https://github.com/SnowdogApps/magento2-frontools)
  * [Valet Plus](https://github.com/weprovide/valet-plus/wiki/Database)
  * [Fractal guide](https://fractal.build/guide/)
  * [Alpaca Packages](https://github.com/SnowdogApps/magento2-alpaca-packages)
  * [Alpaca Components guide](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Snowdog_Components/README.md)
  * [Alpaca Components preview](https://magento2-alpaca-theme-git-master-snowdog1.vercel.app/)
  * [Theme inheritance magento docs](https://devdocs.magento.com/guides/v2.3/frontend-dev-guide/themes/theme-inherit.html)
  * [Layout instructions magento docs](https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/layouts/xml-instructions.html)
****
2021 **[SNOW.DOG](https://www.snow.dog)**
