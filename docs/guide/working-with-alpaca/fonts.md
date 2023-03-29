# Fonts
This guide explains how to change fonts in Alpaca Child Theme.

1. Add fonts to `web/fonts` directory
2. Copy `Magento_Theme/templates/root.phtml` from Alpaca Theme
3. In `Magento_Theme/templates/root.phtml`:
    * Swap preloaded Alpaca font files with the new ones
    * Swap `@font-face` rules in `<style>` with new fonts
4. Add fonts to components in `Snowdog_Components/docs/styles/docs-only-styles/_fonts.scss`
5. Use the new fonts in Alpaca styles by overriding typography variables
```scss
// theme-frontend-alpaca/Snowdog_Components/components/Atoms/variables/_variables.scss
// Typography
$font-family-sans-serif      : 'Work Sans', sans-serif !default;
$font-family-serif           : 'Playfair Display', serif !default;
$font-family-monospace       : Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace !default;

$font-family-base            : $font-family-sans-serif !default;
$font-family-secondary       : $font-family-serif !default;
```
You can override these variables in `Snowdog_Components/components/Atoms/variables/_CHILD_THEME_NAME-variables.scss`. Don't use `!default` flag.
