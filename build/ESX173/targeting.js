function pollingFn() {
  var hasProds = false;

  if (document.querySelector("#thisCollection .product-element")) {
    if (document.querySelectorAll("#thisCollection .product-element").length > 1) {
      hasProds = true;
    }
  }

  return hasProds && utag_data.product_name[0].match(/panel bed|storage bed|4 piece|3 piece|sleigh bed|poster bed|canopy bed|upholstered headboard with metal/g) && (utag_data.product_attribute == "bed" || utag_data.product_attribute == "bedroom set");
}