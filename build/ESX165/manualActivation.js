document.addEventListener("DOMContentLoaded", function () {
  var checkForCartItems = setInterval(function () {
    if (document.querySelector(".cart-main-content")) {
      if (utag_data.site_type == "desktop") {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "page",
          pageName: "manualTriggerOnCartWithItems"
        });
      } else {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "page",
          pageName: "manual166Mobile"
        });
      }

      clearInterval(checkForCartItems);
    }
  }, 50);
});