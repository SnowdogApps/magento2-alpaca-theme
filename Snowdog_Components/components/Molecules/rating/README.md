# Rating component

## Accessible rating
* Rating component (which shows the average rate) should be focusable (`tabindex="0"`) and should have `aria-label` set with descriptive value and average rating value.
* Rating--rate component has to be usable with keyboard.
It acts like a small form with `input type="button"` behing the stars. moving focus we see that background changes and with space click we can set the field selected/star active.

What should be done to keep it working for AT:
* keep ratio inputs in `fieldset` and add `legend` to set some label
* use `role="listbox"` `aria-required="true"` and `aria-labelledby="<use legend id>"` to make list of options with required rating field
* use `role="option"` & `aria-selected` on the input radio wrapper
* use `aria-label` for input radio `label` elements
