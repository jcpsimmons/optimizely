function moveFeaturesDropdown() {
  if (window.$('a.dropdown-toggle:contains(Features)').length == 1) {
    const featuresDropdown = window
      .$('a.dropdown-toggle:contains(Features)')
      .parent()
      .parent()
      .detach();
    featuresDropdown.prependTo('.navbar-collapse');
  }
}

setInterval(() => {
  moveFeaturesDropdown();
}, 100);

window.$(document).ready(() => {
  moveFeaturesDropdown();
});

window.EventBus.$on('productResultsUpdated', (data) => {
  moveFeaturesDropdown();
});

// TARGETING
function jsCond() {
  return utag_data.page_type == 'category' || utag_data.page_type == 'search';
}
