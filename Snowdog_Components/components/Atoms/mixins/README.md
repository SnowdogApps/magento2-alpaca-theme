# @mixin font-padding

Helpful mixin that automatically add top and bottom paddings to set required element height.
Left and right paddings are 0 by default but can be changed using mixin arguments.

Examples of usage:
* required 50px height element with default (global) $font-line-height:
    @include font-padding($font-size, 50);

* required 40px height element with default $font-line-height and right/left paddings 10px:
    @include font-padding($font-size, 40, 10, 10);

* required 60px height element with $custom-line-height:
    @include font-padding($font-size, 60, $line-height: $custom-line-height);
---
