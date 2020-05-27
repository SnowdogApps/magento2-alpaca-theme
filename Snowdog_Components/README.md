# Alpaca Components

## Introduction
Components library of Alpaca [design system](https://www.uxpin.com/studio/blog/design-systems-vs-pattern-libraries-vs-style-guides-whats-difference/) created to speed up the process of working with design on Magento 2 stores, by creating each UI element, module, and view in a simplified, front-end developer friendly, environment.

This components library is built on top of [Fractal.js](http://fractal.build/guide).
It's separate npm package, created based on [Alpaca Components](https://github.com/SnowdogApps/magento2-alpaca-components). To make the work easier, now it's implemented inside the theme, as a part of theme composer package.

Magento 2 experience is not required to work with this code.

## Requirements
- node version >=12.13.0 <13.0.0 installed globally
- npm or yarn installed globally

## Installation
- Install dependencies using `yarn`
- Run `yarn dev` to start Fractal.js development server
- Run `yarn build` if you want to generate static files (for example to deploy them)

## How to create a components library on top of Alpaca Components
1. Copy-paste `package.json`, `gulpfile.js`, `.eslintignore`, `.eslintrc`, `.sass-lint.yml`, `.stylelintrc` files into `theme-frontend-<child-theme>/Snowdog_Components`:

2. Update project name in `package.json` and `gulpfile.js`

3. Copy `styles.scss` from `theme-frontend-alpaca/Snowdog_Components/docs/styles/` and add child project variables import there.
The file should look like this:

```scss
// Variables
@import '../../components/Atoms/variables/variables';
@import '../../components/Atoms/variables/<child-theme>-variables';

// Components
@import '../../components/styles';

// Styles necessary only for Fractal purposes
@import 'fractal';
```

4. Create `modules.json` file with an array of paths to parent components libraries. To inherit dependencies from Alpaca components, you have to define path to `theme-forntend-alpaca/Snowdog_Components`.
   In most cases, inside Magento, it will look like this:
  ```json
  [
      "../../../snowdog/theme-frontend-alpaca/Snowdog_Components"
  ]
  ```
5. Customize or add new files following the same structure as in Alpaca components

6. Run `yarn` and `yarn dev` to run components in fractal.build. :tada:

## Directory structure
- `components` directory is what you are going to import into the Magento 2 theme.
- `docs` and `public` are just for the local environment purposes, you will find there sample images, testing libs, utility styles etc.

## Core concepts
### Components architecture
Components are divided into 4 groups based on [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) system:
1. Atoms
   - Contains code that other components can use in any place, for example, typography, icons or SASS variables.
2. Molecules
   - Smallest UI parts, for example, buttons
   - Molecules can't depend on other molecule
   - Molecules shouldn't have any layout
3. Organisms
   - More complex UI parts like search form or header
   - Takes Molecules or other Organisms and combine them together adding layout and context
4. Templates
   - Takes Molecules or Organisms and combine them together adding final layout and context
   - You should be able to show it to client/PM as a preview of ready to use store view
   - You shouldn't create any new UI elements, everything needs to be reusable.

### Naming
* Group name needs to be plural
* Component name needs to be singular
* Component name shouldn't be related to any project or place in the layout
   - Bad: `top-banner`
   - Good: `dropdown-list` or `collapsible-list`
* Avoid using `box`, `block`, `item`, `info`, `text`, `cms`, especially combined together, for example `info-box`
* Avoid naming two components in similar way i.e. `cms-subcategories` and `cms-subcategory`

### Colors
* By default Alpaca components uses up to 7 step grayscale
* `$color-primary` & `$color-secondary` are mainly used inside components styles

### SASS Variables naming

Follow BEM-like naming convention i.e. when you component name is `button` and you are creating a variable for a `padding` it should be `$button__padding`.

Same as in BEM, you are not allowed to build construction like `$button__icon__padding`, it should be `$button__icon-padding`.

Variables related to the pseudo-classes and pseudo-selectors should be treated as a BEM elements `$button__color-hover`.

Also, BEM modifier are allowed in variables `$button__padding--secondary`, you can even stack them like this `$button__padding--secondary--dark`.

To target variable to specific breakpoint adding `\@breakpoint` at the end of the variable name `$button__padding\@medium`. Always use `small`, `medium`, `large` etc. to describe the breakpoint.

Examples of proper variables names:
```scss
$swatch__option-border
$swatch__option-border-color-hover

$swatch__option-image-height\@large

$swatch__option-size--small
$swatch__option-image-width--small
$swatch__option-image-width--small\@large
```

## Accessibility
Components are tested with [axe-core](https://github.com/dequelabs/axe-core). The results are displayed as a console output in browser tools.
A11y test files you can find in `/public/tests/`

## Common JS files
General concept for JS files is that we load them inside component .hbs file using:
1) `<script src="{{static 'component-name.js' }}"></script>`
2) If component that contains JS file is required by other component we are using `script` variable to avoid problems with duplicated declaration of JS files. This variable can be defined in config.js file and JS script is loaded in .hbs file using:
```
{{#if script}}
    <script src="{{static 'component-name.js' }}"></script>
{{/if}}
```
Above method is recommended for most JS scripts used in components, but requires additional config which can be complex, especially in the `Templates` views where current component that contains JS file is loaded multiple times. Good example of that kind component type is `dropdown-list` which on one view is loaded in: sidemenu, header minicart, filters and in footer.
To avoid problems with complex config and duplicated declaration of JS files `common-js` component is created in `Atoms`.
This component contain only common-js.hbs file where JS scripts created in components can be loaded globally using:
3) `<script src="{{static '../component-name/component-name.js' }}"></script>`
This component is used in `_preview.hbs` file after lib JS files are loaded.
Do not use `common-js` component for libs files and for JS scripts created in components that are not loaded multiple time on one view.

## Show on scroll elements
To show sticky elements on product page (tabs header & `add-to-cart` component) we use [aos lib](https://github.com/michalsnik/aos/tree/v2)

## Components notes
In more complex component there is a README.md added, when you can find information about usage, features or a11y implementation. Please check it. In fractal UI, it's available in `Notes` Tab
