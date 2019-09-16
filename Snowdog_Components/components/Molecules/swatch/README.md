# Swatches accessibility

Swatches require following aria structure to be accessible for assistive technology and keyboard:

1. Swatches wrapper `.swatch__wrapper` should have following aria attributes:
    * `role="listbox"` to easy list swatch's options
    * `aria-activedescendant` with value of selected swatch option
    * `tabindex="0"` to make element focusable
    * `aria-required` with value `true` or `false` depending if swatch option is required
    * `aria-invalid` with value `true` if required field is not filled (if none of options is selected) or with the value `false` if required field is field (option is selected)

2. Swatch option `.swatch__option` should have following aria attributes:
    * `role="option"` to show options of swatch
    * `tabindex="0"` to make element focusable
    * `aria-label` with value of the name/label of swatch option if the swatch option is not a text but graphic element - icon or image (color option - ex: "Green")
    * `aria-describedby` with value of the listbox label/heading if exist
    * `aria-selected` with value `true` if the option was selected
