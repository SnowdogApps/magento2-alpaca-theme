module.exports = {
  status: 'wip',
  preview: '@docs-only-styles',
  context: {
    attributes: '',
    class: '',
    filter: {
      wrapperClass: '',
      input: {
        upperClass: '',
        lowerClass: '',
        maxValue: '1000',
        minValue: '0',
        type: 'text'
      },
      suffix: {
        lowerText: '$',
        upperText: '$',
        lowerClass: '',
        upperClass: ''
      }
    },
    rangeInputLower: {
      class: 'range-filter__input range-filter__input--lower',
      label: {
        class: 'range-filter__label',
        text: 'Minimum value'
      },
      field: {
        class: 'range-filter__field range-filter__field--lower',
        id: 'range-filter-min',
        name: 'range-filter-min',
        placeholder: '',
        value: '0'
      }
    },
    rangeInputUpper: {
      class: 'range-filter__input range-filter__input--upper',
      label: {
        class: 'range-filter__label',
        text: 'Maximum value'
      },
      field: {
        class: 'range-filter__field range-filter__field--upper',
        id: 'range-filter-max',
        name: 'range-filter-max',
        placeholder: '',
        value: '1000'
      }
    },
    apply: {
      class: 'button--secondary range-filter__button',
      tag: 'button',
      text: 'Apply',
      attributes: 'type="button" data-min="0" data-max="1000" data-attribute="price" href="#" data-filter-url="#"'
    },
    script: true,
    showFloat: 0
  },
};
