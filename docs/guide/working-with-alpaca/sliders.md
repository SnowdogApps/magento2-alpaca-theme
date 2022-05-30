# Sliders
Alpaca includes a reusable [slider PHTML template](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Theme/templates/html/slider.phtml). It gives a lot of flexibility to change slider settings. It uses [Slick](https://kenwheeler.github.io/slick/) slider library.
## Step by Step Guide
This guide explains how to add a slider to a PHTML template.
1. Create Slider Before Block and set configuration options
```php
<?php
$sliderBlockBefore = $this->getLayout()
    ->createBlock("Magento\Framework\View\Element\Template")
    ->setTemplate("Magento_Theme::html/slider.phtml");

$sliderBlockBefore>setData([
    'slider_html'       => 'before-slides', // (required)
    'slider_class'      => '', // slider class name (optional)
    'wrapper_class'     => '', // slider wrapper class name (optional)
    'display_title'     => '', // bool value (optional)
    'slider_title'      => '', // slider title (optional)
    'title_class'       => '', // slider title class name (optional)
    'content_before'    => '', // content before slides (optional)
    'arrows'            => '', // bool value (optional)
    'is_ajax'           => '', // bool value (optional)
                               // set to true when slides are loaded with

    // Slick options - described in https://kenwheeler.github.io/slick/#settings
    'infinite'          => '', // default: 'true'
    'mobile_first'      => '', // default: 'true'
    'center_mode'       => '', // default: 'false'
    'dots'              => '', // default: 'true'
    'autoplay'          => '', // default: 'false'
    'autoplay_speed'    => '', // default: '3000'
    'pause_on_focus'    => '', // default: 'true'
    'pause_on_hover'    => '', // default: 'true'
    'slides_to_show'    => '', // default: '1'
    'slides_to_scroll'  => '', // default: '1'
    'swipe_to_slide'    => '', // default: 'true'
    'responsive_config' => ''  /* default: 'false'
                                Responsive config example:
                                '[
                                    {
                                        "breakpoint": 767,
                                        "settings": {
                                            "slidesToShow": 3,
                                            "slidesToScroll": 1,
                                            "dots": false
                                        }
                                    },
                                    {
                                        "breakpoint": 1023,
                                        "settings": {
                                            "slidesToShow": 4,
                                            "slidesToScroll": 1,
                                            "dots": false
                                        }
                                    }
                                ]'
                               */
]);
?>
```
2. Add Slider Before Block HTML
``` php
<?= $sliderBlockBefore->toHtml(); ?>
```

3. Add HTML for slides
```php
<?php foreach ($items as $key => $item): ?>
    <div class="slider__item">
        <!-- Slider Content  -->
    </div>
<?php endforeach ?>
```
`$items` - slider items data. Adjust if needed.

4. Create Slider After Block and set its configuration options
```php
<?php
$sliderBlockAfter = $this->getLayout()
    ->createBlock("Magento\Framework\View\Element\Template")
    ->setTemplate("Magento_Theme::html/slider.phtml");

$sliderBlockAfter->setData([
    'slider_html'=>'after-slides' // (required)
])
?>
```

6. Add Slider After Block HTML
```php
<?= $sliderBlockAfter->toHtml(); ?>
```

### Examples
* [Magento_Catalog/templates/product/list/items.phtml](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_Catalog/templates/product/list/items.phtml)
* [Magento_CatalogEvent/templates/widget/lister.phtml](https://github.com/SnowdogApps/magento2-alpaca-theme/tree/master/Magento_CatalogEvent/templates/widget/lister.phtml)

## Add Slider in Admin Panel
We've created Sliders Content Type in [Blackbird Advanced Content Manager](https://www.advancedcontentmanager.com/) to make it easier to add new sliders in Magento Admin panel with a visual editor.

Learn about Advanced Content Manager: [Documentation](https://www.advancedcontentmanager.com/en/extension-advanced-content-manager-magento-2/documentation)
### Installation
Required modules:
* [Blackbird Advanced Content Manager](https://www.advancedcontentmanager.com/)
* [snowdog/module-alpaca-acm](https://github.com/SnowdogApps/magento2-alpaca-acm)

After modules installation import content types from [Snowdog Alpaca ACM /imports directory](https://github.com/SnowdogApps/magento2-alpaca-acm/tree/master/imports) in `Admin -> Content -> Content Manager -> Content Types -> Import Content Types button`.
### Usage
1. Add pictures for slider in `Admin -> Content -> Contents -> Pictures`
2. Add slider in `Admin -> Content -> Contents -> Sliders`
3. Use slider
    1. In CMS Block or Page
        1. Click on "Insert Widget..." in the editor
        2. Select "Content Manager Content List" as Widget Type
        3. Set options:
            1. "Content Type" -> "Sliders"
            2. "Number of Contents to Display" -> 1
            3. "Template" -> "Slider Content List Template"
            4. "Condition" -> Slider ID is "your-slider-id"
            5. "Attributes to show" -> not required
        4. Click "Insert Widget"
    2. In Theme
        1. Define block in xml:
        ```xml
        <block
            class="Blackbird\ContentManager\Block\Content\Widget\ContentList"
            name="my-slider"
            template="Blackbird_ContentManager::content/view/sliders/list.phtml"
        >
            <arguments>
                // required argument with uniq name
                <argument
                    name="slider_block"
                    xsi:type="string"
                >
                    some_slider_name
                </argument>

                // required argument for sliders using content type `pictures` as slides, e.g. slider--full-width
                <argument
                    name="slider_picture_block"
                    xsi:type="string"
                >
                    some_picture_block_name
                </argument>

                // optional argument used to define slider variant
                <argument
                    name="slider_class"
                    xsi:type="string"
                >
                    some_class_name
                </argument>

                // optional argument used to define classes for slider title
                        <argument
                    name="slider_title_class"
                    xsi:type="string"
                >
                    heading heading--first-level margin-0
                </argument>
            </arguments>

            // required block with name parameter same as defined in slider_block argument
            <block
                class="Magento\Framework\View\Element\Template"
                name="some_slider_name"
                template="Magento_Theme::html/slider.phtml"
            />
        </referenceBlock>
        ```
        Check [Home Slider Example](https://github.com/SnowdogApps/magento2-alpaca-acm/blob/master/view/frontend/layout/cms_index_index.xml#L21)
