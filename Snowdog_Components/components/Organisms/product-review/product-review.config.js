module.exports = {
  context: {
    reviewBtn: {
      tag: 'button',
      attributes: 'type="button" aria-label="button"',
      text: 'Write a review',
      class: 'button--secondary-light product-review__write-btn',
    },
    summary: {
      amountLink: false,
      reviewsQty: '32 Reviews'
    },
    reviews: [
      {
        rating: {
          ariaLabel: 'Average rating 72%',
          star: {
            attributes: 'style="width: 72%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'anna Maria',
        title: 'Review title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '17/08/2018'
      },
      {
        rating: {
          ariaLabel: 'Average rating 62%',
          star: {
            attributes: 'style="width: 62%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'John Smith',
        title: 'Good product',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '07/08/2018'
      },
      {
        rating: {
          ariaLabel: 'Average rating 92%',
          star: {
            attributes: 'style="width: 92%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'Janusz Janusz',
        title: 'Lovie this product',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '07/09/2018'
      },
      {
        rating: {
          ariaLabel: 'Average rating 42%',
          star: {
            attributes: 'style="width: 42%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'Grazyna Grazyna',
        title: 'Good but not enought',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '02/08/2018'
      },
      {
        rating: {
          ariaLabel: 'Average rating 77%',
          star: {
            attributes: 'style="width: 77%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'Jan Kowalski',
        title: 'Recommended',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '03/07/2018'
      },
      {
        rating: {
          ariaLabel: 'Average rating 10%',
          star: {
            attributes: 'style="width: 10%"'
          },
          class: 'rating--secondary review__rating'
        },
        author: 'anna Maria',
        title: 'Not recomennded',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus odio, rutrum a augue nec, varius vehicula odio. Praesent at nibh vehicula libero pellentesque vulputate. Ut malesuada dolor eget purus condimentum, eget porttitor est luctus. Donec tristique, tortor a iaculis mollis, ex erat gravida nunc, quis viverra tortor neque quis eros. Pellentesque lorem sapien, consequat non vestibulum ac, pellentesque vitae risus. Nunc eleifend magna id fringilla semper. ',
        date: '07/06/2018'
      },
    ]
  }
}
