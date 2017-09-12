define(['choices'], function(Choices) {
  'use strict'

  const countrySelect = document.getElementById('country'),
        stateSelect   = document.getElementById('region_id'),
        stateLabel    = document.querySelector('.label[for="region_id"]');

  countrySelect.addEventListener('change', (event) => { 
    if (stateSelect.style.display === "none") {
      stateLabel.nextElementSibling.style.display = "none";
    }
    else {
      stateLabel.nextElementSibling.remove();
      stateLabel.parentNode.insertBefore(stateSelect,stateLabel.nextElementSibling);

      const updateStateSelect = new Choices(stateSelect, {
        placeholder  : false,
        searchEnabled: false,
        classNames   : {
            containerInner: 'select__field',
            list          : 'select__field-list',
            input         : 'select__field-input',
            item          : 'select__field-item',
            listSingle    : 'select__field-list--single'
        }
      });
      updateStateSelect.init();
    }
  });
});
