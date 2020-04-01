document.addEventListener("DOMContentLoaded", function () {
  function checkTimeEligibility() {
    var offset = "-7";
    var d = new Date();
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    var day = nd.getDay();
    var hour = nd.getHours();

    if ([1, 2, 3, 4].indexOf(day) > -1 && hour >= 9 && hour < 21) {
      return true;
    } else if (day == 5 && hour >= 7 && hour < 18) {
      return true;
    } else if (day == 6 && hour >= 7 && hour < 16) {
      return true;
    } else if (day == 0 && hour >= 13 && hour < 21) {
      return true;
    }
  }

  var checkForCartItems = setInterval(function () {
    if (document.querySelector(".cart-main-content") && checkTimeEligibility()) {
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