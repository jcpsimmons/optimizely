$(document).ready(function() {
  window
    .$(".navbar-collapse")
    .children(".nav")
    .click(function() {
      console.log("x");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "clickedSortingFacet"
      });
    });
  window.EventBus.$on("productResultsUpdated", function() {
    window
      .$(".navbar-collapse")
      .children(".nav")
      .click(function() {
        console.log("x");
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "clickedSortingFacet"
        });
      });
  });
});
