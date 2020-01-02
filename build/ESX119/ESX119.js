"use strict";

function moveFeaturesDropdown() {
  if (window.$('a.dropdown-toggle:contains(Features)').length == 1) {
    var featuresDropdown = window.$('a.dropdown-toggle:contains(Features)').parent().parent().detach();
    featuresDropdown.prependTo('.navbar-collapse');
  }
}

setInterval(function () {
  moveFeaturesDropdown();
}, 100);
window.$(document).ready(function () {
  moveFeaturesDropdown();
});
window.EventBus.$on('productResultsUpdated', function (data) {
  moveFeaturesDropdown();
}); // TARGETING

function jsCond() {
  return utag_data.page_type == 'category' || utag_data.page_type == 'search';
}