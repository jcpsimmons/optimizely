function ESX183Targeting() {
  var targetInterval = setInterval(function () {
    try {
      if (/\d/.test(document.querySelector(".price.order-summary-subtotal").textContent) && parseInt(document.querySelector(".price.order-summary-subtotal").textContent.replace("$", "").replace(/,/g, "")) >= 100) {
        clearInterval(targetInterval);
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "page",
          pageName: "8788531144_esx183_checkout_page_with_greater_than_100_dollars_of"
        });
      }
    } catch (error) {}
  }, 100);
}

window.$(document).ready(ESX183Targeting);