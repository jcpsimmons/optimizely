function pollingFn() {
  return !document.querySelector(".cart-dropdown-content .product-element") && document.querySelector(".alert-dismissible");
}