# Magepack
For performance, we recommend using [Magepack](https://github.com/magesuite/magepack) - advanced JavaScript bundler.

## Overview
Magepack creates the following bundles:
* `common` containing modules needed on every page
* `cms` containing modules needed by CMS pages
* `category` containing modules needed by category pages
* `product` containing modules needed by product pages
* `checkout` containing modules needed by cart and checkout pages
## Installation
* Install [Magepack Magento 2 Module](https://github.com/magesuite/magepack-magento):
    ```shell
    composer require creativestyle/magesuite-magepack
    ```
* For Magento version < 2.3.6, mixins.js module patch is required. [Patch provided and explained here](https://github.com/magento/baler/issues/23).

[Magepack](https://github.com/magesuite/magepack) is already installed with [Frontools](https://github.com/SnowdogApps/magento2-frontools)

## Setup
This guide explains how to set up Magepack in a project locally.
* Enable merging and minification:
    ```shell
    bin/magento config:set dev/js/merge_files 1
    bin/magento config:set dev/js/minify_files 1
    bin/magento config:set dev/css/minify_files 1
    bin/magento config:set dev/css/merge_css_files 1
    ```
* Switch to production mode:
    ```shell
    bin/magento deploy:mode:set production
    ```
* Go to `tools` directory
* Compile assets for production:
    ```shell
    yarn styles --prod && yarn babel --prod && yarn svg
    ```
* Generate Magepack config:
    ```shell
    yarn magepackGenerate --cms-url="https://baseUrl/" --category-url="https://baseUrl/categoryPage" --product-url="https://baseUrl/productPage"
    ```
    Replace URL paths with appropriate values for your site.

    Magepack will use given product page, add this product to the cart and visit both cart and checkout pages to collect dependencies.
* `magepack.config.js` will be generated in `/tools`. It includes the list of bundles with modules that will be included in them.
We recommend moving this file to project root directory.
* Enable magepack bundling via admin panel under `Stores -> Configuration -> Advanced -> Developer` or run:
    ```shell
    bin/magento config:set dev/js/enable_magepack_js_bundling 1
    ```
* Bundle Magepack:
    ```shell
    yarn magepackBundle --config <config_path>
    ```
* Clear cache:
    ```shell
    bin/magento cache:clean
    ```
* Check results in the browser. We recommend testing the site with open console to check if Magepack doesn't cause any issues.
* Run Magepack bundling during deployment, after assets compilation:
    ```shell
    yarn magepackBundle --config <config_path>
    ```
