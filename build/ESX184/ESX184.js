var ESX184 = function ESX184() {
  var supressError = function supressError(err) {
    return true;
  };

  try {
    document.addEventListener("click", function (e) {
      if (e.target.parentNode.parentNode.parentNode.classList.contains("gift-card")) {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "184_cgc",
          tags: {
            revenue: 0,
            value: 0.0
          }
        });
      } else if (e.target.id == "coupon-code") {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "184_csc",
          tags: {
            revenue: 0,
            value: 0.0
          }
        });
      }
    });
  } catch (error) {
    supressError(error);
  }
};

window.$(document).ready(ESX184);