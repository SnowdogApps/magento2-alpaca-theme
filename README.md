![Alpaca logo](/docs/assets/logo.svg)

[![Packagist](https://img.shields.io/packagist/v/snowdog/theme-frontend-alpaca.svg)](https://packagist.org/packages/snowdog/theme-frontend-alpaca) [![Packagist](https://img.shields.io/packagist/dt/snowdog/theme-frontend-alpaca.svg)](https://packagist.org/packages/snowdog/theme-frontend-alpaca)

## Introduction
Magento 2 theme created on top of components library. It is designed from scratch by SNOW.DOG front-end team following design sytem methodology principles.

## Requirements
- Magento 2.1 or 2.2
- [Alpaca components library](https://github.com/SnowdogApps/magento2-alpaca-components)
- [Snowdog Menu module](https://github.com/SnowdogApps/magento2-menu)
- [Frontools](https://github.com/SnowdogApps/magento2-frontools)

## Installation
- [Install Magento using Composer](https://devdocs.magento.com/guides/v2.2/install-gde/composer.html)
- `composer require snowdog/theme-frontend-alpaca`
- Create `dev/tools/frontools/config/themes.json` config file following one of the samples:
   - [Clean Alpaca](/docs/frontools/clean.json)
   - [Custom theme based on Alpaca](/docs/frontools/child.json)
- Install Frontools dependecies and setup config files `cd vendor/snowdog/frontools && yarn && gulp setup`
- In Frontools directory (or `/tools` in project root) run `gulp styles && gulp babel && gulp svg` to compile all static assets

## Child theme packages structure
Each theme is build from two packages:
1. Magento theme
2. Components library

This leads to 4 packages linked together to create custom theme based on Alpaca:
1. Alpaca components
2. Alpaca theme - depends on Alpaca components
3. Custom components - depends on Alpaca components
4. Custom theme - depends on Alpaca theme and Custom theme components

Inheritance of components is solved on Frontools level, it's based on same rules as in Magento core - files from child overwrite the parent.

## Workflow rules
1. Do not create any non-magento specific styles inside your theme. Components are designed to work in isolated envairoment and be able to reflect your store UI, without having to run Magento instance. Implementing some part of UI directly inside theme will make components preview useleless and you will lose all benefits of writing UI in separation.

## Workflow rules exceptions
We don't want to mess with the checkout templates, nor styling, so this part is copy-pasted from the SASS Blank theme.

## Demo
- Magento 2 Open Source + Alpaca theme - https://alpaca-ce-demo.snowdog.pro
- Magento 2 Open Source + Alpaca theme + Solr based catalog* - https://alpaca-ce-solr-demo.snowdog.pro
- Magento 2 Commerce + Alpaca theme - https://alpaca-demo.snowdog.pro
- Magento 2 Commerce + Alpaca theme + Solr based catalog* - https://alpaca-solr-demo.snowdog.pro

* Apache Solr based catalog is an internal Snowdog product, not open-sourced. If you are intrested in having it in your store, please contact us at hello@snow.dog
