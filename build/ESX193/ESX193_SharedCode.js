var ESX193_EventListeners = function ESX193_EventListeners() {
  document.addEventListener("click", function (e) {
    if (e.target.closest("#ESX193 .ls-logo")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CVL"
      });
    } else if (e.target.closest("#ESX193 .cart-icon")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CVCI"
      });
    } else if (e.target.closest(".logo")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COL"
      });
    } else if (e.target.closest("#mini-cart-container")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COSCI"
      });
    } else if (e.target.closest(".main-nav.main-nav__full")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CONL"
      });
    } else if (e.target.closest(".secondary-nav")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COUBL"
      });
    }
  });
};

if (document.readyState === "complete") {
  ESX193_EventListeners();
} else {
  document.addEventListener("DOMContentLoaded", ESX193_EventListeners);
}