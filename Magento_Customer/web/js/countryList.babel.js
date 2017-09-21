define(['choices'], function(Choices) {
  'use strict'

  return function(config, element) {
    const countrySelect   = document.getElementById(config.countrySelect),
          placeholder     = config.placeholder,
          regionContainer = document.getElementById(config.regionContainer),
          regionSelect    = document.getElementById(config.regionSelect),
          regionText      = document.getElementById(config.regionText);

    countrySelect.addEventListener('change', (event) => { 
      const numberOfChildrens = regionSelect.childNodes.length;

      regionSelect.style.display = "none";
      regionContainer.querySelector('.choices').remove();
      regionContainer.insertBefore(regionSelect, null);

      const updateRegionSelect = new Choices(regionSelect, {
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

      updateRegionSelect.init();
      updateRegionSelect.setChoices([
        {value: '', label: config.placeholder, selected: true, disabled: true}
      ], 'value', 'label', false, false);
      regionSelect.innerHTML = "";

      if (numberOfChildrens < 2) {
        regionContainer.querySelector('.choices').style.display = 'none';
        regionText.style.display = 'block';
      }
      else {
        regionContainer.querySelector('.choices').style.display = 'block';
        regionText.style.display = 'none';
      }
    });
  };
});
