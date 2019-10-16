$(document).ready(function() {
  $("body").on("click", "#block226978", function() {
    window["optimizely"] = window["optimizely"] || [];
    window["optimizely"].push({
      type: "event",
      eventName: "click_quick_links"
    });
  });
});
