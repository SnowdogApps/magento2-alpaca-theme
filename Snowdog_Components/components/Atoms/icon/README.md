# Icon component
## Accessibility in Icon
svg has `role="img"` by default.
When you set `hidden` value in config context to `true` role will change to `presentation` and icon won't be visible for screen readers.
This should be use when element has icon and text and icon is displayed only for design purposes.
Example in Button with text and icon before/after
