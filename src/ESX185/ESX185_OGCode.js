const eventListeners = () => {
  // add event listener on click
  document.addEventListener("click", (e) => {
    if (e.target.closest(".row.thumb-list > div > span")) {
      console.log("track modal");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_lm",
      });
    }
    // click new modal launch tile
    else if (e.target.closest(".row.thumb-list > div")) {
      console.log("track optimizely click other thumbnail");
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "185_cat",
      });
    }
  });
};

var anotherInterval = setInterval(() => {
  if (typeof window.jQuery !== "undefined") {
    clearInterval(anotherInterval);
    var $ = window.jQuery;
    eventListeners();
  }
}, 50);
