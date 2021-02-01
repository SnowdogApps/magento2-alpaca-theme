define(['jquery'], function ($) {
  'use strict';

  var myOrdersFilterMixin = {
    bindOpenCloseListenerToFilterButton: function () {
      this.els.filterShowBtn.click(
        function () {
          this.els.extraFilters.css('display', 'flex');
          this.els.filterCloseBtn.show();
          this.els.filterShowBtn.hide();
          this.els.filterSummaryFieldset.hide();
        }.bind(this)
      );

      this.els.filterCloseBtn.click(
        function () {
          this.els.extraFilters.hide();
          this.els.filterCloseBtn.hide();
          this.els.filterShowBtn.show();
          this.els.filterSummaryFieldset.show();
        }.bind(this)
      );
    }
  };

  return function (targetWidget) {
    $.widget('mage.myOrdersFilter', targetWidget, myOrdersFilterMixin);

    return $.mage.myOrdersFilter;
  };
});
