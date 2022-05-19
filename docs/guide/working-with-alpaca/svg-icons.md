# SVG Icons
We use [SVG Sprite](https://github.com/svg-sprite/gulp-svg-sprite) that takes all SVG files (matching `/**/icons/**/*.svg`), optimizes them and bakes them into `icons-sprite.svg`.

Browse [Alpaca icons](https://magento2-alpaca-theme.vercel.app/components/detail/icons.html).

## Generate SVG Sprite
```
cd tools && yarn svg
```

## Add Icons to Templates
```html
<!-- .phtml -->
<svg
    class="icon"
    role="presentation"
    focusable="false"
>
    <use
        href="
            <?= $block->escapeUrl(
                $block->getViewFileUrl('images/icons-sprite.svg#<icon-file-name>')
            ) ?>
        "
    ></use>
</svg>
```

```html
<!-- .html -->
<svg
    class="icon"
    role="presentation"
    focusable="false"
>
    <use
        data-bind="
            attr: {
                'href': require.toUrl('images/icons-sprite.svg#<icon-file-name>')
            }
        "
        href=""
    ></use>
</svg>
```

Replace `<icon-file-name>`.

### Accessibility
If icon is only **decorative**, hide it from a11y API tree by setting:
* `role="presentation"`
* `focusable="false"`

**Otherwise**:
* Set `role="img"`
* Add `<title>`

## Add Icons to CMS
```html
{{block
    class="Magento\Framework\View\Element\Template"
    template="Magento_Theme::html/svg-icon.phtml"
    icon="<icon>"
    icon_class="<icon_class>"
    role="<role>"
    title="<title>"
}}
```
### Attributes
| Name | Required | Default | Description |
| --- | --- | --- | --- |
| icon | ✅ |  | Icon file name. |
| icon_class | ❌ |  | Custom style class. Each icon has icon class by default. |
| role | ❌ | img | Set role to presentation if an icon is only decorative. This will hide it in a11y API tree. |
| title | ❌ |  | Each icon with role="img" should have a title. |
