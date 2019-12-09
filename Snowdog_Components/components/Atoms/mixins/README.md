# Mixins

## add-to-button

display icon/text on add to cart button with appropriate icon on hover

## button-icon-fill & button-fill-bg

add animated background using css mask and fill icon with this effect

## focus

display focus state, also for inline elements and input

## font-padding

Helpful mixin that automatically add top and bottom padding to set required element height.
Left and right padding are 0 by default but can be changed using mixin arguments.

Examples of usage:
* required 50px height element with default (global) $font-line-height:
    @include font-padding($font-size, 50px);

* required 40px height element with default $font-line-height and right/left padding 10px:
    @include font-padding($font-size, 40px, 10px, 10px);

* required 60px height element with $custom-line-height:
    @include font-padding($font-size, 60px, $line-height: $custom-line-height);

## isIE
styles implementation for IE browser

## mq
media queries

## svg-uri
encode SVG data uri

## visually-hidden
hide element visually but leave it accessible for Assistive Technologies
