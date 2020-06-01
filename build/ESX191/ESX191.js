var hideFreeShipFiveHundred = function hideFreeShipFiveHundred() {
  Array.from(document.querySelectorAll(".free-shipping-message")).forEach(
    function(el) {
      if (el.textContent == "Free Shipping with $500 orders") {
        el.style.display = "none";
      }
    }
  );
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  hideFreeShipFiveHundred();
} else {
  document.addEventListener("DOMContentLoaded", hideFreeShipFiveHundred);
}

var anotherInterval = setInterval(function() {
  if (typeof window.EventBus !== "undefined") {
    clearInterval(anotherInterval);
    EventBus.$on("productResultsUpdated", hideFreeShipFiveHundred);
  }
}, 50);
