define([
  "jquery",
  "Magento_Catalog/js/product/breadcrumbs"
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
          // UPDATED: SUPPORT FOR MENU NODES WITH TYPE "WRAPPER"
          // cover case when parentMenuItem is null because
          // menu node of type "wrapper" doesn't contain a link
          // in this case, look for a further ancestor
          parentClass = this._getParentClass(classNav);

          while (parentClass.lastIndexOf("-") !== -1 && parentMenuItem === null) {
            parentMenuItem = $(this.options.menuContainer).find(
              "." + parentClass + " > a"
            );
            parentMenuItem = parentMenuItem.length ? parentMenuItem : null;

            if (parentMenuItem === null) {
              parentClass = this._getParentClass(parentClass);
            }
          }
        }

        return parentMenuItem;
      },

      _getParentClass: function (className) {
        return className.substr(0, className.lastIndexOf("-"));
      }
    });
    return $.mage.breadcrumbs;
  };
});
