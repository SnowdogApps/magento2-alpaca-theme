# Set up Alpaca Theme on Magento 2.4

This is a step-by-step guide of how to install Snowdog's Alpaca Theme and child theme based on Alpaca Theme on working Magento 2.4 project.<br />
If you need to help with setup Magento project locally, check our [Magento 2 setup guide here](magento-setup-guide.md) <br />

Alpaca Theme components and templates preview - see [Alpaca Components Preview](https://magento2-alpaca-theme-git-master-snowdog1.vercel.app/)<br />
Alpaca Theme preview: [Alpaca Magento OS](https://alpaca-community.snowdog.dev/), [Alpaca Magento Commerce](https://alpaca-commerce.snowdog.dev/)<br />

## Create Alpaca Child Theme with npx:
There is a tool that make a full child theme based on alpaca in existing Magento project with one command:
Try it out running `npx create-alpaca-theme` in your Magento root directory (node@16 and working Magento 2.4 required).
More info: [alpaca boilerplate npm project page](#to-do-here)


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

## Set up Alpaca Theme
  When using **Valet Plus** run commands in main project directory, with **Warden** remember to launch shell session see [Warden usage and common commands](https://docs.warden.dev/usage.html)

1. Add Snowdog Alpaca Packages: <br />
    ```
    composer require snowdog/module-alpaca-packages
    ```
    See [content of Alpaca Packages here.](https://github.com/SnowdogApps/magento2-alpaca-packages)
2. Install Alpaca Theme latest version:
    ```
    composer require snowdog/theme-frontend-alpaca:2.26.*
    ```
3. Add frontools:
    ```
    composer require snowdog/frontools
    ```
    [Learn about Frontools here.](https://github.com/SnowdogApps/magento2-frontools)
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
    Learn more about using frontools - [link to frontools](#link-to-frontools)<br/><br/>
6. Log in to admin panel.
    - You can find admin page URL in `env.php` file in `backend` section
    - You can create new admin user by using magento CLI:
        ```
        bin/magento admin:user:create --admin-user="YOUR_USER_NAME" --admin-password="YOUR_PASS" --admin-firstname="Test" --admin-lastname="Test" --admin-email="test@test.com"
        ```
    - Go to `Content -> Design -> Configuration`, and choose Alpaca Theme
7. Flush cache storage - `System -> Tools -> Cache Managment` or run command below:
    ```
    bin/magento cache:flush
    ```
8. Alpaca components - go to, run yarn etc.
<br/><br/>
Congrats! You've installed Alpaca Theme successfully!<br/>
To create your own child theme see instructions below:

## Set up Alpaca Child Theme
1. Finish all the steps above.
2. Go to `app/design/frontend` and create directory with name of your theme.
3. Inside `app/design/frontend/YOUR_THEME_NAME`, create `registration.php` and `theme.xml` files.
4. `registration.php` file should look like [this example](https://lab.snowdog.pro/patrykbura/alpaca-boilerplate/-/blob/feature/80366/app/design/frontend/Snowdog/YOUR_THEME_NAME/registration.php), with `YOUR_THEME_NAME` properly set.
5. `theme.xml` should look like [this example](https://lab.snowdog.pro/patrykbura/alpaca-boilerplate/-/blob/feature/80366/app/design/frontend/Snowdog/YOUR_THEME_NAME/theme.xml), with `YOUR_THEME_NAME` properly set.

6. Go to `dev/tools/frontools/themes.json` and add your theme. [See example here.](https://lab.snowdog.pro/patrykbura/alpaca-boilerplate/-/blob/feature/80366/dev/tools/frontools/config/themes.json)
7. Go to `dev/tools/frontools/browser-sync.json` and set proper values. [See example here.](https://lab.snowdog.pro/patrykbura/alpaca-boilerplate/-/blob/feature/80366/dev/tools/frontools/config/browser-sync.json)
8. Upgrade application, DB data and schema:
    ```
    bin/magento setup:upgrade
    ```
9. Go to frontools directory and run:
    ````
    yarn install
    yarn setup
    yarn styles && yarn svg && yarn babel
    ````
10. Log in to the admin panel.
11. Go to `Content -> Design -> Configuration`, and choose your theme
12. Flush cache storage.

## Working with Alpaca Theme
  To learn how to work with Alpaca Theme see [working with Alpaca Theme.](https://lab.snowdog.pro/patrykbura/alpaca-boilerplate/-/tree/feature/80366#working-with-alpaca-theme)

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
