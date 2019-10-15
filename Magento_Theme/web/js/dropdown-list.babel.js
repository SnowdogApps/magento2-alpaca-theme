'use strict';

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownList =
/*#__PURE__*/
function () {
  // eslint-disable-line
  function DropdownList(element) {
    _classCallCheck(this, DropdownList);

    this.element = element;
    this.dropdownCollapseLabel = '.dropdown-list__item--collapse > .dropdown-list__label, .dropdown-list__item--collapse > .dropdown-list__label-wrapper > .dropdown-list__label';
    this.dropdownItem = _toConsumableArray(this.element.querySelectorAll(this.dropdownCollapseLabel));
    this.contentClass = 'dropdown-list__content';
    this.mq = '(min-width: 768px)';
    this.mqClass = 'dropdown-list--with-breakpoint';
    this.dropdownMediumOpen = this.element.classList.contains(this.mqClass);
    this.init();
  }

  _createClass(DropdownList, [{
    key: "setAriaAttributes",
    value: function setAriaAttributes(label, content, expanded) {
      if (expanded) {
        label.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      } else {
        label.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    }
  }, {
    key: "removeAriaAttributes",
    value: function removeAriaAttributes(label, content) {
      label.removeAttribute('aria-expanded');
      content.setAttribute('aria-hidden', 'false');
      label.disabled = true;
    }
  }, {
    key: "isMediumOpen",
    value: function isMediumOpen(dropdownBlock) {
      return dropdownBlock.classList.contains(this.mqClass) && window.matchMedia(this.mq).matches;
    }
  }, {
    key: "resetMqMediumOpen",
    value: function resetMqMediumOpen(item) {
      var dropdownItem = item.parentNode,
          dropdownContent = dropdownItem.querySelector(".".concat(this.contentClass));

      if (window.matchMedia(this.mq).matches) {
        this.removeAriaAttributes(item, dropdownContent);
      } else {
        this.setAriaAttributes(item, dropdownContent, true);
        item.disabled = false;
      }
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(trigger, dropdownContent, opening) {
      var dropdownBlock = trigger.closest('.dropdown-list'),
          focusableElements = dropdownContent.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

      if (!this.isMediumOpen(dropdownBlock)) {
        if (dropdownContent.clientHeight > 0) {
          this.setAriaAttributes(trigger, dropdownContent, true);
          trigger.focus();
        } else if (opening) {
          this.setAriaAttributes(trigger, dropdownContent, false);

          if (focusableElements[0]) {
            focusableElements[0].focus();
          }
        }
      }
    }
  }, {
    key: "setMediumOpen",
    value: function setMediumOpen() {
      var _this = this;

      if (this.dropdownMediumOpen) {
        var dropdownItems = _toConsumableArray(this.element.querySelectorAll(this.dropdownCollapseLabel));

        dropdownItems.forEach(function (key) {
          return _this.resetMqMediumOpen(key);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.dropdownItem.forEach(function (key) {
        var dropdownId = key.getAttribute('aria-controls'),
            dropdownContent = document.getElementById(dropdownId);
        key.addEventListener('click', function (e) {
          e.preventDefault();

          _this2.toggleContent(key, dropdownContent, true);
        }, false);
        [key, dropdownContent].forEach(function (el) {
          return el.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
              _this2.toggleContent(key, dropdownContent, false);
            }
          });
        });
      });
      this.setMediumOpen();
      window.addEventListener('resize', function () {
        _this2.setMediumOpen();
      });
    }
  }]);

  return DropdownList;
}();

define(function () {
  return function (config, element) {
    new DropdownList(element);
  };
});
//# sourceMappingURL=dropdown-list.babel.js.map
