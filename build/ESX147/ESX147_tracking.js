$(".faceted-search-component").click(function () {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "click_sorting_facets",
    tags: {
      revenue: 0,
      value: 0.0
    }
  });
});