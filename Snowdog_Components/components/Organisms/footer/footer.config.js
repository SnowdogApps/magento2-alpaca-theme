module.exports = {
  context: {
    handlerClass: 'container',
    scrollToTop: {
      tag: 'button',
      class: 'footer__scroll-top',
      icon: {
        title: 'Scroll to top',
        id: 'arrow-up'
      }
    },
    bottomBar: {
      handlerClass: 'container'
    },
    linkList: {
      id: 'dropdown-footer',
      class: 'dropdown-list--with-breakpoint',
      dropdowns: [
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-customers"',
          title: 'Customers',
          id: 'dropdown-customers',
          collapse: {
            class: 'dropdown-list__icon dropdown-list__icon--inner',
            id: 'angle-down',
            title: 'Arrow down'
          },
          contentElement: 'list--columns',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            columns: [
              {
                text: 'Column 1',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'Login to My Account',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Sign in"'
                  },
                  {
                    text: 'Create an Account',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Sign up"'
                  },
                  {
                    text: 'My Orders',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="My Orders"'
                  }
                ]
              },
              {
                text: 'Column 2',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'My Cart',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="My Cart"'
                  },
                  {
                    text: 'Checkout',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Checkout"'
                  }
                ]
              }
            ]
          }
        },
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false" aria-controls="dropdown-information"',
          title: 'Information',
          id: 'dropdown-information',
          collapse: {
            class: 'dropdown-list__icon dropdown-list__icon--inner',
            id: 'angle-down',
            title: 'Arrow down'
          },
          contentElement: 'list--columns',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'footer__links-list',
            columns: [
              {
                text: 'Column 1',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'Hours',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Hours"'
                  },
                  {
                    text: 'About Us',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="About Us"'
                  },
                  {
                    text: 'Contact Us',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Contact Us"'
                  }
                ]
              },
              {
                text: 'Column 2',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'Job Openings',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Job Openings"'
                  },
                  {
                    text: 'Returns',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Returns"'
                  },
                  {
                    text: 'Shipping',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Shipping"'
                  }
                ]
              },
              {
                text: 'Column 3',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'Privacy Policy',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Privacy Policy"'
                  },
                  {
                    text: 'Terms & Conditions',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Terms & Conditions"'
                  },
                  {
                    text: 'Site Map',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Site Map"'
                  },
                ]
              },
              {
                text: 'Column 4',
                class: 'list__column--hidden',
                elements: [
                  {
                    text: 'Reviews',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Reviews"'
                  },
                  {
                    text: 'Email Us!',
                    linkClass: 'footer__link',
                    link: '#',
                    linkAttributes: 'title="Email Us!"'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    socialListSubtitle: 'LETS GET SOCIAL!',
    copyrightText: 'Copyright © 2019 Colibri',
    socialIconList: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'list--with-icon list--horizontal footer__social-list',
      elements: [
        {
          icon: {
            id: 'facebook',
            title: 'Facebook logo',
            class: 'footer__social-icon',
          },
          iconItemLink: '#',
          linkAttributes: 'aria-label="Go to Highpointscientific Facebook Page"'
        },
        {
          icon: {
            id: 'twitter',
            title: 'Twitter logo',
            class: 'footer__social-icon',
          },
          iconItemLink: '#',
          linkAttributes: 'aria-label="Check Highpointscientific on Twitter"'
        }
      ]
    },
    paymentsList: {
      class: '',
      elements: [
        {
          imageSrc: '/images/footer/visa.svg',
          imageAlt: 'Visa'
        },
        {
          imageSrc: '/images/footer/master-card.svg',
          imageAlt: 'Master Card'
        },
        {
          imageSrc: '/images/footer/discover.svg',
          imageAlt: 'Discover'
        },
        {
          imageSrc: '/images/footer/american-express.svg',
          imageAlt: 'American Express'
        },
        {
          imageSrc: '/images/footer/paypal.svg',
          imageAlt: 'PayPal'
        }
      ]
    }
  }
}
