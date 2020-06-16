var ESX192 = function ESX192($) {
  var ORDER_SUBMITTED = false;
  var MODAL_IS_VISIBLE = false;
  var FORM_COMPLETE = false;
  var FIELD_IDS_TO_CHECK = ["credit-card-type", "credit-card", "exp-month", "exp-year", "ccv", "accept-terms"];
  document.getElementById("placeOrderBtn").innerText = "Review Order";
  document.querySelector("body").insertAdjacentHTML("beforeend", "\n      <style>\n        #ESX192Modal {\n          text-align: center;\n        }\n        #ESX192Modal .modal-footer {\n          text-align: center;\n        }\n        #ESX192_PlaceOrderButton {\n          background: #bd5519;\n          border-color: #bd5519;\n          margin-left: 3rem;\n        }\n        #ESX192_EditOrderButton {\n          background: #686868;\n          border-color: #686868;\n        }\n        #ESX192Modal .modal-footer a {\n          text-decoration: none;\n        }\n      </style>\n      <div id=\"ESX192Modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Review Order</h5>\n              <button\n                id=\"ESX192_CloseModalButton\"\n                type=\"button\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              ".concat(function () {
    if (document.querySelector("#step3 .cart-main-content .header-info p").textContent.toLowerCase().includes("pickup")) {
      return "\n                      <p>\n                        Pickup Store:\n                        ".concat(document.querySelector("#step3 .cart-main-content .main-header .title").textContent.split("at ")[1], "\n                      </p>\n                      <p>\n                        Pickup Window:\n                        ").concat(document.querySelector("#step3 .cart-main-content .date").textContent.split("(")[0], "\n                      </p>\n                    ");
    }

    return "\n                    <p>\n                      Delivery Address:\n                      ".concat(document.getElementById("shipping-address1").value, "\n                      ").concat(function () {
      if (document.getElementById("shipping-address2") === "") {
        return "";
      }

      return document.getElementById("shipping-address2").value;
    }(), "\n                      ").concat(document.getElementById("shipping-city").value, ",\n                      ").concat(document.getElementById("shipping-state").value, "\n                      ").concat(document.getElementById("shipping-zip").value, "\n                    </p>\n                    <p>\n                      Delivery Window:\n                      ").concat(document.querySelector("#step3 .cart-main-content .date").textContent.split("(")[0], "\n                    </p>\n                  ");
  }(), "\n            </div>\n            <div class=\"modal-footer\">\n              <a href=\"/shopping-cart\">\n                <button\n                  id=\"ESX192_EditOrderButton\"\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                >\n                  Edit Order\n                </button>\n              </a>\n              <button\n                id=\"ESX192_PlaceOrderButton\"\n                type=\"button\"\n                class=\"btn btn-primary\"\n              >\n                Place Order\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    "));

  var checkFormComplete = function checkFormComplete() {
    FORM_COMPLETE = FIELD_IDS_TO_CHECK.map(function (field) {
      var el = document.getElementById(field);

      if (el.id !== "accept-terms" && el.value === "" || el.id === "accept-terms" && !el.checked) {
        return false;
      } else {
        return true;
      }
    }).every(function (item) {
      return item === true;
    });
    return FORM_COMPLETE;
  };

  $("#ESX192Modal").on("hide.bs.modal", function () {
    MODAL_IS_VISIBLE = false;
  });
  $("#ESX192Modal").on("show.bs.modal", function () {
    MODAL_IS_VISIBLE = true;
  });

  var submitOrder = function submitOrder() {
    ORDER_SUBMITTED = true;
    $("#ESX192Modal").modal("hide");
    document.getElementById("placeOrderBtn").click();
  };

  var showModal = function showModal() {
    $("#ESX192Modal").modal("show");
  };

  var checkAddErrors = function checkAddErrors(FIELD_IDS_TO_CHECK) {
    var fieldInvalid = false;
    FIELD_IDS_TO_CHECK.forEach(function (field) {
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

  var clearErrors = function clearErrors(FIELD_IDS_TO_CHECK) {
    FIELD_IDS_TO_CHECK.forEach(function (field) {
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

  var hideCCError = function hideCCError() {
    document.getElementById("paymentError").style.display = "none";
  };

  var errorWithCard = function errorWithCard() {
    return document.getElementById("paymentError").textContent.toLowerCase().includes("error processing card");
  };

  document.addEventListener("click", function (e) {
    if (e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && !ORDER_SUBMITTED || e.target.id == "placeOrderBtn" && !MODAL_IS_VISIBLE && ORDER_SUBMITTED && document.getElementById("paymentError").style.display !== "none") {
      if (!checkFormComplete() || errorWithCard()) {
        return true;
      } else {
        e.preventDefault();
        clearErrors(FIELD_IDS_TO_CHECK);
        var fieldInvalid = checkAddErrors(FIELD_IDS_TO_CHECK);

        if (!fieldInvalid) {
          clearErrors(FIELD_IDS_TO_CHECK);
          showModal();
        }
      }
    } else if (e.target.id === "ESX192_PlaceOrderButton") {
      submitOrder();
    } else if (e.target.id === "ESX192_CloseModalButton") {
      closeModal();
    }
  });
};

var ESX192WaitLoop = function ESX192WaitLoop() {
  var wait = setInterval(function () {
    if (typeof window.jQuery !== "undefined") {
      clearInterval(wait);
      var $ = window.jQuery;
      ESX192($);
    }
  }, 50);
};

if (document.readyState === "complete") {
  ESX192WaitLoop();
} else {
  document.addEventListener("DOMContentLoaded", ESX192WaitLoop);
}