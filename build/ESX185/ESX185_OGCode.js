var eventListeners = function eventListeners() {
  document.addEventListener("click", function (e) {
    if (e.target.closest(".row.thumb-list > div > span")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_lm"
      });
    } else if (e.target.closest(".row.thumb-list > div")) {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "185_cat"
        });
      }
  });
};

var anotherInterval = setInterval(function () {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    eventListeners();
  }
}, 50);