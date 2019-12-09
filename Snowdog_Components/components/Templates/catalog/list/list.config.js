module.exports = {
  name: 'list-view',
  context: {
    banner: {
      class: 'catalog-list__banner'
    },
    items: [
      {
        tag: 'li'
      },
      {
        tag: 'li',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        bulletList: false,
        price: {
          name: 'price--with-special-price',
          context: {
            attributes: 'aria-label="Product price" tabindex="0"',
          }
        },
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-2"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-2',
            attributes: 'aria-labbeledny="shipping-latency-title-2"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-2"',
          }
        }
      },
      {
        tag: 'li',
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-3"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-3',
            attributes: 'aria-labbeledny="shipping-latency-title-3"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-3"',
          }
        }
      },
      {
        tag: 'li',
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-4"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-4',
            attributes: 'aria-labbeledny="shipping-latency-title-4"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-4"',
          }
        }
      },
      {
        tag: 'li',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        bulletList: false,
        price: {
          name: 'price--with-special-price',
          context: {
            attributes: 'aria-label="Product price" tabindex="0"',
          }
        },
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-5"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-5',
            attributes: 'aria-labbeledny="shipping-latency-title-5"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-5"',
          }
        }
      },
      {
        tag: 'li',
        price: {
          name: 'price--with-special-price',
          context: {
            attributes: 'aria-label="Product price" tabindex="0"',
          }
        },
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-6"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-6',
            attributes: 'aria-labbeledny="shipping-latency-title-6"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-6"',
          }
        }
      },
      {
        tag: 'li',
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-7"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-7',
            attributes: 'aria-labbeledny="shipping-latency-title-7"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-7"',
          }
        }
      },
      {
        tag: 'li',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        bulletList: false,
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-8"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-8',
            attributes: 'aria-labbeledny="shipping-latency-title-8"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-8"',
          }
        }
      },
      {
        tag: 'li',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
        bulletList: false,
        stockButton: {
          attributes: 'type="button" data-modal-trigger="shipping-latency-9"'
        },
        shippingLatencyModal: {
          modal: {
            id: 'shipping-latency-9',
            attributes: 'aria-labbeledny="shipping-latency-title-9"'
          },
          heading: {
            attributes: 'id="shipping-latency-title-9"',
          }
        }
      },
    ],
    pager: {
      class: 'margin-vc-xl'
    },
    categoryDescription: '<p>The LX600 Catadioptric telescope design uses a combination of mirrors and lenses to gather light and form a sharp image. There is a wide range of popular telescopes for amateur astronomers, such as Schmidt-Cassegrain and Maksutov-Cassegrain telescopes, that are of the catadioptric design. There are also catadioptric telescopes for sale that are designed primarily for astrophotography or imaging, like the Ritchey-Chretien (RC), Meade ACF, and Celestron EdgeHD.</p><p>The Schmidt-Cassegrain Telescope, or SCT, is the most popular design in the broader catadioptric telescope line-up. The Schmidt-Cassegrain has a folded optical system consisting of a primary mirror and a corrector plate with the secondary mirror right in the center. This design allows the telescope tube to be much more compact than a Newtonian reflector or a Refractor. The most popular Schmidt-Cassegrain has a large 8" diameter mirror and an optical tube that is about 18" long - a perfect combination of good light-gathering and easy-to-carry portability.</p><p>The Maksutov-Cassegrain, or Mak-Cass, catadioptric telescope looks very much like an SCT but has a longer focal length due to the way the light travels inside the tube. The Maksutov-Cassegrain really shines when used for terrestrial or astronomical viewing, especially when turned to the Moon or planets, but it isn\'t the best choice for deep-sky astrophotography due to its long focal length when compared other catadioptric designs.</p><p>Catadioptrics optimized for imaging are rising in popularity as more amateur astronomers fall under the spell of astrophotography. These telescopes have a wide, flat field that works nicely with today\'s larger format DSLR and dedicated astronomy cameras. While many catadioptric telescopes for sale can be used for both visual astronomy and imaging, amateur astronomers who prefer visual observations or have a camera with a smaller sensor don\'t necessarily require the edge-to-edge flatness that a larger sensor does.</p>'
  }
}
