var ESX193_EventListeners = function ESX193_EventListeners() {
  document.addEventListener("click", function (e) {
    if (e.target.closest("#ESX193 .ls-logo")) {} else if (e.target.closest("#ESX193 .cart-icon")) {}
  });
};

if (document.readyState === "complete") {
  ESX193_EventListeners();
} else {
  document.addEventListener("DOMContentLoaded", ESX193_EventListeners);
}