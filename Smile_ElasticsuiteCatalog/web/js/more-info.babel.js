define([
  'jquery',
  '!domReady!'
],
function() {
  'use strict';

  return function(config, element) {
    class MoreInfo {
      constructor(element, config) {
        this.moreInfo = element;
        this.trigger = this.moreInfo.querySelector('[aria-expanded]');
        this.content = this.moreInfo.querySelector('[aria-hidden]');
        this.closeButton = this.moreInfo.querySelector('.more-info__close');
        this.dataContent = this.moreInfo.querySelector('.more-info__data');

        this.createGlobalEventHandlers();
        this.moreInfo.addEventListener('click', this.onToggleEvent);

        if (config.attributeDescription) {
          this.setAttributeDescription(config.attributeDescription)
        }
      }

      open(state) {
        this.content.setAttribute('aria-hidden', state);
        this.content.focus();
        // Add events only if tooltip is open - prevent overuse.
        this.initListeners();
      }

      close(state) {
        this.content.setAttribute('aria-hidden', state);
        this.trigger.focus();
        this.killListeners();
      }

      toggle() {
        let currentState = this.trigger.getAttribute('aria-expanded');
        let triggerNewState = currentState === 'true' ? 'false' : 'true';
        this.trigger.setAttribute('aria-expanded', triggerNewState)

        if (currentState === 'false') {
          this.open(currentState);
        }
        else {
          this.close(currentState);
        }
      }

      createGlobalEventHandlers() {
        this.onEscapeEvent = event => {
          if (event.which === 27) {
            event.stopPropagation();
            this.toggle();
          }
        }

        this.onToggleEvent = () => {
          this.toggle()
        }

        this.onOutsideEvent = event => {
          if (!(this.moreInfo.contains(event.target) && !this.closeButton.contains(event.target))) {
            this.toggle()
          }
        }
      }

      setAttributeDescription(attributeDescription) {
        this.dataContent.innerHTML = attributeDescription;
        this.moreInfo.setAttribute('aria-hidden', 'false')
      }

      initListeners() {
        window.addEventListener('resize', this.onToggleEvent);
        this.moreInfo.addEventListener('keydown', this.onEscapeEvent);
        window.addEventListener('click', this.onOutsideEvent);
      }

      killListeners() {
        window.removeEventListener('resize', this.onToggleEvent);
        this.moreInfo.removeEventListener('keydown', this.onEscapeEvent);
        window.removeEventListener('click', this.onOutsideEvent);
      }
    }

    new MoreInfo(element, config);
  };
});

