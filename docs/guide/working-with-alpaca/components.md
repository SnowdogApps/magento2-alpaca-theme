# Components
Theme Alpaca styles are based on reusable components. They're created in a simplified, front-end developer friendly environment to speed up the process of working with design on Magento 2 stores.

Alpaca Components are built inside Theme Alpaca (`Snowdog_Components` directory) - it isn't a separate composer package or git repository.

## Browse Components Locally

In `Snowdog_Components` directory (inside Alpaca or Alpaca Child Theme) run:
````
yarn && yarn dev
````
Then go to http://localhost:4000/ and start exploring 🎉

::: tip
Check [Alpaca Setup Guide](/guide/getting-started/alpaca-setup-guide.html) for more details.
:::
## Core Concepts
### Styles
Styles are written in [Sass](https://sass-lang.com/). They're **used across Magento Theme**.

### Fractal
Components are built with [Fractal](https://fractal.build/) using [Handlebars](https://handlebarsjs.com/). JS scripts and `.hbs` templates are only for Fractal purpose and they are **not used in Magento**.
### Architecture
```
theme-frontend-alpaca/
├── Snowdog_Components/
│   ├── components/
│   │   ├──Atoms/
│   │   ├──Molecules/
│   │   ├──Organisms/
│   │   ├──Templates/
│   │   ├──styles/
│   │   │   ├── _critical.scss
│   │   │   ├── _non-critical.scss
│   │   │   ├── _checkout.scss
│   │   │   ├── _critical-checkout.scss
│   │   │   └── ...
```

**Components are divided into 4 groups based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) system:**
1. **Atoms**
   - Contains code that other components can use in any place, for example, typography, icons or SASS variables.
2. **Molecules**
   - Smallest UI parts, for example, buttons
   - Molecules can't depend on other molecule
   - Molecules shouldn't have any layout
3. **Organisms**
   - More complex UI parts like search form or header
   - Takes Molecules or other Organisms and combine them together adding layout and context
4. **Templates**
   - Takes Molecules or Organisms and combine them together adding final layout and context
   - You should be able to show it to client/PM as a preview of ready to use store view
   - You shouldn't create any new UI elements, everything needs to be reusable.

**Component styles are imported in `Snowdog_Components/components/styles` in the appropriate file(s):**
* `_critical.scss` - styles for above-the-fold content that's loaded inline ([learn about Critical CSS](https://web.dev/extract-critical-css/))
* `_non-critical.scss` - the rest of styles

The above files aren't loaded in checkout. Instead, there are separate files for checkout:
* `_critical-checkout.scss` checkout styles for above-the-fold content that's loaded inline
* `_checkout.scss` - the rest of checkout styles

The reason behind it is that checkout requires some unique components. On the other hand, there are a lot of components that are never used in checkout. Loading all component styles on every page would result in a lot of unused CSS.
### Inheritance
Components inside Alpaca Child Theme inherit components from Alpaca Theme. This means that unless component files are overwritten in Child Theme, they're copied from Alpaca during build process.

### Global Variables
The base of our design system are global variables. They include colors, typography, spacers, breakpoints and more. They're used across components and other modules to maintain visual consistency. They make it easy to customize the general look of the store.<br>
[Check all variables here](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Snowdog_Components/components/Atoms/variables/_variables.scss).

### Component Variables
Components have most of the styles defined with variables. You can change the look of components by overriding these variables. Component variables simplify the process of design customization. They significantly reduce the need for overriding styles which helps to save time and keep the code clean.

## Component Notes
More complex components include a `README.md`. You can find there information about usage, features and a11y implementation. In Fractal UI they're available in `Notes` tab.

## Accessibility
Components are tested with [axe-core](https://github.com/dequelabs/axe-core). The results are displayed as a console output in browser tools.
A11y test files are located in in `Snowdog_Components/public/tests`.

## Customization
### Global Variables
* Create `app/design/frontend/VENDOR_NAME/CHILD_THEME_NAME/Snowdog_Components/components/Atoms/variables/_CHILD_THEME_NAME-variables.scss`
* Modify any [Alpaca variable values](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Snowdog_Components/components/Atoms/variables/_variables.scss) or create new ones.
* Import the file after Alpaca variables (search `// Variables` in Theme Alpaca to find all of the files that require variables import).
::: warning
In child theme don't use `!default` flag when changing variables declared in Alpaca theme or creating new variables for your needs.
:::
### Component styles
**As an example, here's how to customize `button` component styles:**

Button Alpaca component styles can be found in `theme-frontend-alpaca/Snowdog_Components/components/Molecules/button/_button.scss`.

**1. In your Alpaca Child Theme, create 3 files:**
* `Snowdog_Components/components/Molecules/button/_CHILD_THEME_NAME-button-variables.scss`:

    Here you can overwrite variables from `theme-frontend-alpaca/Snowdog_Components/components/Molecules/button/_button-variables.scss` or add new ones.
    ```scss
    // Example: change button text color
    $button__text-color: $seafoam-blue;
    ```
* `Snowdog_Components/components/Molecules/button/_CHILD_THEME_NAME-button.scss`:
    ```scss
    // Example: add new button variant
    .button {
        &--tertiary {
            background-color: $seafoam-blue;
        }
    }
    ```
* `Snowdog_Components/components/Molecules/button/_button-extend.scss`:
    ```scss
    @import 'CHILD_THEME_NAME-button-variables';
    @import 'button'; // original Alpaca button styles
    @import 'CHILD_THEME_NAME-button';
    ```

**2. Change all imports of `_button.scss` to `_button-extend.scss`:**
::: tip
To check where button styles are imported, you can use global search in your IDE. In this case, search `/button'` in `theme-frontend-alpaca`.
:::
* Copy `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_critical-checkout.scss` to your Child Theme and change line `@import '../Molecules/button/button';` to `@import '../Molecules/button/button-extend';`
* Copy `vendor/snowdog/theme-frontend-alpaca/Snowdog_Components/components/styles/_critical.scss` to your Child Theme and change line `@import '../Molecules/button/button';` to `@import '../Molecules/button/button-extend';`

### Component configuration file
Data from `.config.js` is used inside `.hbs` template. To change some values, copy `.config.js` to Child Theme and adjust. Follow the same file structure as in Alpaca.

### Component template
Copy component `hbs` file to Child Theme and add customizations there.  Follow the same file structure as in Alpaca.


## Good practices
1. **Classes naming**

    Use [BEM](https://css-tricks.com/bem-101/).
2. **Components Naming**<br>
    * Group name needs to be plural
    * Component name needs to be singular
    * Component name shouldn't be related to any project or place in the layout
    - Bad: `top-banner`
    - Good: `dropdown-list` or `collapsible-list`
    * Avoid using `box`, `block`, `item`, `info`, `text`, `cms`, especially combined together, for example `info-box`
    * Avoid naming two components in a similar way i.e. `cms-subcategories` and `cms-subcategory`
3. **SASS Variables Naming**<br>
    Follow BEM-like naming convention, i.e. in `button` component, a variable for button `padding` should be called `$button__padding`.

    Same as in BEM, you are not allowed to use multiple `__`, i.e. instead of `$button__icon__padding` call the variable `$button__icon-padding`.

    Variables related to the pseudo-classes and pseudo-selectors should be treated as a BEM elements `$button__color-hover`.

    Also, BEM modifiers are allowed in variables, i.e. `$button__padding--secondary` for `button` component secondary variant.

    For variables used in specific breakpoints, add `\@breakpoint` at the end of the variable name, i.e. `$button__padding\@medium`. Always use `small`, `medium`, `large` etc. to describe the breakpoint.

    Examples of proper variables names:
    ```scss
    $swatch__option-border
    $swatch__option-border-color-hover

    $swatch__option-image-height\@large

    $swatch__option-size--small
    $swatch__option-image-width--small
    $swatch__option-image-width--small\@large
    ```
4. **Use global variables instead of hard coded values.**<br>
    This makes the design more consistent and the project easier to maintain.
5. **Use component variables if possible to change component's styling.**<br>
    Components in Theme Alpaca have most of the styles defined with variables. So instead of overriding the styles, change variable values. [Example - Badge](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Snowdog_Components/components/Molecules/badge). Write additional CSS only if variables don't cover your needs.
6. **Don't use component specific variables in other components.**<br>
7. **Don't base mixins on component specific variables.**<br>
8. **Don't use `@extend` between components** (unless it's based on placeholders, and those placeholders are not tightly coupled with components).<br>


## JavaScript
::: warning
Component JS files are only used inside Fractal. For Magento, we need to build JS files using RequireJS.
:::
### Add JS to Component
Component related js is loaded inside `hbs` files.
```js
<script src="{{static 'component-name.js' }}"></script>
```
If a component that contains JS file is required by other component, we are using `script` variable defined in `config.js`. This helps to avoid problems with duplicated declaration of JS files.
```
{{#if script}}
    <script src="{{static 'component-name.js' }}"></script>
{{/if}}
```

### Common JS
Above method is recommended for most JS scripts used in components, but requires additional config which can be complex, especially in the `Templates`. There can be multiple components that contain the same JS file. A good example of this kind of JS  is `dropdown-list.js`. In one `Template` it's used in sidemenu, header minicart, filters and footer.

To avoid problems with complex configs and duplicated declarations of JS files, there's `Atoms/common-js` component. `common-js.hbs` contains scripts that are reused multiples times across the same views. This file is loaded globally.

Do not use `common-js` component for library files and for JS scripts created in components that are not loaded multiple time on the same views.
