# Alpaca Setup Guide
In this guide we will be covering how to set up Alpaca and create Alpaca Child Theme in an existing Magento project.

If you need help with setting up Magento project, check our [Magento 2 Setup Guide](/guide/getting-started/magento-setup-guide.html).

## Requirements
* Magento `2.4` project
* Node `>=16 <17.0.0`
* [yarn](https://yarnpkg.com/) (we recommend yarn but you can also use npm to install dependencies and run node commands)

## Set up Alpaca Automatically
Use [Create Alpaca Theme](https://www.npmjs.com/package/@snowdog/create-alpaca-theme) to automatically:
* Install Alpaca on your existing Magento 2.4 project
* Create Alpaca Child Theme
* Set up [frontools](/guide/working-with-alpaca/frontools.html)
* Add exemplary Alpaca content elements to data base (optional)

**Simply run in your Magento project root:**
```shell
npx @snowdog/create-alpaca-theme
```
[Check more info here.](https://www.npmjs.com/package/@snowdog/create-alpaca-theme)

## Set up Alpaca Manually
This is a step-by-step guide on how to install Alpaca and Alpaca Child Theme. It covers the same steps that are done automatically [here](#set-up-alpaca-automatically).

The guide is adjusted for Theme Alpaca `>= 2.26.0`.

### Set up Alpaca Theme
::: info
 When using **Valet Plus** run commands in main project directory, with **Warden** remember to launch shell session see [Warden usage and common commands](https://docs.warden.dev/usage.html)
:::

1. Add Snowdog Alpaca Packages:
    ```shell
    composer require snowdog/module-alpaca-packages
    ```
    See [content of Alpaca Packages here](https://github.com/SnowdogApps/magento2-alpaca-packages)
2. Install Alpaca Theme latest version:
    ```shell
    composer require snowdog/theme-frontend-alpaca:^2.26
    ```
3. Add frontools:
    ```shell
    composer require snowdog/frontools
    ```
    [Learn about Frontools here](https://github.com/SnowdogApps/magento2-frontools)
4. Run db queries to add to your database all Alpaca CMS block & content
    [Copy db queries from here](https://github.com/SnowdogApps/create-alpaca-theme/blob/master/templates/database/queries.sql)

5. Upgrade application, DB data and schema (_[learn more here](https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db-upgr.html#instgde-cli-db-upgr)_):
    ```shell
    bin/magento setup:upgrade
    ```
6. Setup frontools
  * In `dev/tools/frontools/config` create files:
    1. `theme.json`
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
            }
        }
        ```

    2. `browser-sync.json`
        ```json
        {
            "proxy": "<your_domain>.test",
            "rewriteRules": [
                {
                    "match": ".<your_domain>.test",
                    "replace": ""
                }
            ]
        }
        ```
        Replace `<your_domain>`

  * Go to `vendor/snowdog/frontools` and run commands:
    ```shell
    yarn
    yarn setup
    yarn styles && yarn svg && yarn babel
    ```
    Setting up frontools creates a convenient symlink `tools` in the project root directory.

7. In Admin go to `Content -> Design -> Configuration`, and choose Alpaca Theme
    ::: tip
    * You can find admin page URL in `app/etc/env.php` file in `backend` section (`frontName` parameter)

    * You can create a new admin user by using magento CLI:
        ```shell
        bin/magento admin:user:create --admin-user="YOUR_USER_NAME" --admin-password="YOUR_PASS" --admin-firstname="Test" --admin-lastname="Test" --admin-email="test@test.com"
        ```
    :::
8. Flush cache storage - `System -> Tools -> Cache Management` or run command below:
    ```
    bin/magento cache:flush
    ```
9. Run Alpaca Components locally
 - Go to `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components`
 - Run `yarn` to install node dependencies
 - Run `yarn dev` and check localhost to see Alpaca Components
<br/>

Congrats! You've installed Alpaca Theme successfully! 🎉

### Set up Alpaca Child Theme
After installing Alpaca theme, you can create child theme based on Alpaca Theme as a separate composer package (in `vendor` directory) or in `app/design/frontend` directory.
In this guide, we will create it in `app/design/frontend`.

1. Go to `app/design/frontend` and create directories with your Vendor name and with you theme name: `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME`, example: `app/design/frontend/Snowdog/alpaca-child`
2. Create configuration files in `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME`:
    1. `registration.php`:
        ```php
        <?php

        \Magento\Framework\Component\ComponentRegistrar::register(
            \Magento\Framework\Component\ComponentRegistrar::THEME,
            'frontend/VENDOR_NAME/CHILD_THEME_NAME',
            __DIR__
        );
        ```
        Replace `VENDOR_NAME` and `CHILD_THEME_NAME`

    2. `theme.xml`

        ```xml
        <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
            <title>CHILD_THEME_NAME</title>
            <parent>Snowdog/alpaca</parent>
            <media>
                <preview_image>preview.jpg</preview_image>
            </media>
        </theme>
        ```
        Replace `CHILD_THEME_NAME`

3. Copy `vendor/snowdog/theme-frontend-alpaca` files:
* `.editorconfig`
* `.eslintignore`
* `.gitignore`
* `preview.jpg`
You can create also `README.md` and `CHANGELOG.md` files.

4. Add Alpaca styles
    1. `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Atoms/variables/_CHILD_THEME_NAME-variables.scss`

   You can add there base variables or overwrite those from Alpaca (`vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/Atoms/variables/_variables.scss`)
        ::: warning
        Don't use `!default` flag when changing Alpaca variables values
        :::

    2. `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/docs/styles/styles.scss`
        ```scss
        // Child theme variables (imported before alpaca variables)
        @import "../../components/Atoms/variables/CHILD_THEME_NAME-variables";

        // Variables
        @import '../../components/Atoms/variables/variables';

        // Components
        @import '../../components/styles/critical';
        @import '../../components/styles/non-critical';

        // Styles necessary only for Fractal purposes
        @import 'fractal';
        ```

    3. `app/design/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/docs/styles/checkout.scss`
        ```scss
        // Child theme variables
        @import "../../components/Atoms/variables/CHILD_THEME_NAME-variables";

        // Variables
        @import '../../components/Atoms/variables/variables';

        // Components
        @import '../../components/styles/critical-checkout';
        @import '../../components/styles/checkout';

        // Styles necessary only for Fractal purposes
        @import 'fractal';
        ```

    4. `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/styles.scss`
        ```scss
        // Child theme variables
        @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

        // Variables
        @import '../Snowdog_Components/components/Atoms/variables/variables';

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

    5. `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/critical.scss`
        ```scss
        // Child theme variables
        @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

        // Variables
        @import '../Snowdog_Components/components/Atoms/variables/variables';

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
    6. `app/design/VENDOR_NAME/CHILD_THEME_NAME/styles/critical-checkout.scss`
        ```scss
            // Child theme variables
            @import "../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

            // Variables
            @import '../Snowdog_Components/components/Atoms/variables/variables';

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
    7. `app/design/VENDOR_NAME/CHILD_THEME_NAME/Magento_Checkout/styles/checkout.scss`
        ```scss
            // Mixins
            @import '../../Snowdog_Components/components/styles/mixins';

            // Child theme variables
            @import "../../Snowdog_Components/components/Atoms/variables/CHILD_THEME_NAME-variables";

            // Component variables
            @import '../../Snowdog_Components/components/Atoms/variables/variables';

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

5. Create Components
    1. Copy (`vendor/snowdog/theme-frontend-alpaca/Snwodog_Components`) files:
    * `.browserslistrc`
    * `.editorconfig`
    * `.eslintignore`
    * `.eslintrc.json`
    * `.node-version`
    * `.sass-lint.yml`
    * `.stylelintrc`
    * `gulpfile.mjs`
    * `package.json`

    2. in `package.json` and `gulpfile.mjs` replace `Alpaca` name to `CHILD_THEME_NAME`
    3. Set inheritance from Alpaca components by creating `modules.mjs` file with following content:
    ```js
    export default [
    "../../../../../../vendor/snowdog/theme-frontend-alpaca/Snowdog_Components"
    ]
    ```
    4. Run `yarn` to install dependencies
    5. Run `yarn dev` to work with components in dev mode.

6. Add the new theme to `dev/tools/frontools/themes.json`
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
7. Upgrade application, DB data and schema:
    ```shell
    bin/magento setup:upgrade
    ```
8. Frontools are already installed with Alpaca theme, so after update config, go to `<project-root-dir>/tools`and run:
    ````shell
    yarn styles && yarn svg && yarn babel
    ````
10. Log in to the admin panel.
11. In Admin go to `Content -> Design -> Configuration`, and choose the new theme
12. Flush cache storage:
    ```shell
    bin/magento cache:flush
    ```
Congrats! You've created Alpaca Child Theme successfully! 🎉
