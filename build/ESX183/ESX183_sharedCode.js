var eventListeners183 = function eventListeners183() {
  document.addEventListener("click", function (e) {
    if (e.target.parentNode.parentNode.parentNode.classList.contains("gift-card")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "183_cgc"
      });
    } else if (e.target.id == "coupon-code") {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "183_csc"
      });
    }
  });
};

window.$(document).ready(eventListeners183);