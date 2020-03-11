let productIcons = document.querySelector(".product-icons");
let html = productIcons.outerHTML;

productIcons.parentNode.removeChild(productIcons);

document
  .getElementById("productDetails")
  .parentNode.insertAdjacentHTML("afterend", productIcons.outerHTML);

let margin = utag_data.site_type == "desktop" ? "10rem" : "5rem";

document.querySelector(".product-icons").style.marginBottom = margin;
