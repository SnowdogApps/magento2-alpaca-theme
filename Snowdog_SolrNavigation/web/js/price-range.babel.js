'use strict';
define(['jquery'], function($) {
  return function(options, element) {
    var $filterButton = $(element),
        filterUrl     = $filterButton.data('filterUrl'),
        min           = $filterButton.data('min'),
        max           = $filterButton.data('max'),
        attribute     = $filterButton.data('attribute'),
        lowerBound    = $('#' + attribute + '-lower'),
        upperBound    = $('#' + attribute + '-upper'),
        priceFileds   = [lowerBound, upperBound];

    function toggleFilterButton(filterButtonIsDisabled) {
      if (filterButtonIsDisabled) {
        $filterButton.attr('disabled', 'disabled');
      } else {
        $filterButton.removeAttr('disabled');
      }
    }

    function checkRangeValues() {
      $.each(priceFileds, function() {
        var inputValue = $(this).val();
        if (inputValue.length > 0 && inputValue > 0) {
          toggleFilterButton(false);
          return false;
        } else {
          toggleFilterButton(true);
        }
      });
    }

    checkRangeValues();

    $.each(priceFileds, function() {
      $(this).bind('keyup mouseup', function() {
        checkRangeValues();
      });
    })

    $('.range-filter__slider').on('click', function() {
      checkRangeValues();
    });

    $filterButton.click(function() {
      var lower = parseFloat(lowerBound.val()),
          upper = parseFloat(upperBound.val());

      if (isNaN(lower)) {
        lower = min;
      }
      if (isNaN(upper)) {
        upper = max;
      }
      if (lower > upper) {
        var tmp = lower;
        lower = upper;
        upper = tmp;
      }
      filterUrl = filterUrl.replace('{from}', lower);
      filterUrl = filterUrl.replace('{to}', upper);
      window.location.href = filterUrl;
    });
  };
});
