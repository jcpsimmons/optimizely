$(document).ready(function() {
  var facets = $("div.faceted-search-component .navbar-collapse")
    .children(".nav")
    .clone();

  $("div.faceted-search-component .navbar-collapse")
    .children(".nav")
    .remove();

  facets = facets.slice(0, 5);

  $("div.faceted-search-component .navbar-collapse").append(facets);
});

// // EVENT BUS stuff for later

// $(document).ready(function() {
//     window.EventBus.$on("productResultsUpdated", function(data) {
//       if (data["facet"] == "features") {
//         window["optimizely"] = window["optimizely"] || [];
//         window["optimizely"].push({
//           type: "event",
//           eventName: "clickFeaturesFacet"
//         });
//       }
//     });
//   });
