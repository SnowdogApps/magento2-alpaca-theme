# Gallery Component

## Gallery styles
Gallery in Magento 2 is built based on [Fotorama](https://fotorama.io). More information about Gallery widget you can find in [Magento 2 documentation](https://devdocs.magento.com/guides/v2.3/javascript-dev-guide/widgets/widget_gallery.html).

Alpaca's Gallery use following styles:
* styles for Magento 2 Gallery based on default Magento 2 `.less` styles, can be found in: `theme-frontend-alpaca/styles/gallery-styles.scss` - this file is generated as a separate css file and loaded only on product page, where gallery is used.
* styles for gallery theme customisation: `theme-frontend-alpaca/Magento_Catalog/styles/modules/_fotorama.scss`
* styles from fractal component (used in Magento 2 theme implementation): `theme-frontend-alpaca/Snowdog_Components/components/Organisms/gallery/_gallery.scss`
* styles for fractal view (used only in fractal view): `theme-frontend-alpaca/Snowdog_Components/docs/styles/docs-only-styles/_gallery.scss`

Some classes of fractal component are extended in `theme-frontend-alpaca/Magento_Catalog/styles/modules/_fotorama.scss`:
* `.gallery__thumb` with variants
* `.gallery__thumb-dot` with variants
* `.gallery__thumb-arr` with variants
* `.gallery__icon-arrow` with variants
* `.gallery__dot` with variants

It is still a bit complicated. The complication level is caused by the Magento implementation, hope it will be refactor and simplified in future released

All styles can be overwritten in the child theme.

## Gallery variants
Gallery variants are set in `vendor/snowdog/theme-frontend-alpaca/etc/view.xml`. Variants can differ depending on breakpoints and variant's class (`&--horizontal`, `&--vertical`) is added dynamically to different elements inside the gallery.
Variants' presentation in fractal is mainly demonstrative. Please take it under consideration customising your Alpaca's child theme.
