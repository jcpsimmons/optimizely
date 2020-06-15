var checkoutModal = function checkoutModal() {
  var MODAL_IS_VISIBLE = false;
  var MODAL_ELIGIBLE = true;
  document.querySelector("body").insertAdjacentHTML("beforeend", "\n      <style>\n        #ESX192Modal {\n          text-align: center;\n        }\n        #ESX192Modal .modal-footer {\n          text-align: center;\n        }\n        #ESX192_PlaceOrderButton {\n          background: #bd5519;\n          border-color: #bd5519;\n          margin-left: 3rem;\n        }\n        #ESX192_EditOrderButton {\n          background: #686868;\n          border-color: #686868;\n        }\n      </style>\n      <div id=\"ESX192Modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Review Order</h5>\n              <button\n                id=\"ESX192_CloseModalButton\"\n                type=\"button\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>\n                Delivery Address:\n                ".concat(document.getElementById("shipping-address1").value, "\n                ").concat(function () {
    if (document.getElementById("shipping-address2") === "") {
      return "";
    }

    return document.getElementById("shipping-address2").value;
  }(), "\n                ").concat(document.getElementById("shipping-city").value, ",\n                ").concat(document.getElementById("shipping-state").value, "\n                ").concat(document.getElementById("shipping-zip").value, "\n              </p>\n              <p>\n                Delivery Window:\n                ").concat(document.querySelector("#step3 .cart-main-content .date").textContent, "\n              </p>\n            </div>\n            <div class=\"modal-footer\">\n              <a href=\"/shopping-cart\">\n                <button\n                  id=\"ESX192_EditOrderButton\"\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                >\n                  Edit Order\n                </button>\n              </a>\n              <button\n                id=\"ESX192_PlaceOrderButton\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n              >\n                Place Order\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "));

  var submitOrder = function submitOrder() {
    window.$("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  var goToStepTwo = function goToStepTwo() {
    window.$("#ESX192Modal").modal("hide");
    document.getElementById("step2Tab").click();
  };

  var showModal = function showModal() {
    window.$("#ESX192Modal").modal("show");
    MODAL_IS_VISIBLE = true;
    MODAL_ELIGIBLE = false;
  };

  var checkAddErrors = function checkAddErrors(fieldsIDsToCheck) {
    var fieldInvalid = false;
    fieldsIDsToCheck.forEach(function (field) {
      var el = document.getElementById(field);

      if (el.id !== "accept-terms" && el.value === "" || el.id === "accept-terms" && !el.checked) {
        fieldInvalid = true;

        if (field === "credit-card-type") {
          el.parentElement.parentElement.classList.add("error");
          el.parentElement.parentElement.querySelector("span.validation-error").style.display = "block";
        } else if (field === "accept-terms") {
          el.parentElement.querySelector(".validation-error").style.display = "block";
        } else {
          el.parentElement.classList.add("error");
          el.parentElement.querySelector("span.validation-error").style.display = "block";
        }
      }
    });
    return fieldInvalid;
  };

  var clearErrors = function clearErrors(fieldsIDsToCheck) {
    fieldsIDsToCheck.forEach(function (field) {
      var el = document.getElementById(field);

      if (field === "credit-card-type") {
        el.parentElement.parentElement.classList.remove("error");
        el.parentElement.parentElement.querySelector("span.validation-error").style.display = "none";
      } else if (field === "accept-terms") {
        el.parentElement.querySelector(".validation-error").style.display = "none";
      } else {
        el.parentElement.classList.remove("error");
        el.parentElement.querySelector("span.validation-error").style.display = "none";
      }
    });
  };

  document.addEventListener("click", function (e) {
    if (e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && MODAL_ELIGIBLE) {
      var fieldsIDsToCheck = ["credit-card-type", "credit-card", "exp-month", "exp-year", "ccv", "accept-terms"];
      e.preventDefault();
      clearErrors(fieldsIDsToCheck);
      var fieldInvalid = checkAddErrors(fieldsIDsToCheck);

      if (!fieldInvalid) {
        clearErrors(fieldsIDsToCheck);
        showModal();
      }
    } else if (e.target.id === "ESX192_EditOrderButton") {
      goToStepTwo();
      MODAL_ELIGIBLE = true;
      MODAL_IS_VISIBLE = false;
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    }
  });
};

if (document.readyState === "complete") {
  checkoutModal();
} else {
  document.addEventListener("DOMContentLoaded", checkoutModal);
}