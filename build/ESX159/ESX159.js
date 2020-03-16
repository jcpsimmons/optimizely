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