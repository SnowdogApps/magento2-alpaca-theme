define([
  "jquery",
  "mage/translate",
  "noUiSlider",
  "Amasty_Storelocator/vendor/jquery.ui.touch-punch.min",
  "Magento_Ui/js/lib/knockout/bindings/range",
  "Magento_Ui/js/modal/modal"
], function ($, $t, noUiSlider) {

  $.widget('mage.amLocator', {
      options: {},
      url: null,
      useBrowserLocation: null,
      useGeo: null,
      imageLocations: null,
      map: {},
      marker: {},
      storeListIdentifier: '',
      mapId: '',
      mapContainerId: '',
      needGoTo: false,
      markerCluster: {},
      bounds: {},
      selectors: {
          filterContainer: '[data-amlocator-js="filters-container"]',
          attributeForm: '[data-amlocator-js="attributes-form"]',
          multipleSelect: '[data-amlocator-js="multiple-select"]',
          radiusSelect: '[data-amlocator-js="radius-select"]',
          radiusSlider: '[data-amlocator-js="range-slider"]',
          radiusSelectValue: '[data-amlocator-js="radius-value"]',
          resetSelector: '[data-amlocator-js="reset"]',
          addressSelector: '[data-amlocator-js="address"]',
          searchSelector: '[data-amlocator-js="search"]'
      },
      hiddenState: '-hidden',
      latitude: 0,
      longitude: 0,

      _create: function () {
          this.ajaxCallUrl = this.options.ajaxCallUrl;
          this.useGeo = this.options.useGeo;
          this.imageLocations = this.options.imageLocations;
          this.mapContainer = $('#' + this.options.mapContainerId);

          this.initializeMap();
          this.initializeFilter();
          this.Amastyload();
      },

      navigateMe: function () {
          var self = this;
          self.needGoTo = 1;
          if (self.mapContainer.find('.amlocator-text').val()) {
            self.makeAjaxCall(1);
          }

          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                  self.latitude = position.coords.latitude;
                  self.longitude = position.coords.longitude;
                  self.makeAjaxCall(1);
              }, this.navigateFail.bind(self));
          } else {
              alert($.mage.__('Sorry we\'re unable to display the nearby stores because the "Use browser location" option is disabled in the module settings. Please, contact the administrator.'));
          }
      },

      navigateFail: function (error) {
          // error param exists when user block browser location
          if (this.options.useGeoConfig == 1) {
              this.makeAjaxCall(1);
          } else if (error.code == 1) {
              alert(error.message);
          }
      },

      collectParams: function (sortByDistance, isReset) {
          return {
              'lat': this.latitude,
              'lng': this.longitude,
              'radius': this.getRadius(isReset),
              'product': this.options.productId,
              'category': this.options.categoryId,
              'attributes': this.mapContainer.find(this.selectors.attributeForm).serializeArray(),
              'sortByDistance': sortByDistance
          };
      },

      getMeasurement: function () {
          if (this.mapContainer.find('#amlocator-measurement').length > 0) {
              return this.mapContainer.find('#amlocator-measurement').val();
          }
          if (this.options.distanceConfig !== 'choose') {
            return this.options.distanceConfig;
          }

          return 'km';
      },

      getRadius: function (isReset) {
          var radius = null;

          if (isReset) {
              return 0;
          }

          if (this.options.isRadiusSlider) {
              var slider = this.mapContainer[0].querySelector(this.selectors.radiusSlider);
              if (slider && slider.noUiSlider && slider.noUiSlider.get() !== this.options.minRadiusValue) {
                    radius = slider.noUiSlider.get();
              } else {
                  return null;
              }
          } else if (this.mapContainer.find(this.selectors.radiusSelect)) {
              radius = this.mapContainer.find(this.selectors.radiusSelect).val();
          }

          if (this.getMeasurement() == 'km') {
              radius = radius / 1.609344;
          }

          return radius;
      },

      makeAjaxCall: function (sortByDistance, isReset) {
          var self = this,
              params = this.collectParams(sortByDistance, isReset);

          $.ajax({
              url: self.ajaxCallUrl,
              type: 'POST',
              data: params,
              showLoader: true
          }).done($.proxy(function (response) {
              let locateBtn = document.querySelector('.amlocator-button.-nearby');

              if (locateBtn) {
                locateBtn.disabled = false;
              }

              response = JSON.parse(response);
              self.options.jsonLocations = response;
              self.getIdentifiers();
              self.Amastyload();
          }));
      },

      calculateDistance: function (lat, lng) {
          measurement = this.getMeasurement();
          for (var location in this.options.jsonLocations.items) {
              var distance = MarkerClusterer.prototype.distanceBetweenPoints_(
                  new google.maps.LatLng(
                      lat,
                      lng
                  ),
                  new google.maps.LatLng(
                      this.options.jsonLocations.items[location]['lat'],
                      this.options.jsonLocations.items[location]['lng']
                  )
              );
              if (measurement == 'mi') {
                  distance = distance / 1.609344;
              }
              var locationId = this.options.jsonLocations.items[location]['id'],
                  distanceText = parseInt(distance) + ' ' + measurement;
              this.mapContainer.find('#amasty_distance_' + locationId).show().find('span.amasty_distance_number').text(distanceText);
          }
      },

      plusCodes: function(self) {
          var value = self.mapContainer.find('.amlocator-text').val(),
              regExp = new RegExp("^[A-Z0-9]{8}\\+\\S{2}$");
          if (regExp.test(value) === false) {
              return false;
          }
          self.geocoder.geocode({'address' : value}, function (results, status) {
              if (status == 'OK') {
                  self.latitude = results[0].geometry.location.lat();
                  self.longitude = results[0].geometry.location.lng();

                  if (self.options.enableCountingDistance) {
                      self.calculateDistance(place.geometry.location.lat(), place.geometry.location.lng());
                  }
                  return true;
              } else {
                  return false;
              }
          })
      },

      Amastyload: function () {
          this.deleteMarkers(this.options.mapId);
          var self = this,
              mapId = this.options.mapId;

          this.processLocation();
          this.initializeStoreList();

          if (this.options.enableClustering) {
              this.markerCluster = new MarkerClusterer(this.map[this.options.mapId], this.marker[this.options.mapId], {imagePath: this.imageLocations + '/m'});
          }

          this.geocoder = new google.maps.Geocoder();
      },

      initializeMap: function () {
          var myOptions = {
              zoom: 9,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          var self = this;

          self.infowindow = [];
          self.marker[self.options.mapId] = [];
          self.map[self.options.mapId] = [];
          self.map[self.options.mapId] = new google.maps.Map($("#" + self.options.mapId)[0], myOptions);

          if (self.options.showSearch) {
              var address = self.mapContainer.find('.amlocator-text')[0],
                  autocompleteOptions = {
                      componentRestrictions: {country: self.options.allowedCountries},
                      fields: ["geometry.location"]
                  },
                  autocomplete = new google.maps.places.Autocomplete(address, autocompleteOptions);

              self.mapContainer.find('.amlocator-text').keyup(function (e) {
                  if (self.plusCodes(self) === true) {
                      e.preventDefault();
                  }
              });

              google.maps.event.addListener(autocomplete, 'place_changed', function () {
                  var place = autocomplete.getPlace();

                  if (place.geometry != null) {
                      self.latitude = place.geometry.location.lat();
                      self.longitude = place.geometry.location.lng();
                      if (self.options.enableSuggestionClickSearch) {
                          self.makeAjaxCall();
                          self.toggleMapButtons(true);
                      }
                      if (self.options.enableCountingDistance) {
                          self.calculateDistance(place.geometry.location.lat(), place.geometry.location.lng());
                      }
                  } else {
                      alert($.mage.__('You need to choose address from the dropdown with suggestions.'));
                  }
              });
          }

          if (self.options.automaticLocate) {
              self.navigateMe();
          }
      },

      initializeFilter: function () {
          var self = this;
          self.mapContainer.find('.amlocator-button.-nearby').click(function (event) {
              event.target.disabled = true;
              self.getIdentifiers($(this));
              self.ajaxCallUrl = self.options.ajaxCallUrl;
              self.navigateMe();
          });

          self.mapContainer.find('.amlocator-text').on('keyup', function () {
              if (event.keyCode === 13) {
                  event.preventDefault();
                  self.mapContainer.find('.amlocator-text').click();
              }
          });

          if (this.options.isRadiusSlider) {
              this.createRadiusSlider();
          }

          self.mapContainer.find('.amlocator-clear').on('click', function (e) {
              e.preventDefault();
              var attrForm = $(this).parents(self.selectors.filterContainer)
                  .find(self.selectors.attributeForm);
              attrForm.find('option:selected').removeAttr('selected');
              attrForm[0].reset();
              attrForm.find(self.selectors.multipleSelect).val(null).trigger("chosen:updated");
              self.getIdentifiers($(this));
              self.makeAjaxCall();
          });

          self.mapContainer.find(this.selectors.searchSelector).on('click', function () {
              if (!$(self.selectors.addressSelector).val()) {
                  return false;
              }

              self.getIdentifiers($(this));
              self.makeAjaxCall();
              self.toggleMapButtons(true);
          });

          self.mapContainer.find('.amlocator-attribute-filter').on('click', function () {
              $(this).parent().find(self.selectors.filterContainer).slideToggle();
              $(this).find('.amlocator-arrow').toggleClass('-down');
          });

          self.mapContainer.find('.amlocator-filter-attribute').on('click', function () {
              self.getIdentifiers($(this));
              $(this).parent().find(self.selectors.filterContainer).slideToggle();
              self.makeAjaxCall();
          });

          self.mapContainer.find(this.selectors.resetSelector).on('click', this.resetMap.bind(this));
      },

      toggleMapButtons: function (isShow) {
          $(this.selectors.resetSelector).toggleClass(this.hiddenState, !isShow);
          $(this.selectors.searchSelector).toggleClass(this.hiddenState, isShow);
      },

      resetMap: function () {
          this.makeAjaxCall(false, true);
          $(this.selectors.addressSelector).val('');
          this.toggleMapButtons(false);
      },

      initializeStoreList: function () {
          var self = this,
              mapId = this.options.mapId;

          self.mapContainer.find('.amlocator-today').click(function () {
              $(this).next(".amlocator-week").slideToggle();
              $(this).find(".amlocator-arrow").toggleClass("-down");
              event.stopPropagation();
          });

          self.mapContainer.find('.amlocator-pager-container .item a').click(function () {
              self.getIdentifiers($(this));
              self.ajaxCallUrl = this.href;
              self.makeAjaxCall(false, true);
              event.preventDefault();
          });

          self.mapContainer.find('.amlocator-store-desc').click(function () {
              var id = $(this).attr('data-amid');
              self.getIdentifiers($(this));

              self.gotoPoint(id);
          });

          if (self.options.enableCountingDistance
              && self.latitude
              && self.longitude
          ) {
              self.calculateDistance(self.latitude, self.longitude);
          }
      },

      getIdentifiers: function (event) {
          if (event) {
              this.mapContainer = event.parents().closest('.amlocator-map-container');
          }
          this.storeListIdentifier = this.mapContainer.find('.amlocator-store-list');
          this.mapIdentifier = this.mapContainer.find('.amlocator-map');
      },

      processLocation: function () {
          var self = this,
              locations = self.options.jsonLocations,
              curtemplate = '';

          self.bounds = new google.maps.LatLngBounds();

          for (var i = 0; i < locations.totalRecords; i++) {
              curtemplate = locations.items[i].popup_html;

              this.createMarker(locations.items[i].lat, locations.items[i].lng, curtemplate, locations.items[i].id, locations.items[i].marker_url);
          }

          for (var locationId in this.marker[this.options.mapId]) {
              if (this.marker[this.options.mapId].hasOwnProperty(locationId)) {
                  this.bounds.extend(this.marker[this.options.mapId][locationId].getPosition());
              }
          }

          this.map[this.options.mapId].fitBounds(this.bounds);

          if (locations.totalRecords === 1 || self.needGoTo) {
              google.maps.event.addListenerOnce(this.map[this.options.mapId], 'bounds_changed', function () {
                  self.map[self.options.mapId].setZoom(self.options.mapZoom);
              });
          }

          if (locations.totalRecords === 0) {
              google.maps.event.addListenerOnce(this.map[this.options.mapId], 'bounds_changed', function () {
                  self.map[self.options.mapId].setCenter(
                      new google.maps.LatLng(
                          0,
                          0
                      )
                  );
                  self.map[self.options.mapId].setZoom(2);
                  alert($.mage.__('Sorry, no locations were found.'));
              });
          }

          if (self.storeListIdentifier) {
              self.storeListIdentifier.html(locations.block);
              if (locations.totalRecords > 0 && self.needGoTo) {
                  self.gotoPoint(locations.items[0].id);
                  self.needGoTo = false;
              }
          }
      },

      gotoPoint: function (myPoint) {
          var self = this,
              mapId = self.mapIdentifier.attr('id');
          self.closeAllInfoWindows(mapId);

          self.mapContainer.find('.-active').removeClass('-active')
          // add class if click on marker
          self.mapContainer.find('[data-amid=' + myPoint + ']').addClass('-active');
          self.map[mapId].setCenter(
              new google.maps.LatLng(
                  self.marker[mapId][myPoint].position.lat(),
                  self.marker[mapId][myPoint].position.lng()
              )
          );
          self.map[mapId].setZoom(self.options.mapZoom);
          self.marker[mapId][myPoint]['infowindow'].open(
              self.map[mapId],
              self.marker[mapId][myPoint]
          );
      },

      createMarker: function (lat, lon, html, locationId, marker) {
          var self = this,
          newmarker = new google.maps.Marker({
              position: new google.maps.LatLng(lat, lon),
              map: this.map[this.options.mapId],
              icon: marker ? marker : ''
          });

          newmarker['infowindow'] = new google.maps.InfoWindow({
              content: html
          });
          newmarker['locationId'] = locationId;
          google.maps.event.addListener(newmarker, 'click', function () {
              self.mapIdentifier = $('#' + self.element.context.id);
              self.gotoPoint(this.locationId);
          });

          // using locationId instead 0, 1, 2, i counter
          this.marker[this.options.mapId][locationId] = newmarker;
      },

      closeAllInfoWindows: function (mapId) {
          var spans = $("#" + mapId + ' span');

          for (var i = 0, l = spans.length; i < l; i++) {
              spans[i].className = spans[i].className.replace(/\active\b/, '');
          }

          if (typeof this.marker[mapId] !== "undefined") {
              for (var marker in this.marker[mapId]) {
                  if (this.marker[mapId].hasOwnProperty(marker)) {
                      this.marker[mapId][marker]['infowindow'].close();
                  }
              }
          }
      },

      createRadiusSlider: function () {
          var self = this,
          radiusMeasurment = document.querySelector('[data-amlocator-js="radius-measurment"]').innerHTML,
          measurmentSelect = document.querySelector('[data-amlocator-js="measurment-select"]');
          radiusSearchId = $("#" + self.options.searchRadiusId);
          var rangeInput = document.querySelector('[data-amlocator-js="radius-select"]');
          var range = self.mapContainer[0].querySelector(self.selectors.radiusSlider);

          if (self.options.minRadiusValue === self.options.maxRadiusValue) { // min and max radius value can't be the same
            self.options.minRadiusValue = 0;
            self.options.maxRadiusValue = 100;
          }

          noUiSlider.create(range, {
            start: 0,
            connect: true,
            tooltips: true,
            format: {
              from: function (value) {
                return parseInt(value)
              },
              to: function (value) {
                return parseInt(value)
              }
            },
            range: {
              'min': self.options.minRadiusValue,
              'max': self.options.maxRadiusValue,
            }
          })

          if (measurmentSelect) {
            measurmentSelect.addEventListener('change', (event) => {
              range.querySelector('.noUi-tooltip .unit').innerHTML = event.target.value;
              if (self.options.enableCountingDistance
                && self.latitude
                && self.longitude
              ) {
                  self.calculateDistance(self.latitude, self.longitude);
              }
            })
          }

          range.noUiSlider.on('update', (values) => {
            rangeInput.value = values[0];
            if (measurmentSelect) {
              range.querySelector('.noUi-tooltip').insertAdjacentHTML('beforeend', '<span class="unit">' + measurmentSelect.value + '</span>');
            } else {
              range.querySelector('.noUi-tooltip').insertAdjacentHTML('beforeend', '<span class="unit">' + radiusMeasurment + '</span>');
            }
          })
      },

      deleteMarkers: function(mapId) {
          if (!_.isEmpty(this.markerCluster)) {
              this.markerCluster.clearMarkers();
          }
          for (var marker in this.marker[mapId]) {
              if (this.marker[mapId].hasOwnProperty(marker)) {
                  this.marker[mapId][marker].setMap(null);
              }
          }
          this.marker[mapId] = [];
      },

  });

  return $.mage.amLocator;
});
