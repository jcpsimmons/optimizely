window.EventBus.$on("productResultsUpdated", function(data) {
  moveFeaturesDropdown();
  if (data["facet"] == "features") {
    
  }
});
