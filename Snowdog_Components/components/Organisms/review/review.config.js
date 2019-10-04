module.exports = {
  context: {
    rating: {
      ariaLabel: 'Average rating 72%',
      star: {
        attributes: 'style="width: 72%"'
      },
      class: 'review__rating'
    },
    author: 'anna Maria',
    title: 'Review title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
    date: '07/08/2018'
  },
  variants: [
    {
      name: 'add',
      context: {
        addTitle: 'You\'re reviewing',
        productTitle: 'Product name',
        rate: {
          legendClass: 'review__rating-legend'
        },
        nickname: {
          class: 'review__field',
          label: {
            text: 'Nickname *',
            hidden: false
          },
          field: {
            attributes: 'autocomplete="name"',
            id: 'review-nickname',
            name: 'review-nickname',
            type: 'text'
          }
        },
        summary: {
          class: 'review__field',
          label: {
            text: 'Summary *',
            hidden: false
          },
          field: {
            attributes: 'autocomplete="off"',
            id: 'review-summary',
            name: 'review-summary',
            type: 'text'
          }
        },
        textReview: {
          class: 'review__field',
          label: {
            text: 'Review *',
            hidden: false
          },
          field: {
            attributes: 'autocomplete="off"',
            id: 'review-text',
            name: 'review-text',
            type: 'text'
          }
        },
        submitReview: {
          class: 'review__submit-btn',
          text: 'Add Your Review'
        }
      }
    },
    {
      name: 'summary',
      context: {
        amountLink: true,
        reviewsQty: '(32)'
      }
    }
  ]
}
