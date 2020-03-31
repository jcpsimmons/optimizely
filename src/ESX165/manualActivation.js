document.addEventListener("DOMContentLoaded", function() {
  console.debug("checking for cart items");
  var checkForCartItems = setInterval(function() {
    if (document.querySelector(".cart-main-content")) {
      if (utag_data.site_type == "desktop") {
        console.debug("Triggering ESX165");
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "page",
          pageName: "manualTriggerOnCartWithItems"
        });
      } else {
        console.debug("Triggering ESX166");
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
