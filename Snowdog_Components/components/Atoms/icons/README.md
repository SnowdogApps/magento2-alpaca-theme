## icons

all icons are gather into *icon-sprite.svg* file

Use sprite to display svg inline in your project:

```html
<svg class="icon-class" role="img">
    <title>Icon title</title>
    <use xlink:href="#icon-id"></use>
</svg>
```

### implementation

To display icons in documentation, on each preview the icon-sprite is injected inline.
While implementing in theme, include the sprite inside body tag and to display an icon use `use` with it's `id` as a value for `xlink:href`

### icons' customisation

there are no dedicated styles for svg icons,
feel free to add appropriate BEM class using icon in your block and set `fill`, `width` and `height` property to change icon's color and size

### svg and browser support

To use inline svg from sprite with `<use></use>` tag the [svg4everybody](https://github.com/jonathantneal/svg4everybody) is used.
Please check the usage and implement in your project.

## accessible icons

To make icons accessible we use `title` element as a first child of `svg` and `role="img"`. Title is provided in config file.

If you need to implement description for the icon, use `<desc>` element for it and add id for both `title` and `desc` elements and bind those ids in `aria-labelledby` svg's attribute:
```html
<svg class="header__icon" role="img" aria-labelledby="icon-title-id icon-desc-id">
    <title id="icon-title-id">Icon title</title>
    <desc id="icon-desc-id"></desc>
    <use xlink:href="images/icons-sprite.svg#icon-id"></use>
</svg>
```
