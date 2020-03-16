let productIcons = document.querySelector(".product-icons");
let html = productIcons.outerHTML;

productIcons.parentNode.removeChild(productIcons);

document
  .getElementById("productDetails")
  .parentNode.insertAdjacentHTML("afterend", productIcons.outerHTML);

let margin = utag_data.site_type == "desktop" ? "10rem" : "5rem";

document.querySelector(".product-icons").style.marginBottom = margin;

document.querySelector(".product-icons").addEventListener("click", function() {
  window["optimizely"] = window["optimizely"] || [];
  window["optimizely"].push({
    type: "event",
    eventName: "pdp_icons",
    tags: {
      revenue: 0, // Optional in cents as integer (500 == $5.00)
      value: 0.0 // Optional as float
    }
  });
});

// POLLING FCN

function pollingFn() {
  return window.globalVarToWaitFor === "READY";
}
