function clickFacet() {
  $("div.faceted-search-component .navbar-collapse")
    .children(".nav")
    .click(function() {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "clickedFacet"
      });
    });
}

$(document).ready(function() {
  clickFacet();
  window.EventBus.$on("productResultsUpdated", function(data) {
    clickFacet();
  });
});
