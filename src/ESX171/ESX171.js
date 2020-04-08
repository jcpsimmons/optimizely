// shared - tracking code
// #omni_store_details

var waitForOmni = setInterval(function() {
  if (document.getElementById("omni_store_details")) {
    document
      .getElementById("omni_store_details")
      .addEventListener("click", function(e) {
        if (e.target.nodeName == "A") {
          // optimizely track
          window["optimizely"] = window["optimizely"] || [];
          window["optimizely"].push({
            type: "event",
            eventName: "171-172-OSDLink",
          });
        }
      });

    clearInterval(waitForOmni);
  }
});
