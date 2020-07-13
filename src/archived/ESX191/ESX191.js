// function that finds all instances of message and sets display to none
const hideFreeShipFiveHundred = () => {
  Array.from(document.querySelectorAll(".free-shipping-message")).forEach(
    (el) => {
      if (el.textContent == "Free Shipping with $500 orders") {
        el.style.display = "none";
      }
    }
  );
};

// Doc Ready Conditions
if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  hideFreeShipFiveHundred();
} else {
  document.addEventListener("DOMContentLoaded", hideFreeShipFiveHundred);
}

// Event Bus Product Change Conditions - must wait for presence on page
var anotherInterval = setInterval(() => {
  if (typeof window.EventBus !== "undefined") {
    clearInterval(anotherInterval);
    EventBus.$on("productResultsUpdated", hideFreeShipFiveHundred);
  }
}, 50);
