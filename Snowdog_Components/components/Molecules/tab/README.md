# Tabs

## Accessibility in tabs
Our components is accordion on mobile and tabs on wider screens, so we have to implement a11y feature to be used in both cases:
* use `role="widget"` on tab element
* use `buttons` elements as a Labels/headings of tabs
* Buttons should have following aria attributes:
    * `aria-expanded` - set to `true` if tab is open, to `false` when it's closed
    * `aria-controls` where value it's an `id` of content tab element
    * `aria-selected` set to `false` when tab is closed and to `true` if it's open
    * tab title have an id to be binded to tab content
* Tab content element should:
    * have an id to be binded to tab title
    * have `aria-hidden` attribute set to `true` if tab is closed and to `false` if it's open
    * aria-labelledby with value of tab title id
* Keyboard support:
    * accordions - on mobile, down & up arrow keys should move cursor between tab's titles, from first tab title up arrow should move a user to the last tab title, from last tab title down arrow should move user to first tab title.
    * tabs = on desktop - right & left arrow keys should move cursor between tab's titles, from first tab title left arrow should move a user to the last tab title, from last tab title right arrow should move user to first tab title.
    * focus management - Focus should be visible and tab's titles should be focusable with Tab key
