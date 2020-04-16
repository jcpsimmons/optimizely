state = {
  zip: utag_data["cp.lsf-selected-zip-code"],
  cartTotal: utag_data["product_price"].map(function (x) {
    return parseFloat(x);
  }).reduce(function (total, amt) {
    return total + amt;
  })
};
fetch("http://example.com/movies.json").then(function (response) {
  return response.json();
}).then(function (data) {});