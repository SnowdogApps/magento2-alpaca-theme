# Migration guide for Alpaca theme >= 2.26.0

## New files
```
theme-frontend-alpaca/
├── styles/
│   ├── critical-checkout.scss
│   └── critical.scss
├── Snowdog_Components/components/styles/
│   ├── _critical-checkout.scss
│   ├── _critical-extends.scss
│   ├── _critical.scss
│   └── _non-critical.scss
└── Magento_Theme/styles/
    ├── modules/
    │   ├── _button-extends.scss
    │   ├── _grid-extends.scss
    │   ├── _heading-extends.scss
    │   ├── _input-extends.scss
    │   ├── _label-extends.scss
    │   ├── _list-extends.scss
    │   └── _pager-extends.scss
    ├── _module-critical.scss
    └── _module-non-critical.scss
```

## Tools
You can use [this helper](https://github.com/SnowdogApps/theme-alpaca-upgrade-helper) to update child theme styles to Alpaca version >= 2.26.0

## Step by step guide

1. Remove `<child-theme>/styles/styles.scss`

2. Copy `critical.scss`, `critical-checkout.scss`, `styles.scss` files from `vendor/snowdog/theme-frontend-alpaca/styles` to `<child-theme>/styles`

3. Import variables from child theme in `critical.scss`, `critical-checkout.scss`, `styles.scss` files

Example:

```scss
// Variables
@import '../Snowdog_Components/components/Atoms/variables/variables';
@import '../Snowdog_Components/components/Atoms/variables/<child-theme>';
```

4. Move theme partials from `<child-theme>/styles/_theme.scss` to `<child-theme>/styles/styles.scss` and remove `_theme.scss` file


5. Copy `_critical.scss`, `_non-critical.scss` files from `Snowdog_Components/components/styles/_critical.scss` and `Snowdog_Components/components/styles/_non-critical.scss` to `<child-theme>/Snowdog_Components/components/styles`

6. Compare content from `_critical.scss` and `_non-critical.scss` with `_components.scss` files located in Atoms, Molecules, Organisms or Templates and adjust the content with customised child theme. For example, if you extended button styles and imported it in `<child-theme>/Snowdog_Components/components/Molecules/_components.scss` e.g
```scss
@import 'button/button-extend'; // extend
```

Go to `critical.scss` file and adjust the import

From:
```scss
@import '../Molecules/button/button';
```
To:
```scss
@import '../Molecules/button/button-extend'; // extend
```

7. After adding all changes remove these files:
- `<child-theme>/Snowdog_Components/components/Atoms/_components.scss`
- `<child-theme>/Snowdog_Components/components/Molecules/_components.scss`
- `<child-theme>/Snowdog_Components/components/Organisms/_components.scss`
- `<child-theme>/Snowdog_Components/components/Templates/_components.scss`

8. Additional imports should be added to `<child-theme>/Snowdog_Components/docs/styles/styles.scss` file:

```scss
// Variables
@import '../../components/Atoms/variables/variables';
@import '../../components/Atoms/variables/<child-theme>-variables';

// Components
@import '../../components/styles/critical';
@import '../../components/styles/non-critical';

// Styles necessary only for Fractal purposes
@import 'fractal';
```

Also in `<child-theme>/Snowdog_Components/docs/styles/checkout.scss`

```scss
// Variables
@import '../../components/Atoms/variables/variables';
@import '../../components/Atoms/variables/<child-theme>-variables';

// Components
@import '../../components/styles/critical-checkout';
@import '../../components/styles/checkout';

// Styles necessary only for Fractal purposes
@import 'fractal';
```
9. Adjust fractal components inheritance:
* replace `<child-theme>/Snowdog_Components/modules.json` file with an array of paths to Alpaca components libraries with `modules.mjs` and adjust the content, example:
```mjs
export default [
  "../../../../../../vendor/snowdog/theme-frontend-alpaca/Snowdog_Components"
]
```
* copy content of `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/gulpfile.mjs` to child theme (`<child-theme>/Snowdog_Components/gulpfile.mjs`) components and adjust child components customisations if needed.

10. Update the following component configuration options in `.config.js` files to their new version:
* `preview: '@checkout'` ->
```js
    meta: {
        checkout: true
    }
```

* `preview: '@docs-only-styles'` ->
```js
  meta: {
    docsOnlyStyles: true
  }
```

## Magento_Theme module
* If you've overwritten `root.phtml` file please adjust content to the newest changes in `theme-frontend-alpaca/Magento_Theme/templates/root.phtml`

```php
<?php
    $isCheckout = strpos($bodyAttributes, 'page-layout-checkout');
    $criticalStyles;
    if ($isCheckout) {
        $criticalStyles = $this->assetRepo->createAsset('css/critical-checkout.css')->getContent();
        $inlineStyles = str_replace('../images', $this->getViewFileUrl('images'), $criticalStyles);
        $inlineStyles = str_replace('critical.css.map', $this->getViewFileUrl('css/critical-checkout.css.map'), $inlineStyles);
    } else {
        $criticalStyles = $this->assetRepo->createAsset('css/critical.css')->getContent();
        $inlineStyles = str_replace('../images', $this->getViewFileUrl('images'), $criticalStyles);
        $inlineStyles = str_replace('critical.css.map', $this->getViewFileUrl('css/critical.css.map'), $inlineStyles);
    }
?>

<style>
    <?= $inlineStyles; ?>
</style>

<?php if ($isCheckout): ?>
    <link
        href="<?= $this->getViewFileUrl('Magento_Checkout/checkout.css') ?>"
        rel="stylesheet"
        as="style"
        media="print"
        onload="this.media='all'"
    />
<?php else: ?>
    <link
        href="<?= $this->getViewFileUrl('css/styles.css') ?>"
        rel="stylesheet"
        as="style"
        media="print"
        onload="this.media='all'"
    />
<?php endif; ?>
```

* Styles which use `@extend` rule are moved to `Magento_Theme/styles/_module-critical.scss` and `Magento_Theme/styles/_module-non-critical.scss`

## Minicart
Theme Alpaca `2.26.0` requires [snowdog/module-alpaca-general](https://github.com/SnowdogApps/magento2-alpaca-general): `1.5.0`.
We introduced an option to remove quantity input in minicart in `Admin > Store > Configuration > Snowdog > Alpaca General > Mini Cart > Qty`.

## Magepack
In `magepack.config.js` change:
* `Magento_Wishlist/js/add-to-wishlist-mixin` -> `Magento_Wishlist/js/add-to-wishlist-mixin.babel`
