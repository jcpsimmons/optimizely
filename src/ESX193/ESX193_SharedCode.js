const ESX193_EventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.closest("#ESX193 .ls-logo")) {
      // track logo clicks
    } else if (e.target.closest("#ESX193 .cart-icon")) {
      // track shopping cart icon clicks
    }
  });
};

if (document.readyState === "complete") {
  ESX193_EventListeners();
} else {
  document.addEventListener("DOMContentLoaded", ESX193_EventListeners);
}
