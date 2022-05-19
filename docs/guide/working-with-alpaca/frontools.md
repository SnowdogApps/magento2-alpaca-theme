# Frontools
Set of front-end tools for Magento 2.

Check [Alpaca Setup Guide](/guide/getting-started/alpaca-setup-guide) for details about Frontools installation.


## Overview
* Config files are located in `dev/tools/frontools/config`. If you don't create custom configs, Frontools will add sample ones during `yarn setup`.
* In most cases `themes.json` and `browser-sync.json` are the only configs that require adjustments.
* `themes.json` is essential. If it's not set up correctly, frontools won't work. See [themes.json Alpaca example](https://github.com/SnowdogApps/create-alpaca-theme/blob/master/templates/frontools/themes.json.sample).
* Setting up Frontools (`yarn setup`) creates a symlink `tools` to `vendor/snowdog/frontools` for easy access.

::: tip
Check [Frontools README](https://github.com/SnowdogApps/magento2-frontools/blob/master/README.md) to learn more.
:::

## Using Frontools during Development
**Compile styles, generate SVG Sprite and run Babel after:**
* Every application upgrade (`bin/magento setup:upgrade` command)
* Making changes in Theme in the particular area

**There are a few ways to do so:**
::: tip
Run commands in `cd tools`.
:::
**1. Compile styles, SVGs and run Babel**
```shell
yarn styles && yarn svg && yarn babel
```

**2. Watch for style changes and run processing tasks**

This way you don't need to run `yarn styles` after every change in styles.
```shell
yarn watch
```

**3. Use Browsersync**

[Browsersync](https://www.browsersync.io/) keeps multiple browsers and devices in sync when building websites and auto-reloads all of them when a file has changed.

```shell
yarn dev
```

Runs browserSync and `inheritance`, `babel`, `styles`, `watch` tasks.

::: warning
Requires setting correct proxy values in `dev/tools/frontools/config/browser-sync.json`. See [browser-sync.json example](https://github.com/SnowdogApps/create-alpaca-theme/blob/master/templates/frontools/browser-sync.json.sample).
:::


## Compile Assets for Production
```shell
yarn styles --prod && yarn babel --prod && yarn svg
```
