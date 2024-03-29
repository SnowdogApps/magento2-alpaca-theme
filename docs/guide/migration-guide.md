# Migration guide
## 2.27.0
### Magepack
If you use Magepack, then we recommend generating new `magepack.config.js`.
Some JS caused us issues. We had to remove the following lines from the config:
```
'Magento_Theme/js/lib/select2.full.min': 'Magento_Theme/js/lib/select2.full.min'
'jquery-ui-modules/effect': 'jquery/ui-modules/effect',
'jquery-ui-modules/effect-blind': 'jquery/ui-modules/effect-blind',
'jquery-ui-modules/effect-fade': 'jquery/ui-modules/effect-fade',
```

### Snowdog_Acm module
`snowdog/module-alpaca-acm` module is no longer needed.

You can remove it from your project.
If you have overwritten files from `Snowdog_Acm` directory in your child theme, please move them to `Blackbird_ContentManager` and remove `Snowdog_Acm` directory.

## 2.26.0

### Tools
You can use [this helper](https://github.com/SnowdogApps/theme-alpaca-upgrade-helper) to update child theme styles to Alpaca version >= 2.26.0 automatically.

Then move to [this](#start-here-when-using-upgrade-helper) step.

### Step by step guide
**New files overview**
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
### [*Start here when using upgrade helper*]
9. Adjust fractal components inheritance:
* replace `<child-theme>/Snowdog_Components/modules.json` file with an array of paths to Alpaca components libraries with `modules.mjs` and adjust the content, example:
```js
export default [
  "../../../../../../vendor/snowdog/theme-frontend-alpaca/Snowdog_Components"
]
```
* copy content of `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/gulpfile.mjs` to child theme (`<child-theme>/Snowdog_Components/gulpfile.mjs`) components and adjust child components customisations if needed.

10. Update the following component configuration options in `.config.js` files to their new version:
* `preview: '@checkout'` to:
```js
    meta: {
        checkout: true
    }
```

* `preview: '@docs-only-styles'` to:
```js
  meta: {
    docsOnlyStyles: true
  }
```

11. Remove `Snowdog_Components/components/Atoms/_fonts/_fonts.scss` and add `Snowdog_Components/docs/styles/docs-only-styles/_fonts.scss` instead

#### Magento_Theme module
* If you've overwritten `root.phtml` file please adjust content to the newest changes in `theme-frontend-alpaca/Magento_Theme/templates/root.phtml`

* Styles which use `@extend` rule are moved to `Magento_Theme/styles/_module-critical.scss` and `Magento_Theme/styles/_module-non-critical.scss`

#### Minicart
Theme Alpaca `2.26.0` requires [snowdog/module-alpaca-general](https://github.com/SnowdogApps/magento2-alpaca-general): `1.5.0`.
We introduced an option to remove quantity input in minicart in `Admin > Store > Configuration > Snowdog > Alpaca General > Mini Cart > Qty`.

#### Magepack
In `magepack.config.js`:
1. Change:
* `Magento_Wishlist/js/add-to-wishlist-mixin` to `Magento_Wishlist/js/add-to-wishlist-mixin.babel`
2. Remove:
* `'Magento_Theme/js/lib/lazysizes.min': 'Magento_Theme/js/lib/lazysizes.min'`
* `'Magento_Theme/js/lib/picturefill.min': 'Magento_Theme/js/lib/picturefill.min'`
