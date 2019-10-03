$(document).ready(function() {
  var selector = ".in-same-collection .product-element";

  if (utag_data.site_type == "mobile") {
    selector =
      "#thisCollection>.product-grid-component>.slick-slider>.slick-list>.slick-track .product-element";
  }

  $(selector).each(function() {
    $(this).prependTo(this.parentNode);
  });
});

//  Polling function for targeting less than 8 products in here
function pollingFn() {
  return (
    $("#thisCollection .product-grid-component .row .product-element").length <
    8
  );
}
