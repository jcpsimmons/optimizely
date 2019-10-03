$(document).ready(function() {
  window.EventBus.$on("productResultsUpdated", function(data) {
    if (data["facet"] == "features") {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "clickFeaturesFacet"
      });
    }
  });
});
