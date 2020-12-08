define([
  "jquery",
  "Magento_Catalog/js/product/breadcrumbs",
  "jquery/ui",
], function ($) {
  "use strict";
  return function (parentWidget) {
    $.widget("mage.breadcrumbs", parentWidget, {
      /**
       * Find parent menu item for current.
       *
       * @param {Object} menuItem
       * @return {Object|null}
       * @private
       */
      _getParentMenuItem: function (menuItem) {
        var classes,
          classNav,
          parentClass,
          parentMenuItem = null;

        if (!menuItem) {
          return null;
        }

        classes = menuItem.parent().attr("class");
        classNav = classes.match(/(nav\-)[0-9]+(\-[0-9]+)+/gi);

        if (classNav) {
          classNav = classNav[0];
          parentClass = classNav.substr(0, classNav.lastIndexOf("-"));

          if (parentClass.lastIndexOf("-") !== -1) {
            parentMenuItem = $(this.options.menuContainer).find(
              "." + parentClass + " > a"
            );
            parentMenuItem = parentMenuItem.length ? parentMenuItem : null;
          }
        }

        return parentMenuItem;
      },
    });
    return $.mage.breadcrumbs;
  };
});
