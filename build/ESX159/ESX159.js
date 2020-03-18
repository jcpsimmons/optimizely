var productIcons = document.querySelector(".product-icons");
var html = productIcons.outerHTML;
productIcons.parentNode.removeChild(productIcons);
document.getElementById("productDetails").parentNode.insertAdjacentHTML("afterend", productIcons.outerHTML);

var margin = function () {
  if (utag_data.site_type == "desktop") {
    return "10rem";
  }

  return "5rem";
}();

document.querySelector(".product-icons").style.marginBottom = margin;
document.querySelector(".product-icons").addEventListener("click", function () {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "pdp_icons",
    tags: {
      revenue: 0,
      value: 0.0
    }
  });
});

function pollingFn() {
  return window.globalVarToWaitFor === "READY";
}