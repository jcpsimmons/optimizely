const addEventListeners = () => {
  document.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "accept-terms":
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "192_CAT",
        });
        break;
      case "placeOrderBtn":
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "192_CPOB",
        });
        break;
      case "ESX192_EditOrderButton":
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "192_EOB",
        });
        break;
      case "ESX192_PlaceOrderButton":
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "192_CPOBM",
        });
        break;
      case "ESX192_CloseModalButton":
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: "192_CMBM",
        });
      default:
        break;
    }
  });
};

// launch on doc ready
if (document.readyState === "complete") {
  addEventListeners();
} else {
  document.addEventListener("DOMContentLoaded", addEventListeners);
}
