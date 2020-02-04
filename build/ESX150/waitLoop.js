var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    var $ = window.jQuery;
    $("body").on('click', '#SuggestedProducts', function (e) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "clickSuggestedProducts",
        tags: {
          revenue: 0,
          value: 0.0
        }
      });
    });
    clearInterval(anotherInterval);
  }
}, 50);