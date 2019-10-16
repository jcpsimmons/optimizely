window.addEventListener(
  "load",
  function() {
    if (window.jQuery) {
      window
        .$(".navbar-collapse")
        .children(".nav")
        .click(function() {
          window["optimizely"] = window["optimizely"] || [];
          window["optimizely"].push({
            type: "event",
            eventName: "clickedSortingFacet"
          });
        });
      window.EventBus.$on("productResultsUpdated", function(data) {
        window
          .$(".navbar-collapse")
          .children(".nav")
          .click(function() {
            console.log("ESX125_CLICKEVENT");
            window["optimizely"] = window["optimizely"] || [];
            window["optimizely"].push({
              type: "event",
              eventName: "clickedSortingFacet"
            });
          });
      });
    }
  },
  false
);
