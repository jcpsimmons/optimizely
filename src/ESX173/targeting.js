function pollingFn() {
  return (
    utag_data.product_name[0].match(/queen|eastern king|california king/g) &&
    (utag_data.product_attribute == "bed" ||
      utag_data.product_attribute == "bedroom set")
  );
}
