function pollingFn() {
  if (document.querySelector(".out-stock") && window.utag_data.product_status !== "dropped") {
    return true;
  }
}