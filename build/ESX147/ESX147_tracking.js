$(".faceted-search-component").click(function () {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "click_sorting_facets",
    tags: {
      revenue: 0,
      // Optional in cents as integer (500 == $5.00)
      value: 0.0 // Optional as float

    }
  });
});