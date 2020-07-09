var ESX194Tracking = function ESX194Tracking() {
  var targetNode = document.querySelector("#checkoutVue");
  var observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
  };
  var observer = new MutationObserver(function () {
    if (document.querySelector("#checkoutVue li:nth-of-type(1)").classList.contains("active")) {} else if (document.querySelector("#checkoutVue li:nth-of-type(2)").classList.contains("active")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "194_UHS2"
      });
    } else if (document.querySelector("#checkoutVue li:nth-of-type(3)").classList.contains("active")) {
      window["optimizely"] = window["optimizely"] || [];
      window["optimizely"].push({
        type: "event",
        eventName: "194_UHS3"
      });
    }
  });
  observer.observe(targetNode, observerOptions);
};

if (document.readyState === "complete") {
  ESX194Tracking();
} else {
  window.addEventListener("load", ESX194Tracking);
}