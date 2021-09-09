## Icons

All icons are gathered into *icon-sprite.svg* file

Use sprite to display svg inline in your project:

```html
<svg class="icon-class" role="img">
    <title>Icon title</title>
    <use href="#icon-id"></use>
</svg>
```

### implementation

To display icons in documentation, on each preview the icon-sprite is injected inline.
While implementing in theme, include the sprite inside body tag and to display an icon use `use` with it's `id` as a value for `href`

### icons' customisation

There are no dedicated styles for svg icons,
feel free to add appropriate BEM class using icon in your block and set `fill`, `width` and `height` property to change icon's color and size

## accessible icons

To make icons accessible we use `title` element as a first child of `svg` and `role="img"`. Title is provided in config file.

When you set `hidden` value in config context to `true` role will change to `presentation`, an attribute `focusable="false"` will be added and icon won't be visible for assistive technologies (AT).
This should be use when element has icon and text and icon is displayed only for design purposes.
In `button` with text and icon before/after icon should be hidden, in `button--icon` icon also should be hidden, because it's `aria-label` on the button element should inform user about possible action and focusing on icon inside button make the website operation less comfortable for AT's users.

If you need to implement description for the icon, use `<desc>` element for it and add id for both `title` and `desc` elements and bind those ids in `aria-labelledby` svg's attribute:
```html
<svg class="header__icon" role="img" aria-labelledby="icon-title-id icon-desc-id">
    <title id="icon-title-id">Icon title</title>
    <desc id="icon-desc-id"></desc>
    <use href="images/icons-sprite.svg#icon-id"></use>
</svg>
```
