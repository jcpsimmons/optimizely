function moveFeaturesDropdown() {
  if (
    window
      .$(".navbar-collapse ul:nth-child(5)>li>a")
      .text()
      .replace(/ /g, "")
      .replace(/\n/g, "") == "Features"
  ) {
    var featuresDropdown = window
      .$(".navbar-collapse ul:nth-child(5)")
      .detach();
    featuresDropdown.prependTo(".navbar-collapse");
  }
}

window.$(document).ready(function() {
  moveFeaturesDropdown();
});

window.EventBus.$on("productResultsUpdated", function(data) {
  moveFeaturesDropdown();
});
