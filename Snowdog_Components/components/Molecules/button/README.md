# Button components

## Variants:
* Button Default
* Button Secondary `button--secondary`
* Button Secondary Light `button--secondary-light`
* Button Icon `button--icon`
* Button Icon Light `button--icon button--icon-light`
* Button Icon Fill `button--icon button--icon-border`
* Button Icon Rotate `button--icon button--icon-rotate` - mostly ised for button icon close
* Button Icon Fill `button--icon button--icon-fill` - used for wishlist button
* Button Icon add to cart `button--icon button--add-to`
* Button Link `button--link`
* Button Fluid `button--fluid` - 100% width
* `button[disabled]`

To every `button--icon` we can add the text - it should be inside the span with class `button__text`. checkout `components/Molecules/button/button--icon.hbs` for more details.

## Accessibility notice for buttons

IMPORTANT! All buttons that don't have text inside (labels) and have only graphic representation, usage or `aria-label` or `aria-labelledby` is mandatory! Text inside aria label should be informative and should explain what the button is for.
