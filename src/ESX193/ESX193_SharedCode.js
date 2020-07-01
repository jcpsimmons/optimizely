const ESX193_EventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX193 .ls-logo")) {
      // track variation logo clicks
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CVL",
      });
    } else if (e.target.closest("#ESX193 .cart-icon")) {
      // track variation shopping cart icon clicks
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CVCI",
      });
    } else if (e.target.closest(".logo")) {
      // track orig LS Logo clicks
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COL",
      });
    } else if (e.target.closest("#mini-cart-container")) {
      // tracks orig Cart logo
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COSCI",
      });
    } else if (e.target.closest(".main-nav.main-nav__full")) {
      // track navlink click
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_CONL",
      });
    } else if (e.target.closest(".secondary-nav")) {
      // track util bar click
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "ESX193_COUBL",
      });
    }
  });
};

if (document.readyState === "complete") {
  ESX193_EventListeners();
} else {
  document.addEventListener("DOMContentLoaded", ESX193_EventListeners);
}

/*

NAMES

ESX193 Click Variation Logo
ESX193_CVL
ESX193 Click Variation Cart Icon
ESX193_CVCI
ESX193 Click Original Logo
ESX193_COL
ESX193 Click Original Shopping Cart Icon
ESX193_COSCI
ESX193 Click Original Nav Link
ESX193_CONL
ESX193 Click Original Utility Bar Link
ESX193_COUBL

*/
