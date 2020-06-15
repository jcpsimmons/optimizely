var addEventListeners = function addEventListeners() {
  document.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "accept-terms":
        alert("accept terms clicked");
        break;

      case "placeOrderBtn":
        alert("place order button");
        break;

      case "ESX192_EditOrderButton":
        alert("edit order button on modal");
        break;

      case "ESX192_PlaceOrderButton":
        alert("place order button on modal");
        break;

      case "ESX192_CloseModalButton":
        alert("close modal button");

      default:
        break;
    }
  });
};

if (document.readyState === "complete") {
  addEventListeners();
} else {
  document.addEventListener("DOMContentLoaded", addEventListeners);
}