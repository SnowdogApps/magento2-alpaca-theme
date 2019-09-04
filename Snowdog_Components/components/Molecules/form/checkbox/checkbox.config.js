module.exports = {
  collated: true,
  context: {
    id: 'checkbox',
    name: 'checkbox-name',
    label: {
      text: 'Checkbox field',
      class: ''
    },
    icon: {
      class: ''
    },
    input: {
      class: ''
    }
  },
  variants: [
    {
      name: 'long-label',
      context: {
        id: 'checkbox-long-label',
        label: {
          text: 'I hereby agree for processing my personal data, included in my job offer, for the purpose of recruitment (as defined in the Act of August 29, 1997 on the Protection of Personal Data (Journal of Laws No. 133, item 883).'
        },
      }
    },
    {
      name: 'link',
      context: {
        class: '',
        href: '#',
        label: {
          text: 'Checkbox link'
        },
      }
    }
  ]
};
