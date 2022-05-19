# Images
## WebP
All JPG and PNG images on the page are converted into WebP using [Yireo Magento 2 module for WebP](https://github.com/yireo/Yireo_Webp2).
## Lazyloading Images
We use [lazysizes](https://github.com/aFarkas/lazysizes) for lazy loading images.

**How to lazy load image:**
```html
<img
    src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII="
	data-src="image.jpg"
	class="image lazyload"
    alt="image alt text"
/>
```

## Preventing Images from Jumping on Load
To prevent images from jumping on load, we need to calculate **aspect ratio**:
```
(imgHeight / imgWidth) * 100
```

**How to prevent image from jumping on load:**
```html
<div
    class="lazyload-wrapper ratio-container"
    style="padding-bottom: <aspect-ratio>%"
>
    <img
        src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII="
        data-src="image.jpg"
        class="
            image
            lazyload
            ratio-image
        "
        alt="image alt text"
    />
</div>
```

## Responsive Image Template
Responsive image can have different images for different screen sizes.

To make working with responsive images easier, we've created [picture.phtml](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Magento_Theme/templates/html/picture.phtml) template. It already has lazy loading and aspect ratio implemented.

### Usage in CMS
```php
{{block
    class="Magento\Framework\View\Element\Template"
    template="Magento_Theme::html/picture.phtml"
    id="<unique-id>" // Required
    picture_class="picture" // Required
    picture_alt="<descriptive-image-alternative-text" // Recommended
    img_default="<img-url>" // Required
    img_ratio_width="<img-width>" // Recommended
    img_ratio_height="<img-height>" // Recommended
    img480="<img-url>"
    img_ratio_width_480="<img-width>"
    img_ratio_height_480="<img-height>"
    img768="<img-url>"
    img_ratio_width_768="<img-width>"
    img_ratio_height_768="<img-height>"
    img960="<img-url>"
    img1024="<img-url>"
    img_ratio_width_1024="<img-width>"
    img_ratio_height_1024="<img-height>"
    img1328="<img-url>"
    img_ratio_width_1328="<img-width>"
    img_ratio_height_1328="<img-height>"
    img_full="<img-url>"
}}
```

* If you have different images for different screen sizes, then add `img...` attributes. You don't have to add all of them if you don't have an image for every available  breakpoint.
* If images for different screen sizes have different aspect ratios than the default image, add  `img_ratio_width_...` and `img_ratio_height_...` attributes.

### Usage in PHTML Templates
Check [list.phtml](https://github.com/SnowdogApps/magento2-alpaca-theme/blob/master/Snowdog_Acm/templates/content/widget/sliders/list.phtml) to see an example of how to use `picture.phtml` inside another template.
